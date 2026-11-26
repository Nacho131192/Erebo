# Reduce una imagen a un ancho máximo y la guarda como JPEG (System.Drawing; sin Pillow).
# Uso: powershell -NoProfile -File tools/reducir-jpg.ps1 -Entrada a.jpg -Salida b.jpg -Ancho 1600 -Calidad 82
param([string]$Entrada,[string]$Salida,[int]$Ancho=1600,[int]$Calidad=82)
Add-Type -AssemblyName System.Drawing
$img=[System.Drawing.Image]::FromFile((Resolve-Path $Entrada))
$w=[Math]::Min($Ancho,$img.Width);$h=[int]($img.Height*$w/$img.Width)
$bmp=New-Object System.Drawing.Bitmap $w,$h
$g=[System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img,0,0,$w,$h)
$enc=[System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()|?{$_.MimeType -eq 'image/jpeg'}
$p=New-Object System.Drawing.Imaging.EncoderParameters 1
$p.Param[0]=New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality),([long]$Calidad)
$bmp.Save($Salida,$enc,$p);$g.Dispose();$bmp.Dispose();$img.Dispose()
