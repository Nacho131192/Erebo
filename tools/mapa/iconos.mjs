// Pictogramas del mapa: ciudades, puertos, aldeas y los cinco tipos de Ruptura. Cada función devuelve un <g> centrado en (0,0).
import { r1 } from "./geo.mjs";

const sw = (c, w = 1.5) => `stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

export function iconoCapital(s) {
  const k = `fill="${s.iconFill}" ${sw(s.iconInk, 1.5)}`;
  const m = (x, y) => `<rect x="${x}" y="${y}" width="2.6" height="3.2" fill="${s.iconInk}"/>`;
  return `<g>
  <rect x="-13" y="-4" width="8" height="15" ${k}/><rect x="5" y="-4" width="8" height="15" ${k}/>
  <rect x="-5.5" y="-10" width="11" height="21" ${k}/>
  ${m(-13, -7.2)}${m(-9.6, -7.2)}${m(-6.2, -7.2)}${m(3.6, -7.2)}${m(7, -7.2)}${m(10.4, -7.2)}${m(-5.5, -13.2)}${m(-1.3, -13.2)}${m(2.9, -13.2)}
  <path d="M-2.4 11V5.6a2.4 2.4 0 0 1 4.8 0V11Z" fill="${s.iconInk}"/>
  <path d="M0 -13V-21" ${sw(s.iconInk, 1.3)}/><path d="M0 -21l7 2.6L0 -16Z" fill="${s.accentRed}" ${sw(s.iconInk, 0.8)}/>
  </g>`;
}

export function iconoCiudad(s) {
  return `<g><circle r="9" fill="${s.iconFill}" ${sw(s.iconInk, 1.7)}/>
  <rect x="-3.6" y="-3.5" width="7.2" height="9" fill="${s.iconInk}"/>
  <rect x="-3.6" y="-6.5" width="2" height="3" fill="${s.iconInk}"/><rect x="-0.9" y="-6.5" width="2" height="3" fill="${s.iconInk}"/><rect x="1.6" y="-6.5" width="2" height="3" fill="${s.iconInk}"/>
  <path d="M-1.2 6V2.6a1.2 1.2 0 0 1 2.4 0V6Z" fill="${s.iconFill}"/></g>`;
}

export function iconoPuerto(s) {
  return `<g><circle r="10" fill="${s.iconFill}" ${sw(s.iconInk, 1.7)}/>
  <circle cy="-5.2" r="1.9" fill="none" ${sw(s.iconInk, 1.4)}/>
  <path d="M0 -3.2V6.4M-3.4 -0.6H3.4" ${sw(s.iconInk, 1.5)}/>
  <path d="M-6 2.2Q-5.4 6.9 0 7Q5.4 6.9 6 2.2" fill="none" ${sw(s.iconInk, 1.5)}/>
  <path d="M-6 2.2l-1.9 1.6M6 2.2l1.9 1.6" ${sw(s.iconInk, 1.3)}/></g>`;
}

export function iconoAldea(s) {
  return `<g><path d="M-7 4V-1.5L0 -8l7 6.5V4Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.6)}/>
  <rect x="-1.6" y="0" width="3.2" height="4" fill="${s.iconInk}"/></g>`;
}

export function iconoEstado(s) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [Math.cos(a) * 12, Math.sin(a) * 12];
  });
  return `<g><path d="${pts.map((p, i) => (i ? "L" : "M") + r1(p[0]) + " " + r1(p[1])).join("")}Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.8)}/>
  <path d="M0 -7V6.6M-7 -4.2H7M-4.6 6.6H4.6" ${sw(s.iconInk, 1.5)}/>
  <path d="M-7 -4.2l-3.2 6.6h6.4Z M7 -4.2l-3.2 6.6h6.4Z" fill="${s.iconInk}" fill-opacity=".35" ${sw(s.iconInk, 1.2)}/></g>`;
}

export function iconoAcademia(s) {
  return `<g><circle r="11" fill="${s.iconFill}" ${sw(s.iconInk, 1.7)}/>
  <path d="M0 5.6Q-4.6 2.4 -9 4.6V-4Q-4.6 -6 0 -2.6Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.4)}/>
  <path d="M0 5.6Q4.6 2.4 9 4.6V-4Q4.6 -6 0 -2.6Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.4)}/>
  <path d="M0 -13.5l1.5 3.4 3.4 1.5-3.4 1.5L0 -3.7l-1.5-3.4-3.4-1.5 3.4-1.5Z" transform="translate(0 2)" fill="${s.iconInk}"/></g>`;
}

export function iconoHold(s) {
  const k = `fill="${s.iconFill}" ${sw(s.iconInk, 1.7)}`;
  let mer = "";
  for (let x = -19; x <= 14; x += 6.2) mer += `<rect x="${x}" y="-2" width="3.6" height="3.4" fill="${s.iconInk}"/>`;
  return `<g>
  <rect x="-15" y="-12" width="9" height="15" ${k}/><rect x="6" y="-12" width="9" height="15" ${k}/>
  <rect x="-20" y="0" width="40" height="11" ${k}/>${mer}
  <rect x="-6.5" y="-17" width="13" height="28" ${k}/>
  <rect x="-6.5" y="-20" width="3.4" height="3.4" fill="${s.iconInk}"/><rect x="-1.7" y="-20" width="3.4" height="3.4" fill="${s.iconInk}"/><rect x="3.1" y="-20" width="3.4" height="3.4" fill="${s.iconInk}"/>
  <path d="M-3 11V4a3 3 0 0 1 6 0V11Z" fill="${s.iconInk}"/></g>`;
}

export function iconoRuina(s) {
  return `<g><path d="M-8 9V-6l2.4 -2.4 2.4 2.4V9Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.4)}/>
  <path d="M3 9V-1l2.2 3L7.6 -3V9Z" fill="${s.iconFill}" ${sw(s.iconInk, 1.4)}/>
  <path d="M-10 9H10" ${sw(s.iconInk, 1.6)}/><path d="M-2 9l1.8-2.8L2.4 9" fill="${s.iconInk}" fill-opacity=".5" ${sw(s.iconInk, 1)}/></g>`;
}

export function iconoFantasma(s) {
  return `<g opacity=".95"><circle r="11" fill="${s.iconFill}" fill-opacity=".55" stroke="${s.iconInk}" stroke-width="2.2" stroke-dasharray="2.6 4.2" stroke-linecap="round"/>
  <circle cx="13" cy="-3" r="1.3" fill="${s.iconInk}"/><circle cx="16.5" cy="1" r="1" fill="${s.iconInk}" opacity=".7"/><circle cx="20" cy="-2" r=".8" fill="${s.iconInk}" opacity=".5"/>
  <circle r="2.6" fill="${s.iconInk}" opacity=".55"/></g>`;
}

/* ---------- Rupturas ---------- */
function arco(r, a0, a1) {
  const p0 = [Math.cos(a0) * r, Math.sin(a0) * r], p1 = [Math.cos(a1) * r, Math.sin(a1) * r];
  return `M${r1(p0[0])} ${r1(p0[1])}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${r1(p1[0])} ${r1(p1[1])}`;
}

function glifoMuro(c, s) {
  let corona = "";
  const segs = 9;
  for (let i = 0; i < segs; i++) {
    if (i === 3 || i === 4) continue; // tramos borrados
    const a0 = (i / segs) * Math.PI * 2 + 0.07, a1 = ((i + 1) / segs) * Math.PI * 2 - 0.07;
    corona += `<path d="${arco(15.5, a0, a1)}" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>`;
  }
  return `${corona}<circle r="10.5" fill="${s.dark}"/><circle cx="-2" cy="-2" r="8.6" fill="none" stroke="${c}" stroke-width=".8" stroke-opacity=".6"/>
  <circle cx="19.5" cy="-1" r="1.4" fill="${c}"/><circle cx="23" cy="3" r="1" fill="${c}" opacity=".7"/><circle cx="21" cy="8" r=".8" fill="${c}" opacity=".5"/><circle cx="-19" cy="9" r="1" fill="${c}" opacity=".6"/>`;
}

function glifoEryn(c, s) {
  return `<path d="M0 10V-3" stroke="${s.dark}" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M0 10Q-6 10 -10 5q-3.5 -2 -1 -4.6M0 10Q6 10 10 5q3.5 -2 1 -4.6M0 10Q0 13 -3 14.4" fill="none" stroke="${s.dark}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cy="-9" r="7" fill="${c}"/><circle cx="-7.2" cy="-4.6" r="5" fill="${c}"/><circle cx="7.2" cy="-4.6" r="5" fill="${c}"/>
  <path d="M-2 -1C-6 -3 3 -6 -1 -10M3 3C7 0 0 -3 4 -7" fill="none" stroke="${s.dark}" stroke-width="1.4" stroke-opacity=".7"/>`;
}

function glifoOrum(c, s) {
  const n = 8, pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const w = 0.2;
    [[a - w, 9.4], [a - w * 0.55, 13], [a + w * 0.55, 13], [a + w, 9.4]].forEach(([an, r]) => pts.push([Math.cos(an) * r, Math.sin(an) * r]));
  }
  return `<path d="${pts.map((p, i) => (i ? "L" : "M") + r1(p[0]) + " " + r1(p[1])).join("")}Z" fill="${c}" stroke="${s.dark}" stroke-width="1" stroke-linejoin="round"/>
  <circle r="4" fill="${s.dark}"/><circle r="1.6" fill="${c}"/>
  <path d="M8 6l-2.4 5.2h3.4L5.6 17" fill="none" stroke="${s.spark}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function glifoSael(c, s) {
  let d = "";
  for (let i = 0; i <= 60; i++) {
    const t = i / 60, a = t * Math.PI * 5.2, r = 1.2 + t * 12.8;
    d += (i ? "L" : "M") + r1(Math.cos(a) * r) + " " + r1(Math.sin(a) * r);
  }
  return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M-15 12q3.7 -3.6 7.4 0t7.4 0t7.4 0t7.4 0" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>
  <path d="M-3 -17q4 5 0 8.4q-4 -3.4 0 -8.4Z" fill="${c}" opacity=".9"/>`;
}

function glifoVarek(c, s) {
  const b = (x, y, w, h, rot) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" fill="${c}" stroke="${s.dark}" stroke-width="1.2" transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"/>`;
  return `${b(-12, -13, 12, 8, -9)}${b(2, -8, 12, 9, 7)}${b(-11, 2, 11, 8, -4)}
  <path d="M-1 -4.5L3 -1.4L-1 1.4L2 5" fill="none" stroke="${s.dark}" stroke-width="1.2"/>
  <path d="M-14 15H14" stroke="${s.dark}" stroke-width="1.3" stroke-dasharray="2.5 3.2"/>`;
}

