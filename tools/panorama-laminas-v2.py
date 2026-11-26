"""Tanda 2 del Panorama del Muro: solo tinta y acuarela, a partir de las láminas 3, 4 y 12 de la tanda 1
(elegidas por Nacho el 2026-11-26). Prompts y criterio en docs/panorama-laminas.md, apartado «Tanda 2».

Uso (desde la carpeta Erebo):  py tools/panorama-laminas-v2.py [--solo diagonal,frontal,curva,valle,niebla]
Las referencias se suben a media.pollinations.ai (enlace público no listado, caduca en 30 días).
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
B = "assets/borradores/panorama-v1/"
R3, R4, R12 = B + "panorama-acuarela-diagonal_flux.2-klein-4b_s11.jpg", B + "panorama-acuarela-diagonal_flux.2-klein-4b_s23.jpg", B + "panorama-acuarela-frontal_flux.2-klein-4b_s11.jpg"

ESTILO = ("Ink and watercolor illustration: confident brush-pen linework, loose wet-in-wet indigo washes for the sky and the mist, "
          "granulating pigment texture, warm ochre touches for the windows, visible paper grain. Like a page from the sketchbook of a fantasy cartographer.")
SUELO = ("The bottom fifth of the image is a dark, empty, gently rolling foreground ridge with short grass and a few rocks, "
         "with no buildings, towers or figures on it. No people.")
LUNA = "High in the sky, a pale full moon with a chunk missing from its lower-left edge, crumbling into specks. Clear starry sky."
MURO = "an immense ancient wall of colossal smooth stone blocks that nobody built"
VAR = "Same painting style, palette and mood as the reference images, but a new and different painting of the same place."
SOLO_ESTILO = "Use the reference image only for the painting style, palette and mood; the composition is completely new."

T = {
 "diagonal": ([R3, R4], f"{VAR} Wide panoramic night landscape seen from a low grassy ridge. On the left, close to the viewer, {MURO} rises far above everything and runs in steep perspective across the image, getting smaller and smaller until it disappears into the mist on the far right horizon. In three places the top of the wall is missing, as if bitten away and erased, with small fragments of stone drifting up into the air like dust. At its foot, on the left half, a small fortified town with crowded roofs, a squat round keep, warm lit windows and thin chimney smoke. Dark pine forests and layered blue mountain ridges in the distance. {LUNA} {SUELO}", [31, 47, 59, 73]),
 "frontal": ([R12], f"{VAR} Wide panoramic night landscape seen from a low grassy ridge. In the middle distance {MURO} runs straight across the whole width of the image, parallel to the viewer, far taller than the mountains behind it. In the center a large section of its top is missing, as if bitten away and erased, with fragments of stone drifting up into the air like dust; two smaller missing bites further along. At its foot, on the left, a small fortified town with crowded roofs, a squat keep, warm lit windows and thin chimney smoke. Dark pine forests in front of the wall. {LUNA} {SUELO}", [31, 47, 59, 73]),
 "curva": ([R3], f"{SOLO_ESTILO} Wide panoramic night landscape seen from a low grassy ridge. {MURO[0].upper()}{MURO[1:]} sweeps in a vast curve around a dark valley, like the rim of a bowl, from the left foreground to the far right distance where it fades into mist. Its top is missing in a few places, as if erased, with stone fragments drifting up like dust. A small fortified town with warm lit windows sits at the foot of the wall on the left. Pine forests fill the valley. {LUNA} {SUELO}", [31, 47]),
 "valle": ([R3], f"{SOLO_ESTILO} Wide panoramic night landscape seen from high on a mountain ridge, looking down into a long valley. Far below, a small fortified town with warm lit windows sits at the foot of {MURO}, clearly visible and enormous even from this height, which runs along the valley floor into the distance until it vanishes in the mist; its top is missing in a few places, as if erased, with stone fragments drifting up like dust. Layers of blue mountains and fog. {LUNA} The bottom fifth of the image is the dark, empty crest of the ridge we stand on, with short grass and a few rocks, with no buildings, towers or figures on it. No people.", [31, 47]),
 "niebla": ([R4], f"{VAR} Wide panoramic night landscape seen from a low grassy ridge, with thick fog rolling through the valley. On the left {MURO} rises out of the fog and runs in perspective to the right until it is swallowed by mist and low clouds; its top is missing in a few places, as if erased, with stone fragments drifting up like dust. At its foot a small fortified town glows warmly through the fog. Only the tops of the pine trees show above the mist. {LUNA} {SUELO}", [31, 47]),
}

ap = argparse.ArgumentParser()
ap.add_argument("--solo", help="composiciones separadas por comas")
ap.add_argument("--sinref", action="store_true", help="sin imágenes de referencia (más variedad de encuadre)")
ap.add_argument("--seeds", help="semillas separadas por comas (sustituyen a las de la tanda)")
a = ap.parse_args()
for k, (refs, prompt, seeds) in T.items():
    if a.solo and k not in a.solo.split(","):
        continue
    if a.sinref:
        refs = []
        prompt = prompt.replace(VAR + " ", "").replace(SOLO_ESTILO + " ", "")
    if a.seeds:
        seeds = [int(x) for x in a.seeds.split(",")]
    for s in seeds:
        print(f"\n== {k} · semilla {s}", flush=True)
        cmd = [sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama2-acuarela-{k}",
               "--prompt", f"{ESTILO} {prompt}", "--modelo", "flux.2-klein-4b", "--seed", str(s), "--ancho", "1792", "--alto", "768"]
        for r in refs:
            cmd += ["--ref", r]
        r = subprocess.run(cmd, stdin=subprocess.DEVNULL, cwd=RAIZ)
        if r.returncode:
            print(f"   falló ({r.returncode})", flush=True)
