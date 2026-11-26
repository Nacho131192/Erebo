# Genera selector-campanas-v2.html a partir de su .src.html, incrustando las láminas del Heraldo.
# Uso: py docs/maquetas/build-selector-campanas-v2.py
import base64
from pathlib import Path

H = Path(__file__).resolve().parent
A = (H / "../../assets/web").resolve()

def uri(name):
    return "data:image/jpeg;base64," + base64.b64encode((A / name).read_bytes()).decode()

src = (H / "selector-campanas-v2.src.html").read_text(encoding="utf-8")
out = src.replace("%%IMG%%", uri("heraldo.jpg")).replace("%%IMGJ%%", uri("heraldo-jefe.jpg"))
(H / "selector-campanas-v2.html").write_text(out, encoding="utf-8")
print("ok", len(out))
