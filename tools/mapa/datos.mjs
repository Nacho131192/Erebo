// Datos del mapa de Érebo. Todo lo que no viene de decisiones de Nacho es PROPUESTA (ver docs/mapa-erebo.md).
import { blob } from "./geo.mjs";

/* Contorno del continente: un cuerpo ancho que se estrecha en un istmo hacia el sur, donde se levanta el Muro. */
export const coastCtl = [
  [300, 300], [350, 235], [410, 218], [465, 178], [540, 172], [585, 128], [655, 126], [705, 172], [765, 194],
  [800, 212], [840, 196], [880, 148], [945, 118], [1010, 100], [1062, 132], [1100, 188], [1160, 165], [1232, 200],
  [1282, 250], [1312, 312], [1352, 332], [1392, 402], [1388, 470], [1412, 522], [1382, 586], [1352, 640],
  [1332, 700], [1372, 742], [1332, 792], [1270, 782], [1232, 742], [1192, 702], [1160, 724], [1130, 772],
  [1070, 782], [1010, 792], [952, 802], [908, 832], [898, 884], [916, 940], [872, 1010], [800, 1036], [740, 1010],
  [712, 950], [722, 890], [726, 836], [690, 806], [640, 786], [590, 802], [540, 782], [500, 742], [470, 772],
  [430, 802], [380, 792], [340, 742], [300, 702], [275, 650], [245, 612], [300, 598], [352, 578], [290, 552],
  [222, 566], [190, 528], [205, 490], [245, 470], [255, 420],
];

/* Islas pequeñas (centro, radios, semilla). */
export const islas = [
  { c: [1450, 330], r: [34, 22], s: 11 }, { c: [1480, 392], r: [18, 12], s: 12 }, { c: [150, 640], r: [40, 26], s: 13 },
  { c: [120, 700], r: [16, 11], s: 14 }, { c: [1290, 905], r: [46, 28], s: 15 }, { c: [1370, 960], r: [20, 13], s: 16 },
  { c: [520, 92], r: [30, 14], s: 17 }, { c: [200, 250], r: [26, 17], s: 18 },
];

/* Bosques (centro, radios, semilla, tipo). */
export const bosques = [
  { id: "eryn", name: "Bosque de Eryn", c: [440, 405], r: [130, 120], s: 21, kind: "eryn" },
  { id: "b2", c: [600, 330], r: [52, 38], s: 22, kind: "n" },
  { id: "b3", c: [980, 470], r: [60, 44], s: 23, kind: "n" },
  { id: "b4", c: [1110, 690], r: [74, 42], s: 24, kind: "n" },
  { id: "b5", c: [560, 690], r: [64, 40], s: 25, kind: "n" },
  { id: "b6", c: [870, 380], r: [44, 30], s: 26, kind: "n" },
  { id: "b7", c: [1260, 380], r: [40, 30], s: 27, kind: "n" },
  { id: "b8", c: [700, 640], r: [48, 30], s: 28, kind: "n" },
];

/* Cordilleras: puntos por donde se reparten las cimas. */
export const montes = [
  { id: "colmillos", name: "Colmillos del Norte", pts: [[600, 232], [690, 214], [790, 218], [890, 212], [985, 226], [1050, 252]], size: 1.0 },
  { id: "hierro", name: "Montes de Hierro", pts: [[1165, 300], [1215, 340], [1250, 395], [1262, 450]], size: 0.85 },
  { id: "espinazo", name: "El Espinazo", pts: [[470, 548], [510, 575], [560, 592], [610, 600]], size: 0.8 },
  { id: "sur", name: "Cumbres Grises", pts: [[1020, 640], [1075, 618], [1130, 612]], size: 0.6 },
];

