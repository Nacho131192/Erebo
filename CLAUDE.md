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

Todo el contenido de la misión (texto literal) está en `docs/mision-1.md`. Es la fuente de verdad. Ese archivo es la exportación del documento de Claude Docs "El Pueblo Sin Nombre – Misión 1: El pueblo vacío".

## 5. El artefacto (la página web)

Archivo final: `src/pueblo-sin-nombre.html` (una sola página, ~70 KB, sin dependencias salvo Google Fonts: Cinzel, Cinzel Decorative, Cormorant Garamond, Inter, Space Grotesk).
Se publicó como artefacto de claude.ai (privado, URL https://claude.ai/artifact/KqZJgnaBrhxonFkHZJyCFL, versión 7).

### Cómo se genera
- `src/template/final-tpl.html`: plantilla con CSS + HTML + JS. Marcadores `%%DATA%%`, `%%SCENE%%`, `%%PORTRAIT%%`.
- `src/template/data.js`: textos extraídos de la misión (prólogo, objetivos, preparación, 36 eventos, narración, finales).
- `src/template/old-scene-source.html`: de ahí se extraen los dos SVG hechos a mano (escena de portada `svg.scene`, que define `<g id="her">`, y retrato `svg.por`, que lo reutiliza con `<use href="#her">`).
- `python3 src/template/build.py` regenera `src/pueblo-sin-nombre.html`.
- Si cambias textos de la misión en `docs/mision-1.md`, hay que regenerar `data.js` (parsear los apartados con las mismas expresiones; los cofres, los hechizos, la tabla de oleadas y la narración corta están además escritos a mano en la plantilla).

### Diseño elegido (tras 4 maquetas; la B "tráiler" se descartó)
- **A (grimorio)**: ambientación elegida. Una **sola hoja larga de pergamino** con rodillos de latón arriba y abajo, tipografía Cinzel/Cormorant, sellos de cera para numerar, ornamentos y láminas a tinta. Contiene la información de lectura: portada, prólogo, objetivos y recompensas, preparación con **mapa de cuadrantes dibujado a mano**, cofres (tablas plegables), enemigos y oleadas, eventos de Neth (plegable), Heraldo, narración completa y finales. Barra de capítulos fija con scroll-spy.
- **C (mesa de juego)**: **panel fijo** a la derecha (400 px) con todo lo necesario para jugar sin ruido. En **móvil** pasa a **barra inferior que se despliega** (hoja con velo).
- Estética: escritorio de madera oscura + pergamino; panel oscuro violeta/dorado para contrastar. Un único aspecto (no hay modo claro).

### Panel de juego — qué hace
Estado guardado en `localStorage` (clave `psn-m1-v2`, con try/catch; botón "Nueva partida" con doble pulsación).
1. **Partida**: dificultad 1-4, puntos de héroes (pasos de 25, por defecto 300), nº de héroes (2-4).
2. **Ronda y Alertness**: medidor de 6 segmentos; "Fin de ronda" suma +1 (o +2 con la casilla "no queda ningún enemigo"); al llegar a 6 entra la siguiente oleada, avisa y marca "tira evento de Neth". Botones −1/+1 manuales. Etiqueta Noche/Alba/Día.
3. **Oleada actual**: cinta Centinelas / R1 / R2… / Jefe; valor en puntos de la oleada; **unidades, cantidad y posición**; botón "Sortear posiciones" tira un d6 por unidad (1-4 cuadrante o esquina con ese número, 5-6 "a tu elección"); la unidad con Ambush tira D3 y da la ronda de entrada. "Adelantar oleada" manual.
4. **Texto de la ronda**: narración para leer en voz alta según el momento (inicio, rondas 1-3, refuerzos 1 y 2, objetivo principal, secundario, Heraldo).
5. **Objetivos**: 3 marcadores, "salió 5+", secundario (se tira al pulsar Fin de ronda tras cumplir el principal: d6, +3 Alertness), casilla de esquina final, "Activar pelea de jefe" (llega al final de esa ronda), "Heraldo destruido".
6. **Dados**: evento de Neth (2d6 de uno en uno, con ayudas "héroe nº X", "cuadrante N", "D3 = n") y cofre (contenido + subtirada, tesoro maldito calcula 5×D de oro).
7. **Cierre**: XP y oro acumulados, final de misión (sin jefe / con Heraldo destruido) o derrota.

### Supuestos que conviene revisar con el usuario
- Las **cantidades de unidades** se calculan con **costes orientativos inventados** por unidad: Borrados 60, animales deformados 45, unidad con Ambush 60, cultistas 80, cultista con Caster 70, Heraldo 150 (la oleada de jefe vale 2× el presupuesto, restando el Heraldo y repartiendo el resto a mitades entre Borrados y cultistas). Mínimo 1 unidad por tipo. Está avisado en la página. Hay que sustituirlos por los costes reales de su Army Forge cuando los dé.
- **Numeración** de cuadrantes y esquinas del 1 al 4 en sentido horario desde el noroeste (sugerida; el PDF solo dice "numéralos de 1 a 4").
- Refuerzos 3 en adelante alternan los tipos 1 y 2.
- Probado en un navegador de pruebas (escritorio y móvil, flujo completo de partida, sin errores de JS). **No se probó** la persistencia en el navegador real ni la tipografía final (en el entorno de pruebas las fuentes de Google no cargaban).

## 6. Historial de decisiones importantes

- La misión se reescribió para seguir el **Campaign Builder oficial** (Alertness, esquinas, fichas de búsqueda, objetivos, XP, oro) manteniendo los elementos propios (Borrados, cultistas, perros, Heraldo, eventos de Neth, cofres, narración, prólogo).
- Errores corregidos por el camino: la Alertness no sube por ruido sino por ronda (+1/+2); estados Afectado y Debilitado estaban intercambiados; faltaba el nivel de dificultad en el oro del tesoro maldito.
- El usuario pidió prompts de modelado 3D / imagen para el Heraldo, los Borrados, un cultista y los animales deformados (ya entregados en la conversación; no están en este paquete).
- El prólogo se reescribió como una sola historia continua y se metió en el documento.

## 7. Pendiente / siguiente

1. Pedir al usuario los costes de unidad reales (o su Army Forge) y ajustar `U` en la plantilla.
2. Ver su opinión sobre el aspecto final y el panel; iterar.
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
