# Genera selector-misiones-v3.html a partir de su .src.html, copiando de la plantilla
# el dibujo real del mapa (geometría, terreno, niebla, brasero actual y su CSS).
from pathlib import Path
H = Path(__file__).resolve().parent
T = (H / "../../src/template/final-tpl.html").resolve().read_text(encoding="utf-8").splitlines()

def cut(a, b, incl_b=True):
    i = next(k for k, l in enumerate(T) if a in l)
    j = i if a == b else next(k for k, l in enumerate(T) if k > i and b in l)
    return "\n".join(T[i:j + (1 if incl_b else 0)])

css = cut(".mmap{position:absolute", ".mmap .smoke{")
core = "\n".join([
    cut("const f=n=>+n.toFixed(1)", "const f=n=>+n.toFixed(1)"),
    cut("const MIS=[", "function rng(s)"),
    cut("const P=[[395,598]", "function edgeW", incl_b=False),
    cut("const STARS=(()=>", "const STARS=(()=>"),
    cut("const FOGY=[", "const FOGY=["),
    cut("const SIDE=[1,1", "const SIDE=[1,1"),
])
src = (H / "selector-misiones-v3.src.html").read_text(encoding="utf-8")
out = src.replace("%%CSS%%", css).replace("%%CORE%%", core)
(H / "selector-misiones-v3.html").write_text(out, encoding="utf-8")
print("ok", len(out))
