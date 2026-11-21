// Lo que comparten todas las variantes del mapa: reinos, ciudades, caminos y Rupturas.
// Todo lo que no sea de EREBO_CONTEXTO.md ni de decisiones de Nacho es PROPUESTA.

/* Reinos y territorios (BASE de EREBO_CONTEXTO.md). */
export const regiones = [
  { id: "sur", name: "TERRITORIOS DEL SUR", sub: "sin gobierno", color: "#7c6a8f", label: [470, 748], rot: -4,
    poly: [[285, 640], [340, 592], [520, 585], [570, 562], [660, 552], [780, 576], [930, 586], [1050, 552], [1150, 640], [1215, 700], [1320, 745], [1215, 780], [1130, 765], [1075, 795], [1000, 805], [940, 820], [892, 812], [724, 812], [670, 820], [600, 810], [520, 785], [445, 815], [380, 790], [320, 730]] },
  { id: "drath", name: "DRATH", sub: "el único reino", color: "#b3392f", label: [860, 330], rot: 0,
    poly: [[590, 215], [1000, 190], [1135, 250], [1155, 335], [1135, 450], [1050, 545], [930, 578], [780, 568], [650, 545], [572, 470], [555, 330]] },
  { id: "elos", name: "FEDERACIÓN|DE ELOS", sub: "alianza académica", color: "#2f8f9d", label: [1252, 524], rot: 0,
    poly: [[1150, 335], [1262, 300], [1345, 352], [1392, 450], [1405, 540], [1352, 640], [1262, 695], [1172, 648], [1142, 545], [1135, 450]] },
  { id: "eryn", name: "BOSQUE DE ERYN", sub: "la Senda de Eryn", color: "#3f8f4e", label: [430, 316], rot: -4,
    poly: [[320, 300], [480, 255], [565, 330], [572, 470], [505, 545], [405, 525], [325, 455]] },
  { id: "keth", name: "KETH MARAN", sub: "ciudad-estado de gremios", color: "#c8892b", label: [372, 590], rot: 0,
    poly: [[320, 548], [385, 522], [440, 545], [455, 595], [402, 626], [330, 612]] },
  { id: "varek", name: "VAREK'S HOLD", sub: "ciudad neutral", color: "#d2b45c", label: [805, 760], rot: 0,
    poly: [[748, 782], [770, 745], [840, 740], [868, 780], [850, 815], [768, 815]] },
];

/* Ciudades y aldeas (los puertos dependen de cada variante). */
export const sitiosBase = [
  { id: "drathgard", name: "Drathgard", kind: "capital", p: [790, 425], dx: 0, dy: 26 },
  { id: "corvale", name: "Corvale", kind: "city", p: [700, 300], dx: 0, dy: 22 },
  { id: "saltwen", name: "Saltwen", kind: "city", p: [945, 360], dx: 8, dy: 22 },
  { id: "mornhal", name: "Mornhal", kind: "city", p: [885, 505], dx: 0, dy: 22 },
  { id: "veldris", name: "Veldris", kind: "city", p: [660, 480], dx: -6, dy: 22 },
  { id: "elos", name: "Elos", kind: "academy", p: [1255, 452], dx: 0, dy: 26 },
  { id: "anthyr", name: "Anthyr", kind: "academy", p: [1322, 392], dx: 4, dy: 24 },
  { id: "quillmar", name: "Quillmar", kind: "academy", p: [1296, 616], dx: 0, dy: 24 },
  { id: "keth", name: "Keth Maran", kind: "state", p: [372, 574], dx: 6, dy: 30, sub: "ciudad-estado de gremios" },
  { id: "varek", name: "Varek's Hold", kind: "hold", p: [808, 778], dx: 0, dy: -46 },
  { id: "pueblo", name: "El pueblo sin nombre", kind: "village", p: [812, 668], dx: 0, dy: 24, italic: true },
  { id: "claro", name: "Claro de las Raíces", kind: "village", p: [545, 472], dx: 0, dy: 22 },
  { id: "vado", name: "Vado Seco", kind: "village", p: [612, 658], dx: 0, dy: -14 },
  { id: "pasolargo", name: "Pasolargo", kind: "village", p: [1020, 745], dx: 0, dy: 22 },
];

export const NOMBRES_PUERTOS = ["Ysmar", "Halden", "Orrin Sal", "Brannoch", "Tessal", "Kovrin"];

export const caminos = [
  [[808, 778], [810, 740], [812, 668], [800, 600], [790, 520], [790, 425]],
  [[790, 425], [745, 360], [700, 300]],
  [[790, 425], [860, 395], [945, 360]],
  [[790, 425], [845, 470], [885, 505]],
  [[790, 425], [725, 455], [660, 480]],
  [[660, 480], [560, 520], [455, 548], [372, 574]],
  [[945, 360], [1060, 400], [1160, 440], [1255, 452]],
  [[1255, 452], [1290, 420], [1322, 392]],
  [[1255, 452], [1280, 540], [1296, 616]],
  [[885, 505], [980, 540], [1100, 590], [1206, 654]],
  [[660, 480], [580, 470], [545, 472]],
  [[812, 668], [720, 660], [612, 658]],
  [[812, 668], [920, 700], [1020, 745]],
];

export const ruinas = [
  { id: "cripta", name: "Cripta Primordial", p: [1005, 252], dx: 0, dy: 20 },
  { id: "tumba", name: "El Hueso Hueco", p: [1030, 395], dx: 0, dy: 20 },
];

/* El Muro: un anillo de muralla; en el centro solo polvo. */
export const anillo = { c: [808, 905], r: 96 };

/* Las siete Rupturas, una por Primordial (Nacho, 2026-11-21). La del Muro aparece dos veces: es la misma. */
export const rupturasBase = [
  { id: "muro", type: "muro", name: "Ruptura del Muro", p: [812, 626], dx: 36, dy: 4, anchor: "start" },
  { id: "muro2", type: "muro", name: "Ruptura del Muro", p: [808, 905], dx: 0, dy: 0, hideLabel: true },
  { id: "eryn", type: "eryn", name: "El Enraizado", p: [455, 424], dx: 0, dy: 38 },
  { id: "orum", type: "orum", name: "Los Engranajes", p: [1206, 654], dx: 0, dy: 36 },
  { id: "varek", type: "varek", name: "El Laberinto de Piedra", p: [1110, 262], dx: 0, dy: 36 },
  { id: "kael", type: "kael", name: "El Coro", p: [960, 112], dx: 0, dy: 38 },
  { id: "vael", type: "vael", name: "El Instante", p: [985, 668], dx: 0, dy: 38 },
];

export const TIPOS_RUPTURA = ["muro", "eryn", "orum", "sael", "varek", "kael", "vael"];
