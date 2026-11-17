"""Generador de láminas y voces con la API de Pollinations (gen.pollinations.ai).

Sin dependencias: solo la biblioteca estándar de Python. En Windows, ejecútalo con `py`.

Uso rápido (desde la carpeta Erebo):

    py tools/pollinations.py modelos                    # modelos de imagen que admiten Quest Pollen
    py tools/pollinations.py modelos --tipo audio       # voces
    py tools/pollinations.py modelos --todos            # incluye los de solo pago
    py tools/pollinations.py laminas                    # láminas definidas en docs/imagenes.md
    py tools/pollinations.py saldo                      # pollen que te queda (requiere clave)

    py tools/pollinations.py imagen heraldo --modelo flux.1-schnell --seed 42
    py tools/pollinations.py imagen heraldo --modelo flux.2-klein-4b --seed 42 --ref assets/portada.png --final
    py tools/pollinations.py imagen --prompt "a crow on a broken well" --modelo z-image-turbo

    py tools/pollinations.py voz "Las puertas siguen abiertas." --modelo mai-voice-2.1 --salida assets/audio/inicio.mp3

Clave: variable de entorno POLLINATIONS_API_KEY (clave secreta sk_..., de enter.pollinations.ai/keys).
Nunca la pongas en el HTML de la página.

Seguridad de coste: se niega a usar modelos de solo pago (paid_only) salvo que pases --permitir-pago,
y antes de cada generación muestra el precio del modelo.
"""

from __future__ import annotations

import argparse
import base64
import json
import math
import mimetypes
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://gen.pollinations.ai"
UPLOAD = "https://media.pollinations.ai/upload"
RAIZ = Path(__file__).resolve().parent.parent  # carpeta Erebo
DOC_IMAGENES = RAIZ / "docs" / "imagenes.md"
ASSETS = RAIZ / "assets"
PRUEBAS = ASSETS / "pruebas"
UA = "erebo-tools/1.0"

try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass


# ---------------------------------------------------------------- utilidades

def clave() -> str | None:
    k = os.environ.get("POLLINATIONS_API_KEY")
    if not k and sys.platform == "win32":
        # Variable de usuario recién creada: las consolas ya abiertas no la ven todavía.
        try:
            import winreg
            with winreg.OpenKey(winreg.HKEY_CURRENT_USER, "Environment") as h:
                k, _ = winreg.QueryValueEx(h, "POLLINATIONS_API_KEY")
        except OSError:
            k = None
    return k or None


def peticion(url: str, *, datos: bytes | None = None, cabeceras: dict | None = None,
             metodo: str | None = None, timeout: int = 300, intentos: int = 3):
    cab = {"User-Agent": UA}
    k = clave()
    if k:
        cab["Authorization"] = f"Bearer {k}"
    cab.update(cabeceras or {})
    for n in range(1, intentos + 1):
        req = urllib.request.Request(url, data=datos, headers=cab, method=metodo)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read(), dict(r.headers)
        except urllib.error.HTTPError as e:
            cuerpo = e.read().decode("utf-8", "replace")[:600]
            if e.code == 429 and n < intentos:
                espera = int(e.headers.get("Retry-After") or 10)
                print(f"  Demasiadas peticiones (429). Espero {espera} s y reintento…")
                time.sleep(espera)
                continue
            if e.code >= 500 and n < intentos:
                print(f"  Error del servidor ({e.code}). Reintento con la misma semilla…")
                time.sleep(3 * n)
                continue
            pistas = {
                401: "Clave no válida o ausente (¿es una sk_? las pk_ ya no sirven para generar).",
                402: "Sin saldo suficiente, o el modelo exige Paid Pollen.",
                403: "La clave no tiene permiso para esto.",
            }
            sys.exit(f"Error {e.code}: {pistas.get(e.code, '')}\n{cuerpo}")
        except (urllib.error.URLError, TimeoutError) as e:
            if n < intentos:
                print(f"  Fallo de red ({e}). Reintento…")
                time.sleep(3 * n)
                continue
            sys.exit(f"Fallo de red: {e}")


def get_json(ruta: str):
    datos, _ = peticion(API + ruta, timeout=60)
    return json.loads(datos)


def catalogo(tipo: str) -> list[dict]:
    return get_json(f"/{tipo}/models")


