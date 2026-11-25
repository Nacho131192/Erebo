param([string]$In,[string]$Out,[int]$Border=10)
Add-Type -AssemblyName System.Drawing
Add-Type -TypeDefinition @"
using System; using System.Drawing; using System.Drawing.Imaging; using System.Collections.Generic;
public static class Cut {
  public static void Run(string inp, string outp, int R) {
    Bitmap src = new Bitmap(inp);
    int w = src.Width, h = src.Height, pad = R + 4;
    int W = w + 2*pad, H = h + 2*pad;
    byte[] px = new byte[w*h*3];
    for (int y=0;y<h;y++) for (int x=0;x<w;x++){ Color c=src.GetPixel(x,y); int i=(y*w+x)*3; px[i]=c.R;px[i+1]=c.G;px[i+2]=c.B; }
    bool[] bg = new bool[w*h];
    Func<int,bool> light = (i)=>{ int r=px[i*3],g=px[i*3+1],b=px[i*3+2]; int mx=Math.Max(r,Math.Max(g,b)), mn=Math.Min(r,Math.Min(g,b)); return mn>=200 && mx-mn<=30; };
    Queue<int> q = new Queue<int>();
    for (int x=0;x<w;x++){ q.Enqueue(x); q.Enqueue((h-1)*w+x);} for (int y=0;y<h;y++){ q.Enqueue(y*w); q.Enqueue(y*w+w-1);}
    while(q.Count>0){ int p=q.Dequeue(); if(bg[p]) continue; if(!light(p)) continue; bg[p]=true; int x=p%w,y=p/w;
      if(x>0)q.Enqueue(p-1); if(x<w-1)q.Enqueue(p+1); if(y>0)q.Enqueue(p-w); if(y<h-1)q.Enqueue(p+w); }
    // enclosed pure-white holes (inside bow, under tail...) -> background
    bool[] seen = new bool[w*h];
    for (int s=0;s<w*h;s++){ if(bg[s]||seen[s]) continue; int r0=px[s*3],g0=px[s*3+1],b0=px[s*3+2]; if(!(Math.Min(r0,Math.Min(g0,b0))>=244 && Math.Max(r0,Math.Max(g0,b0))-Math.Min(r0,Math.Min(g0,b0))<=12)) continue;
      List<int> comp=new List<int>(); Queue<int> qq=new Queue<int>(); qq.Enqueue(s); seen[s]=true;
      while(qq.Count>0){ int p=qq.Dequeue(); comp.Add(p); int x=p%w,y=p/w; int[] nb={x>0?p-1:-1, x<w-1?p+1:-1, y>0?p-w:-1, y<h-1?p+w:-1};
        foreach(int t in nb){ if(t<0||bg[t]||seen[t]) continue; int r=px[t*3],g=px[t*3+1],b=px[t*3+2]; if(!(Math.Min(r,Math.Min(g,b))>=244 && Math.Max(r,Math.Max(g,b))-Math.Min(r,Math.Min(g,b))<=12)) continue; seen[t]=true; qq.Enqueue(t);} }
      if(comp.Count>=500) foreach(int p in comp) bg[p]=true; }
    // keep largest foreground component
    int[] lab = new int[w*h]; int best=0, bestN=0, n=0; List<int> sizes = new List<int>(); sizes.Add(0);
    for (int s=0;s<w*h;s++){ if(bg[s]||lab[s]!=0) continue; n++; int cnt=0; Queue<int> qq=new Queue<int>(); qq.Enqueue(s); lab[s]=n;
      while(qq.Count>0){ int p=qq.Dequeue(); cnt++; int x=p%w,y=p/w;
        int[] nb={x>0?p-1:-1, x<w-1?p+1:-1, y>0?p-w:-1, y<h-1?p+w:-1};
        foreach(int t in nb){ if(t<0||bg[t]||lab[t]!=0) continue; lab[t]=n; qq.Enqueue(t);} }
      sizes.Add(cnt); if(cnt>bestN){bestN=cnt;best=n;} }
    bool[] fg = new bool[W*H];
    for (int y=0;y<h;y++) for (int x=0;x<w;x++) { int lb=lab[y*w+x]; if(lb!=0 && (lb==best || sizes[lb] >= Math.Max(400, bestN/60))) fg[(y+pad)*W+x+pad]=true; }
    // fill small holes in fg that are background-colored but enclosed (keep as fg) -- already fg since not flood-reached
    bool[] bd = (bool[])fg.Clone();
    for (int y=0;y<H;y++) for (int x=0;x<W;x++){ if(!fg[y*W+x]) continue;
      for(int dy=-R;dy<=R;dy++){ int yy=y+dy; if(yy<0||yy>=H) continue; for(int dx=-R;dx<=R;dx++){ if(dx*dx+dy*dy>R*R) continue; int xx=x+dx; if(xx<0||xx>=W) continue; bd[yy*W+xx]=true; } } }
    // faster-than-naive guard: only boundary pixels need stamping, but image is small enough
    float[] a = new float[W*H]; for(int i=0;i<W*H;i++) a[i]=bd[i]?1f:0f;
    float[] a2 = new float[W*H];
    for (int y=1;y<H-1;y++) for (int x=1;x<W-1;x++){ float s=0; for(int dy=-1;dy<=1;dy++) for(int dx=-1;dx<=1;dx++) s+=a[(y+dy)*W+x+dx]; a2[y*W+x]=s/9f; }
    Bitmap o = new Bitmap(W,H,PixelFormat.Format32bppArgb);
    for (int y=0;y<H;y++) for (int x=0;x<W;x++){ float al=a2[y*W+x]; if(al<=0f) continue;
      int sx=x-pad, sy=y-pad; Color c=Color.White;
      if(fg[y*W+x] && sx>=0&&sy>=0&&sx<w&&sy<h){ int i=(sy*w+sx)*3; c=Color.FromArgb(px[i],px[i+1],px[i+2]); }
      o.SetPixel(x,y,Color.FromArgb((int)Math.Round(al*255),c.R,c.G,c.B)); }
    o.Save(outp, ImageFormat.Png); o.Dispose(); src.Dispose();
  }
}
"@ -ReferencedAssemblies System.Drawing
[Cut]::Run($In,$Out,$Border)
