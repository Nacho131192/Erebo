# Mapa de Érebo

> **ARCHIVADO (Nacho, 2026-11-21):** ninguna de las cuatro versiones convenció. **No se usa ningún mapa de momento**; se guardan como referencia de ideas. Lo único aprobado para usar es la **lámina de las siete Rupturas** (`docs/rupturas-erebo.png`, texto en `docs/rupturas.md`).
>
> Estado anterior: segunda ronda de bocetos (2026-11-21). Nacho eligió el estilo **carta nocturna azul y oro** y pidió rehacer la geografía. Lo que viene del mapa político de `EREBO_CONTEXTO.md` está marcado como **BASE**; lo decidido por Nacho en esta conversación, como **DECIDIDO**; el resto (nombres, ciudades, forma de la costa, Rupturas inventadas) es **PROPUESTA** sin confirmar.

## Qué decidió Nacho

- **DECIDIDO:** estilo carta nocturna azul y oro.
- **DECIDIDO:** el mundo no es una isla rodeada de agua. Es parte de algo mucho mayor: **al este y un poco al norte la tierra continúa**, sin cartografiar, y de momento no importa qué es. Al oeste y al sur hay mar.
- **DECIDIDO:** un continente **más grande y con más geografía**.
- **DECIDIDO:** el **Muro es un anillo** de muralla, como el de una ciudad, y **en el centro solo hay polvo**: como si se hubiera borrado lo que había dentro, sin que se sepa qué era.
- **DECIDIDO:** las **Rupturas son siete** (una por Primordial). Puede haber más de una en el mismo reino o tierra.
- **DECIDIDO:** **Ocaso no sale** en el mapamundi. Se hará más adelante, en mapas más cercanos.

## Imágenes (docs/mapa/v2/comp/)

| Archivo | Qué es |
|---|---|
| `A.png` | **A · Costa abierta.** Mar al oeste y al sur; al este y al norte, tierra sin cartografiar con una llanura de ceniza y más cordilleras |
| `B.png` | **B · Fiordos y archipiélago.** La costa noroeste se rompe en fiordos e islas; bosques al este y un lago interior |
| `C.png` | **C · Mar interior.** Un mar cerrado, el Mar de Ceniza, en el noreste; cabos y calas al sur |
| `D.png` | **D · Golfo del Alba y delta.** Un golfo profundo desde el norte, el Río Verde en delta al sureste y un yermo al este |
| `rupturas.png` | Lámina de las siete Rupturas |

Los cuatro comparten el mismo mapa político y las mismas ciudades; cambian la costa, los accidentes y los lugares extra. Los fondos pintados sin rótulos están en `docs/mapa/v2/ai/` y los mapas de referencia, en `docs/mapa/v2/ref/`. (Los bocetos de la primera ronda siguen en `docs/mapa/comp/`, ya superados.)

## Entidades políticas (BASE de EREBO_CONTEXTO.md)

Drath (único reino), Keth Maran (ciudad-estado de gremios), Federación de Elos (alianza académica), Varek's Hold (ciudad neutral y con costa, contra el muro primordial), seis puertos independientes y territorios del sur sin gobierno.

## Las siete Rupturas

El nombre de Neth no aparece: su Ruptura es **la Ruptura del Muro**. Las de Kael y Vael son nuevas (el contexto original solo recogía cinco; Nacho pidió siete).

| Ruptura | Qué ocurre | Dónde (PROPUESTA) | Pictograma |
|---|---|---|---|
| **Del Muro** (el borrado) | Lo que cae en ella se olvida | El círculo de polvo tras el Muro y el pueblo sin nombre | Eclipse con la corona borrada |
| **De Eryn** (la selva) | La vida crece sin freno | El Enraizado, en el Bosque de Eryn | Árbol con raíces retorcidas |
| **De Orum** (las máquinas) | Mecanismos que despiertan solos | Los Engranajes, al sur de Elos | Engranaje con chispa |
| **De Sael** (las aguas) | El agua olvida la luna y la gravedad | El Remolino, en el mar al sureste | Remolino con ola |
| **De Varek** (la piedra) | Los límites dejan de valer | El Laberinto de Piedra, noreste de Drath | Bloques flotantes |
| **De Kael** (la mente) | Los pensamientos dejan de ser de uno solo | El Coro, en las tierras altas al norte de Drath | Red de nodos enlazados |
| **De Vael** (el instante) | El tiempo se atasca en un momento | El Instante, en los Territorios del Sur | Reloj de arena detenido |

La Ruptura del Muro aparece dos veces (el anillo y el pueblo sin nombre) porque Nacho decidió que es la misma. La de Kael enlaza con los Resonantes (red mental de Kael) y la de Vael, con el misterio central.

## Sitios propuestos

| Entidad | Sitios |
|---|---|
| Drath | Drathgard (capital), Corvale, Saltwen, Mornhal, Veldris |
| Federación de Elos | Elos, Anthyr, Quillmar |
| Keth Maran | Keth Maran, en una bahía del oeste |
| Seis puertos libres | Ysmar, Halden, Orrin Sal, Brannoch, Tessal, Kovrin (su posición cambia en cada versión) |
| Aldeas | El pueblo sin nombre, Claro de las Raíces, Vado Seco, Pasolargo |
| Otros | Cripta Primordial, El Hueso Hueco |

## Cómo se genera

Todo está en `tools/mapa/` (necesita Node, Python y Edge):

```
node tools/mapa/generar.mjs validar                       # sitios en tierra, Remolino en el mar
powershell -File tools/mapa/render.ps1 refs A,B,C,D       # mapas de referencia (colores planos)
powershell -File tools/mapa/render.ps1 comp A,B,C,D       # fondo pintado + rótulos → PNG
powershell -File tools/mapa/render.ps1 hoja               # lámina de Rupturas
```

- El **fondo pintado** se genera con Pollinations (`flux.2-klein-4b`, 0,005 pollen por imagen) repintando el mapa de referencia, sin texto. Entre las dos rondas se hicieron unas 35 imágenes (menos de 0,2 pollen).
- Todo el rotulado, símbolos, fronteras, leyenda y las Rupturas se dibujan en **SVG** sobre el fondo, así que se pueden cambiar sin volver a generar la imagen.
- `tools/mapa/comun.mjs` (reinos, ciudades, Rupturas), `variantes.mjs` (costa y terreno de cada versión), `estilos.mjs` (colores) y `hoja.mjs` (textos de las Rupturas) son los archivos editables.

## Preguntas abiertas

1. ¿Cuál de las cuatro geografías (A, B, C o D) prefieres, o qué mezclas de cada una?
2. ¿Los reinos y las ciudades se quedan donde están, o se mueven (p. ej. Elos más al este)?
3. ¿Te convencen las Rupturas de Kael y Vael y sus lugares?
4. ¿Nombres de ciudades, puertos y accidentes? Todos son provisionales.
5. ¿Qué detalle del anillo del Muro quieres: más grande, con rótulo propio, con un camino de acceso?
