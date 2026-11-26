# Genera columna-campana.html a partir de su .src.html, incrustando las texturas (columna-img/) y las dos láminas.
# Uso: py docs/maquetas/build-columna-campana.py
import base64, re
from pathlib import Path

H = Path(__file__).resolve().parent
WEB = (H / "../../assets/web").resolve()
IMG = H / "columna-img"
EXTRA = {"muro": WEB / "panorama.jpg", "sael": WEB / "panorama-sael.jpg"}

cache = {}
def uri(name):
    if name not in cache:
        p = EXTRA.get(name) or IMG / f"{name}.png"
        mime = "image/jpeg" if p.suffix == ".jpg" else "image/png"
        cache[name] = f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()
    return cache[name]

src = (H / "columna-campana.src.html").read_text(encoding="utf-8")
# Las imágenes que se repiten se declaran una sola vez como variables CSS / JS para no inflar el archivo.
names = sorted(set(re.findall(r"%%I:([\w-]+)%%", src)))
out = re.sub(r"url\(%%I:([\w-]+)%%\)", lambda m: f"var(--i-{m.group(1)})", src)
out = re.sub(r'"%%I:([\w-]+)%%"', lambda m: f'IMG["{m.group(1)}"]', out)
left = set(re.findall(r"%%I:([\w-]+)%%", out))
if left:
    raise SystemExit(f"quedan marcadores sin resolver: {left}")
css = ":root{" + "".join(f"--i-{n}:url({uri(n)});" for n in names) + "}"
js = "const IMG={" + ",".join(f'"{n}":"{uri(n)}"' for n in names if n.startswith("flecha")) + "};"
out = out.replace("<style>", "<style>" + css + "\n", 1).replace("<script>", "<script>" + js + "\n", 1)
(H / "columna-campana.html").write_text(out, encoding="utf-8")
print("ok", len(out) // 1024, "KB")
