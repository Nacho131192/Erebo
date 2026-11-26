"""Tanda 6, segunda pasada (2026-11-26). Con dos referencias, solo C3 semilla 101 tomó el Muro de la base.
  - c3b: parte de esa C3 buena (que ya tiene el Muro de la base) y solo cambia los barcos -> segunda variante de C3.
  - c1b: C1 con las referencias en orden inverso (imagen 1 = la base, que da el Muro; imagen 2 = C1, la composición).
Uso (desde Erebo): py tools/panorama-laminas-v6b.py [--solo c3b|c1b]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BASE = "assets/borradores/panorama-v3/panorama3-valle-bahia_flux.2-klein-4b_s101.jpg"
C1 = "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s101.jpg"
C3OK = "assets/pruebas/panorama6-c3_flux.2-klein-4b_s101.jpg"
BARCOS = ("two small period sailing ships at sea on the moonlit water: a single-masted fishing boat with a patched square sail and a "
          "two-masted medieval merchant cog, each with a tiny lantern on board, drawn in the same ink and watercolor style")
T = {
 "c3b": ([C3OK], ["211", "307", "409"],
         f"Edit the reference image. Keep absolutely everything exactly the same, especially the colossal wall on the right, the town, "
         f"the river, the ocean, the mountains, the sky and the moon. Only change the ships: replace them with {BARCOS}, in different "
         f"positions on the sea, one closer to the river mouth and one further out near the horizon."),
 "c1b": ([BASE, C1], ["101", "211", "307", "409"],
         f"Edit image 2. Keep from image 2 the framing, the starry sky and the bitten moon crumbling into specks, the large mountain on "
         f"the left, the open ocean reaching a flat horizon, the river that runs through the town into the sea, the town reaching right up "
         f"to the foot of the wall with no water between them, the dark rocky foreground and the ink and watercolor technique. Replace "
         f"the wall on the right of image 2 with the colossal wall from image 1: the same massive weathered stone blocks with small lit "
         f"windows, the same colors, the same crest bitten away and erased with stone fragments drifting up like dust, nothing standing on "
         f"top. Add {BARCOS}."),
}
ap = argparse.ArgumentParser()
ap.add_argument("--solo")
a = ap.parse_args()
for k, (refs, seeds, prompt) in T.items():
    if a.solo and k != a.solo:
        continue
    for s in seeds:
        print(f"\n== {k} · semilla {s}", flush=True)
        cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama6b-{k}", "--prompt", prompt,
               "--modelo", "flux.2-klein-4b", "--seed", s, "--ancho", "1792", "--alto", "768"]
        for r in refs:
            cmd += ["--ref", r]
        r = subprocess.run(cmd, stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
