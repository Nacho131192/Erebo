"""Tanda 4 del Panorama del Muro (2026-11-26): Nacho elige el pueblo en la bahía (V1 de la tanda 3 = valle-bahia, semilla 101)
y pide variantes con el mismo encuadre, cielo y luna, pero:
  1. el Muro rehecho: que nada sobresalga de su cresta (había un bloque cuadrado, como una almenara fea, hacia el horizonte);
  2. el agua al otro lado: el pueblo pegado al pie del Muro y abierto al mar por el lado contrario.
Dos maneras de poner el mar (en el fondo del valle hacia el horizonte, o a la izquierda del pueblo), cuatro semillas cada una.

Uso (desde Erebo):  py tools/panorama-laminas-v4.py [--solo fondo|izquierda] [--seeds 101,211]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BASE = "assets/borradores/panorama-v3/panorama3-valle-bahia_flux.2-klein-4b_s101.jpg"

KEEP = ("Edit the reference image. Keep exactly the same framing and point of view, the starry night sky, the bitten moon crumbling into "
        "specks, the layered blue mountains on the left, the fog in the valley, the dark rocky foreground ridge, the indigo and ochre colors "
        "and the ink and watercolor technique with brush-pen linework and paper grain. Make only these changes:")
MURO = ("First, the colossal ancient wall on the right: its top must be one clean, continuous edge that slopes down towards the horizon, "
        "with nothing standing on top of it: remove the square block or small tower that sticks up from its crest where it meets the hills; "
        "no battlements, no turrets, no beacons. The only breaks in the top edge are the places where it is bitten away and erased, with "
        "stone fragments drifting up like dust.")
AGUA = {
 "fondo": ("Second, move the water: there is no water between the town and the wall any more; the town sits directly against the foot of "
           "the wall, and its other side opens onto the sea: the valley floor beyond the town becomes a calm bay of dark sea that stretches "
           "away towards the misty horizon between the mountains, with a small harbor, stone piers and moored fishing boats on the town's "
           "seaward edge and warm windows reflected in the water."),
 "izquierda": ("Second, move the water: there is no water between the town and the wall any more; the town sits directly against the foot "
               "of the wall, and on its left side, away from the wall, it opens onto the sea: a small harbor with stone piers, moored fishing "
               "boats and a lantern at the end of a pier, the dark sea spreading out to the left below the mountains and into the mist, warm "
               "windows reflected in the water."),
}

ap = argparse.ArgumentParser()
ap.add_argument("--solo", help="fondo o izquierda")
ap.add_argument("--seeds", default="101,211,307,409")
a = ap.parse_args()
for k, agua in AGUA.items():
    if a.solo and k != a.solo:
        continue
    for s in a.seeds.split(","):
        print(f"\n== bahia-{k} · semilla {s}", flush=True)
        r = subprocess.run([sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama4-bahia-{k}",
                            "--prompt", f"{KEEP} {MURO} {agua}", "--modelo", "flux.2-klein-4b", "--seed", s,
                            "--ancho", "1792", "--alto", "768", "--ref", BASE], stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
