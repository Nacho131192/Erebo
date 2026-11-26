# Galerías para elegir la lámina pintada del Panorama del Muro.
#   py docs/maquetas/build-panorama-galeria.py          -> tanda 1 (12 bocetos, cinco estilos) -> panorama-galeria.html
#   py docs/maquetas/build-panorama-galeria.py v2       -> tanda 2 (tinta y acuarela, con las tres originales elegidas) -> panorama-galeria-v2.html
# Reduce cada imagen a 1600 px (tools/reducir-jpg.ps1) y la incrusta.
import base64, json, subprocess, sys, tempfile
from pathlib import Path

H = Path(__file__).resolve().parent
RAIZ = H.parent.parent
PR = RAIZ / "assets" / "pruebas"
B1 = RAIZ / "assets" / "borradores" / "panorama-v1"
EST = {"oleo": "Óleo nocturno", "acuarela": "Tinta y acuarela", "grabado": "Grabado con pan de oro",
       "gouache": "Gouache ilustrado", "mate": "Pintura de cine"}
COMP = {"diagonal": "Muro en diagonal", "frontal": "Muro frontal", "curva": "Muro en curva",
        "valle": "Desde lo alto del valle", "niebla": "Diagonal con niebla"}
tanda = sys.argv[1] if len(sys.argv) > 1 else "v1"
tmp = Path(tempfile.mkdtemp())

def uri(f):
    out = tmp / f.name
    subprocess.run(["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", str(RAIZ / "tools" / "reducir-jpg.ps1"),
                    "-Entrada", str(f), "-Salida", str(out), "-Ancho", "1600", "-Calidad", "82"], check=True, stdin=subprocess.DEVNULL)
    return "data:image/jpeg;base64," + base64.b64encode(out.read_bytes()).decode()

def seed(f):
    j = f.with_suffix(".json")
    return json.loads(j.read_text(encoding="utf-8")).get("seed") if j.exists() else None

items = []
if tanda == "v1":
    for f in sorted(B1.glob("panorama-*.jpg")):
        _, estilo, comp = f.stem.split("_")[0].split("-")
        items.append({"id": f.stem, "estilo": estilo, "comp": comp, "seed": seed(f), "el": EST[estilo], "cl": COMP[comp], "src": uri(f)})
    orden = list(EST)
    items.sort(key=lambda d: (d["comp"] != "diagonal", orden.index(d["estilo"]), d["seed"] or 0))
    for n, d in enumerate(items, 1):
        d["n"] = str(n)
    meta = {"titulo": "Láminas para el Panorama del Muro", "kick": "Érebo · Selector de campañas · tanda 1",
            "lead": "Doce bocetos pintados del paisaje, en cinco estilos y dos composiciones. Las almenaras, el fuego y la cámara seguirían en código encima; por eso la franja de abajo está vacía. Pulsa <b>Ver con los textos</b> para verla como quedaría en la pantalla. Puedes elegir una o marcar qué tomar de cada una para mezclarlas.",
            "key": "erebo-panorama-galeria-v1", "out": "panorama-galeria.html",
            "filtros": [["diagonal", "Muro en diagonal"], ["frontal", "Muro frontal"]]}