/* Lagos y ríos. */
export const lagos = [
  { id: "espejo", name: "Lago Espejo", c: [895, 322], r: [38, 22], s: 31 },
  { id: "tarn", c: [690, 440], r: [22, 13], s: 32 },
  { id: "salobre", name: "Lago Salobre", c: [1160, 545], r: [28, 16], s: 33 },
];
export const rios = [
  { id: "drath", name: "Río Drath", pts: [[850, 245], [835, 300], [800, 380], [770, 450], [700, 505], [610, 535], [510, 550], [430, 562], [372, 572]] },
  { id: "verde", name: "Río Verde", pts: [[1215, 345], [1235, 410], [1275, 465], [1330, 500], [1395, 520]] },
  { id: "salobre", pts: [[900, 335], [930, 430], [975, 540], [1030, 640], [1090, 712], [1140, 758]] },
  { id: "rojo", pts: [[640, 232], [610, 280], [575, 330], [520, 360]] },
];

/* Regiones políticas (de EREBO_CONTEXTO.md): polígonos, color, etiqueta. */
export const regiones = [
  { id: "sur", name: "TERRITORIOS DEL SUR", sub: "sin gobierno", color: "#7c6a8f", label: [500, 706], rot: -4,
    poly: [[285, 640], [340, 592], [520, 585], [570, 562], [660, 552], [780, 576], [930, 586], [1050, 552], [1150, 640], [1215, 700], [1320, 745], [1215, 780], [1130, 765], [1075, 795], [1000, 805], [940, 820], [885, 840], [725, 845], [670, 820], [600, 805], [520, 780], [445, 810], [380, 785], [320, 725]] },
  { id: "drath", name: "DRATH", sub: "el único reino", color: "#b3392f", label: [860, 330], rot: 0,
    poly: [[590, 215], [1000, 190], [1135, 250], [1155, 335], [1135, 450], [1050, 545], [930, 578], [780, 568], [650, 545], [572, 470], [555, 330]] },
  { id: "elos", name: "FEDERACIÓN|DE ELOS", sub: "alianza académica", color: "#2f8f9d", label: [1252, 524], rot: 0,
    poly: [[1150, 335], [1262, 300], [1345, 352], [1392, 450], [1405, 540], [1352, 640], [1262, 695], [1172, 648], [1142, 545], [1135, 450]] },
  { id: "eryn", name: "BOSQUE DE ERYN", sub: "la Senda de Eryn", color: "#3f8f4e", label: [430, 316], rot: -4,
    poly: [[320, 300], [480, 255], [565, 330], [572, 470], [505, 545], [405, 525], [325, 455]] },
  { id: "keth", name: "KETH MARAN", sub: "ciudad-estado de gremios", color: "#c8892b", label: [372, 590], rot: 0,
    poly: [[320, 548], [385, 522], [440, 545], [455, 595], [402, 626], [330, 612]] },
  { id: "varek", name: "VAREK'S HOLD", sub: "ciudad neutral", color: "#d2b45c", label: [805, 760], rot: 0,
    poly: [[748, 800], [770, 760], [840, 755], [868, 795], [850, 830], [768, 830]] },
];

