"""Tanda 7 (final) del Panorama del Muro (2026-11-26). Nacho pide una mezcla de tres láminas:
  - la escena completa de C3 (panorama5-mar-cero s307), con su río;
  - el Muro de C1 (panorama5-mar-cero s101);
  - los barcos de R4 (panorama6-c1 s503).
Camino «modelo»: tres referencias. El montaje a mano está en tools/panorama-montaje.ps1 y su pasada de unificación, en --solo unificar.
Uso (desde Erebo): py tools/panorama-laminas-v7.py [--solo modelo|unificar]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
C3 = "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s307.jpg"
C1 = "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s101.jpg"
R4 = "assets/borradores/panorama-v6/panorama6-c1_flux.2-klein-4b_s503.jpg"
MONTAJE = "assets/pruebas/panorama7-montaje.jpg"
T = {
 "modelo": ([C3, C1, R4], ["101", "211", "307", "409"],
   "Edit image 1. Keep everything from image 1 exactly: the framing, the starry sky and the bitten moon, the mountain on the left, the "
   "open ocean reaching a flat horizon, the river that runs between the two halves of the town and flows into the sea, the town and its "
   "warm lit windows, the dark rocky foreground and the ink and watercolor technique. Make two changes. First, replace the wall on the "
   "right with the colossal wall from image 2: the same huge pale grey fitted stone blocks with a heavy coping along the top, the same "
   "perspective rising towards the top-right corner, the same bitten and erased crest with stone fragments drifting up, and the same "
   "boulders at its foot. Second, add the two sailing ships from image 3 on the moonlit sea, in the same positions as in image 3: a small "
   "single-masted boat with a pale sail on the left and a larger two-masted cog further out on the right."),
 "unificar": ([MONTAJE], ["101", "211"],
   "Keep this image exactly as it is: the same composition, the same wall, the same ships, the same town, river, sea, sky and moon, in "
   "the same positions and sizes. Only repaint it lightly so that everything looks like one single coherent ink and watercolor painting, "
   "smoothing any visible seams between parts, without adding or removing anything."),
}
ap = argparse.ArgumentParser()
ap.add_argument("--solo")
a = ap.parse_args()
for k, (refs, seeds, prompt) in T.items():
    if a.solo and k != a.solo:
        continue
    for s in seeds:
        print(f"\n== {k} · semilla {s}", flush=True)
        cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama7-{k}", "--prompt", prompt,
               "--modelo", "flux.2-klein-4b", "--seed", s, "--ancho", "1792", "--alto", "768"]
        for r in refs:
            cmd += ["--ref", r]
        r = subprocess.run(cmd, stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
