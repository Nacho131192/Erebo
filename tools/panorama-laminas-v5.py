"""Tanda 5 del Panorama del Muro (2026-11-26). Petición de Nacho sobre el pueblo en la bahía:
  - entre el pueblo y el Muro NO hay agua: casas hasta el pie del Muro;
  - desde el pueblo hacia el fondo, en el centro, no hay montañas: se abre el océano hasta el horizonte;
  - se quedan la primera montaña de la izquierda y unas cuantas a la derecha;
  - un río sale del pueblo y se abre al mar.
Dos caminos: «edit» edita la I4.3 (la única sin agua junto al Muro) y «cero» pinta desde cero con la misma técnica.

Uso (desde Erebo): py tools/panorama-laminas-v5.py [--solo edit|cero] [--seeds 101,211]
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
I43 = "assets/borradores/panorama-v4/panorama4b-bahia-i4_flux.2-klein-4b_s307.jpg"
ESTILO = ("Ink and watercolor illustration: confident brush-pen linework, loose wet-in-wet indigo washes for the sky and the mist, "
          "granulating pigment texture, warm ochre touches for the windows, visible paper grain. Like a page from the sketchbook of a fantasy cartographer.")
DISPOSICION = ("Layout, from left to right: on the far left, one large mountain slope with fog on it. In the centre of the image there are NO "
               "mountains in the distance at all: the valley opens onto the open ocean, a wide calm sea that fills the centre all the way to a flat, "
               "straight horizon line under the night sky, with moonlight glittering on the water. A river starts at the town and winds down the "
               "middle of the valley, widening into an estuary that flows out into the ocean. On the right, a few hills next to the wall. "
               "The town sits at the foot of the wall and fills the ground right up against its base: houses, roofs and warm lit windows touch "
               "the wall, and there is absolutely no water, no canal and no river between the town and the wall.")
MURO = ("The colossal ancient wall on the right is built of enormous fitted stone blocks with clearly drawn joints, its top one clean continuous "
        "edge with nothing standing on it, broken only where it is bitten away and erased, with stone fragments drifting up like dust.")
T = {
 "edit": ([I43], f"Edit the reference image. Keep the same framing and point of view, the starry sky, the bitten moon crumbling into specks, the "
                 f"large mountain on the far left, the dark rocky foreground ridge, the colors and the ink and watercolor technique. Redraw the rest "
                 f"following this layout. {DISPOSICION} {MURO}"),
 "cero": ([], f"{ESTILO} Wide panoramic night landscape seen from high on a dark rocky ridge, looking down a valley towards the sea. {DISPOSICION} "
              f"{MURO} High in the sky on the left, a pale moon with a big chunk bitten out of it, crumbling into specks. Starry sky. "
              f"The bottom fifth of the image is the dark, empty crest of the ridge we stand on, with short grass and a few rocks, with no "
              f"buildings or figures on it. No people."),
}
ap = argparse.ArgumentParser()
ap.add_argument("--solo")
ap.add_argument("--seeds", default="101,211,307,409")
a = ap.parse_args()
for k, (refs, prompt) in T.items():
    if a.solo and k != a.solo:
        continue
    for s in a.seeds.split(","):
        print(f"\n== {k} · semilla {s}", flush=True)
        cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama5-mar-{k}", "--prompt", prompt,
               "--modelo", "flux.2-klein-4b", "--seed", s, "--ancho", "1792", "--alto", "768"]
        for r in refs:
            cmd += ["--ref", r]
        r = subprocess.run(cmd, stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
