/* ============================================================================================
   Tablero virtual (prototipo, 2026-11-19). Ventana propia #tv que se abre con el botón flotante
   de abajo a la izquierda (#tvFab), en todas las pantallas. Partida aparte de la mesa (clave
   psn-tv-v1); las fichas de héroe sí son las mismas (heridas, poder y estados de HS).

   Reglas: Core Rules v2.1.0 y Campaign Builder v2.1.0 de OPR (docs/*.pdf).
   - Ronda: evento de Neth (solo en la ronda 1 y cuando entran refuerzos) → héroes → IA → fin de ronda.
   - Héroes: una acción (Descansar, Mantener, Avanzar, Correr, Cargar) y, gastando 3 de poder, otra más.
   - IA: se activa de la unidad más cercana a un héroe a la más lejana y sigue el diagrama oficial.
     Decisión de Nacho para el prototipo: sin objetivos, el «AI Goal» es siempre el héroe más cercano.
   - Combate: disparo y cuerpo a cuerpo con dados (Calidad, Defensa, AP, Rending, Blast, Impact…) y moral.
   - Visión: la cortan las casas; de noche, como mucho 12″.
   Mapa: el geométrico del primer tablero táctico (casas y pozo, TOBS) con su propio cálculo de caminos.
   De la mesa solo usa bPolys, bHit y BIN.
   ============================================================================================ */
const TV=(function(){
"use strict";
const ROOT=document.getElementById("tv"),FAB=document.getElementById("tvFab");
const KEY="psn-tv-v1";
const $=(s,r=ROOT)=>r.querySelector(s);
const REDUCE=matchMedia("(prefers-reduced-motion:reduce)").matches;
const d6=()=>1+Math.floor(Math.random()*6),d4=()=>1+Math.floor(Math.random()*4),d3=()=>1+Math.floor(Math.random()*3);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const inch=n=>(Math.round(n*10)/10).toLocaleString("es-ES",{maximumFractionDigits:1})+"″";
const QC=[[150,150],[450,150],[450,450],[150,450]],CC=[[58,58],[542,58],[542,542],[58,542]];
const QN=["I","II","III","IV"];
const PCT=[25,50,100,200],DIF=["Principiante","Intermedio","Experto","Legendario"];
const SPREAD=[[0,0],[30,10],[-26,22],[8,-30],[-24,-24],[30,-22],[-32,-4],[20,30],[-8,34],[36,24]];

/* ---------------------------------------------------------------- estado */
const G0=()=>({v:1,phase:"setup",d:1,hsel:null,ptsOv:0,round:0,al:1,nref:0,needEv:true,hc:0,hcRoll:0,
 units:[],heroes:[],ev:null,mod:null,log:[],seq:1,cur:-1,act:null,last:null,over:"",aiDone:[],endInfo:null,tracks:[],prim:false,diary:""});
function load(){try{const j=JSON.parse(localStorage.getItem(KEY));if(j&&j.v===1)return Object.assign(G0(),j)}catch(e){}return G0()}
let G=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}}
const U={open:false,sel:"",dest:null,drag:null,busy:false,sure:false,obs:false,tab:"log",info:"",dice:null,confirm:false,hinfo:null,evfx:null,wilAsk:null,prim:null,rinfo:null};

