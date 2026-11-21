// Capa de rotulación y símbolos que se dibuja encima del fondo pintado de cada variante. Todo es SVG.
import { W, H, pathD, smoothPath, r1 } from "./geo.mjs";
import { landD, sitiosDe, rupturasDe, puntos } from "./terreno.mjs";
import { regiones, ruinas, caminos, anillo, sitiosBase } from "./comun.mjs";
import { ICONOS, iconoRuptura } from "./iconos.mjs";
import { mix } from "./estilos.mjs";

const F = { titulo: "'Cinzel Decorative','Cinzel',serif", rot: "'Cinzel','Cormorant Garamond',serif", cuerpo: "'Cormorant Garamond',Georgia,serif" };

function txt(s, t, x, y, o = {}) {
  const size = o.size ?? 16, fam = o.fam ?? F.cuerpo, w = o.w ?? 600, fill = o.fill ?? s.ink, anchor = o.anchor ?? "middle";
  const sp = o.sp ?? 0, st = o.italic ? "italic" : "normal", rot = o.rot ? ` transform="rotate(${o.rot} ${r1(x)} ${r1(y)})"` : "";
  const halo = o.halo === false ? "" : `paint-order="stroke" stroke="${s.halo}" stroke-width="${o.haloW ?? s.haloW}" stroke-linejoin="round"`;
  const op = o.op != null ? ` opacity="${o.op}"` : "";
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" font-family="${fam}" font-size="${size}" font-weight="${w}" font-style="${st}" letter-spacing="${sp}" fill="${fill}" ${halo}${op}${rot}>${t}</text>`;
}

function barco(s) {
  return `<g stroke="${s.ink}" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round" fill="${s.iconFill}">
  <path d="M-13 3h26l-5 6h-16Z"/><path d="M0 3V-15"/><path d="M0 -14Q9 -9 8 0H0Z"/><path d="M0 -12Q-8 -8 -7 0H0Z"/><path d="M0 -15l5 1.6L0 -11.6" fill="${s.accentRed}"/></g>`;
}

function rosa(s) {
  const pts = (r, R, n, rot = 0) => Array.from({ length: n * 2 }, (_, i) => {
    const a = (Math.PI * i) / n + rot - Math.PI / 2, rr = i % 2 ? r : R;
    return `${r1(Math.cos(a) * rr)} ${r1(Math.sin(a) * rr)}`;
  });
  const star = (r, R, n, rot) => "M" + pts(r, R, n, rot).join("L") + "Z";
  return `<g stroke="${s.ink}" stroke-linejoin="round">
  <circle r="74" fill="none" stroke-width="1.4" opacity=".7"/><circle r="64" fill="none" stroke-width=".8" opacity=".6"/>
  <path d="${star(11, 60, 4, Math.PI / 4)}" fill="${s.iconFill}" fill-opacity=".55" stroke-width="1"/>
  <path d="${star(14, 74, 4, 0)}" fill="${s.iconFill}" stroke-width="1.4"/>
  <path d="M0 -74L9 -14L0 0Z M0 74L-9 14L0 0Z M74 0L14 9L0 0Z M-74 0L-14 -9L0 0Z" fill="${s.ink}" stroke="none"/>
  <circle r="5" fill="${s.accentRed}" stroke-width="1.2"/></g>
  <text y="-84" text-anchor="middle" font-family="${F.rot}" font-size="22" font-weight="700" fill="${s.ink}" paint-order="stroke" stroke="${s.halo}" stroke-width="4">N</text>`;
}

