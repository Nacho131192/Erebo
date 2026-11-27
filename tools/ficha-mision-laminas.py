"""Láminas a tinta y acuarela para la maqueta de la ficha de misión v5 (2026-11-27).
Modelo barato de Pollinations (flux.2-klein-4b, 0,005 pollen por imagen). Nunca Nano Banana.
Se generan sobre fondo liso (blanco o negro) y luego tools/tinta-alfa.ps1 las deja con transparencia.
Salida: assets/ficha-mision/<nombre>_s<semilla>.jpg (+ .json con el prompt).
Uso: py tools/ficha-mision-laminas.py [--solo nombre] [--seeds 11,22]
"""
import argparse, shutil, subprocess, sys
from pathlib import Path
RAIZ = Path(__file__).resolve().parent.parent
OUT = RAIZ / "assets" / "ficha-mision"
MODELO = "flux.2-klein-4b"

NO = " No text, no letters, no frame, no border, no drop shadow, nothing else in the image."
ESTILO = (" Ink and watercolor illustration for a dark fantasy roleplaying game: loose confident dip-pen ink contours,"
          " transparent indigo, sepia and umber watercolor washes, granulating pigment, soft blooms and bleeding edges,"
          " cold-press paper texture.")
SOMBRA = (" The figure is painted as a shadow: almost entirely a deep indigo-black wash, the face hidden in darkness,"
          " only the outline in ink and a few lighter wet-in-wet blooms inside the cloth, full body standing, centered,"
          " isolated on plain white paper.")

# nombre: (prompt, ancho, alto, semillas, referencias)
T = {
 "heroe-guerrero": ("A warrior with a round shield on his left arm and a straight sword held point down, a short cloak and heavy boots." + SOMBRA + ESTILO + NO, 512, 768, (101, 202), []),
 "heroe-maga": ("A female mage with a wide brimmed pointed hat and a long staff topped by a small crystal, a long flowing robe." + SOMBRA + ESTILO + NO, 512, 768, (101, 202), []),
 "heroe-picaro": ("A rogue in a deep hood and short cape, slightly crouched, a dagger held low in each hand." + SOMBRA + ESTILO + NO, 512, 768, (101, 202), []),
 "heroe-arquero": ("An archer in a hood holding a tall longbow at his side, a quiver of arrows on the back." + SOMBRA + ESTILO + NO, 512, 768, (101, 202), []),
 "jefe-heraldo": ("The same hooded Herald from the reference image, now painted full body as a towering dark shadow silhouette:"
                  " horned shoulder plates, a ragged cloak that dissolves into dripping wisps at the bottom, a long curved scythe held in one hand."
                  " Only the small cracked clock on the chest and two tiny eyes under the hood glow faint pale gold; everything else is deep indigo-black wash."
                  " Full body, centered, isolated on plain white paper." + ESTILO + NO, 768, 1024, (303, 404, 505), ["assets/web/heraldo.jpg"]),
 "punal": ("A single realistic medieval dagger seen exactly from the side, lying perfectly horizontal with the point to the right:"
           " a double-edged steel blade with a central fuller, a small curved brass crossguard, a grip wrapped in dark leather cord,"
           " a round brass pommel. Precise dip-pen ink contours, cool grey and blue-grey watercolor on the steel with a bright bare-paper"
           " highlight along the edge, warm umber and ochre on the brass and leather. Isolated on plain white paper." + ESTILO + NO, 1024, 320, (11, 22, 33), []),
 "sello-lacre": ("A single round dark red wax seal seen from above, embossed with a small crest of a dagger crossing a closed eye, thick irregular"
                 " edges with a few drips, a short torn ribbon underneath, painted with precise dip-pen ink contours and rich carmine and"
                 " oxblood watercolor with a bright bare-paper highlight, isolated on plain white paper." + ESTILO + NO, 512, 512, (11, 22), []),
 "papel-cartel": ("A single sheet of old handmade laid paper used as a notice poster, cream and pale ochre, rough torn edges on all four sides,"
                  " one corner torn away, faint sepia and tea watercolor stains near the edges, two small pin holes and soft creases,"
                  " flat top-down photo, the sheet centered on a pure solid black background." + NO, 768, 1024, (11, 22), []),
 "papel-contrato": ("A parchment contract unfolded flat on a table, with visible fold creases making a cross, warm ochre and sienna watercolor stains,"
                    " deckled uneven edges, slightly darker borders, flat top-down photo, centered on a pure solid black background." + NO, 768, 1024, (11, 22), []),
 "papel-diario": ("An open travel journal lying flat, two cream pages with a soft dark gutter in the middle, small watercolor stains and a few"
                  " pencil guide lines, flat top-down photo, centered on a pure solid black background." + NO, 1024, 704, (11, 22), []),
 "vineta-pueblo": ("A small empty village of stone houses with steep roofs at the foot of a colossal ancient wall, the doors left open, no people,"
                   " night with pale mist between the houses, painted as a vignette whose edges fade softly into bare white paper,"
                   " in the same ink and watercolor style and night palette as the reference." + ESTILO + NO, 1024, 640, (11, 22), ["assets/web/panorama.jpg"]),
}

ap = argparse.ArgumentParser(); ap.add_argument("--solo"); ap.add_argument("--seeds"); a = ap.parse_args()
OUT.mkdir(parents=True, exist_ok=True)
for k, (p, w, h, seeds, refs) in T.items():
    if a.solo and k != a.solo: continue
    for s in ([int(x) for x in a.seeds.split(",")] if a.seeds else seeds):
        dst = OUT / f"{k}_s{s}.jpg"
        if dst.exists() and not a.seeds: print("ya está", dst.name); continue
        cmd = [sys.executable, str(RAIZ/"tools"/"pollinations.py"), "imagen", f"ficha-{k}", "--prompt", p, "--sin-evitar",
               "--modelo", MODELO, "--seed", str(s), "--ancho", str(w), "--alto", str(h)]
        for r in refs: cmd += ["--ref", str(RAIZ / r)]
        r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", cwd=RAIZ)
        line = next((l for l in r.stdout.splitlines() if l.startswith("Guardada:")), None)
        if not line: print(k, s, "ERROR", (r.stdout + r.stderr)[-400:], flush=True); continue
        src = RAIZ / line.split("Guardada:")[1].split("(")[0].strip()
        shutil.move(str(src), dst)
        j = src.with_suffix(".json")
        if j.exists(): shutil.move(str(j), dst.with_suffix(".json"))
        print("ok", dst.name, flush=True)
