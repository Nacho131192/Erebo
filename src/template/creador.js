/* Creador de héroes (raza y clase): ventana propia #hc. Datos reales del creador de héroes en HCDATA (heroes-data.json).
   Se abre con el «+» de los medallones; al terminar añade el héroe a HS y abre su ficha. */
const HC=(function(){
"use strict";
const ROOT=document.getElementById("hc");
const $=(s,r=ROOT)=>r.querySelector(s);
const $$=(s,r=ROOT)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- datos ---------- */
const D=HCDATA;
D.facs=D.facs.map(f=>({...f,races:f.races.filter(r=>r.types.length)})).filter(f=>f.races.length);
const RACES=[];
D.facs.forEach((f,fi)=>f.races.forEach((r,ri)=>{r.fi=fi;r.ri=ri;r.fac=f;r.id=RACES.length;RACES.push(r)}));
const HUES={"Bestias":30,"Caos":318,"Demonios":2,"Elfos":150,"Enanos":42,"Forasteros":180,"Gremios":205,"Humanos":228,"No muertos":270,"Pielesverdes":88};
const hueF=fi=>HUES[D.facs[fi].n]??220;
const NAMES=["Aldric","Brenna","Corvin","Dahlia","Eldrin","Fenna","Garrick","Hilda","Ivor","Kaelen","Lysa","Morwen","Neris","Orsin","Pella","Quillon","Rhosyn","Soren","Talia","Ulric","Vessa","Wren","Ysolde","Zarek","Tamsin","Ilvane"];
const rnd=a=>a[Math.floor(Math.random()*a.length)];

/* ---------- ilustraciones por raza y clase (src/img/heroes/, WebP, archivos aparte que se cargan al elegir) ----------
   ART = {clave:1} con las combinaciones «raza-clase» que tienen imagen (lo rellena build.py en el marcador de abajo).
   La imagen completa es img/heroes/<clave>.webp y el busto (del pecho hacia arriba) img/heroes/<clave>-busto.webp.
   Para añadir una raza hay que poner sus láminas en src/img/heroes/ y registrarla en ARC (nombre en inglés de la raza → prefijo del archivo). */
const ART=%%HC_ART%%;
const IMGD="img/heroes/";
const ARC={"Saurians":"saurios","Beastmen":"hombres-bestia","Ratmen":"hombres-rata","War Disciples":"discipulos-guerra","Lust Disciples":"discipulos-lujuria","Plague Disciples":"discipulos-plaga","Change Disciples":"discipulos-cambio","Havoc Warriors":"guerreros-caos","Daemons of War":"demonios-guerra","Daemons of Lust":"demonios-lujuria","Daemons of Plague":"demonios-plaga","Daemons of Change":"demonios-cambio","High Elves":"altos-elfos","Deep-Sea Elves":"elfos-abisales","Dark Elves":"elfos-oscuros","Wood Elves":"elfos-silvanos"};
const ACL={"Barbarian":"barbaro","Bard":"bardo","Warlock":"brujo","Cleric":"clerigo","Druid":"druida","Ranger":"explorador","Fighter":"guerrero","Sorcerer":"hechicero","Wizard":"mago","Monk":"monje","Paladin":"paladin","Rogue":"picaro"};
const art=(r,c)=>{const k=r&&c&&ARC[r.en]&&ACL[c.en]?ARC[r.en]+"-"+ACL[c.en]:null;return k&&ART[k]?{k,f:IMGD+k+".webp",b:IMGD+k+"-busto.webp"}:null};

/* ---------- clases permitidas por raza (selección de Nacho, 2026-11-25) ----------
   Cada raza solo ofrece las clases que le pegan (unas 230 combinaciones en total). Una raza sin entrada aquí ofrece todas. */
const ALLOW={
"Hombres bestia":["Bárbaro","Druida","Explorador","Guerrero","Brujo"],
"Hombres rata":["Pícaro","Brujo","Hechicero","Explorador","Guerrero"],
"Saurios":["Bárbaro","Brujo","Druida","Explorador","Guerrero","Hechicero","Pícaro"],
"Discípulos de la Guerra":["Bárbaro","Guerrero","Brujo","Clérigo"],
"Discípulos de la Lujuria":["Bardo","Pícaro","Brujo","Hechicero","Guerrero"],
"Discípulos de la Plaga":["Clérigo","Druida","Brujo","Bárbaro","Guerrero"],
"Discípulos del Cambio":["Mago","Hechicero","Brujo","Pícaro","Bardo"],
"Guerreros del Caos":["Guerrero","Bárbaro","Paladín","Brujo"],
"Demonios de la Guerra":["Bárbaro","Guerrero","Brujo"],
"Demonios de la Lujuria":["Pícaro","Bardo","Brujo","Hechicero"],
"Demonios de la Plaga":["Brujo","Bárbaro","Guerrero","Druida"],
"Demonios del Cambio":["Hechicero","Mago","Brujo","Pícaro"],
"Altos elfos":["Mago","Paladín","Guerrero","Bardo","Hechicero","Explorador","Clérigo"],
"Elfos abisales":["Brujo","Hechicero","Mago","Pícaro","Explorador","Druida"],
"Elfos oscuros":["Pícaro","Brujo","Hechicero","Guerrero","Explorador"],
"Elfos silvanos":["Explorador","Druida","Bardo","Pícaro","Mago","Guerrero"],
"Enanos":["Guerrero","Clérigo","Paladín","Bárbaro"],
"Enanos de la ciudad celeste":["Guerrero","Mago","Paladín","Clérigo","Explorador"],
"Enanos del Caos":["Guerrero","Bárbaro","Brujo","Clérigo"],
"Enanos volcánicos":["Guerrero","Bárbaro","Hechicero","Clérigo","Brujo"],
"Acechadores de las sombras":["Pícaro","Explorador","Brujo","Monje","Hechicero"],
"Celadores eternos":["Paladín","Guerrero","Clérigo","Monje","Mago"],
"Imperio del Dragón":["Monje","Guerrero","Paladín","Hechicero","Mago","Pícaro","Explorador"],
"Medianos":["Pícaro","Bardo","Explorador","Druida","Clérigo"],
"Ogros":["Bárbaro","Guerrero","Brujo","Druida"],
"Alianzas menudas":["Pícaro","Bardo","Explorador","Mago","Clérigo"],
"Cazatesoros":["Pícaro","Explorador","Guerrero","Mago","Bardo"],
"Clanes brutos":["Bárbaro","Guerrero","Brujo","Druida"],
"Fanáticos enloquecidos":["Clérigo","Bárbaro","Brujo","Monje","Paladín","Hechicero"],
"Federaciones comerciales":["Bardo","Mago","Pícaro","Clérigo","Guerrero"],
"Guardias a sueldo":["Guerrero","Paladín","Explorador","Clérigo","Monje"],
"Mercenarios":["Guerrero","Explorador","Pícaro","Bárbaro","Bardo"],
"Saqueadores de las afueras":["Bárbaro","Pícaro","Guerrero","Explorador","Brujo"],
"Sindicatos ocultos":["Pícaro","Brujo","Monje","Bardo","Hechicero"],
"Tribus furiosas":["Bárbaro","Druida","Explorador","Hechicero","Guerrero"],
"Uniones mercantes":["Bardo","Pícaro","Mago","Guerrero","Clérigo","Explorador"],
"Ducados de Vinci":["Bardo","Mago","Pícaro","Guerrero","Clérigo","Paladín"],
"Imperio humano":["Guerrero","Paladín","Clérigo","Mago","Explorador"],
"Reino de los Ángeles":["Paladín","Clérigo","Guerrero","Mago","Monje","Hechicero"],
"Reinos caballerescos":["Paladín","Guerrero","Clérigo","Bardo","Explorador"],
"No muertos fantasmales":["Brujo","Hechicero","Mago","Pícaro","Clérigo"],
"No muertos momificados":["Clérigo","Brujo","Mago","Guerrero","Hechicero"],
"No muertos osificados":["Guerrero","Bárbaro","Brujo","Paladín","Pícaro","Explorador"],
"No muertos vampíricos":["Pícaro","Brujo","Hechicero","Guerrero","Bardo","Mago"],
"Goblins":["Pícaro","Brujo","Hechicero","Explorador","Bardo","Guerrero"],
"Orcos":["Bárbaro","Guerrero","Explorador","Brujo","Druida"]};
const okCls=(r,c)=>!r||!ALLOW[r.n]||ALLOW[r.n].includes(c.n);

/* ---------- glifos de facción y de clase (rejilla de 48) ---------- */
const FG={
"Bestias":'<path d="M9 9C6 22 13 28 24 28s18-6 15-19"/><path d="M15 28l3 12 6 4 6-4 3-12"/><circle cx="19" cy="31" r="1.2"/><circle cx="29" cy="31" r="1.2"/>',
"Caos":'<path d="M24 5v38M5 24h38M11 11l26 26M37 11L11 37"/><circle cx="24" cy="24" r="4"/>',
"Demonios":'<path d="M9 10c1 9 5 12 10 12M39 10c-1 9-5 12-10 12"/><path d="M24 12c5 8 8 12 6 20-1 6-4 9-6 9s-5-3-6-9c-2-8 1-12 6-20z"/>',
"Elfos":'<path d="M32 6A18 18 0 1 0 32 42 14 14 0 1 1 32 6z"/><path d="M36 14l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z"/>',
"Enanos":'<path d="M13 9h22v11H13z"/><path d="M24 20v22M17 42h14M13 14H8m27 0h5"/>',
"Forasteros":'<path d="M24 4l4 16 16 4-16 4-4 16-4-16L4 24l16-4z"/>',
"Gremios":'<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="9"/><path d="M24 16v16"/>',
"Humanos":'<path d="M8 37V15l9 9 7-13 7 13 9-9v22z"/><path d="M8 42h32"/>',
"No muertos":'<path d="M12 26c0-11 24-11 24 0v6h-6v6H18v-6h-6z"/><circle cx="18" cy="26" r="3"/><circle cx="30" cy="26" r="3"/><path d="M24 30v3"/>',
"Pielesverdes":'<path d="M7 22c4-9 30-9 34 0"/><path d="M13 22l-2 16 9-12M35 22l2 16-9-12"/><path d="M19 22h10"/>'};
const CG={
"Bárbaro":'<path d="M14 42L30 12"/><path d="M28 10C38 6 43 17 37 25l-8-7z"/>',
"Bardo":'<circle cx="18" cy="31" r="9"/><circle cx="18" cy="31" r="2.6"/><path d="M25 24L38 11M36 7l5 5"/>',
"Brujo":'<path d="M4 25c8-13 32-13 40 0-8 13-32 13-40 0z"/><circle cx="24" cy="25" r="5"/><path d="M24 6v5M13 10l2 4M35 10l-2 4"/>',
"Clérigo":'<circle cx="24" cy="24" r="7"/><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/>',
"Druida":'<path d="M9 38C8 19 22 8 40 8c0 19-10 32-31 30z"/><path d="M9 38l20-20"/>',
"Explorador":'<path d="M14 7c20 6 20 28 0 34"/><path d="M14 7v34M6 24h34M34 18l6 6-6 6"/>',
"Guerrero":'<path d="M24 4l4 5v21h-8V9z"/><path d="M13 30h22M24 30v10"/><circle cx="24" cy="43" r="2"/>',
"Hechicero":'<path d="M24 4c6 9 14 13 12 25-2 11-22 12-24 0-2-9 8-12 12-25z"/><path d="M24 24c3 4 5 6 4 10-1 3-6 3-7 0-1-3 1-5 3-10z"/>',
"Mago":'<path d="M13 43L29 15"/><circle cx="32" cy="11" r="5"/><path d="M9 11l1.5 3.5L14 16l-3.5 1.5L9 21l-1.5-3.5L4 16l3.5-1.5z"/>',
"Monje":'<path d="M24 41c-8-3-12-11-8-20 3 3 6 7 8 12 2-5 5-9 8-12 4 9 0 17-8 20z"/><path d="M24 33V13M10 33c-3-5-3-10 0-13M38 33c3-5 3-10 0-13"/>',
"Paladín":'<path d="M24 5l16 6v13c0 9-7 16-16 20-9-4-16-11-16-20V11z"/><path d="M24 14v19M16 22h16"/>',
"Pícaro":'<path d="M40 8L19 29M14 27l7 7M18 30L9 39"/><path d="M40 8l-3 8-5-5z"/>'};
const gsvg=(inner,s)=>`<svg class="glyph" viewBox="0 0 48 48" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const fGl=(fi,s=20)=>gsvg(FG[D.facs[fi].n]||FG["Forasteros"],s);
const cGl=(c,s=28)=>gsvg(CG[c.n]||CG["Guerrero"],s);
const CHEV='<svg class="cv" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';

/* ---------- escudo heráldico por raza ---------- */
let CID=0;
function crestInner(r){
  const id="cr"+(CID++),h=hueF(r.fi)+(r.ri%3)*7,div=(r.ri*3+r.fi)%8;
  const A=`hsl(${h} 40% 16%)`,B=`hsl(${h} 48% 34%)`;
  const sh="M32 3L58 11V36C58 54 46 66 32 73 18 66 6 54 6 36V11Z";
  const F=[
    '<rect x="0" y="0" width="32" height="80"/>','<rect x="0" y="0" width="64" height="38"/>','<path d="M0 0H64V76Z"/>',
    '<path d="M6 54L32 32l26 22v10L32 42 6 64z"/>','<path d="M28 0h8v80h-8zM0 30h64v8H0z"/>',
    '<path d="M0 8L8 0l56 68-8 8zM56 0l8 8L8 76 0 68z"/>','<path d="M0 0h32v38H0zM32 38h32v40H32z"/>','<path d="M14 0h8v80h-8zM42 0h8v80h-8z"/>'][div];
  const glyph=FG[r.fac.n]||FG["Forasteros"];
  return `<defs><clipPath id="${id}"><path d="${sh}"/></clipPath></defs><g clip-path="url(#${id})"><rect width="64" height="80" fill="${A}"/><g fill="${B}">${F}</g><circle cx="32" cy="37" r="15" fill="${A}" opacity=".88"/></g><g transform="translate(20 25) scale(.5)" fill="none" stroke="#f3e2b0" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round">${glyph}</g><path d="${sh}" fill="none" stroke="#d9b86c" stroke-width="2.4"/><path d="M32 8L53 14V36C53 50 44 60 32 66 20 60 11 50 11 36V14Z" fill="none" stroke="#d9b86c" stroke-opacity=".35" stroke-width="1"/>`;
}
/* Emblema genérico de la raza (src/img/razas/<slug>.webp, archivo aparte). EMB = {nombre de la raza: slug} (lo rellena build.py en el marcador de abajo). Si una raza aún no lo tiene, se usa el escudo dibujado. */
const EMB=%%HC_EMB%%;
const emb=r=>(r&&EMB[r.n])?"img/razas/"+EMB[r.n]+".webp":"";
const crest=(r,w=48)=>emb(r)?`<img class="glyph emb" src="${emb(r)}" width="${Math.round(w*1.2)}" height="${Math.round(w*1.2)}" alt="" aria-hidden="true">`:`<svg class="glyph" viewBox="0 0 64 76" width="${w}" height="${Math.round(w*76/64)}" aria-hidden="true">${crestInner(r)}</svg>`;
const fig=(h)=>`<svg viewBox="0 0 64 72" aria-hidden="true"><path d="M32 6c9 0 15 7 15 17 0 7-2 11-4 15l11 26H10l11-26c-2-4-4-8-4-15C17 13 23 6 32 6z" fill="hsl(${h} 28% 24%)"/><ellipse cx="32" cy="26" rx="8" ry="10" fill="#05060b"/><path d="M23 44c5 4 13 4 18 0" fill="none" stroke="#d9b86c" stroke-width="1.6" stroke-linecap="round"/></svg>`;

/* ---------- cálculo de la ficha inicial ---------- */
function mods(c){
  const m={cal:0,fue:0,des:0,vol:0,pod:0,hab:0,lanz:0};
  c.bonus.forEach(b=>{let x;
    if((x=b.match(/^(Cal|Fue|Des|Vol|Pod) \+(\d)$/)))m[x[1].toLowerCase()]+=+x[2];
    else if((x=b.match(/(\d) habilidad(?:es)?/))){m.hab=+x[1];const p=b.match(/Pod \+(\d)/);if(p)m.pod+=+p[1]}
    else if(/^Lanzador\(\d\)/.test(b))m.lanz=1;
  });
  return m;
}
const modChips=c=>{const m=mods(c),o=[];if(m.cal)o.push("Cal +"+m.cal);if(m.fue)o.push("Fue +"+m.fue);if(m.des)o.push("Des +"+m.des);if(m.vol)o.push("Vol +"+m.vol);if(m.pod)o.push("Pod +"+m.pod);if(m.lanz)o.push("Lanzador");return o};
function statsFor(t,c){
  const m=c?mods(c):{cal:0,fue:0,des:0,vol:0,pod:0,hab:0,lanz:0};
  const v=(b,d)=>Math.max(2,b-d);
  return{cal:v(t.cal,m.cal),def:t.def,fue:v(6,m.fue),des:v(6,m.des),vol:v(6,m.vol),hp:t.tough,pod:m.pod,lanz:m.lanz,hab:m.hab,
    dc:t.cal-v(t.cal,m.cal),df:6-v(6,m.fue),dd:6-v(6,m.des),dv:6-v(6,m.vol)};
}
const hpTxt=r=>{const a=r.types.map(t=>t.tough);const lo=Math.min(...a),hi=Math.max(...a);return "Resistente "+(lo===hi?lo:lo+"–"+hi)};
const profTxt=r=>r.types.length+" perfil"+(r.types.length>1?"es":"");

function statGrid(t,c,cls=""){
  const s=statsFor(t,c);
  const T=[["Calidad",s.cal+"+",s.dc],["Defensa",s.def+"+",0],["Fuerza",s.fue+"+",s.df],["Destreza",s.des+"+",s.dd],["Voluntad",s.vol+"+",s.dv]];
  const one=(l,v,d,x="")=>`<div class="st ${d?"up":""} ${x}"><small>${l}</small><b>${v}</b>${d?`<i>▲${d}</i>`:""}</div>`;
  return `<div class="sg ${cls}">${T.map(([l,v,d])=>one(l,v,d,c?"":(l==="Fuerza"||l==="Destreza"||l==="Voluntad"?"dim":""))).join("")}${one("Heridas",s.hp,0)}${one("Poder",s.pod,s.pod,c||s.pod?"":"dim")}</div>`;
}
const featBlock=c=>c.feat?`<div class="feat"><span class="tg">Dote de clase · una vez por partida</span><b>${esc(c.feat.n)}<em>${esc(c.feat.en)}</em></b><p>${esc(c.feat.t)}</p></div>`:"";
const ATC={"Fuerza":"f","Destreza":"d","Voluntad":"v"};
const CHECK='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

/* ---------- explicaciones de reglas (resumen propio; descripciones consultadas en el creador de héroes) ---------- */
const RG={
/* armas */
"AP":["AP","La víctima resta {x} a sus tiradas de Defensa al bloquear los impactos de esta arma."],
"Imparable":["Unstoppable","Ignora la Regeneración y todos los modificadores negativos, salvo los de las reglas del propio portador."],
"Explosión":["Blast","Ignora la cobertura. Cada impacto se multiplica por {x}, sin pasar del número de miniaturas de la unidad objetivo."],
"Letal":["Deadly","Cada herida se asigna a una sola miniatura y se multiplica por {x}. Se resuelve primero y, si la miniatura muere, el exceso no pasa a otras."],
"Perdición":["Bane","Ignora la Regeneración y obliga al objetivo a repetir sus 6 naturales de Defensa."],
"Desgarrador":["Rending","Ignora la Regeneración. Cada 6 natural al impactar da AP(+4) a ese impacto."],
"Asalto":["Assault","El arma cuenta a la vez como arma a distancia y como arma cuerpo a cuerpo."],
"Contraataque":["Counter","Golpea primero cuando la cargan, salvo que la unidad esté fatigada."],
"Afianzado":["Brace","Los enemigos que cargan restan {x} a sus tiradas de Impacto, salvo que la unidad esté fatigada."],
"Aplastar":["Smash","Si ataca desde más de la mitad de su alcance, el objetivo repite los 6 naturales de Defensa."],
"Destructivo":["Destructive","Contra unidades que conservan más de la mitad de su tamaño (o de su Resistente), los impactos ganan AP(+1)."],
"Estocada":["Thrust","Al cargar, +1 a impactar y AP(+1) en cuerpo a cuerpo."],
"Indirecto":["Indirect","Al disparar con una acción de Mantener posición, puede apuntar a enemigos sin línea de visión e ignora la cobertura que bloquea la vista."],
"Parada":["Parry","Al recibir impactos en cuerpo a cuerpo, tira {x} dados por miniatura (hasta tantos como impactos). Cada 6+ anula un impacto."],
"Triturar":["Shred","Por cada 1 natural en las tiradas de bloqueo del objetivo, el arma causa 1 herida extra."],
"Preciso":["Precise","+1 a impactar."],
/* ficha */
"Resistente":["Tough","Heridas que aguanta antes de quedar inconsciente. Es el valor de Heridas de la ficha."],
"Lanzador":["Caster","Puede lanzar hechizos gastando Poder. Los hechizos disponibles dependen de la facción de la raza; el número marca su nivel de lanzador."],
/* reglas de raza */
"Afortunado":["Lucky","Al disparar o cargar a enemigos a más de 9″ (disparo) o 6″ (carga), cada 6 natural al impactar causa 1 impacto extra."],
"Alta cuna":["Highborn","+4″ de alcance al disparar y +2″ al cargar."],
"Andarín":["Strider","Ignora los efectos del terreno difícil."],
"Arrasar":["Ravage","Una vez por ronda, en su turno de golpear en cuerpo a cuerpo y antes de atacar, tira {x} dados (si no está fatigada). Por cada 6+ el objetivo sufre 1 herida."],
"Asalto de la unión":["Union Assault","Tras desplegarse, puede recolocarse hasta 9″ de su posición, a más de 9″ de enemigos que no tengan Vanguardia."],
"Asesino cuerpo a cuerpo":["Melee Slayer","Al cargar, sus armas ganan AP(+2) si la mayoría de la unidad objetivo tiene Resistente(3) o más."],
"Bendición angélica":["Angelic Blessing","Cada herida que recibe se tira aparte: si es de un hechizo se ignora con 2+; si no, y la disparan o cargan desde lejos (más de 9″ o 6″), se ignora con 6+."],
"Bestial":["Bestial","Al atacar, el objetivo repite los 6 naturales de Defensa."],
"Bucanero":["Buccaneer","+1 a impactar al disparar a enemigos a más de 9″."],
"Celador":["Warden","Los impactos que recibe cuentan como AP(-1), con un mínimo de AP(0)."],
"Coraje bruto":["Brute Courage","Si empieza la ronda acobardada, tira un dado: con 4+ deja de estarlo."],
"Corredor":["Runner","Se mueve +1″ al Avanzar y +2″ al Correr o Cargar."],
"Curtido en batalla":["Battle-Hardened","+1 a las tiradas de moral cuando la disparan o cargan desde lejos (más de 9″ o 6″)."],
"Destructor":["Destroyer","Al disparar o cargar desde lejos (más de 9″ o 6″), cada 1 natural en los bloqueos del objetivo causa 1 herida extra."],
"Emboscada":["Ambush","Puede apartarse antes del despliegue y entrar en cualquier ronda después de la primera, a más de 9″ de los enemigos. No toma objetivos esa ronda."],
"Enloquecido":["Crazed","Por cada 6 natural al impactar, +1 ataque con esa arma (los ataques nuevos no se encadenan)."],
"Equipo exótico":["Exotic Gear","Al activarse, elige un efecto hasta el final de la activación: AP(+1) en sus armas o +1 a impactar, al disparar o cargar desde lejos."],
"Escabullirse":["Scurry","Se mueve +1″ al Avanzar y +2″ al Correr o Cargar."],
"Espíritu empíreo":["Empyrean Spirit","Los enemigos que le disparan o cargan desde lejos (más de 9″ o 6″) tienen -1 a impactar."],
"Esquiva":["Dodge","Mientras no esté fatigada, los enemigos tienen -1 a impactar contra ella en cuerpo a cuerpo."],
"Etéreo":["Ethereal","Una vez por activación, antes de atacar, puede recolocarse hasta 6″. Si lo hace, se mueve -6″ al Avanzar y al Correr o Cargar hasta el final de esa activación."],
"Experto versátil":["Versatile Expert","Al activarse, elige un efecto hasta el final de la activación: AP(+1) en sus armas o +1 a impactar."],
"Explorador":["Scout","Puede apartarse y desplegarse después de todas las demás unidades, a menos de 9″ de su zona y a más de 9″ de enemigos que no sean Exploradores."],
"Feroz":["Ferocious","Al disparar o cargar desde lejos (más de 9″ o 6″), cada 6 natural al impactar causa 1 impacto extra."],
"Furioso":["Furious","Al cargar, cada 6 natural al impactar causa 1 impacto extra."],
"Guardián":["Guardian","Los impactos que recibe cuentan como AP(-1), con un mínimo de AP(0)."],
"Guerrero real":["Royal Warrior","Por cada 6 natural al impactar, +1 ataque con esa arma (los ataques nuevos no se encadenan)."],
"Hostigador":["Harassing","Una vez por ronda puede moverse hasta 3″ después de disparar o de estar en cuerpo a cuerpo."],
"Impávido":["Fearless","Cuando falla un chequeo de moral, tira un dado: con 4+ cuenta como superado."],
"Juramentado del draco":["Drakesworn","Tras desplegarse, puede recolocarse hasta 9″ de su posición, a más de 9″ de enemigos que no tengan Vanguardia."],
"Juramento del Valle":["Vale Oath","Si empieza la ronda acobardada, tira un dado: con 4+ deja de estarlo."],
"Legión real":["Royal Legion","+4″ de alcance al disparar y +2″ al cargar."],
"Lento":["Slow","Se mueve -2″ al Avanzar y -4″ al Correr o Cargar."],
"Ligado a la Guerra":["Warbound","Al disparar o cargar desde lejos (más de 9″ o 6″), cada 1 natural en los bloqueos del objetivo causa 1 herida extra."],
"Ligado a la Lujuria":["Lustbound","Se mueve +1″ al Avanzar y +2″ al Correr o Cargar."],
"Ligado a la Plaga":["Plaguebound","Cada herida que recibe se ignora con 6+."],
"Ligado al Cambio":["Changebound","Los enemigos que le disparan o cargan desde lejos (más de 9″ o 6″) tienen -1 a impactar."],
"Ligado al Caos":["Havocbound","Al disparar o cargar desde lejos (más de 9″ o 6″), sus armas ganan AP(+1)."],
"Luchador impredecible":["Unpredictable Fighter","En cuerpo a cuerpo tira un dado: con 1-3, AP(+1) en sus armas; con 4-6, +1 a impactar."],
"Mantener la línea":["Hold the Line","+1 a las tiradas de moral cuando la disparan o cargan desde lejos (más de 9″ o 6″)."],
"Miedo":["Fear","En cuerpo a cuerpo, los enemigos cuentan con +{x} a sus heridas al decidir quién gana el combate."],
"Nacido de las sombras":["Shadowborn","Los enemigos que le disparan tienen -4″ de alcance y los que le cargan -2″ (mínimo 6″)."],
"Niebla lúgubre":["Gloom-Mist","Los enemigos que le disparan o cargan desde lejos (más de 9″ o 6″) tienen -1 a impactar."],
"No muerto maldito":["Cursed Undead","Cada herida que recibe se ignora con 6+."],
"Osificado":["Ossified","Los impactos que recibe cuentan como AP(-1), con un mínimo de AP(0)."],
"Paso de ola":["Wave-Step","Al activarse, puede moverse hasta D3″ adicionales."],
"Primigenio":["Primal","Por cada 6 natural al impactar, +1 ataque con esa arma (los ataques nuevos no se encadenan)."],
"Regeneración":["Regeneration","Cada herida que recibe se ignora con 5+."],
"Resistencia a hechizos":["Spell Resistance","Las heridas de hechizos se ignoran con 2+; las demás, con 6+."],
"Robusto":["Sturdy","+1 a las tiradas de Defensa cuando la disparan o cargan desde lejos (más de 9″ o 6″)."],
"Rápido":["Fast","Se mueve +2″ al Avanzar y +4″ al Correr o Cargar."],
"Salvaje":["Savage","Al disparar o cargar desde lejos (más de 9″ o 6″), cada 6 natural al impactar causa 1 impacto extra."],
"Saqueador":["Raider","Al atacar, el objetivo repite los 6 naturales de Defensa."],
"Tecnología Vinci":["Vinci Tech","Al activarse, elige un efecto hasta el final de la activación: AP(+1) en sus armas o +1 a impactar, al disparar o cargar desde lejos."],
"Tenaz":["Tenacious","+1 a las tiradas de Defensa cuando la disparan o cargan desde lejos (más de 9″ o 6″)."],
"Travieso":["Mischievous","Al atacar, el objetivo repite los 6 naturales de Defensa."],
"Velo salvaje":["Wild Veil","Los enemigos que le disparan tienen -4″ de alcance y los que le cargan -2″ (mínimo 6″)."],
"Volador":["Flying","Puede atravesar unidades y terreno, e ignora el terreno difícil y el peligroso."]
};
const rk=n=>n.replace(/\(.*\)/,"").trim();
const rv=n=>{const m=n.match(/\((\d+)\)/);return m?m[1]:""};
function rtext(label){const g=RG[rk(label)];return g?{n:label,en:g[0],t:g[1].replace(/\{x\}/g,rv(label)||"X")}:{n:label,en:"",t:"Todavía sin descripción."}}
const popOn=()=>true;
const exRow=x=>{const g=rtext(x);return `<div><dt>${esc(x)}${g.en?`<em>${esc(g.en)}</em>`:""}</dt><dd>${esc(g.t)}</dd></div>`};

/* arma: "Gran pulso mágico (A8, Imparable)" → nombre, RNG, ATK, AP, SPE */
function splitTop(s){const o=[];let d=0,c="";for(const ch of s){if(ch==="(")d++;if(ch===")")d--;if(ch===","&&d===0){o.push(c.trim());c=""}else c+=ch}o.push(c.trim());return o.filter(Boolean)}
function parseW(str){
  return splitTop(str).map(p=>{
    const m=p.match(/^(?:(\d+)x\s+)?(.*?)\s*\((.*)\)$/);
    if(!m)return{n:p,cnt:1,rng:"—",atk:"—",ap:"—",spe:[]};
    let rng="—",atk="—",ap="—";const spe=[];
    splitTop(m[3]).forEach(s=>{
      if(/^\d+"$/.test(s))rng=s;
      else if(/^A\d+$/.test(s))atk=s.slice(1);
      else if(/^PA\(\d+\)$/.test(s))ap=s.match(/\d+/)[0];
      else spe.push(s);
    });
    return{n:m[2],cnt:+(m[1]||1),rng,atk,ap,spe};
  });
}
const tipChip=l=>`<button type="button" class="chip hc-tt" data-wr="${esc(l)}" aria-expanded="false">${esc(l)}</button>`;
function weaponBlock(t,compact){
  if(compact)return `<div class="hc-chips"><span class="chip">${esc(t.w)}</span></div>`;
  const ws=parseW(t.w);
  const rows=ws.map(w=>`<tr><th scope="row">${w.cnt>1?w.cnt+"× ":""}${esc(w.n)}</th><td>${w.rng}</td><td>${w.atk}</td><td>${w.ap==="—"?"—":`<button type="button" class="hc-tt hc-n" data-wr="AP(${w.ap})" aria-expanded="false">${w.ap}</button>`}</td><td class="spe">${w.spe.length?w.spe.map(tipChip).join(""):"—"}</td></tr>`).join("");
  const tbl=`<div class="wtw"><table class="hc-wt"><thead><tr><th></th><th>RNG</th><th>ATK</th><th>AP</th><th>SPE</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  if(popOn())return tbl;
  const lab=[];ws.forEach(w=>{if(w.ap!=="—"&&!lab.includes("AP("+w.ap+")"))lab.push("AP("+w.ap+")");w.spe.forEach(s=>{if(!lab.includes(s))lab.push(s)})});
  return tbl+(lab.length?`<dl class="ex">${lab.map(exRow).join("")}</dl>`:"");
}
const ruleItems=(t,c)=>{const a=["Resistente("+t.tough+")"].concat(t.rules);if(c&&mods(c).lanz)a.push("Lanzador(1)");return a};
function rulesBlock(t,c,compact){
  const items=ruleItems(t,c);
  if(compact)return `<div class="hc-chips">${items.map(x=>`<span class="chip ${/^Lanzador/.test(x)?"sp":""}">${esc(x)}</span>`).join("")}</div>`;
  if(popOn())return `<div class="hc-chips">${items.map(x=>`<button type="button" class="chip rl ${/^Lanzador/.test(x)?"sp":""}" data-rl="${esc(x)}" aria-expanded="false">${esc(x)}</button>`).join("")}</div>`;
  return `<dl class="ex">${items.map(exRow).join("")}</dl>`;
}
const typeSeg=(r)=>r.types.length>1?`<div class="wseg" role="group" aria-label="Perfil de la raza">${r.types.map((t,i)=>`<button type="button" data-act="type" data-i="${i}" aria-pressed="${i===ST.type}">${esc(t.n)}</button>`).join("")}</div>`:`<span class="chip hc-go">${esc(r.types[0].n)}</span>`;
/* Habilidades iniciales: las de la clase y las comunes (petición de Nacho, 2026-11-20). Se ven solo con el nombre;
   al pasar el ratón sale una ventanita con lo que hace. */
const COMUN_INI=[{"n": "Descanso de batalla", "en": "Battle Rest", "a": "Fuerza (Fue)", "t": "El Héroe recupera D3+1 de Poder."}, {"n": "Protector", "en": "Protector", "a": "Fuerza (Fue)", "t": "El Héroe obtiene +1 en las tiradas de Def hasta el final de la ronda."}, {"n": "Toque curativo", "en": "Curing Touch", "a": "Destreza (Des)", "t": "El Héroe pierde un estado. En su lugar, el efecto puede aplicarse a otro Héroe a 3\" o menos."}, {"n": "Concentración", "en": "Concentrate", "a": "Destreza (Des)", "t": "El Héroe sufre 1 herida y obtiene +2 en su próxima tirada de atributo."}, {"n": "Toque sanador", "en": "Healing Touch", "a": "Voluntad (Vol)", "t": "El Héroe recupera D3 heridas. En su lugar, el efecto puede aplicarse a otro Héroe a 3\" o menos."}, {"n": "Inspeccionar", "en": "Inspect", "a": "Voluntad (Vol)", "t": "El Héroe puede revelar una ficha de Búsqueda en línea de visión y a 9\" o menos, y puede modificar en +1/-1 la tirada para ver qué contiene."}];
const allSkills=c=>c.skills.concat(COMUN_INI);
function skillsPick(c,pv,t){
  const all=allSkills(c),n=mods(c).hab,on=pv?[]:ST.picks;
  const chip=(s,i)=>{const sel=on.includes(i),tip=`<span class="hc-tip" role="tooltip"><b>${esc(s.n)}</b><em>${esc(s.en)} · ${esc(s.a)}</em>${esc(s.t)}</span>`;
    return pv?`<span class="skc">${esc(s.n)}${tip}</span>`:`<button type="button" class="skc hc-pick${sel?" on":""}" data-act="pick" data-i="${i}" aria-pressed="${sel}"><span class="hc-ck">${sel?CHECK:""}</span>${esc(s.n)}${tip}</button>`};
  const cls=c.skills.map((s,i)=>chip(s,i)).join(""),com=COMUN_INI.map((s,k)=>chip(s,c.skills.length+k)).join("");
  return `<div><div class="sec-h"><span class="hc-lab">Habilidades iniciales</span><small class="${!pv&&on.length===n?"okc":""}">${pv?`Elegirás ${n} de ${all.length}`:`Elegidas ${on.length} de ${n}`}</small></div>
  ${t?`<p class="hc-sub">Arma base</p>${weaponBlock(t,false)}<p class="hc-sub">Reglas especiales</p>${rulesBlock(t,c,false)}`:""}
  <p class="hc-sub">De la clase</p><div class="skg">${cls}</div><p class="hc-sub">Comunes a todas las clases</p><div class="skg">${com}</div></div>`;
}

/* ---------- estado ---------- */
const ST={open:false,step:1,race:null,type:0,cls:null,name:"",q:"",openF:new Set([0]),hov:null,anim:true,created:[],picks:[]};
const R=()=>ST.race!=null?RACES[ST.race]:null;
const T=()=>{const r=R();return r?r.types[Math.min(ST.type,r.types.length-1)]:null};
const C=()=>ST.cls!=null?D.classes[ST.cls]:null;
const needPicks=()=>{const c=C();return c?mods(c).hab:0};

/* ---------- ventana: cabecera y pie ---------- */
function head(){
  const t1=ST.step===1?"Elige tu linaje":"Elige tu senda";
  return `<div class="wh"><div class="wtt"><small>Nuevo héroe</small><b>${t1}</b></div>
  <div class="hc-steps"><button class="sp ${ST.step>1?"done":""}" type="button" data-act="step" data-s="1" ${ST.step===1?'aria-current="step"':""}><i>${ST.step>1?"✓":"1"}</i>Raza</button><span class="sl"></span><button class="sp" type="button" data-act="step" data-s="2" ${ST.step===2?'aria-current="step"':""} ${ST.race==null?"disabled":""}><i>2</i>Clase</button></div>
  <div class="hr"><button class="xb" type="button" data-act="close" aria-label="Cerrar"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></div>`;
}
function foot(){
  const r=R(),c=C(),t=T();
  const parts=[];
  if(r)parts.push(`<span class="fs">${crest(r,22)}<b>${esc(r.n)}</b><small>${esc(t.n)}</small></span>`);
  if(c&&ST.step===2)parts.push(`<span class="fs">${cGl(c,22)}<b>${esc(c.n)}</b></span>`);
  const need=needPicks(),ok=!!c&&ST.picks.length===need;
  if(c&&ST.step===2)parts.push(`<span class="chip ${ok?"hc-go":""}">Habilidades ${ST.picks.length}/${need}</span>`);
  const sum=parts.length?parts.join('<i class="sep">›</i>'):'<span class="fs mu"><b>Aún no has elegido nada</b></span>';
  const b=ST.step===1?`<button class="btn pri" type="button" data-act="next" ${r?"":"disabled"}>Siguiente →</button>`:`<button class="btn" type="button" data-act="back">← Atrás</button><button class="btn pri" type="button" data-act="create" ${ok?"":"disabled"} ${c&&!ok?`title="Elige ${need} habilidades"`:""}>Crear héroe</button>`;
  return `<div class="wf"><div class="sum">${sum}</div><div class="btns">${b}</div></div>`;
}

/* ================= lista de razas ================= */
function raceList(){
  const q=ST.q.trim().toLowerCase();
  let out="";
  D.facs.forEach((f,fi)=>{
    const rs=f.races.filter(r=>!q||(r.n+" "+r.en+" "+f.n).toLowerCase().includes(q));
    if(!rs.length)return;
    const open=q?true:ST.openF.has(fi);
    out+=`<button class="fh" type="button" data-act="openf" data-f="${fi}" aria-expanded="${open}">${CHEV}${fGl(fi,20)}${esc(f.n)}<em>${rs.length}</em></button>`;
    if(open)out+=rs.map(r=>{
      const sel=ST.race===r.id,t=sel?T():null;
      return `<div class="rr ${sel?"hc-sel":""}"><button type="button" data-act="race" data-id="${r.id}">${crest(r,30)}<span><b>${esc(r.n)}</b><small>${hpTxt(r)} · ${profTxt(r)}</small></span></button>${sel?`<div class="hc-rd"><div class="prof">${typeSeg(r)}</div><div class="prof"><div class="pv"><small>Calidad</small><b>${t.cal}+</b></div><div class="pv"><small>Defensa</small><b>${t.def}+</b></div><div class="pv"><small>Heridas</small><b>${t.tough}</b></div></div><div><div class="hc-lab" style="margin-bottom:4px">Arma base</div>${weaponBlock(t)}</div><div><div class="hc-lab" style="margin-bottom:8px">Reglas especiales</div>${rulesBlock(t,null)}</div></div>`:""}</div>`;
    }).join("");
  });
  return out||`<p class="emp">Ninguna raza coincide con «${esc(ST.q)}».</p>`;
}

/* ================= hoja en vivo ================= */
function effective(){
  const h=ST.hov;
  let r=R(),t=T(),c=C(),pv=false;
  if(h&&h.k==="r"&&h.i!==ST.race){r=RACES[h.i];t=r.types[0];pv=true}
  if(h&&h.k==="c"&&h.i!==ST.cls){c=D.classes[h.i];pv=true}
  return{r,t,c,pv};
}
function sheetParts(){
  const {r,t,c,pv}=effective(),full=ST.step===2;
  /* Con ilustración (raza + clase elegidas): el busto, que al pulsar abre la imagen completa. Sin ella: la silueta de siempre. No se sube ninguna foto. */
  const A=full?art(r,c):null,E=emb(r),cr=r&&!E?`<span class="cr2">${crest(r,30)}</span>`:"";
  const por=A?`<button type="button" class="hc-por has art" data-act="zoom" aria-label="Ver la imagen completa del héroe"><span class="pi"><img src="${A.b}" alt="${esc(r.n+" · "+c.n)}"></span><span class="cam">Ver completa</span>${cr}</button>`
    :`<div class="hc-por${E?" emb":""}"><span class="pi">${E?`<img class="emb" src="${E}" alt="${esc(r.n)}">`:fig(r?hueF(r.fi):225)}</span>${cr}</div>`;
  const sub=r?`${esc(r.n)} · ${esc(t.n)}${c?` · ${esc(c.n)}`:""}${pv?'<span class="pvw">Vista previa</span>':""}`:"Elige una raza para empezar";
  let body="";
  if(!r)body=`<p class="emp">La ficha se irá rellenando con lo que elijas.<br>Pasa el ratón por la lista para ver cada opción.</p>`;
  else body=`<div><div class="sec-h"><span class="hc-lab">Características</span><small>${c?"Con los bonos de "+esc(c.n):"Solo la raza"}</small></div>${statGrid(t,c)}</div>
    <div><div class="sec-h"><span class="hc-lab">Arma base</span></div>${weaponBlock(t,false)}</div>
    <div><div class="sec-h"><span class="hc-lab">Reglas especiales</span></div>${rulesBlock(t,c,false)}${full&&c&&c.feat?`<div style="margin-top:12px">${featBlock(c)}</div>`:""}</div>
    ${c&&full?skillsPick(c,pv,t):`<div><div class="sec-h"><span class="hc-lab">Habilidades iniciales</span></div><p class="emp" style="padding:14px">Las elegirás junto con la clase.</p></div>`}
    <div><div class="sec-h"><span class="hc-lab">Equipo</span></div><div class="hc-chips"><span class="chip hc-go">Oro inicial: 0</span></div></div>`;
  return{por,sub,body};
}
function C1(){return `<div class="sr"><input id="srch" type="search" placeholder="Buscar raza o facción…" value="${esc(ST.q)}" aria-label="Buscar raza" autocomplete="off"></div><div class="lst" data-keep="lst" id="rlist">${raceList()}</div>`}
function C2(){return `<div class="ctl" data-keep="ctl">${D.classes.map((c,i)=>okCls(R(),c)?`<button class="ct" type="button" data-act="cls" data-i="${i}" aria-pressed="${ST.cls===i}"><span class="hc-gl">${cGl(c,26)}</span><b>${esc(c.n)}</b><span class="cm">${modChips(c).slice(0,3).map(x=>`<i>${x}</i>`).join("")}</span></button>`:"").join("")}</div>`}
function bodyC(){
  const p=sheetParts();
  return `<div class="cw"><div class="cl">${ST.step===1?C1():C2()}</div><div class="cr" data-keep="cr"><div class="hc-sheet" aria-label="Ficha del héroe"><div class="sh1"><div id="shpor">${p.por}</div><div><input id="hname" type="text" value="${esc(ST.name)}" placeholder="Nombre" maxlength="24" aria-label="Nombre del héroe"><div class="hc-sub" id="shsub">${p.sub}</div></div><div class="hc-seal"><div><small>NIVEL</small><b>1</b></div></div></div><div id="shbody" style="display:flex;flex-direction:column;gap:18px">${p.body}</div></div></div></div>`;
}
function paintSheet(){
  const p=sheetParts();
  const a=$("#shpor"),b=$("#shsub"),c=$("#shbody");
  if(a)a.innerHTML=p.por;if(b)b.innerHTML=p.sub;if(c)c.innerHTML=p.body;
  if(POP&&!POP.el.isConnected)hidePop();
}

/* ---------- ventanita de explicación ---------- */
let POP=null;
function showPop(el,label,pinned){
  const w=$("#win");if(!w)return;
  let p=$("#pop");
  if(!p){p=document.createElement("div");p.id="pop";p.setAttribute("role","tooltip");w.appendChild(p)}
  const g=rtext(label);
  p.innerHTML=`<b>${esc(g.n)}</b>${g.en?`<em>${esc(g.en)}</em>`:""}<p>${esc(g.t)}</p>`;
  p.hidden=false;
  const wr=w.getBoundingClientRect(),er=el.getBoundingClientRect(),pw=Math.min(300,wr.width-24);
  p.style.width=pw+"px";
  p.style.left=Math.max(12,Math.min(er.left-wr.left,wr.width-pw-12))+"px";
  let top=er.bottom-wr.top+8;
  p.style.top=top+"px";
  const h=p.offsetHeight;if(top+h>wr.height-8)p.style.top=Math.max(8,er.top-wr.top-h-8)+"px";
  $$("[aria-expanded=true].rl,[aria-expanded=true].hc-tt").forEach(x=>x.setAttribute("aria-expanded","false"));
  el.setAttribute("aria-expanded","true");
  POP={el,label,pinned:!!pinned};
}
function hidePop(){
  const p=$("#pop");if(p)p.hidden=true;
  $$("[aria-expanded=true].rl,[aria-expanded=true].hc-tt").forEach(x=>x.setAttribute("aria-expanded","false"));
  POP=null;
}
function togglePop(el){
  if(POP&&POP.el===el&&POP.pinned){hidePop();return}
  showPop(el,el.dataset.rl||el.dataset.wr,true);
}

/* ---------- imagen completa (al pulsar el busto) ---------- */
function zoomOff(){const z=$("#hzoom");if(z)z.remove()}
function zoomOn(){
  const A=art(R(),C()),w=$("#win");if(!A||!w)return;
  zoomOff();
  const z=document.createElement("div");z.id="hzoom";z.className="hc-zoom";z.dataset.act="unzoom";z.setAttribute("role","dialog");z.setAttribute("aria-label","Imagen completa del héroe");
  z.innerHTML=`<img src="${A.f}" alt="${esc(R().n+" · "+C().n)}"><button type="button" class="xb" data-act="unzoom" aria-label="Cerrar la imagen"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`;
  w.appendChild(z);
  const x=$(".xb",z);if(x)x.focus({preventScroll:true});
}

/* ================= ventana ================= */
function render(){
  const w=$("#win");if(!w)return;
  const keep={};$$("[data-keep]",w).forEach(e=>keep[e.dataset.keep]=[e.scrollLeft,e.scrollTop]);
  const wb0=$("#wb");const wbs=wb0?wb0.scrollTop:0;
  POP=null;
  w.innerHTML=head()+`<div class="wb c${ST.anim?" anim":""}" id="wb">${bodyC()}</div>`+foot();
  $$("[data-keep]",w).forEach(e=>{const k=keep[e.dataset.keep];if(k){e.scrollLeft=k[0];e.scrollTop=k[1]}});
  if(wb0)$("#wb").scrollTop=wbs;
  ST.anim=false;
}
function openWin(){
  ST.open=true;ST.anim=true;
  ROOT.innerHTML=`<div class="veil" id="veil"></div><div class="win" id="win" role="dialog" aria-modal="true" aria-label="Crear héroe"></div>`;
  ROOT.hidden=false;document.body.style.overflow="hidden";
  render();
  const x=$(".xb");if(x)x.focus({preventScroll:true});
}
function closeWin(){ST.open=false;POP=null;ROOT.hidden=true;ROOT.innerHTML="";document.body.style.overflow=""}
/* al elegir clase, la vista baja hasta la ficha con toda la información */
function goSheet(){
  const wb=$("#wb"),sh=$(".hc-sheet"),cw=$(".cw");if(!wb||!sh||!cw)return;
  const stacked=getComputedStyle(cw).gridTemplateColumns.trim().split(/\s+/).length===1;
  if(stacked)wb.scrollBy({top:sh.getBoundingClientRect().top-wb.getBoundingClientRect().top-8,behavior:"smooth"});
  else{const cr=$(".cr");if(cr)cr.scrollTo({top:0,behavior:"smooth"})}
}


/* ---------- crear el héroe de la hoja de campaña ---------- */
function buildHero(){
  const r=R(),t=T(),c=C(),s=statsFor(t,c),A=art(r,c);
  const sk=[];
  ruleItems(t,c).filter(x=>!/^Resistente/.test(x)).forEach(x=>{const g=rtext(x);sk.push({g:"regla",n:x,k:"",d:g.t})});
  if(c.feat)sk.push({g:"regla",n:c.feat.n,k:"Dote de clase",d:c.feat.t});
  ST.picks.slice().sort((a,b)=>a-b).forEach(i=>{const k=allSkills(c)[i];sk.push({g:"hab",n:k.n,k:k.a.split(" ")[0],d:k.t})});
  parseW(t.w).forEach(w=>{
    const p=[];if(w.rng!=="—")p.push(w.rng);if(w.atk!=="—")p.push("A"+w.atk);if(w.ap!=="—")p.push("AP("+w.ap+")");w.spe.forEach(x=>p.push(x));
    const ex=[];if(w.ap!=="—")ex.push(rtext("AP("+w.ap+")"));w.spe.forEach(x=>ex.push(rtext(x)));
    sk.push({g:"equipo",n:(w.cnt>1?w.cnt+"× ":"")+w.n,k:p.join(", "),d:ex.map(g=>g.n+": "+g.t).join(" ")});
  });
  return{name:(ST.name||"").trim()||rnd(NAMES),raza:r.n+(r.types.length>1?" · "+t.n:""),prof:c.n,nivel:1,pts:0,
    cal:s.cal,def:s.def,fue:s.fue,des:s.des,vol:s.vol,hp:s.hp,hpMax:s.hp,pw:s.pod,pwMax:s.pod,pot:0,gold:0,st:[],img:A?A.b:"",art:A?A.k:"",sk,c:HS.length};
}

/* ---------- acciones ---------- */
const ACT={
  close:closeWin,
  step(b){const s=+b.dataset.s;if(s===1||ST.race!=null){ST.anim=true;ST.step=s;render()}},
  next(){if(ST.race!=null){ST.anim=true;ST.step=2;render()}},
  back(){ST.anim=true;ST.step=1;render()},
  race(b){const id=+b.dataset.id;if(ST.race!==id){ST.race=id;ST.type=0;if(ST.cls!=null&&!okCls(RACES[id],D.classes[ST.cls])){ST.cls=null;ST.picks=[]}}ST.openF=new Set([RACES[id].fi]);render()},
  type(b){ST.type=+b.dataset.i;render()},
  cls(b){const i=+b.dataset.i;if(!okCls(R(),D.classes[i]))return;if(ST.cls!==i){ST.cls=i;ST.picks=[]}render();requestAnimationFrame(goSheet)},
  pick(b){
    const i=+b.dataset.i,n=needPicks(),k=ST.picks.indexOf(i);
    if(k>=0)ST.picks.splice(k,1);else{ST.picks.push(i);if(ST.picks.length>n)ST.picks.shift()}
    render();
  },
  openf(b){const f=+b.dataset.f;ST.openF=ST.openF.has(f)?new Set():new Set([f]);render()},
  zoom:zoomOn,
  unzoom:zoomOff,
  create(){
    if(!R()||!C()||!okCls(R(),C())||ST.picks.length!==needPicks())return;
    const h=buildHero();
    HS.push(h);hfSave();closeWin();
    HF.fan=true;hfOpen(HS.length-1);
  }
};
ROOT.addEventListener("click",e=>{
  const t=e.target;
  const tg=t.closest(".rl,.hc-tt");
  if(tg){togglePop(tg);return}
  if(POP&&!t.closest("#pop"))hidePop();
  if(t.id==="veil"){closeWin();return}
  const b=t.closest("[data-act]");
  if(b&&ACT[b.dataset.act])ACT[b.dataset.act](b);
});
ROOT.addEventListener("input",e=>{
  if(e.target.id==="srch"){ST.q=e.target.value;hidePop();const l=$("#rlist");if(l)l.innerHTML=raceList()}
  if(e.target.id==="hname")ST.name=e.target.value;
});
/* Escape: primero cierra la imagen completa, luego la ventanita de una regla; si no hay, cierra la creación. */
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape"||!ST.open)return;
  e.preventDefault();e.stopImmediatePropagation();
  if($("#hzoom"))zoomOff();else if(POP)hidePop();else closeWin();
},true);
function open(){
  if(typeof HF!=="undefined"&&HF.open)hfClose();
  Object.assign(ST,{step:1,race:null,type:0,cls:null,name:"",q:"",picks:[],hov:null});
  ST.openF=new Set([0]);
  openWin();
}
/* full(h): imagen completa del héroe (según h.art) para el duelo y las vistas grandes; "" si no tiene ilustración. */
return{open,close:closeWin,isOpen:()=>ST.open,rule:rtext,rg:RG,full:h=>(h&&h.art&&ART[h.art])?IMGD+h.art+".webp":""};
})();
