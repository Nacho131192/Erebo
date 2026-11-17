# El Pueblo Sin Nombre — campaña propia de Age of Fantasy: Quest

Contexto completo para continuar el trabajo en Claude Code. Léelo entero antes de tocar nada.

## 1. Quién es el usuario y cómo trabajar con él

- Se llama **Nacho**. Habla español e inglés; **responde siempre en español**.
- Construye mundos de fantasía para D&D 5e. Su ambientación se llama **Érebo** (en desarrollo).
- Quiere jugar **Age of Fantasy: Quest** (One Page Rules, "OPR") y crear su **propia campaña** de varias misiones.
- Quiere resultados **premium, bonitos y pulidos**, con gráficos hechos a mano (SVG/código), y que le **pregunten** lo que haga falta antes de construir. Le gusta decidir sobre **maquetas** con varias alternativas.
- **Los nombres de las palabras clave de las reglas se quedan en inglés** (Ambush, Caster, Fast, Fear, Stealth, Villain, Tough, Rending, AP…). Ya lo confirmó: no traducir.
- Los términos de estado y reglas sí van en español, como en el reglamento en español de OPR: Aturdido, Afligido, Enfermo, Debilitado, Afectado, poder, Descubrir, Alertness (se deja así).
- Separar siempre **reglas oficiales de OPR** y **reglas de la casa** (etiquetarlas).
- Declinó de momento clonar una voz / añadir lectura en voz alta (TTS) al artefacto. Quedó "para más adelante".

## 2. La campaña

Seis misiones. Solo la 1 está desarrollada.

| # | Misión | Tema |
|---|---|---|
| 1 | **El pueblo vacío** | Ruptura de Neth · Borrados y Culto del Umbral |
| 2 | El camino de las raíces | Ruptura de Eryn · terreno peligroso y veneno |
| 3 | La aldea sitiada | Asedio del Culto · los Resonantes como aliados |
| 4 | La emboscada | Concordancia de Orum · una tercera facción |
| 5 | La cripta primordial | Deudores de Vael · ruina de un Primordial |
| 6 | El corazón del borrado | Hermano Ocaso · villano final (nombre inventado) |

Lore usado (poco; el usuario pidió "no darle demasiada importancia al trasfondo, quiero las misiones"):
- Los **Primordiales** dejaron de responder. Quedan **Rupturas** (zonas donde la realidad falla). **Neth** = borrado.
- **Varek's Hold**: ciudad contra un muro que nadie construyó. Tres Voces: **Muro** (vigila), **Mercado** (monedas), **Filo** (paga por lo que no debe constar). El Filo contrata a los héroes.
- **Culto del Umbral**: cultistas cerca de donde Neth borra.
- El final de la misión 1 deja una dirección: **Ocaso** (gancho hacia el villano de la misión 6).
- Para más lore de Érebo, el usuario lo trabaja en otra conversación (memoria: `/areas/erebo.md`).

## 3. Reglas de OPR que usa la campaña (Campaign Builder v2.1.0 + reglamento en español)

