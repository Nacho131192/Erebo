#!/bin/sh
# Captura del selector de misiones con todo desbloqueado y revelado. Uso: tools/vista-mapa.sh salida.png [ancho] [alto] [misionElegida 0-5]
R="/c/Users/Ignacio.Cortes/Documents/Erebo/src"
sed 's#<head>#<head><style>.mwStage,.mwMap *,.mwMk *{transition:none!important}</style>#' "$R/pueblo-sin-nombre.html" > "$R/_v.html"
cat >> "$R/_v.html" <<X
<script>setTimeout(()=>{const k=document.getElementById("kload");if(k)k.style.display="none";document.querySelectorAll(".view").forEach(v=>v.hidden=v.id!=="home");VIEW="home";HOME.closePop();HOME.map();HOME.mapAfter();
setTimeout(()=>{document.querySelector("[data-unlock]").click();seen={far:5,u:[0,1,2,3,4,5]};HOME.map();HOME.mapAfter();
setTimeout(()=>{const q=${4:-x};if(q!=="x")document.querySelector('#home .mwMk .hit[data-mi="'+q+'"]').click()},900)},700)},300)</script>
X
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --window-size=${2:-1440},${3:-900} --virtual-time-budget=14000 --screenshot="$1" "file:///C:/Users/Ignacio.Cortes/Documents/Erebo/src/_v.html" 2>/dev/null
rm -f "$R/_v.html"
