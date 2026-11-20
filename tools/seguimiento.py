"""Hoja de ruta y lista de revisión en PDF con casillas (Python puro, sin librerías).

Uso (desde la carpeta Erebo):
    py tools/seguimiento.py            lee las casillas y notas de los PDF, las guarda en los .json y regenera los PDF
    py tools/seguimiento.py leer       solo lee los PDF y actualiza los .json (para ver por dónde va Nacho)
    py tools/seguimiento.py --sin-leer regenera desde los .json sin leer antes los PDF

Fuente de verdad: docs/seguimiento/*.json. Cada punto tiene un id fijo; su casilla en el PDF se llama c-<id> y su
recuadro de texto n-<id> (en la lista de revisión) o n-<id de la sección> (notas de cada fase). Antes de regenerar se
leen los PDF para no perder lo que Nacho haya marcado o escrito. Para tachar un punto a mano: "done": true en el .json.
"""
import json, re, sys, zlib, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIR = ROOT / "docs" / "seguimiento"
SRCS = ["hoja-de-ruta.json", "pendiente-revision.json"]

# ------------------------------------------------------------------ texto
W = {32: 278, 33: 278, 34: 355, 35: 556, 36: 556, 37: 889, 38: 667, 39: 191, 40: 333, 41: 333, 42: 389, 43: 584, 44: 278,
     45: 333, 46: 278, 47: 278, 58: 278, 59: 278, 60: 584, 61: 584, 62: 584, 63: 556, 64: 1015, 91: 278, 92: 278, 93: 278,
     94: 469, 95: 556, 96: 333, 123: 334, 124: 260, 125: 334, 126: 584}