/* ---------------------------------------------------------------- reglas y perfiles */
function splitTop(s){const o=[];let d=0,b="";for(const c of String(s||"")){if(c==="(")d++;else if(c===")")d=Math.max(0,d-1);if(c===","&&!d){if(b.trim())o.push(b.trim());b=""}else b+=c}if(b.trim())o.push(b.trim());return o}
const ruleN=(txt,name)=>{const m=String(txt||"").match(new RegExp("\\b"+name+"\\((\\d+)\\)","i"));return m?+m[1]:0};
const hasR=(txt,name)=>new RegExp("\\b"+name+"\\b","i").test(String(txt||""));
/* Un arma: «Bow (24", A3, AP(1), Rending)» → {n, rng (pulgadas, 0 = cuerpo a cuerpo), a, ap, sp:[…], x (copias)} */
function weapon(n,k){let x=1;const c=String(n).match(/^(\d+)\s*[x×]\s*(.+)$/i);if(c){x=+c[1];n=c[2]}
 const w={n:String(n).trim(),rng:0,a:1,ap:0,sp:[],x};
 splitTop(k).forEach(p=>{let m;if((m=p.match(/^(\d+)\s*["″]$/)))w.rng=+m[1];else if((m=p.match(/^A(\d+)$/i)))w.a=+m[1];else if((m=p.match(/^AP\((\d+)\)$/i)))w.ap=+m[1];else w.sp.push(p)});
 return w}
function weaponsOf(line){const out=[];String(line||"").split(" · ").forEach(l=>splitTop(l).forEach(x=>{const m=x.match(/^(.+?)\s*\((.*)\)$/);out.push(m?weapon(m[1],m[2]):weapon(x,""))}));return out}
const wHas=(w,n)=>w.sp.some(s=>new RegExp("^"+n+"\\b","i").test(s));
const wN=(w,n)=>{for(const s of w.sp){const m=s.match(new RegExp("^"+n+"\\((\\d+)\\)","i"));if(m)return+m[1]}return 0};
const isMelee=w=>!w.rng||wHas(w,"Assault"),isRanged=w=>w.rng>0;
/* Cuántos dados tira un arma. En las unidades enemigas, la A del perfil de Army Forge es la de la UNIDAD ENTERA
   (Goblins arqueros [3], Shortbow A6 = 6 dados con los tres vivos, 2 por miniatura). Cada miniatura que cae
   resta su parte: con dos vivos, 4; con uno, 2. Si no sale exacto, se redondea hacia arriba. Un héroe tira su A. */
const perM=(A,w)=>A.kind==="u"?w.a*w.x/Math.max(1,A.g.m0):w.a*w.x;
const nAtk=(A,w)=>A.kind==="u"?Math.ceil(perM(A,w)*A.models()-1e-9):w.a*w.x;
const fmtN=v=>(Math.round(v*100)/100).toLocaleString("es-ES");
const atkWhy=(A,w)=>{if(A.kind!=="u")return`A${w.a}${w.x>1?" × "+w.x+" armas":""}`;const m=A.models(),m0=A.g.m0;
 return m0>1?`A${w.a*w.x} de la unidad entera (${fmtN(perM(A,w))} por miniatura) · ${m} de ${m0} ${m0===1?"miniatura":"miniaturas"} en pie`:`A${w.a*w.x}`};
/* Counter lo tiene el héroe o la unidad (regla) o un arma cuerpo a cuerpo. Solo se aplica cuando DEFIENDE (lo cargan o lo atacan). */
const hasCounter=a=>new RegExp("\\b(Counter|Contraataque)\\b","i").test(a.rules||"")||a.ws.some(w=>isMelee(w)&&wHas(w,"Counter"));
/* Arma cuerpo a cuerpo elegida para atacar o cargar (la primera si solo tiene una). */
const wsel=(a,A)=>{const mw=a.ws.filter(isMelee);return mw.length?mw[Math.min((A&&A.wi)||0,mw.length-1)]:null};

/* Héroe de la partida → su ficha en HS (por nombre, por si se borró o reordenó alguno). */
function heroOf(gh){let h=HS[gh.hi];if(!h||h.name!==gh.n){const i=HS.findIndex(x=>x.name===gh.n);if(i>=0){gh.hi=i;h=HS[i]}else h=null}return h}
/* ---------------------------------------------------------------- catálogo de reglas y habilidades
   Un solo catálogo para héroes y enemigos, en español e inglés (las unidades de Army Forge traen los nombres en inglés y los héroes
   del creador en español). Habilidades de clase, comunes y dotes: docs/age-of-fantasy-quest-heroes.md (tools/extraer-habilidades.py →
   habilidades-base.json). Reglas especiales: el resumen del creador (HC.rg, consultado en Army Forge) y RX, que completa las del
   reglamento (Core Rules v2.1.0) que aquel no trae. Lo que no está en ninguna parte se dice sin inventarlo. */
const SKD=%%SK_DATA%%;
const RX={
 "Impact":["Impacto","Al cargar, antes de que ataque nadie y salvo que esté fatigada, tira X dados: cada 2+ causa 1 impacto al objetivo."],
 "Stealth":["Sigilo","Si la disparan desde más de 9″, los enemigos tienen -1 a impactar."],
 "Reliable":["Fiable","Ataca con Calidad 2+."],
 "Surge":["Oleada","Por cada 6 natural al impactar, el arma causa 1 impacto extra (solo el impacto original cuenta como 6 para otras reglas)."],
 "Relentless":["Implacable","Al disparar a enemigos a más de 9″, cada 6 natural al impactar causa 1 impacto extra."],
 "Villain":["Villano","Las unidades de la IA a 6″ usan la Calidad del Villano en sus chequeos de moral si es mejor que la suya, mientras él no esté acobardado."],
 "Immobile":["Inmóvil","Solo puede usar la acción Mantener."],
 "Limited":["Limitado","Solo puede usarse una vez por misión."],
 "Spell Amplifier":["Amplificador de hechizos","+1 a las tiradas de lanzamiento de hechizos."],
 "Defense":["Defensa","+X a las tiradas de Defensa."]};
const nrm=t=>String(t||"").replace(/\(.*?\)/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9 ]/g," ").replace(/\s+/g," ").trim().toLowerCase();
let CAT=null;
function cat(){if(CAT)return CAT;const C={sk:{},rg:{}};
 SKD.skills.forEach(x=>{C.sk[nrm(x.n)]=C.sk[nrm(x.en)]=x});
 SKD.feats.forEach(f=>{const e={...f,a:"",tier:-1,dote:true};C.sk[nrm(f.n)]=C.sk[nrm(f.en)]=e});
 const R=(typeof HC!=="undefined"&&HC.rg)||{};Object.keys(R).forEach(es=>{const[en,t]=R[es];C.rg[nrm(es)]=C.rg[nrm(en)]={n:es,en,t}});
 Object.keys(RX).forEach(en=>{const[es,t]=RX[en];if(!C.rg[nrm(en)])C.rg[nrm(en)]={n:es,en,t};if(!C.rg[nrm(es)])C.rg[nrm(es)]=C.rg[nrm(en)]});
 return CAT=C}
/* ¿Qué es esta etiqueta? Habilidad de clase, común, dote o regla; con su texto si lo tenemos. */
function ruleInfo(label){const C=cat(),k=nrm(label),x=((String(label).match(/\((\d+)\)/)||[])[1])||"",sk=C.sk[k];
 if(sk)return{kind:sk.dote?"dote":sk.cls==="Comunes"?"comun":"hab",n:sk.n,en:sk.en,t:sk.e,a:sk.a,cls:sk.cls,tier:sk.tier,x};
 const r=C.rg[k];if(r)return{kind:"regla",n:r.n,en:r.en,t:r.t.replace(/\{x\}/g,x||"X"),x};
 return{kind:"regla",n:label,en:"",t:"",x,none:true}}
/* Nombre de regla en inglés (el idioma del motor), conservando el número: «Furioso» → «Furious», «Miedo(2)» → «Fear(2)». */
function canonRule(n){const m=String(n).match(/^(.*?)(\(.*\))?$/),r=cat().rg[nrm(m[1])];return r&&r.en?r.en+(m[2]||""):String(n)}
const hRules=h=>(h.sk||[]).filter(s=>s.g==="regla").map(s=>canonRule(s.n)).join(", ");
const hWeapons=h=>(h.sk||[]).filter(s=>s.g==="equipo"&&s.k&&s.k!=="Consumible"&&/A\d/.test(s.k)).map(s=>weapon(s.n,s.k));
const uArmy=u=>ARMY[u.i]||{name:u.nm,q:5,d:5,rules:"",w:"",mod:1};

/* Actor: vista común de un héroe o una unidad para mover y combatir. */
function actor(id){
 if(id[0]==="h"){const gh=G.heroes.find(x=>x.id===id);if(!gh)return null;const h=heroOf(gh);if(!h)return null;
  const rules=hRules(h);
  return{id,kind:"h",g:gh,h,name:h.name,q:h.cal,d:h.def,tou:h.hpMax,rules,ws:hWeapons(h),x:gh.x,y:gh.y,r:11,models:()=>hfKo(h)?0:1,
   sh:()=>h.st.includes("at"),ko:()=>hfKo(h)}}
 const u=G.units.find(x=>x.id===id);if(!u)return null;const a=uArmy(u);
 return{id,kind:"u",g:u,name:a.name,q:a.q,d:a.d,tou:u.t,rules:a.rules,ws:weaponsOf(a.w),x:u.x,y:u.y,r:u.m0>1?14:11,
  models:()=>Math.max(0,Math.ceil(u.hp/u.t)),sh:()=>!!u.sh,ko:()=>u.hp<=0}}
const actors=()=>G.heroes.map(x=>actor(x.id)).concat(G.units.filter(u=>u.hp>0).map(u=>actor(u.id))).filter(Boolean);
const liveHeroes=()=>G.heroes.map(x=>actor(x.id)).filter(a=>a&&!a.ko());
const liveUnits=()=>G.units.filter(u=>u.hp>0).map(u=>actor(u.id));

/* Movimiento: [avanzar, correr o cargar]. Fast +2/+4, Slow −2/−4; Debilitado mueve la mitad; evento 52 +2/+4. Tope 16″ (como la mesa). */
function speed(a){if(a.ko())return[0,0];let s=hasR(a.rules,"Fast")||hasR(a.rules,"Rápido")?[8,16]:hasR(a.rules,"Slow")||hasR(a.rules,"Lento")?[4,8]:[6,12];
 if(has(a,"Runner")||has(a,"Scurry")||has(a,"Lustbound"))s=[s[0]+1,s[1]+2];
 if(a.kind==="h"){const m=G.mod;if(m&&m.k==="mov"&&m.h===a.g.hi)s=[s[0]+2,s[1]+4]}
 fxOf(a).filter(e=>e.k==="mv").forEach(e=>{s=[s[0]+(e.adv||0),s[1]+(e.rush||0)]});
 if(a.kind==="h"&&a.h.st.includes("de"))s=s.map(v=>v/2);
 return[Math.min(16,s[0]),Math.min(16,s[1])]}

const fxOf=a=>(a&&a.g&&a.g.fx)||[];
const fxActive=(id,label)=>{const a=id&&actor(id);if(!a)return false;const n=ruleInfo(label).n;return fxOf(a).some(e=>e.id===n)};
/* ---------------------------------------------------------------- efectos activos y reglas pasivas
   Cada héroe (G.heroes[i].fx) y cada unidad (G.units[i].fx) lleva una lista de efectos {id (la habilidad que lo puso), k (tipo), v, w (cuándo
   vale), once (se gasta al usarse), until:"round" (se acaba al final de la ronda)}. Tipos:
   hit/ap/range/mv/nofat/stat (del que los lleva) · xhit/xwound (impactos o heridas extra si hace al menos uno) · xhitTaken/xwoundTaken (los que
   recibe de más) · evade (resta al impactar al que le ataca) · hitTaken (suma al impactar contra él) · def/apRed/ignore (su defensa) · hide/untarget/
   noTarget (los enemigos no lo eligen) · nomove · spores · thorns · healBonus · onKill/cowerAfter/pushAfter/debuffOnHit/chain (tras atacar).
   Condiciones w: all, melee, charge, shoot, mshort (cuerpo a cuerpo o disparo a 12″ o menos), mfar, sfar, shaken, cunseen, sunseen. */
const wOk=(w,c)=>{switch(w){case"melee":return c.melee;case"charge":return c.melee&&c.charge;case"shoot":return!c.melee;
 case"mshort":return c.melee||c.gap<=12;case"mfar":return c.melee||c.gap>12;case"sfar":return!c.melee&&c.gap>12;
 case"shaken":return!!c.shaken&&(c.melee||c.gap<=12);case"cunseen":return c.melee&&c.charge&&!!c.unseen;case"sunseen":return!c.melee&&!!c.unseen;default:return true}};
const fxList=(a,k,c)=>{c=c||{melee:true,gap:0};return fxOf(a).filter(e=>e.k===k&&wOk(e.w,c)&&(!e.vs||e.vs===c.vs))};
function fxSum(a,k,c,used){const l=fxList(a,k,c);if(used)l.forEach(e=>{if(e.once)used.push([a,e])});return l.reduce((s,e)=>s+(+e.v||0),0)}
const fxHas=(a,k)=>fxOf(a).some(e=>e.k===k);
function fxAdd(a,e){const g=a.g;g.fx=g.fx||[];g.fx.push({until:"round",...e})}
function fxDrop(used){used.forEach(([a,e])=>{const l=a.g.fx||[],i=l.indexOf(e);if(i>=0)l.splice(i,1)})}
const isFat=a=>a.g.fat===G.round&&!fxHas(a,"nofat");
const has=(a,n)=>hasR(a.rules,n);
function ctxOf(A,B,o){o=o||{};const gp=gap(A,B);return{melee:!!o.melee,charge:!!o.charge,gap:gp,far:o.melee?(!!o.charge&&(o.cd||0)>6):gp>9,vs:B.id,shaken:B.sh(),unseen:A.kind==="h"&&!(A.g.seen||[]).includes(B.id)}}
/* Reglas pasivas (heroes y enemigos). «Desde lejos» = disparo a más de 9″ o carga desde más de 6″. */
const ruleHit=(A,B,c)=>{let m=0;if(c.melee&&has(B,"Dodge")&&!isFat(B))m-=1;if(c.far&&(has(B,"Empyrean Spirit")||has(B,"Changebound")||has(B,"Gloom-Mist")))m-=1;if(!c.melee&&c.gap>9&&has(A,"Buccaneer"))m+=1;return m};
const ruleDef=(T,c)=>c.far&&(has(T,"Sturdy")||has(T,"Tenacious"))?1:0;
const ruleAp=(A,T,c)=>(c.far&&has(A,"Havocbound")?1:0)+(c.melee&&c.charge&&has(A,"Melee Slayer")&&T.tou>=3?2:0);
const ruleApRed=T=>(has(T,"Guardian")||has(T,"Warden")||has(T,"Ossified"))?1:0;
const ruleRegen=T=>has(T,"Regeneration")?5:(has(T,"Cursed Undead")||has(T,"Plaguebound"))?6:0;
const rngRed=b=>(has(b,"Wild Veil")||has(b,"Shadowborn"))?4:0;
/* Empuja o atrae a una unidad enemiga en línea recta (hasta d pulgadas); si cae en un obstáculo, al borde. */
function shove(T,H,d,toward){const dx=H.x-T.x,dy=H.y-T.y,L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L;let nx,ny;
 if(toward){const mv=Math.min(d*BIN,Math.max(0,L-(T.r+H.r+BIN)));nx=T.x+ux*mv;ny=T.y+uy*mv}else{nx=T.x-ux*d*BIN;ny=T.y-uy*d*BIN}
 const p=freeSpot(tOut([nx,ny]),T.r,T.id);T.g.x=p[0];T.g.y=p[1];log(`${T.name} es ${toward?"atraída":"empujada"} ${inch(Math.hypot(p[0]-T.x,p[1]-T.y)/BIN)} ${toward?"hacia":"lejos de"} ${H.name}.`,"ok")}
/* Chequeo de moral de una unidad enemiga provocado por una habilidad (lo tira la IA). True = aguanta. */
async function moralTest(B,why){const m=moraleMod(B),pass=x=>!B.sh()&&(x===6||(x!==1&&x+m>=B.q));
 const[r]=await rollDice({n:1,own:false,title:`Moral de ${B.name}`,sub:`${why}. Calidad ${B.q}+${m?(m>0?", +":", ")+m:""}${B.sh()?" · Aturdida: falla seguro":""}`,need:`${Math.max(2,Math.min(6,B.q-m))}+ aguanta`,ok:pass});
 let ok=pass(r);if(!ok&&hasR(B.rules,"Fearless")&&d6()>=4)ok=true;
 log(`Moral de ${B.name} (${B.q}+): ${r}${m?(m>0?"+":"")+m:""} → ${ok?"aguanta":"falla"}.`,"ok");endDice();return ok}
/* N impactos (con AP) de una habilidad sobre un actor: la defensa se tira en la bandeja. Devuelve las heridas. */
async function autoHits(src,T,n,ap){n=Math.max(0,n|0);if(n<=0||T.ko())return 0;const dm=defMod(T),reg=ruleRegen(T),red=ruleApRed(T),ape=Math.max(0,(ap||0)-red);
 const blk=r=>r===6||(r!==1&&r-ape+dm>=T.d);
 const v=await rollDice({n,own:T.kind==="h",title:`${T.name} se defiende de ${src}`,sub:`${n} impacto${n>1?"s":""} · Defensa ${T.d}+${ap?`, AP(${ap})`:""}${dm?(dm>0?", +":", ")+dm+" a la defensa":""}`,need:`${Math.max(2,Math.min(6,T.d+ape-dm))}+ se salva`,ok:blk});
 let w=0;v.forEach(r=>{if(!blk(r)){if(reg&&d6()>=reg)return;w++}});endDice();wound(T,w);hfSync();
 log(`${src}: ${T.name} recibe ${n} impacto${n>1?"s":""} y sufre ${w} herida${w===1?"":"s"}.`,"sho");
 if(T.kind==="u"&&w>0){const mo=await morale(T,w,0);if(mo)log(mo,"sho")}
 return w}
/* Antes de activarse una unidad: sus marcadores de esporas (Círculo de esporas) se tiran. */
async function sporeCheck(a){for(const e of fxOf(a).filter(e=>e.k==="spores")){if(a.ko())break;const r=d6();
 if(r>=4){a.g.fx.splice(a.g.fx.indexOf(e),1);log(`${a.name}: se retira un marcador de esporas (${r}).`,"ok")}else{log(`${a.name}: marcador de esporas (${r}): 1 impacto.`,"ok");await autoHits("Círculo de esporas",a,1,0)}}}
function aiTargets(a){return liveHeroes().filter(h=>!fxOf(h).some(e=>e.k==="untarget"||(e.k==="hide"&&!e.broken))&&!fxOf(a).some(e=>e.k==="noTarget"&&e.hero===h.id))}
const ghOf=h=>G.heroes.find(g=>{const x=HS[g.hi];return x===h||(x&&x.name===h.name)});
function statUsed(h){const g=ghOf(h);if(g&&g.fx)g.fx=g.fx.filter(e=>e.k!=="stat")}
const useMv=gh=>{gh.fx=(gh.fx||[]).filter(e=>!(e.k==="mv"&&e.once))};

/* ---------------------------------------------------------------- geometría */
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const gap=(a,b)=>Math.max(0,dist(a,b)-a.r-b.r)/BIN;               /* separación entre peanas, en pulgadas */
const touch=(a,b)=>a.r+b.r+1.5;                                    /* distancia entre centros en contacto */
const night=()=>G.nref===0,dawn=()=>G.nref===1;
const tod=()=>night()?"Noche":dawn()?"Alba":"Día";
let LOSP=null;
function losPolys(){if(!LOSP)LOSP=TOBS.filter(o=>o.k==="casa").flatMap(o=>bPolys(o,0));return LOSP}
/* Línea de visión: las casas la cortan (en este mapa no hay muros); de noche, como mucho 12″ entre peanas. */
function los(a,b){if(night()&&gap(a,b)>12)return false;const p=[a.x,a.y],q=[b.x,b.y];return!losPolys().some(P=>bHit(p,q,P))}
const quadOf=(x,y)=>y<300?(x<300?0:1):(x<300?3:2);
/* Un sitio libre cerca de p (no encima de otra ficha ni dentro de un obstáculo). */
function freeSpot(p,r,self){const occ=actors().filter(o=>o.id!==self);
 const ok=q=>occ.every(o=>Math.hypot(o.x-q[0],o.y-q[1])>=o.r+r+1);
 let q=tOut(p);if(ok(q))return q;
 for(let ring=1;ring<8;ring++)for(let k=0;k<12;k++){const ang=k/12*Math.PI*2+ring*.4,c=tOut([p[0]+Math.cos(ang)*ring*(r+2),p[1]+Math.sin(ang)*ring*(r+2)]);if(ok(c))return c}
 return q}

/* ---------------------------------------------------------------- mapa geométrico y obstáculos
   El mapa sencillo del primer tablero táctico (commit 72fca94, antes de las pruebas con imágenes): nueve casas
   rectangulares y el pozo en el centro. Esas formas son también los obstáculos (decisión de Nacho, 2026-11-19).
   Tiene su propio cálculo de caminos (copia del de la mesa con esta lista), para no tocar el tablero táctico. */
const TOBS=[[60,70,70,44],[200,40,54,60],[380,60,80,46],[500,200,52,70],[70,330,50,64],[220,420,70,48],[360,490,60,50],[480,380,56,48],[210,250,40,30]]
 .map(([x,y,w,h])=>({k:"casa",x,y,w,h})).concat([{k:"pozo",x:300,y:300,r:26}]);
const TCL=8;   /* holgura: radio de una peana de 32 mm (≈0,63″) */
/* Terreno de COBERTURA (decisión de Nacho, 2026-11-20): bajo (un muro, un arbusto, el pozo…), se ve por encima, así que se puede
   disparar a través, pero quien está dentro o pegado detrás tiene +1 a la defensa contra disparos. Las casas, en cambio, cortan la
   línea de visión (ver los()): detrás de una casa no se puede disparar. Mismo formato que TOBS ({k,x,y,r} o {k,x,y,w,h}); para añadir
   un muro o un arbusto basta con añadirlo aquí (y a TOBS si además debe cortar el paso). Blast ignora la cobertura. */
const TCOV=[{k:"pozo",x:300,y:300,r:26}];
/* ¿Está B protegido de un disparo de A? La línea de tiro cruza la cobertura y B está dentro o a 1″ o menos detrás de ella. */
function inCover(A,B){const p=[A.x,A.y],q=[B.x,B.y];
 return TCOV.some(o=>bPolys(o,B.r+BIN).some(pl=>bHit(q,q,pl))&&bPolys(o,0).some(pl=>bHit(p,q,pl)))}
let TNAV=null;
function tNav(){if(TNAV)return TNAV;
 const P=TOBS.flatMap(o=>bPolys(o,TCL)),N=[];
 P.forEach(pl=>{const cx=pl.reduce((s,p)=>s+p[0],0)/pl.length,cy=pl.reduce((s,p)=>s+p[1],0)/pl.length;
  pl.forEach(([x,y])=>{const dx=x-cx,dy=y-cy,l=Math.hypot(dx,dy)||1,n=[x+dx/l*1.5,y+dy/l*1.5];if(n[0]<18||n[0]>582||n[1]<18||n[1]>582)return;if(P.some(q=>bHit(n,n,q)))return;N.push(n)})});
 const blk=(a,b)=>P.some(q=>bHit(a,b,q)),V=N.map(()=>[]);
 for(let i=0;i<N.length;i++)for(let j=i+1;j<N.length;j++)if(!blk(N[i],N[j])){const d=Math.hypot(N[i][0]-N[j][0],N[i][1]-N[j][1]);V[i].push([j,d]);V[j].push([i,d])}
 return TNAV={P,N,V,blk,from:{}}}
const tClamp=v=>Math.max(18,Math.min(582,v));
/* Saca un punto de dentro de un obstáculo al borde más cercano (y dentro del tablero). */
function tOut(p){const{P}=tNav();p=[tClamp(p[0]),tClamp(p[1])];
 for(let it=0;it<3;it++){const pl=P.find(q=>bHit(p,p,q));if(!pl)break;let best=null,bd=1e9;
  const c=pl.reduce((s,v)=>[s[0]+v[0]/pl.length,s[1]+v[1]/pl.length],[0,0]);
  for(let i=0;i<pl.length;i++){const a=pl[i],b=pl[(i+1)%pl.length],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy))),q=[a[0]+t*dx,a[1]+t*dy],d=Math.hypot(q[0]-p[0],q[1]-p[1]);if(d<bd){bd=d;best=q}}
  const dx=best[0]-c[0],dy=best[1]-c[1],l=Math.hypot(dx,dy)||1;p=[tClamp(best[0]+dx/l*2),tClamp(best[1]+dy/l*2)]}
 return p}
/* Distancias desde un origen a todas las esquinas del grafo (Dijkstra, con caché por origen). */
function tFrom(s){const nav=tNav(),key=s[0].toFixed(1)+","+s[1].toFixed(1);if(nav.from[key])return nav.from[key];
 const{N,V,blk}=nav,n=N.length,dist=new Array(n).fill(Infinity),prev=new Array(n).fill(-1),done=new Array(n).fill(false);
 N.forEach((q,i)=>{if(!blk(s,q))dist[i]=Math.hypot(q[0]-s[0],q[1]-s[1])});
 for(;;){let u=-1;for(let i=0;i<n;i++)if(!done[i]&&dist[i]<Infinity&&(u<0||dist[i]<dist[u]))u=i;if(u<0)break;done[u]=true;
  for(const[v,d]of V[u])if(dist[u]+d<dist[v]){dist[v]=dist[u]+d;prev[v]=u}}
 const keys=Object.keys(nav.from);if(keys.length>60)delete nav.from[keys[0]];
 return nav.from[key]={s,dist,prev}}
/* Camino más corto de o a t rodeando obstáculos: {pts, len} (null si no se puede llegar). */
function tPath(o,t){const nav=tNav(),s=tOut(o);t=tOut(t);const lead=Math.hypot(s[0]-o[0],s[1]-o[1]),head=lead>.5?[o,s]:[o];
 if(!nav.blk(s,t))return{pts:[...head,t],len:lead+Math.hypot(t[0]-s[0],t[1]-s[1])};
 const F=tFrom(s);let bi=-1,bd=Infinity;
 nav.N.forEach((q,i)=>{if(F.dist[i]===Infinity)return;const d=F.dist[i]+Math.hypot(t[0]-q[0],t[1]-q[1]);if(d<bd&&!nav.blk(q,t)){bd=d;bi=i}});
 if(bi<0)return null;const mid=[];for(let i=bi;i>=0;i=F.prev[i])mid.unshift(nav.N[i]);
 return{pts:[...head,...mid,t],len:lead+bd}}
/* Lo más lejos que llega por ese camino sin pasar de lim pulgadas: {pts, len, end, cut}. */
function tReach(o,t,lim){const p=tPath(o,t);if(!p)return null;const L=lim*BIN;if(p.len<=L+.01)return{...p,end:p.pts[p.pts.length-1],cut:false};
 const pts=[p.pts[0]];let acc=0;for(let i=1;i<p.pts.length;i++){const a=p.pts[i-1],b=p.pts[i],d=Math.hypot(b[0]-a[0],b[1]-a[1]);
  if(acc+d>=L){const f=(L-acc)/(d||1),e=[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f];pts.push(e);return{pts,len:L,end:e,cut:true}}acc+=d;pts.push(b)}
 return{...p,end:p.pts[p.pts.length-1],cut:false}}
/* Zona alcanzable de verdad (celdas de 0,5″): oro = avanzar, violeta = correr o cargar. Con caché. */
const TREG={};
function tRegion(o,sp,lim){const key=o.map(v=>v.toFixed(1))+"|"+sp+"|"+lim;if(TREG[key])return TREG[key];
 const g=6.25,R=lim*BIN,nav=tNav(),s=tOut(o),F=tFrom(s),lead=Math.hypot(s[0]-o[0],s[1]-o[1]),rows=[[],[]];
 const dTo=c=>{if(nav.P.some(q=>bHit(c,c,q)))return Infinity;if(!nav.blk(s,c))return lead+Math.hypot(c[0]-s[0],c[1]-s[1]);let b=Infinity;
  nav.N.forEach((q,i)=>{const d=F.dist[i];if(d===Infinity)return;const e=d+Math.hypot(c[0]-q[0],c[1]-q[1]);if(e<b&&!nav.blk(q,c))b=e});return lead+b};
 const y0=Math.floor(Math.max(12,o[1]-R)/g)*g;
 for(let iy=0;y0+iy*g<Math.min(588,o[1]+R);iy++){const y=y0+iy*g;let run=[null,null];
  const flush=(k,x)=>{if(run[k]!==null){rows[k].push(`M${run[k].toFixed(2)} ${y.toFixed(2)}H${x.toFixed(2)}v${g+.4}H${run[k].toFixed(2)}z`);run[k]=null}};
  for(let x=Math.max(12,o[0]-R);x<Math.min(588,o[0]+R)+g;x+=g){const c=[x+g/2,y+g/2],d=Math.hypot(c[0]-o[0],c[1]-o[1])>R||x>=Math.min(588,o[0]+R)?Infinity:dTo(c),
    band=d<=sp[0]*BIN?0:d<=R?1:-1;
   for(let k=0;k<2;k++){if(band===k){if(run[k]===null)run[k]=x}else flush(k,x)}}}
 const keys=Object.keys(TREG);if(keys.length>30)delete TREG[keys[0]];
 return TREG[key]=`<g filter="url(#tvsoft)"><path d="${rows[1].join("")}" fill="rgba(110,80,220,.32)"/><path d="${rows[0].join("")}" fill="rgba(255,236,170,.26)"/></g>`}

/* ---------------------------------------------------------------- registro */
function log(t,k){G.log.unshift({r:G.round,t,k:k||""});G.log=G.log.slice(0,120)}

/* ---------------------------------------------------------------- oleadas */
const budget=()=>Math.round(heroPts()*PCT[G.d-1]/100);
function heroPts(){if(G.ptsOv)return G.ptsOv;return selHeroes().reduce((s,h)=>s+(+h.pts||100),0)}
function selHeroes(){if(!G.hsel)G.hsel=HS.slice(0,4).map(h=>h.name);return G.hsel.map(n=>HS.find(h=>h.name===n)).filter(Boolean)}
/* Sorteo: unidades de la lista de Army Forge sin pasarse del valor, solo copias que no estén ya en la mesa.
   Varios intentos y se queda con el que más se acerca. */
function drawWave(b){const busy=ARMY.map(()=>0);G.units.forEach(u=>{if(u.hp>0&&busy[u.i]!=null)busy[u.i]++});
 const free=ARMY.map((a,i)=>Math.max(0,a.n-busy[i]));
 const once=()=>{const left=free.slice(),out=[];let rem=b;
  for(let g=0;g<200;g++){const c=[];ARMY.forEach((a,i)=>{if(a.pts<=rem)for(let j=0;j<left[i];j++)c.push(i)});if(!c.length)break;const i=c[Math.floor(Math.random()*c.length)];left[i]--;out.push(i);rem-=ARMY[i].pts}
  return{out,rem}};
 let best=once();for(let t=0;t<80&&best.rem>0;t++){const o=once();if(o.rem<best.rem)best=o}
 return best.out.sort((a,b)=>a-b)}
function mkUnit(i){const a=ARMY[i],t=Math.max(1,ruleN(a.rules,"Tough")||1),m0=Math.max(1,a.mod||1);
 return{id:"u"+(G.seq++),i,nm:a.name,m0,t,hp:m0*t,x:300,y:300,sh:false,fat:0,act:false,pick:false}}
/* Centinelas al centro de un cuadrante (1-4) o, con 5-6, donde elija el jugador (se arrastran al desplegar). */
function deploySentries(){const ids=drawWave(budget()),cnt=[0,0,0,0];
 ids.forEach(i=>{const u=mkUnit(i),r=d4(),q=r-1;
  const o=SPREAD[cnt[q]++%SPREAD.length],p=freeSpot([QC[q][0]+o[0],QC[q][1]+o[1]],u.m0>1?14:11,u.id);u.x=p[0];u.y=p[1];u.roll=r;G.units.push(u)});
 return ids.length}
/* Refuerzos a 6″ de una esquina (1-4); con 5-6 elige el jugador: el prototipo pone la esquina más lejana de los héroes. */
function reinforce(){const ids=drawWave(budget()),hs=liveHeroes(),cnt=[0,0,0,0],placed=[];
 const far=()=>{let b=0,bd=-1;CC.forEach((c,k)=>{const d=hs.reduce((m,h)=>Math.min(m,Math.hypot(h.x-c[0],h.y-c[1])),1e9);if(d>bd){bd=d;b=k}});return b};
 ids.forEach(i=>{const u=mkUnit(i),r=d4(),c=r-1,o=SPREAD[cnt[c]++%SPREAD.length],s=CC[c][0]<300?1:-1,t=CC[c][1]<300?1:-1;
  const p=freeSpot([CC[c][0]+Math.abs(o[0])*s*.8+6*s,CC[c][1]+Math.abs(o[1])*t*.8+6*t],u.m0>1?14:11,u.id);u.x=p[0];u.y=p[1];u.fresh=G.round+1;G.units.push(u);placed.push(u.nm+" → esquina "+(c+1)+(scoutDeploy(u)?" (Scout)":""))});
 G.nref++;G.needEv=true;
 log(`Refuerzos: ${ids.length?placed.join(" · "):"no queda ninguna unidad libre en la lista"}.`,"al");return ids.length}
/* Scout (Core Rules): «puede desplegarse en cualquier punto completamente a 9″» de donde saldría. Es un solo uso, al desplegarse
   (no cambia el movimiento). Decisión de la IA: dificultad 3-4 siempre; 1-2, una de cada dos veces. Lo coloca hacia el héroe más
   cercano, sin dejarlo a menos de 9″ de él (supuesto de la casa). Devuelve true si se ha movido. */
function scoutDeploy(u){if(u.scouted)return false;const a=actor(u.id);if(!a||!has(a,"Scout"))return false;u.scouted=true;
 const use=G.d>=3||Math.random()<.5;if(!use){log(`${u.nm} podía usar Scout y esta vez no lo usa.`,"rd");return false}
 const hs=liveHeroes();if(!hs.length)return false;
 const h=hs.reduce((b,x)=>Math.hypot(x.x-u.x,x.y-u.y)<Math.hypot(b.x-u.x,b.y-u.y)?x:b),d=Math.hypot(h.x-u.x,h.y-u.y);
 const step=Math.min(9*BIN,Math.max(0,d-(9*BIN+a.r+h.r)));
 if(step<BIN){log(`${u.nm} usa Scout, pero ya está a menos de 9″ de un héroe y no gana nada.`,"rd");return false}
 const p=freeSpot([u.x+(h.x-u.x)/d*step,u.y+(h.y-u.y)/d*step],a.r,u.id);const m=Math.hypot(p[0]-u.x,p[1]-u.y)/BIN;u.x=p[0];u.y=p[1];u.scout=true;
 log(`${u.nm} usa Scout: se despliega ${m.toFixed(1).replace(".",",")}″ más cerca de ${h.name}.`,"rd");return true}
/* Al colocar un héroe en el despliegue, no puede alejarse más de 10″ de la esquina elegida (19″ con Scout). */
function heroClamp(id,q){if(id[0]!=="h"||!G.hc)return q;const ha=actor(id),c=CC[G.hc-1],dx=q[0]-c[0],dy=q[1]-c[1],L=Math.hypot(dx,dy),R=(ha&&has(ha,"Scout")?19:10)*BIN;
 return L<=R?q:[c[0]+dx/L*R,c[1]+dy/L*R]}
function placeHeroes(c){G.hc=c;const s=CC[c-1][0]<300?1:-1,t=CC[c-1][1]<300?1:-1,o=[[14,14],[44,16],[16,44],[44,44]];
 G.heroes.forEach((gh,k)=>{const p=tOut([CC[c-1][0]+o[k%4][0]*s,CC[c-1][1]+o[k%4][1]*t]);gh.x=p[0];gh.y=p[1]})}

/* ---------------------------------------------------------------- tiradas */
/* Tirada de característica de un héroe (Str/Dex/Wil): eventos y Afectado (−1 a todas) cuentan. 6 siempre pasa, 1 siempre falla. */
function statMod(h,k){let m=0;const ev=G.mod;if(ev&&ev.k==="st"&&ev.s===k&&(ev.h<0||ev.h===HS.indexOf(h)))m+=ev.v;if(h.st.includes("ac"))m-=1;const g=ghOf(h);if(g)(g.fx||[]).forEach(e=>{if(e.k==="stat")m+=e.v});return m}
function statTest(h,k,label){const r=d6(),m=statMod(h,k);statUsed(h);
 const ok=r===6||(r!==1&&r+m>=h[k]);return{r,m,ok,txt:`${label} ${h[k]}+: ${r}${m?(m>0?"+":"")+m:""} → ${ok?"pasa":"falla"}`}}
const hitMod=(a,melee)=>{let m=0;const ev=G.mod;if(ev){if(ev.k==="hit")m+=ev.v;if(a.kind==="h"&&ev.h===a.g.hi&&ev.k==="hitm"&&melee)m+=ev.v;if(a.kind==="h"&&ev.h===a.g.hi&&ev.k==="hits"&&!melee)m+=ev.v}if(a.kind==="h"&&a.h.st.includes("ac"))m-=1;return m};
const defMod=b=>{let m=0;const ev=G.mod;if(ev){if(ev.k==="def")m+=ev.v;if(b.kind==="h"&&ev.h===b.g.hi&&ev.k==="defh")m+=ev.v}m+=ruleN(b.rules,"Defense");if(b.kind==="h"&&b.h.st.includes("ac"))m-=1;return m};
const rngMod=a=>{const ev=G.mod;let m=0;if(ev){if(ev.k==="rng")m+=ev.v;if(a.kind==="h"&&ev.h===a.g.hi&&ev.k==="rngh")m+=ev.v}m+=fxOf(a).filter(e=>e.k==="range").reduce((t,e)=>t+e.v,0)+((has(a,"Highborn")||has(a,"Royal Legion"))?4:0);return m};
const moraleMod=a=>{const ev=G.mod;let m=0;if(ev){if(ev.k==="mor")m+=ev.v;if(a.kind==="h"&&ev.h===a.g.hi&&ev.k==="morh")m+=ev.v}if(a.kind==="h"&&a.h.st.includes("ac"))m-=1;return m};
const inRange=(a,b,w)=>gap(a,b)<=w.rng+rngMod(a)-rngRed(b)+.01;
/* ¿Puede disparar a b con el arma w? A tiro y a la vista. Indirect: con Mantener puede disparar sin línea de visión
   (las casas no la cortan), pero de noche sigue sin ver más allá de 12″. */
const wCan=(a,b,w,hold)=>isRanged(w)&&inRange(a,b,w)&&(los(a,b)||(hold&&wHas(w,"Indirect")&&(!night()||gap(a,b)<=12)));
const canShoot=(a,b,hold,w)=>w?wCan(a,b,w,hold):a.ws.some(x=>wCan(a,b,x,hold));
const shootWs=(a,b,hold)=>a.ws.filter(w=>wCan(a,b,w,hold));

/* Ataques de A contra B con las armas ws. Es asíncrona: cada grupo de dados pasa por la bandeja (rollDice). Los tira el jugador
   cuando es el turno de los héroes o cuando el dado es de un héroe (defensa y contraataque en el turno de la IA); la app tira los
   de la IA. Devuelve el detalle para el registro y los dados para la ficha del combate. */
/* Una acción de ataque usa UN arma: la que más daño espera hacer (o la que se haya elegido). Así una unidad de tres
   miniaturas con A3 y A3 tira 9 dados, no 18. */
/* La IA (unidades enemigas) en dificultad 1-2 elige el arma al azar; en 3-4, la de más daño esperado
   (decisión de Nacho, 2026-11-20). Los héroes eligen la suya en el panel. */
function oneW(A,B,ws,melee,charge){if(ws.length<=1)return ws;
 if(A.kind==="u"&&G.d<=2)return[ws[Math.floor(Math.random()*ws.length)]];
 let best=ws[0],be=-1;
 ws.forEach(w=>{const e=expDmg(A,B,[w],melee,charge);if(e>be){be=e;best=w}});return[best]}
/* Planes de ataque de A contra B (un plan por arma): cuántos dados, qué impacta y cómo se muestran. Lo usan strike y el ataque conjunto.
   o.used: lista donde se anotan los efectos de un solo uso que se han gastado (strike los quita al acabar el combate). */
function planAtk(A,B,ws,o){const melee=!!o.melee,fat=melee&&(isFat(A)||A.sh()),sh=A.sh(),ownA=A.kind==="h",c=ctxOf(A,B,o),Uu=o.used;
 return ws.map(w=>{const n=nAtk(A,w);let Q=wHas(w,"Reliable")?2:A.q,m=hitMod(A,melee);
  if(!melee){if(night()||dawn())m-=1;if(hasR(B.rules,"Stealth")&&gap(A,B)>9)m-=1}
  m+=fxSum(A,"hit",c,Uu)-fxSum(B,"evade",c,Uu)+fxSum(B,"hitTaken",c,Uu)+ruleHit(A,B,c);
  if(melee&&o.upf>=4)m+=1;
  /* Unstoppable: ignora los modificadores negativos que no son suyos (noche, Stealth, eventos, habilidades). */
  if(wHas(w,"Unstoppable")&&m<0)m=0;
  if(melee&&o.charge&&wHas(w,"Thrust"))m+=1;
  const only6=fat||(sh&&melee),hitOk=r=>only6?r===6:(r===6||(r!==1&&r+m>=Q));
  return{w,n,Q,m,only6,fat,own:ownA,hitOk,title:`${A.name} ${melee?"golpea a":"dispara a"} ${B.name}`,
   sub:`${w.n} · ${atkWhy(A,w)} = ${n} ataques · Calidad ${Q}+${m?(m>0?", +":", ")+m+" al impactar":""}${only6?" · agotado o aturdido: solo 6 (sin críticos)":" · cada 6 es crítico: solo se salva con otro 6"}`,
   need:only6?"solo el 6 impacta":`${Math.max(2,Math.min(6,Q-m))}+ impacta`}})}
/* Ataque conjunto: varias unidades que atacan al mismo héroe tiran TODOS sus dados a la vez, en una bandeja con cada unidad separada.
   Devuelve, por unidad, las tiradas de cada arma (para que strike no vuelva a tirar). */
async function preRollGroup(B,list){
 const plans=list.map(x=>planAtk(x.A,B,x.ws,{melee:true,charge:false}));
 const dieP=[];plans.forEach(ps=>ps.forEach(p=>{for(let k=0;k<p.n;k++)dieP.push(p)}));
 const groups=list.map((x,i)=>({label:x.A.name,n:plans[i].reduce((s,p)=>s+p.n,0)})).filter(g=>g.n>0);
 const v=dieP.length?await rollDice({n:dieP.length,own:false,title:`Ataque conjunto contra ${B.name}`,sub:"Cada grupo de dados es una unidad: un dado impacta según lo que marca su tirada.",need:"",ok:(r,i)=>dieP[i].hitOk(r),groups}):[];
 let k=0;return plans.map(ps=>ps.map(p=>{const arr=v.slice(k,k+p.n);k+=p.n;return arr}))}
async function strike(A,B,ws,o){o=o||{};const melee=!!o.melee,out={hits:0,wounds:0,att:0,rolls:[],blocks:[],lines:[],selfW:0};
 const Uu=o.used=o.used||[];
 const fat=melee&&(isFat(A)||A.sh()),sh=A.sh();
 const ownA=A.kind==="h",c=ctxOf(A,B,o);
 if(melee&&has(A,"Unpredictable Fighter")){o.upf=d6();out.lines.push(`Luchador impredecible: ${o.upf} → ${o.upf>=4?"+1 a impactar":"AP(+1)"}`)}
 /* Impact(X) al cargar, antes de golpear (salvo agotado): X dados, cada 2+ es un impacto (AP 0). Brace(X) del defensor resta dados. */
 const imp=o.charge&&!fat?Math.max(0,ruleN(A.rules,"Impact")-(isFat(B)?0:ruleN(B.rules,"Brace"))):0;
 const pool=[];
 if(imp){const v=await rollDice({n:imp,own:ownA,title:`${A.name}: Impact(${imp})`,sub:`Al cargar, cada dado es un impacto con 2+ (AP 0) contra ${B.name}.`,need:"2+ impacta",ok:r=>r>=2});
  const h=v.filter(r=>r>=2).length;pool.push({w:{n:"Impact",ap:0,sp:[]},hits:h,six:0,crit:0,att:imp});out.att+=imp;out.lines.push(`Impact(${imp}): ${h} impactos`)}
 const plans=planAtk(A,B,ws,o);
 for(let wi=0;wi<plans.length;wi++){const P=plans[wi],w=P.w,n=P.n,Q=P.Q,m=P.m,hitOk=P.hitOk;
  const v=n>0?(o.pre?o.pre[wi]:await rollDice({n,own:ownA,title:P.title,sub:P.sub,need:P.need,ok:hitOk})):[];
  let h=0,six=0;v.forEach(r=>{const hit=hitOk(r);if(hit){h++;if(r===6)six++}if(out.rolls.length<40)out.rolls.push({r,ok:hit})});
  const fatSix=fat?0:six;
  if(melee&&o.charge&&hasR(A.rules,"Furious"))h+=fatSix;
  if(wHas(w,"Surge"))h+=fatSix;
  if(!melee&&wHas(w,"Relentless")&&gap(A,B)>9)h+=fatSix;
  if(c.far&&(has(A,"Ferocious")||has(A,"Savage")||has(A,"Lucky")))h+=fatSix;
  const rend=wHas(w,"Rending")&&!fat?six:0;
  /* Críticos (regla de la casa, decisión de Nacho 2026-11-20): cada 6 natural al impactar es un crítico y ese impacto
     solo se salva con otro 6. Vale para héroes y enemigos. No cuentan los de un atacante agotado o aturdido (solo impacta
     con 6) ni los impactos extra de reglas y habilidades. */
  const crit=P.only6?0:six;
  out.att+=n;out.crit=(out.crit||0)+crit;out.lines.push(`${w.n}: ${atkWhy(A,w)} = ${n} ataques (${Q}+${m?(m>0?" +":" ")+m:""}${fat?", solo 6":""}) → ${h} impactos${crit?` (${crit} ${crit>1?"críticos":"crítico"})`:""}`);
  /* Habilidades: «si causa al menos un impacto, causa uno adicional» (y los que el defensor recibe de más). */
  if(h>0){const x=fxSum(A,"xhit",c,Uu),xt=fxSum(B,"xhitTaken",c,Uu);if(x||xt){h+=x+xt;out.lines.push(`Habilidades: +${x+xt} impacto${x+xt>1?"s":""} adicional${x+xt>1?"es":""}`)}}
  /* Blast(X): cada impacto se multiplica por X y se reparte por igual entre el objetivo y las demás unidades enemigas a 3″
     o menos de él; ninguna recibe más impactos que miniaturas tiene (un héroe, como mucho 1). */
  const bl=wN(w,"Blast");
  if(bl&&h>0){const tot=h*bl,side=B.kind==="h"?liveHeroes():liveUnits(),T=[B].concat(side.filter(x=>x.id!==B.id&&gap(B,x)<=3.01)),cap=T.map(x=>Math.max(1,x.models())),got=T.map(()=>0);
   let left=tot;for(let guard=0;left>0&&guard<500;guard++){let any=false;for(let i=0;i<T.length&&left>0;i++)if(got[i]<cap[i]){got[i]++;left--;any=true}if(!any)break}
   /* Rending: los 6 siguen siendo 6 solo en los impactos originales; se quedan en el objetivo. */
   pool.push({w,hits:got[0],six:Math.min(rend,got[0]),crit:Math.min(crit,got[0]),att:n,to:B});
   T.slice(1).forEach((X,i)=>{if(got[i+1])pool.push({w,hits:got[i+1],six:0,crit:0,att:0,to:X})});
   out.lines.push(`Blast(${bl}): ${h} × ${bl} = ${tot} impactos → ${T.map((X,i)=>`${X.name} ${got[i]}`).join(", ")}${left>0?` (${left} se pierden: no hay más miniaturas)`:""}`);h=got[0]}
  else pool.push({w,hits:h,six:rend,crit,att:n,to:B})}
 /* Defensa: cada impacto, una tirada de Defensa (+AP). Rending: los 6 ganan AP(+4). Shred: cada 1 hace 1 herida más. */
 out.extra=[];
 for(const p of pool){const w=p.w,T=p.to||B;if(p.hits<=0)continue;
  const cT=T===B?c:ctxOf(A,T,o),cv=!melee&&!wHas(w,"Blast")&&inCover(A,T)?1:0,dm=defMod(T)+cv+fxSum(T,"def",cT,Uu)+ruleDef(T,cT),regT=ruleRegen(T),ownT=T.kind==="h";
  const apB=fxSum(A,"ap",cT,Uu)+ruleAp(A,T,cT)+(melee&&o.upf>=1&&o.upf<=3?1:0),red=Math.max(fxSum(T,"apRed",cT,Uu),ruleApRed(T));
  const thr=melee&&o.charge&&wHas(w,"Thrust")?1:0,rr6=wHas(w,"Bane")||has(A,"Mischievous")||has(A,"Bestial")||has(A,"Raider");
  /* Parry(X): al recibir impactos en cuerpo a cuerpo, X dados por miniatura (hasta tantos como impactos); cada 6+ anula uno. */
  let hitsN=p.hits;const par=melee?ruleN(T.rules,"Parry"):0;
  if(par>0){const pd=Math.min(hitsN,par*Math.max(1,T.models()));let ig=0;for(let j=0;j<pd;j++)if(d6()>=6)ig++;if(ig){hitsN-=ig;out.lines.push(`${T.name}: Parry, ${ig} ${ig>1?"impactos anulados":"impacto anulado"}`)}}
  if(hitsN<=0){if(T===B)out.hits+=0;continue}
  /* Los primeros cr dados son los de los impactos críticos: solo los salva un 6. */
  const cr=Math.min(p.crit||0,hitsN),apOf=k=>Math.max(0,w.ap+apB+thr+(k<p.six?4:0)-red),blkOf=(r,k)=>k<cr?r===6:(r===6||(r!==1&&r-apOf(k)+dm>=T.d));
  const groups=cr?[{label:`${cr>1?"Críticos":"Crítico"}: solo se salva con 6`,n:cr},{label:"Impactos normales",n:hitsN-cr}].filter(g=>g.n>0):null;
  const apShow=Math.max(0,w.ap+apB+thr-red);
  const v=await rollDice({n:hitsN,own:ownT,groups,title:`${T.name} se defiende de ${A.name}`,
   sub:`${A.name} ${T===B?"ataca":"le alcanza con la explosión de"} ${w.n}: ${hitsN} impactos (un dado por impacto) · Defensa ${T.d}+${apShow?`, AP(${apShow})`:""}${dm?(dm>0?", +":", ")+dm+" a la defensa":""}${cv?" (cobertura)":""}${cr?` · ${cr} ${cr>1?"críticos":"crítico"}: solo con 6`:""}${p.six?` · ${p.six} con Rending (AP +4)`:""}`,
   need:cr===hitsN?"solo el 6 se salva":`${Math.max(2,Math.min(6,T.d+apOf(cr)-dm))}+ se salva${cr?" · críticos, solo el 6":""}`,ok:blkOf});
  let wds=0,ign=0;const ig=fxList(T,"ignore",cT)[0],far=cT.far&&(has(A,"Destroyer")||has(A,"Warbound"));
  for(let k=0;k<hitsN;k++){let r=v[k];if(r===6&&(wHas(w,"Bane")||(rr6&&k>=cr)))r=d6();const blk=blkOf(r,k);if(T===B&&out.blocks.length<40)out.blocks.push({r,ok:!blk});
   if(!blk){if(ig&&d6()>=ig.v){ign++;continue}
    let wd=1+((wHas(w,"Shred")||far)&&r===1?1:0);if(regT&&!(k<p.six)&&!wHas(w,"Bane")&&!wHas(w,"Unstoppable")&&!wHas(w,"Rending")){let s=0;for(let j=0;j<wd;j++)if(d6()>=regT)s++;wd-=s}
    const dl=wN(w,"Deadly");if(dl&&wd>0)wd=Math.min(wd*dl,Math.max(1,T.tou));
    wds+=wd}}
  if(ign)out.lines.push(`${T.name}: ${ign} ${ign>1?"impactos ignorados":"impacto ignorado"} (habilidad)`);
  /* Habilidades: herida adicional si hace al menos una (y la que el defensor recibe de más). */
  if(wds>0){const xw=fxSum(A,"xwound",cT,Uu),xt=fxSum(T,"xwoundTaken",cT,Uu);if(xw||xt){wds+=xw+xt;out.lines.push(`Habilidades: +${xw+xt} herida${xw+xt>1?"s":""} adicional${xw+xt>1?"es":""}`)}}
  if(T===B){out.wounds+=wds;out.hits+=hitsN}
  else{out.extra.push({to:T,hits:hitsN,wounds:wds});out.lines.push(`${T.name} (explosión): ${hitsN} impactos → ${wds} heridas`)}}
 /* Reprimenda devota: quien ataca al protegido sufre D3 impactos. */
 const th=fxList(B,"thorns",c);th.forEach(e=>{if(e.once)Uu.push([B,e])});if(th.length)out.thorn=th.reduce((t,e)=>t+rollSpec(e.v),0);
 /* Heridas que la propia habilidad cuesta al disparar su efecto (Frenesí de sangre, Ataque aturdido…). */
 Uu.forEach(([a,e])=>{if(a.g===A.g&&e.sw&&!e.swDone){out.selfW+=e.sw;e.swDone=1}});
 return out}
/* Daño esperado (para que la IA elija entre disparar y cargar). */
function expDmg(A,B,ws,melee,charge){let e=0;ws.forEach(w=>{const n=nAtk(A,w);let Q=wHas(w,"Reliable")?2:A.q,m=hitMod(A,melee);if(!melee&&(night()||dawn()))m-=1;
 const ph=Math.min(5,Math.max(1,7-Q+m))/6,pw=1-Math.min(5,Math.max(1,7-(B.d+w.ap+(!melee&&!wHas(w,"Blast")&&inCover(A,B)?1:0))))/6;e+=n*((ph-1/6)*pw+(1/6)*(5/6))});
 if(charge)e+=ruleN(A.rules,"Impact")*5/6*(1-Math.min(5,Math.max(1,7-B.d))/6);return e}
function wound(B,n){if(n<=0)return;if(B.kind==="h"){B.h.hp=Math.max(0,B.h.hp-n);hfClamp(B.h);if(hfKo(B.h)){log(`${B.name} cae inconsciente.`,"bad")}}
 else{B.g.hp=Math.max(0,B.g.hp-n);if(B.g.hp<=0)log(`${B.name}: unidad destruida.`,"ok")}}
/* Moral: al final de la activación en que recibió heridas. Fear(X) del rival suma. Reglas de la casa (decisiones de Nacho,
   2026-11-20; la norma dice a la mitad o menos y también para héroes):
   - Héroes: no tiran moral nunca.
   - Unidades de varias miniaturas: solo cuando le queda UNA miniatura.
   - Unidades de una sola miniatura: cuando ha perdido 2/3 o más de sus heridas (le queda 1/3 o menos). */
async function morale(B,took,fear){if(B.kind==="h"||B.ko()||took<=0)return null;let half,why;
 {const u=B.g;if(u.m0>1){half=Math.ceil(Math.max(0,u.hp-fear*u.t)/u.t)<=1;why="Solo le queda una miniatura"}else{half=u.hp-fear<=u.t/3;why="Ha perdido 2/3 o más de sus heridas"}}
 if(!half)return null;
 const m=moraleMod(B),pass=x=>!B.sh()&&(x===6||(x!==1&&x+m>=B.q));
 const[r]=await rollDice({n:1,own:B.kind==="h",title:`Moral de ${B.name}`,sub:`${why}. Calidad ${B.q}+${m?(m>0?", +":", ")+m:""}${B.sh()?" · Aturdida: falla seguro":""}`,need:`${Math.max(2,Math.min(6,B.q-m))}+ aguanta`,ok:pass});
 let ok=pass(r);
 if(!ok&&hasR(B.rules,"Fearless")&&d6()>=4)ok=true;
 let txt=`Moral de ${B.name} (${B.q}+): ${r}${m?(m>0?"+":"")+m:""} → ${ok?"aguanta":"falla"}`;
 /* Una unidad enemiga que falla la moral huye: sale de la mesa. Un héroe queda Aturdido (y se puede pagar para evitarlo). */
 if(!ok){if(B.kind==="h"){if(!B.h.st.includes("at"))B.h.st.push("at");txt+=` y queda Aturdido`;G.offerIgnore=B.id}
  else{B.g.hp=0;txt+=` y huye: la unidad sale de la mesa`;log(`${B.name} huye del campo de batalla.`,"ok")}}
 return txt}

/* Un combate completo: disparo (shoot) o cuerpo a cuerpo (melee, con devolución de golpes). Deja el resumen en G.last.
   fo.charge=false: ataque sin cargar (ya estaban en contacto): sin bonos de carga y sin separarse después. */
async function fight(A,B,kind,fo){G.offerIgnore=null;const melee=kind==="melee",ch=!fo||fo.charge!==false,L={kind,a:A.name,b:B.name,aK:A.kind,steps:[],morale:[],charge:ch};
 /* Disparo: solo armas a tiro y a la vista (Indirect sin vista si mantiene). Una sola arma por acción (la elegida o la mejor). */
 const wA=fo&&fo.only?[fo.only]:oneW(A,B,melee?A.ws.filter(isMelee):shootWs(A,B,fo&&fo.hold),melee,ch);
 const hitX=[],used=[];   /* hitX: otras unidades alcanzadas por Blast (también pueden tener que tirar moral); used: efectos de un solo uso gastados */
 const res=async(X,Y,ws,o,lab)=>{o.used=used;o.cd=fo&&fo.cd;const r=await strike(X,Y,ws,o);wound(Y,r.wounds);(r.extra||[]).forEach(e=>{wound(e.to,e.wounds);if(e.wounds)hitX.push(e)});
  if(r.selfW){wound(X,r.selfW);log(`${X.name} sufre ${r.selfW} herida${r.selfW>1?"s":""} por el coste de su habilidad.`,"hr")}
  if(r.thorn)L.thorn=(L.thorn||0)+r.thorn;
  L.steps.push({who:X.name,to:Y.name,lab,...r});return r.wounds};
 /* Atacar rompe el «Manto» de un héroe escondido: ya ha elegido objetivo. */
 if(A.kind==="h")fxOf(A).forEach(e=>{if(e.k==="hide")e.broken=true});
 let tA=0,tB=0;
 if(!melee){tB+=await res(A,B,wA,{},"dispara")}
 else{/* Cuerpo a cuerpo: una sola ronda. Ataca el que activa y el defensor solo tira para bloquear; no devuelve golpes. */
  tB+=await res(A,B,wA,{melee:true,charge:ch,pre:fo&&fo.pre},"golpea");
  if(!fxHas(A,"nofat"))A.g.fat=G.round;if(!B.ko()&&!fxHas(B,"nofat"))B.g.fat=G.round;
  /* si nadie cae, el que carga se separa 1″ */
  if(ch&&!A.ko()&&!B.ko()){const dx=A.x-B.x,dy=A.y-B.y,l=Math.hypot(dx,dy)||1,p=tOut([A.x+dx/l*BIN,A.y+dy/l*BIN]);A.g.x=p[0];A.g.y=p[1]}}
 const fA=ruleN(A.rules,"Fear"),fB=ruleN(B.rules,"Fear");
 const mB=await morale(B,tB,melee?fA:0);if(mB)L.morale.push(mB);
 for(const e of hitX){const X=actor(e.to.id);if(X){const mX=await morale(X,e.wounds,0);if(mX)L.morale.push(mX)}}
 if(melee){const mA=await morale(A,tA,fB);if(mA)L.morale.push(mA)}
 /* Efectos de habilidades que se disparan después de atacar (se evalúan con la distancia y el tipo de este ataque). */
 const c0=ctxOf(A,B,{melee,charge:ch,cd:fo&&fo.cd}),post=k=>{const l=fxList(A,k,c0);l.forEach(e=>{if(e.once)used.push([A,e])});return l};
 if(B.ko()){for(const e of post("onKill"))await runOps(A,A,e.ops,{id:e.id})}
 else{post("pushAfter").forEach(e=>shove(B,A,e.v,false));
  for(const e of post("cowerAfter")){if(B.ko())break;const ok=await moralTest(B,`${A.name} lo amenaza (${e.id})`);if(!ok){B.g.sh=true;log(`${B.name} queda Aturdida.`,"ok")}}
  post("debuffOnHit").forEach(e=>{fxAdd(B,{...e.fx,id:e.id});log(`${B.name}: ${e.id} (-1 a impactar hasta el final de la ronda).`,"ok")})}
 const chn=post("chain").find(e=>(e.when!=="kill"||B.ko())&&((e.kind==="shoot"&&!melee)||(e.kind==="chg"&&melee&&ch)||e.kind==="move"));
 if(chn)L.chain={kind:chn.kind,r:chn.r,id:chn.id,from:B.id,fp:[B.x,B.y]};
 /* Reprimenda devota: quien atacó al protegido sufre D3 impactos (si es una unidad enemiga). */
 if(L.thorn&&A.kind==="u"&&!A.ko())await autoHits(`Reprimenda devota (${B.name})`,A,L.thorn,0);
 fxDrop(used);
 L.tA=tA;L.tB=tB;G.last=L;
 const sum=L.steps.filter(s=>s.lab).map(s=>`${s.who} ${s.lab}: ${s.hits} impactos, ${s.wounds} heridas`).join(" · ");
 log(`${melee?(ch?"Cuerpo a cuerpo":"Ataque en contacto"):"Disparo"} · ${sum}${L.morale.length?" · "+L.morale.join(" · "):""}`,melee?"mel":"sho");
 hfSync();checkOver();return L}

/* ---------------------------------------------------------------- eventos de Neth */
/* Efecto automático de cada evento (las tablas son de la misión; el formato 2d6 es oficial). Lo que aún no existe en el
   prototipo (cuadrantes de terreno, fichas de búsqueda, objetos) queda escrito para resolverlo a mano. */
const EVX={11:{st:"at"},12:{st:"ac"},15:{st:"de"},23:{st:"af"},24:{st:"at"},26:{st:"en"},14:{wd:1},21:{hit:1},22:{pw:-1},45:{pw:1},
 13:{m:{k:"st",s:"fue",v:-1}},16:{m:{k:"st",s:"vol",v:-1}},25:{m:{k:"st",s:"des",v:-1}},42:{m:{k:"st",s:"des",v:1}},51:{m:{k:"st",s:"vol",v:1}},54:{m:{k:"st",s:"fue",v:1}},
 32:{m:{k:"def",v:-1},all:1},33:{m:{k:"hit",v:-1},all:1},35:{m:{k:"rng",v:-6},all:1},36:{m:{k:"mor",v:-1},all:1},
 41:{m:{k:"morh",v:1}},44:{m:{k:"rngh",v:6}},52:{m:{k:"mov",v:1}},53:{m:{k:"hitm",v:1}},55:{m:{k:"hits",v:1}},56:{m:{k:"defh",v:1}},
 46:{en:1},64:{gold:15},65:{pot:1},61:{item:"Elixir de poder"},63:{item:"Bomba aturdidora"}};
const ST_N={at:"Aturdido",af:"Afligido",en:"Enfermo",de:"Debilitado",ac:"Afectado"};
function rollEvent(a,b){const n=a*10+b,e=(DATA.ev||[]).find(x=>x[0]===String(n))||[String(n),"Evento","—"],x=EVX[n]||{},hs=liveHeroes();
 G.mod=null;let who="",eff="",hi=-1;
 const tgt=hs.length?hs[Math.floor(Math.random()*hs.length)]:null;if(tgt){hi=tgt.g.hi;who=tgt.name}
 if(x.st&&tgt){if(!tgt.h.st.includes(x.st))tgt.h.st.push(x.st);eff=`${who} queda ${ST_N[x.st]}.`}
 else if(x.wd&&tgt){const w=d3();wound(tgt,w);eff=`${who} sufre ${w} heridas.`}
 else if(x.hit&&tgt){const n2=d3();let w=0;const bl=[];for(let k=0;k<n2;k++){const r=d6(),blk=r===6||(r!==1&&r+defMod(tgt)>=tgt.d);bl.push(r);if(!blk)w++}wound(tgt,w);eff=`${who} recibe ${n2} impactos (Defensa ${tgt.d}+: ${bl.join(", ")}) y sufre ${w} heridas.`}
 else if(x.pw&&tgt){const v=d3(),h=tgt.h;if(x.pw<0){const lost=Math.min(h.pw,v),ex=v-lost;h.pw-=lost;if(ex)wound(tgt,ex);eff=`${who} pierde ${v} de poder${ex?` (no le llegaba: ${ex} heridas por agotamiento)`:""}.`}else{h.pw=Math.min(h.pwMax,h.pw+v);eff=`${who} recupera ${v} de poder.`}}
 else if(x.m){G.mod={n,h:x.all?-1:hi,...x.m,t:e[1]};eff=x.all?"Activo para todos hasta el siguiente evento.":`Le toca a ${who}, hasta el siguiente evento.`}
 else if(x.en){const us=liveUnits();if(us.length){const u=us[Math.floor(Math.random()*us.length)];u.g.sh=true;eff=`${u.name} queda Aturdida.`}else eff="No hay enemigos en la mesa: no pasa nada."}
 else if(x.gold&&tgt){tgt.h.gold=(+tgt.h.gold||0)+x.gold;eff=`${who} recibe ${x.gold} de oro.`}
 else if(x.pot&&tgt){tgt.h.pot=(+tgt.h.pot||0)+1;eff=`${who} recibe una Poción de salud.`}
 else if(x.item&&tgt){tgt.h.sk.push({g:"equipo",n:x.item,k:"Consumible",d:"Recibido en un evento de Neth (tablero virtual)."});eff=`${who} recibe: ${x.item}.`}
 else eff=n===66&&tgt?`${who} gana D3 de XP: anótalo en su ficha.`:"Todavía no se aplica solo en el prototipo: resuélvelo a mano.";
 if(x.m&&x.m.k==="st"&&!x.all)eff=`${who}: ${e[2].replace(/^Un héroe al azar /,"").replace(/\.$/,"")}.`;
 G.ev={a,b,n,t:e[1],x:e[2],eff,tone:a<=2?"bad":a===3?"all":"ok"};G.needEv=false;
 log(`Evento de Neth ${n} · ${e[1]}: ${eff}`,"ev");hfSync();checkOver()}

/* ---------------------------------------------------------------- flujo de la ronda */
function startGame(){G.round=1;G.al=1;G.phase=G.needEv?"event":"heroes";G.heroes.forEach(h=>{h.act=0;h.main="";h.extra=false;h.done=[];h.ex=false});G.units.forEach(u=>{u.pick=false});G.units.slice().forEach(u=>{if(!u.fresh)scoutDeploy(u)});log("Empieza la partida. Ronda 1 · Noche.","rd")}
function toHeroes(){G.phase="heroes";G.cur=-1;G.act=null;G.heroes.forEach(h=>{h.act=0;h.main="";h.extra=false;h.done=[];h.stc=false;h.ex=false})}
function heroesDone(){return G.heroes.every(gh=>{const a=actor(gh.id);return!a||a.ko()||gh.act===2})}
/* Fin de ronda: Alertness +1 (o +2 si no queda ningún enemigo). A 6 entran refuerzos y vuelve a 1 (regla de la casa: cuenta de 1 a 6). */
/* Fin de ronda: un dado de alerta (se tira en el centro, o lo metes tú). De 1 a 5, la alerta sube 1; con un 6, sube 2.
   A 6 entran refuerzos y vuelve a 1 (regla de la casa: cuenta de 1 a 6). */
/* Sin enemigos en la mesa al acabar la ronda (oficial: +2): no se tira el dado; sale un cartel y la alerta sube 2. */
async function endRound(){G.units.forEach(u=>{u.act=false;u.fx=(u.fx||[]).filter(e=>e.until!=="round")});G.heroes.forEach(h=>{h.fx=(h.fx||[]).filter(e=>e.until!=="round")});G.phase="end";const none=!liveUnits().length;G.endInfo={r:G.round,add:0,pending:!none,none};paint();
 const v=none?0:(await rollDice({n:1,own:true,title:`Dado de alerta · fin de la ronda ${G.round}`,sub:"De 1 a 5, la alerta sube 1. Con un 6, sube 2.",need:"1-5 → +1 · 6 → +2",ok:r=>r===6}))[0];
 U.busy=false;
 const add=none||v===6?2:1;let al=G.al+add,rf=false;
 if(al>=6){al=1;rf=true}
 const info={r:G.round,add,die:v,none,rf,n:0};G.al=al;
 if(rf)info.n=reinforce();
 log(`Fin de la ronda ${G.round}: ${none?"no queda ningún enemigo en la mesa":"dado de alerta "+v} → Alertness +${add} → ${rf?"6: ¡refuerzos!":G.al+"/6"}.`,"rd");
 G.endInfo=info}
function nextRound(){G.round++;G.endInfo=null;G.last=null;G.aiDone=[];log(`Ronda ${G.round} · ${tod()}.`,"rd");if(G.needEv){G.phase="event";G.ev=null}else toHeroes()}
function checkOver(){if(G.phase==="setup"||G.phase==="deploy"||G.over)return;if(G.heroes.length&&!liveHeroes().length){G.over="lost";log("Todos los héroes están inconscientes a la vez: derrota. Hay que repetir el capítulo.","bad")}}
function hfSync(){try{hfSave();hfMeds();if(HF.open)hfPaint()}catch(e){}}

/* Un «pling» corto de dos notas, sintetizado (sin archivos). Si el navegador no deja sonar, no pasa nada. */
let AC=null;
function pling(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();const t0=AC.currentTime;
 [[1318.5,0],[1760,.13]].forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=f;o.connect(g);g.connect(AC.destination);
  g.gain.setValueAtTime(0,t0+d);g.gain.linearRampToValueAtTime(.22,t0+d+.012);g.gain.exponentialRampToValueAtTime(.0001,t0+d+.9);o.start(t0+d);o.stop(t0+d+1)})}catch(e){}}
