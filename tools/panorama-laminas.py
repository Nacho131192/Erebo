"""Genera los bocetos de la lámina pintada del Panorama del Muro (ver docs/panorama-laminas.md).

Uso (desde la carpeta Erebo):  py tools/panorama-laminas.py [--solo oleo,acuarela] [--seeds 11,23]
Necesita POLLINATIONS_API_KEY. Cada boceto va a assets/pruebas/panorama-<estilo>-<composicion>_..._s<semilla>.jpg
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DOC = (RAIZ / "docs" / "panorama-laminas.md").read_text(encoding="utf-8")

bloques = re.findall(r"```\n(.*?)\n```", DOC, re.S)
COMP = {"diagonal": bloques[0].strip(), "frontal": bloques[1].strip()}
ESTILOS = {m[0]: m[2].strip() for m in re.findall(r"^\| (\w+) \| ([^|]+) \| ([^|]+) \|$", DOC, re.M) if m[0] != "Clave"}

TANDA = [(e, "diagonal", s) for e in ESTILOS for s in (11, 23)] + [("oleo", "frontal", 11), ("acuarela", "frontal", 11)]

ap = argparse.ArgumentParser()
ap.add_argument("--solo", help="estilos separados por comas")
ap.add_argument("--seeds", help="semillas separadas por comas (sustituyen a las de la tanda)")
ap.add_argument("--comp", choices=list(COMP), help="solo esta composición")
a = ap.parse_args()

tanda = TANDA
if a.solo:
    tanda = [t for t in tanda if t[0] in a.solo.split(",")]
if a.comp:
    tanda = [t for t in tanda if t[1] == a.comp]
if a.seeds:
    tanda = sorted({(e, c, int(s)) for e, c, _ in tanda for s in a.seeds.split(",")})

for estilo, comp, seed in tanda:
    prompt = f"{ESTILOS[estilo]} {COMP[comp]}"
    print(f"\n== {estilo} · {comp} · semilla {seed}", flush=True)
    r = subprocess.run([sys.executable, str(RAIZ / "tools" / "pollinations.py"), "imagen", f"panorama-{estilo}-{comp}",
                        "--prompt", prompt, "--modelo", "flux.2-klein-4b", "--seed", str(seed),
                        "--ancho", "1792", "--alto", "768"], stdin=subprocess.DEVNULL)
    if r.returncode:
        print(f"   falló ({r.returncode})", flush=True)
