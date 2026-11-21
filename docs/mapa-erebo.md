# Mapa de Érebo: boceto del continente

> Estado: bocetos para decidir (2026-11-22). Lo que viene del mapa político de `EREBO_CONTEXTO.md` está marcado como **BASE**. Todo lo demás (forma del continente, nombres, ciudades, tipos de Ruptura, lugares) es **PROPUESTA** de Claude, sin confirmar por Nacho.

## Imágenes

Todas en `docs/mapa/comp/` (PNG 1600×1100; las láminas de Rupturas, 1600×900):

| Archivo | Qué es |
|---|---|
| `pergamino.png` | Mapa en pergamino antiguo (tinta sepia) |
| `nocturna.png` | Carta nocturna azul y oro (como el mapa de la web) |
| `acuarela.png` | Tinta y acuarela |
| `grabado.png` | Grabado oscuro, estilo grimdark |
| `rupturas-pergamino.png`, `rupturas-nocturna.png` | Lámina de las cinco Rupturas |

Los fondos pintados sin rótulos están en `docs/mapa/ai/` y el mapa de referencia de colores planos, en `docs/mapa/ref/`.

## Entidades políticas (BASE, de EREBO_CONTEXTO.md)

- **Drath:** único reino.
- **Keth Maran:** ciudad-estado gobernada por un consejo de gremios.
- **Federación de Elos:** alianza académica.
- **Varek's Hold:** ciudad neutral y amurallada contra el muro primordial; tres Voces. Ciudad con costa (decidido en esta conversación).
- **Seis puertos independientes.**
- **Territorios del sur sin gobierno.**

## Geografía propuesta

- **Forma:** un solo continente que se estrecha en un **istmo** al sur. El **Muro** cruza el istmo, y tras él hay una península que los Custodios guardan (qué hay allí no se define). Esto sitúa el muro **al sur** de Varek's Hold, como dice el texto de la misión: su sombra llega a la bahía a mediodía en invierno.
- **Mares:** Mar del Silencio (oeste), Mar Quebrado (sur y este), Bahía del Muro y Bahía Salobre.
- **Montañas:** Colmillos del Norte, Montes de Hierro, El Espinazo, Cumbres Grises.
- **Bosque de Eryn:** gran bosque al noroeste. Allí se dirige el camino de la Misión 2.
- **Ríos y lagos:** Río Drath (acaba en Keth Maran), Río Verde, Lago Espejo, Lago Salobre.
- **Frontera y pueblo:** el pueblo sin nombre está al norte de la frontera de Varek's Hold, en el camino hacia Drathgard.

## Sitios propuestos

| Entidad | Sitios |
|---|---|
| Drath | Drathgard (capital), Corvale, Saltwen, Mornhal, Veldris |
| Federación de Elos | Elos, Anthyr, Quillmar |
| Keth Maran | Keth Maran (en una bahía del oeste) |
| Seis puertos libres | Ysmar, Halden, Orrin Sal, Brannoch, Tessal, Kovrin |
| Otros | Claro de las Raíces (Senda de Eryn), Ocaso (marcado como lugar fantasma), Cripta Primordial, El Hueso Hueco |

## Las cinco Rupturas (PROPUESTA)

El nombre de Neth no aparece en ningún texto visible: su Ruptura es **la Ruptura del Muro**.

| Ruptura | Qué ocurre | Dónde | Pictograma |
|---|---|---|---|
| **Del Muro** (el borrado) | Lo que cae en ella se olvida | Junto al Muro y en el pueblo sin nombre | Eclipse con la corona borrada |
| **De Eryn** (la selva) | La vida crece sin freno: raíces que caminan | El Enraizado (Bosque de Eryn) | Árbol con raíces retorcidas |
| **De Orum** (las máquinas) | Mecanismos que despiertan solos | Los Engranajes (sur de Elos) | Engranaje con chispa |
| **De Sael** (las aguas) | El agua olvida la luna y la gravedad | El Remolino (Mar Quebrado) | Remolino con ola |
| **De Varek** (la piedra) | Los límites dejan de valer: muros que se mueven | El Laberinto de Piedra (noreste de Drath) | Bloques flotantes |

**Nota de coherencia:** la Ruptura del Muro aparece dos veces (el pueblo y el muro) porque Nacho decidió que es la misma. Las Rupturas de Varek y Sael no estaban definidas; son invención. No hay Ruptura de Kael ni de Vael (según el contexto original).

## Cómo se genera

Todo está en `tools/mapa/`:

```
node tools/mapa/generar.mjs ref          # mapa de referencia (colores planos)
node tools/mapa/generar.mjs validar      # comprueba que los sitios caen en tierra
powershell -File tools/mapa/render.ps1 pergamino,nocturna,acuarela,grabado
powershell -File tools/mapa/render.ps1 hojas
```

- El **fondo pintado** se genera con Pollinations (`flux.2-klein-4b`, 0,005 pollen por imagen) repintando el mapa de referencia en cada estilo, sin texto. Se hicieron 17 imágenes (unos 0,09 pollen).
- Las **ciudades, nombres, fronteras, iconos, leyenda, rosa de los vientos y rupturas** se dibujan en SVG sobre el fondo, así que se pueden cambiar sin volver a generar la imagen.
- El PNG final se exporta con Edge sin interfaz.
- Datos editables: `tools/mapa/datos.mjs` (coordenadas, nombres), `estilos.mjs` (colores) y `hoja.mjs` (textos de las Rupturas).

## Preguntas abiertas para decidir

1. Estilo preferido (o mezclar: p. ej. fondo nocturno con rótulos de pergamino).
2. Forma del continente y el istmo con el Muro.
3. Nombres de ciudades, puertos y accidentes (todos provisionales).
4. Tipos y nombres de las Rupturas de Varek y Sael.
5. Qué mostrar en la versión para jugadores: Ocaso, la Cripta Primordial y las marcas de la campaña.