const DIARY={n:"Diario del olvidado",k:"Objeto de misión",d:"Sus páginas siguen intactas aunque el Vacío borró casi todo lo demás. Es un objeto de misión: se usará en la siguiente. Contra el Heraldo del Umbral da AP(1) a los ataques de quien lo lleva en la pelea de jefe."};
/* ---------------------------------------------------------------- rastros del pueblo (objetivo principal)
   Tres braseros, cada uno en un cuadrante distinto y pegado a una casa (decisión de Nacho, 2026-11-20). Se colocan al azar al
   desplegar. No bloquean el paso ni la vista: héroes y enemigos pasan y se paran encima. Un héroe a OBJD o menos gasta una acción de
   habilidad y pasa una tirada de Voluntad (misión 1); con éxito, el brasero se enciende. Con los tres encendidos se cumple el principal
   (regla de la casa: sin la tirada de 5+). */
function placeTracks(){const houses=TOBS.filter(o=>o.k==="casa"),P=tNav().P,d=TCL+11;
 const okPt=(p,q)=>p[0]>=30&&p[0]<=570&&p[1]>=30&&p[1]<=570&&quadOf(p[0],p[1])===q&&!P.some(pl=>bHit(p,p,pl))&&CC.every(c=>Math.hypot(c[0]-p[0],c[1]-p[1])>=100);
 const spots=o=>{const r=[];for(const t of[.25,.5,.75])r.push([o.x+o.w*t,o.y-d],[o.x+o.w*t,o.y+o.h+d],[o.x-d,o.y+o.h*t],[o.x+o.w+d,o.y+o.h*t]);return r};
 for(let tries=0;tries<20;tries++){const qs=[0,1,2,3].sort(()=>Math.random()-.5),res=[];
  for(const q of qs){if(res.length===3)break;const c=[];houses.forEach(o=>spots(o).forEach(p=>{if(okPt(p,q)&&res.every(r=>Math.hypot(r.x-p[0],r.y-p[1])>=150))c.push({x:+p[0].toFixed(1),y:+p[1].toFixed(1),q})}));
   if(c.length)res.push(c[Math.floor(Math.random()*c.length)])}
  if(res.length===3)return res.sort((a,b)=>a.q-b.q).map((t,i)=>({...t,i,on:false}))}
 return[]}
function ensureTracks(){if(G.phase!=="setup"&&!(G.tracks&&G.tracks.length))G.tracks=placeTracks()}
function completeTrack(t,a){t.on=true;t.by=a.name;const n=G.tracks.filter(x=>x.on).length;log(`${a.name} recupera el ${ORD[t.i]} rastro (${n}/${G.tracks.length}). El brasero se enciende.`,"ok");
 if(n===G.tracks.length&&!G.prim){G.prim=true;G.diary=a.name;log(`Objetivo principal cumplido: los tres rastros están recuperados. ${a.name} recoge el diario del olvidado.`,"ok");
  if(!(a.h.sk||[]).some(x=>x.n===DIARY.n)){a.h.sk=a.h.sk||[];a.h.sk.push({g:"equipo",n:DIARY.n,k:DIARY.k,d:DIARY.d});hfSync()}
  U.prim={hero:a.name,t0:Date.now()};pling();setTimeout(()=>{if(U.prim&&Date.now()-U.prim.t0>=PRIM_MS-80){U.prim=null;paint()}},PRIM_MS)}}
/* Recuperar un rastro: acción de habilidad, tirada de Voluntad (la tira el jugador). Si falla, puede gastar 2 de poder para que cuente como superada. */
async function doTrack(gh,a,t){const h=a.h,m=statMod(h,"vol"),pass=x=>x===6||(x!==1&&x+m>=h.vol);
 G.act={k:"obj",st:"fight"};U.sel=a.id;paint();
 const[r]=await rollDice({n:1,own:true,title:`${h.name} recupera el ${ORD[t.i]} rastro`,sub:`Acción de habilidad · tirada de Voluntad ${h.vol}+${m?(m>0?", +":", ")+m:""}`,need:`${Math.max(2,Math.min(6,h.vol-m))}+ pasa`,ok:pass});
 endDice();U.busy=false;let ok=pass(r);
 if(ok)completeTrack(t,a);
 else{log(`${h.name} falla la tirada de Voluntad (${r}${m?(m>0?"+":"")+m:""}) y no recupera el rastro.`,"hr");
  if(h.pw>=2&&await new Promise(res=>{U.wilAsk={name:h.name,pw:h.pw,res};paint()})){h.pw-=2;hfSync();log(`${h.name} gasta 2 de poder: la tirada cuenta como superada.`,"hr");completeTrack(t,a)}}
 finishAction(gh,"obj");save();paint()}