El usuario pasó los dos PDFs. Resumen de lo que se aplicó:
- Los **héroes actúan primero**; la **IA** activa sus unidades empezando por la más cercana.
- **Alertness**: +1 al final de cada ronda, **+2 si no queda ningún enemigo en la mesa**. A **6** entran **refuerzos** y vuelve a 0.
- **Centinelas**: se despliegan al empezar en el **centro de un cuadrante al azar** (un dado por unidad: 1-4 ese cuadrante, 5-6 elige el jugador).
- **Refuerzos**: cada unidad entra a **6" o menos de una esquina al azar** (mismo dado).
- **Héroes**: se despliegan a 6" de una esquina al azar.
- **Fichas de búsqueda** (cofres): D3 + nº de héroes.
- **Tamaño de oleada** = % de los puntos totales de los héroes según dificultad: **1=25%, 2=50%, 3=100%, 4=200%**.
- **Objetivo principal: búsqueda por zonas** (3 marcadores, tirada de Wil, 5+ o el último). **Secundario**: tabla d6, se prepara al final de la ronda en que se cumple el principal y sube la Alertness en 3.
- **XP** (D = dificultad 1-4): principal 2×D, secundario D, destruir oleada del jefe 2×D, máximo 5×D. **Oro de riesgo** 5×D. Nivel 2 con 3 XP, nivel 3 con 6 XP.
- **Pelea de jefe** (opcional): tras ambos objetivos, al final de esa ronda llega una oleada de **doble valor** y no entran más refuerzos.
- **Noche/Alba/Día**: empieza de noche (-1 a impactar al disparar, visión 12"), alba con los primeros refuerzos, día después.
- Al terminar: los héroes recuperan 3 heridas y 3 de poder. Derrota: todos inconscientes a la vez = repiten el capítulo.
- Estados: Aturdido, Afligido (Fuerza, 1 herida), Enfermo (Voluntad), Debilitado (Destreza, mueve la mitad), Afectado (gasta D3 de poder, -1 a tiradas de característica).

## 4. Reglas de la casa (no oficiales) — mantener etiquetadas

- **Eventos de Neth**: tabla 2d6 (decenas/unidades, 11-66, 36 eventos), adaptada del modo horda. Se tira al empezar la ronda 1 y cada vez que entran refuerzos. 11 = Golpe del vacío = Aturdido; 12 = Afectado; 15 = Debilitado.
- **Sorpresas por oleada** (Ambush D3 rondas después; Caster que da +1 a impactar a Borrados a 6").
- **Cofres**: d6 contenido (1-2 Peligro, 3 elixires, 4 bombas, 5 pociones, 6 tesoro maldito) y subtablas. El Campaign Builder solo da los *nombres* de los objetos; **los efectos son de la casa**. Tesoro maldito: 5×D de oro **y** aparece un Borrado débil junto al héroe que lo abrió.
- **Diario del olvidado**: lo lleva quien retira el último marcador; da AP(1) contra el Heraldo.
- **Heraldo del Umbral** (jefe): Calidad 3+, Defensa 3+, Villain, Fear(3), Stealth, Caster(3), **Tough(7/9/10/12)** según dificultad, hoz del vacío 4 ataques AP(2) Rending; hechizos Olvido (1), Borrado (2), Silencio (3). Sin Aturdido con Tough(9)+; cada moral fallido le causa D3 heridas. **No está probado en mesa.**
- **Cantidad de centinelas**: el PDF no la fija; se asumió igual al tamaño de una oleada.
- **Principal sin atajo**: se cumple solo al retirar los 3 marcadores; no se usa la tirada de 5+ (decisión de Nacho, 2026-11-16).
- **Salida**: además de estar a 6" de la misma esquina, sin enemigos alrededor.
- **Secundario**: se prepara con un botón en cuanto se cumple el principal (no al final de la ronda), tirando o metiendo el d6 a mano.
- **Alertness de 1 a 6**: al llegar a 6 entran refuerzos y lo que sobra pasa a la nueva cuenta (la cuenta va de 1 a 6, como un dado: empieza en 1, a 6 entran refuerzos y vuelve siempre a 1; lo que sobra se pierde, para dar un respiro al jugador). Función `addAl` (fin de ronda, +1 manual y +3 del secundario). Si se llega a 6 con el +1 manual durante la partida, también se suma una ronda.
- **Refuerzos por alerta separados** (decisión de Nacho): al llegar la Alertness a 6, los refuerzos se sortean aparte (`alertWave`, `S.alw`) y se muestran dentro de "Nivel de alerta" (Sortear posiciones, "Ya están en la mesa" para ocultarlos, "Ver refuerzos generados (n)" con el historial). "Oleada actual" solo avanza con sus botones y ya no toca la Alertness. El sorteo descuenta las unidades de ambos. Noche/Alba/Día cuenta las llegadas de los dos (`nRef`).
- **Sin enemigos en mesa**: marcar la casilla suma +2 al momento (desmarcar lo resta); ese fin de ronda ya no suma el +1. Si así se llega a 6, entran refuerzos y se suma una ronda.

Todo el contenido de la misión (texto literal) está en `docs/mision-1.md`. Es la fuente de verdad. Ese archivo es la exportación del documento de Claude Docs "El Pueblo Sin Nombre – Misión 1: El pueblo vacío".

## 5. El artefacto (la página web)

Archivo final: `src/pueblo-sin-nombre.html` (una sola página, ~70 KB, sin dependencias salvo Google Fonts: Cinzel, Cinzel Decorative, Cormorant Garamond, Inter, Space Grotesk).
Se publicó como artefacto de claude.ai (privado, URL https://claude.ai/artifact/KqZJgnaBrhxonFkHZJyCFL, versión 17: oleadas con Army Forge, botón Primera oleada, títulos en cápsula dorada, objetivos rediseñados, configuración bloqueable, dados manuales y alerta que llega a 6).

### Cómo se genera
- `src/template/final-tpl.html`: plantilla con CSS + HTML + JS. Marcadores `%%DATA%%`, `%%SCENE%%`, `%%PORTRAIT%%`.
- `src/template/data.js`: textos extraídos de la misión (prólogo, objetivos, preparación, 36 eventos, narración, finales).
- `src/template/old-scene-source.html`: de ahí se extraen los dos SVG hechos a mano (escena de portada `svg.scene`, que define `<g id="her">`, y retrato `svg.por`, que lo reutiliza con `<use href="#her">`).
- `py src/template/build.py` (en Windows no hay `python3`; usar el lanzador `py`) regenera `src/pueblo-sin-nombre.html`.
- Láminas del Heraldo (2026-11-17): marcadores `%%IMG_RETRATO%%` y `%%IMG_JEFE%%`; `build.py` incrusta como data URI JPEG `assets/web/heraldo.jpg` (480×606, retrato del pergamino, clase `.por`) y `assets/web/heraldo-jefe.jpg` (640×808, cabecera `.hfimg` de `herFicha` en la mesa, solo en la pelea de jefe). Los originales (912×1152) y su ficha `.json` (modelo, semilla, prompt) están en `assets/heraldo.*` y `assets/heraldo-jefe.*`. La página pasa de ~118 KB a ~310 KB. El SVG `PORTRAIT` ya no se muestra (sigue en la plantilla por si hiciera falta). Se optimizan con System.Drawing de PowerShell (JPEG; sin WebP porque instalar Pillow se bloqueó).
- Si cambias textos de la misión en `docs/mision-1.md`, hay que regenerar `data.js` (parsear los apartados con las mismas expresiones; los cofres, los hechizos, la tabla de oleadas y la narración corta están además escritos a mano en la plantilla).

### Diseño elegido (tras 4 maquetas; la B "tráiler" se descartó)
- **A (grimorio)**: ambientación elegida. Una **sola hoja larga de pergamino** con rodillos de latón arriba y abajo, tipografía Cinzel/Cormorant, sellos de cera para numerar, ornamentos y láminas a tinta. Contiene la información de lectura: portada, prólogo, objetivos y recompensas, preparación con **mapa de cuadrantes dibujado a mano**, cofres (tablas plegables), enemigos y oleadas, eventos de Neth (plegable), Heraldo, narración completa y finales. Barra de capítulos fija con scroll-spy.
- **Selector de misiones** (2026-11-17, pantalla de inicio, `buildHome`/`paintHome`): al abrir la página se ve primero. Cabecera "El Pueblo Sin Nombre" y rejilla de 6 tarjetas (3 / 2 / 1 columnas): la misión I es un folio de pergamino con la escena (copia del SVG con ids prefijados `h-`) y botón "Entrar en la misión" (o "Continuar la partida" con "Partida en curso · Ronda N" si `S.round>0`); las II-VI salen selladas ("Sellada · Próximamente") con emblemas SVG a mano (`EMB`) y candado de cera. En móvil las selladas son filas compactas. Datos en `MIS`.
- **Pergamino (cambios 2026-11-17)**: orden Historia, Objetivos, Preparación, Eventos, Cofres, Heraldo, Narración, Oleadas (al final: Nacho aún no tiene claro cómo encajarlas con el generador de la mesa). Títulos de sección centrados; portada sin chips; prólogo sin las tres preguntas; tablas en tinta marrón; sin resaltar la dificultad (XP y barras). Eventos y cofres no muestran las tablas completas: tres tarjetas (`picks`: lo mejor, lo peor y uno al azar en cada visita). El **Heraldo** no muestra estadísticas en el pergamino (retrato provisional, rumores y cita); su ficha completa sale en "Oleada actual" de la mesa solo en la pelea de jefe (`herFicha`). La narración numera Ronda 4 y 5 (antes "refuerzos 1/2"; la mesa las sigue usando como `w1`/`w2`) y no muestra "Llega el Heraldo" (sorpresa; sí sale en la mesa). Finales enlazan con la misión 2 (Heraldo vivo que os sigue / semilla negra si muere). La plantilla lleva `<!doctype html>` (sin él, las tablas no heredaban el color).
- **Pergamino**: vista `#mis`. Barra superior fija con botón "← Misiones" (esquina superior izquierda, vuelve al selector conservando la posición de lectura) y los capítulos.
- **C (mesa de juego)**: capa a **pantalla completa** que entra deslizándose desde la derecha al pulsar el **botón flotante** violeta (abajo a la derecha; muestra la ronda dentro de un anillo de 6 tramos de alerta y "Ronda N · Alerta x/6"; en móvil solo el círculo). Se cierra con la **X** de la esquina superior izquierda (sale hacia la derecha) o con Escape. Cabecera con ronda, Noche/Alba/Día, alerta y "Nueva partida". Las tarjetas se reparten en columnas según el ancho (`colsNow`: 3 desde 1280 px, 2 desde 760 px, 1 en móvil). Ya no existe la barra inferior del móvil.
- La plantilla lleva `<meta name="viewport">` para que el archivo funcione bien abierto directamente en el móvil.
- Vista previa local con recarga en vivo: `node ../.claude/live-server.mjs Erebo/src 8766` (configurado como `pagina-live` en `.claude/launch.json` de la carpeta superior); al ejecutar `build.py` la página se recarga sola.
- Estética: escritorio de madera oscura + pergamino; panel oscuro violeta/dorado para contrastar. Un único aspecto (no hay modo claro).

### Panel de juego — qué hace
Estado guardado en `localStorage` (clave `psn-m1-v2`, con try/catch; botón "Nueva partida" con doble pulsación).
1. **Configuración de partida** (incluye el bloque *Ejército enemigo* bajo Número de héroes; al empezar se puede ver la lista pero no cambiarla): dificultad 1-4 (debajo: "Experto (100% fuerza de enemigos)"), puntos de héroes (pasos de 25, por defecto 300), "Número de héroes" (2-4) y, al pie y centrado, el botón EMPEZAR PARTIDA. Al empezar (`S.round>0`) todo queda bloqueado (botones deshabilitados + guardas en `ACT`) con un aviso con candado; "Nueva partida" lo desbloquea. Todos los títulos de tarjeta van en cápsula dorada (`.pc h3 .tt`).
2. **Número de ronda** (recuadro propio): número grande, cápsula Noche/Alba/Día con la lista de sus efectos (`STG`: Noche -1 al disparar y visión 12"; Alba -1 al disparar; Día sin penalizaciones) y cuándo cambia y botón AVANZAR RONDA (antes "Fin de ronda": ronda +1 y Alertness +1, o nada si ya se sumó el +2). **Nivel de alerta**: medidor de 6 segmentos; "Fin de ronda" suma +1 (o +2 con la casilla "Sin enemigos en mesa (+2)"); al llegar a 6 entra la siguiente oleada, avisa y marca "tira evento de Neth". Botones −1/+1 manuales (el +1 ya puede llegar a 6). Junto al número grande pone "Número de ronda".
3. **Ejército enemigo** (dentro de Configuración, `armyBlock`): el jugador pega su lista exportada de Army Forge (textarea). Se guarda aparte en `localStorage` (clave `psn-army-v1`, "Nueva partida" no la borra); por defecto, la lista de Nacho (`ARMY_DEF` en la plantilla, 20 entradas, 37 unidades, 3185 pts; en el panel se ven unidades y, debajo, puntos). Formato por entrada: `Nx Nombre [modelos] Qn+ Dn+ | pts | reglas` + línea de armas; `Nx` = N copias, cada una al coste indicado (así suman los 3185).
4. **Oleada actual**: al empezar no hay oleada; el botón "PRIMERA OLEADA" (centrado, mayúsculas) la genera (`S.shown`) y después queda "Siguiente oleada" (oculto en la pelea de jefe). Sin cinta de pestañas ni nombre de la oleada en el título. Cada oleada se **sortea al azar** con unidades de esa lista hasta llenar su valor sin pasarse (`genComp`), y se guarda en `S.comp[k]` (se vuelve a sortear si cambian el valor o la lista). Primero usa copias que no salieron en oleadas anteriores; si no cabe ninguna, recicla (etiqueta "Reciclada": solo si ya fue eliminada). Nunca más copias de las que tiene en una misma oleada. En refuerzos impares, una unidad al azar lleva Ambush. En los pares, si sale una unidad con Caster, se aplica la sorpresa del +1. Jefe: Heraldo (150 pts estimados) + sorteo de 2×valor − 150. Se muestra el perfil completo de cada unidad. Botones "Sortear posiciones" y "Otra composición". Borrados, animales y cultistas son solo el papel narrativo.
5. **Texto de la ronda**: botón redondo de reproducir (de momento solo avisa de que el audio llegará más adelante); narración para leer en voz alta según el momento (inicio, rondas 1-3, refuerzos 1 y 2, objetivo principal, secundario, Heraldo).
6. **Objetivos**: tres "rastros del pueblo" (contador n de 3); secundario con botón "Preparar objetivo secundario" (activo al cumplir el principal: d6 con animación, +3 Alertness, puede traer refuerzos) y casilla de cumplido; botón "Escapar del pueblo" (a 6" de una esquina y sin enemigos; activo con el principal), "Activar pelea de jefe" (llega al final de esa ronda), "Heraldo destruido".
7. **Dados**: dos bloques separados (Evento de Neth y Cofre), cada uno con "Tirar" centrado (la app tira) o "Manual" (dos desplegables 1-6 + "Aplicar"; el cofre solo pide el segundo dado si el contenido es 1-5). Evento de Neth (2d6 de uno en uno, con ayudas "héroe nº X", "cuadrante N", "D3 = n") y cofre (contenido + subtirada, tesoro maldito calcula 5×D de oro).
8. **Cierre**: XP y oro acumulados, final de misión (sin jefe / con Heraldo destruido) o derrota.

### Supuestos que conviene revisar con el usuario
- El **Heraldo** cuenta como 150 pts (estimado; no existe en Army Forge). En nivel 1 la oleada del jefe es solo el Heraldo (2×75 − 150 = 0).
- **Numeración** de cuadrantes y esquinas del 1 al 4 en sentido horario desde el noroeste (sugerida; el PDF solo dice "numéralos de 1 a 4").
- Refuerzos 3 en adelante alternan los tipos 1 y 2.
- Probado en un navegador de pruebas (escritorio y móvil, flujo completo de partida, sin errores de JS). **No se probó** la persistencia en el navegador real ni la tipografía final (en el entorno de pruebas las fuentes de Google no cargaban).

## 6. Historial de decisiones importantes

- La misión se reescribió para seguir el **Campaign Builder oficial** (Alertness, esquinas, fichas de búsqueda, objetivos, XP, oro) manteniendo los elementos propios (Borrados, cultistas, perros, Heraldo, eventos de Neth, cofres, narración, prólogo).
- Errores corregidos por el camino: la Alertness no sube por ruido sino por ronda (+1/+2); estados Afectado y Debilitado estaban intercambiados; faltaba el nivel de dificultad en el oro del tesoro maldito.
- El usuario pidió prompts de modelado 3D / imagen para el Heraldo, los Borrados, un cultista y los animales deformados (ya entregados en la conversación; no están en este paquete).
- El prólogo se reescribió como una sola historia continua y se metió en el documento.

## 7. Pendiente / siguiente

1. Oleadas con la lista real de Army Forge: hecho (2026-11-16). Artefacto republicado (versión 8). Falta el reciclaje "bueno" (marcar bajas en el panel), que Nacho dejó para más adelante.
2. Ver su opinión sobre el aspecto final y el panel; iterar.
   - **Ilustraciones (2026-11-16)**: Nacho las genera a mano con prompts de `docs/imagenes.md` (opción elegida: a mano y gratis en la web de Google AI Studio; la API de imágenes de Gemini no tiene nivel gratuito y no se usa sin permiso de Nacho; su clave está en la variable de usuario GEMINI_API_KEY) y las deja en `assets/` (portada, heraldo, borrado, cultista, animal; opcionales prologo y varek). Al recibirlas: optimizar a WebP (instalar Pillow con `py -m pip install pillow`), sustituir los SVG de portada, retrato y fichas de enemigos (el mapa se queda en código) y vigilar el peso del artefacto.
   - **Heraldo hecho (2026-11-17)** con Pollinations (`flux.2-klein-4b`, ~0,27 Pollen en 57 bocetos). Diseño elegido por Nacho: túnica de sombra, armadura negra remachada con un cuerno hacia arriba en cada hombrera, capucha con vacío borrado (negro), medallón roto, hoz de cabeza de hierro labrado y hoja violeta (la de la alternativa VII), fondo de pergamino manchado más oscuro pero claramente más claro que la figura. Retrato: sin hoz, con tres esferas (semilla 212). Jefe: contrapicado sobre los tejados, armadura completa, hoz vertical agarrada (semilla 313). Galería de decisión: https://claude.ai/artifact/Pfth23E2EY6dXxUgT4rDzn. Para el resto de enemigos, usar estas láminas como referencia de estilo (subirlas con `--ref`). Quedan pendientes portada, borrado, cultista y animal.
   - **Pollinations (2026-11-17)**: alternativa por API a la generación a mano. Script `tools/pollinations.py` (solo biblioteca estándar): `modelos [--tipo image|audio|text] [--todos]`, `laminas`, `saldo`, `imagen <lamina> --modelo X --seed N [--ref ruta] [--final]`, `voz "texto" --modelo mai-voice-2.1`. Lee los prompts de `docs/imagenes.md`, guarda borradores en `assets/pruebas/` con una ficha `.json` (modelo, semilla, prompt) y con `--final` en `assets/<lamina>.ext`. Se niega a usar modelos `paid_only` sin `--permitir-pago`. API en `https://gen.pollinations.ai`; **exige clave `sk_`** (sin clave da 401) en la variable de usuario `POLLINATIONS_API_KEY`; nunca en el HTML. Las referencias locales se suben a media.pollinations.ai (URL pública no listada, caduca en 30 días). Modelos recomendados: `flux.1-schnell` (pruebas), `flux.2-klein-4b` (finales con referencia), `flux.1-kontext-pro` (retoques), `mai-voice-2.1` (narración en español). Los modelos `community/...` "free" registran o venden los prompts.
3. **Misión 2, "El camino de las raíces"** (Ruptura de Eryn, terreno peligroso y veneno): el usuario dijo "aún no"; primero afinar la misión 1. Reutilizar el mismo método: documento de misión → página con pergamino + panel (el panel puede configurarse por misión: oleadas, narración, eventos).
4. Ideas aparcadas: lectura en voz alta (TTS), emblemas de facción, mapa de la campaña, múltiples misiones en un mismo artefacto.

## 8. Estructura del paquete

```
CLAUDE.md                      este archivo
docs/mision-1.md               texto completo de la misión (fuente de verdad)
src/pueblo-sin-nombre.html     página final lista para abrir
src/template/final-tpl.html    plantilla (CSS, HTML, JS)
src/template/data.js           datos extraídos de la misión
src/template/old-scene-source.html  origen de los SVG de escena y retrato
src/template/build.py          regenera la página final
```

Aviso de licencia: campaña fan para Age of Fantasy: Quest de One Page Rules; las reglas oficiales no se reproducen de forma literal, y lo propio está etiquetado como regla de la casa.
