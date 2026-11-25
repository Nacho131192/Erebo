"""Emblemas genéricos de las 46 razas (Érebo), con el mismo estilo que los héroes de Saurios.

Uso (desde Erebo/):
    py tools/razas-laminas.py lista                       # razas y su motivo
    py tools/razas-laminas.py prompt saurios              # imprime el prompt
    py tools/razas-laminas.py gen saurios discipulos-plaga --seed 11
    py tools/razas-laminas.py gen todas --seed 11 --desde 0 --hasta 38   # una tanda (se salta las que ya tienen borrador)

Borradores en assets/pruebas/emblema-<raza>_flux.2-klein-4b_s<semilla>.jpg (los guarda pollinations.py).
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
REF = RAIZ / "assets" / "heroes" / "ref-saurio-paladin.webp"
PRUEBAS = RAIZ / "assets" / "pruebas"

ESTILO = (
    "Same illustration style as the reference image: bold thick black ink outline, cel-shaded comic-book "
    "coloring with rough pen hatching and painterly shading, rich saturated colors with metallic gold accents, "
    "a thick white die-cut sticker border around the whole shape, plain pure white background, no text, no letters. "
    "This is NOT a character: it is a single round heraldic emblem, a circular medallion crest, perfectly centered, "
    "symmetrical, bold and instantly readable at small size, premium collectible enamel-pin illustration."
)

# slug: (nombre, motivo)
RAZAS = {
    "hombres-bestia": ("Hombres bestia", "a horned beast skull with antlers, tied feathers and a bone totem, earthy brown and amber"),
    "hombres-rata": ("Hombres rata", "a snarling rat head with crooked yellow teeth in front of a rusty cogwheel, sickly green and rust"),
    "saurios": ("Saurios", "a dragon-like lizard head in profile with two horns and a scale pattern, blue and violet with gold"),
    "discipulos-guerra": ("Discípulos de la Guerra", "a spiked war helm behind two crossed bloody axes, crimson and black"),
    "discipulos-lujuria": ("Discípulos de la Lujuria", "an ornate theater mask wrapped in a thorny rose vine, magenta and pink"),
    "discipulos-plaga": ("Discípulos de la Plaga", "a rotting skull crowned with flies, a dripping drop of green slime and a cracked bell, sickly green"),
    "discipulos-cambio": ("Discípulos del Cambio", "a shifting eye inside a swirling arcane spiral of multicolored flame, blue, violet and pink"),
    "guerreros-caos": ("Guerreros del Caos", "an eight-pointed chaos star over a black spiked helm, black iron and gold"),
    "demonios-guerra": ("Demonios de la Guerra", "a horned red daemon face with fangs over two crossed blades, deep red"),
    "demonios-lujuria": ("Demonios de la Lujuria", "a horned daemon head with a lashing barbed tail and falling rose petals, magenta"),
    "demonios-plaga": ("Demonios de la Plaga", "a bloated horned daemon face with dripping green pustules, sickly green"),
    "demonios-cambio": ("Demonios del Cambio", "a horned daemon mask engulfed in flickering multicolored flames, blue and violet"),
    "altos-elfos": ("Altos elfos", "an elegant crown with flowing leaf tiara and a bright star, white and gold"),
    "elfos-abisales": ("Elfos abisales", "a trident wrapped in coral with a pearl and seashell, deep sea teal and blue"),
    "elfos-oscuros": ("Elfos oscuros", "a black crescent moon pierced by a dagger with a spiderweb, deep purple and silver"),
    "elfos-silvanos": ("Elfos silvanos", "an oak leaf with a drawn longbow and small antlers, forest green and gold"),
    "enanos": ("Enanos", "a smith hammer crossed over an anvil with a braided beard rune, steel grey and gold"),
    "enanos-ciudad-celeste": ("Enanos de la ciudad celeste", "a winged dwarven helm floating above clouds, sky blue and gold"),
    "enanos-caos": ("Enanos del Caos", "a black-iron horned dwarven helm branded with a chaos star, black and molten orange"),
    "enanos-volcanicos": ("Enanos volcánicos", "an anvil beneath an erupting volcano with a glowing molten hammer, orange and black"),
    "acechadores-sombras": ("Acechadores de las sombras", "a hooded shadow mask with two glowing eyes and two daggers, dark teal and silver"),
    "celadores-eternos": ("Celadores eternos", "an ancient sentinel helm with a single ever-open eye above an hourglass, bronze and pale blue"),
    "imperio-dragon": ("Imperio del Dragón", "an eastern dragon coiled around a pearl inside an imperial seal, jade green and gold"),
    "medianos": ("Medianos", "a small round green hobbit door with a smoking pipe and a leaf, warm green and brown"),
    "ogros": ("Ogros", "a tusked ogre face with a bone club over a cooking pot, olive and ochre"),
    "alianzas-menudas": ("Alianzas menudas", "two small clasped hands holding a tiny banner, warm orange and blue"),
    "cazatesoros": ("Cazatesoros", "a treasure map with an X, a skeleton key and a gem, parchment and gold"),
    "clanes-brutos": ("Clanes brutos", "a spiked club over a tusked boar skull, brown and bone"),
    "fanaticos-enloquecidos": ("Fanáticos enloquecidos", "a wild burning eye above a broken chain and a torch, red and orange"),
    "federaciones-comerciales": ("Federaciones comerciales", "balance scales with coins and a ship sail, navy blue and gold"),
    "guardias-sueldo": ("Guardias a sueldo", "a kite shield with a crossed halberd and a coin, steel blue and gold"),
    "mercenarios": ("Mercenarios", "two crossed swords over a heavy coin purse, grey and gold"),
    "saqueadores-afueras": ("Saqueadores de las afueras", "a torn banner with a skull on a pole and a torch, rust red and charcoal"),
    "sindicatos-ocultos": ("Sindicatos ocultos", "a masked face with one closed eye and a key, dark violet and silver"),
    "tribus-furiosas": ("Tribus furiosas", "a tribal war drum with feathers and war paint stripes, red and turquoise"),
    "uniones-mercantes": ("Uniones mercantes", "a wagon wheel with a coin and a ledger scroll, brown and gold"),
    "ducados-vinci": ("Ducados de Vinci", "a gear and compass inside a ring with a laurel wreath, Renaissance blue and gold"),
    "imperio-humano": ("Imperio humano", "a double-headed eagle holding a sword and a crown, imperial purple and gold"),
    "reino-angeles": ("Reino de los Ángeles", "a glowing halo with outspread white wings and a sunburst, white and gold"),
    "reinos-caballerescos": ("Reinos caballerescos", "a knight helm with a lance and a heraldic fleur-de-lis, royal blue and gold"),
    "no-muertos-fantasmales": ("No muertos fantasmales", "a translucent ghostly skull with a hanging lantern in teal mist, pale teal"),
    "no-muertos-momificados": ("No muertos momificados", "a golden sarcophagus mask with a scarab and an ankh, gold and turquoise"),
    "no-muertos-osificados": ("No muertos osificados", "a bleached skull with a rusted crown and ribcage, bone white and rust"),
    "no-muertos-vampiricos": ("No muertos vampíricos", "a fanged mouth with bat wings and a blood drop, crimson and black"),
    "goblins": ("Goblins", "a grinning goblin face with huge ears holding a rusty dagger, bright green and brown"),
    "orcos": ("Orcos", "a tusked orc war helm with war paint and a crude axe, dark green and iron"),
}


def prompt(slug: str) -> str:
    n, motivo = RAZAS[slug]
    return (f"{ESTILO} Emblem of the fantasy race '{n}': {motivo}. "
            "Avoid: text, letters, watermark, photorealism, 3D render, anime style, characters, background scenery.")


def ya(slug: str, seed: int) -> bool:
    return any(PRUEBAS.glob(f"emblema-{slug}_flux.2-klein-4b_s{seed}*.jpg"))


def gen(slug: str, seed: int, modelo: str):
    cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"emblema-{slug}",
           "--prompt", prompt(slug), "--modelo", modelo, "--seed", str(seed),
           "--ref", str(REF), "--sin-evitar", "--ancho", "768", "--alto", "768"]
    print(">>", slug, flush=True)
    subprocess.run(cmd, cwd=RAIZ, check=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("modo", choices=["lista", "prompt", "gen"])
    ap.add_argument("razas", nargs="*", help="slugs o 'todas'")
    ap.add_argument("--seed", type=int, default=11)
    ap.add_argument("--modelo", default="flux.2-klein-4b")
    ap.add_argument("--desde", type=int, default=0)
    ap.add_argument("--hasta", type=int, default=999)
    a = ap.parse_args()
    if a.modo == "lista":
        for i, (k, (n, m)) in enumerate(RAZAS.items()):
            print(f"{i:2d} {k:26s} {n}: {m}")
        return
    claves = list(RAZAS)[a.desde:a.hasta] if a.razas == ["todas"] else a.razas
    for k in claves:
        if a.modo == "prompt":
            print(f"[{k}] {prompt(k)}\n")
        elif ya(k, a.seed):
            print("ya existe:", k)
        else:
            gen(k, a.seed, a.modelo)


if __name__ == "__main__":
    main()
