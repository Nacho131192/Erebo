// Lámina de las siete Rupturas: qué ocurre en cada una, su pictograma y dónde está en el mapa. Todo es PROPUESTA.
import { iconoRuptura } from "./iconos.mjs";
import { mix } from "./estilos.mjs";

export const RUPTURAS_TEXTO = [
  { t: "muro", n: "Ruptura del Muro", tag: "el borrado", d: "Lo que cae en ella se olvida: primero un nombre, luego un camino, luego a quien lo llevaba. Los registros quedan en blanco, y no es un error.", donde: "El círculo de polvo tras el Muro de Varek's Hold y el pueblo sin nombre, al norte." },
  { t: "eryn", n: "Ruptura de Eryn", tag: "la selva", d: "La vida crece sin freno ni dueño: raíces que caminan, claros que cambian de sitio por la noche y cosechas que se vuelven contra quien las siembra.", donde: "El Enraizado, en el corazón del Bosque de Eryn." },
  { t: "orum", n: "Ruptura de Orum", tag: "las máquinas", d: "Los mecanismos de los antiguos despiertan solos: engranajes que giran sin mano, puertas que se cierran con cálculo y autómatas que repiten una tarea que nadie recuerda.", donde: "Los Engranajes, al sur de la Federación de Elos." },
  { t: "sael", n: "Ruptura de Sael", tag: "las aguas", d: "El agua olvida la luna y la gravedad: mareas a deshora, lluvia que sube, remolinos que no se apagan y una niebla que susurra a los marineros.", donde: "El Remolino, en el mar al sureste." },
  { t: "varek", n: "Ruptura de Varek", tag: "la piedra", d: "Los límites dejan de valer: muros que cambian de sitio, caminos que se cierran a tu espalda y piedra que recuerda su forma anterior y vuelve a ella.", donde: "El Laberinto de Piedra, en los montes del noreste de Drath." },
  { t: "kael", n: "Ruptura de Kael", tag: "la mente", d: "Los pensamientos dejan de ser de uno solo: voces ajenas en la cabeza, emociones que se contagian de un extremo a otro y quien sabe lo que otros sienten sin haberlos visto.", donde: "El Coro, en las tierras altas al norte de Drath." },
  { t: "vael", n: "Ruptura de Vael", tag: "el instante", d: "El tiempo se atasca en un solo momento: un instante que se repite, ecos que no terminan de pasar y objetos suspendidos en el aire como si alguien hubiera dejado de mirar.", donde: "El Instante, en los Territorios del Sur." },
];

export function hojaRupturasHTML(s, aiFile) {
  const oscuro = s.id === "nocturna" || s.id === "grabado";
  const velo = oscuro ? "rgba(6,9,22,.80)" : "rgba(241,226,188,.72)";
  const panel = oscuro ? "rgba(8,12,32,.74)" : "rgba(255,250,236,.72)";
  const cols = RUPTURAS_TEXTO.map((r) => {
    const c = s.accent[r.t];
    const tc = oscuro ? mix(c, "#ffffff", 0.35) : mix(c, "#000000", 0.35);
    return `<article style="--c:${c};--tc:${tc}"><svg viewBox="-34 -34 68 68" width="168" height="168">${iconoRuptura(r.t, s, 1)}</svg>
    <h2>${r.n}</h2><p class="tag">${r.tag}</p><p class="d">${r.d}</p><p class="w"><b>Dónde</b>${r.donde}</p></article>`;
  }).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Érebo · Las siete Rupturas</title>
<style>@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');
html,body{margin:0;background:#000}
.p{position:relative;width:1600px;height:1200px;overflow:hidden;color:${s.ink};font-family:'Cormorant Garamond',Georgia,serif}
.bg{position:absolute;inset:0;background:url(../ai/${aiFile}) center 40%/cover;filter:blur(7px) saturate(.9);transform:scale(1.06)}
.v{position:absolute;inset:0;background:${velo}}
.f{position:absolute;inset:14px;border:2.4px solid ${s.ink};opacity:.85}.f2{position:absolute;inset:24px;border:.9px solid ${s.ink};opacity:.6}
h1{position:absolute;left:0;right:0;top:52px;margin:0;text-align:center;font:700 52px 'Cinzel Decorative',serif;letter-spacing:.12em;color:${s.titleFill}}
.sub{position:absolute;left:0;right:0;top:126px;text-align:center;font:600 17px 'Cinzel',serif;letter-spacing:.3em;color:${s.titleSub}}
.rule{position:absolute;left:50%;top:162px;width:420px;margin-left:-210px;border-top:1.4px solid ${s.ink};opacity:.7}
.g{position:absolute;left:54px;right:54px;top:196px;bottom:70px;display:flex;flex-wrap:wrap;justify-content:center;align-content:flex-start;gap:16px}
article{box-sizing:border-box;width:350px;height:452px;display:flex;flex-direction:column;align-items:center;text-align:center;padding:18px 20px 16px;background:${panel};border:1.6px solid var(--c);border-radius:6px}
h2{margin:4px 0 2px;font:700 22px 'Cinzel',serif;letter-spacing:.06em;color:var(--tc)}
.tag{margin:0 0 10px;font:italic 600 19px 'Cormorant Garamond',serif;color:${s.titleSub}}
.d{margin:0 0 10px;font:500 18.5px/1.38 'Cormorant Garamond',serif;color:${s.ink}}
.w{margin:auto 0 0;min-height:72px;font:500 16px/1.3 'Cormorant Garamond',serif;font-style:italic;color:${s.titleSub};border-top:1px solid ${s.ink}55;padding-top:9px}
.w b{display:block;font:700 12px 'Cinzel',serif;font-style:normal;letter-spacing:.24em;text-transform:uppercase;color:var(--tc);margin-bottom:3px}
.n{position:absolute;left:0;right:0;bottom:36px;text-align:center;font:italic 600 14px 'Cormorant Garamond',serif;color:${s.titleSub}}
</style></head><body><div class="p"><div class="bg"></div><div class="v"></div><div class="f"></div><div class="f2"></div>
<h1>LAS SIETE RUPTURAS</h1><div class="sub">UNA POR CADA PRIMORDIAL · DONDE LA REALIDAD OLVIDÓ CÓMO FUNCIONAR</div><div class="rule"></div>
<div class="g">${cols}</div><div class="n">Boceto de trabajo · efectos, nombres y lugares provisionales</div></div></body></html>`;
}