def buscar_modelo(nombre: str, tipo: str) -> dict:
    mods = catalogo(tipo)
    n = nombre.lower()
    for m in mods:  # exacto, alias o nombre sin editor
        if n == m["name"].lower() or n in [a.lower() for a in m.get("aliases", [])] \
                or n == m["name"].split("/")[-1].lower():
            return m
    parecidos = [m["name"] for m in mods if n in m["name"].lower()]
    extra = f"\n¿Quizá: {', '.join(parecidos[:8])}?" if parecidos else ""
    sys.exit(f"No encuentro el modelo «{nombre}» en /{tipo}/models.{extra}\n"
             f"Mira la lista con: py tools/pollinations.py modelos --tipo {tipo}")


def precio(m: dict) -> str:
    p = {k: v for k, v in (m.get("pricing") or {}).items() if k != "currency"}
    if not p:
        return "sin precio publicado"
    if "completionImageTokens" in p and len(p) == 1:
        return f"{p['completionImageTokens']} pollen/imagen"
    return ", ".join(f"{k}={v}" for k, v in p.items())


def comprobar_coste(m: dict, permitir_pago: bool):
    salud = (m.get("health") or {}).get("success_rate")
    print(f"Modelo: {m['name']}  ·  {precio(m)}"
          + (f"  ·  éxito {salud:.0f}%" if salud is not None else ""))
    if m.get("paid_only") and not permitir_pago:
        sys.exit("Este modelo es de solo pago (Paid Pollen). No lo uso sin --permitir-pago.")
    if salud is not None and salud < 80:
        print("  Aviso: este modelo está fallando a menudo ahora mismo.")


# ---------------------------------------------------------------- láminas

def leer_laminas() -> tuple[str, str, dict[str, dict]]:
    """Lee docs/imagenes.md: estilo común, lista de 'evitar' y cada lámina con su prompt y formato."""
    txt = DOC_IMAGENES.read_text(encoding="utf-8")
    bloques = re.findall(r"```\n(.*?)\n```", txt, re.S)
    estilo, evitar = bloques[0].strip(), bloques[1].strip()
    laminas = {}
    patron = re.compile(r"^### [\d.]+ (?P<titulo>.+?) — `assets/(?P<id>[\w-]+)\.\w+`(?P<cuerpo>.*?)(?=^### |^## |\Z)",
                        re.S | re.M)
    for mt in patron.finditer(txt):
        cuerpo = mt["cuerpo"]
        pr = re.search(r"```\n(.*?)\n```", cuerpo, re.S)
        if not pr:
            continue
        ratio = re.search(r"\*\*(?:[a-záéíóú]+ )?(\d+):(\d+)\*\*", cuerpo)
        laminas[mt["id"]] = {
            "titulo": mt["titulo"],
            "prompt": pr.group(1).strip(),
            "ratio": (int(ratio[1]), int(ratio[2])) if ratio else (1, 1),
        }
    return estilo, evitar, laminas


def tamano(ratio: tuple[int, int], megapixeles: float = 1.0) -> tuple[int, int]:
    a, b = ratio
    total = megapixeles * 1024 * 1024
    w = math.sqrt(total * a / b)
    h = w * b / a
    return max(256, round(w / 16) * 16), max(256, round(h / 16) * 16)


def subir_referencia(ruta: str) -> str:
    """Las referencias deben ser URLs públicas: un archivo local se sube antes a media.pollinations.ai."""
    if re.match(r"https?://", ruta):
        return ruta
    p = Path(ruta)
    if not p.is_absolute():
        p = (RAIZ / p) if (RAIZ / p).exists() else Path.cwd() / p
    if not p.exists():
        sys.exit(f"No encuentro la imagen de referencia: {ruta}")
    if not clave():
        sys.exit("Para usar una imagen local como referencia hace falta la clave (se sube a media.pollinations.ai).")
    tipo = mimetypes.guess_type(p.name)[0] or "image/png"
    cuerpo = json.dumps({"data": base64.b64encode(p.read_bytes()).decode(), "contentType": tipo,
                         "name": p.name}).encode()
    print(f"  Subiendo referencia {p.name} (enlace no listado, pero público, caduca en 30 días)…")
    datos, _ = peticion(UPLOAD + "?safe=privacy", datos=cuerpo, metodo="POST",
                        cabeceras={"Content-Type": "application/json"}, timeout=120)
    r = json.loads(datos)
    url = r.get("url") or r.get("data", {}).get("url")
    if not url:
        sys.exit(f"La subida no devolvió URL: {r}")
    return url


