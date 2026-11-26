# Recorta los fotogramas del botón: disco opaco + brasas/resplandor con transparencia (blanco -> alfa). Uso: powershell -File tools/boton-recorte.ps1
Add-Type -AssemblyName System.Drawing
$raiz = Split-Path -Parent $PSScriptRoot
$in = Join-Path $raiz 'assets\boton-tinta'
$out = Join-Path $raiz 'src\img\boton'
New-Item -ItemType Directory -Force $out | Out-Null
$orden = 't0','t1','t2','t3','t4','t5','t7'
$S = 384; $R = 142; $cx = $S / 2; $cy = $S / 2
$i = 0
foreach ($n in $orden) {
  $src = [Drawing.Image]::FromFile((Join-Path $in "$n.jpg"))
  $bm = New-Object Drawing.Bitmap $S, $S, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [Drawing.Graphics]::FromImage($bm); $g.InterpolationMode = 'HighQualityBicubic'; $g.DrawImage($src, 0, 0, $S, $S); $g.Dispose(); $src.Dispose()
  for ($y = 0; $y -lt $S; $y++) { for ($x = 0; $x -lt $S; $x++) {
    $c = $bm.GetPixel($x, $y); $d = [math]::Sqrt(($x-$cx)*($x-$cx)+($y-$cy)*($y-$cy))
    $mn = [math]::Min($c.R, [math]::Min($c.G, $c.B)); $mx = [math]::Max($c.R, [math]::Max($c.G, $c.B))
    $sat = $mx - $mn
    if ($d -le $R) { $a = 255 }
    else {
      $a = [math]::Min(255, [math]::Max(0, [math]::Max(($sat - 40) * 3.2, (225 - $mn) * 2.2)))
      $a = $a * [math]::Min(1, [math]::Max(0, ($cx - $d) / 12 + 1))
    }
    if ($a -le 0) { $bm.SetPixel($x, $y, [Drawing.Color]::FromArgb(0,0,0,0)) }
    else {
      if ($d -gt $R) { $k = $a / 255.0; $r2 = [math]::Max(0, [math]::Min(255, ($c.R - 255*(1-$k))/$k)); $g2 = [math]::Max(0, [math]::Min(255, ($c.G - 255*(1-$k))/$k)); $b2 = [math]::Max(0, [math]::Min(255, ($c.B - 255*(1-$k))/$k)); $bm.SetPixel($x, $y, [Drawing.Color]::FromArgb([int]$a, [int]$r2, [int]$g2, [int]$b2)) }
      else { $bm.SetPixel($x, $y, [Drawing.Color]::FromArgb([int]$a, $c.R, $c.G, $c.B)) }
    }
  } }
  $bm.Save((Join-Path $out ("flecha-{0}.png" -f $i)), [Drawing.Imaging.ImageFormat]::Png); $bm.Dispose(); $i++
}
"listo: $i fotogramas en $out"