export function overlaySVG(s, v) {
  const o = [];
  const sitios = sitiosDe(v), rupts = rupturasDe(v);
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  o.push(`<defs><clipPath id="land"><path d="${landD(v)}"/></clipPath>`);
  v.rios.filter((r) => r.name).forEach((r) => o.push(`<path id="rio-${r.id}" d="${smoothPath(r.pts)}"/>`));
  o.push(`<linearGradient id="fe" x1="0" x2="1"><stop offset="0" stop-color="#070b1c" stop-opacity="0"/><stop offset="1" stop-color="#070b1c" stop-opacity=".66"/></linearGradient>`);
  o.push(`<linearGradient id="fn" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#070b1c" stop-opacity="0"/><stop offset="1" stop-color="#070b1c" stop-opacity=".66"/></linearGradient></defs>`);

  // Reinos y territorios: tinte suave y frontera de trazos
  o.push(`<g clip-path="url(#land)">`);
  regiones.forEach((g) => {
    const d = pathD(g.poly);
    o.push(`<path d="${d}" fill="${g.color}" fill-opacity="${s.realmAlpha}"/>`);
    o.push(`<path d="${d}" fill="none" stroke="${s.halo}" stroke-width="5.2" stroke-linejoin="round"/>`);
    o.push(`<path d="${d}" fill="none" stroke="${mix(g.color, "#ffffff", 0.18)}" stroke-opacity="${s.borderAlpha}" stroke-width="2.4" stroke-dasharray="${g.id === "sur" ? "2 7" : "11 6"}" stroke-linejoin="round" stroke-linecap="round"/>`);
  });
  o.push(`</g>`);

  // Tierras sin cartografiar: el mapa se apaga hacia el este y el norte
  o.push(`<rect x="${W - 260}" y="0" width="260" height="${H}" fill="url(#fe)"/>`);
  o.push(`<rect x="0" y="0" width="${W}" height="150" fill="url(#fn)"/>`);

  // Frontera de Varek's Hold
  const cx = 808, cy = 780, rr = 92;
  const a0 = (-160 * Math.PI) / 180, a1 = (-20 * Math.PI) / 180;
  const p0 = [cx + Math.cos(a0) * rr, cy + Math.sin(a0) * rr], p1 = [cx + Math.cos(a1) * rr, cy + Math.sin(a1) * rr];
  o.push(`<path d="M${r1(p0[0])} ${r1(p0[1])}A${rr} ${rr} 0 0 1 ${r1(p1[0])} ${r1(p1[1])}" fill="none" stroke="${s.halo}" stroke-width="5"/>`);
  o.push(`<path d="M${r1(p0[0])} ${r1(p0[1])}A${rr} ${rr} 0 0 1 ${r1(p1[0])} ${r1(p1[1])}" fill="none" stroke="${s.accentRed}" stroke-width="2.4" stroke-dasharray="3 6" stroke-linecap="round"/>`);
  o.push(txt(s, "la frontera", cx + 72, cy - 76, { size: 14, italic: true, w: 600, fill: s.accentRed, rot: 32 }));

  // Caminos (los de cada puerto salen hacia la ciudad más cercana)
  const ruta = (a, b) => {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    return [a, [mx - (dy / l) * 14, my + (dx / l) * 14], b];
  };
  const vias = [...caminos];
  sitios.filter((c) => c.kind === "port").forEach((pt) => {
    let best = null;
    sitiosBase.filter((c) => c.kind !== "village" && c.kind !== "hold").forEach((c) => {
      const d = Math.hypot(c.p[0] - pt.p[0], c.p[1] - pt.p[1]);
      if (!best || d < best.d) best = { d, c };
    });
    if (best && best.d < 520) vias.push(ruta(pt.p, best.c.p));
  });
  vias.forEach((c) => {
    o.push(`<path d="${smoothPath(c)}" fill="none" stroke="${s.halo}" stroke-width="4.4" stroke-linecap="round"/>`);
    o.push(`<path d="${smoothPath(c)}" fill="none" stroke="${s.road}" stroke-opacity=".85" stroke-width="2.2" stroke-dasharray="1.5 7" stroke-linecap="round"/>`);
  });

  // Rótulos de naturaleza y de mares
  const nat = { italic: true, w: 600, fill: s.ink };
  v.rotulos.forEach((r) => o.push(txt(s, r.t, r.x, r.y, { ...nat, size: r.size ?? 15, sp: r.sp ?? 0, rot: r.rot })));
  v.rios.filter((r) => r.name).forEach((r, i) => {
    o.push(`<text font-family="${F.cuerpo}" font-size="14" font-style="italic" font-weight="600" fill="${s.ink}" paint-order="stroke" stroke="${s.halo}" stroke-width="3.6"><textPath href="#rio-${r.id}" startOffset="${i ? 14 : 46}%">${r.name}</textPath></text>`);
  });
  v.mares.forEach((m) => {
    if (m.plain) o.push(txt(s, m.t, m.x, m.y, { size: m.size, italic: true, w: 600, fill: s.seaText, halo: false, op: 0.95, rot: m.rot }));
    else o.push(txt(s, m.t, m.x, m.y, { size: m.size, sp: m.sp, fam: F.rot, w: 500, fill: s.seaText, halo: false, op: 0.95, rot: m.rot }));
  });

  // Barcos
  [[160, 340, 0.9], [150, 560, 0.8], [520, 1010, 0.8], [1100, 1035, 0.9], [1580, 1020, 0.8]].forEach(([x, y, k]) => o.push(`<g transform="translate(${x} ${y}) scale(${k})" opacity=".92">${barco(s)}</g>`));

  // Ruinas primordiales
  ruinas.forEach((r) => {
    o.push(`<g transform="translate(${r.p[0]} ${r.p[1]})">${ICONOS.ruin(s)}</g>`);
    o.push(txt(s, r.name, r.p[0] + r.dx, r.p[1] + r.dy + 8, { size: 13, italic: true, w: 600 }));
  });

  // Polvo dentro del anillo del Muro: lo que se borró, sin que se sepa qué era
  {
    const [dx, dy] = anillo.c;
    o.push(`<defs><radialGradient id="polvo"><stop offset="0" stop-color="#8e897f" stop-opacity=".95"/><stop offset=".72" stop-color="#7d786e" stop-opacity=".92"/><stop offset="1" stop-color="#6d695f" stop-opacity="0"/></radialGradient></defs>`);
    o.push(`<circle cx="${dx}" cy="${dy}" r="84" fill="url(#polvo)"/>`);
    puntos([dx, dy], 74, 260, 5).forEach(([x, y, k]) => o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(k * 0.7)}" fill="${k > 1.6 ? "#4d4a43" : "#d9d3c4"}" opacity=".55"/>`));
  }

  // Rupturas
  rupts.forEach((r) => {
    o.push(`<g transform="translate(${r.p[0]} ${r.p[1]})">${iconoRuptura(r.type, s, 1)}</g>`);
    if (!r.hideLabel) {
      const tc = mix(s.accent[r.type], "#ffffff", 0.35);
      o.push(txt(s, r.name, r.p[0] + r.dx, r.p[1] + r.dy + (r.anchor === "start" ? 4 : 10), { size: 15, w: 700, fill: tc, anchor: r.anchor ?? "middle", fam: F.rot, sp: 0.6 }));
    }
  });

  // Ciudades, puertos y aldeas
  sitios.forEach((c) => {
    const sc = c.kind === "capital" ? 1.25 : c.kind === "hold" ? 1.45 : c.kind === "village" ? 1.05 : 1;
    o.push(`<g transform="translate(${r1(c.p[0])} ${r1(c.p[1])}) scale(${sc})">${ICONOS[c.kind](s)}</g>`);
    const size = c.kind === "capital" ? 22 : c.kind === "hold" ? 23 : c.kind === "port" ? 15 : 17;
    const bold = ["capital", "hold", "state", "academy"].includes(c.kind);
    o.push(txt(s, c.name, c.p[0] + (c.dx ?? 0), c.p[1] + (c.dy ?? 22) + (c.kind === "hold" ? 0 : 4), {
      size, fam: bold ? F.rot : F.cuerpo, w: bold ? 700 : 600, italic: c.kind === "port" || c.italic, sp: bold ? 1.2 : 0.3,
    }));
    if (c.sub) o.push(txt(s, c.sub, c.p[0] + (c.dx ?? 0), c.p[1] + (c.dy ?? 22) + 20, { size: 13, italic: true, w: 600 }));
  });

  // El Muro
  o.push(txt(s, "EL MURO", anillo.c[0] - anillo.r - 22, anillo.c[1] - 48, { size: 15, fam: F.rot, sp: 3, anchor: "end", fill: s.accentRed, w: 700 }));

  // Nombres de reinos
  regiones.filter((g) => g.id !== "varek" && g.id !== "keth").forEach((g) => {
    const col = s.realmText(g.color);
    const big = g.id === "drath" ? 42 : g.id === "elos" ? 22 : 24;
    const sp = g.id === "drath" ? 16 : g.id === "elos" ? 6 : 7;
    const lines = g.name.split("|");
    lines.forEach((ln, i) => o.push(txt(s, ln, g.label[0], g.label[1] + i * big * 1.1, { size: big, fam: F.rot, w: 700, sp, fill: col, rot: g.rot, op: 0.95, haloW: 5 })));
    if (g.sub) o.push(txt(s, g.sub, g.label[0], g.label[1] + (lines.length - 1) * big * 1.1 + (g.id === "drath" ? 28 : 22), { size: 17, italic: true, w: 600, fill: col, rot: g.rot, op: 0.92 }));
  });

  // Más allá del mapa
  o.push(txt(s, "TIERRAS SIN CARTOGRAFIAR", W - 44, 560, { size: 19, fam: F.rot, w: 500, sp: 9, fill: s.seaText, halo: false, op: 0.8, rot: 90 }));
  o.push(txt(s, "más allá, tierras que nadie ha dibujado", 1210, 58, { size: 15, italic: true, w: 600, fill: s.seaText, halo: false, op: 0.8 }));

  // Marco, título, rosa, escala, leyenda
  o.push(`<rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${s.ink}" stroke-width="2.4" opacity=".85"/>`);
  o.push(`<rect x="24" y="24" width="${W - 48}" height="${H - 48}" fill="none" stroke="${s.ink}" stroke-width="0.9" opacity=".6"/>`);
  o.push(txt(s, "ÉREBO", 46, 92, { size: 70, fam: F.titulo, w: 700, anchor: "start", fill: s.titleFill, sp: 6, halo: false }));
  o.push(`<path d="M50 112H400" stroke="${s.ink}" stroke-width="1.4" opacity=".8"/><path d="M50 118H400" stroke="${s.ink}" stroke-width=".7" opacity=".6"/>`);
  o.push(txt(s, "EL CONTINENTE · BOCETO", 50, 142, { size: 15, fam: F.rot, w: 600, anchor: "start", fill: s.titleSub, sp: 3, halo: false }));
  o.push(`<g transform="translate(112 292)">${rosa(s)}</g>`);
  o.push(escala(s, 1040, 1040));
  o.push(leyenda(s));
  o.push(txt(s, `Versión ${v.id} · ${v.nombre} · nombres y lugares provisionales`, 800, 1066, { size: 13, italic: true, w: 600, fill: s.titleSub, op: 0.95, haloW: 3 }));
  o.push(`</svg>`);
  return o.join("\n");
}

