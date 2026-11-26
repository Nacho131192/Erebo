# Quita el borde de papel de una lámina y la deja en 1792x768. Uso: powershell -File tools/recortar-lamina.ps1 -In origen.jpg -Out destino.jpg [-X 48] [-Y 22] [-Q 80]
param([string]$In,[string]$Out,[int]$X=48,[int]$Y=22,[int]$Q=80)
Add-Type -AssemblyName System.Drawing
$im=[Drawing.Image]::FromFile((Resolve-Path $In)); $b=New-Object Drawing.Bitmap 1792,768; $g=[Drawing.Graphics]::FromImage($b); $g.InterpolationMode='HighQualityBicubic'
$g.DrawImage($im,[Drawing.Rectangle]::new(0,0,1792,768),$X,$Y,$im.Width-2*$X,$im.Height-2*$Y,[Drawing.GraphicsUnit]::Pixel)
$enc=[Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()|?{$_.MimeType -eq 'image/jpeg'}; $p=New-Object Drawing.Imaging.EncoderParameters 1; $p.Param[0]=New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality,[long]$Q)
$o=Join-Path (Get-Location) $Out; $b.Save($o,$enc,$p); $im.Dispose(); $b.Dispose(); "ok $o"