/* Kael: la mente. Una red de nodos enlazados con ondas de pensamiento. */
function glifoKael(c, s) {
  const nodos = [[0, -13], [-12, -4], [12, -4], [-8, 10], [8, 10]];
  const lin = nodos.map(([x, y]) => `M0 -1L${x} ${y}`).join("") + "M0 -13L-12 -4L-8 10L8 10L12 -4Z";
  return `<path d="M-16 -9A18 18 0 0 1 16 -9" fill="none" stroke="${c}" stroke-width="1" stroke-opacity=".55" stroke-dasharray="2 3"/>
  <path d="${lin}" fill="none" stroke="${c}" stroke-width="1.4" stroke-linejoin="round" stroke-opacity=".9"/>
  ${nodos.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${c}" stroke="${s.dark}" stroke-width=".8"/>`).join("")}
  <circle cy="-1" r="4.4" fill="${c}" stroke="${s.dark}" stroke-width="1"/><circle cy="-1" r="1.5" fill="${s.dark}"/>`;
}

/* Vael: el instante. Un reloj de arena detenido, con una gota suspendida en el aire. */
function glifoVael(c, s) {
  return `<path d="M-9 -13H9L1.8 0L9 13H-9L-1.8 0Z" fill="${s.dark}" fill-opacity=".55" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M-6.4 -11H6.4L1.4 -3.4H-1.4Z" fill="${c}"/><path d="M-6.8 11Q0 3.6 6.8 11Z" fill="${c}"/>
  <circle cy="2.2" r="1.7" fill="${c}"/><path d="M-12 -16l-3 -3M12 -16l3 -3M-12 16l-3 3M12 16l3 3" stroke="${c}" stroke-width="1.3" stroke-linecap="round" opacity=".7"/>`;
}

const GLIFOS = { muro: glifoMuro, eryn: glifoEryn, orum: glifoOrum, sael: glifoSael, varek: glifoVarek, kael: glifoKael, vael: glifoVael };

export function iconoRuptura(type, s, size = 1) {
  const c = s.accent[type];
  return `<g transform="scale(${size})">
  <circle r="27" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="1.6" stroke-dasharray="3.2 5" stroke-linecap="round"/>
  <circle r="21" fill="${s.panel}" fill-opacity=".86" stroke="${c}" stroke-width="1.5"/>
  ${GLIFOS[type](c, s)}</g>`;
}

export const ICONOS = { capital: iconoCapital, city: iconoCiudad, port: iconoPuerto, village: iconoAldea, state: iconoEstado, academy: iconoAcademia, hold: iconoHold, ghost: iconoFantasma, ruin: iconoRuina };