function escala(s, x, y) {
  let seg = "";
  for (let i = 0; i < 4; i++) seg += `<rect x="${x + i * 50}" y="${y}" width="50" height="7" fill="${i % 2 ? s.iconFill : s.ink}" stroke="${s.ink}" stroke-width="1.2"/>`;
  return `<g>${seg}${txt(s, "0", x, y + 24, { size: 13, halo: false })}${txt(s, "100", x + 100, y + 24, { size: 13, halo: false })}${txt(s, "200 leguas", x + 200, y + 24, { size: 13, halo: false, italic: true })}</g>`;
}

export const RUPT_LEYENDA = [["muro", "Ruptura del Muro", "el borrado"], ["eryn", "Ruptura de Eryn", "la selva"], ["orum", "Ruptura de Orum", "las máquinas"], ["sael", "Ruptura de Sael", "las aguas"], ["varek", "Ruptura de Varek", "la piedra"], ["kael", "Ruptura de Kael", "la mente"], ["vael", "Ruptura de Vael", "el instante"]];

function leyenda(s) {
  const x0 = 38, y0 = 820, w = 450, h = 248;
  const o = [];
  o.push(`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="4" fill="${s.legendBg}" stroke="${s.legendInk}" stroke-width="1.6"/>`);
  o.push(`<rect x="${x0 + 6}" y="${y0 + 6}" width="${w - 12}" height="${h - 12}" rx="2" fill="none" stroke="${s.legendInk}" stroke-width=".7" opacity=".6"/>`);
  o.push(txt(s, "LEYENDA", x0 + 22, y0 + 32, { size: 15, fam: F.rot, w: 700, sp: 4, anchor: "start", halo: false, fill: s.legendInk }));
  const filas = [["capital", "Capital del reino"], ["city", "Ciudad"], ["port", "Puerto libre"], ["state", "Ciudad-estado"], ["academy", "Federación académica"], ["village", "Aldea"], ["ruin", "Ruina primordial"], ["hold", "Varek's Hold"]];
  filas.forEach(([k, n], i) => {
    const y = y0 + 62 + i * 20.5;
    o.push(`<g transform="translate(${x0 + 32} ${y - 2}) scale(${k === "hold" ? 0.5 : k === "capital" ? 0.62 : 0.72})">${ICONOS[k](s)}</g>`);
    o.push(txt(s, n, x0 + 58, y + 3, { size: 14.5, anchor: "start", halo: false, fill: s.legendInk }));
  });
  const yF = y0 + 62 + 8 * 20.5;
  o.push(`<path d="M${x0 + 20} ${yF}h26" stroke="${s.accentRed}" stroke-width="2.2" stroke-dasharray="3 6" stroke-linecap="round"/>`);
  o.push(txt(s, "frontera", x0 + 58, yF + 4, { size: 14.5, anchor: "start", halo: false, fill: s.legendInk }));
  o.push(txt(s, "RUPTURAS", x0 + 248, y0 + 32, { size: 15, fam: F.rot, w: 700, sp: 4, anchor: "start", halo: false, fill: s.legendInk }));
  RUPT_LEYENDA.forEach(([k, n, sub], i) => {
    const y = y0 + 64 + i * 25.5;
    o.push(`<g transform="translate(${x0 + 266} ${y - 3}) scale(.42)">${iconoRuptura(k, s, 1)}</g>`);
    o.push(txt(s, n, x0 + 290, y - 1, { size: 14, anchor: "start", halo: false, fill: s.legendInk, w: 700 }));
    o.push(txt(s, sub, x0 + 290, y + 11, { size: 12.5, anchor: "start", halo: false, fill: s.legendInk, italic: true }));
  });
  return o.join("\n");
}

export function composicionHTML(s, v, aiFile) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>Érebo · versión ${v.id}</title>
<style>@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');
html,body{margin:0;background:#000}.m{position:relative;width:${W}px;height:${H}px;overflow:hidden}.m img,.m svg{position:absolute;left:0;top:0;width:${W}px;height:${H}px;display:block}</style></head>
<body><div class="m"><img src="../ai/${aiFile}">${overlaySVG(s, v)}</div></body></html>`;
}
