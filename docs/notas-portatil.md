# Notas del portátil de Nacho

Copia guardada en el proyecto (2026-11-27) para consultarla desde el PC grande. En el portátil siguen también en `CLAUDE.local.md`, que no se sube a GitHub.

- Se trabaja **directamente en `main`** (decisión de Nacho, 2026-11-22). La rama `prueba-juego` se fusionó y se borró en GitHub; ya no se usa.
- Al empezar: comprobar la rama (`git status -sb`); si no es `main`, cambiar con `git switch main`. Luego `git pull`.
- Al terminar, cuando Nacho lo pida: commit y `git push` a `origin/main`.
- Si `git` no se encuentra en PowerShell, refrescar el PATH: `$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')` (Git está en `C:\Program Files\Git\cmd`, GitHub CLI en `C:\Program Files\GitHub CLI`).
- GitHub: sesión iniciada con `gh` como Nacho131192; Git usa `gh` para las credenciales.
- Python 3.12 instalado con winget (2026-11-17): `py src\template\build.py` funciona (refrescar el PATH si `py` no aparece). **No hay Node**: el `live-server.mjs` del ordenador grande no sirve aquí.
- Vista previa local en este portátil: `.claude/launch.json` (no se sube) arranca `py -m http.server 8766 --directory src` → http://localhost:8766/pueblo-sin-nombre.html. No tiene recarga en vivo: tras `build.py`, recargar a mano.
