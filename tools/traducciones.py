"""Genera src/template/traducciones.json: diccionario para traducir al español lo que sale de Army Forge
(raza, profesión, reglas, habilidades, armas y consumibles) y para dar su explicación.

Fuentes (todas del proyecto, no hay red):
  - src/template/creador.js  (RG: reglas en español con su nombre en inglés)
  - src/template/tablero.js  (RX: reglas en inglés con su texto en español)
  - src/template/habilidades-base.json (habilidades de clase y comunes, en inglés y español)
  - src/template/heroes-data.json (razas, facciones y clases en español e inglés)
  - docs/age-of-fantasy-quest-heroes.md (tabla de consumibles)
  - MANUAL (abajo): reglas comunes de OPR que no están en las fuentes anteriores.

Las palabras clave de las reglas se quedan en inglés (decisión de Nacho): solo se traduce su explicación.
Uso: py tools/traducciones.py   (desde la carpeta Erebo)
"""
import json, os, re

H = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(H, "..")
T = os.path.join(ROOT, "src", "template")


def rd(p):
    return open(p, encoding="utf-8").read()


def norm(s):
    return re.sub(r"\s+", " ", s.strip()).lower()


out = {"razas": {}, "profesiones": {}, "reglas": {}, "habilidades": {}, "consumibles": {}, "armas": {}}

# --- RG (creador.js): "Nombre en español": ["Name in English", "texto"]
creador = rd(os.path.join(T, "creador.js"))
for m in re.finditer(r'^"([^"\n]+)":\["([^"\n]+)","((?:[^"\\\n]|\\.)*)"\]', creador, re.M):
    es, en, txt = m.group(1), m.group(2), m.group(3)
    out["reglas"].setdefault(norm(en), {"n": en, "es": es, "d": txt})

# --- RX (tablero.js): "English": ["Nombre español", "texto"]
tablero = rd(os.path.join(T, "tablero.js"))
for m in re.finditer(r'^ "([^"\n]+)":\["([^"\n]+)","((?:[^"\\\n]|\\.)*)"\]', tablero, re.M):
    en, es, txt = m.group(1), m.group(2), m.group(3)
    out["reglas"].setdefault(norm(en), {"n": en, "es": es, "d": txt})

# --- Habilidades (habilidades-base.json)
sk = json.load(open(os.path.join(T, "habilidades-base.json"), encoding="utf-8"))
for s in sk["skills"]:
    out["habilidades"].setdefault(norm(s["en"]), {"n": s["n"], "d": s["e"], "a": s.get("a", "")})
for s in sk.get("feats", []):
    if "en" in s:
        out["habilidades"].setdefault(norm(s["en"]), {"n": s["n"], "d": s.get("e", s.get("t", "")), "a": ""})

# --- Razas, facciones y clases (heroes-data.json)
hd = json.load(open(os.path.join(T, "heroes-data.json"), encoding="utf-8"))
for f in hd["facs"]:
    for r in f["races"]:
        out["razas"].setdefault(norm(r["en"]), r["n"])
        for t in r["types"]:
            out["razas"].setdefault(norm(t["en"]), t["n"])
for c in hd["classes"]:
    out["profesiones"].setdefault(norm(c["en"]), c["n"])
for f in hd["facs"]:
    out["razas"].setdefault(norm(f["en"]), f["n"])

# --- Consumibles (tabla del documento de héroes): | Nombre | Nombre original | Tier | Precio | Efecto |
doc = rd(os.path.join(ROOT, "docs", "age-of-fantasy-quest-heroes.md"))
for line in doc.splitlines():
    cells = [c.strip() for c in line.strip().strip("|").split("|")]
    if len(cells) == 5 and cells[0] and cells[1] and cells[2].isdigit() and "g" in cells[3]:
        out["consumibles"].setdefault(norm(cells[1]), {"n": cells[0], "d": cells[4]})

