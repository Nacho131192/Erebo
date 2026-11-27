# Configuración de Claude para el ordenador grande

Sacado del portátil Lenovo el 2026-11-27. **No lleva ninguna clave**, solo dónde va cada una.

## Lo importante primero

Los plugins y los conectores **van con tu cuenta de claude.ai, no con el ordenador**. Si en el ordenador grande entras con la misma cuenta, ya deberían salir solos. Lo único que no viaja es lo local: las claves (variables de entorno), los programas (Python, Git, gh) y el `launch.json` de la vista previa.

## 1. Plugins (14, todos activos en la cuenta)

| Plugin | Para qué lo usamos | ¿Necesita algo? |
|---|---|---|
| superpowers | Lluvia de ideas, planes, depuración, verificación | Nada |
| frontend-design | Diseño de páginas con criterio | Nada |
| vectorlab-ux-skills | Tipografía, color, espaciado, movimiento, «anti-slop» | Nada |
| design | Crítica de diseño, accesibilidad, textos de interfaz | Sus conectores (Figma, Intercom…) son opcionales |
| engineering | Arquitectura, depuración, documentación | Sus conectores (Slack, GitHub, Notion…) son opcionales y aquí **no** están conectados |
| prompt-design | Escribir y revisar prompts | Nada |
| meshy-3d-agent | Modelos 3D, texturas, impresión 3D | Clave de Meshy si algún día se usa (aquí no está puesta) |
| claude-security | Revisión de seguridad del código | Nada |
| claude-code-setup | Recomendar automatizaciones | Nada |
| code-review | Revisión de PR | Nada |
| code-simplifier | Simplificar código | Nada |
| feature-dev | Desarrollo guiado de funciones | Nada |
| pr-review-toolkit | Agentes de revisión de PR | Nada |
| cowork-plugin-management | Crear y ajustar plugins | Nada |

Si falta alguno: claude.ai → menú de **Personalizar / Plugins** → buscarlo por su nombre y activarlo.

## 2. Conectores (los de verdad conectados)

| Conector | Para qué | Permiso |
|---|---|---|
| **Claude Docs** | El documento de la misión 1 («El Pueblo Sin Nombre – Misión 1») | Iniciar sesión con la cuenta |
| **Gmail** | Leer y redactar correo | Iniciar sesión con Google y aceptar los permisos |
| **TubeAlfred** | Datos y transcripciones de YouTube (solo lectura) | Activarlo |
| **Shutterstock** | Buscar imágenes de stock | Activarlo |

Si falta alguno: claude.ai → **Ajustes → Conectores** → añadirlo y darle a «Conectar».

Además, la app de escritorio trae de serie las **tareas programadas**, el **navegador integrado** y **Claude in Chrome** (este último necesita la extensión de Chrome instalada en ese ordenador).

Los conectores de los plugins *engineering* y *design* (Slack, Linear, Notion, Atlassian, Datadog, PagerDuty, Figma, Intercom) piden iniciar sesión y GitHub/Asana fallan; **no los usamos**, se pueden dejar así.

## 3. Lo local (esto sí hay que ponerlo a mano)

1. **Programas**: Git, GitHub CLI (`gh`) y Python 3.12 (con el lanzador `py`).
2. **Sesión de GitHub**: `gh auth login` con la cuenta Nacho131192.
3. **Clave de Pollinations** (imágenes y voz): variable de usuario `POLLINATIONS_API_KEY` (empieza por `sk_`). Sácala de tu cuenta de Pollinations o cópiala del portátil; no la pegues en el chat.
4. *(Opcional)* `GEMINI_API_KEY` si vuelves a usar Gemini.
5. **Vista previa**: `Erebo/.claude/launch.json` (no se sube a Git). Lo crea el texto de abajo.

## 4. Texto para pegar en Claude Code en el ordenador grande

Abre Claude Code en la carpeta `Erebo` y pega esto tal cual:

```text
Estoy configurando este ordenador igual que mi portátil. Hazlo paso a paso y pregúntame antes de instalar nada:

1. Lista mis plugins de claude.ai (ListPlugins) y comprueba que están activos estos 14: superpowers, frontend-design, vectorlab-ux-skills, design, engineering, prompt-design, meshy-3d-agent, claude-security, claude-code-setup, code-review, code-simplifier, feature-dev, pr-review-toolkit y cowork-plugin-management. Dime cuáles faltan y cómo activarlos.
2. Mira el estado de los conectores de esta sesión y comprueba que están conectados Claude Docs, Gmail, TubeAlfred y Shutterstock. Si falta alguno, dime dónde conectarlo. Los de Slack, Linear, Notion, Atlassian, Datadog, PagerDuty, Figma, Intercom, GitHub y Asana (de los plugins engineering y design) no los uso: ignóralos.
3. Comprueba si están instalados Git, GitHub CLI (gh) y Python 3.12 con el lanzador py. Si falta alguno, propónme instalarlo con winget y espera a que diga que sí.
4. Comprueba si gh tiene la sesión iniciada (gh auth status). Si no, dime que ejecute gh auth login yo mismo.
5. Comprueba si existe la variable de usuario POLLINATIONS_API_KEY (solo si existe, nunca me enseñes su valor). Si no existe, dime cómo crearla yo sin pegar la clave en el chat.
6. Crea .claude/launch.json en esta carpeta con dos servidores: "pagina" (py -m http.server 8766 --directory src, puerto 8766) y "maquetas" (py -m http.server 8770 --directory docs/maquetas, puerto 8770).
7. Ejecuta git status -sb y git pull en main, y luego py src/template/build.py para comprobar que la página se genera.
Al final, hazme un resumen de lo que está listo y de lo que me toca hacer a mí.
```
