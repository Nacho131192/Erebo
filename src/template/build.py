# Regenera pueblo-sin-nombre.html desde la plantilla.
# La escena y el retrato (SVG) se extraen de old-scene-source.html; data.js trae textos y eventos (extraídos de docs/mision-1.md).
import re,os
H=os.path.dirname(os.path.abspath(__file__))
def rd(n): return open(os.path.join(H,n),encoding="utf-8").read()
s=rd("final-tpl.html")
old=rd("old-scene-source.html")
sc=re.search(r"<svg class='scene'.*?</svg>",old,re.S).group(0)
po=re.search(r"<svg class='por'.*?</svg>",old,re.S).group(0)
out=s.replace("%%DATA%%",rd("data.js")).replace("%%SCENE%%",sc).replace("%%PORTRAIT%%",po)
# Láminas (assets/web/, ya optimizadas): se incrustan como data URI porque el artefacto no puede cargar archivos sueltos.
import base64
def img(n): return "data:image/jpeg;base64,"+base64.b64encode(open(os.path.join(H,"..","..","assets","web",n),"rb").read()).decode()
out=out.replace("%%IMG_RETRATO%%",img("heraldo.jpg")).replace("%%IMG_JEFE%%",img("heraldo-jefe.jpg"))
open(os.path.join(H,"..","pueblo-sin-nombre.html"),"w",encoding="utf-8",newline="\n").write(out)
print("ok",len(out))
