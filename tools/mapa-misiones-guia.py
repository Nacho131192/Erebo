"""Guía de composición del mapa de misiones (2026-11-26).
Copia de la plantilla el código real del mapa (posiciones, terreno con semilla fija, ruta) y lo dibuja en tinta sobre
papel claro, en 16:9, para usarlo como referencia de Nano Banana Pro y repintarlo en tinta y acuarela sin cambiar la geografía.
Marco: viewBox x de X0 a X0+1422, y de 0 a 800 (el núcleo de 1000 del mapa queda a la derecha del centro).
Salida: assets/mapa-misiones/guia.html y guia.png (con Edge sin cabeza).
Uso: py tools/mapa-misiones-guia.py [--rutas] [--sin-marcas]
"""
import argparse, re, subprocess
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
TPL = (RAIZ / "src/template/final-tpl.html").read_text(encoding="utf-8")
OUT = RAIZ / "assets/mapa-misiones"
X0, W, H = -300, 1422, 800

def trozo(a, b):
    i = TPL.index(a); j = TPL.index(b, i) + len(b); return TPL[i:j]

code = "\n".join([
    trozo("function rng(s)", "4294967296}}"),
    "const f=n=>+n.toFixed(1);",
    trozo("const P=[[395,598]", "return TERR=s}"),
    trozo("const SIDEC={};", "return SIDEC[ext]=s}"),
])

ap = argparse.ArgumentParser(); ap.add_argument("--rutas", action="store_true"); ap.add_argument("--sin-marcas", action="store_true"); a = ap.parse_args()

html = f"""<!doctype html><meta charset="utf-8"><style>html,body{{margin:0;background:#f4efe4}}svg{{display:block;width:1792px;height:1008px}}
.mt{{fill:#e9e2d2;stroke:#2a2118;stroke-width:1.3;stroke-linejoin:round}}.mts{{fill:#2a2118;opacity:.25}}
.tr{{fill:#9fb08a;stroke:#2a2118;stroke-width:1.1}}.trs{{fill:none;stroke:#2a2118;stroke-width:.8}}.tk{{fill:none;stroke:#2a2118;stroke-width:1.3}}
.mhl{{fill:none;stroke:#2a2118;stroke-width:1.3;opacity:.7}}.wt{{fill:none;stroke:#4f7fae;stroke-width:3;stroke-linecap:round}}
.lk{{fill:#b9cfe2;stroke:#4f7fae;stroke-width:1.8}}.rp{{fill:none;stroke:#4f7fae;stroke-width:1.2;opacity:.6}}
.gl{{fill:#e9e2d2;stroke:#2a2118;stroke-width:1.4}}.fr{{fill:none;stroke:#7a3a2a;stroke-width:1.6;stroke-dasharray:16 6 3 6}}</style>
<svg id="s" viewBox="{X0} 0 {W} {H}"></svg><script>{code}
const ext={-X0};let s=`<rect x="{X0}" width="{W}" height="{H}" fill="#f4efe4"/>`+terrain()+sideTerr(ext);
s+=`<path d="M{X0} 776C300 768 700 782 {X0+W} 772" fill="none" stroke="#2a2118" stroke-width="12"/>`;
s+=`<g fill="#e9e2d2" stroke="#2a2118" stroke-width="1.6"><path d="M474 760v-22h10v22z"/><path d="M472 738l7-9 7 9z"/><path d="M491 760v-30h15v30z"/><path d="M489 730l9.5-12 9.5 12z"/><path d="M513 760v-19h10v19z"/><path d="M511 741l7-8 7 8z"/></g>`;
{"" if not a.rutas else 's+=`<path d="M${WP.map(p=>p.join(" ")).join("L")}" fill="none" stroke="#7a3a2a" stroke-width="2" stroke-dasharray="4 6"/>`;'}
{"" if a.sin_marcas else 'P.forEach((p,i)=>{s+=`<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="none" stroke="#c0392b" stroke-width="3"/>`});'}
document.getElementById("s").innerHTML=s;</script>"""
OUT.mkdir(parents=True, exist_ok=True)
nombre = "guia" + ("-rutas" if a.rutas else "") + ("-limpia" if a.sin_marcas else "")
(OUT / f"{nombre}.html").write_text(html, encoding="utf-8")
edge = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
subprocess.run([edge, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=1792,1008", "--virtual-time-budget=3000",
                f"--screenshot={OUT / (nombre + '.png')}", (OUT / f"{nombre}.html").as_uri()], capture_output=True)
print("ok", OUT / f"{nombre}.png")
