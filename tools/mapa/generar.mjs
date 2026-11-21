// Uso: node tools/mapa/generar.mjs <orden> [variante]
//   ref [A|B|C|D]      → docs/mapa/v2/ref/ref-<v>.svg y .html (mapa de referencia para la IA)
//   validar [A|B|C|D]  → comprueba que los sitios caen en tierra y las rupturas marinas en el mar
//   componer [A|B|C|D] → docs/mapa/v2/comp/<v>.html (fondo pintado + rótulos)
//   hoja               → docs/mapa/v2/comp/rupturas.html
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { refSVG, enLand, sitiosDe, rupturasDe } from "./terreno.mjs";
import { ruinas } from "./comun.mjs";
import { ESTILOS } from "./estilos.mjs";
import { composicionHTML, overlaySVG } from "./capas.mjs";
import { hojaRupturasHTML } from "./hoja.mjs";
import { VARIANTES } from "./variantes.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const out = (...p) => { const f = path.join(root, "docs/mapa/v2", ...p); fs.mkdirSync(path.dirname(f), { recursive: true }); return f; };
const cmd = process.argv[2];
const ids = process.argv[3] ? [process.argv[3]] : Object.keys(VARIANTES);
const estilo = ESTILOS.nocturna;

if (cmd === "ref") {
  for (const id of ids) {
    fs.writeFileSync(out("ref", `ref-${id}.svg`), refSVG(VARIANTES[id]));
    fs.writeFileSync(out("ref", `ref-${id}.html`), `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#000}</style><img src="ref-${id}.svg" width="1600" height="1100">`);
    console.log("ref", id);
  }
} else if (cmd === "validar") {
  for (const id of ids) {
    const v = VARIANTES[id];
    const mal = [];
    [...sitiosDe(v), ...rupturasDe(v), ...ruinas].forEach((s) => {
      const mar = s.mar === true;
      const tierra = enLand(v, s.p);
      if (mar === tierra) mal.push(`${s.id} (${Math.round(s.p[0])},${Math.round(s.p[1])})${mar ? " debería estar en el mar" : ""}`);
    });
    console.log(id + ": " + (mal.length ? "REVISAR " + mal.join(", ") : "todo en su sitio"));
  }
} else if (cmd === "componer") {
  for (const id of ids) {
    fs.writeFileSync(out("comp", `${id}.html`), composicionHTML(estilo, VARIANTES[id], `nocturna-${id}.jpg`));
    fs.writeFileSync(out("comp", `${id}-capa.svg`), overlaySVG(estilo, VARIANTES[id]));
    console.log("compuesto", id);
  }
} else if (cmd === "hoja") {
  fs.writeFileSync(out("comp", "rupturas.html"), hojaRupturasHTML(estilo, "nocturna-A.jpg"));
  console.log("hoja");
} else {
  console.log("orden desconocida");
}