elif tanda == "v7":
    B5, B6 = RAIZ / "assets" / "borradores" / "panorama-v5", RAIZ / "assets" / "borradores" / "panorama-v6"
    f = PR / "panorama7-montaje.jpg"
    items.append({"id": "panorama7-montaje", "estilo": "acuarela", "comp": "final", "grupo": "nueva", "seed": "—",
                  "el": "Montaje: escena de C3 + Muro de C1 + barcos de R4", "cl": "Recomendada · cada pieza es exactamente la original", "src": uri(f), "n": "Final"})
    for j, f in enumerate(sorted(PR.glob("panorama7-unificar_*.jpg"), key=lambda f: seed(f) or 0), 1):
        items.append({"id": f.stem, "estilo": "acuarela", "comp": "otras", "grupo": "nueva", "seed": seed(f),
                      "el": "El montaje repasado por el modelo", "cl": "Funde mejor, pero aclara la noche", "src": uri(f), "n": f"U{j}"})
    for j, f in enumerate(sorted(PR.glob("panorama7-modelo_*.jpg"), key=lambda f: seed(f) or 0), 1):
        items.append({"id": f.stem, "estilo": "acuarela", "comp": "otras", "grupo": "nueva", "seed": seed(f),
                      "el": "Mezcla hecha por el modelo", "cl": "Tiende a quedarse con la escena de C1", "src": uri(f), "n": f"M{j}"})
    for num, f, txt in (("C3", B5 / "panorama5-mar-cero_flux.2-klein-4b_s307.jpg", "De aquí sale la escena y el río"),
                        ("C1", B5 / "panorama5-mar-cero_flux.2-klein-4b_s101.jpg", "De aquí sale el Muro"),
                        ("R4", B6 / "panorama6-c1_flux.2-klein-4b_s503.jpg", "De aquí salen los barcos")):
        items.append({"id": "orig-" + num, "estilo": "acuarela", "comp": "orig", "grupo": "orig", "seed": seed(f),
                      "el": f"Original {num}", "cl": txt, "src": uri(f), "n": num})
    meta = {"titulo": "Panorama del Muro · la lámina final", "kick": "Érebo · Selector de campañas · tanda 7",
            "lead": "La mezcla que pediste: la escena completa de <b>C3</b> con su río, el Muro de <b>C1</b> y los barcos de <b>R4</b>. La primera, <b>Final</b>, es un montaje: el Muro de C1 y los dos barcos de R4 están recortados de sus láminas y fundidos sobre C3 con los bordes difuminados, así que cada pieza es exactamente la que elegiste. Debajo, el mismo montaje repasado por el modelo para fundirlo (U) y la mezcla hecha solo por el modelo (M), que tiende a quedarse con la escena de C1. Al final, las tres originales.",
            "key": "erebo-panorama-galeria-v7", "out": "panorama-galeria-v7.html",
            "filtros": [["final", "Final"], ["otras", "Otras pruebas"], ["orig", "Originales"]]}
elif tanda == "v6":
    B5 = RAIZ / "assets" / "borradores" / "panorama-v5"
    for num, f, txt in (("Base", RAIZ / "assets" / "borradores" / "panorama-v3" / "panorama3-valle-bahia_flux.2-klein-4b_s101.jpg", "De aquí sale el Muro"),
                        ("C1", B5 / "panorama5-mar-cero_flux.2-klein-4b_s101.jpg", "Tu elección de la tanda 5"),
                        ("C3", B5 / "panorama5-mar-cero_flux.2-klein-4b_s307.jpg", "Tu elección de la tanda 5")):
        items.append({"id": "orig-" + num, "estilo": "acuarela", "comp": "orig", "grupo": "orig", "seed": seed(f),
                      "el": f"Original {num}", "cl": txt, "src": uri(f), "n": num})
    BUENAS = [("C3-A", "panorama6-c3_flux.2-klein-4b_s101", "C3 con el Muro de la base y dos barcos"),
              ("C3-B", "panorama6b-c3b_flux.2-klein-4b_s307", "C3 con el Muro de la base y otros barcos"),
              ("C1-A", "panorama6-c1_flux.2-klein-4b_s307", "C1 con su propio Muro y dos barcos"),
              ("C1-B", "panorama6b-c1b_flux.2-klein-4b_s307", "C1 con su propio Muro y los barcos junto a la desembocadura")]
    usados = set()
    for n, stem, txt in BUENAS:
        f = PR / (stem + ".jpg")
        usados.add(stem)
        items.append({"id": stem, "estilo": "acuarela", "comp": "buena", "grupo": "nueva", "seed": seed(f),
                      "el": txt, "cl": "Recomendada", "src": uri(f), "n": n})
    k = 0
    for f in sorted(list(PR.glob("panorama6-*.jpg")) + list(PR.glob("panorama6b-*.jpg"))):
        if f.stem in usados:
            continue
        k += 1
        base_ = f.stem.split("_")[0].replace("panorama6b-", "").replace("panorama6-", "")
        items.append({"id": f.stem, "estilo": "acuarela", "comp": "resto", "grupo": "nueva", "seed": seed(f),
                      "el": {"c1": "C1 · otro intento", "c3": "C3 · otro intento", "c1b": "C1 · referencias invertidas", "c3b": "C3 · solo cambian los barcos"}[base_],
                      "cl": "Guardada en borradores", "src": uri(f), "n": f"R{k}"})
    meta = {"titulo": "Panorama del Muro · C1 y C3 con barcos", "kick": "Érebo · Selector de campañas · tanda 6",
            "lead": "Dos variantes de cada una de tus elegidas, con un par de barcos de época navegando (un pesquero de vela cuadrada remendada y una coca mercante de dos palos, cada uno con su farolillo). <b>C3-A y C3-B</b> llevan el Muro de la base, el de bloques colosales con ventanitas encendidas. <b>C1-A y C1-B</b> llevan su propio Muro: en doce intentos el modelo no fue capaz de ponerle a C1 el de la base, así que uso el suyo, como dijiste. Debajo, en «Otros intentos», está todo lo demás que se generó; queda guardado en borradores.",
            "key": "erebo-panorama-galeria-v6", "out": "panorama-galeria-v6.html",
            "filtros": [["orig", "Originales"], ["buena", "Las cuatro variantes"], ["resto", "Otros intentos"]]}
