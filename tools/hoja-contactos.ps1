param([string]$out,[int]$cols,[int]$cw,[Parameter(ValueFromRemainingArguments=$true)][string[]]$files)
Add-Type -AssemblyName System.Drawing
$imgs=$files|%{[Drawing.Image]::FromFile($_)}
$ch=[int]($cw*$imgs[0].Height/$imgs[0].Width);$rows=[math]::Ceiling($imgs.Count/$cols)
$bm=New-Object Drawing.Bitmap ($cw*$cols),($ch*$rows);$g=[Drawing.Graphics]::FromImage($bm);$g.InterpolationMode='HighQualityBicubic';$g.Clear([Drawing.Color]::Black)
$f=New-Object Drawing.Font 'Arial',14
for($i=0;$i -lt $imgs.Count;$i++){$x=($i%$cols)*$cw;$y=[math]::Floor($i/$cols)*$ch;$g.DrawImage($imgs[$i],$x,$y,$cw-4,$ch-4);$g.DrawString([IO.Path]::GetFileNameWithoutExtension($files[$i]),$f,[Drawing.Brushes]::Yellow,$x+6,$y+6)}
$bm.Save($out,[Drawing.Imaging.ImageFormat]::Jpeg)