/* Ciudades: kind capital | city | port | state | academy | hold | village. */
export const sitios = [
  { id: "drathgard", name: "Drathgard", kind: "capital", p: [790, 425], dx: 0, dy: 26 },
  { id: "corvale", name: "Corvale", kind: "city", p: [700, 300], dx: 0, dy: 22 },
  { id: "saltwen", name: "Saltwen", kind: "city", p: [945, 360], dx: 8, dy: 22 },
  { id: "mornhal", name: "Mornhal", kind: "city", p: [885, 505], dx: 0, dy: 22 },
  { id: "veldris", name: "Veldris", kind: "city", p: [660, 480], dx: -6, dy: 22 },
  { id: "elos", name: "Elos", kind: "academy", p: [1255, 452], dx: 0, dy: 26 },
  { id: "anthyr", name: "Anthyr", kind: "academy", p: [1322, 392], dx: 4, dy: 24 },
  { id: "quillmar", name: "Quillmar", kind: "academy", p: [1296, 616], dx: 0, dy: 24 },
  { id: "keth", name: "Keth Maran", kind: "state", p: [372, 574], dx: 6, dy: 30, sub: "ciudad-estado de gremios" },
  { id: "varek", name: "Varek's Hold", kind: "hold", p: [808, 798], dx: 0, dy: -50 },
  { id: "pueblo", name: "El pueblo sin nombre", kind: "village", p: [812, 668], dx: 0, dy: 24, italic: true },
  { id: "claro", name: "Claro de las Raíces", kind: "village", p: [545, 472], dx: 0, dy: 22 },
  { id: "ocaso", name: "Ocaso", kind: "ghost", p: [268, 440], dx: 0, dy: 24, italic: true },
  // Seis puertos independientes
  { id: "ysmar", name: "Ysmar", kind: "port", p: [424, 214], dx: 0, dy: -16 },
  { id: "halden", name: "Halden", kind: "port", p: [612, 160], dx: 0, dy: -16 },
  { id: "orrin", name: "Orrin Sal", kind: "port", p: [1098, 172], dx: 0, dy: -16 },
  { id: "brannoch", name: "Brannoch", kind: "port", p: [1398, 520], dx: -10, dy: 22 },
  { id: "tessal", name: "Tessal", kind: "port", p: [1212, 782], dx: 0, dy: 24 },
  { id: "kovrin", name: "Kovrin", kind: "port", p: [446, 812], dx: 0, dy: -16 },
];

/* Rupturas: cinco tipos. «muro» es la que borra; su nombre antiguo no aparece en ningún texto. */
export const rupturas = [
  { id: "muro", type: "muro", name: "Ruptura del Muro", p: [812, 626], dx: 36, dy: 4, anchor: "start" },
  { id: "muro2", type: "muro", name: "Ruptura del Muro", p: [808, 908], dx: 0, dy: 0, hideLabel: true },
  { id: "eryn", type: "eryn", name: "El Enraizado", p: [455, 424], dx: 0, dy: 38 },
  { id: "orum", type: "orum", name: "Los Engranajes", p: [1206, 654], dx: 0, dy: 36 },
  { id: "sael", type: "sael", name: "El Remolino", p: [1330, 868], dx: 0, dy: 38 },
  { id: "varek", type: "varek", name: "El Laberinto de Piedra", p: [1110, 262], dx: 0, dy: 36 },
];

export const ruinas = [
  { id: "cripta", name: "Cripta Primordial", p: [1005, 252], dx: 0, dy: 20 },
  { id: "tumba", name: "El Hueso Hueco", p: [1030, 395], dx: 0, dy: 20 },
];

/* Caminos entre ciudades. */
export const caminos = [
  [[808, 798], [810, 740], [812, 668], [800, 600], [790, 520], [790, 425]],
  [[790, 425], [745, 360], [700, 300]],
  [[790, 425], [860, 395], [945, 360]],
  [[790, 425], [845, 470], [885, 505]],
  [[790, 425], [725, 455], [660, 480]],
  [[660, 480], [560, 520], [455, 548], [392, 568]],
  [[945, 360], [1060, 400], [1160, 440], [1255, 470]],
  [[1255, 470], [1290, 430], [1320, 400]],
  [[1255, 470], [1280, 540], [1295, 595]],
  [[885, 505], [980, 540], [1100, 590], [1215, 628]],
  [[660, 480], [580, 470], [505, 450]],
  [[808, 798], [900, 780], [1000, 770], [1100, 770], [1212, 782]],
  [[808, 798], [720, 790], [600, 800], [446, 812]],
];

export const brumaTras = { c: [805, 975], r: [120, 105], s: 41 };

export function bosqueBlob(b) { return blob(b.c[0], b.c[1], b.r[0], b.r[1], b.s, 26, 0.3); }