# --- Armas: nombres de Army Forge (los perfiles se traducen palabra a palabra con la tabla)
out["armas"] = {
    "dual hand weapons": "Armas de mano dobles",
    "hand weapon": "Arma de mano",
    "hand weapons": "Armas de mano",
    "great weapon": "Gran arma",
    "great hand weapon": "Gran arma de mano",
    "spear": "Lanza",
    "bow": "Arco",
    "longbow": "Arco largo",
    "short bow": "Arco corto",
    "shortbow": "Arco corto",
    "rifle": "Rifle",
    "pistol": "Pistola",
    "claws": "Garras",
    "rough claws": "Garras toscas",
    "sabre-bite": "Mordisco de sable",
    "throw rocks": "Lanzar piedras",
    "war hammer": "Martillo de guerra",
    "staff": "Bastón",
    "rapid dark crossbow": "Ballesta oscura rápida",
    "great longbow": "Gran arco largo",
}
# Habilidad (no regla) de Destructive, como la exporta Army Forge para Legolas (2026-11-21). Texto de la casa.
out["habilidades"].setdefault("destructive", {"n": "Destructivo", "d": "Contra unidades que conservan más de la mitad de su tamaño (o de su Resistente), los impactos ganan AP(+1).", "a": ""})

# --- MANUAL: reglas comunes de OPR que no estaban en las fuentes (texto propio, en español).
MANUAL = {
    "destroyer": ("Destroyer", "Cuando el héroe dispara o carga a más de 9″... (ver regla): al disparar, 9″; al cargar, 6″ — sus impactos adicionales se resuelven contra el objetivo y el resto del grupo."),
    "hero": ("Hero", "Los héroes no tiran moral, no se pueden sacar de la mesa por moral y sus efectos se anotan en su ficha."),
    "tough": ("Tough", "Cada miniatura aguanta X heridas antes de caer. En el héroe, X son sus heridas máximas."),
    "fearless": ("Fearless", "Cuando la unidad pierde heridas, puede repetir la tirada de moral si la falla."),
    "fear": ("Fear", "Cada impacto de la unidad cuenta como una herida extra para decidir quién gana un cuerpo a cuerpo."),
    "villain": ("Villain", "Puede elegirse como objetivo de la pelea de jefe de forma especial; sus heridas cuentan como el villano principal."),
    "caster": ("Caster", "Puede lanzar hechizos gastando sus fichas de hechizo."),
    "ravage": ("Ravage", "Cuando causa heridas al atacar, las heridas extra se reparten entre los enemigos a su alcance."),
    "deadly": ("Deadly", "Cada herida que causa se multiplica por X contra los objetivos."),
    "defense": ("Defense", "Suma X a las tiradas de Defensa contra los ataques de tu unidad."),
    "unstoppable": ("Unstoppable", "Ignora los modificadores negativos a sus tiradas para impactar."),
    "unwieldy": ("Unwieldy", "Ataca al final cuando carga."),
    "armor": ("Armor", "Se resta 1 a las tiradas de daño sobre esta unidad."),
    "fortified": ("Fortified", "Obtiene +1 a la Defensa cuando se encuentra en cobertura."),
    "heavy impact": ("Heavy Impact", "Como Impact, pero cada impacto cuenta el doble."),
    "melee slayer": ("Melee Slayer", "Si ataca cuerpo a cuerpo a una unidad, obtiene +1 para impactar en ese ataque."),
    "unpredictable fighter": ("Unpredictable Fighter", "Al luchar cuerpo a cuerpo, tira un dado: con 4+ obtiene +1 a impactar; si no, AP(+1)."),
    "takedown": ("Takedown", "Si el objetivo es un héroe, puede repetir las tiradas de impacto."),
    "piercing feat": ("Piercing Feat", "Ignora un efecto de defensa por cada X impactos."),
}
for k, (n, d) in MANUAL.items():
    out["reglas"].setdefault(k, {"n": n, "d": d})

with open(os.path.join(T, "traducciones.json"), "w", encoding="utf-8", newline="\n") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print({k: len(v) for k, v in out.items()})