/* ---------------------------------------------------------------- activación de los héroes */
/* Al activarse, primero los estados (Core Rules: Afligido Fue, Debilitado Des, Enfermo Vol; Aturdido = se queda quieto). */
function heroStart(gh){const a=actor(gh.id),h=a.h;gh.act=1;gh.stc=true;gh.seen=liveUnits().filter(u=>los(u,a)).map(u=>u.id);const out=[];
 if(h.st.includes("af")){const t=statTest(h,"fue","Afligido · Fuerza");out.push(t.txt);if(t.ok)h.st=h.st.filter(s=>s!=="af");else{wound(a,1);out.push("1 herida")}}
 if(h.st.includes("de")){const t=statTest(h,"des","Debilitado · Destreza");out.push(t.txt);if(t.ok)h.st=h.st.filter(s=>s!=="de")}
 if(h.st.includes("en")){const t=statTest(h,"vol","Enfermo · Voluntad");out.push(t.txt);if(t.ok)h.st=h.st.filter(s=>s!=="en")}
 if(out.length)log(`${h.name} se activa · ${out.join(" · ")}.`,"hr");else log(`${h.name} se activa.`,"hr");hfSync();checkOver()}
/* pulgadas entre peanas: a esta distancia o menos es cuerpo a cuerpo (Atacar); a más, hay que cargar.
   La norma dice 1″; prueba de Nacho: 1,5″ (antes 2″). Parámetro interno: al jugador se le sigue diciendo «1″» (CT). */
const CONTACT=1.5,CT="1″";
const OBJD=CONTACT;   /* pulgadas, desde la peana del héroe hasta el rastro (interno, como CONTACT; el texto dice 1″) */
const ORD=["primer","segundo","tercer"],PRIM_MS=6200;
const trkNear=a=>(G.tracks||[]).filter(t=>!t.on&&Math.max(0,Math.hypot(a.x-t.x,a.y-t.y)-a.r)/BIN<=OBJD+.01);
const ACTS=[["rest","Descansar","Recupera todo el poder. No hace nada más.",0],["hold","Mantener","Se queda quieto sin hacer nada más.",0],["shoot","Disparar","No se mueve y dispara (Mantener y disparar).",0],["adv","Avanzar","Mueve y puede disparar después.",1],["rush","Correr","Mueve el doble. No dispara.",2],["obj","Recuperar rastro","Acción de habilidad: a "+CT+" de un rastro, pasa una tirada de Voluntad.",0],["atk","Atacar","Golpea a un enemigo a "+CT+" o menos. No se mueve.",0],["chg","Cargar","Mueve hasta un enemigo a más de "+CT+" y lucha cuerpo a cuerpo.",2]];
/* Acciones por activación: cada héroe tiene 2. Avanzar, Mantener y Atacar cuestan 1; Correr y Cargar cuestan 2 (usan las dos).
   Descansar ocupa la activación entera. Con 3 de poder gana una acción extra (1 acción). */
const ACOST={rest:2,hold:1,shoot:1,obj:1,adv:1,rush:2,atk:1,chg:2};
const usedA=gh=>(gh.done||[]).reduce((s,k)=>s+(ACOST[k]||1),0);
const leftA=gh=>2+(gh.ex?1:0)-usedA(gh);
const canExtra=gh=>{const h=heroOf(gh);return!!h&&!gh.ex&&h.pw>=3};
/* Acciones que aún puede gastar ahora (con la acción extra, si puede pagarla). */
const freeA=gh=>Math.max(0,leftA(gh));
const atkTargets=a=>liveUnits().filter(u=>gap(a,u)<=CONTACT+.01);
function moveLim(a,k){const A=G.act;if(A&&A.st==="move"&&A.lim!=null)return A.lim;const s=speed(a);return k==="adv"?s[0]:k==="rush"||k==="chg"?s[1]:0}
/* Camino del héroe hasta p sin pasarse; no puede acabar a menos de 1″ de un enemigo (solo cargando). */
function heroReach(a,p,lim){let r=tReach([a.x,a.y],p,lim);if(!r)return null;const en=liveUnits();
 const bad=q=>en.some(e=>Math.hypot(e.x-q[0],e.y-q[1])<a.r+e.r+BIN);
 if(bad(r.end)){let L=Math.min(r.len,lim*BIN);while(L>0){L-=BIN/2;const c=tReach([a.x,a.y],r.end,Math.max(0,L)/BIN);if(c&&!bad(c.end)){r=c;break}}if(L<=0)return{pts:[[a.x,a.y]],len:0,end:[a.x,a.y],cut:true}}
 const occ=actors().filter(o=>o.id!==a.id&&o.kind==="h");if(occ.some(o=>Math.hypot(o.x-r.end[0],o.y-r.end[1])<o.r+a.r)){const f=freeSpot(r.end,a.r,a.id);r={...r,end:f,pts:[...r.pts.slice(0,-1),f]}}
 return r}
/* Camino para cargar contra B: hasta quedar en contacto, sin pasar del tope de correr o cargar. */
function chargePath(a,b,lim0){const lim=lim0!=null?lim0:Math.max(6,moveLim(a,"chg")+((has(a,"Highborn")||has(a,"Royal Legion"))?2:0)-((has(b,"Wild Veil")||has(b,"Shadowborn"))?2:0));const p=tPath([a.x,a.y],[b.x,b.y]);if(!p)return null;const need=p.len-touch(a,b);if(need>lim*BIN+.5)return{ok:false,len:need};
 const r=tReach([a.x,a.y],[b.x,b.y],Math.max(0,need)/BIN);return{ok:true,len:Math.max(0,need),pts:r?r.pts:[[a.x,a.y]],end:r?r.end:[a.x,a.y]}}
/* Arma a distancia elegida por el héroe (la primera si solo tiene una) y enemigos a los que puede disparar con ella. */
const rwOf=(a,A)=>{const rw=a.ws.filter(isRanged);return rw.length?rw[Math.min((A&&A.rw)||0,rw.length-1)]:null};
function shootTargets(a){const A=G.act,w=rwOf(a,A),hold=!!A&&(A.k==="hold"||A.k==="shoot");if(!w)return[];let L=liveUnits().filter(u=>canShoot(a,u,hold,w));
 if(A&&A.rlim)L=L.filter(u=>gap(a,u)<=A.rlim+.01);
 if(A&&A.chain)L=L.filter(u=>u.id!==A.chain.from&&(!A.chain.r||(Math.hypot(u.x-A.chain.fp[0],u.y-A.chain.fp[1])-u.r)/BIN<=A.chain.r+.01));
 return L}
function chargeTargets(a){const A=G.act;return liveUnits().filter(u=>gap(a,u)>CONTACT+.01&&(!A||!A.chain||(u.id!==A.chain.from&&(!A.chain.r||(Math.hypot(u.x-A.chain.fp[0],u.y-A.chain.fp[1])-u.r)/BIN<=A.chain.r+.01)))).map(u=>({u,c:chargePath(a,u,A&&A.lim)})).filter(x=>x.c&&x.c.ok)}
function endAct(gh){gh.act=2;G.cur=-1;G.act=null;U.dest=null;U.sel="";if(heroesDone())log("Todos los héroes han actuado. Turno de la IA.","rd")}

/* ---------------------------------------------------------------- IA */
/* Diagrama de las Core Rules: si al moverse puede disparar o cargar a un héroe → avanzar y disparar al más cercano,
   mantener y disparar si ya está a tiro, o cargar al más cercano si hace más daño que disparando; si no, correr hacia
   el más cercano. Sin objetivos en el prototipo, el «AI Goal» es siempre el héroe más cercano (decisión de Nacho). */
function aiPlan(a){const hs=aiTargets(a);if(!hs.length)return{k:"idle",why:liveHeroes().length?"No puede elegir a ningún héroe como objetivo: están ocultos o protegidos.":"No queda ningún héroe en pie."};
 if(a.sh())return{k:"rally",why:"Está Aturdida: pasa la activación quieta y se recupera."};
 const P=hs.map(h=>({h,p:tPath([a.x,a.y],[h.x,h.y])})).filter(x=>x.p).sort((x,y)=>x.p.len-y.p.len);
 if(!P.length)return{k:"idle",why:"No encuentra camino hasta ningún héroe."};
 const frozen=fxHas(a,"nomove"),cl=P[0].h,s=frozen?[0,0]:speed(a),rw=a.ws.filter(isRanged),mw=a.ws.filter(isMelee);
 const sees=hs.some(h=>los(a,h)||gap(a,h)<=12);
 /* Ya en contacto (a CONTACT o menos de un héroe): ataca sin cargar. */
 const adj=mw.length?hs.filter(h=>gap(a,h)<=CONTACT+.01).sort((x,y)=>gap(a,x)-gap(a,y))[0]:null;
 if(adj)return{k:"atk",t:adj,to:[a.x,a.y],pts:[[a.x,a.y]],why:`Ya está en contacto con ${adj.name} (a ${CT} o menos): ataca sin cargar.`};
 /* opción de disparo: quieto si ya está a tiro; si no, avanzando hacia el más cercano */
 /* Mantener con un arma Indirect: dispara aunque no vea al héroe (Core Rules). */
 let shoot=null;if(rw.length){const now=hs.filter(h=>canShoot(a,h,true)).sort((x,y)=>gap(a,x)-gap(a,y));
  if(now.length)shoot={k:"hold",t:now[0],to:[a.x,a.y],pts:[[a.x,a.y]]};
  else{const r=tReach([a.x,a.y],[cl.x,cl.y],s[0]);if(r){const stop=stopShort(a,r,cl);const g={...a,x:stop.end[0],y:stop.end[1]};const t=hs.filter(h=>canShoot(g,h,false)).sort((x,y)=>gap(g,x)-gap(g,y));if(t.length)shoot={k:"adv",t:t[0],to:stop.end,pts:stop.pts,g}}}}
 const cp=!frozen&&(mw.length||ruleN(a.rules,"Impact"))?chargePath(a,cl):null,charge=cp&&cp.ok?{k:"chg",t:cl,to:cp.end,pts:cp.pts}:null;
 /* Daño esperado con UNA arma (la mejor), igual que cuando ataca de verdad. */
 const best=(X,T,ws,mel,chg)=>ws.length?Math.max(...ws.map(w=>expDmg(X,T,[w],mel,chg))):(chg?expDmg(X,T,[],mel,chg):0);
 const eS=shoot?best(shoot.g||a,shoot.t,shootWs(shoot.g||a,shoot.t,shoot.k==="hold"),false,false):0,eC=charge?best(a,cl,mw,true,true):0;
 const base=sees?"Ve a un héroe":"No ve a ningún héroe, pero va a por el más cercano";
 if(charge&&(!shoot||eC>eS))return{...charge,why:`${base}: cargar hace más daño (≈${eC.toFixed(1)} heridas) que disparar${shoot?` (≈${eS.toFixed(1)})`:""}.`};
 if(shoot)return{...shoot,why:`${base}: ${shoot.k==="hold"?"ya está a tiro, se queda quieta y dispara":"avanza para ponerse a tiro y dispara"} (≈${eS.toFixed(1)} heridas).`};
 if(frozen)return{k:"idle",why:"No puede moverse hasta el final de la ronda (habilidad de un héroe) y no tiene a nadie a tiro ni en contacto."};
 const r=tReach([a.x,a.y],[cl.x,cl.y],s[1]);const st=r?stopShort(a,r,cl):{end:[a.x,a.y],pts:[[a.x,a.y]]};
 return{k:"rush",t:cl,to:st.end,pts:st.pts,why:`${base}: no llega a disparar ni a cargar, así que corre hacia ${cl.name}.`}}
/* Al correr o avanzar no se acaba a menos de 1″ de un héroe (eso solo cargando). */
function stopShort(a,r,h){const minD=a.r+h.r+BIN+1;let pts=r.pts,end=r.end;
 if(Math.hypot(end[0]-h.x,end[1]-h.y)<minD){const L=Math.max(0,r.len-(minD-Math.hypot(end[0]-h.x,end[1]-h.y)));const c=tReach([a.x,a.y],[h.x,h.y],L/BIN);if(c){pts=c.pts;end=c.end}}
 const f=freeSpot(end,a.r,a.id);if(f[0]!==end[0]||f[1]!==end[1]){end=f;pts=[...pts.slice(0,-1),f]}
 return{pts,end}}
const nextAI=()=>{const hs=liveHeroes();return liveUnits().filter(u=>!u.g.act).map(u=>({u,d:hs.length?Math.min(...hs.map(h=>gap(u,h))):0})).sort((x,y)=>x.d-y.d)[0]};
/* ---------------------------------------------------------------- dados con bandeja
   Cada grupo de dados sale en una bandeja sobre el tablero. Si es una tirada del jugador, espera a que pulse «Lanzar dados»
   (animación) o meta los números a mano; si es de la IA, rueda sola y se queda a la vista un momento. */
const DICE_ACTS=new Set(["droll","dman","dauto","dapply","dnext"]);
const dieFace=(v,sm)=>sm?String(v):dots(v);
function rollDice(o){return new Promise(res=>{const n=Math.max(0,o.n|0);
 const D={n,small:n>8,groups:o.groups||null,title:o.title,sub:o.sub||"",need:o.need||"",ok:o.ok||(()=>true),own:!!o.own,vals:null,st:o.own?"ask":"roll",man:false,mv:Array(n).fill(0),res};
 U.dice=D;U.busy=true;if(D.own)paintDice();else startRoll(D)})}
function startRoll(D){D.vals=Array.from({length:D.n},d6);D.st="roll";paintDice();
 const fin=()=>{D.st="done";paintDice();if(D.own)return;setTimeout(()=>{if(U.dice===D)D.res(D.vals)},REDUCE?150:1900)};
 if(REDUCE){fin();return}
 let k=0;const it=setInterval(()=>{ROOT.querySelectorAll("#tvDice .tv-dx.rol").forEach(e=>{e.innerHTML=dieFace(d6(),D.small)});if(++k>12){clearInterval(it);fin()}},75)}
function diceAct(k){const D=U.dice;if(!D)return;
 /* Las tiradas del jugador esperan a que pulse «Seguir» para ver el resultado; las de la IA siguen solas. */
 if(k==="dnext"){if(D.st!=="done"||!D.own)return;D.st="gone";paintDice();D.res(D.vals);return}
 if(D.st!=="ask")return;
 if(k==="droll"){startRoll(D);return}
 if(k==="dman"){D.man=true;paintDice();return}
 if(k==="dauto"){D.man=false;paintDice();return}
 if(k==="dapply"){if(D.mv.some(v=>!v))return;D.vals=D.mv.slice();D.st="done";paintDice();if(D.own)return;setTimeout(()=>{if(U.dice===D)D.res(D.vals)},REDUCE?0:1200)}}
function endDice(){U.dice=null;paintDice()}
function diceHTML(){const D=U.dice;if(!D||D.st==="gone")return"";const sm=D.small,done=D.st==="done";let row,ctl;
 if(D.st==="ask"&&D.man){row=D.mv.map((v,i)=>`<select class="tv-dsel" data-i="${i}" aria-label="Dado ${i+1}"><option value="0">?</option>${[1,2,3,4,5,6].map(x=>`<option value="${x}"${v===x?" selected":""}>${x}</option>`).join("")}</select>`).join("");
  ctl=`<div class="tv-row c"><button type="button" class="tv-btn" id="tvDapply" data-tv="dapply" ${D.mv.every(Boolean)?"":"disabled"}>Usar estos números</button><button type="button" class="tv-ghostb" data-tv="dauto">Prefiero tirarlos</button></div>`}
 else if(D.st==="ask"){row=Array.from({length:D.n},()=>`<span class="tv-dx q${sm?" sm":""}">?</span>`).join("");
  ctl=`<div class="tv-row c"><button type="button" class="tv-btn big" data-tv="droll">Lanzar dados</button><button type="button" class="tv-ghostb" data-tv="dman">Meter los números a mano</button></div>`}
 else{row=D.vals.map((v,i)=>`<span class="tv-dx${sm?" sm":""}${done?(D.ok(v,i)?" ok":" ko"):" rol"}">${dieFace(v,sm)}</span>`).join("");
  ctl=done?`<p class="tv-dsum"><b>${D.vals.filter((v,i)=>D.ok(v,i)).length}</b> de ${D.n} · ${esc(D.need)}</p>${D.own?`<div class="tv-row c"><button type="button" class="tv-btn big" data-tv="dnext">Seguir</button></div>`:""}`:`<p class="tv-dsum">Rodando los dados…</p>`}
 return`<div class="tv-dtray ${D.own?"own":"ai"}" role="dialog" aria-modal="true" aria-label="Tirada de dados"><p class="tv-lab">${D.own?"Tira tú los dados":"Tirada de la IA"}</p><b class="tv-dt">${esc(D.title)}</b><p class="tv-dsub">${esc(D.sub)}</p><div class="tv-dgrid${D.groups?" grp":""}">${D.groups?groupRow(D,row):row}</div>${ctl}</div>`}
/* Con grupos (ataque conjunto): cada unidad en su bloque, con su nombre encima. */
function groupRow(D,row){const cells=row.split("</span>").filter(s=>s.trim()).map(s=>s+"</span>");if(cells.length!==D.n)return row;let k=0;
 return D.groups.map(g=>{const part=cells.slice(k,k+g.n).join("");k+=g.n;return`<div class="tv-dgroup"><small>${esc(g.label)}</small><div class="tv-dgrid">${part}</div></div>`}).join("")}
function paintDice(){const el=$("#tvDice");if(!el)return;el.innerHTML=diceHTML();const D=U.dice;if(D&&D.st==="ask"&&!D.man){const b=el.querySelector("[data-tv=droll]");if(b)b.focus({preventScroll:true})}}
const pendingHeroes=()=>G.heroes.filter(gh=>{const a=actor(gh.id);return a&&!a.ko()&&gh.act!==2});
function primHTML(){const P=U.prim;if(!P)return"";const el=Math.max(0,(Date.now()-P.t0)/1000);
 return`<div class="tv-prim" style="animation-delay:-${el.toFixed(2)}s" role="status" aria-live="polite" data-tv="primclose"><div class="tv-primc"><span class="tv-primi" aria-hidden="true"><svg viewBox="-16 -34 32 52" width="44" height="72">${tBraz(0,0,true)}</svg></span><p class="tv-lab">Misión I · El pueblo vacío</p><h3>Objetivo principal cumplido</h3><p>Los tres rastros están recuperados y los braseros arden.</p>
 <div class="tv-diary"><b>${esc(P.hero)} ha conseguido el diario del olvidado</b><span>${esc(DIARY.d)}</span></div><small>Toca para cerrar</small></div></div>`}
function wilHTML(){const w=U.wilAsk;return`<div class="tv-conf" role="alertdialog" aria-modal="true" aria-label="Tirada de Voluntad fallida"><div class="tv-confc"><b>${esc(w.name)} falla la tirada de ${esc(w.what||"Voluntad")}</b><p>Puede gastar ${w.cost||2} de poder para que cuente como superada (Core Rules). Ahora tiene ${w.pw} de poder.</p><div class="tv-row"><button type="button" class="tv-btn" data-tv="wily">Gastar ${w.cost||2} de poder</button><button type="button" class="tv-ghostb" data-tv="wiln">No gastar</button></div></div></div>`}
function confirmHTML(){const names=pendingHeroes().map(gh=>{const h=heroOf(gh);return esc(h?h.name:gh.n)});
 return`<div class="tv-conf" role="alertdialog" aria-modal="true" aria-label="Confirmar el final del turno"><div class="tv-confc"><b>¿Terminar el turno de los héroes?</b><p>${names.join(", ")} todavía ${names.length>1?"tienen":"tiene"} acciones por hacer. Si terminas ahora las pierden y pasa el turno de la IA.</p><div class="tv-row"><button type="button" class="tv-btn" data-tv="toai2">Sí, terminar el turno</button><button type="button" class="tv-ghostb" data-tv="noconf">Volver</button></div></div></div>`}
/* El turno de la IA va despacio para poder seguirlo: se ve qué unidad actúa y por qué, cómo se mueve, y cada dado, evento por evento. */
async function runAI(){if(U.busy)return;U.busy=true;G.phase="ai";G.aiDone=[];G.aiTot=liveUnits().length;paint();
 const W=ms=>sleep(REDUCE?0:ms);
 await W(1000);
 for(;;){if(G.over)break;const n=nextAI();if(!n)break;const a=n.u;a.g.act=true;U.sel=a.id;await sporeCheck(a);if(a.ko()){G.aiDone.push(a.id);save();paint();continue}
  const pl=aiPlan(a);G.aiCur={id:a.id,k:pl.k,why:pl.why,t:pl.t?pl.t.name:""};paint();
  await W(1800);
  if(pl.k==="rally"){a.g.sh=false;log(`${a.name} se recupera (deja de estar Aturdida).`,"ai");paint();await W(1500)}
  else if(pl.k==="idle"){log(`${a.name}: ${pl.why}`,"ai");paint();await W(1000)}
  else{const len=pathLen(pl.pts)/BIN,verb={hold:"se queda quieta",adv:"avanza",rush:"corre",chg:"carga",atk:"ataca"}[pl.k];
   log(`${a.name} ${verb}${len>.05?" "+inch(len):""}${pl.t&&pl.k!=="rush"?" contra "+pl.t.name:pl.k==="rush"?" hacia "+pl.t.name:""}. ${pl.why}`,"ai");paint();
   if(len>.05){await animPath(a.id,pl.pts,Math.min(2200,700+pathLen(pl.pts)*3.6));a.g.x=pl.to[0];a.g.y=pl.to[1];paint();await W(800)}
   if(pl.k==="hold"||pl.k==="adv"){const A=actor(a.id),B=actor(pl.t.id);const hold=pl.k==="hold";if(A&&B&&canShoot(A,B,hold)){fxShot(A,B);await W(900);const L=await fight(A,B,"shoot",{hold});endDice();paint();fxDmg(B,L.tB);if(L.tA)fxDmg(A,L.tA);await W(1800)}}
   if(pl.k==="chg"||pl.k==="atk"){const A=actor(a.id),B=actor(pl.t.id);
   /* Las demás unidades que ya están en contacto con ese héroe atacan a la vez: todos los dados juntos. */
   const grp=pl.k==="atk"&&A&&B?liveUnits().filter(u=>u.id!==a.id&&!u.g.act).map(u=>({u,p:aiPlan(actor(u.id))})).filter(x=>x.p.k==="atk"&&x.p.t&&x.p.t.id===B.id):[];
   if(A&&B&&grp.length){grp.forEach(x=>{x.u.g.act=true;G.aiDone.push(x.u.id)});
    const list=[A].concat(grp.map(x=>actor(x.u.id)));
    const wsL=list.map(X=>oneW(X,B,X.ws.filter(isMelee),true,false));   /* el arma se elige una sola vez */
    const pre=await preRollGroup(B,list.map((X,i)=>({A:X,ws:wsL[i]})));
    log(`${list.map(X=>X.name).join(", ")} atacan a ${B.name} a la vez.`,"ai");paint();
    for(let i=0;i<list.length;i++){const X=list[i];if(B.ko()||G.over)break;fxClash(X,B);await W(700);const L=await fight(X,B,"melee",{charge:false,pre:pre[i],only:wsL[i][0]});endDice();paint();fxDmg(B,L.tB);if(L.tA)fxDmg(X,L.tA);await W(1200)}}
   else if(A&&B){fxClash(A,B);await W(900);const L=await fight(A,B,"melee",{charge:pl.k==="chg",cd:pathLen(pl.pts)/BIN});endDice();paint();fxDmg(B,L.tB);if(L.tA)fxDmg(A,L.tA);await W(2000)}}}
  G.aiDone.push(a.id);save();paint();await W(1200);if(G.over)break}
 G.aiCur=null;U.sel="";U.busy=false;if(!G.over)await endRound();save();paint()}
const pathLen=pts=>{let s=0;for(let i=1;i<pts.length;i++)s+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);return s};

/* ---------------------------------------------------------------- animaciones del tablero */
function tokEl(id){return ROOT.querySelector(`[data-tok="${id}"]`)}
function animPath(id,pts,ms){return new Promise(res=>{const g=tokEl(id),L=pathLen(pts);if(!g||REDUCE||L<1){res();return}
 const dur=ms||Math.min(1100,280+L*2.2),t0=performance.now();g.classList.add("tv-moving");
 const at=d=>{let acc=0;for(let i=1;i<pts.length;i++){const s=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);if(acc+s>=d){const f=(d-acc)/(s||1);return[pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f]}acc+=s}return pts[pts.length-1]};
 const tr=$("#tvTrail");if(tr)tr.innerHTML=`<polyline points="${pts.map(p=>p.join(",")).join(" ")}" class="tv-trail"/>`;
 const fr=now=>{const k=Math.min(1,(now-t0)/dur),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,p=at(L*e);g.setAttribute("transform",`translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})`);if(k<1)requestAnimationFrame(fr);else{g.classList.remove("tv-moving");res()}};
 requestAnimationFrame(fr)})}
function fxLayer(){return $("#tvFx")}
function fxShot(A,B){const f=fxLayer();if(!f||REDUCE)return;const el=document.createElementNS("http://www.w3.org/2000/svg","line");
 el.setAttribute("x1",A.x);el.setAttribute("y1",A.y);el.setAttribute("x2",B.x);el.setAttribute("y2",B.y);el.setAttribute("class","tv-shot "+(A.kind==="h"?"h":"e"));f.appendChild(el);setTimeout(()=>el.remove(),900)}
function fxClash(A,B){const f=fxLayer();if(!f||REDUCE)return;const x=(A.x+B.x)/2,y=(A.y+B.y)/2,el=document.createElementNS("http://www.w3.org/2000/svg","g");
 el.setAttribute("class","tv-clash");el.setAttribute("transform",`translate(${x} ${y})`);el.innerHTML=`<circle r="22"/><path d="M-9 -9L9 9M9 -9L-9 9"/>`;f.appendChild(el);setTimeout(()=>el.remove(),900)}
function fxDmg(B,n){const f=fxLayer();if(!f)return;const el=document.createElementNS("http://www.w3.org/2000/svg","text");
 el.setAttribute("x",B.x);el.setAttribute("y",B.y-B.r-6);el.setAttribute("class","tv-dmg"+(n?"":" zero"));el.textContent=n?"−"+n:"0";f.appendChild(el);setTimeout(()=>el.remove(),1500)}

