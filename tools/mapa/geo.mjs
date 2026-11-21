// Geometría común del mapa de Érebo: generador con semilla, costa fractal, caminos suaves y utilidades.
export const W = 1600, H = 1100;

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const r1 = (n) => Math.round(n * 10) / 10;

/* Desplazamiento del punto medio sobre un polígono cerrado: da una costa irregular pero controlada. */
export function displace(pts, rnd, amp, iters) {
  let p = pts;
  for (let it = 0; it < iters; it++) {
    const out = [];
    for (let i = 0; i < p.length; i++) {
      const a = p[i], b = p[(i + 1) % p.length];
      out.push(a);
      const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
      const k = (rnd() - 0.5) * 2 * amp * len;
      out.push([(a[0] + b[0]) / 2 - (dy / len) * k, (a[1] + b[1]) / 2 + (dx / len) * k]);
    }
    p = out;
    amp *= 0.62;
  }
  return p;
}

export function chaikin(pts, n = 2, closed = true) {
  let p = pts;
  for (let k = 0; k < n; k++) {
    const out = [];
    const m = p.length;
    for (let i = 0; i < (closed ? m : m - 1); i++) {
      const a = p[i], b = p[(i + 1) % m];
      out.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25]);
      out.push([a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
    }
    if (!closed) { out.unshift(p[0]); out.push(p[m - 1]); }
    p = out;
  }
  return p;
}

export function pathD(pts, closed = true) {
  return pts.map((p, i) => (i ? "L" : "M") + r1(p[0]) + " " + r1(p[1])).join("") + (closed ? "Z" : "");
}

/* Curva suave por puntos de control (Catmull-Rom a Bézier) para ríos y caminos. */
export function smoothPath(pts) {
  if (pts.length < 3) return pathD(pts, false);
  let d = "M" + r1(pts[0][0]) + " " + r1(pts[0][1]);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${r1(c1[0])} ${r1(c1[1])} ${r1(c2[0])} ${r1(c2[1])} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return d;
}

export function pip(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/* Blob orgánico (bosques, manchas de niebla): radios con ruido alrededor de un centro. */
export function blob(cx, cy, rx, ry, seed, n = 26, rough = 0.28) {
  const rnd = rng(seed);
  const pts = [];
  const ph = [rnd() * 6, rnd() * 6, rnd() * 6];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + rough * (Math.sin(a * 3 + ph[0]) * 0.5 + Math.sin(a * 5 + ph[1]) * 0.3 + Math.sin(a * 2 + ph[2]) * 0.4) + (rnd() - 0.5) * rough * 0.5;
    pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return chaikin(pts, 2, true);
}

export function distToPoly(pt, poly) {
  let best = Infinity, bp = null;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const t = Math.max(0, Math.min(1, ((pt[0] - a[0]) * dx + (pt[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
    const q = [a[0] + dx * t, a[1] + dy * t];
    const d = Math.hypot(pt[0] - q[0], pt[1] - q[1]);
    if (d < best) { best = d; bp = q; }
  }
  return { d: best, p: bp };
}
