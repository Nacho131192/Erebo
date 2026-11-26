"""Láminas del selector de misiones en tinta y acuarela (2026-11-26).
Mapa: Nano Banana Pro (google/gemini-3-pro-image) repinta la guía de composición (tools/mapa-misiones-guia.py)
con el estilo del Panorama del Muro, sin mover la geografía. Iconos: hojas de fotogramas (sprites) para animarlos.
Salida: assets/mapa-misiones/<clave>_s<semilla>.<ext> (+ .json con el prompt).
Uso: py tools/mapa-misiones-laminas.py --solo mapa-noche [--seeds 1,2] [--modelo X]
"""
import argparse, shutil, subprocess, sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
OUT = RAIZ / "assets/mapa-misiones"
GUIA = "assets/mapa-misiones/guia.png"            # con un círculo rojo en cada misión
PANO = "assets/web/panorama.jpg"                    # referencia de estilo
NB = "google/gemini-3-pro-image"

SITIOS = ("The six small red circles in image 1 only mark positions; never paint the circles. At each of them, from the bottom of "
  "the image to the top, paint a small landmark, small enough to leave room for a marker on top: "
  "(1, lowest) a tiny abandoned hamlet of five dark houses with no lights, its edges fading into bare paper as if being erased; "
  "(2, right, at the forest edge) a forest road broken by enormous twisted roots; "
  "(3, centre-left) a small village ringed by a wooden palisade, with tiny tents around it; "
  "(4, right, between mountains) a narrow rocky gorge with a path through it; "
  "(5, upper left) the half-buried ruin of an ancient temple of huge cyclopean stone blocks and broken columns, with a dark stairway going down (not an igloo, not a dome of ice); "
  "(6, top) a patch where the map itself is erased: bare white paper with ink lines dissolving into it and a faint violet stain. ")
GEO = ("Image 1 is a layout guide. Keep its geography exactly, in the same positions and sizes: the band of mountains across the "
  "upper half, the large lake on the left with the river running from it down to the bottom edge, the big forest on the right, the "
  "smaller woods on the left and bottom, the rolling hills, the dash-dot frontier line across the lower part, the little scattered "
  "houses near the bottom centre, the small town with towers at the bottom centre and the colossal wall running along the whole "
  "bottom edge. ")
ART = (" Draw the mountains as varied, organic, hand-drawn peaks of different sizes and shapes with ink hatching and painted shadows, never identical repeated triangles; forests as rich painted masses of tree crowns with depth; hills as soft brushed swells. Lots of painterly variation and hand-made imperfection, like a master illustrator's map.")
NO = ART + (" No text, no letters, no numbers, no labels, no compass rose, no cartouche, no frame, no border, no scale bar, no people. "
      "Full bleed: the painting covers the whole image edge to edge.")

T = {
 "mapa-noche": ([GUIA, PANO], (2752, 1536), GEO + SITIOS +
   "Repaint it as a hand-painted fantasy map in the exact technique and palette of image 2: loose black dip-pen ink linework over "
   "transparent watercolor washes, granulating indigo and night-blue pigment, moonlit pale highlights, warm ochre accents, "
   "cold-press paper texture visible. It is night: the whole map is bathed in deep indigo and blue-grey washes, mountains drawn "
   "as little ink peaks with slate shading, forests as clusters of small ink trees in dark teal, the lake and river catching "
   "silver moonlight, the town at the bottom with a few warm lit windows, the wall in pale grey stone blocks. The top of the map "
   "fades into a dark violet-indigo bloom. Seen from above like an old explorer's map, a premium illustrated board-game map." + NO),
 "mapa-pergamino": ([GUIA, PANO], (2752, 1536), GEO + SITIOS +
   "Repaint it as a hand-painted fantasy map in ink and watercolor, with the same brushwork and ink line quality as image 2 but on "
   "warm aged cream watercolor paper: sepia and black dip-pen ink linework, transparent muted washes (slate grey-blue mountains, "
   "deep sage and teal forests, soft blue lake and river, raw sienna hills), granulating pigment, blooms and backruns, a few "
   "coffee-coloured stains, cold-press paper grain visible, the edges of the paper darkening slightly. The top of the map fades into "
   "a cold indigo and violet wash. Seen from above like an old explorer's map, a premium illustrated board-game map." + NO),
}

D = "assets/mapa-misiones/"
T["noche-limpia"] = ([D+"mapa-noche_gemini-3-pro-image_s2.jpg"], (2752, 1536),
  "Edit this painting. Remove the small hand-written numbers 1, 2, 3, 4, 5 and 6 and paint the background over them so no trace "
  "remains. Change nothing else at all: same composition, same colours, same everything.")
BOC = ("Show the unfinished first stage of this exact same painting: only a faint, light graphite pencil underdrawing of every line "
  "of the map (same mountains, forests, lake, river, ruins, town and wall, in exactly the same positions and sizes) on bare "
  "warm cream cold-press watercolor paper, with a few very pale hints of the first diluted washes here and there. No ink, almost no "
  "colour, delicate and airy, like an artist's preparatory sketch. No text.")
T["boceto-noche"] = ([D+"noche-limpia_gemini-3-pro-image_s1.jpg"], (2752, 1536), BOC)
T["boceto-pergamino"] = ([D+"mapa-pergamino_gemini-3-pro-image_s3.jpg"], (2752, 1536), BOC)

