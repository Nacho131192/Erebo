# Genera pagina-mision-v2.html a partir de su .src.html: embebe el contenido real de la misión (data.js),
# las tablas de eventos y cofres y el texto del Heraldo copiados de la plantilla, las dos láminas del
# Heraldo y el código de la hoguera del mapa.
import base64
from pathlib import Path
H = Path(__file__).resolve().parent
ROOT = (H / "../..").resolve()
T = (ROOT / "src/template/final-tpl.html").read_text(encoding="utf-8").splitlines()

def cut(a, b, incl_b=True):
    i = next(k for k, l in enumerate(T) if a in l)
    j = i if a == b else next(k for k, l in enumerate(T) if k > i and b in l)
    return "\n".join(T[i:j + (1 if incl_b else 0)])

def b64(p):
    return "data:image/jpeg;base64," + base64.b64encode((ROOT / p).read_bytes()).decode()

data = (ROOT / "src/template/data.js").read_text(encoding="utf-8")
# QEV y QCH son bloques de varias líneas: se copian hasta el cierre «];»
def block(start):
    i = next(k for k, l in enumerate(T) if l.startswith(start))
    j = next(k for k in range(i, len(T)) if T[k].rstrip().endswith("];"))
    return "\n".join(T[i:j + 1])

core = "\n".join([
    data,
    block("const QEV=["),
    block("const QCH=["),
    "\n".join(T[next(k for k, l in enumerate(T) if l.startswith("const QHER=")):][:3]),
    cut("const f=n=>+n.toFixed(1)", "const f=n=>+n.toFixed(1)"),
    cut("function rng(s)", "function rng(s)"),
    cut("const FLC=", "/* Círculo a lápiz", incl_b=False),
])
css_fire = "\n".join([
    cut("/* hogueras: chispas que suben */", "@keyframes mspk"),
    cut("/* braseros: arden las misiones", ".mmap .smoke{"),
])
src = (H / "pagina-mision-v2.src.html").read_text(encoding="utf-8")
out = (src.replace("%%CORE%%", core).replace("%%FIRECSS%%", css_fire)
          .replace("%%IMG_RETRATO%%", b64("assets/web/heraldo.jpg")).replace("%%IMG_JEFE%%", b64("assets/web/heraldo-jefe.jpg")))
(H / "pagina-mision-v2.html").write_text(out, encoding="utf-8")
print("ok", len(out))
