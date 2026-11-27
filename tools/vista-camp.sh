#!/bin/sh
# Captura del selector de campañas con una partida empezada. Uso: tools/vista-camp.sh salida.png [ancho] [alto] [campaña 0-1]
R="/c/Users/Ignacio.Cortes/Documents/Erebo/src"
sed 's#<head>#<head><style>*{transition:none!important}</style>#' "$R/pueblo-sin-nombre.html" > "$R/_k.html"
cat >> "$R/_k.html" <<X
<script>setTimeout(()=>{const k=document.getElementById("kload");if(k)k.style.display="none";S.round=2;HOME.camp();if(${4:-0}===1)document.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true}))},300)</script>
X
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --window-size=${2:-1440},${3:-900} --virtual-time-budget=30000 --screenshot="$1" "file:///C:/Users/Ignacio.Cortes/Documents/Erebo/src/_k.html" 2>/dev/null
rm -f "$R/_k.html"
