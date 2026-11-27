# Fotogramas del puñal que se clava en la ficha de misión (2026-11-27, maqueta ficha-mision-v5).
# Parte de la lámina a tinta y acuarela del puñal (punta a la derecha, fondo transparente) y dibuja una tira
# horizontal de fotogramas: aparece unos centímetros a la izquierda del punto de clavado, vuela en arco
# (más cerca de la cámara al principio: más grande, con sombra lejana y desenfoque de movimiento), entra por
# la punta (la hoja se hunde en el papel y aparece la raja) y la empuñadura vibra hasta quedarse quieta.
# Todos los fotogramas comparten el «ancla» (punto de clavado), así que en la página solo hay que poner el ancla
# sobre el papel y reproducir la tira con steps().
# Uso: powershell -ExecutionPolicy Bypass -File tools/punal-fotogramas.ps1 -In punal.png -Out tira.png [-Largo 300] [-Angulo 45] [-DX0 -215 -DY0 -78 -Arco 42]  (DX0/DY0: de dónde sale respecto al punto de clavado)
param([string]$In,[string]$Out,[int]$Largo=300,[double]$Angulo=45,[double]$DX0=-215,[double]$DY0=-78,[double]$Arco=42,[int]$W=660,[int]$H=380,[int]$AX=575,[int]$AY=290)
Add-Type -AssemblyName System.Drawing
if (-not ("Punal" -as [type])) {
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Drawing2D; using System.Drawing.Imaging; using System.Collections.Generic;
public static class Punal {
  // pose: desplazamiento del ancla, ángulo (grados, eje del puñal respecto a la horizontal, punta abajo a la derecha),
  // escala, hundimiento (px de hoja dentro del papel), sombra (dx, dy, desenfoque, opacidad) y opacidad del puñal.
  public class Pose { public double dx,dy,ang,sc,sink,sdx,sdy,sblur,salpha,alpha; public bool slit; public double flecks;
    public Pose(double dx,double dy,double ang,double sc,double sink,double sdx,double sdy,double sblur,double salpha,double alpha,bool slit,double flecks){
      this.dx=dx;this.dy=dy;this.ang=ang;this.sc=sc;this.sink=sink;this.sdx=sdx;this.sdy=sdy;this.sblur=sblur;this.salpha=salpha;this.alpha=alpha;this.slit=slit;this.flecks=flecks;} }
  static Bitmap src, shadow; static int tipX, tipY; static double f;
  static void Prep(string inp, int largo){
    src=new Bitmap(inp); int w=src.Width,h=src.Height; int minX=w,maxX=0;
    for(int x=0;x<w;x++) for(int y=0;y<h;y++){ if(src.GetPixel(x,y).A>120){ if(x<minX)minX=x; if(x>maxX)maxX=x; } }
    // punta: el píxel opaco más a la derecha (centro de los que haya en esa columna)
    int sy=0,n=0; for(int y=0;y<h;y++) if(src.GetPixel(maxX,y).A>120){sy+=y;n++;}
    tipX=maxX; tipY=n>0?sy/n:h/2; f=(double)largo/(maxX-minX);
    shadow=new Bitmap(w,h,PixelFormat.Format32bppArgb);
    for(int x=0;x<w;x++) for(int y=0;y<h;y++){ int a=src.GetPixel(x,y).A; shadow.SetPixel(x,y,Color.FromArgb(a,28,17,6)); }
  }
  static ImageAttributes Alpha(double a){ var cm=new ColorMatrix(); cm.Matrix33=(float)Math.Max(0,Math.Min(1,a)); var ia=new ImageAttributes(); ia.SetColorMatrix(cm); return ia; }
  static void Draw(Graphics g, Bitmap img, double ax, double ay, double ang, double sc, double sink, double a){
    if(a<=0.003) return;
    var st=g.Save(); g.TranslateTransform((float)ax,(float)ay); g.RotateTransform((float)ang); g.ScaleTransform((float)(f*sc),(float)(f*sc));
    double cut=sink/(f*sc); int sw=(int)Math.Round(tipX+2-cut); if(sw<4){g.Restore(st);return;}
    var dest=new Rectangle((int)Math.Round(-(tipX-cut)), -tipY, sw, img.Height);
    g.DrawImage(img, dest, 0, 0, sw, img.Height, GraphicsUnit.Pixel, Alpha(a));
    g.Restore(st);
  }
  public static void Run(string inp, string outp, int largo, double angF, int W, int H, int AX, int AY, double dx0, double dy0, double arco){
    Prep(inp, largo);
    var P=new List<Pose>();
    // vuelo: 7 fotogramas en arco, de lejos (izquierda y arriba) al punto de clavado
    double[] T={0,.2,.38,.55,.7,.85,1};
    for(int i=0;i<T.Length;i++){ double t=T[i], e=Math.Pow(t,.85);
      double dx=dx0*(1-t), dy=dy0*(1-t)-arco*Math.Sin(Math.PI*t);
      double ang=18+(angF-18)*e, sc=1.24-0.24*t;
      P.Add(new Pose(dx,dy,ang,sc,0, 50*(1-t)+7*t, 64*(1-t)+9*t, 12*(1-t)+2.5*t, .22+.26*t, i==0?.35:(i==1?.8:1), false, 0)); }
    // impacto: la punta entra (la hoja se hunde) y la empuñadura sigue un poco por inercia
    P.Add(new Pose(0,0,angF+2.6,1,16,7,9,2.5,.5,1,true,1));
    P.Add(new Pose(0,0,angF-3.6,1,25,7,9,2.5,.5,1,true,.7));
    // vibración amortiguada alrededor del punto de clavado
    double[] Q={3.2,-2.4,1.7,-1.1,.7,-.35,.15,0};
    for(int i=0;i<Q.Length;i++) P.Add(new Pose(0,0,angF+Q[i],1,28,7,9,2.5,.5,1,true,i<2?.4-.2*i:0));
    int F=P.Count; var strip=new Bitmap(W*F,H,PixelFormat.Format32bppArgb);
    var rnd=new Random(7); var fl=new List<double[]>(); for(int k=0;k<14;k++) fl.Add(new double[]{rnd.NextDouble()*Math.PI*2, 6+rnd.NextDouble()*22, 1+rnd.NextDouble()*2.2, rnd.NextDouble()});
    using(var g=Graphics.FromImage(strip)){
      g.SmoothingMode=SmoothingMode.AntiAlias; g.InterpolationMode=InterpolationMode.HighQualityBicubic; g.PixelOffsetMode=PixelOffsetMode.HighQuality;
      for(int i=0;i<F;i++){ var p=P[i]; double ox=W*i+AX+p.dx, oy=AY+p.dy;
        var clip=g.Clip; g.SetClip(new Rectangle(W*i,0,W,H));
        // sombra (desenfocada con varias copias)
        int ns=p.sblur>4?16:8;
        for(int k=0;k<ns;k++){ double a2=2*Math.PI*k/ns, r=p.sblur*(k%2==0?1:.5);
          Draw(g, shadow, ox+p.sdx+r*Math.Cos(a2), oy+p.sdy+r*Math.Sin(a2), p.ang, p.sc, p.sink, p.salpha*p.alpha/ns*1.6); }
        // hundimiento del papel alrededor de la entrada (debajo del puñal)
        if(p.slit){ var st=g.Save(); g.TranslateTransform((float)(W*i+AX),(float)AY); g.RotateTransform((float)(p.ang+90));
          using(var b=new SolidBrush(Color.FromArgb(55,32,18,6))) g.FillEllipse(b,-17,-6,34,12);
          g.Restore(st); }
        // desenfoque de movimiento: copias entre la pose anterior y esta
        if(i>0 && i<7){ var q=P[i-1]; int ng=12;
          for(int k=1;k<=ng;k++){ double u=(double)k/(ng+1);
            Draw(g, src, W*i+AX+q.dx+(p.dx-q.dx)*u, AY+q.dy+(p.dy-q.dy)*u, q.ang+(p.ang-q.ang)*u, q.sc+(p.sc-q.sc)*u, 0, (.05+.07*u)*p.alpha); } }
        Draw(g, src, ox, oy, p.ang, p.sc, p.sink, p.alpha);
        // raja: corte oscuro perpendicular a la hoja donde entra, con un labio de papel claro
        if(p.slit){ var st=g.Save(); g.TranslateTransform((float)(W*i+AX),(float)AY); g.RotateTransform((float)(p.ang+90));
          using(var b=new SolidBrush(Color.FromArgb(215,26,14,5))) g.FillEllipse(b,-12,-2.6f,24,5.2f);
          using(var pn=new Pen(Color.FromArgb(150,246,234,205),1.4f)) g.DrawArc(pn,-13,-1f,26,5.6f,10,160);
          g.Restore(st); }
        // motas de papel y tinta que salta al clavarse
        if(p.flecks>0){ foreach(var d in fl){ double rr=d[1]*(1.6-p.flecks*.6); double x=W*i+AX+rr*Math.Cos(d[0]), y=AY+rr*Math.Sin(d[0])*.7;
            int al=(int)(200*p.flecks*(0.4+0.6*d[3])); var col=d[3]>.55?Color.FromArgb(al,40,24,10):Color.FromArgb(al,238,225,192);
            using(var b=new SolidBrush(col)) g.FillEllipse(b,(float)(x-d[2]/2),(float)(y-d[2]/2),(float)d[2],(float)d[2]); } }
        g.Clip=clip; }
    }
    strip.Save(outp, ImageFormat.Png);
    Console.WriteLine("ok "+outp+" "+F+" fotogramas de "+W+"x"+H+" ancla "+AX+","+AY);
  }
}
"@
}
[Punal]::Run((Resolve-Path $In).Path, [IO.Path]::GetFullPath((Join-Path (Get-Location) $Out)), $Largo, $Angulo, $W, $H, $AX, $AY, $DX0, $DY0, $Arco)
