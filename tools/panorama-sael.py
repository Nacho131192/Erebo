"""Láminas de la Ruptura de Sael (las aguas) para la campaña correspondiente (2026-11-26).
Estilo de la lámina elegida del Panorama del Muro: tinta y acuarela. Salida: assets/sael/ (borradores).
Lore (docs/rupturas.md): el agua olvida la luna y la gravedad: mareas a deshora, lluvia que sube, remolinos que no se apagan y niebla que susurra.
Uso:  py tools/panorama-sael.py [--solo islas|remolino|lluvia|niebla|marea] [--seeds 11,22]
"""
import argparse, shutil, subprocess, sys
from pathlib import Path
RAIZ = Path(__file__).resolve().parent.parent
ESTILO = ("Ink and watercolor illustration in the style of a fantasy cartographer's sketchbook: thick uneven black India-ink outlines with a dip-pen look, "
          "loose wet-in-wet indigo and deep teal washes, granulating pigment, warm ochre touches only for lit windows and lanterns, visible paper grain, "
          "wide cinematic panoramic landscape at night. No people, no text, no frame. The bottom fifth is a dark, empty, rocky shore foreground with a few tide pools, with no buildings or figures on it.")
ESC = {
 "islas": "An archipelago of dark rocky islands scattered across a vast calm ocean, seen from a low rocky shore. On the farthest island on the right, small and far away, a tiny stone fortress with a squat tower and a few warm lit windows on a cliff. Between the islands a slow whirlpool turns in the dark water, and thin threads of rain rise upward from the sea into the sky. A low band of mist lies on the water. High in the sky a pale full moon, while the sea beneath it looks wrong: the waves lean away from the moon and the tide lines are stranded high on the rocks. Starry sky.",
 "remolino": "A huge slow whirlpool in the open ocean at night between two dark rocky islands, its spiral of black water that never stops, a broken ship mast and wreckage circling at its edge, drops of water floating up out of the spiral into the air. A small fortress with warm lit windows on a distant cliff on the far right. Pale moon and stars above.",
 "lluvia": "The rain rises: from a dark sea, countless drops and threads of water rise upward into the starry night sky instead of falling, glittering in the moonlight. A lone small sailing ship with a pale sail on the water below, a chain of dark rocky islands behind it, and a tiny distant stone fortress with warm lit windows on the farthest island. Pale full moon.",
 "niebla": "Thick pale mist lies on a black sea between rocky islands, curling into whispering spirals like voices; out of the mist a small lantern-lit fishing boat, and far away on an island a tiny stone fortress with a few warm lit windows. Cold teal and indigo palette, faint pale moon behind the mist.",
 "marea": "The tide has come at the wrong hour: the sea has pulled back from a dark rocky island leaving bare wet reefs and stranded boats, while far out a great wall of water stands leaning against the sky like a frozen wave, lit by the moon. On the island, small and distant, a stone fortress with warm lit windows on the cliff top.",
}
SEM = {"islas": (11, 22, 33, 44), "remolino": (11, 22), "lluvia": (11, 22), "niebla": (11, 22), "marea": (11, 22)}
ap = argparse.ArgumentParser(); ap.add_argument("--solo"); ap.add_argument("--seeds"); a = ap.parse_args()
dest = RAIZ / "assets" / "sael"; dest.mkdir(parents=True, exist_ok=True)
for k, txt in ESC.items():
    if a.solo and k != a.solo: continue
    for s in (int(x) for x in a.seeds.split(",")) if a.seeds else SEM[k]:
        print(f"== {k} · {s}", flush=True)
        r = subprocess.run([sys.executable, str(RAIZ/"tools"/"pollinations.py"), "imagen", f"sael-{k}", "--prompt", f"{ESTILO} {txt}",
                            "--modelo", "flux.2-klein-4b", "--seed", str(s), "--ancho", "1792", "--alto", "768"], capture_output=True, text=True, encoding="utf-8")
        print(r.stdout.strip().splitlines()[-1] if r.stdout.strip() else r.stderr[-300:])
