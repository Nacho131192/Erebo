// Terreno generado con semilla: costa, islas, cimas de montaña, bosques y lagos. Todo determinista.
import { W, H, rng, displace, chaikin, pathD, smoothPath, blob, pip, r1, distToPoly } from "./geo.mjs";
import { coastCtl, islas, bosques, montes, lagos, rios, bosqueBlob, brumaTras } from "./datos.mjs";

let _costa = null;
export function costa() {
  if (_costa) return _costa;
  const rnd = rng(7);
  const rough = displace(coastCtl, rnd, 0.15, 4);
  _costa = chaikin(rough, 2, true);
  return _costa;
}
export const landD = () => pathD(costa());

export function islasPolys() {
  return islas.map((i) => blob(i.c[0], i.c[1], i.r[0], i.r[1], i.s, 18, 0.35));
}

/* Cimas: lista [x, y, tamaño] ordenada por y para que las de delante tapen a las de atrás. */
export function cimas() {
  const out = [];
  montes.forEach((m, mi) => {
    const rnd = rng(100 + mi);
    for (let i = 0; i < m.pts.length - 1; i++) {
      const a = m.pts[i], b = m.pts[i + 1];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const n = Math.max(3, Math.round(len / (22 * m.size)));
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        for (let row = 0; row < 2; row++) {
          const jx = (rnd() - 0.5) * 22, jy = (rnd() - 0.5) * 16 + row * 22 * m.size;
          const sz = (16 + rnd() * 14) * m.size * (row ? 0.82 : 1);
          out.push([a[0] + (b[0] - a[0]) * t + jx, a[1] + (b[1] - a[1]) * t + jy, sz]);
        }
      }
    }
  });
  return out.sort((p, q) => p[1] - q[1]);
}

export function arbolitos(b, density = 0.0016) {
  const rnd = rng(b.s * 7 + 3);
  const poly = bosqueBlob(b);
  const pts = [];
  const area = Math.PI * b.r[0] * b.r[1];
  const n = Math.round(area * density * (b.kind === "eryn" ? 1.5 : 1));
  let tries = 0;
  while (pts.length < n && tries++ < n * 30) {
    const x = b.c[0] + (rnd() - 0.5) * 2 * b.r[0] * 1.2, y = b.c[1] + (rnd() - 0.5) * 2 * b.r[1] * 1.2;
    if (pip([x, y], poly)) pts.push([x, y, 6 + rnd() * 5]);
  }
  return pts.sort((p, q) => p[1] - q[1]);
}

export function lagoPolys() {
  return lagos.map((l) => ({ l, poly: blob(l.c[0], l.c[1], l.r[0], l.r[1], l.s, 20, 0.25) }));
}

export function enLand(p) { return pip(p, costa()); }

/* Lleva un punto a la costa más cercana y lo mete unos píxeles tierra adentro (para los puertos). */
export function anclar(p, dentro = 11) {
  const { p: q } = distToPoly(p, costa());
  let best = null;
  for (let a = 0; a < 360; a += 15) {
    const t = [q[0] + Math.cos((a * Math.PI) / 180) * dentro, q[1] + Math.sin((a * Math.PI) / 180) * dentro];
    if (!pip(t, costa())) continue;
    const d = Math.hypot(t[0] - p[0], t[1] - p[1]);
    if (!best || d < best.d) best = { d, t };
  }
  return best ? best.t : q;
}

export function sitiosFinales(lista) {
  return lista.map((s) => (s.kind === "port" ? { ...s, p: anclar(s.p) } : s));
}

/* Muro: línea gruesa que cruza el istmo. */
export const muro = { a: [718, 842], b: [904, 842] };

/* ---------- Mapa de referencia (colores planos, sin texto) para que la IA lo repinte en cada estilo ---------- */
export function refSVG() {
  const o = [];
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  o.push(`<rect width="${W}" height="${H}" fill="#35688f"/>`);
  o.push(`<path d="${landD()}" fill="#d9c995" stroke="#f3ead0" stroke-width="5" stroke-linejoin="round"/>`);
  islasPolys().forEach((p) => o.push(`<path d="${pathD(p)}" fill="#d9c995" stroke="#f3ead0" stroke-width="4"/>`));
  // niebla tras el Muro (península)
  const bn = blob(brumaTras.c[0], brumaTras.c[1], brumaTras.r[0], brumaTras.r[1], brumaTras.s, 22, 0.2);
  o.push(`<g clip-path="url(#land)"><path d="${pathD(bn)}" fill="#5e544c"/></g>`);
  o.push(`<defs><clipPath id="land"><path d="${landD()}"/></clipPath></defs>`);
  // bosques
  bosques.forEach((b) => {
    o.push(`<path d="${pathD(bosqueBlob(b))}" fill="${b.kind === "eryn" ? "#2d6a3a" : "#3b7a45"}" opacity="0.95"/>`);
    arbolitos(b).forEach(([x, y, s]) => o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(s * 0.6)}" fill="#1f4f2b"/>`));
  });
  // lagos y ríos
  lagoPolys().forEach(({ poly }) => o.push(`<path d="${pathD(poly)}" fill="#35688f" stroke="#f3ead0" stroke-width="2.5"/>`));
  rios.forEach((r) => o.push(`<path d="${smoothPath(r.pts)}" fill="none" stroke="#35688f" stroke-width="4" stroke-linecap="round"/>`));
  // montañas
  cimas().forEach(([x, y, s]) => {
    o.push(`<path d="M${r1(x - s)} ${r1(y + s * 0.7)} L${r1(x)} ${r1(y - s)} L${r1(x + s)} ${r1(y + s * 0.7)}Z" fill="#8f8f8f"/>`);
    o.push(`<path d="M${r1(x)} ${r1(y - s)} L${r1(x + s)} ${r1(y + s * 0.7)} L${r1(x + s * 0.1)} ${r1(y + s * 0.7)}Z" fill="#5f5f66"/>`);
  });
  // Muro
  o.push(`<line x1="${muro.a[0]}" y1="${muro.a[1]}" x2="${muro.b[0]}" y2="${muro.b[1]}" stroke="#3b3b40" stroke-width="22" stroke-linecap="round"/>`);
  o.push(`</svg>`);
  return o.join("\n");
}
