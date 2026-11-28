# Regenera pueblo-sin-nombre.html desde la plantilla.
# La escena y el retrato (SVG) se extraen de old-scene-source.html; data.js trae textos y eventos (extraídos de docs/mision-1.md).
import re,os
H=os.path.dirname(os.path.abspath(__file__))
def rd(n): return open(os.path.join(H,n),encoding="utf-8").read()
s=rd("final-tpl.html")
old=rd("old-scene-source.html")
sc=re.search(r"<svg class='scene'.*?</svg>",old,re.S).group(0)
po=re.search(r"<svg class='por'.*?</svg>",old,re.S).group(0)
out=s.replace("%%HC_CSS%%",rd("creador.css")).replace("%%HC_JS%%",rd("creador.js")).replace("%%TV_CSS%%",rd("tablero.css")).replace("%%TV_JS%%",rd("tablero.js").replace("%%SK_DATA%%",rd("habilidades-base.json").strip()).replace("%%GLOS%%",rd("reglas-ghostly.json").strip()).replace("%%SPELLS%%",rd("hechizos.json").strip())).replace("%%HCDATA%%",rd("heroes-data.json").strip()).replace("%%TRAD%%",rd("traducciones.json").strip()).replace("%%DATA%%",rd("data.js")).replace("%%SCENE%%",sc).replace("%%PORTRAIT%%",po)
# Láminas (assets/web/, ya optimizadas): se incrustan como data URI porque el artefacto no puede cargar archivos sueltos.
import base64
def img(n): return "data:image/jpeg;base64,"+base64.b64encode(open(os.path.join(H,"..","..","assets","web",n),"rb").read()).decode()
out=out.replace("%%IMG_RETRATO%%",img("heraldo.jpg")).replace("%%IMG_JEFE%%",img("heraldo-jefe.jpg"))
# Ilustraciones de héroes y emblemas de raza: ARCHIVOS APARTE en src/img/ (el HTML solo lleva la lista de lo que existe y las pide al elegir).
#   src/img/heroes/<raza>-<clase>.webp (completa) y <raza>-<clase>-busto.webp; src/img/razas/<slug>.webp.
import json,glob
IMG=os.path.join(H,"..","img")
hs=set(os.path.basename(f)[:-5] for f in glob.glob(os.path.join(IMG,"heroes","*.webp")))
art={k:1 for k in sorted(hs) if not k.endswith("-busto") and k+"-busto" in hs}
out=out.replace("%%HC_ART%%",json.dumps(art,separators=(",",":")))
import importlib.util
_sp=importlib.util.spec_from_file_location("razas_laminas",os.path.join(H,"..","..","tools","razas-laminas.py"))
_m=importlib.util.module_from_spec(_sp); _sp.loader.exec_module(_m)
emb={nom:slug for slug,(nom,_) in _m.RAZAS.items() if os.path.exists(os.path.join(IMG,"razas",slug+".webp"))}
out=out.replace("%%HC_EMB%%",json.dumps(emb,ensure_ascii=False,separators=(",",":")))
# Fondo del tablero táctico (boceto MX-CRUZ2-A, 900 px). Sus obstáculos están calcados a mano en BOBS de la plantilla.
out=out.replace("%%IMG_TABLERO%%",img("tablero.jpg")).replace("%%IMG_PANORAMA%%",img("panorama.jpg")).replace("%%IMG_SAEL%%",img("panorama-sael.jpg")).replace("%%IMG_SETUP_BG%%",img("setup-fondo.jpg")).replace("%%IMG_SETUP_PAPER%%",img("setup-papel.jpg"))
# Narraciones (assets/audio/, MP3): también como data URI. Clave = texto de la mesa (start = Antes de empezar, r1 = Ronda 1…).
def aud(n): return "data:audio/mpeg;base64,"+base64.b64encode(open(os.path.join(H,"..","..","assets","audio",n),"rb").read()).decode()
out=out.replace("%%AUD_START%%",aud("antes-de-empezar.mp3"))
open(os.path.join(H,"..","pueblo-sin-nombre.html"),"w",encoding="utf-8",newline="\n").write(out)
print("ok",len(out))
