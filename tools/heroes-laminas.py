"""Láminas de héroes por raza y clase (Érebo).

Uso (desde Erebo/):
    py tools/heroes-laminas.py prompt saurios mago            # solo imprime el prompt
    py tools/heroes-laminas.py gen saurios mago --seed 11     # genera un borrador con Pollinations (flux.2-klein-4b)
    py tools/heroes-laminas.py gen saurios todas --seed 11    # las 12 clases de una raza

Usa assets/heroes/ref-saurio-paladin.webp como referencia de estilo. Las armas dependen
SOLO de la clase; el aspecto, SOLO de la raza (nada de subclases de raza).
Borradores en assets/pruebas/ (los guarda pollinations.py).
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
REF = RAIZ / "assets" / "heroes" / "ref-saurio-paladin.webp"

ESTILO = (
    "Same illustration style as the reference image: bold thick black ink outline, "
    "cel-shaded comic-book coloring with rough pen hatching and painterly shading, rich saturated "
    "colors with metallic gold accents, a thick white die-cut sticker border around the whole figure, "
    "plain pure white background, no text, no frame, no extra characters. "
    "Full-body figure, three-quarter view facing right, dynamic action pose, premium collectible "
    "figure-pin illustration."
)

# Aspecto por RAZA (no por subraza). Añadir aquí el resto de razas al escalar.
RAZAS = {
    "hombres-bestia": "a Beastman: a hulking upright horned beast-headed humanoid with a goat-and-bull face, "
                      "curved horns, shaggy brown fur, a broad snout, cloven hooves and powerful muscled limbs",
    "hombres-rata": "a Ratman: a hunched, wiry upright ratlike humanoid with a long whiskered snout, big round ears, "
                    "patchy grey-brown fur, yellow buck teeth, clawed hands and a long bare scaly tail",
    "discipulos-guerra": "a Disciple of War: a brutal scarred human-like warrior covered in crimson war paint and ritual scars, "
                         "with blood-red and black spiked armor accents, skull trophies and a savage snarl",
    "discipulos-lujuria": "a Disciple of Lust: an elegant, androgynous, pale-skinned human-like cultist with a sly smile, "
                          "ornate masks and jewelry, silk and lace, rose and thorn motifs, magenta, pink and gold (tasteful, non-explicit)",
    "discipulos-plaga": "a Disciple of Plague: a bloated, sickly human-like cultist with pallid greenish skin, boils and sores, "
                        "tattered rags and a hood, a few flies buzzing around, sickly green and rust colors",
    "discipulos-cambio": "a Disciple of Change: a lanky human-like cultist with shifting iridescent skin, extra eyes, "
                         "slightly mutating limbs and feathers-like scales, blue, violet and pink colors",
    "guerreros-caos": "a Havoc Warrior: a massive human warrior in black spiked plate armor with a horned helm, "
                      "chaos star brands and dark iron with gold trim, menacing and grim",
    "saurios": "a Saurian: an upright reptilian lizardfolk with a horned dragon-like head, "
               "blue and violet scales, sharp teeth, clawed feet and a thick tail",
}

# Arma y vestimenta por CLASE (dueño: Nacho, 2026-11-25).
CLASES = {
    "barbaro": ("Barbarian", "a huge battle axe with exactly ONE single large curved blade on one side only (NOT double-headed, no second small blade or spike at the other end of the handle), held high in one raised fist, the other hand empty",
                "fur pelts, leather straps, bone trinkets, bare muscled arms, tribal war paint"),
    "bardo": ("Bard", "a lute slung forward and a slim rapier in the other hand",
              "colorful flamboyant doublet, feathered cap, short cape, jaunty and charismatic"),
    "brujo": ("Warlock", "a short wavy ritual dagger (small blade, clearly NOT a sword) in the right hand and a floating arcane eye of eldritch energy in the left hand",
              "dark hooded robes with occult sigils, chains, glowing violet pact markings"),
    "clerigo": ("Cleric", "a flanged mace and a radiant holy symbol held up in the other hand",
                "chainmail under a white and gold tabard, sacred vestments, soft golden glow"),
    "druida": ("Druid", "a gnarled wooden staff topped with living branches",
               "leaf and bark armor, moss, vines, feathers, natural green-brown cloak"),
    "explorador": ("Ranger", "a simple longbow held low in one hand at the side of the body, bow pointing diagonally downward, relaxed ready stance, with one smooth continuous curve and exactly two tips and a thin straight bowstring running clearly in front of the leg from tip to tip; the other hand rests on the belt; quiver of arrows on the back; the bow and string never cross the face or head",
                   "hooded leather cloak, bracers, practical scout gear in forest greens and browns"),
    "guerrero": ("Fighter", "a steel longsword held up in front and clearly visible in the foreground, in front of the round shield, with the whole blade and crossguard visible and never hidden behind the shield, and a sturdy round shield on the other arm",
                 "full plate and mail armor, practical battle-worn steel, a red surcoat"),
    "hechicero": ("Sorcerer", "no weapon; a crackling orb of raw magical energy floating above an open palm",
                  "flowing ornate robes with bold trim, energy arcing over the arms, sparks in the air"),
    "mago": ("Wizard", "a tall arcane staff with a glowing crystal and an open spellbook in the other hand",
             "long star-embroidered robes, pointed hood or hat, belts with scroll cases and potions"),
    "monje": ("Monk", "no weapon; wrapped fists in a martial-arts striking stance",
              "simple cloth wraps, sash, bare feet, light robes with a tied belt"),
    "paladin": ("Paladin", "a great two-handed greatsword raised high",
                "ornate golden plate armor with red gems, a flowing sandy cloak"),
    "picaro": ("Rogue", "TWO short curved daggers, one in EACH hand, both blades clearly visible, held low in a reverse grip, crouched and ready to strike",
               "dark leather armor, hood and half-mask, knife belt, soft boots"),
}


# Clases permitidas por raza (selección de Nacho; debe coincidir con ALLOW de src/template/creador.js)
PERMITIDAS = {
    "saurios": ["barbaro", "brujo", "druida", "explorador", "guerrero", "hechicero", "picaro"],
    "hombres-bestia": ["barbaro", "druida", "explorador", "guerrero", "brujo"],
    "hombres-rata": ["picaro", "brujo", "hechicero", "explorador", "guerrero"],
    "discipulos-guerra": ["barbaro", "guerrero", "brujo", "clerigo"],
    "discipulos-lujuria": ["bardo", "picaro", "brujo", "hechicero", "guerrero"],
    "discipulos-plaga": ["clerigo", "druida", "brujo", "barbaro", "guerrero"],
    "discipulos-cambio": ["mago", "hechicero", "brujo", "picaro", "bardo"],
    "guerreros-caos": ["guerrero", "barbaro", "paladin", "brujo"],
}


def prompt(raza: str, clase: str) -> str:
    en, arma, ropa = CLASES[clase]
    return (
        f"{ESTILO} The hero is {RAZAS[raza]}, a {en} class adventurer. "
        f"Weapon/focus: {arma}. Outfit: {ropa}. "
        "Keep the same proportions, line weight and coloring approach as the reference, "
        "but the race's own color palette and look take priority over the generic class outfit colors, "
        "but design a new character of this race and class. "
        "Avoid: text, letters, watermark, photorealism, 3D render, anime style, gore, background scenery."
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("modo", choices=["prompt", "gen"])
    ap.add_argument("raza", choices=sorted(RAZAS))
    ap.add_argument("clase", help="clave de clase o 'todas'")
    ap.add_argument("--seed", type=int, default=11)
    ap.add_argument("--modelo", default="flux.2-klein-4b")
    a = ap.parse_args()
    claves = PERMITIDAS.get(a.raza, list(CLASES)) if a.clase == "todas" else [a.clase]
    for c in claves:
        p = prompt(a.raza, c)
        if a.modo == "prompt":
            print(f"[{a.raza}/{c}] {p}\n")
            continue
        cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen",
               f"heroe-{a.raza}-{c}", "--prompt", p, "--modelo", a.modelo,
               "--seed", str(a.seed), "--ref", str(REF), "--sin-evitar",
               "--ancho", "832", "--alto", "1216"]
        print(">>", a.raza, c)
        subprocess.run(cmd, cwd=RAIZ, check=False)


if __name__ == "__main__":
    main()
