# Recorta una hoja de fotogramas (rejilla) a una tira horizontal PNG con transparencia (2026-11-26).
# Cada fotograma se alinea por su base (centro y suelo del objeto) para que no tiemble al animarlo.
# Fondo blanco -> transparente en modo «opaco» (la acuarela clara queda opaca: sirve sobre el mapa de noche).
# Uso: powershell -File tools/sprite-recorte.ps1 -In hoja.jpg -Out tira.png -Cols 4 -Rows 2 [-Frames "0,1,2,3"] [-Size 256] [-Inset 6]
param([string]$In,[string]$Out,[int]$Cols=4,[int]$Rows=2,[string]$Frames="",[int]$Size=256,[int]$Inset=6,[double]$Base=0.35,[double]$Fill=0.86)
Add-Type -AssemblyName System.Drawing
if (-not ("Spr" -as [type])) {
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Imaging; using System.Runtime.InteropServices;
public static class Spr {
  public static Bitmap Alpha(Bitmap src){ int w=src.Width,h=src.Height; var o=new Bitmap(w,h,PixelFormat.Format32bppArgb);
    var r1=src.LockBits(new Rectangle(0,0,w,h),ImageLockMode.ReadOnly,PixelFormat.Format32bppArgb);
    var r2=o.LockBits(new Rectangle(0,0,w,h),ImageLockMode.WriteOnly,PixelFormat.Format32bppArgb);
    byte[] a=new byte[r1.Stride*h]; Marshal.Copy(r1.Scan0,a,0,a.Length);
    for(int i=0;i<w*h;i++){int p=i*4; double mn=Math.Min(a[p],Math.Min(a[p+1],a[p+2])); double al=Math.Min(255,Math.Max(0,(255-mn-12)*3.6)); if(al<10)al=0; a[p+3]=(byte)al; if(al==0){a[p]=a[p+1]=a[p+2]=0;}}
    Marshal.Copy(a,0,r2.Scan0,a.Length); src.UnlockBits(r1); o.UnlockBits(r2); return o; }
  // caja del contenido y, en su franja inferior (base), su centro x y su suelo
  public static int[] Box(Bitmap bm, double baseK){ int w=bm.Width,h=bm.Height,x0=w,y0=h,x1=-1,y1=-1;
    var r=bm.LockBits(new Rectangle(0,0,w,h),ImageLockMode.ReadOnly,PixelFormat.Format32bppArgb); byte[] a=new byte[r.Stride*h]; Marshal.Copy(r.Scan0,a,0,a.Length); bm.UnlockBits(r);
    for(int y=0;y<h;y++)for(int x=0;x<w;x++) if(a[(y*w+x)*4+3]>60){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}
    if(x1<0) return new int[]{0,0,w,h,w/2,h};
    int by=(int)(y1-(y1-y0)*baseK),bx0=w,bx1=-1;
    for(int y=by;y<=y1;y++)for(int x=0;x<w;x++) if(a[(y*w+x)*4+3]>60){if(x<bx0)bx0=x;if(x>bx1)bx1=x;}
    return new int[]{x0,y0,x1,y1,(bx0+bx1)/2,y1}; }
}
"@
}
$src = [Drawing.Bitmap]::FromFile((Resolve-Path $In))
$cw = [int]($src.Width / $Cols); $ch = [int]($src.Height / $Rows)
$idx = if ($Frames) { $Frames.Split(',') | % { [int]$_ } } else { 0..($Cols*$Rows-1) }
$cells = @(); $boxes = @()
foreach ($k in $idx) {
  $cx = ($k % $Cols) * $cw; $cy = [math]::Floor($k / $Cols) * $ch
  $c = $src.Clone((New-Object Drawing.Rectangle ($cx+$Inset), ($cy+$Inset), ($cw-2*$Inset), ($ch-2*$Inset)), [Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $a = [Spr]::Alpha($c); $c.Dispose(); $cells += $a; $boxes += ,([Spr]::Box($a, $Base))
}
# escala común: el fotograma más grande (desde el ancla) cabe en Size*Fill
$up = 0; $dn = 0; $hw = 0
foreach ($b in $boxes) { $up = [math]::Max($up, $b[5]-$b[1]); $hw = [math]::Max($hw, [math]::Max($b[4]-$b[0], $b[2]-$b[4])) }
$s = [math]::Min(($Size*$Fill)/$up, ($Size*$Fill)/(2*$hw))
$strip = New-Object Drawing.Bitmap ($Size*$idx.Count), $Size, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [Drawing.Graphics]::FromImage($strip); $g.InterpolationMode = 'HighQualityBicubic'; $g.PixelOffsetMode = 'HighQuality'
$ay = $Size * (1 - (1-$Fill)/2)   # suelo del objeto
for ($i = 0; $i -lt $cells.Count; $i++) {
  $b = $boxes[$i]; $dx = $i*$Size + $Size/2 - $b[4]*$s; $dy = $ay - $b[5]*$s
  $g.DrawImage($cells[$i], [single]$dx, [single]$dy, [single]($cells[$i].Width*$s), [single]($cells[$i].Height*$s))
  # recorta lo que se salga a la celda vecina
  $cells[$i].Dispose()
}
$g.Dispose(); $src.Dispose()
$strip.Save((Join-Path (Get-Location) $Out), [Drawing.Imaging.ImageFormat]::Png); $strip.Dispose()
"ok $Out  ($($idx.Count) fotogramas de $Size px)"
