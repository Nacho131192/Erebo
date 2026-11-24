"""Extrae las habilidades de héroe (de clase y comunes) y las dotes de docs/heroes-campana.md
a src/template/habilidades-base.json.  Uso (desde la carpeta Erebo):  py tools/extraer-habilidades.py
Cada habilidad: {n: nombre en español, en: nombre original, a: atributo (Fuerza/Destreza/Voluntad), e: efecto,
cls: clase o "Comunes", tier: 0 (iniciales) 1 2 3}.  Las dotes: {n, en, e, cls}."""
import re, json, sys, pathlib

sys.stdout.reconfigure(encoding="utf-8")
ROOT = pathlib.Path(__file__).resolve().parent.parent
md = (ROOT / "docs" / "heroes-campana.md").read_text(encoding="utf-8").split("\n")

sk, feats = [], []
cls, tier = None, 0
i0 = next(i for i, l in enumerate(md) if l.startswith("## Habilidades por clase"))
i1 = next(i for i, l in enumerate(md) if l.startswith("## Tienda común"))
for l in md[i0:i1]:
    m = re.match(r"^### (.+?) \((.+?)\)\s*$", l)
    if m:
        cls, tier = m.group(1), 0
        continue
    if l.startswith("## Habilidades comunes"):
        cls, tier = "Comunes", 0
        continue
    m = re.match(r"^\*\*Dote de clase.*?:\*\* \*(.+?)\* \((.+?)\): (.+)$", l)
    if m and cls:
        feats.append({"n": m.group(1), "en": m.group(2), "e": m.group(3).strip(), "cls": cls})
        continue
    if l.startswith("**Iniciales"):
        tier = 0
    m = re.match(r"^\*\*Tier (\d)", l)
    if m:
        tier = int(m.group(1))
    if l.startswith("|") and cls and not l.startswith("|---") and not l.startswith("| Habilidad"):
        c = [x.strip() for x in l.strip().strip("|").split("|")]
        if len(c) == 4:
            a = re.sub(r"\s*\(.*\)", "", c[2])
            sk.append({"n": c[0], "en": c[1], "a": a, "e": c[3], "cls": cls, "tier": tier})

# comunes: el bloque va tras «## Habilidades comunes»; las clases, antes. Se separan por posición.
json.dump({"skills": sk, "feats": feats}, open(ROOT / "src" / "template" / "habilidades-base.json", "w", encoding="utf-8"), ensure_ascii=False, separators=(",",":"))
print(len(sk), "habilidades,", len(feats), "dotes")
from collections import Counter
dup = [k for k, v in Counter(s["n"] for s in sk).items() if v > 1]
print("nombres repetidos:", dup)
