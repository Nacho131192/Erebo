"""Tanda 3 del Panorama del Muro (2026-11-26), tras las elecciones de Nacho en la galería de la tanda 2.

1. Variaciones de V1 (valle, semilla 101): mismo encuadre, cielo y luna, Muro y tramos borrados, montañas y niebla,
   primer plano, colores y trazo; solo cambia el pueblo. Se edita la propia V1 como referencia.
2. Mezclas de la diagonal: lo que marcó de la 4 (casi todo), D1 (pueblo, primer plano, cielo, encuadre), D6 (el Muro).

Uso (desde Erebo):  py tools/panorama-laminas-v3.py [--solo valle|mezcla]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
B1, B2 = "assets/borradores/panorama-v1/", "assets/borradores/panorama-v2/"
V1 = B2 + "panorama2-acuarela-valle_flux.2-klein-4b_s101.jpg"
O4 = B1 + "panorama-acuarela-diagonal_flux.2-klein-4b_s23.jpg"
D1 = B2 + "panorama2-acuarela-diagonal_flux.2-klein-4b_s31.jpg"
D6 = B2 + "panorama2-acuarela-diagonal_flux.2-klein-4b_s113.jpg"

KEEP = ("Edit the reference image. Keep everything else exactly the same: the framing and point of view, the starry night sky, "
        "the bitten moon crumbling into specks, the colossal ancient wall on the right with its erased gaps and floating stone fragments, "
        "the layered blue mountains and the fog filling the valley, the dark rocky foreground ridge, the indigo and ochre colors and the "
        "ink and watercolor technique with its brush-pen linework and paper grain. Only redraw the town in the valley:")
PUEBLOS = {
 "bahia": "the valley opens onto a small dark bay at the foot of the wall, and the town crowds around a little harbor with stone piers, "
          "moored fishing boats and a lantern at the end of the pier, warm lit windows reflected in the water, thin chimney smoke.",
 "fortaleza": "a compact fortified town with its own low ring wall and gate, a squat round keep and a few towers, crowded roofs inside, "
              "built right against the foot of the colossal wall, warm lit windows and thin chimney smoke.",
 "terrazas": "the town climbs the slope in steep terraces up against the foot of the colossal wall, houses stacked on top of each other, "
             "stone stairs zigzagging between them, many warm lit windows and several plumes of chimney smoke.",
 "plaza": "a smaller, looser town scattered along a winding road, with a central square, a tall bell tower and a lit main street, "
          "a few houses spreading into the fog, warm lit windows and thin chimney smoke.",
}
MEZCLA = ("Combine the three reference images into one new ink and watercolor painting of the same place. From image 1 take the overall "
          "framing, the sky and the bitten moon crumbling into specks, the colors and the ink linework. From image 2 take the town at the foot "
          "of the wall and the grassy foreground. From image 3 take the colossal wall: taller and more massive, rising out of the left edge and "
          "running in perspective to the right, with its top bitten away and erased in places and stone fragments drifting up like dust. "
          "Dark pine forests and layered blue mountains with mist on the right. The bottom fifth of the image is a dark, empty, gently rolling "
          "foreground ridge with short grass and a few rocks, with no buildings or figures on it. No people.")

GRANDE = ("The new town is clearly different from the reference: much larger and more detailed, filling the lower centre of the valley "
          "right up to the foot of the colossal wall, its roofs and lights easy to read at a glance.")
TANDA = [("valle-" + k, [V1], f"{KEEP} {v}", s) for k, v in PUEBLOS.items() for s in (101, 211)] + \
        [("valle-" + k, [V1], f"{KEEP} {v} {GRANDE}", s) for k, v in PUEBLOS.items() for s in (307, 409)] + \
        [("mezcla", [O4, D1, D6], MEZCLA, s) for s in (101, 211, 307, 409)]

ap = argparse.ArgumentParser()
ap.add_argument("--solo", help="valle o mezcla")
ap.add_argument("--seeds", help="solo estas semillas, separadas por comas")
a = ap.parse_args()
for nombre, refs, prompt, s in TANDA:
    if a.solo and not nombre.startswith(a.solo):
        continue
    if a.seeds and str(s) not in a.seeds.split(","):
        continue
    print(f"\n== {nombre} · semilla {s}", flush=True)
    cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama3-{nombre}", "--prompt", prompt,
           "--modelo", "flux.2-klein-4b", "--seed", str(s), "--ancho", "1792", "--alto", "768"]
    for r in refs:
        cmd += ["--ref", r]
    r = subprocess.run(cmd, stdin=subprocess.DEVNULL, cwd=RAIZ)
    if r.returncode:
        print(f"   falló ({r.returncode})", flush=True)
