# Pasa una textura a tinta y acuarela de fondo liso a PNG con transparencia (2026-11-26).
#   -Modo blanco : fondo blanco -> transparente (conserva el color del pigmento)
#   -Modo negro  : fondo negro  -> transparente (para el papel fotografiado sobre negro)
#   -Modo opaco  : fondo blanco -> transparente pero la pincelada queda opaca, con su papel debajo (la acuarela conserva su luz sobre fondos oscuros)
#   -Modo tinte  : fondo blanco -> transparente y la tinta pasa al color -Tinte (p. ej. tinta dorada)
#   -Mezcla "#hex" -MezclaK 0.3 : empuja el color hacia ese tono;  -Gain : refuerza la opacidad;  -Max : lado mayor
# Recorta al contenido. Uso: powershell -File tools/tinta-alfa.ps1 -In a.jpg -Out b.png -Modo blanco [-Max 800]
param([string]$In,[string]$Out,[string]$Modo="blanco",[string]$Tinte="#e6cf96",[string]$Mezcla="",[double]$MezclaK=0,[double]$Gain=1.0,[int]$Max=900,[int]$Umbral=10)
Add-Type -AssemblyName System.Drawing
if (-not ("Alfa" -as [type])) {
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Imaging; using System.Runtime.InteropServices;
public static class Alfa {
  public static Bitmap Run(Bitmap src, string modo, int tr, int tg, int tb, int mr, int mg, int mb, double mk, double gain, int umbral) {
    int w=src.Width,h=src.Height; Bitmap o=new Bitmap(w,h,PixelFormat.Format32bppArgb);
    var r1=src.LockBits(new Rectangle(0,0,w,h),ImageLockMode.ReadOnly,PixelFormat.Format32bppArgb);
    var r2=o.LockBits(new Rectangle(0,0,w,h),ImageLockMode.WriteOnly,PixelFormat.Format32bppArgb);
    byte[] a=new byte[r1.Stride*h], b=new byte[r2.Stride*h]; Marshal.Copy(r1.Scan0,a,0,a.Length);
    for(int i=0;i<w*h;i++){ int p=i*4; double B=a[p],G=a[p+1],R=a[p+2]; double al,cr,cg,cb;
      if(modo=="negro"){ al=Math.Max(R,Math.Max(G,B)); al=Math.Min(255,al*gain); if(al<umbral){al=0;} double k=al/255.0; cr=k>0?R/k:0; cg=k>0?G/k:0; cb=k>0?B/k:0; }
      else if(modo=="opaco"){ double mn=Math.Min(R,Math.Min(G,B)); al=Math.Min(255,Math.Max(0,(255-mn-14)*4.0*gain)); if(al<umbral){al=0;} cr=R;cg=G;cb=B; }
      else { double mn=Math.Min(R,Math.Min(G,B)); al=Math.Min(255,(255-mn)*gain); if(al<umbral){al=0;} double k=al/255.0;
        if(modo=="tinte"){ cr=tr;cg=tg;cb=tb; } else { cr=k>0?(R-255*(1-k))/k:0; cg=k>0?(G-255*(1-k))/k:0; cb=k>0?(B-255*(1-k))/k:0; } }
      if(mk>0){ cr=cr+(mr-cr)*mk; cg=cg+(mg-cg)*mk; cb=cb+(mb-cb)*mk; }
      b[p]=(byte)Math.Max(0,Math.Min(255,cb)); b[p+1]=(byte)Math.Max(0,Math.Min(255,cg)); b[p+2]=(byte)Math.Max(0,Math.Min(255,cr)); b[p+3]=(byte)al; }
    Marshal.Copy(b,0,r2.Scan0,b.Length); src.UnlockBits(r1); o.UnlockBits(r2); return o; }
  public static Rectangle Box(Bitmap bm, int t){ int w=bm.Width,h=bm.Height,x0=w,y0=h,x1=-1,y1=-1;
    var r=bm.LockBits(new Rectangle(0,0,w,h),ImageLockMode.ReadOnly,PixelFormat.Format32bppArgb); byte[] a=new byte[r.Stride*h]; Marshal.Copy(r.Scan0,a,0,a.Length); bm.UnlockBits(r);
    for(int y=0;y<h;y++) for(int x=0;x<w;x++){ if(a[(y*w+x)*4+3]>t){ if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y; } }
    if(x1<0) return new Rectangle(0,0,w,h); x0=Math.Max(0,x0-4); y0=Math.Max(0,y0-4); x1=Math.Min(w-1,x1+4); y1=Math.Min(h-1,y1+4); return new Rectangle(x0,y0,x1-x0+1,y1-y0+1); }
}
"@
}
function Hex($h){ if(-not $h){return 0,0,0}; $h=$h.TrimStart('#'); return [Convert]::ToInt32($h.Substring(0,2),16),[Convert]::ToInt32($h.Substring(2,2),16),[Convert]::ToInt32($h.Substring(4,2),16) }
$raw=[Drawing.Bitmap]::FromFile((Resolve-Path $In)); $src=New-Object Drawing.Bitmap $raw.Width,$raw.Height,([Drawing.Imaging.PixelFormat]::Format32bppArgb); $g=[Drawing.Graphics]::FromImage($src); $g.DrawImage($raw,0,0,$raw.Width,$raw.Height); $g.Dispose(); $raw.Dispose()
$t=Hex $Tinte; $m=Hex $Mezcla
$o=[Alfa]::Run($src,$Modo,$t[0],$t[1],$t[2],$m[0],$m[1],$m[2],$MezclaK,$Gain,$Umbral)
$box=[Alfa]::Box($o,24); $s=[math]::Min([double]1,[double]$Max/[math]::Max($box.Width,$box.Height)); $W=[int]($box.Width*$s); $H=[int]($box.Height*$s)
$fin=New-Object Drawing.Bitmap $W,$H,([Drawing.Imaging.PixelFormat]::Format32bppArgb); $g=[Drawing.Graphics]::FromImage($fin); $g.InterpolationMode='HighQualityBicubic'; $g.PixelOffsetMode='HighQuality'
$g.DrawImage($o,[Drawing.Rectangle]::new(0,0,$W,$H),$box,[Drawing.GraphicsUnit]::Pixel); $g.Dispose()
$dst=if([IO.Path]::IsPathRooted($Out)){$Out}else{Join-Path (Get-Location) $Out}; $fin.Save($dst,[Drawing.Imaging.ImageFormat]::Png); "ok $Out ${W}x${H} $([math]::Round((Get-Item $dst).Length/1KB)) KB"
