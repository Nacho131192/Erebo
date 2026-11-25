# Genera mapa-vivo-v3.html a partir de su .src.html. Reutiliza el contenido y las piezas compartidas de
# pagina-mision-v2.src.html (estilos de lectura, textos de los capítulos) y, de la plantilla, los datos de la
# misión, las tablas de eventos y cofres, el Heraldo, las láminas y la hoguera del mapa.
import base64
from pathlib import Path
H = Path(__file__).resolve().parent
ROOT = (H / "../..").resolve()
T = (ROOT / "src/template/final-tpl.html").read_text(encoding="utf-8").splitlines()
V2 = (H / "pagina-mision-v2.src.html").read_text(encoding="utf-8")

def cut(a, b, incl_b=True):
    i = next(k for k, l in enumerate(T) if a in l)
    j = i if a == b else next(k for k, l in enumerate(T) if k > i and b in l)
    return "\n".join(T[i:j + (1 if incl_b else 0)])

def block(start):
    i = next(k for k, l in enumerate(T) if l.startswith(start))
    j = next(k for k in range(i, len(T)) if T[k].rstrip().endswith("];"))
    return "\n".join(T[i:j + 1])

def between(s, a, b):
    i = s.index(a); j = s.index(b, i)
    return s[i:j]

def b64(p):
    return "data:image/jpeg;base64," + base64.b64encode((ROOT / p).read_bytes()).decode()

qher = next(k for k, l in enumerate(T) if l.startswith("const QHER="))
core = "\n".join([
    (ROOT / "src/template/data.js").read_text(encoding="utf-8"),
    block("const QEV=["), block("const QCH=["), "\n".join(T[qher:qher + 3]),
    block("const PZ_SIL=["), cut("const PZ_BOSS=", "const PZ_BOSS="),
    cut("const f=n=>+n.toFixed(1)", "const f=n=>+n.toFixed(1)"),
    cut("function rng(s)", "function rng(s)"),
    cut("const FLC=", "/* Círculo a lápiz", incl_b=False),
])
fire = "\n".join([cut("/* hogueras: chispas que suben */", "@keyframes mspk"), cut("/* braseros: arden las misiones", ".mmap .smoke{")])
shared_css = between(V2, "/* ---------- piezas compartidas ---------- */", "/* ======= 1 · Libro de campaña ======= */")
shared_js = between(V2, "const esc=s=>", "/* ================= pantalla ================= */")
src = (H / "mapa-vivo-v3.src.html").read_text(encoding="utf-8")
out = (src.replace("%%SHAREDCSS%%", shared_css).replace("%%FIRECSS%%", fire).replace("%%CORE%%", core)
          .replace("%%SHAREDJS%%", shared_js)
          .replace("%%IMG_RETRATO%%", b64("assets/web/heraldo.jpg")).replace("%%IMG_JEFE%%", b64("assets/web/heraldo-jefe.jpg")))
(H / "mapa-vivo-v3.html").write_text(out, encoding="utf-8")
print("ok", len(out))
