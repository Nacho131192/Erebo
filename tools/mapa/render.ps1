# Uso: powershell -File tools/mapa/render.ps1 <refs|comp|hoja> [A,B,C,D]
# Genera los HTML con node y los exporta a PNG con Edge sin interfaz (1600x1100; la lámina de Rupturas, 1600x1200).
param([string]$Modo = "comp", [string]$Variantes = "A,B,C,D")
$root = Resolve-Path (Join-Path $PSScriptRoot "../..")
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
function Captura($html, $png, $alto) {
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1600,$alto --virtual-time-budget=20000 --screenshot="$png" "file:///$($html -replace '\\','/')" 2>&1 | Out-Null
  "$png -> " + (Get-Item $png).Length
}
$ids = $Variantes -split ","
if ($Modo -eq "hoja") {
  node "$root/tools/mapa/generar.mjs" hoja
  $d = (Resolve-Path "$root/docs/mapa/v2/comp").Path
  Captura "$d\rupturas.html" "$d\rupturas.png" 1200
  return
}
foreach ($id in $ids) {
  if ($Modo -eq "refs") {
    node "$root/tools/mapa/generar.mjs" ref $id | Out-Null
    $d = (Resolve-Path "$root/docs/mapa/v2/ref").Path
    Captura "$d\ref-$id.html" "$d\ref-$id.png" 1100
  } else {
    node "$root/tools/mapa/generar.mjs" componer $id | Out-Null
    $d = (Resolve-Path "$root/docs/mapa/v2/comp").Path
    Captura "$d\$id.html" "$d\$id.png" 1100
  }
}
