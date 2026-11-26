"""Texturas a tinta y acuarela para la maqueta de la columna de campaña (2026-11-26).
Se generan sobre fondo liso (blanco o negro) y luego tools/tinta-alfa.ps1 las deja con transparencia.
Salida: assets/ui-tinta/<nombre>_s<semilla>.jpg (+ .json con el prompt).
Uso: py tools/columna-texturas.py [--solo nombre] [--seeds 11,22]
"""
import argparse, json, shutil, subprocess, sys
from pathlib import Path
RAIZ = Path(__file__).resolve().parent.parent
OUT = RAIZ / "assets" / "ui-tinta"
NO = " No text, no letters, no frame, no border, no shadow, nothing else in the image."
T = {
 "papel": ("A single loose sheet of cold-press watercolor paper, cream coloured, with softly torn deckled edges on all four sides, a few very faint pale ochre and grey watercolor stains near the edges and a faint pencil guideline, flat top-down photo, the sheet floating centered on a pure solid black background." + NO, 768, 1152),
 "aguada": ("A large vertical blot of dark indigo and night-blue watercolor wash painted on white paper, wet-in-wet, granulating pigment, soft blooms and backruns inside, darker hard edges where the pigment pooled, irregular organic outline, the blot fills most of the sheet and fades out to the right. Pure plain white background around it." + NO, 768, 1152),
 "trazo": ("A single bold horizontal brush stroke of warm ochre and burnt sienna watercolor on white paper, loaded brush at the left, dry-brush streaks and broken bristle marks at the right end, slightly darker pigment along its edges. Centered on a pure plain white background." + NO, 1024, 384),
 "cartela": ("An ornate empty cartographer's cartouche frame from an old fantasy map, drawn only with black dip-pen ink lines: rolled scroll ends, curling flourishes, a small compass star on top, the center completely empty. Pure plain white background, black ink only." + NO, 1024, 640),
 "cinta": ("An empty ribbon banner with folded ends, drawn with black ink outlines and filled with a warm ochre watercolor wash, slightly wavy, horizontal, centered on a pure plain white background." + NO, 1024, 384),
 "floron": ("A thin elegant horizontal calligraphic flourish divider drawn with a dip pen in black ink, symmetrical swirls with a small diamond in the center, on a pure plain white background, black ink only." + NO, 1024, 256),
 "mancha": ("A soft horizontal bloom of watercolor on white paper: deep teal and indigo pigment bleeding outward with feathered edges and a few granulating specks, wider than tall, transparent and light at the edges. Pure plain white background." + NO, 1024, 512),
 "salpicadura": ("A few small splatters and drops of black India ink flicked from a brush, with tiny specks, on a pure plain white background." + NO, 768, 384),
 "aguadaborde": ("A dark indigo and night-blue watercolor wash painted on white paper that starts beyond the left edge of the paper and covers the left two thirds, wet-in-wet with granulating pigment and soft blooms, its right side breaking up into an irregular bleeding edge with feathered backruns and a few drips, fading to bare white paper on the right. Pure plain white paper elsewhere." + NO, 1024, 1024),
 "aguadasael": ("A dark indigo and deep sea-blue watercolor wash painted on white paper that starts beyond the left edge of the paper and covers the left half, very wet, with long horizontal tide-like streaks and pigment pulled sideways like water flowing, a few tiny bubbles of bloom and drops, its right side breaking into soft wave-shaped edges and thin runs of pigment reaching out horizontally, fading to bare white paper on the right. Pure plain white paper elsewhere." + NO, 1024, 1024),
 "aguadasael2": ("A dark indigo watercolor wash painted on white paper that starts beyond the left edge and covers the left half, wet-in-wet with salt texture speckles like sea foam, a large round bloom near the middle edge like a whirlpool and curling backruns, the right edge ragged and spattered with drops, fading to bare white paper on the right. Pure plain white paper elsewhere." + NO, 1024, 1024),
 "pinc-aguada": ("A single horizontal band of transparent raw sienna and yellow ochre watercolor laid with one wide flat brush on white cold-press paper, pale and luminous, granulating pigment, a darker hard edge where the pigment pooled along the bottom, soft uneven ends, slightly irregular height. Pure plain white paper around it." + NO, 1024, 320),
 "pinc-contorno": ("A single horizontal band of muted ochre watercolor wash on white paper, with a thin loose black dip-pen ink line drawn along its top and bottom edges like an ink-and-wash illustration, the ink line not perfectly following the wash, a few small ink flicks at the ends. Pure plain white paper around it." + NO, 1024, 320),
 "pinc-seca": ("A single horizontal stroke made with a half-dry flat brush in diluted warm umber and dull ochre watercolor, broken and textured by the paper grain, transparent, quiet and muted, tapering at the right end. Pure plain white paper around it." + NO, 1024, 320),
 "pinc-mancha": ("A soft horizontal pool of dull gold ochre watercolor on white paper, wet-in-wet with a gentle bloom and a slightly darker feathered rim, rounded irregular ends, low saturation, like a wash used to highlight a word on an old map. Pure plain white paper around it." + NO, 1024, 320),
 "circulo": ("A single hand-drawn circle made with one confident stroke of a dip pen in black ink, slightly uneven thickness, the end overlapping the start a little, centered on a pure plain white background, black ink only." + NO, 512, 512),
 "recuadro": ("A hand-drawn rectangular frame made with a dip pen in black ink, a double line with the corners slightly overshooting, wide and short like a button, centered on a pure plain white background, black ink only." + NO, 1024, 320),
 "subrayado": ("A single hand-drawn horizontal underline stroke made with a dip pen in black ink, slightly wavy, thicker in the middle and tapering at both ends, on a pure plain white background, black ink only." + NO, 1024, 256),
}
SEM = {"papel": (11, 22), "aguada": (11, 22), "trazo": (11, 22, 33), "cartela": (11, 22), "cinta": (11, 22), "floron": (11, 22), "mancha": (11, 22), "salpicadura": (11,), "aguadaborde": (33, 44), "aguadasael": (55, 66, 77), "aguadasael2": (55, 66, 77), "circulo": (11, 22), "pinc-aguada": (11, 22), "pinc-contorno": (11, 22), "pinc-seca": (11, 22), "pinc-mancha": (11, 22), "recuadro": (11, 22), "subrayado": (11, 22)}
ap = argparse.ArgumentParser(); ap.add_argument("--solo"); ap.add_argument("--seeds"); a = ap.parse_args()
OUT.mkdir(parents=True, exist_ok=True)
for k, (p, w, h) in T.items():
    if a.solo and k != a.solo: continue
    for s in ([int(x) for x in a.seeds.split(",")] if a.seeds else SEM[k]):
        r = subprocess.run([sys.executable, str(RAIZ/"tools"/"pollinations.py"), "imagen", f"ui-{k}", "--prompt", p, "--sin-evitar",
                            "--modelo", "flux.2-klein-4b", "--seed", str(s), "--ancho", str(w), "--alto", str(h)],
                           capture_output=True, text=True, encoding="utf-8")
        line = next((l for l in r.stdout.splitlines() if l.startswith("Guardada:")), None)
        if not line: print(k, s, "ERROR", r.stderr[-300:]); continue
        src = RAIZ / line.split("Guardada:")[1].split("(")[0].strip()
        dst = OUT / f"{k}_s{s}{src.suffix}"
        shutil.move(str(src), dst)
        j = src.with_suffix(".json")
        if j.exists(): shutil.move(str(j), dst.with_suffix(".json"))
        print("ok", dst.name, flush=True)
