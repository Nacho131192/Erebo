"""Tanda 4, segunda pasada (2026-11-26). Parte de las variantes que ya tienen el mar a la izquierda (I4 = izquierda s409, I2 = izquierda s211):
quita el canal de agua que seguía entre el pueblo y el Muro y devuelve al Muro su sillería de bloques colosales (en la primera pasada
quedó como un acantilado). Uso (desde Erebo): py tools/panorama-laminas-v4b.py
"""
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
P = "assets/pruebas/"
BASES = {"i4": (P + "panorama4-bahia-izquierda_flux.2-klein-4b_s409.jpg", ["101", "211", "307", "409"]),
         "i2": (P + "panorama4-bahia-izquierda_flux.2-klein-4b_s211.jpg", ["101", "211"])}
PROMPT = ("Edit the reference image. Keep exactly the same framing and point of view, the starry night sky, the bitten moon crumbling into "
          "specks, the mountains and fog on the left, the sea, harbor, piers, boats and lantern on the left side of the town, the dark rocky "
          "foreground ridge, the colors and the ink and watercolor technique. Make only these changes: "
          "1) There is no water at all between the town and the wall: the narrow channel next to the wall becomes land, and the houses and "
          "lit windows of the town extend right up to the foot of the wall. "
          "2) The wall on the right is not a natural cliff: it is an immense ancient wall built of colossal fitted stone blocks with clearly "
          "drawn joints, like ancient masonry, its top one clean continuous edge with nothing standing on it, broken only where it is bitten "
          "away and erased, with stone fragments drifting up like dust.")
for k, (ref, seeds) in BASES.items():
    for s in seeds:
        print(f"\n== {k} · semilla {s}", flush=True)
        r = subprocess.run([sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama4b-bahia-{k}", "--prompt", PROMPT,
                            "--modelo", "flux.2-klein-4b", "--seed", s, "--ancho", "1792", "--alto", "768", "--ref", ref],
                           stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