def nombre_libre(p: Path) -> Path:
    if not p.exists():
        return p
    i = 2
    while (q := p.with_name(f"{p.stem}-{i}{p.suffix}")).exists():
        i += 1
    return q


def ext_de(cabeceras: dict) -> str:
    ct = (cabeceras.get("Content-Type") or cabeceras.get("content-type") or "image/jpeg").split(";")[0]
    return {"image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp",
            "image/svg+xml": ".svg", "image/gif": ".gif"}.get(ct, mimetypes.guess_extension(ct) or ".bin")


# ---------------------------------------------------------------- órdenes

def cmd_modelos(a):
    mods = catalogo(a.tipo)
    if not a.todos:
        mods = [m for m in mods if not m.get("paid_only")]
    if a.buscar:
        mods = [m for m in mods if a.buscar.lower() in json.dumps(m).lower()]
    if a.tipo == "image":
        mods = [m for m in mods if m.get("category") == "image"]
    print(f"{len(mods)} modelos ({'todos' if a.todos else 'admiten Quest Pollen'}):\n")
    for m in mods:
        salud = (m.get("health") or {}).get("success_rate")
        etq = " [PAGO]" if m.get("paid_only") else ""
        ref = f" · refs {m['max_reference_images']}" if m.get("max_reference_images") else ""
        sal = f" · {salud:.0f}%" if salud is not None else ""
        if m.get("community"):
            etq += " [COMUNIDAD: revisa su política de datos]"
        print(f"- {m['name']}{etq}\n    {precio(m)}{ref}{sal}\n    {m.get('description', '')}")


def cmd_laminas(a):
    _, _, lams = leer_laminas()
    for k, v in lams.items():
        w, h = tamano(v["ratio"])
        hecha = any(ASSETS.glob(f"{k}.*"))
        print(f"- {k:10} {v['titulo']}  ·  {v['ratio'][0]}:{v['ratio'][1]} → {w}x{h}"
              + ("  ·  ya en assets/" if hecha else ""))


def cmd_saldo(a):
    if not clave():
        sys.exit("Sin clave: define POLLINATIONS_API_KEY.")
    print(json.dumps(get_json("/account/balance"), indent=2, ensure_ascii=False))


def cmd_imagen(a):
    estilo, evitar, lams = leer_laminas()
    if a.prompt:
        prompt, ratio, base = a.prompt, (1, 1), (a.lamina or "libre")
        if a.estilo:
            prompt = f"{estilo} {prompt}"
    else:
        if not a.lamina or a.lamina not in lams:
            sys.exit(f"Indica una lámina ({', '.join(lams)}) o usa --prompt.")
        lam = lams[a.lamina]
        prompt, ratio, base = lam["prompt"].replace("[ESTILO COMÚN]", estilo), lam["ratio"], a.lamina
    if not a.sin_evitar:
        prompt += " Avoid: " + evitar
    w, h = tamano(ratio, a.mp)
    w, h = a.ancho or w, a.alto or h

    m = buscar_modelo(a.modelo, "image")
    comprobar_coste(m, a.permitir_pago)
    seed = a.seed if a.seed is not None else int(time.time()) % 1_000_000
    params = {"model": m["name"], "width": w, "height": h, "seed": seed}
    if a.ref:
        maxr = m.get("max_reference_images") or 0
        if not maxr:
            sys.exit(f"{m['name']} no acepta imágenes de referencia. Prueba flux.2-klein-4b o flux.1-kontext-pro.")
        if len(a.ref) > maxr:
            sys.exit(f"{m['name']} acepta como mucho {maxr} referencias.")
        params["image"] = "|".join(subir_referencia(r) for r in a.ref)
    if not clave():
        sys.exit("Falta la clave: crea una sk_ en enter.pollinations.ai/keys y guárdala en POLLINATIONS_API_KEY.")

    url = f"{API}/image/{urllib.parse.quote(prompt, safe='')}?{urllib.parse.urlencode(params)}"
    print(f"Generando «{base}» a {w}x{h}, semilla {seed}… (puede tardar un minuto)")
    datos, cab = peticion(url)
    ext = ext_de(cab)
    if a.final:
        destino = ASSETS / f"{base}{ext}"
        if destino.exists() and not a.reemplazar:
            sys.exit(f"Ya existe {destino.relative_to(RAIZ)}. Usa --reemplazar si quieres sobrescribirla.")
    else:
        corto = m["name"].split("/")[-1]
        destino = nombre_libre(PRUEBAS / f"{base}_{corto}_s{seed}{ext}")
    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_bytes(datos)
    # Ficha al lado: para repetir o variar la imagen con exactitud.
    destino.with_suffix(".json").write_text(json.dumps(
        {"modelo": m["name"], "seed": seed, "ancho": w, "alto": h, "referencias": a.ref or [],
         "prompt": prompt, "dimensiones_servidor": cab.get("X-Image-Dimensions")},
        indent=2, ensure_ascii=False), encoding="utf-8")
    dims = cab.get("X-Image-Dimensions")
    print(f"Guardada: {destino.relative_to(RAIZ)}  ({len(datos) // 1024} KB"
          + (f", {dims}" if dims else "") + ")")