/* ---------------------------------------------------------------- dibujo del tablero */
const ini=s=>String(s).replace(/\(.*?\)/g,"").split(/\s+/).filter(w=>w&&!/^(de|del|la|las|el|los|en|con|y)$/i.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join("");
function ring(r,fr,col,w){const C=2*Math.PI*r;return`<circle r="${r}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="${w}"/><circle r="${r}" fill="none" stroke="${col}" stroke-width="${w}" stroke-dasharray="${(C*Math.max(0,Math.min(1,fr))).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90)" stroke-linecap="round"/>`}
function heroTok(a,k){const h=a.h,gh=a.g,ko=a.ko(),fr=h.hpMax?h.hp/h.hpMax:0,cid="tvc"+k;
 const pic=h.img?`<clipPath id="${cid}"><circle r="${a.r-2}"/></clipPath><image href="${esc(h.img)}" x="${-a.r}" y="${-a.r}" width="${a.r*2}" height="${a.r*2}" clip-path="url(#${cid})" preserveAspectRatio="xMidYMid slice"/>`:`<circle r="${a.r-2}" fill="#2a2347"/><text class="tv-ti" y="3.6">${esc(ini(h.name))}</text>`;
 const cls=["tv-tok","tv-hero",ko?"ko":"",gh.act===2?"done":"",G.cur===G.heroes.indexOf(gh)?"cur":"",U.sel===a.id?"sel":"",h.st.includes("at")?"shk":"",G.phase==="heroes"&&gh.act===0&&!ko&&!U.dice?"nudge":""].join(" ");
 return`<g class="${cls}" data-tok="${a.id}" transform="translate(${a.x.toFixed(1)} ${a.y.toFixed(1)})"><circle class="tv-halo" r="${a.r+7}"/>${night()?`<circle class="tv-vis" r="${12*BIN+a.r}"/>`:""}<circle r="${a.r+1.5}" fill="#0b0f1e"/>${pic}${ring(a.r+1.8,fr,ko?"#5d5a6e":"#f0d79a",2.4)}${ko?`<path class="tv-kx" d="M-6 -6L6 6M6 -6L-6 6"/>`:""}<text class="tv-tn" y="${a.r+12}">${esc(h.name.split(" ")[0])}</text></g>`}
function unitTok(a){const u=a.g,fr=u.hp/(u.m0*u.t),m=a.models(),fresh=u.fresh===G.round;
 const cls=["tv-tok","tv-unit",u.act&&G.phase==="ai"?"done":"",U.sel===a.id?"sel":"",u.sh?"shk":"",fresh?"fresh":"",u.pick&&G.phase==="deploy"?"pick":""].join(" ");
 const r=a.r,hex=Array.from({length:6},(_,i)=>{const t=Math.PI/3*i+Math.PI/6;return(Math.cos(t)*r).toFixed(1)+","+(Math.sin(t)*r).toFixed(1)}).join(" ");
 return`<g class="${cls}" data-tok="${a.id}" transform="translate(${a.x.toFixed(1)} ${a.y.toFixed(1)})"><circle class="tv-halo" r="${r+7}"/><polygon class="tv-hex" points="${hex}"/>${ring(r+2.6,fr,"#ff8a9a",2.2)}<text class="tv-ti e" y="3.6">${esc(ini(a.name))}</text>${u.m0>1?`<g transform="translate(${r-1} ${-r+1})"><circle r="6.6" class="tv-chip"/><text class="tv-chn" y="2.6">${m}</text></g>`:""}${u.sh?`<g transform="translate(${-r+1} ${-r+1})"><circle r="6.2" class="tv-shc"/><text class="tv-chn" y="2.6">!</text></g>`:""}</g>`}
function boardSVG(){const A=actors();
 const grid=`<pattern id="tvgrid" width="75" height="75" patternUnits="userSpaceOnUse"><path d="M75 0H0V75" fill="none" stroke="rgba(217,184,108,.09)"/></pattern>`;
 const q=QC.map((c,k)=>`<text class="tv-ql" x="${c[0]}" y="${c[1]}">${QN[k]}</text>`).join("")+CC.map((c,k)=>`<g class="tv-cn${G.hc===k+1?" on":""}" transform="translate(${c[0]<300?20:580} ${c[1]<300?20:580})"><circle r="11"/><text y="4">${k+1}</text></g>`).join("");
 const obs=U.obs?TOBS.map(o=>[bPolys(o,TCL),bPolys(o,0)].map((L,j)=>L.map(P=>`<polygon class="tv-ob ${o.k==="casa"?"los":""}${j?"":" cl"}" points="${P.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" ")}"/>`).join("")).join("")).join(""):"";
 const town=TOBS.filter(o=>o.k==="casa").map(o=>`<g class="tv-house"><rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}"/><path d="M${o.x} ${o.y}L${o.x+o.w} ${o.y+o.h}"/></g>`).join("")
  +`<g class="tv-well" transform="translate(300 300)"><circle r="26"/><circle r="18" class="in"/><text y="44">el pozo</text><text y="58" class="sm">cobertura</text></g>`
  +[[0,0],[600,0],[600,600],[0,600]].map(([x,y],i)=>`<path class="tv-carc" d="${x?"M600":"M0"} ${y?525:75}A75 75 0 0 ${i%2?1:0} ${x?525:75} ${y}"/>`).join("");
 const fog=night()?`<rect width="600" height="600" class="tv-night"/>`:dawn()?`<rect width="600" height="600" class="tv-dawn"/>`:"";
 return`<svg class="tv-map" id="tvMap" viewBox="-6 -6 612 612" role="img" aria-label="Tablero de 48 pulgadas"><defs>${grid}<filter id="tvsoft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.6"/></filter><radialGradient id="tvbg" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="#1f2b4f"/><stop offset="1" stop-color="#0c1226"/></radialGradient><clipPath id="tvclip"><rect width="600" height="600"/></clipPath><linearGradient id="tvbfl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffb347"/><stop offset=".6" stop-color="#ec6a2c"/><stop offset="1" stop-color="#ffe27a" stop-opacity=".2"/></linearGradient><radialGradient id="tvbgl"><stop offset="0" stop-color="#ffb347" stop-opacity=".5"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>
 <rect x="-6" y="-6" width="612" height="612" rx="8" class="tv-frame"/>
 <rect width="600" height="600" fill="url(#tvbg)"/><rect width="600" height="600" fill="url(#tvgrid)"/>${fog}
 <path d="M300 0V600M0 300H600" class="tv-qline"/>${town}${tracksSVG()}${q}${obs}
 <rect class="tv-hit" width="600" height="600" data-tv="pt"/>
 <g id="tvOv">${overlay()}</g><g id="tvTrail"></g>
 <g id="tvToks">${A.filter(a=>a.kind==="u").map(unitTok).join("")}${A.filter(a=>a.kind==="h").map((a,k)=>heroTok(a,k)).join("")}</g>
 <g id="tvFx"></g></svg>`}
function tBraz(x,y,lit){const C=lit?"#c99a48":"#3a4566",E=lit?"#f3dc9a":"#55618a";
 return(lit?`<circle cx="${x}" cy="${y-8}" r="20" fill="url(#tvbgl)"/><path class="tv-fl" d="M${x} ${y-27}c-7 8-9 14-4 20c-4-6 4-10 4-20z" fill="url(#tvbfl)"/><path class="tv-fl f2" d="M${x+4} ${y-19}c-4 5-5 8-2 12c-2-3 3-6 2-12z" fill="#fff3c9" opacity=".75"/>`:`<path d="M${x-2} ${y-8}q-4-8 2-14q5-6 0-12" fill="none" stroke="#4a5677" stroke-width="1.2" opacity=".7"/>`)
  +`<path d="M${x-12} ${y-6}h24l-4 7h-16z" fill="${C}" stroke="${E}" stroke-width=".8"/><path d="M${x-6} ${y+1}l-5 12M${x+6} ${y+1}l5 12M${x} ${y+1}v12" stroke="${lit?"#a87d34":"#3a4566"}" stroke-width="1.4"/>`}
/* Los rastros: no reciben clics ni estorban (pointer-events none); el anillo señala hasta dónde llega un héroe. */
function tracksSVG(){const gh=G.phase==="heroes"&&G.cur>=0?G.heroes[G.cur]:null,a=gh?actor(gh.id):null;
 return(G.tracks||[]).map(t=>{const near=a&&!a.ko()&&trkNear(a).includes(t);
  return`<g class="tv-trk${t.on?" on":""}${near?" near":""}" data-trk="${t.i}"><circle class="tv-trkr" cx="${t.x}" cy="${t.y}" r="${OBJD*BIN}"/>${tBraz(t.x,t.y,t.on)}<text class="tv-trkn" x="${t.x}" y="${t.y+27}">${["I","II","III"][t.i]}</text></g>`}).join("")}
/* Capa de ayuda: zona alcanzable, camino elegido, objetivos a tiro o al alcance de la carga. */
function overlay(){let s="";const gh=G.cur>=0?G.heroes[G.cur]:null,a=gh?actor(gh.id):null;
 if(G.phase==="heroes"&&a&&G.act){const k=G.act.k,st=G.act.st;
  if(st==="move"){const lim=moveLim(a,k),sp=[Math.min(speed(a)[0],lim),lim];s+=`<g clip-path="url(#tvclip)" class="tv-reg">${tRegion([a.x,a.y],sp,lim)}</g><circle cx="${a.x}" cy="${a.y}" r="${lim*BIN}" class="tv-rr"/>`;
   if(U.dest){const r=heroReach(a,U.dest,lim);if(r){const d=pathLen(r.pts)/BIN;const e=r.end,b=r.pts[r.pts.length-2]||[a.x,a.y];
    s+=`<polyline points="${r.pts.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" ")}" class="tv-path"/><circle cx="${e[0].toFixed(1)}" cy="${e[1].toFixed(1)}" r="${a.r}" class="tv-ghost"/><g transform="translate(${((e[0]+b[0])/2).toFixed(1)} ${((e[1]+b[1])/2).toFixed(1)})"><rect x="-30" y="-11" width="60" height="22" rx="11" class="tv-pill"/><text class="tv-pt" y="4">${inch(d)}${r.cut?" · máx.":""}</text></g>`}}}
  if(st==="tele"){const R2=G.act.lim*BIN;s+=`<circle cx="${a.x}" cy="${a.y}" r="${R2}" class="tv-rr"/>`;
   if(U.dest){let dx=U.dest[0]-a.x,dy=U.dest[1]-a.y;const Lx=Math.hypot(dx,dy);if(Lx>R2){dx*=R2/Lx;dy*=R2/Lx}s+=`<line x1="${a.x}" y1="${a.y}" x2="${(a.x+dx).toFixed(1)}" y2="${(a.y+dy).toFixed(1)}" class="tv-path"/><circle cx="${(a.x+dx).toFixed(1)}" cy="${(a.y+dy).toFixed(1)}" r="${a.r}" class="tv-ghost"/>`}}
  if(st==="chg")chargeTargets(a).forEach(({u,c})=>{s+=`<polyline points="${c.pts.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" ")}" class="tv-cpath"/><circle cx="${u.x}" cy="${u.y}" r="${u.r+9}" class="tv-tg chg" data-tv="tgt" data-id="${u.id}"/>`});
  if(st==="atk")atkTargets(a).forEach(u=>{s+=`<circle cx="${u.x}" cy="${u.y}" r="${u.r+9}" class="tv-tg chg" data-tv="tgt" data-id="${u.id}"/>`});
  if(st==="shoot"){const w0=rwOf(a,G.act),mx=w0?w0.rng+rngMod(a):0;if(mx>0)s+=`<circle cx="${a.x}" cy="${a.y}" r="${(Math.min(mx,night()?12:99)*BIN+a.r).toFixed(1)}" class="tv-rng"/>`;
   shootTargets(a).forEach(u=>{s+=`<line x1="${a.x}" y1="${a.y}" x2="${u.x}" y2="${u.y}" class="tv-los"/><circle cx="${u.x}" cy="${u.y}" r="${u.r+9}" class="tv-tg sho" data-tv="tgt" data-id="${u.id}"/>`})}}
 if(G.phase==="ai"&&G.aiCur){const a2=actor(G.aiCur.id);if(a2)s+=`<circle cx="${a2.x}" cy="${a2.y}" r="${a2.r+12}" class="tv-aicur"/>`}
 return s}

/* ---------------------------------------------------------------- panel lateral */
const PH=[["event","Evento de Neth"],["heroes","Héroes"],["ai","IA"],["end","Fin de ronda"]];
function pips(){return`<span class="tv-pips" aria-label="Alertness ${G.al} de 6">${[1,2,3,4,5,6].map(k=>`<i class="${k<=G.al?"on":""}${k===6?" six":""}"></i>`).join("")}</span>`}
function head(){const live=G.phase!=="setup"&&G.phase!=="deploy";
 const steps=live?`<ol class="tv-steps">${PH.map(([k,l],i)=>{const cur=G.phase===k,past=PH.findIndex(p=>p[0]===G.phase)>i,skip=k==="event"&&G.phase!=="event"&&!(G.ev&&G.ev.r===G.round);return`<li class="${cur?"cur":""}${past?" past":""}${skip&&!cur?" skip":""}"><b>${i+1}</b>${l}</li>`}).join("")}</ol>`:"";
 return`<header class="tv-head"><button type="button" class="tv-x" data-tv="close" aria-label="Cerrar el tablero virtual"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
 <div class="tv-tt"><small>Prototipo · Reglas de OPR v2.1</small><b>Tablero virtual</b></div>
 ${live?`<div class="tv-stat"><span><small>Ronda</small><b>${G.round}</b></span><span class="tv-tod ${tod()}"><small>Luz</small><b>${tod()}</b></span><span><small>Alertness</small>${pips()}</span><span class="tv-rk${G.prim?" ok":""}"><small>Rastros</small><b>${(G.tracks||[]).filter(t=>t.on).length}/${(G.tracks||[]).length||3}</b></span></div>`:""}
 <div class="tv-hact">${live||G.phase==="deploy"?`<button type="button" class="tv-ghostb${U.sure?" arm":""}" data-tv="reset">${U.sure?"¿Seguro? Pulsa otra vez":"Nueva partida"}</button>`:""}</div>${steps}</header>`}
function heroCard(gh,i){const a=actor(gh.id);if(!a)return"";const h=a.h,ko=a.ko(),st=ko?"Inconsciente":gh.act===2?"Ya ha actuado":gh.act===1?"Activo":"Por activar";
 const canAct=G.phase==="heroes"&&!U.busy&&!ko&&gh.act!==2&&G.cur<0,pend=G.phase==="heroes"&&!ko&&gh.act!==2;
 return`<div class="tv-hcw"><button type="button" class="tv-hc${G.cur===i?" cur":""}${ko?" ko":""}${gh.act===2?" done":""}" data-tv="heroinfo" data-i="${i}" title="Ver la ficha completa">
 <span class="tv-hp">${h.img?`<img src="${esc(h.img)}" alt="">`:`<i>${esc(ini(h.name))}</i>`}</span>
 <span class="tv-hn"><b>${esc(h.name)}</b><small>${st}${h.st.length?" · "+h.st.map(s=>ST_N[s]).join(", "):""}</small>
 <span class="tv-bars"><span class="tv-bar hp"><i style="width:${(h.hp/h.hpMax*100).toFixed(0)}%"></i><em>${h.hp}/${h.hpMax}</em></span><span class="tv-bar pw"><i style="width:${(h.pwMax?h.pw/h.pwMax*100:0).toFixed(0)}%"></i><em>${h.pw}/${h.pwMax}</em></span></span>${G.phase==="heroes"&&!ko?actCount(gh):""}</span></button>${fxRow(gh)}${canAct?`<button type="button" class="tv-btn sm tv-hbtn" data-tv="hero" data-i="${i}">Activar</button>`:""}${G.phase==="heroes"&&canExtra(gh)?`<button type="button" class="tv-ghostb tv-xbtn" data-tv="xtra" data-i="${i}">Acción extra · 3 de poder</button>`:""}${pend?`<span class="tv-pend">Aún le quedan acciones por hacer</span>`:""}</div>`}
/* Contador de acciones del héroe: una pastilla por acción (2, o 3 con la extra). Dorada = le queda; apagada = gastada;
   tachada = perdida al terminar la activación sin usarla. */
function actCount(gh){const tot=2+(gh.ex?1:0),used=Math.min(tot,usedA(gh)),fin=gh.act===2,left=fin?0:Math.max(0,tot-used);
 const pip=i=>`<i class="${i<used?"u":fin?"x":"f"}${i>=2?" ex":""}"></i>`;
 return`<span class="tv-acc" aria-label="Acciones: le ${left===1?"queda":"quedan"} ${left} de ${tot}"><span class="tv-accp">${Array.from({length:tot},(_,i)=>pip(i)).join("")}</span><b>${fin?"Sin acciones":left===1?"Le queda 1 acción":`Le quedan ${left} acciones`}</b>${!fin&&!gh.ex&&canExtra(gh)?`<small>+1 con 3 de poder</small>`:""}</span>`}
/* Etiqueta pulsable de una regla o habilidad: abre su ventana. Resaltada si su efecto está activo. */
function skillBar(gh,a){const sk=a.h.sk||[],hab=sk.filter(x=>x.g==="hab").map(x=>x.n),dot=sk.filter(x=>x.g==="regla"&&ruleInfo(x.n).kind==="dote").map(x=>x.n);
 return`<p class="tv-lab">Habilidades · toca una para ver qué hace</p>${chipsOf(hab.concat(dot),a.id)}`}
/* Registro: los nombres de habilidades, dotes y reglas (en español o inglés) salen subrayados y al pulsarlos abren su ventana. */
let LKRE=null;
function linkNames(h){if(!LKRE){const C=cat(),skip=new Set(["descansar","mantener","avanzar","correr","cargar","disparar","atacar","hero"]),set=new Set();
  Object.values(C.sk).forEach(x=>{set.add(x.n);set.add(x.en)});Object.values(C.rg).forEach(x=>{if(x.en)set.add(x.en)});
  const L=[...set].filter(n=>n&&n.length>=4&&!skip.has(nrm(n))).sort((a,b)=>b.length-a.length).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  LKRE=new RegExp("(?<![\\wÀ-ÿ])("+L.join("|")+")(?![\\wÀ-ÿ])","g")}
 return h.replace(LKRE,m=>`<button type="button" class="tv-lk" data-tv="rinfo" data-l="${m}" data-o="">${m}</button>`)}
function chip(label,o,cls){return`<button type="button" class="tv-rchip${fxActive(o,label)?" on":""}${cls?" "+cls:""}" data-tv="rinfo" data-l="${esc(label)}" data-o="${o||""}">${esc(label)}${fxActive(o,label)?`<i aria-hidden="true">activa</i>`:""}</button>`}
function chipsOf(labels,o){return labels.length?`<div class="tv-rchips">${labels.map(l=>chip(l,o)).join("")}</div>`:`<p class="tv-sub">Ninguna.</p>`}
const MOD_TAG={hab:"Habilidad de clase",comun:"Habilidad común",dote:"Dote de clase · una vez por partida",regla:"Regla especial"};
/* La ventana de una regla o habilidad: qué significa y cómo se aplica en el tablero. */

/* ---------------------------------------------------------------- habilidades de héroe: qué hace cada una en el tablero
   Clave = nombre en español. Campos: cost {wd} (heridas que se paga) · x {max} (poder X a gastar) · self [ops] (sobre el héroe) · buff [efectos]
   (los que se queda el héroe) · ally {n,r,self,ko,auto} / foe {n,r,min} + ops (a quien se elige) · place {v} (colocarse) · free {kind,r} (acción
   inmediata) · special · later (afecta a hechizos o fichas de búsqueda: se anota) · manual (zonas y marcadores: a mano) · inert (sin efecto aquí).
   Efecto: {k,v,w (cuándo),once,…} (ver «efectos activos»). Operaciones: heal, pw, cure, fx, hits, wound, push, pull, cower, moral. */
const E=(k,v,w,x)=>({k,v:v||0,w:w||"all",...x});
const O={fx:(k,v,w,x)=>({op:"fx",e:{k,v:v||0,w:w||"all",...x}}),moral:(...then)=>({op:"moral",then}),pull:v=>({op:"pull",v}),push:v=>({op:"push",v}),cow:{op:"cower"},
 hits:(n,ap)=>({op:"hits",n,ap:ap||0}),wound:n=>({op:"wound",n}),heal:v=>({op:"heal",v}),pw:v=>({op:"pw",v}),pwLose:v=>({op:"pw",v,neg:1}),cure:{op:"cure"},cureAll:{op:"cure",all:1}};
const ZN=t=>`Crea ${t} o un marcador temporal. El tablero todavía no tiene zonas ni marcadores temporales: resuélvelo a mano.`;
const NO_MORAL="En este tablero los héroes no tiran moral, así que nunca quedan acobardados: esta habilidad no tiene efecto.";
const NO_STAT="Los enemigos no hacen tiradas de característica en este tablero, así que esta habilidad no tiene efecto.";
const NO_SPELL="Afecta a las tiradas de lanzamiento de hechizos de los enemigos, y los enemigos todavía no lanzan hechizos (fase 7): no tiene efecto por ahora.";
const HS_="los hechizos",FT_="las fichas de búsqueda",SP_="las fichas de hechizo";
const SKX={
/* Bárbaro */
"Furia":{cost:{wd:1},buff:[E("hit",2,"charge")]},
"Temerario":{buff:[E("xwound",1,"mshort"),E("xwoundTaken",1)]},
"Desafío":{foe:{n:2,r:12},ops:[O.moral(O.pull(6))]},
"Frenesí de sangre":{buff:[E("xwound",2,"charge",{once:1,sw:1})]},
"Instinto salvaje":{buff:[E("evade",1,"mshort")]},
"Golpe certero":{buff:[E("xhit",1,"charge",{once:1})]},
"Intimidante":{foe:{n:2,r:3},ops:[O.moral(O.cow)]},
"Despiadado":{buff:[E("xhit",1,"mshort"),E("xhitTaken",1)]},
"Ataque aturdido":{buff:[E("xhit",2,"charge",{once:1,sw:1})]},
"Brutal":{buff:[E("ap",1)]},
"Grito furioso":{foe:{n:2,r:3},ops:[O.moral(O.push(6))]},
"Endurecerse":{cost:{wd:1},buff:[E("def",2,"mshort")]},
/* Bardo */
"Melodía distractora":{foe:{n:1,r:9},ops:[O.moral(O.fx("def",-2,"all",{once:1}))]},
"Inspirar":{ally:{n:2,r:9},ops:[O.fx("stat",1,"all",{once:1})]},
"Canción de salud":{ally:{n:2,r:9},ops:[O.heal(1)]},
"Canción repulsora":{foe:{n:2,r:9},ops:[O.moral(O.push(6))]},
"Melodía curativa":{ally:{n:2,r:9},ops:[O.cure]},
"Persuadir":{foe:{n:1,r:12},ops:[O.moral(O.fx("hit",-2))]},
"Motivar":{ally:{n:1,r:9},ops:[O.fx("hit",2,"all",{once:1})]},
"Canción del miedo":{foe:{n:2,r:9},ops:[O.moral(O.cow)]},
"Encantar":{foe:{n:1,r:6},ops:[O.fx("noTarget",0,"all",{hero:"@"})]},
"Canción del descanso":{ally:{n:2,r:9},ops:[O.pw(1)]},
"Burla":{inert:NO_STAT},
"Canción protectora":{ally:{n:1,r:9},ops:[O.fx("def",2,"all",{once:1})]},
/* Brujo */
"Pacto de fuerza":{cost:{wd:1},later:HS_},
"Respiro diabólico":{buff:[E("onKill",0,"all",{once:1,ops:[O.pw("D3+1")]})]},
"Protección oscura":{cost:{wd:1},buff:[E("def",2)]},
"Sacrificio oscuro":{cost:{wd:1},foe:{n:1,r:6},ops:[O.wound(1)]},
"Maldición feérica":{foe:{n:1,r:12},ops:[O.moral(O.fx("hit",-2))]},
"Pacto de sabiduría":{cost:{wd:1},later:HS_},
"Truco diabólico":{later:SP_},
"Transferencia oscura":{cost:{wd:1},ally:{n:1,r:3},ops:[O.heal("D3+1")]},
"Susurros feéricos":{foe:{n:2,r:9},ops:[O.moral(O.cow)]},
"Dominación feérica":{foe:{n:1,r:6},ops:[O.fx("noTarget",0,"all",{hero:"@"})]},
"Pacto de habilidad":{cost:{wd:"D3"},later:HS_},
"Bendición diabólica":{buff:[E("onKill",0,"all",{once:1,ops:[O.heal("D3")]})]},
/* Clérigo */
"Guía":{ally:{n:2,r:6},ops:[O.fx("stat",1,"all",{once:1})]},
"Escudo de fe":{ally:{n:1,r:6},ops:[O.fx("def",2,"all",{once:1})]},
"Palabra sanadora":{ally:{n:2,r:6,self:1},ops:[O.heal(1)]},
"Golpe divino":{buff:[E("ap",1)]},
"Curar heridas":{ally:{n:1,r:3},ops:[O.cureAll]},
"Multiplicar":{manual:"Coloca un marcador señuelo a 3″ que los enemigos tratan como un héroe. El tablero todavía no tiene marcadores señuelo: resuélvelo a mano."},
"Protección sagrada":{ally:{n:1,r:6,self:1},ops:[O.fx("untarget")]},
"Bendecir":{ally:{n:1,r:6},ops:[O.fx("hit",1)]},
"Espíritus guardianes":{manual:ZN("una zona de terreno peligroso")},
"Perdición":{foe:{n:1,r:12},ops:[O.fx("hit",-1)]},
"Proyectil guía":{foe:{n:1,r:6},ops:[O.fx("hitTaken",1)]},
"Reanimación opulenta":{ally:{n:9,r:6,ko:1,auto:1},ops:[O.heal("D3")]},
/* Druida */
"Látigo de espinas":{foe:{n:1,r:9},ops:[O.hits(1),O.pull(6)]},
"Piel de corteza":{buff:[E("def",1,"all",{once:1})]},
"Nube de niebla":{manual:ZN("una zona de terreno de cobertura")},
"Crecimiento de pinchos":{manual:ZN("una zona de terreno difícil")},
"Forma de lobo":{buff:[E("mv",0,"all",{adv:1,rush:2})]},
"Recuperación natural":{later:SP_,self:[O.pwLose("D3")]},
"Baya de poder":{ally:{n:1,r:3,self:1},ops:[O.heal(1),O.cure]},
"Plaga de insectos":{foe:{n:2,r:9},ops:[O.hits(1)]},
"Forma de pantera":{buff:[E("xhit",1,"charge",{once:1})]},
"Forma de oso":{buff:[E("apRed",1)]},
"Muro de espinas":{manual:ZN("una zona de terreno peligroso")},
"Círculo de esporas":{foe:{n:2,r:9},ops:[O.fx("spores",0,"all",{until:"game"})]},
/* Explorador */
"Bestia de caza":{foe:{n:1,r:6},ops:[O.hits(2)]},
"Ataque pavoroso":{buff:[E("cowerAfter",0,"mfar",{once:1})]},
"Ungüento curativo":{ally:{n:1,r:3,self:1},ops:[O.heal(1),O.cure]},
"Ráfaga del acechador":{buff:[E("chain",0,"shoot",{once:1,kind:"shoot",when:"kill"})]},
"Mascota acechadora":{buff:[E("xhit",1,"mfar",{once:1})]},
"Marca del cazador":{foe:{n:1,r:99,min:12},special:"hunter"},
"Voluntad de acero":{inert:NO_MORAL},
"Disparo de oleada":{free:{kind:"shoot",r:12}},
"Pájaro rastreador":{later:FT_},
"Matagigantes":{buff:[E("ap",1)]},
"Manto umbrío":{buff:[E("hide")]},
"Andanada":{buff:[E("chain",0,"shoot",{once:1,kind:"shoot",r:3})]},
/* Guerrero */
"Superioridad en combate":{buff:[E("xhit",1,"mshort",{once:1})]},
"Evasivo":{buff:[E("evade",1,"all",{once:1})]},
"Reagrupar":{inert:NO_MORAL},
"Ataque desarmante":{buff:[E("debuffOnHit",0,"mshort",{once:1,fx:{k:"hit",v:-1,w:"all"}})]},
"Ataque de barrido":{buff:[E("chain",0,"charge",{once:1,kind:"chg",r:3})]},
"Provocar":{foe:{n:2,r:9},ops:[O.moral(O.pull(6))]},
"Indomable":{buff:[E("apRed",1)]},
"Ataque amenazador":{buff:[E("cowerAfter",0,"mshort",{once:1})]},
"Ataque implacable":{buff:[E("chain",0,"melee",{once:1,kind:"chg",when:"kill"})]},
"Carga de oleada":{free:{kind:"chg",r:6}},
"Segundo aliento":{self:[O.heal("D3+1"),O.pwLose(1)]},
"Ataque de empuje":{buff:[E("pushAfter",6,"mshort",{once:1})]},
/* Hechicero */
"Mareas del caos":{later:HS_},
"Afinidad metódica":{x:{max:3},self:[O.pwLose("X")],buff:[E("stat","X+1","all",{once:1})]},
"Hechizo lejano":{x:{max:3},later:HS_,self:[O.pwLose("X")]},
"Resiliencia práctica":{x:{max:3},self:[O.pwLose("X")],buff:[E("def","X+1","all",{once:1})]},
"Hechizo gemelo":{later:HS_,self:[O.pwLose("D3+2")]},
"Golpe relámpago":{x:{max:3},self:[O.pwLose("X")],foe:{n:1,r:6},ops:[O.hits("X+1",3)]},
"Hechizo potenciado":{x:{max:3},later:HS_,self:[O.pwLose("X")]},
"Furia de la tormenta":{x:{max:3},self:[O.pwLose("X")],foe:{n:1,r:9},ops:[O.hits("X+1",1)]},
"Curación laboriosa":{later:HS_},
"Onda atronadora":{x:{max:3},self:[O.pwLose("X")],foe:{n:1,r:3},ops:[O.hits("X+2",0)]},
"Suerte apañada":{later:HS_},
"Alas artesanas":{x:{max:3},self:[O.pwLose("X")],place:{v:"5+X"}},
/* Mago */
"Conjuración":{later:HS_},
"Encantamiento":{later:HS_},
"Arcanos":{later:HS_,self:[O.pwLose("D3")]},
"Adivinación":{later:HS_},
"Abjuración":{self:[O.heal("D3+1"),O.pwLose(1)]},
"Transmutación":{later:HS_},
"Recuperación":{self:[O.pw("D3+1")]},
"Evocación":{later:HS_},
"Ilusión":{later:HS_},
"Nigromancia":{later:HS_},
"Duplicación":{later:HS_,self:[O.pwLose("D3")]},
"Preparación":{later:SP_,self:[O.pwLose("D3")]},
/* Monje */
"Ráfaga de golpes":{buff:[E("xhit",1,"mshort",{once:1})]},
"Reflejos relámpago":{buff:[E("ignore",6)]},
"Golpe marcial":{buff:[E("pushAfter",6,"melee",{once:1})]},
"Atletismo":{buff:[E("mv",0,"all",{adv:1,rush:2})]},
"Manto de sombra":{buff:[E("hide")]},
"Descanso elemental":{x:{max:3},self:[O.pwLose("X"),O.heal("X+2")]},
"Golpe elemental":{x:{max:3},self:[O.pwLose("X")],foe:{n:1,r:12},ops:[O.hits("X+1")]},
"Derribar":{buff:[E("cowerAfter",0,"mshort",{once:1})]},
"Suprimir":{inert:NO_SPELL},
"Visión mental":{later:FT_},
"Protección elemental":{x:{max:3},self:[O.pwLose("X")],buff:[E("def","X+1","all",{once:1})]},
"Paso sombrío":{place:{v:"2D3+1"}},
/* Paladín */
"Golpe vengativo":{buff:[E("hit",1,"shaken")]},
"Protección devota":{ally:{n:1,r:6,self:1},ops:[O.fx("apRed",1)]},
"Arma ancestral":{ally:{n:1,r:6},ops:[O.fx("hit",2,"all",{once:1})]},
"Control rencoroso":{foe:{n:2,r:3},ops:[O.fx("nomove")]},
"Velocidad ancestral":{ally:{n:1,r:6},ops:[O.fx("mv",0,"all",{adv:1,rush:2})]},
"Maldición rencorosa":{inert:NO_STAT},
"Reprimenda devota":{ally:{n:1,r:6,self:1},ops:[O.fx("thorns","D3","all",{once:1})]},
"Voto rencoroso":{foe:{n:1,r:6},ops:[O.fx("xwoundTaken",1,"all",{once:1})]},
"Poderío vengativo":{buff:[E("ap",1)]},
"Aura ancestral":{ally:{n:1,r:6},ops:[O.fx("xhit",1,"all",{once:1})]},
"Prisa vengativa":{buff:[E("mv",0,"all",{advD:"D3",rushD:"2D3",once:1})]},
"Aura devota":{ally:{n:1,r:6,self:1},ops:[O.fx("healBonus",2,"all",{once:1})]},
/* Pícaro */
"Embaucador":{manual:"Coloca un marcador señuelo a 3″ que los enemigos tratan como un héroe. El tablero todavía no tiene marcadores señuelo: resuélvelo a mano."},
"Juego de manos":{later:FT_},
"Golpe despiadado":{buff:[E("ap",1)]},
"Ataque furtivo":{buff:[E("hit",1,"cunseen")]},
"Eludir":{buff:[E("evade",1,"mshort")]},
"Ocultarse":{buff:[E("hide")]},
"Arrancada":{buff:[E("mv",0,"all",{adv:1,rush:2})]},
"Paso difuso":{place:{v:"2D3+1"}},
"Golpe y huida":{buff:[E("chain",0,"all",{once:1,kind:"move",r:6})]},
"Esquivar objetivo":{foe:{n:1,r:12},ops:[O.fx("hit",-1)]},
"Asesinato":{buff:[E("xhit",1,"sunseen",{once:1})]},
"Infiltrarse":{buff:[E("mv",0,"all",{adv:3,rush:6})],manual:"Con esta habilidad no puede moverse si en algún momento quedara a la vista de un enemigo: compruébalo tú al mover."},
/* Comunes */
"Descanso de batalla":{self:[O.pw("D3+1")]},
"Protector":{buff:[E("def",1)]},
"Toque curativo":{ally:{n:1,r:3,self:1},ops:[O.cure]},
"Concentración":{cost:{wd:1},buff:[E("stat",2,"all",{once:1})]},
"Toque sanador":{ally:{n:1,r:3,self:1},ops:[O.heal("D3")]},
"Inspeccionar":{later:FT_},
"Esprint":{buff:[E("mv",0,"all",{adv:2,rush:4,once:1})]},
"Onda de choque":{foe:{n:1,r:3},ops:[O.push(6)]},
"Trampero":{manual:ZN("una zona de terreno difícil")},
"Distracción":{manual:"Coloca un marcador de distracción a 12″ que los enemigos tratan como su objetivo. El tablero todavía no tiene marcadores: resuélvelo a mano."},
"Resucitar":{ally:{n:1,r:3,ko:1},ops:[O.heal("D3+1")]},
"Pacificar":{foe:{n:1,r:6},ops:[O.fx("hit",-1)]},
"Imparable":{buff:[E("nofat")]},
"Paralizar":{foe:{n:1,r:9},ops:[O.fx("nomove")]},
"Imagen especular":{manual:"Coloca un marcador de imagen especular a 3″ que los enemigos tratan como un héroe. El tablero todavía no tiene marcadores: resuélvelo a mano."},
"Salto":{inert:"El tablero todavía no tiene saltos ni desniveles, así que esta habilidad no tiene efecto por ahora."},
"Santuario":{manual:ZN("una zona de terreno de cobertura")},
"Fortaleza":{inert:NO_MORAL},
"Aterrorizar":{foe:{n:1,r:3},ops:[O.moral(O.cow)]},
"Golpe giratorio":{manual:ZN("una zona de terreno peligroso")},
"Tiro lejano":{buff:[E("range",6)]},
"Desplazamiento":{place:{v:"D3+3"}},
"Silencio":{inert:NO_SPELL},
"Confusión":{manual:"Una unidad enemiga pasa a contar como un héroe para los demás enemigos. La IA todavía no admite señuelos: resuélvelo a mano."},
/* Dotes de clase (una vez por partida, al activarse; sin acción ni tirada) */
"Frenesí bárbaro":{self:[O.pw("D3")]},
"Restauración bárdica":{ally:{n:2,r:9},ops:[O.pw(1)]},
"Pacto del brujo":{cost:{wd:1},foe:{n:1,r:6},ops:[O.wound(1)]},
"Bendición del clérigo":{ally:{n:2,r:6,self:1},ops:[O.heal(1)]},
"Trampa druídica":{manual:ZN("una zona de terreno peligroso")},
"Precisión del explorador":{buff:[E("xhit",1,"shoot",{once:1})]},
"Poderío combativo":{buff:[E("xhit",1,"melee",{once:1})]},
"Proyectiles hechiceros":{x:{max:3},self:[O.pwLose("X")],foe:{n:1,r:12},ops:[O.hits("X+1")]},
"Foco del mago":{later:SP_},
"Meditación del monje":{self:[O.heal("D3")]},
"Grito del paladín":{manual:"Dos héroes a 3″ pueden moverse hasta 6″. El tablero todavía no permite mover a otros héroes fuera de su turno: queda para una versión futura."},
"Paso del pícaro":{buff:[E("hide")]}};
/* Reglas especiales que el tablero ya aplica solas (en inglés, sin número). */
const RAUTO=new Set(["Fast","Scout","Slow","Tough","Fear","Fearless","Regeneration","Stealth","Furious","Impact","Surge","Relentless","Rending","Bane","Shred","Blast","Reliable","Thrust","Defense","Unstoppable","Indirect","Assault","AP","Parry","Brace","Deadly","Ferocious","Savage","Lucky","Destroyer","Warbound","Mischievous","Bestial","Raider","Dodge","Wild Veil","Shadowborn","Guardian","Warden","Ossified","Sturdy","Tenacious","Runner","Scurry","Lustbound","Highborn","Royal Legion","Buccaneer","Havocbound","Melee Slayer","Plaguebound","Cursed Undead","Changebound","Empyrean Spirit","Gloom-Mist","Unpredictable Fighter"].map(nrm));
const isAuto=inf=>RAUTO.has(nrm(inf.en||inf.n));
const skillFx=inf=>SKX[inf.n]||null;
function rollSpec(v,X){if(typeof v==="number")return v;let t=String(v).replace(/X/g,X||0);if(t[0]==="-")return-rollSpec(t.slice(1),0);
 const m=t.match(/^(\d*)D3(?:([+-])(\d+))?$/);if(m){const n=+(m[1]||1);let r=0;for(let i=0;i<n;i++)r+=d3();return r+(m[2]?(m[2]==="+"?1:-1)*+m[3]:0)}
 const e=t.match(/^(-?\d+)([+-]\d+)?$/);return e?+e[1]+(+(e[2]||0)):(+t||0)}

/* Quién puede ser objetivo de una habilidad: unidades enemigas o héroes dentro de su alcance (entre peanas). */
function candsOf(a,SX){
 if(SX.foe){const f=SX.foe;return liveUnits().filter(u=>{const g=gap(a,u);return g<=f.r+.01&&(!f.min||g>f.min)}).map(u=>({id:u.id,name:u.name,d:gap(a,u)})).sort((x,y)=>x.d-y.d)}
 if(SX.ally){const f=SX.ally;return G.heroes.map(g=>actor(g.id)).filter(t=>t&&(f.ko?t.ko():!t.ko())&&(f.self||t.id!==a.id)&&(t.id===a.id||gap(a,t)<=f.r+.01)).map(t=>({id:t.id,name:t.name,d:t.id===a.id?0:gap(a,t)})).sort((x,y)=>x.d-y.d)}
 return[]}
/* ¿Por qué no se puede usar ahora? Cadena vacía = se puede. */
function usableWhy(gh,a,inf,SX,R){
 if(!gh||!a)return"Solo los héroes usan habilidades.";
 if(SX.inert)return"";
 if(G.phase!=="heroes")return"Solo se usan en el turno de los héroes.";
 if(a.ko())return"Este héroe está inconsciente.";
 if(G.cur<0||G.heroes[G.cur]!==gh)return"Activa primero a este héroe: pulsa «Activar» en su tarjeta.";
 if(G.act)return"Termina antes la acción que está en curso.";
 if(U.busy)return"Espera a que termine lo que está pasando.";
 if(inf.kind==="dote"){if(gh.featUsed)return"Ya la usó en esta partida."}
 else if(freeA(gh)<1)return"No le quedan acciones. Puede pagar 3 de poder por una acción extra (casilla del panel).";
 if(SX.foe||SX.ally){const c=candsOf(a,SX);
  if(!c.length)return SX.foe?(SX.foe.min?`No hay ninguna unidad enemiga a más de ${SX.foe.min}″.`:`No hay ninguna unidad enemiga a ${SX.foe.r}″ o menos.`):"No hay ningún héroe a su alcance.";
  if(!(R.sel||[]).length&&!(SX.ally&&SX.ally.auto))return"Elige a quién va dirigida: toca los nombres de arriba."}
 if(SX.x&&(R.x==null?1:R.x)>a.h.pw)return"No tiene tanto poder.";
 return""}
/* Parte de la ventana que deja usar la habilidad: objetivos, poder X, tirada y botón. */
function useSection(R,inf,o){
 if(inf.kind==="regla")return"";const SX=SKX[inf.n];if(!SX)return"";
 const gh=o&&o.kind==="h"?o.g:null;let h="";
 if(SX.inert)return`<p class="tv-note">${esc(SX.inert)}</p>`;
 if(SX.later)h+=`<p class="tv-note">Afecta a ${SX.later}, que el tablero todavía no tiene. Puedes usarla: se paga su coste y queda anotada como activa, pero su efecto lo resuelves tú a mano.</p>`;
 if(SX.manual)h+=`<p class="tv-note">${esc(SX.manual)}</p>`;
 if(!gh)return h;
 const c=candsOf(o,SX);if(R.sel==null)R.sel=(SX.ally&&SX.ally.auto)?c.map(t=>t.id):[];if(R.x==null)R.x=SX.x?Math.min(1,o.h.pw):0;
 if(SX.foe||SX.ally){const n=(SX.ally&&SX.ally.auto)?c.length:(SX.foe||SX.ally).n;
  h+=`<p class="tv-lab">${SX.foe?"Enemigos":"Héroes"} a su alcance${SX.ally&&SX.ally.auto?" (todos)":` · elige hasta ${n}`}</p><div class="tv-rchips">${c.length?c.map(t=>`<button type="button" class="tv-rchip${R.sel.includes(t.id)?" on":""}" data-tv="rsel" data-id="${t.id}">${esc(t.name)} · ${t.d?inch(t.d):"él mismo"}</button>`).join(""):`<span class="tv-sub">Nadie a su alcance.</span>`}</div>`}
 if(SX.x){h+=`<p class="tv-lab">Poder que gasta (X) · tiene ${o.h.pw}</p><div class="tv-rchips">${[0,1,2,3].filter(v=>v<=SX.x.max).map(v=>`<button type="button" class="tv-rchip${R.x===v?" on":""}" data-tv="rx" data-v="${v}" ${v>o.h.pw?"disabled":""}>${v}</button>`).join("")}</div>`}
 if(SX.place)h+=`<p class="tv-sub">Después de la tirada elegirás dónde se coloca, dentro de su alcance.</p>`;
 if(SX.free)h+=`<p class="tv-sub">Tras la tirada hace inmediatamente ${SX.free.kind==="chg"?"una carga":"una acción de Mantener y disparar"} contra un objetivo a ${SX.free.r}″ o menos, sin gastar otra acción.</p>`;
 const why=usableWhy(gh,o,inf,SX,R),key={Fuerza:"fue",Destreza:"des",Voluntad:"vol"}[inf.a],m=key?statMod(o.h,key):0;
 h+=`<div class="tv-row"><button type="button" class="tv-btn" data-tv="ruse" ${why?"disabled":""}>${inf.kind==="dote"?"Usar la dote":"Usar la habilidad"}</button></div>`;
 h+=why?`<p class="tv-sub why">${esc(why)}</p>`:inf.kind==="dote"?`<p class="tv-sub">Se aplica directamente, sin tirada.</p>`:`<p class="tv-sub">Tira ${esc(inf.a)} ${o.h[key]}+${m?(m>0?", +":", ")+m:""} (1 acción). Si falla, podrá gastar 1 de poder.</p>`;
 return h}
/* La ventana de una regla o habilidad: qué significa y cómo se aplica en el tablero. */
function ruleModal(){const R=U.rinfo;if(!R)return"";const inf=ruleInfo(R.l),o=R.o?actor(R.o):null,SX=inf.kind!=="regla"?SKX[inf.n]:null;
 const stOk=t=>`<span class="tv-st ok">${t}</span>`,stNo=t=>`<span class="tv-st">${t}</span>`;
 const state=inf.kind==="regla"?(isAuto(inf)?stOk("Se aplica sola en el tablero"):stNo("Todavía no se aplica sola en el tablero")):
  !SX?stNo("Sin datos de aplicación"):SX.inert?stNo("Sin efecto en este tablero"):(SX.later||SX.manual)?stNo("Se anota; el efecto se resuelve a mano"):stOk("Se aplica sola en el tablero");
 const meta=inf.kind!=="regla"?`<p class="tv-sub">${inf.kind==="dote"?"Se usa al activarse, sin gastar acción ni tirada.":`Acción de habilidad (1 acción) · tirada de <b>${esc(inf.a)}</b>. Si falla, el héroe puede gastar 1 de poder para superarla.`}${inf.cls&&inf.cls!=="Comunes"?` · ${esc(inf.cls)}${inf.tier>0?`, tier ${inf.tier}`:""}`:""}</p>`:"";
 return`<div class="tv-rveil"><div class="tv-rscrim" data-tv="rclose"></div><section class="tv-rmod" role="dialog" aria-modal="true" aria-label="${esc(R.l)}">
  <header><p class="tv-lab">${MOD_TAG[inf.kind]}${o?` · ${esc(o.name)}`:""}</p><b class="tv-in">${esc(R.l)}</b>${inf.en&&nrm(inf.en)!==nrm(R.l)?`<small class="tv-sub">${esc(inf.en)}</small>`:""}<button type="button" class="tv-ix" data-tv="rclose" aria-label="Cerrar">×</button></header>
  ${inf.t?`<p class="tv-rtext">${esc(inf.t)}</p>`:`<p class="tv-rtext none">Todavía no tengo la descripción de esta regla: no está en la investigación guardada. Cópiala de su ficha de Army Forge y dímela para añadirla. Queda apuntada como pendiente de revisión.</p>`}
  ${meta}${state}${useSection(R,inf,o)}
  <div class="tv-row"><button type="button" class="tv-ghostb" data-tv="rclose">Cerrar</button></div></section></div>`}
/* ---- aplicar los efectos de una habilidad ---- */
async function runOps(src,tgt,ops,ctx){const X=(ctx&&ctx.X)||0,id=(ctx&&ctx.id)||"habilidad";
 for(const op of ops||[]){switch(op.op){
  case"heal":{if(tgt.kind!=="h")break;const h=tgt.h,gh=tgt.g;let n=rollSpec(op.v,X);const hb=fxOf(tgt).filter(e=>e.k==="healBonus");
   if(hb.length){n+=hb.reduce((t,e)=>t+e.v,0);gh.fx=gh.fx.filter(e=>e.k!=="healBonus")}
   const was=hfKo(h);h.hp=Math.min(h.hpMax,h.hp+n);hfSync();log(`${tgt.name} recupera ${n} herida${n>1?"s":""}${was&&h.hp>0?" y vuelve en sí":""} (${id}).`,"ok");break}
  case"pw":{if(tgt.kind!=="h")break;const h=tgt.h,n=rollSpec(op.v,X);
   if(op.neg){const lost=Math.min(h.pw,n);h.pw-=lost;if(n>lost){wound(tgt,n-lost);log(`${tgt.name} se queda sin poder y sufre ${n-lost} herida${n-lost>1?"s":""} por agotamiento.`,"bad")}log(`${tgt.name} gasta ${n} de poder (${id}).`,"hr")}
   else{h.pw=Math.min(h.pwMax,h.pw+n);log(`${tgt.name} recupera ${n} de poder (${id}).`,"ok")}hfSync();break}
  case"cure":{if(tgt.kind!=="h")break;const st=tgt.h.st,order=["af","en","de","at","ac"];
   if(op.all)tgt.h.st=[];else{const k=order.find(x=>st.includes(x));if(k)tgt.h.st=st.filter(x=>x!==k)}hfSync();log(`${tgt.name} ${op.all?"pierde todos sus estados":"pierde un estado"} (${id}).`,"ok");break}
  case"fx":{const e={...op.e,id};if(e.hero==="@")e.hero=src.id;if(typeof e.v==="string"&&!/^D/.test(e.v))e.v=rollSpec(e.v,X);fxAdd(tgt,e);log(`${tgt.name}: ${id}.`,"ok");break}
  case"hits":await autoHits(id,tgt,rollSpec(op.n,X),op.ap);break;
  case"wound":{const n=rollSpec(op.n,X);wound(tgt,n);hfSync();log(`${tgt.name} sufre ${n} herida${n>1?"s":""} (${id}).`,"sho");if(tgt.kind==="u"&&!tgt.ko()){const mo=await morale(tgt,n,0);if(mo)log(mo,"sho")}break}
  case"push":case"pull":if(tgt.kind==="u"&&!tgt.ko())shove(tgt,src,op.v,op.op==="pull");break;
  case"cower":tgt.g.sh=true;log(`${tgt.name} queda Aturdida (${id}).`,"ok");break;
  case"moral":{const ok=await moralTest(tgt,`${src.name} usa ${id}`);if(!ok)await runOps(src,tgt,op.then,ctx);break}}}}
async function applySkill(gh,a,inf,SX,R){const id=inf.n,x=R.x||0,h=a.h;
 log(`${h.name} usa ${id}${SX.x?` (X = ${x})`:""}.`,"hr");
 if(SX.cost&&SX.cost.wd){const w=rollSpec(SX.cost.wd,x);wound(a,w);hfSync();log(`${h.name} sufre ${w} herida${w>1?"s":""} (${id}).`,"hr")}
 for(const op of SX.self||[])await runOps(a,a,[op],{id,X:x});
 const buffs=(SX.buff||[]).slice();if(!buffs.length&&!SX.ops&&!SX.self&&!SX.place&&!SX.free&&!SX.special)buffs.push(E("nota"));
 buffs.forEach(e=>{const f={...e,id};if(typeof f.v==="string")f.v=rollSpec(f.v,x);if(f.advD)f.adv=rollSpec(f.advD);if(f.rushD)f.rush=rollSpec(f.rushD);fxAdd(a,f)});
 const sel=R.sel||[];
 if(SX.special==="hunter"){const t=actor(sel[0]);if(t){const v=d3();fxAdd(a,{id,k:"hit",v,w:"all",vs:t.id});log(`${h.name} marca a ${t.name}: +${v} a impactarla hasta el final de la ronda.`,"ok")}}
 if(SX.ally)for(const tid of sel){const t=actor(tid);if(t)await runOps(a,t,SX.ops,{id,X:x})}
 if(SX.foe&&SX.ops)for(const tid of sel){const t=actor(tid);if(t&&!t.ko())await runOps(a,t,SX.ops,{id,X:x})}
 if(SX.later)log(`${id}: su efecto sobre ${SX.later} se resuelve a mano; queda anotada como activa.`,"hr");
 else if(SX.manual&&!SX.buff)log(`${id}: ${SX.manual}`,"hr");
 hfSync();
 if(SX.place){const lim=rollSpec(SX.place.v,x);log(`${h.name} puede colocarse en cualquier punto a ${lim}″ o menos.`,"hr");G.act={k:"sk",st:"tele",lim};U.dest=null}
 else if(SX.free){G.act={k:SX.free.kind,st:SX.free.kind,free:true,wi:0,...(SX.free.kind==="chg"?{lim:SX.free.r}:{rlim:SX.free.r})};U.dest=null}}
/* Usar una habilidad: tirada de su característica (la tira el jugador), pago de 1 de poder si falla, y sus efectos. Las dotes no piden tirada. */
const askPay=(h,cost,what)=>new Promise(res=>{U.wilAsk={name:h.name,pw:h.pw,cost,what,res};paint()});
async function useSkill(){const R=U.rinfo;if(!R||U.busy)return;const gh=G.heroes.find(x=>x.id===R.o),a=actor(R.o),inf=ruleInfo(R.l),SX=SKX[inf.n];
 if(!gh||!a||!SX||usableWhy(gh,a,inf,SX,R))return;
 const sel=(R.sel||[]).slice(),x=R.x||0,dote=inf.kind==="dote";U.rinfo=null;U.busy=true;G.act={k:"sk",st:"fight"};if(dote)gh.featUsed=true;paint();
 if(!dote){const key={Fuerza:"fue",Destreza:"des",Voluntad:"vol"}[inf.a],h=a.h,m=statMod(h,key),pass=r=>r===6||(r!==1&&r+m>=h[key]);
  const[r]=await rollDice({n:1,own:true,title:`${h.name} usa ${R.l}`,sub:`Acción de habilidad · tirada de ${inf.a} ${h[key]}+${m?(m>0?", +":", ")+m:""}`,need:`${Math.max(2,Math.min(6,h[key]-m))}+ pasa`,ok:pass});
  endDice();statUsed(h);U.busy=false;let ok=pass(r);
  if(!ok){log(`${h.name} falla la tirada de ${inf.a} (${r}${m?(m>0?"+":"")+m:""}) y no consigue usar ${R.l}.`,"hr");
   if(h.pw>=1&&await askPay(h,1,inf.a)){h.pw-=1;hfSync();log(`${h.name} gasta 1 de poder: la tirada cuenta como superada.`,"hr");ok=true}}
  if(!ok){finishAction(gh,"sk");save();paint();return}
  U.busy=true}
 await applySkill(gh,a,inf,SX,{sel,x});U.busy=false;
 if(G.act&&G.act.st==="tele"){save();paint();return}
 if(G.act&&G.act.free){if(!dote)gh.done=(gh.done||[]).concat("sk");save();paint();return}
 if(dote){G.act=null;U.dest=null;const hh=heroOf(gh);if(!hh||hfKo(hh))endAct(gh)}else finishAction(gh,"sk");
 save();paint()}
/* Acción encadenada tras un ataque (Ráfaga del acechador, Ataque de barrido…): sigue contando como la misma acción. */
function chainAct(a,ch,A0){const orig=A0.orig||A0.k,base={free:true,orig,chain:ch,wi:0};
 if(ch.kind==="shoot")return{...base,k:"shoot",st:"shoot",rw:A0.rw};
 if(ch.kind==="chg")return{...base,k:"chg",st:"chg",lim:moveLim(a,"chg")};
 return{...base,k:"adv",st:"move",lim:ch.r||6}}
const fin=(gh,A,rest)=>finishAction(gh,A.orig||A.k,rest,!!A.free&&!A.orig);
const cxl=A=>A.free?`<button type="button" class="tv-ghostb" data-tv="nochain">${A.chain?"No encadenar":"Dejarlo"}</button>`:`<button type="button" class="tv-ghostb" data-tv="cancel">Cambiar de acción</button>`;
/* Efectos activos, como etiquetas pequeñas (no pulsables) bajo la tarjeta del héroe o en la ficha de una unidad. */
function fxRow(g){const ids=[...new Set(((g&&g.fx)||[]).filter(e=>e.id).map(e=>e.id))];return ids.length?`<span class="tv-fxr" aria-label="Efectos activos">${ids.map(i=>`<i class="tv-fxp">${esc(i)}</i>`).join("")}</span>`:""}
function actPanel(){const gh=G.heroes[G.cur],a=actor(gh.id),h=a.h,A=G.act;
 if(h.st.includes("at")&&!A)return`<div class="tv-box warn"><b>${esc(h.name)} está Aturdido</b><p>Tiene que pasar esta activación quieto para recuperarse (Core Rules).</p><button type="button" class="tv-btn" data-tv="rally">Quedarse quieto y recuperarse</button></div>`;
 if(!A){const done=gh.done||[],Lf=freeA(gh);return`${h.st.includes("ac")?`<div class="tv-box"><b>Afectado</b><p>−1 a todas sus tiradas. Puede gastar D3 de poder para quitárselo.</p><button type="button" class="tv-btn sm" data-tv="unimp" ${h.pw<1?"disabled":""}>Gastar D3 de poder</button></div>`:""}
  ${usedA(gh)===2&&(gh.ex||canExtra(gh))?`<p class="tv-lab">Acción extra</p><button type="button" class="tv-tick${gh.ex?" on":""}" data-tv="xtick">${gh.ex?"☑":"☐"} Gastar 3 de poder en una acción extra</button>`:`<p class="tv-lab">${Lf>=2?"Elige su acción":"Le queda una acción"}</p>`}<div class="tv-acts">${ACTS.map(([k,l,d,mv])=>{const lim=mv?moveLim(a,k):0,near=atkTargets(a).length,noRw=k==="shoot"&&!a.ws.some(isRanged),noT=k==="shoot"&&!noRw&&!liveUnits().some(u=>canShoot(a,u,true)),dis=noRw||noT||(k!=="rest"&&ACOST[k]>Lf)||(k==="chg"&&(near>0||!chargeTargets(a).length))||(k==="atk"&&!near)||(k==="obj"&&!trkNear(a).length)||(k==="rest"&&done.length>0);
   return`<button type="button" class="tv-act ${k}" data-tv="act" data-k="${k}" ${dis?"disabled":""}><b>${l}</b><small>${mv?inch(lim)+" · ":""}${d}</small>${k==="chg"&&dis?`<em>${near?"Ya está en contacto: usa Atacar":"Ningún enemigo al alcance (a más de "+CT+")"}</em>`:""}${k==="atk"&&dis&&!near?`<em>Ningún enemigo a ${CT} o menos</em>`:""}${noRw?`<em>Sin armas a distancia</em>`:""}${noT?`<em>Ningún enemigo a tiro y a la vista</em>`:""}${k==="obj"&&dis&&ACOST.obj<=Lf?`<em>${(G.tracks||[]).every(t=>t.on)?"Los tres rastros ya están recuperados":`Ningún rastro a ${CT} o menos`}</em>`:""}${k!=="rest"&&ACOST[k]>Lf?`<em>Necesita ${ACOST[k]} acciones</em>`:""}</button>`}).join("")}</div>
  ${skillBar(gh,a)}
  <div class="tv-row"><button type="button" class="tv-ghostb" data-tv="endact">${done.length?"Terminar activación":"No hacer nada"}</button></div>`}
 const k=A.k,lab=(ACTS.find(x=>x[0]===k)||[0,"Habilidad"])[1];
 if(A.st==="fight")return`<div class="tv-box"><b>${lab} · en curso</b><p>Se resuelve el combate: sigue los dados en la bandeja.</p></div>`;
 if(A.st==="atk"){const t=atkTargets(a);return`<div class="tv-box"><b>Atacar · cuerpo a cuerpo</b><p>${t.length?"Toca el enemigo al que golpea (marcado en rojo). No carga: sin bonos de carga.":"No hay ningún enemigo a "+CT+" o menos."}</p>${wpnPick(a,A)}<div class="tv-tlist">${t.map(u=>`<button type="button" class="tv-tgt" data-tv="tgt" data-id="${u.id}"><b>${esc(u.name)}</b><small>a ${inch(gap(a,u))}</small></button>`).join("")}</div><div class="tv-row">${cxl(A)}</div></div>`}
 if(A.st==="tele"){return`<div class="tv-box"><b>${esc(h.name)} se coloca · hasta ${inch(A.lim)}</b><p>Toca en el tablero el punto al que se coloca, dentro del círculo.</p><div class="tv-row"><button type="button" class="tv-btn" data-tv="teleok" ${U.dest?"":"disabled"}>Colocarse aquí</button><button type="button" class="tv-ghostb" data-tv="teleno">No moverse</button></div></div>`}
 if(A.st==="move"){const lim=moveLim(a,k);return`<div class="tv-box"><b>${lab} · hasta ${inch(lim)}</b><p>Toca o arrastra en el tablero hasta dónde mueve. El camino rodea casas, muros y árboles.</p>
  <div class="tv-row"><button type="button" class="tv-btn" data-tv="mvok" ${U.dest?"":"disabled"}>${k==="adv"?"Mover y seguir":"Mover aquí"}</button>${k==="adv"&&!A.free?`<button type="button" class="tv-ghostb" data-tv="mvskip">No moverse</button>`:""}${cxl(A)}</div></div>`}
 if(A.st==="chg"){const t=chargeTargets(a);return`<div class="tv-box"><b>Cargar · hasta ${inch(A.lim!=null?A.lim:moveLim(a,"chg"))}</b><p>${t.length?"Toca el enemigo al que carga (marcado en rojo).":"No hay ningún enemigo al alcance."}</p>${wpnPick(a,A)}<div class="tv-tlist">${t.map(({u,c})=>`<button type="button" class="tv-tgt" data-tv="tgt" data-id="${u.id}"><b>${esc(u.name)}</b><small>${inch(c.len/BIN)} hasta el contacto</small></button>`).join("")}</div><div class="tv-row">${cxl(A)}</div></div>`}
 if(A.st==="shoot"){const t=shootTargets(a),rw=a.ws.filter(isRanged),w=rwOf(a,A),hold=k==="hold"||k==="shoot";
  const why=u=>{const g=gap(a,u);return`a ${inch(g)}${!los(a,u)?" · sin verla (Indirect)":""}${w&&!wHas(w,"Blast")&&inCover(a,u)?" · cobertura +1":""}${!wHas(w,"Unstoppable")&&hasR(u.rules,"Stealth")&&g>9?" · Stealth −1":""}`};
  const pen=w&&!wHas(w,"Unstoppable")&&(night()||dawn())?`<p class="tv-sub">${tod()}: −1 al impactar al disparar.</p>`:"";
  return`<div class="tv-box"><b>Disparar${w?` · ${esc(w.n)} (${w.rng+rngMod(a)}″)`:""}</b><p>${!rw.length?"No tiene armas a distancia.":t.length?"Toca el enemigo al que dispara (a tiro y a la vista).":`Ningún enemigo a tiro (${w.rng+rngMod(a)}″) y a la vista${night()?" (de noche se ve hasta 12″)":""}.`}${w&&wHas(w,"Indirect")?hold?" Indirect: al mantener puede disparar sin verlo.":" Indirect: solo dispara sin ver al objetivo si mantiene.":""}</p>${pen}${rwPick(a,A)}<div class="tv-tlist">${t.map(u=>`<button type="button" class="tv-tgt" data-tv="tgt" data-id="${u.id}"><b>${esc(u.name)}</b><small>${why(u)}</small></button>`).join("")}</div><div class="tv-row"><button type="button" class="tv-ghostb" data-tv="noshoot">No disparar</button></div></div>`}
 return""}
function combatCard(){const L=G.last;if(!L)return"";
 const dice=(arr,lab)=>arr.length?`<div class="tv-dice"><small>${lab}</small><span>${arr.map(d=>`<i class="${d.ok?"ok":""}">${d.r}</i>`).join("")}</span></div>`:"";
 return`<section class="tv-cmb ${L.kind}"><p class="tv-lab">${L.kind==="melee"?"Cuerpo a cuerpo":"Disparo"} · ${esc(L.a)} → ${esc(L.b)}</p>${L.steps.map(s=>s.note?`<p class="tv-note">${esc(s.note)}</p>`:`<div class="tv-cs"><b>${esc(s.who)} ${s.lab}</b><span class="tv-big">${s.wounds}<small> heridas</small></span><small class="tv-sub">${s.att} ataques · ${s.hits} impactos</small>${dice(s.rolls,"Impactar (verdes = impactos)")}${dice(s.blocks,"Defensa (verdes = heridas)")}<ul>${s.lines.map(l=>`<li>${esc(l)}</li>`).join("")}</ul></div>`).join("")}
 ${L.morale.map(m=>`<p class="tv-mor">${esc(m)}</p>`).join("")}${G.offerIgnore&&actor(G.offerIgnore)&&actor(G.offerIgnore).h.pw>=2&&actor(G.offerIgnore).h.st.includes("at")?`<button type="button" class="tv-btn sm" data-tv="ignsh">Gastar 2 de poder: ${esc(actor(G.offerIgnore).name)} no queda Aturdido</button>`:""}</section>`}
function unitInfo(id){const a=actor(id);if(!a)return"";const u=a.kind==="u"?a.g:null;
 return`<section class="tv-info"><button type="button" class="tv-ix" data-tv="noinfo" aria-label="Cerrar">×</button><p class="tv-lab">${a.kind==="h"?"Héroe":"Unidad enemiga"}</p><b class="tv-in">${esc(a.name)}</b>
 <div class="tv-qd"><span><small>Calidad</small>${a.q}+</span><span><small>Defensa</small>${a.d}+</span><span><small>${u?"Miniaturas":"Heridas"}</small>${u?a.models()+"/"+u.m0:a.h.hp+"/"+a.h.hpMax}</span><span><small>Mueve</small>${speed(a).map(inch).join(" / ")}</span></div>
 ${u?`<p class="tv-sub">Tough(${u.t}) por miniatura · ${u.hp} heridas por recibir${u.sh?" · <b>Aturdida</b>":""}${u.fat===G.round?" · agotada":""}</p>`:""}
 ${fxRow(a.g)}${a.rules?`<p class="tv-lab">Reglas · toca una para ver qué hace</p>${chipsOf(splitTop(a.rules),a.id)}`:""}<table class="tv-wt"><tr><th>Arma</th><th>RNG</th><th>ATK</th><th>AP</th><th>SPE</th></tr>${a.ws.map(w=>`<tr><td>${esc(w.n)}</td><td>${w.rng?w.rng+"″":"—"}</td><td>A${w.a*w.x}${u&&u.m0>1?`<small> · ${nAtk(a,w)} dados ahora</small>`:""}</td><td>${w.ap||"—"}</td><td>${w.sp.length?w.sp.map(x=>`<button type="button" class="tv-rchip sm" data-tv="rinfo" data-l="${esc(x)}" data-o="">${esc(x)}</button>`).join(" "):"—"}</td></tr>`).join("")}</table></section>`}
function evCard(){const e=G.ev;const die=v=>`<span class="tv-die${v?"":" q"}">${v?dots(v):"?"}</span>`;
 if(!e||e.r!==G.round)return`<div class="tv-ev"><p class="tv-lab">Evento de Neth · ${G.round===1?"empieza la partida":"han entrado refuerzos"}</p><div class="tv-dd">${die(0)}${die(0)}</div><p>Se tiran dos dados de uno en uno: el primero son las decenas y el segundo las unidades (Campaign Builder).</p><button type="button" class="tv-btn big" data-tv="ev">Tirar el evento</button></div>`;
 return`<div class="tv-ev ${e.tone}"><p class="tv-lab">Evento de Neth ${e.n}</p><div class="tv-dd">${die(e.a)}${die(e.b)}</div><h3>${esc(e.t)}</h3><p>${esc(e.x)}</p><p class="tv-eff">${esc(e.eff)}</p><button type="button" class="tv-btn big" data-tv="toheroes">Turno de los héroes</button></div>`}
const PIP={1:[[50,50]],2:[[30,30],[70,70]],3:[[28,28],[50,50],[72,72]],4:[[30,30],[70,30],[30,70],[70,70]],5:[[28,28],[72,28],[50,50],[28,72],[72,72]],6:[[30,26],[70,26],[30,50],[70,50],[30,74],[70,74]]};
const dots=n=>`<svg viewBox="0 0 100 100" aria-hidden="true">${PIP[n].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9"/>`).join("")}</svg>`;

/* Elegir arma a distancia (solo si tiene más de una) para Disparar. */
function rwPick(a,A){const rw=a.ws.filter(isRanged);if(rw.length<2)return"";const i=Math.min(A.rw||0,rw.length-1);
 return`<p class="tv-lab">Arma para este disparo</p><div class="tv-wpns">${rw.map((w,k)=>`<button type="button" class="tv-wpn${k===i?" on":""}" data-tv="rwpn" data-w="${k}"><b>${esc(w.n)}</b><small>${w.rng}″ · A${w.a*w.x}${w.ap?" · AP("+w.ap+")":""}${w.sp.length?" · "+esc(w.sp.join(", ")):""}</small></button>`).join("")}</div>`}
/* Elegir arma cuerpo a cuerpo (solo si tiene más de una) para Atacar o Cargar. */
function wpnPick(a,A){const mw=a.ws.filter(isMelee);if(mw.length<2)return"";const i=Math.min(A.wi||0,mw.length-1);
 return`<p class="tv-lab">Arma para este combate</p><div class="tv-wpns">${mw.map((w,k)=>`<button type="button" class="tv-wpn${k===i?" on":""}" data-tv="wpn" data-w="${k}"><b>${esc(w.n)}</b><small>A${w.a*w.x}${w.ap?" · AP("+w.ap+")":""}${w.sp.length?" · "+esc(w.sp.join(", ")):""}</small></button>`).join("")}</div>`}
/* Tirada de Neth en el centro de la pantalla: dados, y después el efecto (se queda en la tarjeta de la ronda). */
const evDie=v=>`<span class="tv-die${v?"":" q"}">${v?dots(v):"?"}</span>`;
function evFxHTML(){const F=U.evfx;if(!F)return"";
 if(F.st==="roll")return`<div class="tv-evfx" aria-live="polite"><div class="tv-evfxc"><p class="tv-lab">Evento de Neth · tirando</p><div class="tv-dd">${evDie(0)}${evDie(0)}</div><p>Primero las decenas y luego las unidades.</p></div></div>`;
 const e=G.ev;if(!e)return"";
 return`<div class="tv-evfx" data-tv="evclose"><div class="tv-evfxc ${e.tone}"><p class="tv-lab">Evento de Neth ${e.n}</p><div class="tv-dd">${evDie(e.a)}${evDie(e.b)}</div><h3>${esc(e.t)}</h3><p class="tv-eff">${esc(e.eff)}</p><small>Toca para seguir</small></div></div>`}
/* Ficha completa de un héroe (al pulsar su tarjeta): estadísticas, estados, armas, reglas, habilidades y equipo. */
function heroModal(){const gh=G.heroes.find(x=>x.id===U.hinfo),h=gh&&heroOf(gh);if(!h)return"";
 const sk=h.sk||[],isW=s=>s.g==="equipo"&&s.k&&s.k!=="Consumible"&&/A\d/.test(s.k),
  W=sk.filter(isW).map(s=>weapon(s.n,s.k)),EQ=sk.filter(s=>s.g==="equipo"&&!isW(s)),
  RU=sk.filter(s=>s.g==="regla"),HB=sk.filter(s=>s.g==="hab"),
  li=(arr,f)=>arr.length?arr.map(f).join(""):`<li class="tv-none">Ninguno</li>`,
  st=h.st.length?h.st.map(s=>ST_N[s]).join(", "):"Ninguno";
 return`<div class="tv-hveil"><div class="tv-hscrim" data-tv="hiclose"></div><section class="tv-hmod" role="dialog" aria-modal="true" aria-label="Ficha de ${esc(h.name)}">
  <header class="tv-hmh"><span class="tv-hpic">${h.img?`<img src="${esc(h.img)}" alt="">`:`<i>${esc(ini(h.name))}</i>`}</span><div><p class="tv-lab">${esc(h.prof||"Héroe")} · Nivel ${h.nivel||1}</p><b class="tv-in">${esc(h.name)}</b><small class="tv-sub">${esc(h.raza||"")}${h.pts?" · "+h.pts+" pts":""}</small></div><button type="button" class="tv-ix" data-tv="hiclose" aria-label="Cerrar">×</button></header>
  <div class="tv-qd"><span><small>Calidad</small>${h.cal}+</span><span><small>Defensa</small>${h.def}+</span><span><small>Fuerza</small>${h.fue}+</span><span><small>Destreza</small>${h.des}+</span><span><small>Voluntad</small>${h.vol}+</span></div>
  <div class="tv-qd"><span><small>Heridas</small>${h.hp}/${h.hpMax}</span><span><small>Poder</small>${h.pw}/${h.pwMax}</span><span><small>Pociones</small>${h.pot||0}</span><span><small>Oro</small>${h.gold||0}</span></div>
  <p class="tv-sub"><b>Estados:</b> ${st}</p>
  <p class="tv-lab">Armas</p>${W.length?`<table class="tv-wt"><tr><th>Arma</th><th>RNG</th><th>ATK</th><th>AP</th><th>SPE</th></tr>${W.map(w=>`<tr><td>${esc(w.n)}</td><td>${w.rng?w.rng+"″":"—"}</td><td>A${w.a*w.x}</td><td>${w.ap||"—"}</td><td>${w.sp.length?w.sp.map(x=>`<button type="button" class="tv-rchip sm" data-tv="rinfo" data-l="${esc(x)}" data-o="">${esc(x)}</button>`).join(" "):"—"}</td></tr>`).join("")}</table>`:`<p class="tv-sub">Sin armas.</p>`}
  <p class="tv-lab">Reglas · toca una para ver qué hace</p>${chipsOf(RU.map(s=>s.n),gh.id)}
  <p class="tv-lab">Habilidades · toca una para ver qué hace</p>${chipsOf(HB.map(s=>s.n),gh.id)}
  <p class="tv-lab">Equipo</p><ul class="tv-hl">${li(EQ,s=>`<li><b>${esc(s.n)}</b>${s.d?`<span>${esc(s.d)}</span>`:""}</li>`)}</ul>
 </section></div>`}
function setupPanel(){const hs=HS,sel=selHeroes(),b=budget();
 return`<div class="tv-setup"><div class="tv-shead"><p class="tv-lab">Nueva partida de prueba</p><h3>Configuración de la partida</h3><p class="tv-sub">Una partida aparte de la de la mesa: no toca su ronda, su alerta ni sus oleadas. Las heridas, el poder y los estados sí se guardan en las fichas de los héroes. Cuando termines de prepararla, se despliega el tablero.</p></div>
 <div class="tv-sgrid"><div class="tv-sc1"><p class="tv-lab">Dificultad</p><div class="tv-seg">${DIF.map((n,i)=>`<button type="button" class="${G.d===i+1?"on":""}" data-tv="dif" data-d="${i+1}"><b>${i+1}</b><small>${n}</small></button>`).join("")}</div>
 <div class="tv-sum"><span><small>Puntos de los héroes</small><b>${heroPts()}</b></span><span><small>Oleada (${PCT[G.d-1]} %)</small><b>${b} pts</b></span></div></div>
 <div class="tv-sc2"><p class="tv-lab">Héroes (${sel.length})</p><div class="tv-hsel">${hs.map(h=>{const on=sel.includes(h);return`<button type="button" class="tv-hs${on?" on":""}${hfKo(h)?" ko":""}" data-tv="hsel" data-n="${esc(h.name)}"><span class="tv-hp">${h.img?`<img src="${esc(h.img)}" alt="">`:`<i>${esc(ini(h.name))}</i>`}</span><span><b>${esc(h.name)}</b><small>${esc(h.prof||"Héroe")} · ${h.pts||"¿?"} pts · ${h.hp}/${h.hpMax} heridas</small></span><em>${on?"✓":""}</em></button>`}).join("")}</div>
 ${sel.some(h=>hfKo(h))?`<p class="tv-warnp">Hay héroes inconscientes (0 heridas). Cúralos en su ficha antes de empezar o no podrán moverse.</p>`:""}</div></div>
 <button type="button" class="tv-btn big" data-tv="deploy" ${sel.length?"":"disabled"}>Desplegar la mesa</button></div>`}
function deployPanel(){const rolls=G.units.map(u=>`<li><b>${esc(u.nm)}</b><span>cuadrante ${QN[u.roll-1]}</span><i>${u.roll}</i></li>`).join("");
 return`<div class="tv-setup"><p class="tv-lab">Despliegue</p><h3>Centinelas y héroes</h3><p class="tv-sub">Cada centinela tira un dado de 1 a 4 y sale al centro de ese cuadrante, al azar. Puedes arrastrar cualquier ficha para colocarla antes de empezar; los héroes solo hasta 10″ de su esquina (19″ si tienen Scout). Al empezar, las unidades con Scout pueden adelantarse hasta 9″: la IA lo hace siempre en dificultad 3-4 y una de cada dos veces en 1-2.</p>
 <ul class="tv-rolls">${rolls||"<li>No cabía ninguna unidad en la oleada.</li>"}</ul>
 <p class="tv-lab">Esquina de los héroes</p>${G.hcRoll&&G.hcRoll<=4?`<p class="tv-sub">Dado: <b>${G.hcRoll}</b> → esquina ${G.hcRoll}.</p>`:`<p class="tv-sub">Dado: <b>${G.hcRoll}</b> → eliges tú.</p>`}
 <div class="tv-seg c4">${[1,2,3,4].map(c=>`<button type="button" class="${G.hc===c?"on":""}" data-tv="corner" data-c="${c}"><b>${c}</b><small>${["Noroeste","Noreste","Sureste","Suroeste"][c-1]}</small></button>`).join("")}</div>
 <button type="button" class="tv-btn big" data-tv="start" ${G.hc?"":"disabled"}>Empezar la partida</button></div>`}
function aiPanel(){const c=G.aiCur,tot=G.aiTot||0;
 return`<div class="tv-ai"><p class="tv-lab">Turno de la IA · unidad ${Math.min(G.aiDone.length+1,tot)} de ${tot}</p>${c?`<b>${esc(actor(c.id)?actor(c.id).name:"")}</b><p>${esc(c.why)}</p>`:"<p>Preparando…</p>"}<span class="tv-spin" aria-hidden="true"></span></div>`}
function endPanel(){const e=G.endInfo||{};
 return`<div class="tv-end"><p class="tv-lab">Fin de la ronda ${e.r||G.round}</p>${e.none?`<div class="tv-box warn tv-noen"><b>No quedan enemigos en la mesa</b><p>No se tira el dado de alerta: la Alertness sube 2 (Campaign Builder).</p></div>`:""}<div class="tv-alrow">${pips()}<span>${e.pending?"Tirando el dado de alerta…":e.none?`Sin enemigos: Alertness +2`:`Dado ${e.die}: Alertness +${e.add}`}</span></div>${e.rf?`<p class="tv-box warn"><b>¡Refuerzos!</b> La alerta llegó a 6: entran ${e.n} unidades por las esquinas (en rojo) y se tira un evento de Neth al empezar la ronda.</p>`:""}<button type="button" class="tv-btn big" data-tv="next">Empezar la ronda ${G.round+1}</button></div>`}
function overPanel(){return`<div class="tv-end lost"><p class="tv-lab">Derrota</p><h3>Todos los héroes han caído</h3><p>Según el Campaign Builder, cuando todos los héroes están inconscientes a la vez, la misión fracasa y hay que repetir el capítulo.</p><button type="button" class="tv-btn big" data-tv="reset2">Nueva partida</button></div>`}
function sideMain(){let main="";
 if(G.over)main=overPanel();
 else if(G.phase==="setup")main=setupPanel();
 else if(G.phase==="deploy")main=deployPanel();
 else if(G.phase==="event")main=evCard();
 else if(G.phase==="heroes"){main=`<p class="tv-lab">Turno de los héroes · actúan en el orden que quieras</p><div class="tv-hcs">${G.heroes.map(heroCard).join("")}</div>${G.cur>=0?actPanel():""}${heroesDone()||G.cur<0?`<button type="button" class="tv-btn big ${heroesDone()?"":"alt"}" data-tv="toai">${heroesDone()?"Turno de la IA":"Terminar el turno de los héroes"}</button>`:""}`}
 else if(G.phase==="ai")main=aiPanel();
 else if(G.phase==="end")main=endPanel();
 const mod=G.mod&&G.phase!=="setup"?`<div class="tv-mod"><small>Hasta el siguiente evento · ${G.mod.n}</small><b>${esc(G.mod.t)}</b></div>`:"";
 const info=U.info&&actor(U.info)?unitInfo(U.info):"";
 const trk=G.phase!=="setup"&&G.phase!=="deploy"&&(G.tracks||[]).length?`<div class="tv-trkb${G.prim?" ok":""}"><small>Objetivo principal · Rastros del pueblo</small><b>${G.prim?"¡Cumplido! Los tres braseros arden.":`${G.tracks.filter(t=>t.on).length} de ${G.tracks.length} recuperados`}</b>${G.prim&&G.diary?`<span>${esc(G.diary)} lleva el diario del olvidado.</span>`:""}</div>`:"";
 return`${mod}${trk}${main}${info}`}
/* Columna del registro: último combate y todo lo que va pasando en la partida (lo más nuevo, arriba). */
function sideLog(){
 const logH=`<section class="tv-log"><header><b>Registro de actividad</b>${G.log.length?`<small>${G.log.length}</small>`:""}</header>${G.log.length?`<ol>${G.log.map(l=>`<li class="${l.k}"><small>R${l.r}</small>${linkNames(esc(l.t))}</li>`).join("")}</ol>`:`<p class="tv-empty">Aquí irá contándose todo lo que ocurra en la partida.</p>`}</section>`;
 return`${combatCard()}${logH}`}
function legend(){return`<div class="tv-leg"><span><i class="h"></i>Héroe</span><span><i class="e"></i>Enemigo</span><span><i class="f"></i>Recién llegado</span><button type="button" class="tv-chipb${U.obs?" on":""}" data-tv="obs">${U.obs?"Ocultar":"Ver"} obstáculos</button><span class="tv-scale">Cuadro = 6″</span></div>`}

/* ---------------------------------------------------------------- pintar */
function paint(){if(!U.open)return;
 /* Si el enemigo cuya ficha está abierta cae o huye, la ficha se cierra con él. */
 if(U.info){const ia=actor(U.info);if(!ia||(ia.kind==="u"&&ia.ko()))U.info=""}
 const sa=$(".tv-sact"),sl=$(".tv-slog"),ta=sa?sa.scrollTop:0,tl=sl?sl.scrollTop:0;
 const extra=`<div id="tvDice" class="tv-dwrap">${diceHTML()}</div>${U.confirm?confirmHTML():""}${U.wilAsk?wilHTML():""}${U.prim?primHTML():""}${U.rinfo?ruleModal():""}${evFxHTML()}${heroModal()}`;
 /* Antes de empezar (configuración): pantalla grande, sin tablero. El mapa sale al desplegar la mesa. */
 if(G.phase==="setup"&&!G.over){ROOT.innerHTML=`<div class="tv-veil" data-tv="close"></div><section class="tv-win tv-setupwin" role="dialog" aria-modal="true" aria-label="Configuración de la partida">${head()}<div class="tv-setupw"><div class="tv-setupc">${setupPanel()}</div></div>${extra}</section>`;return}
 ROOT.innerHTML=`<div class="tv-veil" data-tv="close"></div><section class="tv-win" role="dialog" aria-modal="true" aria-label="Tablero virtual">${head()}<div class="tv-body"><div class="tv-boardw"><div class="tv-board">${boardSVG()}</div>${legend()}</div><aside class="tv-side tv-sact" aria-label="Acciones">${sideMain()}</aside><aside class="tv-side tv-slog" aria-label="Registro de actividad">${sideLog()}</aside></div>${extra}</section>`;
 const na=$(".tv-sact"),nl=$(".tv-slog");if(na)na.scrollTop=ta;if(nl)nl.scrollTop=tl;bindBoard()}
function paintOv(){const o=$("#tvOv");if(o)o.innerHTML=overlay();const s=$(".tv-side .tv-box .tv-btn[data-tv=mvok]");if(s)s.disabled=!U.dest}
function open(){if(U.open)return;U.open=true;
 /* fichas guardadas que hayan quedado dentro de una casa o del pozo (p. ej. de una partida con otro mapa): al borde */
 G.units.concat(G.heroes).forEach(o=>{const p=tOut([o.x,o.y]);o.x=p[0];o.y=p[1]});ensureTracks();ROOT.hidden=false;FAB.setAttribute("aria-expanded","true");document.body.classList.add("tvopen");paint();requestAnimationFrame(()=>ROOT.classList.add("on"));setTimeout(()=>{const b=$(".tv-x");if(b)b.focus({preventScroll:true})},60);
 /* si se cerró la página en pleno turno de la IA, se retoma donde iba */
 if(G.phase==="ai"&&!U.busy&&!G.over)setTimeout(runAI,500)}
function close(){if(!U.open)return;U.open=false;ROOT.classList.remove("on");FAB.setAttribute("aria-expanded","false");document.body.classList.remove("tvopen");setTimeout(()=>{if(!U.open){ROOT.hidden=true;ROOT.innerHTML=""}},380);FAB.focus({preventScroll:true})}

/* ---------------------------------------------------------------- tablero: toques y arrastre */
function svgPt(e){const svg=$("#tvMap");if(!svg)return null;const p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;const q=p.matrixTransform(svg.getScreenCTM().inverse());return[q.x,q.y]}
function bindBoard(){const svg=$("#tvMap");if(!svg)return;
 svg.addEventListener("pointerdown",e=>{if(U.busy)return;const tok=e.target.closest("[data-tok]"),id=tok&&tok.dataset.tok,p=svgPt(e);if(!p)return;
  const gh=G.cur>=0?G.heroes[G.cur]:null,moving=G.phase==="heroes"&&G.act&&(G.act.st==="move"||G.act.st==="tele");
  if(G.phase==="deploy"&&id){U.drag={id,moved:false,dep:true};svg.setPointerCapture(e.pointerId);e.preventDefault();return}
  if(moving&&(!id||id===gh.id)){U.drag={id:gh.id,moved:false};U.dest=p;paintOv();svg.setPointerCapture(e.pointerId);e.preventDefault()}});
 svg.addEventListener("pointermove",e=>{if(!U.drag)return;const p=svgPt(e);if(!p)return;U.drag.moved=true;
  if(U.drag.dep){const a=actor(U.drag.id);if(!a)return;const q=heroClamp(U.drag.id,tOut(p));a.g.x=q[0];a.g.y=q[1];const t=tokEl(a.id);if(t)t.setAttribute("transform",`translate(${q[0].toFixed(1)} ${q[1].toFixed(1)})`);return}
  U.dest=p;paintOv()});
 const up=e=>{if(!U.drag)return;const d=U.drag;U.drag=null;if(d.dep){if(d.moved){const a=actor(d.id);if(a){a.g.pick=false;const f=freeSpot([a.x,a.y],a.r,a.id);a.g.x=f[0];a.g.y=f[1]}save();paint()}else{U.info=d.id;paint()}return}paint()};
 svg.addEventListener("pointerup",up);svg.addEventListener("pointercancel",up);
 svg.addEventListener("click",e=>{if(U.busy)return;const t=e.target.closest("[data-tv=tgt]");if(t){act("tgt",t);return}
  const tok=e.target.closest("[data-tok]");if(tok&&G.act&&(G.act.st==="shoot"||G.act.st==="chg"||G.act.st==="atk")&&tok.dataset.tok[0]==="u"){act("tgt",{dataset:{id:tok.dataset.tok}});return}
  if(tok&&!(G.act&&(G.act.st==="move"||G.act.st==="tele"))){const id=tok.dataset.tok;
   if(id[0]==="h"&&G.phase==="heroes"){const i=G.heroes.findIndex(x=>x.id===id);if(i>=0&&(G.cur<0)&&G.heroes[i].act!==2&&!actor(id).ko()){act("hero",{dataset:{i}});return}}
   if(G.phase!=="deploy"){U.info=U.info===id?"":id;paint()}}})}

/* ---------------------------------------------------------------- acciones */
function act(k,b){const ds=b&&b.dataset||{};
 if(DICE_ACTS.has(k)){diceAct(k);return}
 if(k!=="reset")U.sure=false;
 if(k!=="toai")U.confirm=false;
 switch(k){
 case"close":close();return;
 case"obs":U.obs=!U.obs;break;
 case"noinfo":U.info="";break;
 case"reset":if(!U.sure){U.sure=true;paint();setTimeout(()=>{if(U.sure){U.sure=false;paint()}},2600);return}U.sure=false;G=G0();U.info="";U.sel="";U.dest=null;break;
 case"reset2":G=G0();U.info="";break;
 case"dif":G.d=+ds.d;break;
 case"hsel":{const n=ds.n;selHeroes();G.hsel=G.hsel.includes(n)?G.hsel.filter(x=>x!==n):G.hsel.concat(n).slice(-4);break}
 case"deploy":{const hs=selHeroes();G.units=[];G.heroes=hs.map((h,k)=>({id:"h"+k,hi:HS.indexOf(h),n:h.name,x:58,y:58,act:0}));G.log=[];G.ev=null;G.mod=null;G.last=null;G.nref=0;G.needEv=true;G.prim=false;G.diary="";G.tracks=placeTracks();U.prim=null;hs.forEach(h=>{h.sk=(h.sk||[]).filter(x=>x.n!==DIARY.n)});hfSync();
  const n=deploySentries();const r=d6();G.hcRoll=r;G.hc=0;if(r<=4)placeHeroes(r);else{const far=[0,1,2,3].sort((x,y)=>{const s=c=>G.units.reduce((m,u)=>Math.min(m,Math.hypot(u.x-CC[c][0],u.y-CC[c][1])),1e9);return s(y)-s(x)})[0];placeHeroes(far+1)}
  G.phase="deploy";log(`Mesa preparada: ${n} centinelas (${budget()} pts) y héroes en la esquina ${G.hc}${r>4?" (5-6: puedes cambiarla)":""}.`,"rd");break}
 case"corner":placeHeroes(+ds.c);break;
 case"start":startGame();break;
 case"ev":{const a=d6(),bb=d6();U.busy=true;U.evfx={st:"roll"};paint();
  rollAnim(()=>{U.busy=false;rollEvent(a,bb);G.ev.r=G.round;if(G.phase==="event")toHeroes();save();U.evfx={st:"done"};paint();setTimeout(()=>{if(U.evfx&&U.evfx.st==="done"){U.evfx=null;paint()}},8000)},".tv-evfx .tv-die");return}
 case"evclose":U.evfx=null;break;
 case"heroinfo":U.hinfo=(G.heroes[+ds.i]||{}).id||null;break;
 case"hiclose":U.hinfo=null;break;
 case"wpn":if(G.act)G.act.wi=+ds.w;break;
 case"rwpn":if(G.act&&G.act.st==="shoot")G.act.rw=+ds.w;break;
 /* Casilla de acción extra del panel: marcarla gasta 3 de poder; desmarcarla antes de elegir acción los devuelve. */
 case"xtick":{const gh=G.heroes[G.cur];if(!gh||G.phase!=="heroes"||G.act)break;const h=heroOf(gh);
  if(gh.exOpen){h.pw=Math.min(h.pwMax,h.pw+3);gh.ex=false;gh.exOpen=false;hfSync();log(`${h.name} desmarca la acción extra y recupera los 3 de poder.`,"hr");break}
  if(!canExtra(gh)){toast("Ese héroe no tiene 3 de poder para una acción extra.");break}
  h.pw-=3;gh.ex=true;gh.exOpen=true;hfSync();log(`${h.name} marca una acción extra (3 de poder).`,"hr");break}
 /* Acción extra (3 de poder) desde la tarjeta del héroe: si ya terminó sus acciones, vuelve a abrir su activación. */
 case"xtra":{const i=+ds.i,gh=G.heroes[i];
  if(G.phase!=="heroes"||!gh||!canExtra(gh)){toast("Ese héroe no tiene 3 de poder para una acción extra.");break}
  if(G.cur>=0&&G.cur!==i){toast("Termina antes la activación del héroe que está actuando.");break}
  if(G.cur===i&&G.act){toast("Termina antes la acción que está haciendo.");break}
  if(G.cur!==i){const a=actor(gh.id);if(!a||a.ko())break;G.cur=i;G.act=null;U.dest=null;U.sel=gh.id;if(!gh.stc)heroStart(gh);if(actor(gh.id).ko()){endAct(gh);break}}
  gh.act=1;const h=heroOf(gh);h.pw-=3;gh.ex=true;gh.exOpen=true;hfSync();log(`${h.name} gasta 3 de poder para una acción extra.`,"hr");break}
 case"toheroes":toHeroes();break;
 case"hero":{const i=+ds.i,gh=G.heroes[i],a=actor(gh.id);if(G.phase!=="heroes"||!a||a.ko()||gh.act===2||(G.cur>=0&&G.cur!==i))return;if(G.cur===i)break;G.cur=i;G.act=null;U.dest=null;U.sel=gh.id;if(!gh.stc)heroStart(gh);if(actor(gh.id).ko()){endAct(gh)}break}
 case"rally":{const gh=G.heroes[G.cur],h=heroOf(gh);h.st=h.st.filter(s=>s!=="at");log(`${h.name} pasa la activación quieto y deja de estar Aturdido.`,"hr");hfSync();endAct(gh);break}
 case"unimp":{const gh=G.heroes[G.cur],a=actor(gh.id),h=a.h,v=d3(),lost=Math.min(h.pw,v);h.pw-=lost;if(v>lost)wound(a,v-lost);h.st=h.st.filter(s=>s!=="ac");log(`${h.name} gasta ${v} de poder y deja de estar Afectado${v>lost?` (agotamiento: ${v-lost} heridas)`:""}.`,"hr");hfSync();checkOver();break}
 case"act":{const gh=G.heroes[G.cur],a=actor(gh.id),h=a.h,kk=ds.k;
  if(kk!=="rest"&&ACOST[kk]>freeA(gh)){toast(usedA(gh)>=2&&canExtra(gh)?"Marca primero la acción extra (3 de poder).":freeA(gh)<=0?"No le quedan acciones en esta activación.":`Esa acción necesita ${ACOST[kk]} acciones.`);return}
  gh.exOpen=false;
  if(kk==="rest"){h.pw=h.pwMax;hfSync();log(`${h.name} descansa y recupera todo el poder (${h.pwMax}).`,"hr");finishAction(gh,"rest",true);break}
  if(kk==="hold"){log(`${h.name} se mantiene en su sitio.`,"hr");finishAction(gh,"hold");break}
  if(kk==="obj"){const t=trkNear(a)[0];if(!t){toast("No hay ningún rastro a "+CT+" o menos.");break}doTrack(gh,a,t);return}
  G.act={k:kk,st:kk==="shoot"?"shoot":kk==="chg"?"chg":kk==="atk"?"atk":"move",wi:0,paid:false};U.dest=null;break}
 case"cancel":{if(!G.act||G.act.mv||G.act.free||G.act.st==="tele")return;const gh=G.heroes[G.cur];if(G.act.paid){const h=heroOf(gh);h.pw=Math.min(h.pwMax,h.pw+3);gh.ex=false;hfSync()}G.act=null;U.dest=null;break}
 case"mvskip":G.act.st="shoot";U.dest=null;break;
 case"mvok":{const gh=G.heroes[G.cur],a=actor(gh.id),k2=G.act.k,r=U.dest&&heroReach(a,U.dest,moveLim(a,k2));if(!r)return;U.dest=null;U.busy=true;
  log(`${a.name} ${k2==="adv"?"avanza":"corre"} ${inch(pathLen(r.pts)/BIN)}.`,"hr");
  const keep=G.act;G.act=null;paint();animPath(a.id,r.pts).then(()=>{gh.x=r.end[0];gh.y=r.end[1];useMv(gh);U.busy=false;if(keep.free){fin(gh,keep)}else if(k2==="adv"){G.act={...keep,st:"shoot",mv:true}}else{G.act=null;finishAction(gh,k2)}save();paint()});return}
 case"noshoot":{const gh=G.heroes[G.cur];fin(gh,G.act);break}
 case"nochain":{const gh=G.heroes[G.cur];if(G.act&&G.act.free)fin(gh,G.act);break}
 case"teleok":{const gh=G.heroes[G.cur],a=actor(gh.id),A=G.act;if(!A||A.st!=="tele"||!U.dest)return;let dx=U.dest[0]-a.x,dy=U.dest[1]-a.y;const Lx=Math.hypot(dx,dy),R2=A.lim*BIN;if(Lx>R2){dx*=R2/Lx;dy*=R2/Lx}
  const pp=freeSpot(tOut([a.x+dx,a.y+dy]),a.r,a.id);gh.x=pp[0];gh.y=pp[1];log(`${a.name} se coloca ${inch(Math.hypot(pp[0]-a.x,pp[1]-a.y)/BIN)} más allá.`,"hr");U.dest=null;finishAction(gh,"sk");break}
 case"teleno":{const gh=G.heroes[G.cur];U.dest=null;finishAction(gh,"sk");break}
 case"rsel":{const R=U.rinfo;if(!R)break;const SX=SKX[ruleInfo(R.l).n],n=SX&&(SX.foe||SX.ally)?(SX.foe||SX.ally).n:1;R.sel=R.sel||[];
  if(R.sel.includes(ds.id))R.sel=R.sel.filter(t=>t!==ds.id);else{R.sel.push(ds.id);if(R.sel.length>n)R.sel.shift()}break}
 case"rx":{if(U.rinfo)U.rinfo.x=+ds.v;break}
 case"ruse":useSkill();return;
 case"tgt":{const gh=G.heroes[G.cur],a=actor(gh.id),B=actor(ds.id);if(!gh||!a||!B||!G.act)return;
  const st=G.act.st,kk=G.act.k,W=wsel(a,G.act);
  if(st==="shoot"){const RW=rwOf(a,G.act),hold=kk==="hold"||kk==="shoot";if(!RW||!canShoot(a,B,hold,RW))return;const A0=G.act;G.act={k:kk,st:"fight"};U.busy=true;U.dest=null;paint();
   (async()=>{fxShot(a,B);await sleep(REDUCE?0:700);const L=await fight(a,B,"shoot",{only:RW,hold});endDice();U.busy=false;const nx=L.chain&&!actor(gh.id).ko()?chainAct(a,L.chain,A0):null;if(nx)G.act=nx;else fin(gh,A0);save();paint();const nb=actor(ds.id);if(nb)fxDmg(nb,L.tB)})();return}
  if(st==="atk"){if(gap(a,B)>CONTACT+.01)return;log(`${a.name} ataca a ${B.name} (ya están en contacto, sin cargar).`,"hr");const A0=G.act;G.act={k:kk,st:"fight"};U.busy=true;paint();
   (async()=>{fxClash(a,B);await sleep(REDUCE?0:700);const L=await fight(a,B,"melee",{charge:false,only:W});endDice();U.busy=false;const nx=L.chain&&!actor(gh.id).ko()?chainAct(a,L.chain,A0):null;if(nx)G.act=nx;else fin(gh,A0);save();paint();const nb=actor(B.id),na=actor(gh.id);if(nb)fxDmg(nb,L.tB);if(na&&L.tA)fxDmg(na,L.tA)})();return}
  if(st==="chg"){const A0=G.act,c=chargePath(a,B,A0.lim);if(!c||!c.ok||gap(a,B)<=CONTACT+.01)return;U.busy=true;log(`${a.name} carga ${inch(c.len/BIN)} contra ${B.name}.`,"hr");G.act={k:kk,st:"fight"};paint();
   animPath(a.id,c.pts).then(async()=>{gh.x=c.end[0];gh.y=c.end[1];useMv(gh);const A2=actor(gh.id),B2=actor(B.id);fxClash(A2,B2);await sleep(REDUCE?0:700);const L=await fight(A2,B2,"melee",{only:W,cd:c.len/BIN});endDice();U.busy=false;const nx=L.chain&&!actor(gh.id).ko()?chainAct(A2,L.chain,A0):null;if(nx)G.act=nx;else fin(gh,A0);save();paint();const nb=actor(B.id),na=actor(gh.id);if(nb)fxDmg(nb,L.tB);if(na&&L.tA)fxDmg(na,L.tA)});return}
  return}
 case"ignsh":{const a=actor(G.offerIgnore);if(a&&a.h.pw>=2){a.h.pw-=2;a.h.st=a.h.st.filter(s=>s!=="at");log(`${a.name} gasta 2 de poder y no queda Aturdido.`,"hr");hfSync()}G.offerIgnore=null;break}
 case"endact":{const gh=G.heroes[G.cur];if(!(gh.done||[]).length)log(`${heroOf(gh).name} no hace nada.`,"hr");endAct(gh);break}
 case"toai":{if(pendingHeroes().length){U.confirm=true;paint();return}G.heroes.forEach(gh=>{if(gh.act!==2)gh.act=2});G.cur=-1;G.act=null;save();runAI();return}
 case"toai2":{G.heroes.forEach(gh=>{if(gh.act!==2)gh.act=2});G.cur=-1;G.act=null;save();runAI();return}
 case"noconf":break;
 case"rinfo":U.rinfo={l:ds.l,o:ds.o||"",sel:[]};break;
 case"rclose":U.rinfo=null;break;
 case"primclose":U.prim=null;break;
 case"wily":case"wiln":{const f=U.wilAsk;if(!f)break;U.wilAsk=null;f.res(k==="wily");return}
 case"next":nextRound();break;
 default:return}
 save();paint()}
/* Tras una acción: puede hacer otra gastando 3 de poder (una sola), o terminar. */
function finishAction(gh,k,rest,free){if(!free)gh.done=(gh.done||[]).concat(k);G.act=null;U.dest=null;const h=heroOf(gh);
 /* Descansar: no se puede hacer nada más (ni antes ni después). Si ya no quedan acciones, termina salvo que pueda pagar la extra. */
 if(rest||G.over||!h||hfKo(h)||(leftA(gh)<=0&&!canExtra(gh))){endAct(gh);return}}
function rollAnim(done,sel){const ds=ROOT.querySelectorAll(sel||".tv-die");if(REDUCE||!ds.length){done();return}let n=0;
 const it=setInterval(()=>{ds.forEach(d=>{d.classList.remove("q");d.innerHTML=dots(d6())});if(++n>9){clearInterval(it);done()}},70)}
let TT=0;function toast(t){let el=$(".tv-toast");if(!el){el=document.createElement("div");el.className="tv-toast";ROOT.appendChild(el)}el.textContent=t;el.classList.add("on");clearTimeout(TT);TT=setTimeout(()=>el.classList.remove("on"),2400)}

ROOT.addEventListener("click",e=>{const b=e.target.closest("[data-tv]");if(!b||b.closest("svg"))return;if(b.getAttribute("aria-disabled")==="true"||b.disabled)return;if(U.busy&&b.dataset.tv!=="close"&&!DICE_ACTS.has(b.dataset.tv))return;act(b.dataset.tv,b)});
/* Números metidos a mano en la bandeja de dados (sin repintar, para no perder el foco). */
ROOT.addEventListener("change",e=>{const s=e.target.closest&&e.target.closest(".tv-dsel");if(!s||!U.dice)return;U.dice.mv[+s.dataset.i]=+s.value;const b=$("#tvDapply");if(b)b.disabled=!U.dice.mv.every(Boolean)});
ROOT.addEventListener("toggle",e=>{if(e.target.classList&&e.target.classList.contains("tv-log"))U.logOpen=e.target.open},true);
FAB.addEventListener("click",()=>U.open?close():open());
document.addEventListener("keydown",e=>{if(e.key!=="Escape"||!U.open)return;if(typeof HC!=="undefined"&&HC.isOpen&&HC.isOpen())return;e.preventDefault();e.stopImmediatePropagation();
 if(U.wilAsk)return;
 if(U.rinfo){U.rinfo=null;paint();return}
 if(U.prim){U.prim=null;paint();return}
 if(U.confirm){U.confirm=false;paint();return}
 if(U.hinfo||U.evfx){U.hinfo=null;U.evfx=null;paint();return}
 if(U.dice)return;
 if(U.info){U.info="";paint();return}if(G.act&&!G.act.mv&&!U.busy){act("cancel");return}close()},true);
FAB.innerHTML=`<span class="tvf-ic" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="4.5" y="4.5" width="23" height="23" rx="2.5"/><path d="M16 4.5v23M4.5 16h23"/><circle cx="10.5" cy="10.5" r="2.6" class="h"/><path d="M21.5 18.6l2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" class="e"/></svg></span><span class="tvf-tx"><b>Tablero</b><small>Prototipo</small></span>`;
return{open,close,isOpen:()=>U.open};
})();
