#!/bin/sh
# Captura una página local con Edge sin cabeza. Uso: tools/captura.sh <url> <salida.png> [ancho] [alto] [ms]
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --window-size=${3:-1440},${4:-900} --virtual-time-budget=${5:-7000} --screenshot="$2" "$1" 2>/dev/null
