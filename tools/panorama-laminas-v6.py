"""Tanda 6 del Panorama del Muro (2026-11-26). Nacho elige C1 y C3 de la tanda 5 (pintadas desde cero, el río cruza el pueblo
hasta el mar) y pide variantes con:
  - el Muro de la base de antes (pueblo en la bahía, V1 de la tanda 3), exactamente el mismo; si no sale, el de C1/C3;
  - un par de barcos de época navegando (veleros, pesqueros).
Dos variantes por cada una (se generan tres semillas y se enseñan las dos mejores).
Referencias: imagen 1 = C1 o C3 (composición); imagen 2 = la base (el Muro).

Uso (desde Erebo): py tools/panorama-laminas-v6.py [--solo c1|c3] [--seeds 101,211,307]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BASE = "assets/borradores/panorama-v3/panorama3-valle-bahia_flux.2-klein-4b_s101.jpg"
C = {"c1": "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s101.jpg",
     "c3": "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s307.jpg"}
PROMPT = ("Edit image 1. Keep from image 1 the framing and point of view, the starry night sky and the bitten moon crumbling into specks, "
          "the large mountain on the left, the open ocean in the centre reaching a flat horizon, the river that runs through the town and "
          "flows into the sea, the town with its warm lit windows reaching right up to the foot of the wall with no water between them, "
          "the dark rocky foreground and the ink and watercolor technique. "
          "Replace the wall on the right with the colossal wall from image 2: exactly the same massive weathered stone blocks, the same "
          "shape and colors, the same top bitten away and erased in places with stone fragments drifting up like dust, nothing standing on "
          "its crest. "
          "Add two small period sailing ships at sea, far out on the moonlit water: a single-masted fishing boat with a patched square sail "
          "and a larger two-masted medieval merchant cog, both drawn in the same ink and watercolor style, with a tiny lantern on board.")

ap = argparse.ArgumentParser()
ap.add_argument("--solo")
ap.add_argument("--seeds", default="101,211,307")
a = ap.parse_args()
for k, ref in C.items():
    if a.solo and k != a.solo:
        continue
    for s in a.seeds.split(","):
        print(f"\n== {k} · semilla {s}", flush=True)
        r = subprocess.run([sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama6-{k}", "--prompt", PROMPT,
                            "--modelo", "flux.2-klein-4b", "--seed", s, "--ancho", "1792", "--alto", "768", "--ref", ref, "--ref", BASE],
                           stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
