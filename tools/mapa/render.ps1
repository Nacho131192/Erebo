# Uso: powershell -File tools/mapa/render.ps1 [estilo ...]
# Compone los estilos con node y los exporta a PNG (1600x1100) con Edge sin interfaz.
param([string[]]$Estilos = @("pergamino", "nocturna", "acuarela", "grabado"))
$root = Resolve-Path (Join-Path $PSScriptRoot "../..")
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if ($Estilos -contains "hojas") {
  node "$root/tools/mapa/generar.mjs" hoja
  $dir = (Resolve-Path "$root/docs/mapa/comp").Path
  foreach ($e in @("pergamino", "nocturna")) {
    & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1600,900 --virtual-time-budget=20000 --screenshot="$dir\rupturas-$e.png" "file:///$($dir -replace '\\','/')/rupturas-$e.html" 2>&1 | Out-Null
    "rupturas-$e -> " + (Get-Item "$dir\rupturas-$e.png").Length
  }
  return
}
foreach ($e in ($Estilos | ForEach-Object { $_ -split "," })) {
  node "$root/tools/mapa/generar.mjs" componer $e
  $dir = (Resolve-Path "$root/docs/mapa/comp").Path
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1600,1100 --virtual-time-budget=20000 --screenshot="$dir\$e.png" "file:///$($dir -replace '\\','/')/$e.html" 2>&1 | Out-Null
  "$e -> " + (Get-Item "$dir\$e.png").Length
}