elif tanda == "v5":
    f = RAIZ / "assets" / "borradores" / "panorama-v3" / "panorama3-valle-bahia_flux.2-klein-4b_s101.jpg"
    items.append({"id": "orig-bahia", "estilo": "acuarela", "comp": "orig", "grupo": "orig", "seed": seed(f),
                  "el": "Base · pueblo en la bahía", "cl": "Tu elección de la tanda 3", "src": uri(f), "n": "Base"})
    NOTA = {"edit": {101: "Océano al fondo, sin río", 211: "Océano al fondo, sin río", 307: "Océano y río que se abre al mar ★", 409: "Océano y río que se abre al mar ★"},
            "cero": {101: "Río por el pueblo hasta el mar ★", 211: "Costa abierta, río poco visible", 307: "Río hasta el mar, pueblo a ambos lados", 409: "Río por el pueblo hasta el mar ★"}}
    for clave, nom, letra_ in (("edit", "Editada desde tu lámina", "E"), ("cero", "Pintada desde cero", "C")):
        for j, f in enumerate(sorted(PR.glob(f"panorama5-mar-{clave}_*.jpg"), key=lambda f: seed(f) or 0), 1):
            items.append({"id": f.stem, "estilo": "acuarela", "comp": clave, "grupo": "nueva", "seed": seed(f),
                          "el": nom, "cl": NOTA[clave].get(seed(f), ""), "src": uri(f), "n": f"{letra_}{j}"})
    meta = {"titulo": "Panorama del Muro · el pueblo que se abre al mar", "kick": "Érebo · Selector de campañas · tanda 5",
            "lead": "Rehecha como pediste: entre el pueblo y el Muro solo hay casas, sin agua; desde el pueblo hacia el fondo desaparecen las montañas y se abre el océano hasta el horizonte; se quedan la montaña de la izquierda y el Muro a la derecha, y un río sale del pueblo y desemboca en el mar. <b>E</b>: editadas desde tu lámina (mismo encuadre, luna y niebla; en E3 y E4 hay río, pero quedan dos barquitas varadas en la hierba junto al Muro). <b>C</b>: pintadas desde cero con la misma técnica (cambia más el encuadre, el río cruza el pueblo). Las marcadas con ★ son las que mejor cumplen.",
            "key": "erebo-panorama-galeria-v5", "out": "panorama-galeria-v5.html",
            "filtros": [["orig", "Base"], ["edit", "Editadas"], ["cero", "Desde cero"]]}
