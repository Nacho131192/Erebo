# Montaje a mano de la lámina final del Panorama del Muro (tanda 7, 2026-11-26):
#   escena de C3 + Muro de C1 (todo lo que queda a la derecha de la línea BORDE, fundido FUNDIDO px) + los dos barcos de R4 (elipses difuminadas).
# Las tres imágenes miden 1792x768 y comparten encuadre, así que se pega cada pieza en el mismo sitio.
# Uso (desde Erebo):  powershell -NoProfile -ExecutionPolicy Bypass -File tools/panorama-montaje.ps1
param(
  [string]$Escena = "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s307.jpg",
  [string]$Muro   = "assets/borradores/panorama-v5/panorama5-mar-cero_flux.2-klein-4b_s101.jpg",
  [string]$Barcos = "assets/borradores/panorama-v6/panorama6-c1_flux.2-klein-4b_s503.jpg",
  [string]$Salida = "assets/pruebas/panorama7-montaje.jpg",
  [double]$Fundido = 28
)
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Imaging; using System.Runtime.InteropServices;
public static class Montaje {
  static byte[] Leer(Bitmap b, out int stride){var d=b.LockBits(new Rectangle(0,0,b.Width,b.Height),ImageLockMode.ReadOnly,PixelFormat.Format24bppRgb);stride=d.Stride;var a=new byte[stride*b.Height];Marshal.Copy(d.Scan0,a,0,a.Length);b.UnlockBits(d);return a;}
  // borde: pares (y, x) ordenados por y; a la derecha de x(y) manda la imagen del Muro.
  public static Bitmap Hacer(Bitmap esc, Bitmap muro, Bitmap barcos, double[] borde, double fundido, double[] elipses){
    int w=esc.Width,h=esc.Height,s; var A=Leer(esc,out s); var B=Leer(muro,out s); var C=Leer(barcos,out s); var O=new byte[A.Length];
    for(int y=0;y<h;y++){
      double xb=borde[1];
      for(int i=0;i+3<borde.Length;i+=2){ if(y>=borde[i]&&y<=borde[i+2]){double t=(y-borde[i])/(borde[i+2]-borde[i]);xb=borde[i+1]+t*(borde[i+3]-borde[i+1]);break;} if(y>borde[i+2]) xb=borde[i+3]; }
      for(int x=0;x<w;x++){
        double am=Math.Max(0,Math.Min(1,(x-xb)/fundido+0.5)); am=am*am*(3-2*am);
        double ab=0;
        for(int e=0;e+3<elipses.Length;e+=4){double dx=(x-elipses[e])/elipses[e+2],dy=(y-elipses[e+1])/elipses[e+3],r=Math.Sqrt(dx*dx+dy*dy);double v=Math.Max(0,Math.Min(1,(1.0-r)/0.35));v=v*v*(3-2*v);if(v>ab)ab=v;}
        int p=y*s+x*3;
        for(int c=0;c<3;c++){double v=A[p+c]*(1-am)+B[p+c]*am; v=v*(1-ab)+C[p+c]*ab; O[p+c]=(byte)Math.Round(v);}
      }
    }
    var o=new Bitmap(w,h,PixelFormat.Format24bppRgb);var d=o.LockBits(new Rectangle(0,0,w,h),ImageLockMode.WriteOnly,PixelFormat.Format24bppRgb);Marshal.Copy(O,0,d.Scan0,O.Length);o.UnlockBits(d);return o;
  }
}
"@
function Abrir($p){ $i=[System.Drawing.Image]::FromFile((Resolve-Path $p)); $b=New-Object System.Drawing.Bitmap $i; $i.Dispose(); $b }
$e=Abrir $Escena; $m=Abrir $Muro; $b=Abrir $Barcos
# Borde izquierdo del Muro de C1 (y, x): baja desde la esquina de la albardilla hasta el cuerpo bajo del Muro y las rocas.
$borde=[double[]](0,1305, 235,1292, 300,1215, 395,1140, 570,1160, 768,1120)
# Barcos de R4 (centro x, centro y, radio x, radio y): velero pequeño y coca.
$elipses=[double[]](745,402,72,58, 1066,338,92,72)
$o=[Montaje]::Hacer($e,$m,$b,$borde,$Fundido,$elipses)
$enc=[System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()|?{$_.MimeType -eq 'image/jpeg'}
$pp=New-Object System.Drawing.Imaging.EncoderParameters 1
$pp.Param[0]=New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality),([long]92)
$o.Save((Join-Path (Get-Location) $Salida),$enc,$pp); $o.Dispose();$e.Dispose();$m.Dispose();$b.Dispose()
"Guardado $Salida"