# ---- iconos animados: hoja de 8 fotogramas (4 columnas x 2 filas), fondo blanco liso para recortarlos ----
HOJA = ("A sprite sheet of eight animation frames laid out in a perfectly regular grid of 4 columns and 2 rows, each frame centred in "
  "its own equal cell with generous empty margin, read left to right and top to bottom, forming one smooth seamless loop (frame 8 "
  "leads back into frame 1). Hand-painted with loose black dip-pen ink outlines and transparent watercolor washes, exactly the "
  "technique of image 1. The object is identical in every frame, same size, same position, same viewpoint (seen slightly from above, "
  "three-quarter view); only the animated part changes from frame to frame. Pure plain white background, no grid lines, no "
  "borders, no text, no numbers, no shadow on the ground beyond the object itself. ")
ICON = {
 "ico-hoguera": "The object: a small campfire of crossed logs inside a ring of rough stones. The animation: tall lively orange and amber flames with yellow cores dancing and flickering, a few sparks rising and changing between frames.",
 "ico-hoguera-viva": "The object: a small campfire of crossed logs inside a ring of rough stones. The animation: eerie violet and pale lilac flames with white cores dancing and flickering like a ghost fire, a few violet sparks rising and changing between frames.",
 "ico-hoguera-oro": "The object: a small campfire of crossed logs inside a ring of rough stones, burnt down. The animation: the logs glow with deep gold and orange embers that slowly pulse brighter and dimmer, tiny golden sparks drifting up, no tall flames.",
 "ico-ceniza": "The object: a cold dead campfire, charred grey logs and a mound of pale ash inside a ring of rough stones, painted in cool grey and blue-grey. The animation: a single thin wisp of grey smoke curling up from the ash and slowly drifting, its shape changing between frames.",
 "ico-estandarte": "The object: a tall wooden pole planted in a small pile of stones with a long swallow-tailed cloth banner hanging from a crossbar, the banner painted in ochre and burnt sienna. The animation: the banner waving in the night wind, its folds and tails rippling and changing between frames.",
 "ico-estandarte-roto": "The object: a tall wooden pole planted in a small pile of stones with a torn, faded grey-blue swallow-tailed banner hanging from a crossbar. The animation: the ragged banner barely stirring in a weak wind, slow small movements between frames.",
}
for k, v in ICON.items():
    T[k] = ([PANO], (2752, 1536), HOJA + v)
# ---- piezas de tinta para la columna y el mapa (fondo blanco) ----
PZ = " Pure plain white background, nothing else in the image, no text, no letters."
T["pz-rosa"] = ([PANO], (1536, 1536), "An elegant hand-drawn compass rose from an old fantasy explorer's map, eight points, drawn with a black dip pen and washed with transparent ochre and indigo watercolor, fine ornamental ring, a small north star on top, centred." + PZ)
T["pz-cartela"] = ([], (1376, 768), "An empty ornate cartographer's cartouche from an old fantasy map: a horizontal unrolled scroll banner with curling ends and small flourishes, black dip-pen ink lines with a soft ochre and cream watercolor wash inside, the centre left empty for writing, centred." + PZ)
T["pz-hoja"] = ([], (768, 1376), "A single tall page torn from an old travel journal, warm cream watercolor paper with softly torn deckled edges, faint ruled lines, a few pale ochre and grey stains and a small coffee ring near the corner, slightly curled, flat top-down view, centred." + PZ)
T["pz-tachon"] = ([], (1376, 384), "A single hand-drawn horizontal strike-through made with a dip pen in black ink, two quick slightly wavy overlapping strokes like crossing out a word in a journal, centred." + PZ)
T["pz-sello"] = ([PANO], (1536, 1536), "A small round stamp-like emblem drawn with a black dip pen: a crescent eclipse inside a thin double ring, with a light indigo watercolor wash, like a mark on an old map, centred." + PZ)

T["pz-niebla"] = ([], (1376, 768), "Soft drifting clouds of mist painted in watercolor, wet-in-wet, pale blue-grey and lavender-grey pigment with feathered blooms and soft hard-edged backruns, several separate cloud banks spread across the sheet, transparent and airy." + PZ)

ap = argparse.ArgumentParser(); ap.add_argument("--solo"); ap.add_argument("--seeds", default="1"); ap.add_argument("--modelo", default=NB)
a = ap.parse_args()
OUT.mkdir(parents=True, exist_ok=True)
for k, (refs, (w, h), p) in T.items():
    if a.solo and k not in a.solo.split(","):
        continue
    for s in a.seeds.split(","):
        cmd = [sys.executable, str(RAIZ / "tools/pollinations.py"), "imagen", f"mm-{k}", "--prompt", p, "--sin-evitar",
               "--modelo", a.modelo, "--seed", s, "--ancho", str(w), "--alto", str(h), "--permitir-pago"]
        for r in refs:
            cmd += ["--ref", r]
        r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", cwd=RAIZ, stdin=subprocess.DEVNULL)
        line = next((l for l in r.stdout.splitlines() if l.startswith("Guardada:")), None)
        if not line:
            print(k, s, "ERROR", (r.stdout + r.stderr)[-600:], flush=True); continue
        src = RAIZ / line.split("Guardada:")[1].split("(")[0].strip()
        corto = a.modelo.split("/")[-1]
        dst = OUT / f"{k}_{corto}_s{s}{src.suffix}"
        shutil.move(str(src), dst)
        j = src.with_suffix(".json")
        if j.exists(): shutil.move(str(j), dst.with_suffix(".json"))
        print("ok", dst.name, line.split("(")[-1], flush=True)