elif tanda == "v4":
    f = RAIZ / "assets" / "borradores" / "panorama-v3" / "panorama3-valle-bahia_flux.2-klein-4b_s101.jpg"
    items.append({"id": "orig-bahia", "estilo": "acuarela", "comp": "orig", "grupo": "orig", "seed": seed(f),
                  "el": "Base · pueblo en la bahía", "cl": "V1 de la tanda 3", "src": uri(f), "n": "Base"})
    MAR = {"fondo": ("Mar al fondo del valle", "F"), "izquierda": ("Mar a la izquierda del pueblo", "I")}
    for clave, (nom, letra_) in MAR.items():
        for j, f in enumerate(sorted(PR.glob(f"panorama4-bahia-{clave}_*.jpg"), key=lambda f: seed(f) or 0), 1):
            items.append({"id": f.stem, "estilo": "acuarela", "comp": clave, "grupo": "nueva", "seed": seed(f),
                          "el": nom, "cl": "Primera pasada", "src": uri(f), "n": f"{letra_}{j}"})
    for clave, nom in (("i4", "Segunda pasada sobre I4"), ("i2", "Segunda pasada sobre I2")):
        for j, f in enumerate(sorted(PR.glob(f"panorama4b-bahia-{clave}_*.jpg"), key=lambda f: seed(f) or 0), 1):
            items.append({"id": f.stem, "estilo": "acuarela", "comp": "pasada2", "grupo": "nueva", "seed": seed(f),
                          "el": nom, "cl": "Sin canal junto al Muro · sillería de bloques", "src": uri(f), "n": f"{clave.upper()}.{j}"})
    items.sort(key=lambda d: {"orig": 0, "pasada2": 1, "izquierda": 2, "fondo": 3}[d["comp"]])
    meta = {"titulo": "Panorama del Muro · el pueblo en la bahía", "kick": "Érebo · Selector de campañas · tanda 4",
            "lead": "Variantes de tu pueblo en la bahía (arriba, la <b>Base</b>). Se mantienen el encuadre, el cielo y la luna. Cambian dos cosas: <b>el Muro</b> ya no tiene nada que sobresalga de su cresta (fuera el bloque cuadrado que parecía una almenara), y <b>el agua</b> pasa al otro lado: el pueblo queda pegado al pie del Muro y se abre al mar por el lado contrario. En la primera pasada probé dos maneras: <b>F</b>, el mar al fondo del valle (el modelo apenas movió el agua), e <b>I</b>, el mar a la izquierda del pueblo (funciona, pero quedaba un canal junto al Muro y el Muro se volvía acantilado). La <b>segunda pasada</b> (I4.x e I2.x) parte de I4 e I2 y corrige las dos cosas: sin agua junto al Muro y con su sillería de bloques. La que mejor cumple las tres peticiones es la <b>I4.3</b>.",
            "key": "erebo-panorama-galeria-v4", "out": "panorama-galeria-v4.html",
            "filtros": [["orig", "Base"], ["pasada2", "Segunda pasada"], ["izquierda", "Mar a la izquierda"], ["fondo", "Mar al fondo"]]}
elif tanda == "v3":
    B2 = RAIZ / "assets" / "borradores" / "panorama-v2"
    for num, f, txt in (("V1", B2 / "panorama2-acuarela-valle_flux.2-klein-4b_s101.jpg", "Base de las variaciones del pueblo"),
                        ("4", B1 / "panorama-acuarela-diagonal_flux.2-klein-4b_s23.jpg", "Mezcla · encuadre, cielo, colores y trazo"),
                        ("D1", B2 / "panorama2-acuarela-diagonal_flux.2-klein-4b_s31.jpg", "Mezcla · pueblo y primer plano"),
                        ("D6", B2 / "panorama2-acuarela-diagonal_flux.2-klein-4b_s113.jpg", "Mezcla · el Muro")):
        items.append({"id": "orig-" + num, "estilo": "acuarela", "comp": "orig", "grupo": "orig", "seed": seed(f),
                      "el": f"Original {num}", "cl": txt, "src": uri(f), "n": num})
    PUE = {"bahia": "Pueblo en la bahía", "fortaleza": "Pueblo fortificado", "terrazas": "Pueblo en terrazas", "plaza": "Pueblo con plaza y campanario"}
    k = 0
    for clave, nom in PUE.items():
        for f in sorted(PR.glob(f"panorama3-valle-{clave}_*.jpg"), key=lambda f: seed(f) or 0):
            k += 1
            items.append({"id": f.stem, "estilo": "acuarela", "comp": "valle", "grupo": "nueva", "seed": seed(f),
                          "el": nom, "cl": "Variación de V1", "src": uri(f), "n": f"V{k}"})
    for j, f in enumerate(sorted(PR.glob("panorama3-mezcla_*.jpg"), key=lambda f: seed(f) or 0), 1):
        items.append({"id": f.stem, "estilo": "acuarela", "comp": "mezcla", "grupo": "nueva", "seed": seed(f),
                      "el": "Mezcla de la diagonal", "cl": "4 + D1 + D6", "src": uri(f), "n": f"M{j}"})
    meta = {"titulo": "Panorama del Muro · el valle y las mezclas", "kick": "Érebo · Selector de campañas · tanda 3",
            "lead": "Dos frentes. <b>V</b>: variaciones de tu V1 (el valle desde lo alto) con el mismo encuadre, cielo, luna, Muro, tramos borrados, montañas, niebla, primer plano, colores y trazo; solo cambia el pueblo (en la bahía, fortificado, en terrazas o con plaza y campanario). <b>M</b>: la diagonal mezclando lo que marcaste: encuadre, cielo, colores y trazo de la 4, el pueblo y el primer plano de D1 y el Muro de D6. Arriba tienes las originales de las que parten.",
            "key": "erebo-panorama-galeria-v3", "out": "panorama-galeria-v3.html",
            "filtros": [["orig", "Originales"], ["valle", "Variaciones del valle"], ["mezcla", "Mezclas"]]}