def cmd_voz(a):
    m = buscar_modelo(a.modelo, "audio")
    comprobar_coste(m, a.permitir_pago)
    if not clave():
        sys.exit("Falta la clave: crea una sk_ en enter.pollinations.ai/keys y guárdala en POLLINATIONS_API_KEY.")
    cuerpo = {"model": m["name"], "input": a.texto, "voice": a.voz, "response_format": a.formato}
    if a.instrucciones:
        cuerpo["instructions"] = a.instrucciones
    datos, _ = peticion(API + "/v1/audio/speech", datos=json.dumps(cuerpo).encode(), metodo="POST",
                        cabeceras={"Content-Type": "application/json"})
    destino = Path(a.salida) if a.salida else nombre_libre(PRUEBAS / f"voz.{a.formato}")
    if not destino.is_absolute():
        destino = RAIZ / destino
    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_bytes(datos)
    print(f"Guardado: {destino.relative_to(RAIZ) if RAIZ in destino.parents else destino}  ({len(datos) // 1024} KB)")


def main():
    ap = argparse.ArgumentParser(description="Láminas y voces de Érebo con Pollinations.")
    sub = ap.add_subparsers(dest="orden", required=True)

    p = sub.add_parser("modelos", help="lista modelos con precio y estado")
    p.add_argument("--tipo", choices=["image", "audio", "text"], default="image")
    p.add_argument("--todos", action="store_true", help="incluye los de solo pago")
    p.add_argument("--buscar", help="filtra por texto (nombre, descripción…)")
    p.set_defaults(f=cmd_modelos)

    p = sub.add_parser("laminas", help="láminas de docs/imagenes.md y su tamaño")
    p.set_defaults(f=cmd_laminas)

    p = sub.add_parser("saldo", help="pollen disponible")
    p.set_defaults(f=cmd_saldo)

    p = sub.add_parser("imagen", help="genera una lámina")
    p.add_argument("lamina", nargs="?", help="portada, heraldo, borrado, cultista, animal, prologo, varek")
    p.add_argument("--modelo", default="flux.1-schnell", help="nombre, alias o nombre sin editor")
    p.add_argument("--seed", type=int, help="semilla (repetirla da la misma imagen); por defecto, al azar")
    p.add_argument("--prompt", help="prompt libre en vez de una lámina")
    p.add_argument("--estilo", action="store_true", help="con --prompt: antepone el estilo común")
    p.add_argument("--sin-evitar", action="store_true", help="no añade la lista 'Avoid: …'")
    p.add_argument("--ref", action="append", help="imagen de referencia (ruta local o URL); se puede repetir")
    p.add_argument("--mp", type=float, default=1.0, help="megapíxeles aproximados (por defecto 1.0)")
    p.add_argument("--ancho", type=int)
    p.add_argument("--alto", type=int)
    p.add_argument("--final", action="store_true", help="guarda como assets/<lamina>.ext en vez de assets/pruebas/")
    p.add_argument("--reemplazar", action="store_true", help="con --final: sobrescribe si ya existe")
    p.add_argument("--permitir-pago", action="store_true", help="permite modelos de solo pago")
    p.set_defaults(f=cmd_imagen)

    p = sub.add_parser("voz", help="convierte texto en audio")
    p.add_argument("texto")
    p.add_argument("--modelo", default="mai-voice-2.1")
    p.add_argument("--voz", default="alloy")
    p.add_argument("--formato", default="mp3", choices=["mp3", "opus", "aac", "flac", "wav"])
    p.add_argument("--instrucciones", help="tono o emoción (solo algunos modelos)")
    p.add_argument("--salida", help="ruta del archivo (relativa a Erebo/)")
    p.add_argument("--permitir-pago", action="store_true")
    p.set_defaults(f=cmd_voz)

    a = ap.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
