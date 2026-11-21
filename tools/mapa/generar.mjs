// Uso: node tools/mapa/generar.mjs <orden> [estilo]
//   ref        → docs/mapa/ref/ref-base.svg
//   validar    → comprueba que los sitios caen en tierra
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { refSVG, enLand, sitiosFinales } from "./terreno.mjs";
import { sitios, rupturas, ruinas } from "./datos.mjs";
import { ESTILOS } from "./estilos.mjs";
import { overlaySVG, composicionHTML } from "./capas.mjs";
import { hojaRupturasHTML } from "./hoja.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const out = (...p) => { const f = path.join(root, "docs/mapa", ...p); fs.mkdirSync(path.dirname(f), { recursive: true }); return f; };
const cmd = process.argv[2];

if (cmd === "ref") {
  fs.writeFileSync(out("ref", "ref-base.svg"), refSVG());
  const html = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:#000}</style><img src="ref-base.svg" width="1600" height="1100">`;
  fs.writeFileSync(out("ref", "ref-base.html"), html);
  console.log("ref escrito");
} else if (cmd === "validar") {
  const marinos = new Set(["muro2", "sael"]);
  const sea = [];
  [...sitiosFinales(sitios), ...rupturas, ...ruinas].forEach((s) => {
    if (!enLand(s.p) && !marinos.has(s.id)) sea.push(`${s.id} (${s.p})`);
  });
  console.log(sea.length ? "FUERA DE TIERRA: " + sea.join(", ") : "todos en tierra");
} else if (cmd === "componer") {
  const nombres = process.argv[3] ? [process.argv[3]] : Object.keys(ESTILOS);
  for (const n of nombres) {
    fs.writeFileSync(out("comp", n + ".html"), composicionHTML(ESTILOS[n]));
    fs.writeFileSync(out("comp", n + "-capa.svg"), overlaySVG(ESTILOS[n]));
    console.log("compuesto", n);
  }
} else if (cmd === "hoja") {
  const nombres = process.argv[3] ? [process.argv[3]] : ["pergamino", "nocturna"];
  for (const n of nombres) {
    fs.writeFileSync(out("comp", "rupturas-" + n + ".html"), hojaRupturasHTML(ESTILOS[n]));
    console.log("hoja", n);
  }
} else {
  console.log("orden desconocida");
}