else:
    for num, nom in (("3", "panorama-acuarela-diagonal_flux.2-klein-4b_s11.jpg"), ("4", "panorama-acuarela-diagonal_flux.2-klein-4b_s23.jpg"),
                     ("12", "panorama-acuarela-frontal_flux.2-klein-4b_s11.jpg")):
        f = B1 / nom
        comp = "frontal" if "frontal" in nom else "diagonal"
        items.append({"id": "v1-" + num, "estilo": "acuarela", "comp": comp, "grupo": "orig", "seed": seed(f),
                      "el": f"Original {num}", "cl": f"Tanda 1 · {COMP[comp].lower()}", "src": uri(f)})
    orden = list(COMP)
    nuevas = sorted(PR.glob("panorama2-*.jpg"), key=lambda f: (orden.index(f.stem.split("_")[0].split("-")[2]), seed(f) or 0))
    for f in nuevas:
        comp = f.stem.split("_")[0].split("-")[2]
        items.append({"id": f.stem, "estilo": "acuarela", "comp": comp, "grupo": "nueva", "seed": seed(f),
                      "el": COMP[comp], "cl": "Tinta y acuarela", "src": uri(f)})
    letra = {}
    for d in items:
        if d["grupo"] == "orig":
            d["n"] = d["el"].split()[-1]
        else:
            k = d["comp"][0].upper()
            letra[k] = letra.get(k, 0) + 1
            d["n"] = f"{k}{letra[k]}"
    meta = {"titulo": "Panorama del Muro en tinta y acuarela", "kick": "Érebo · Selector de campañas · tanda 2",
            "lead": "Variantes en tinta y acuarela a partir de las tres que elegiste (las tienes arriba como <b>Original 3, 4 y 12</b>): seis diagonales, tres frontales y tres formas nuevas con el mismo ambiente: el Muro en curva rodeando el valle, el valle visto desde lo alto y la diagonal con niebla espesa. Las letras indican la forma: D diagonal, F frontal, C curva, V valle, N niebla. D1-D4, F y N parten de tus originales y se les parecen mucho; D5-D6, C y V se pintaron sin referencia y cambian más el encuadre. Marca las que te gusten y qué tomar de cada una para mezclarlas.",
            "key": "erebo-panorama-galeria-v2", "out": "panorama-galeria-v2.html",
            "filtros": [["orig", "Originales"], ["diagonal", "Diagonal"], ["frontal", "Frontal"], ["curva", "Curva"], ["valle", "Valle"], ["niebla", "Niebla"]]}

src = (H / "panorama-galeria.src.html").read_text(encoding="utf-8")
out = (src.replace("%%DATA%%", json.dumps(items, ensure_ascii=False)).replace("%%TITULO%%", meta["titulo"])
       .replace("%%KICK%%", meta["kick"]).replace("%%LEAD%%", meta["lead"]).replace("%%KEY%%", meta["key"])
       .replace("%%FILTROS%%", json.dumps(meta["filtros"], ensure_ascii=False)))
(H / meta["out"]).write_text(out, encoding="utf-8")
print("ok", meta["out"], len(items), "láminas,", len(out) // 1024, "KB")
