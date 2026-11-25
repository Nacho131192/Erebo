# Genera ficha-mision-v4.html a partir de su .src.html, copiando de la plantilla el CSS del mapa
# y el código que dibuja el mapa real (geometría, terreno, niebla, hogueras, pisadas, lápiz y marco de rol).
from pathlib import Path
H = Path(__file__).resolve().parent
T = (H / "../../src/template/final-tpl.html").resolve().read_text(encoding="utf-8").splitlines()

def cut(a, b, incl_b=True):
    i = next(k for k, l in enumerate(T) if a in l)
    j = i if a == b else next(k for k, l in enumerate(T) if k > i and b in l)
    return "\n".join(T[i:j + (1 if incl_b else 0)])

css = cut(".mapv{position:relative;height:100vh", ".mmap .smoke{")
core = "\n".join([
    cut("const f=n=>+n.toFixed(1)", "const f=n=>+n.toFixed(1)"),
    cut("const MIS=[", "function rng(s)"),
    cut("const P=[[395,598]", "const XI=", incl_b=False),
])
src = (H / "ficha-mision-v4.src.html").read_text(encoding="utf-8")
out = src.replace("%%CSS%%", css).replace("%%CORE%%", core)
(H / "ficha-mision-v4.html").write_text(out, encoding="utf-8")
print("ok", len(out))