W.update({c: 556 for c in range(48, 58)})
W.update(dict(zip(map(ord, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                  [667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611])))
W.update(dict(zip(map(ord, "abcdefghijklmnopqrstuvwxyz"),
                  [556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500])))
BASE = str.maketrans("áéíóúüÁÉÍÓÚÜñÑçÇàèìòù", "aeiouuAEIOUUnNcCaeiou")
EXTRA = {"¿": 611, "¡": 333, "«": 556, "»": 556, "·": 278, "×": 584, "“": 333, "”": 333, "’": 222, "–": 556, "—": 1000, "º": 365, "ª": 370}
SUBS = {"″": '"', "′": "'", "→": "->", "≈": "aprox. ", "…": "...", "−": "-", "✓": "", "☐": "", "☑": ""}


def clean(s):
    for a, b in SUBS.items():
        s = s.replace(a, b)
    return s


def width(s, size, bold=False):
    t = 0
    for ch in s:
        if ch in EXTRA:
            t += EXTRA[ch]
        else:
            t += W.get(ord(ch.translate(BASE)), 556)
    return t * size / 1000 * (1.06 if bold else 1)


def wrap(s, size, maxw, bold=False, first=0):
    words, lines, cur = clean(s).split(), [], ""
    for w in words:
        test = (cur + " " + w).strip()
        lim = maxw - (first if not lines else 0)
        if cur and width(test, size, bold) > lim:
            lines.append(cur)
            cur = w
        else:
            cur = test
    if cur:
        lines.append(cur)
    return lines or [""]


def pstr(s):
    b = clean(s).encode("cp1252", "replace")
    return b"(" + b.replace(b"\\", b"\\\\").replace(b"(", b"\\(").replace(b")", b"\\)") + b")"


def ustr(s):
    """Cadena para valores de formulario (UTF-16 con BOM, en hexadecimal)."""
    return b"<FEFF" + s.encode("utf-16-be").hex().upper().encode() + b">"


# ------------------------------------------------------------------ leer un PDF (casillas y textos)
def _lit(b, i):
    out, depth, i = bytearray(), 1, i + 1
    while i < len(b):
        c = b[i]
        if c == 0x5C:
            n = b[i + 1]
            m = {0x6E: 10, 0x72: 13, 0x74: 9, 0x62: 8, 0x66: 12}.get(n)
            if m is not None:
                out.append(m); i += 2
            elif 0x30 <= n <= 0x37:
                j = i + 1
                while j < i + 4 and 0x30 <= b[j] <= 0x37:
                    j += 1
                out.append(int(b[i + 1:j], 8) & 255); i = j
            elif n in (10, 13):
                i += 2
            else:
                out.append(n); i += 2
            continue
        if c == 0x28:
            depth += 1
        elif c == 0x29:
            depth -= 1
            if depth == 0:
                return bytes(out)
        out.append(c); i += 1
    return bytes(out)


def _dec(raw):
    if raw.startswith(b"\xfe\xff"):
        return raw[2:].decode("utf-16-be", "replace")
    if raw.startswith(b"\xef\xbb\xbf"):
        return raw[3:].decode("utf-8", "replace")
    return raw.decode("cp1252", "replace")


def _val(b, key):
    m = re.search(rb"/" + key + rb"\s*(\(|<(?!<)|/)", b)
    if not m:
        return None
    k, i = m.group(1), m.end() - 1
    if k == b"(":
        return _dec(_lit(b, i))
    if k == b"<":
        j = b.index(b">", i)
        h = re.sub(rb"\s", b"", b[i + 1:j])
        if len(h) % 2:
            h += b"0"
        return _dec(bytes.fromhex(h.decode()))
    n = re.match(rb"/([^\s/<>\[\]()]+)", b[i:])
    return "/" + n.group(1).decode("latin-1") if n else None


def read_fields(path):
    data = path.read_bytes()
    bodies = [m.group(1) for m in re.finditer(rb"\d+\s+\d+\s+obj(.*?)endobj", data, re.S)]
    for body in list(bodies):
        if b"/ObjStm" in body and b"stream" in body:
            try:
                s = body.index(b"stream") + 6
                s += 2 if body[s:s + 2] == b"\r\n" else 1
                raw = zlib.decompress(body[s:body.rindex(b"endstream")].rstrip(b"\r\n"))
                first = int(re.search(rb"/First\s+(\d+)", body).group(1))
                nums = raw[:first].split()
                offs = [int(nums[k]) for k in range(1, len(nums), 2)]
                for k, o in enumerate(offs):
                    e = offs[k + 1] if k + 1 < len(offs) else len(raw) - first
                    bodies.append(raw[first + o:first + e])
            except Exception:
                pass
    out = {}
    for body in bodies:
        if b"/T" not in body:
            continue
        t = _val(body, b"T")
        if not t or not (t.startswith("c-") or t.startswith("n-")):
            continue
        v = _val(body, b"V")
        if v is None:
            v = _val(body, b"AS") if t.startswith("c-") else None
        if v is not None:
            out[t] = v
    return out


def sync(doc, pdf):
    if not pdf.exists():
        return 0
    f = read_fields(pdf)
    n = 0
    for sec in doc["sections"]:
        if "n-" + sec["id"] in f:
            sec["notes"] = f["n-" + sec["id"]]
        for it in sec["items"]:
            c = f.get("c-" + it["id"])
            if c is not None:
                d = c not in ("/Off", "")
                if d != it.get("done", False):
                    n += 1
                it["done"] = d
            if "n-" + it["id"] in f:
                it["notes"] = f["n-" + it["id"]]
    return n


# ------------------------------------------------------------------ escribir el PDF
PW, PH, ML, MR, MT, MB = 595.28, 841.89, 50, 50, 56, 58
INK, MUTE, GOLD, NAVY = "0.13 0.14 0.2", "0.55 0.56 0.6", "0.72 0.56 0.25", "0.07 0.1 0.19"
TAGC = {"Oficial": "0.16 0.36 0.66", "Casa": "0.7 0.38 0.1", "Urgente": "0.75 0.12 0.15"}


class Doc:
    def __init__(self):
        self.pages = []  # [ops(list[str]), annots(list[dict])]
        self.new()

    def new(self):
        self.ops, self.ann = [], []
        self.pages.append((self.ops, self.ann))
        self.y = PH - MT

    def need(self, h):
        if self.y - h < MB:
            self.new()
            return True
        return False

    def text(self, x, y, s, size=10, font="F1", col=INK):
        self.ops.append(f"BT /{font} {size} Tf {col} rg {x:.2f} {y:.2f} Td ".encode() + pstr(s) + b" Tj ET")

    def raw(self, s):
        self.ops.append(s.encode())


def build(doc, out):
    D = Doc()
    today = datetime.date.today().strftime("%d/%m/%Y")
    cw = PW - ML - MR
    # cabecera
    D.raw(f"{NAVY} rg 0 {PH - 118:.2f} {PW:.2f} 118 re f")
    D.raw(f"{GOLD} RG 1.2 w {ML} {PH - 118:.2f} m {PW - MR:.2f} {PH - 118:.2f} l S")
    D.text(ML, PH - 50, doc["title"], 22, "F2", "0.93 0.84 0.62")
    D.text(ML, PH - 70, doc["subtitle"], 10.5, "F3", "0.78 0.8 0.88")
    D.text(ML, PH - 98, "Última actualización: " + today, 9, "F1", "0.7 0.72 0.8")
    D.y = PH - 140
    # aviso de documento vivo
    lines = wrap(doc["live"], 10, cw - 28, True)
    h = 16 + 13 * len(lines)
    D.raw(f"0.99 0.96 0.88 rg {GOLD} RG 0.8 w {ML} {D.y - h:.2f} {cw:.2f} {h:.2f} re B")
    D.raw(f"{GOLD} rg {ML} {D.y - h:.2f} 4 {h:.2f} re f")
    for k, l in enumerate(lines):
        D.text(ML + 14, D.y - 17 - 13 * k, l, 10, "F2", "0.45 0.32 0.08")
    D.y -= h + 12
    for l in wrap(doc["legend"], 8.5, cw):
        D.text(ML, D.y - 9, l, 8.5, "F3", MUTE)
        D.y -= 11.5
    D.y -= 8
    fields = []

    def checkbox(name, x, y, on):
        D.ann.append({"k": "c", "t": name, "r": (x, y, x + 12, y + 12), "v": on})

    def textbox(name, x, y, w, h, v):
        D.ann.append({"k": "t", "t": name, "r": (x, y, x + w, y + h), "v": v or ""})

    review = doc["notes_label"] == "Respuesta"
    for sec in doc["sections"]:
        D.need(70)
        D.y -= 10
        D.text(ML, D.y - 14, sec["title"], 14, "F2", NAVY)
        D.raw(f"{GOLD} RG 0.9 w {ML} {D.y - 20:.2f} m {PW - MR:.2f} {D.y - 20:.2f} l S")
        D.y -= 26
        if sec.get("goal"):
            for l in wrap(sec["goal"], 9, cw):
                D.text(ML, D.y - 9, l, 9, "F3", MUTE)
                D.y -= 12
            D.y -= 2
        for it in sec["items"]:
            tag = it.get("tag") or ""
            tw = width("[" + tag + "]", 9.5, True) + 5 if tag else 0
            lines = wrap(it["text"], 9.5, cw - 24, False, tw)
            h = 12.5 * len(lines) + 6 + (54 if review else 0)
            D.need(h)
            top = D.y
            done = it.get("done", False)
            checkbox("c-" + it["id"], ML, top - 12, done)
            col = MUTE if done else INK
            for k, l in enumerate(lines):
                x = ML + 22
                yy = top - 9.5 - 12.5 * k
                if k == 0 and tag:
                    D.text(x, yy, "[" + tag + "]", 9.5, "F2", MUTE if done else TAGC.get(tag, INK))
                    x += tw
                D.text(x, yy, l, 9.5, "F1", col)
                if done:
                    lw = width(l, 9.5) + (tw if k == 0 else 0)
                    D.raw(f"{MUTE} RG 0.7 w {ML + 22:.2f} {yy + 3.2:.2f} m {ML + 22 + lw:.2f} {yy + 3.2:.2f} l S")
            D.y = top - 12.5 * len(lines) - 6
            if review:
                D.text(ML + 22, D.y - 8, doc["notes_label"] + ":", 7.5, "F2", MUTE)
                textbox("n-" + it["id"], ML + 22, D.y - 52, cw - 22, 40, it.get("notes"))
                D.y -= 60
        lines = wrap("Hecha cuando: " + sec["done_when"], 9, cw - 20, True) if sec.get("done_when") else []
        D.need(12 * len(lines) + 4 + (0 if review else 52))   # «Hecha cuando» y las notas, juntas
        if lines:
            for l in lines:
                D.text(ML + 22, D.y - 10, l, 9, "F2", GOLD)
                D.y -= 12
            D.y -= 4
        if not review:
            D.need(52)
            D.text(ML + 22, D.y - 8, doc["notes_label"] + ":", 7.5, "F2", MUTE)
            textbox("n-" + sec["id"], ML + 22, D.y - 44, cw - 22, 32, sec.get("notes"))
            D.y -= 52

    # ---- serializar
    N = len(D.pages)
    objs = {}
    nxt = [10]

    def add(body):
        i = nxt[0]
        nxt[0] += 1
        objs[i] = body
        return i

    def stream(dict_extra, data):
        return f"<< {dict_extra} /Length {len(data)} >>\nstream\n".encode() + data + b"\nendstream"

    F = {"F1": "Helvetica", "F2": "Helvetica-Bold", "F3": "Helvetica-Oblique"}
    fid = {k: add(f"<< /Type /Font /Subtype /Type1 /BaseFont /{v} /Encoding /WinAnsiEncoding >>".encode()) for k, v in F.items()}
    zadb = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /ZapfDingbats >>")
    fonts = " ".join(f"/{k} {v} 0 R" for k, v in fid.items())
    box = "0.55 0.47 0.3 RG 1 w 1 1 1 rg 0.5 0.5 11 11 re B"
    ap_off = add(stream("/Type /XObject /Subtype /Form /BBox [0 0 12 12]", box.encode()))
    ap_on = add(stream(f"/Type /XObject /Subtype /Form /BBox [0 0 12 12] /Resources << /Font << /ZaDb {zadb} 0 R >> >>",
                       (box + " BT /ZaDb 10 Tf 0.12 0.45 0.2 rg 1.6 2.2 Td (4) Tj ET").encode()))
    page_ids, all_fields = [], []
    for p, (ops, ann) in enumerate(D.pages):
        foot = [f"BT /F3 7.5 Tf {MUTE} rg {ML} 30 Td ".encode() + pstr(f"{doc['title']} · Documento vivo: se sigue trabajando en él · Actualizado {today}") + b" Tj ET",
                f"BT /F1 7.5 Tf {MUTE} rg {PW - MR - 40:.2f} 30 Td ".encode() + pstr(f"Página {p + 1} de {N}") + b" Tj ET",
                f"0.85 0.82 0.75 RG 0.5 w {ML} 42 m {PW - MR:.2f} 42 l S".encode()]
        cont = add(stream("", b"\n".join(ops + foot)))
        pid = nxt[0] + len(ann)
        aids = []
        for a in ann:
            r = " ".join(f"{v:.2f}" for v in a["r"])
            if a["k"] == "c":
                st = "/On" if a["v"] else "/Off"
                body = (f"<< /Type /Annot /Subtype /Widget /FT /Btn /F 4 /P {pid} 0 R /Rect [{r}] /T ".encode() + pstr(a["t"]) +
                        f" /V {st} /AS {st} /DA (/ZaDb 0 Tf 0 g) /MK << /BC [0.55 0.47 0.3] /BG [1 1 1] /CA (4) >>"
                        f" /AP << /N << /On {ap_on} 0 R /Off {ap_off} 0 R >> >> >>".encode())
            else:
                body = (f"<< /Type /Annot /Subtype /Widget /FT /Tx /Ff 4096 /F 4 /P {pid} 0 R /Rect [{r}] /T ".encode() + pstr(a["t"]) +
                        b" /V " + ustr(a["v"]) + b" /DA (/Helv 9 Tf 0 g) /MK << /BC [0.75 0.7 0.6] /BG [1 0.99 0.95] >> >>")
            aids.append(add(body))
        assert nxt[0] == pid
        add(f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {PW:.2f} {PH:.2f}] /Resources << /Font << {fonts} >> >> /Contents {cont} 0 R /Annots [{' '.join(f'{i} 0 R' for i in aids)}] >>".encode())
        page_ids.append(pid)
        all_fields += aids
    helv = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    objs[1] = b"<< /Type /Catalog /Pages 2 0 R /AcroForm 3 0 R >>"
    objs[2] = f"<< /Type /Pages /Kids [{' '.join(f'{i} 0 R' for i in page_ids)}] /Count {N} >>".encode()
    objs[3] = (f"<< /Fields [{' '.join(f'{i} 0 R' for i in all_fields)}] /NeedAppearances true /DA (/Helv 9 Tf 0 g)"
               f" /DR << /Font << /Helv {helv} 0 R /ZaDb {zadb} 0 R >> >> >>").encode()
    objs[4] = b"<< /Title " + ustr(doc["title"]) + b" /Producer (tools/seguimiento.py) >>"
    for i in range(5, 10):
        objs[i] = b"null"
    mx = max(objs)
    outb = bytearray(b"%PDF-1.5\n%\xe2\xe3\xcf\xd3\n")
    offs = {}
    for i in range(1, mx + 1):
        offs[i] = len(outb)
        outb += f"{i} 0 obj\n".encode() + objs[i] + b"\nendobj\n"
    x = len(outb)
    outb += f"xref\n0 {mx + 1}\n0000000000 65535 f \n".encode()
    for i in range(1, mx + 1):
        outb += f"{offs[i]:010d} 00000 n \n".encode()
    outb += f"trailer\n<< /Size {mx + 1} /Root 1 0 R /Info 4 0 R >>\nstartxref\n{x}\n%%EOF\n".encode()
    out.write_bytes(bytes(outb))
    return N


def main():
    args = sys.argv[1:]
    for name in SRCS:
        src = DIR / name
        doc = json.loads(src.read_text(encoding="utf-8"))
        pdf = DIR / doc["file"]
        if "--sin-leer" not in args:
            n = sync(doc, pdf)
            src.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            done = sum(it.get("done", False) for s in doc["sections"] for it in s["items"])
            tot = sum(len(s["items"]) for s in doc["sections"])
            print(f"{doc['file']}: leído ({n} casillas cambiadas por Nacho) · {done}/{tot} marcadas")
        if args[:1] == ["leer"]:
            continue
        try:
            pages = build(doc, pdf)
            print(f"{doc['file']}: generado ({pages} páginas)")
        except PermissionError:
            print(f"{doc['file']}: NO generado: está abierto en otro programa. Ciérralo y vuelve a ejecutar el script.")


if __name__ == "__main__":
    main()
