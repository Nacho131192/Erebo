# Recursos del selector de misiones (2026-11-26).
#  1) cartela-pergamino.png: la cartela con el interior relleno de pergamino opaco (sin azul del mapa detrás).
#  2) mapa-apagado.jpg: el mapa desaturado y oscurecido, horneado (sustituye a los filtros SVG sobre la lámina, que eran lentos).
# Uso: powershell -ExecutionPolicy Bypass -File tools/mapa-assets.ps1
Add-Type -AssemblyName System.Drawing
$raiz = Split-Path -Parent $PSScriptRoot
$dir = Join-Path $raiz 'src\img\mapa'

# 1) cartela: se rellena de pergamino todo lo que no está conectado con el borde transparente
$in = Join-Path $dir 'cartela.png'
$src = [Drawing.Bitmap]::new($in)
$w = $src.Width; $h = $src.Height
$out = New-Object bool[] ($w * $h)
$q = New-Object 'System.Collections.Generic.Queue[int]'
for ($x = 0; $x -lt $w; $x++) { foreach ($y in 0, ($h - 1)) { $i = $y * $w + $x; if (-not $out[$i] -and $src.GetPixel($x, $y).A -lt 60) { $out[$i] = $true; $q.Enqueue($i) } } }
for ($y = 0; $y -lt $h; $y++) { foreach ($x in 0, ($w - 1)) { $i = $y * $w + $x; if (-not $out[$i] -and $src.GetPixel($x, $y).A -lt 60) { $out[$i] = $true; $q.Enqueue($i) } } }
$dx = @(1, -1, 0, 0); $dy = @(0, 0, 1, -1)
while ($q.Count -gt 0) {
  $i = $q.Dequeue(); $x = $i % $w; $y = [math]::Floor($i / $w)
  for ($k = 0; $k -lt 4; $k++) {
    $nx = $x + $dx[$k]; $ny = $y + $dy[$k]
    if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
      $j = $ny * $w + $nx
      if (-not $out[$j] -and $src.GetPixel($nx, $ny).A -lt 60) { $out[$j] = $true; $q.Enqueue($j) }
    }
  }
}
$bm = New-Object Drawing.Bitmap $w, $h, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $h; $y++) { for ($x = 0; $x -lt $w; $x++) {
  $i = $y * $w + $x
  if ($out[$i]) { $bm.SetPixel($x, $y, [Drawing.Color]::FromArgb(0, 0, 0, 0)); continue }
  $c = $src.GetPixel($x, $y); $a = $c.A / 255.0
  $r = [int]($c.R * $a + 233 * (1 - $a)); $g = [int]($c.G * $a + 215 * (1 - $a)); $b = [int]($c.B * $a + 167 * (1 - $a))
  $bm.SetPixel($x, $y, [Drawing.Color]::FromArgb(255, $r, $g, $b))
} }
$bm.Save((Join-Path $dir 'cartela-pergamino.png'), [Drawing.Imaging.ImageFormat]::Png)
$bm.Dispose(); $src.Dispose()

# 2) mapa apagado: gris azulado y oscuro (lo no descubierto)
$src = [Drawing.Bitmap]::new((Join-Path $dir 'mapa.jpg'))
$bmp = New-Object Drawing.Bitmap $src.Width, $src.Height, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gr = [Drawing.Graphics]::FromImage($bmp); $gr.DrawImage($src, 0, 0); $gr.Dispose(); $src.Dispose()
$rect = New-Object Drawing.Rectangle 0, 0, $bmp.Width, $bmp.Height
$d = $bmp.LockBits($rect, [Drawing.Imaging.ImageLockMode]::ReadWrite, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
$buf = New-Object byte[] ($d.Stride * $bmp.Height)
[Runtime.InteropServices.Marshal]::Copy($d.Scan0, $buf, 0, $buf.Length)
for ($i = 0; $i -lt $buf.Length; $i += 4) {
  $gray = 0.3 * $buf[$i + 2] + 0.59 * $buf[$i + 1] + 0.11 * $buf[$i]
  $buf[$i + 2] = [byte][math]::Min(255, $gray * 0.55 + 6)
  $buf[$i + 1] = [byte][math]::Min(255, $gray * 0.58 + 8)
  $buf[$i]     = [byte][math]::Min(255, $gray * 0.72 + 14)
}
[Runtime.InteropServices.Marshal]::Copy($buf, 0, $d.Scan0, $buf.Length)
$bmp.UnlockBits($d)
$bmp.Save((Join-Path $dir 'mapa-apagado.jpg'), [Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()
"listo: cartela-pergamino.png y mapa-apagado.jpg en $dir"
