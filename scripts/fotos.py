"""Optimiza las fotos de barberías para la landing.

Uso: python3 scripts/fotos.py <original.jpg> <nombre> [recorte]
  recorte opcional "x0,y0,x1,y1" en fracciones (0-1) del original.
Genera public/fotos/<nombre>.webp (1600 px de ancho) y <nombre>-800.webp, sin metadatos EXIF.
Requiere Pillow.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

src, nombre = sys.argv[1], sys.argv[2]
im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
if len(sys.argv) > 3:
    x0, y0, x1, y1 = (float(v) for v in sys.argv[3].split(","))
    w, h = im.size
    im = im.crop((round(x0 * w), round(y0 * h), round(x1 * w), round(y1 * h)))
out = Path(__file__).resolve().parent.parent / "public" / "fotos"
out.mkdir(parents=True, exist_ok=True)
for ancho, sufijo in ((1600, ""), (800, "-800")):
    copia = im.copy()
    if copia.width > ancho:
        copia = copia.resize((ancho, round(copia.height * ancho / copia.width)), Image.LANCZOS)
    destino = out / f"{nombre}{sufijo}.webp"
    copia.save(destino, "WEBP", quality=72, method=6)
    print(destino.name, copia.size, f"{destino.stat().st_size // 1024} KB")
