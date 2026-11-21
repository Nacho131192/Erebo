// Terreno de cada variante, generado con semilla: costa, islas, cimas de montaña, bosques, lagos y manchas de yermo o marisma.
import { W, H, rng, displace, chaikin, pathD, smoothPath, blob, pip, r1, distToPoly } from "./geo.mjs";
import { anillo, sitiosBase, NOMBRES_PUERTOS, rupturasBase } from "./comun.mjs";

const cache = new Map();
const fuera = (p) => p[0] < -20 || p[0] > W + 20 || p[1] < -20 || p[1] > H + 20;

export function costa(v) {
  const k = "c" + v.id;
  if (cache.has(k)) return cache.get(k);
  const rnd = rng(7 + v.id.charCodeAt(0));
  const rough = displace(v.coast, rnd, 0.14, 4, (a, b) => fuera(a) || fuera(b));
  const c = chaikin(rough, 2, true);
  cache.set(k, c);
  return c;
}
export const landD = (v) => pathD(costa(v));
export const enLand = (v, p) => pip(p, costa(v));

export function bosqueBlob(b) { return blob(b.c[0], b.c[1], b.r[0], b.r[1], b.s, 26, 0.3); }

export function islasPolys(v) { return v.islas.map((i) => blob(i.c[0], i.c[1], i.r[0], i.r[1], i.s, 18, 0.35)); }

export function cimas(v) {
  const out = [];
  v.montes.forEach((m, mi) => {
    const rnd = rng(100 + mi * 7);
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
  const n = Math.round(Math.PI * b.r[0] * b.r[1] * density * (b.kind === "eryn" ? 1.5 : 1));
  let tries = 0;
  while (pts.length < n && tries++ < n * 30) {
    const x = b.c[0] + (rnd() - 0.5) * 2 * b.r[0] * 1.2, y = b.c[1] + (rnd() - 0.5) * 2 * b.r[1] * 1.2;
    if (pip([x, y], poly)) pts.push([x, y, 6 + rnd() * 5]);
  }
  return pts.sort((p, q) => p[1] - q[1]);
}

export function lagoPolys(v) { return v.lagos.map((l) => ({ l, poly: blob(l.c[0], l.c[1], l.r[0], l.r[1], l.s, 22, 0.25) })); }
export function manchas(lista) { return (lista || []).map((m) => ({ m, poly: blob(m.c[0], m.c[1], m.r[0], m.r[1], m.s, 24, 0.3) })); }

/* Puntos sueltos (polvo del anillo, juncos, dunas) con semilla. */
export function puntos(c, r, n, seed) {
  const rnd = rng(seed);
  const out = [];
  while (out.length < n) {
    const x = c[0] + (rnd() * 2 - 1) * r, y = c[1] + (rnd() * 2 - 1) * r;
    if (Math.hypot(x - c[0], y - c[1]) < r) out.push([x, y, 0.8 + rnd() * 1.8]);
  }
  return out;
}

/* Lleva un punto a la costa más cercana y lo mete unos píxeles tierra adentro (para los puertos). */
export function anclar(v, p, dentro = 11) {
  const { p: q } = distToPoly(p, costa(v));
  let best = null;
  for (let a = 0; a < 360; a += 15) {
    const t = [q[0] + Math.cos((a * Math.PI) / 180) * dentro, q[1] + Math.sin((a * Math.PI) / 180) * dentro];
    if (!pip(t, costa(v))) continue;
    const d = Math.hypot(t[0] - p[0], t[1] - p[1]);
    if (!best || d < best.d) best = { d, t };
  }
  return best ? best.t : q;
}

/* Todos los sitios de una variante (ciudades comunes + puertos propios, anclados a la costa). */
export function sitiosDe(v) {
  const puertos = NOMBRES_PUERTOS.map((n, i) => {
    const [x, y, dy, dx = 0] = v.puertos[i];
    return { id: n.toLowerCase().replace(/\s/g, ""), name: n, kind: "port", p: anclar(v, [x, y]), dx, dy };
  });
  return [...sitiosBase, ...puertos];
}

export function rupturasDe(v) {
  return [...rupturasBase, { id: "sael", type: "sael", name: "El Remolino", p: v.sael, dx: 0, dy: 38, mar: true }];
}

/* ---------- Mapa de referencia (colores planos, sin texto) para que la IA lo repinta ---------- */
export function refSVG(v) {
  const o = [];
  const cD = landD(v);
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  o.push(`<defs><clipPath id="land"><path d="${cD}"/></clipPath></defs>`);
  o.push(`<rect width="${W}" height="${H}" fill="#35688f"/>`);
  o.push(`<path d="${cD}" fill="#d9c995" stroke="#f3ead0" stroke-width="5" stroke-linejoin="round"/>`);
  islasPolys(v).forEach((p) => o.push(`<path d="${pathD(p)}" fill="#d9c995" stroke="#f3ead0" stroke-width="4"/>`));
  o.push(`<g clip-path="url(#land)">`);
  manchas(v.desiertos).forEach(({ poly }) => o.push(`<path d="${pathD(poly)}" fill="#e3bf80"/>`));
  manchas(v.marismas).forEach(({ m, poly }) => {
    o.push(`<path d="${pathD(poly)}" fill="#4f7f6a"/>`);
    puntos(m.c, Math.max(m.r[0], m.r[1]) * 0.9, 40, m.s).forEach(([x, y]) => o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="2.4" fill="#35688f"/>`));
  });
  v.bosques.forEach((b) => {
    o.push(`<path d="${pathD(bosqueBlob(b))}" fill="${b.kind === "eryn" ? "#2d6a3a" : "#3b7a45"}" opacity="0.95"/>`);
    arbolitos(b).forEach(([x, y, s]) => o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(s * 0.6)}" fill="#1f4f2b"/>`));
  });
  lagoPolys(v).forEach(({ poly }) => o.push(`<path d="${pathD(poly)}" fill="#35688f" stroke="#f3ead0" stroke-width="2.5"/>`));
  v.rios.forEach((r) => o.push(`<path d="${smoothPath(r.pts)}" fill="none" stroke="#35688f" stroke-width="4" stroke-linecap="round"/>`));
  cimas(v).forEach(([x, y, s]) => {
    o.push(`<path d="M${r1(x - s)} ${r1(y + s * 0.7)} L${r1(x)} ${r1(y - s)} L${r1(x + s)} ${r1(y + s * 0.7)}Z" fill="#8f8f8f"/>`);
    o.push(`<path d="M${r1(x)} ${r1(y - s)} L${r1(x + s)} ${r1(y + s * 0.7)} L${r1(x + s * 0.1)} ${r1(y + s * 0.7)}Z" fill="#5f5f66"/>`);
  });
  o.push(`</g>`);
  // El Muro: anillo de piedra que encierra un círculo de polvo gris
  const { c, r } = anillo;
  o.push(`<circle cx="${c[0]}" cy="${c[1]}" r="${r}" fill="#c9c0b0"/>`);
  puntos(c, r - 6, 140, 99).forEach(([x, y, s]) => o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(s)}" fill="${s > 1.8 ? "#a39a8b" : "#e2dccd"}"/>`));
  o.push(`<circle cx="${c[0]}" cy="${c[1]}" r="${r}" fill="none" stroke="#3b3b40" stroke-width="22"/>`);
  o.push(`</svg>`);
  return o.join("\n");
}
