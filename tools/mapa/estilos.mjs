// Los cuatro estilos del mapa: colores de tinta, iconos, halos y acentos de las Rupturas.
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const toHex = (a) => "#" + a.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
export const mix = (a, b, t) => { const x = hex(a), y = hex(b); return toHex(x.map((v, i) => v * (1 - t) + y[i] * t)); };

export const ESTILOS = {
  pergamino: {
    id: "pergamino", titulo: "Pergamino antiguo", ai: "pergamino.jpg",
    ink: "#3b2614", iconInk: "#3b2614", iconFill: "#f1e2bc", accentRed: "#a3322a", dark: "#1e1410", panel: "#f1e2bc", spark: "#b4691b",
    halo: "rgba(244,232,200,.92)", haloW: 4.2, realmAlpha: 0.13, borderAlpha: 0.9, road: "#5a3a1c", legendBg: "rgba(241,226,188,.93)", legendInk: "#3b2614",
    seaText: "#41576a", titleFill: "#3b2614", titleSub: "#5b3d1f",
    accent: { muro: "#6b3f9e", eryn: "#2f7a3a", orum: "#b4691b", sael: "#1d7a96", varek: "#6b655b", kael: "#b8337f", vael: "#8a7a2a" },
    realmText: (c) => mix(c, "#2a170a", 0.5),
  },
  nocturna: {
    id: "nocturna", titulo: "Carta nocturna azul y oro", ai: "nocturna.jpg",
    ink: "#f0dba0", iconInk: "#f0d58a", iconFill: "#11193a", accentRed: "#e0544a", dark: "#05070f", panel: "#0d1430", spark: "#ffd36a",
    halo: "rgba(5,8,22,.92)", haloW: 4.2, realmAlpha: 0.16, borderAlpha: 0.95, road: "#e8c978", legendBg: "rgba(8,12,32,.9)", legendInk: "#f0dba0",
    seaText: "#8fa6d8", titleFill: "#f4e2ac", titleSub: "#9fb0dd",
    accent: { muro: "#b992ff", eryn: "#5fd48a", orum: "#ffa24a", sael: "#4fd0e8", varek: "#d0cbbf", kael: "#ff7ac8", vael: "#f3e7a6" },
    realmText: (c) => mix(c, "#ffffff", 0.55),
  },
  acuarela: {
    id: "acuarela", titulo: "Tinta y acuarela", ai: "acuarela.jpg",
    ink: "#2a2420", iconInk: "#2a2420", iconFill: "#fbf6e8", accentRed: "#b23b30", dark: "#231c18", panel: "#fbf6e8", spark: "#c27a1b",
    halo: "rgba(252,248,238,.93)", haloW: 4.2, realmAlpha: 0.15, borderAlpha: 0.9, road: "#4a3a2c", legendBg: "rgba(251,246,232,.94)", legendInk: "#2a2420",
    seaText: "#2f6f86", titleFill: "#2a2420", titleSub: "#5b4f45",
    accent: { muro: "#6b3f9e", eryn: "#357a40", orum: "#b8641a", sael: "#1f86a4", varek: "#6f685e", kael: "#b8337f", vael: "#8a7a2a" },
    realmText: (c) => mix(c, "#201a16", 0.42),
  },
  grabado: {
    id: "grabado", titulo: "Grabado oscuro", ai: "grabado.jpg",
    ink: "#ece4d2", iconInk: "#e8dfc9", iconFill: "#141414", accentRed: "#c0392b", dark: "#050505", panel: "#121212", spark: "#d7a53a",
    halo: "rgba(0,0,0,.92)", haloW: 4.4, realmAlpha: 0.2, borderAlpha: 0.95, road: "#d8cfb9", legendBg: "rgba(10,10,10,.9)", legendInk: "#ece4d2",
    seaText: "#b9b3a4", titleFill: "#efe7d4", titleSub: "#a99f8c",
    accent: { muro: "#b08be0", eryn: "#86b87e", orum: "#cf8f48", sael: "#7db0c0", varek: "#bdb7aa", kael: "#e08bc0", vael: "#e6dc9a" },
    realmText: (c) => mix(c, "#ffffff", 0.5),
  },
};
