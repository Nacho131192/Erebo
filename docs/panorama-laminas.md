# Láminas pintadas para el Panorama del Muro (selector de campañas)

Petición de Nacho (2026-11-26): probar el fondo del selector de campañas como **lámina pintada** en lugar del dibujo vectorial, y elegir una o mezclar varias. **No se aplica a la página hasta que Nacho lo diga.**

- Se generan con `py tools/panorama-laminas.py` (usa `tools/pollinations.py`, modelo `flux.2-klein-4b`, 1792×768). Borradores en `assets/pruebas/panorama-*` con su ficha `.json`.
- La lámina es solo el **paisaje**. Las almenaras, el fuego, las brasas y la cámara siguen en código, encima. Por eso la franja de abajo se pide vacía: una cresta oscura sin edificios.
- Se pide muy apaisada (≈ 2,33:1) para que la cámara pueda desplazarse de una almenara a otra.

## Composición

**Diagonal** (la de la página actual):

```
Wide cinematic panoramic landscape at night, seen from a low grassy ridge. On the left, close to the viewer, an immense ancient wall of colossal smooth stone blocks rises far above everything, and runs in steep perspective across the whole image towards the right horizon, where it becomes small and hazy. In three places the top of the wall is missing, as if bitten away and erased, with small fragments of stone drifting up into the air like dust. At the foot of the wall, on the left half, a small fortified town with crowded roofs, a squat keep, warm lit windows and thin chimney smoke. Beyond the town, dark pine forests and layered mountain ridges fading into blue mist. High in the sky on the right, a pale full moon with a chunk missing from its lower-left edge, crumbling into specks. Clear starry sky with a faint band of stars. The bottom fifth of the image is a dark, empty, gently rolling foreground ridge with short grass and a few rocks, with no buildings, towers or figures on it. No people.
```

**Frontal** (alternativa):

```
Wide cinematic panoramic landscape at night, seen from a low grassy ridge. In the middle distance an immense ancient wall of colossal smooth stone blocks runs straight across the whole width of the image, parallel to the viewer, far taller than the mountains behind it. In the center of the wall a large section of its top is missing, as if bitten away and erased, with fragments of stone drifting up into the air like dust; two smaller missing bites further along. At the foot of the wall, on the left, a small fortified town with crowded roofs, a squat keep, warm lit windows and thin chimney smoke. Dark pine forests in front of the wall. High in the sky, a pale full moon with a chunk missing from its lower-left edge, crumbling into specks. Clear starry sky. The bottom fifth of the image is a dark, empty, gently rolling foreground ridge with short grass and a few rocks, with no buildings, towers or figures on it. No people.
```

## Estilos

| Clave | Estilo | Prompt |
|---|---|---|
| oleo | Óleo nocturno romántico | Romantic nineteenth-century oil painting in the tradition of moonlit nocturnes: visible brushstrokes, thick impasto in the moonlight, soft glazes in the shadows, deep blue and slate night palette with small warm gold accents from the windows. Painterly, atmospheric, museum quality. |
| acuarela | Tinta y acuarela | Ink and watercolor illustration: confident brush-pen linework, loose wet-in-wet indigo washes for the sky and the mist, granulating pigment texture, warm ochre touches for the windows, visible paper grain. Like a page from the sketchbook of a fantasy cartographer. |
| grabado | Grabado con pan de oro | Fine copperplate engraving with hatched and cross-hatched lines, printed in deep midnight-blue ink on dark paper, with selective gold leaf highlights on the moon, the lit edge of the wall and the windows. Old atlas frontispiece, no border. |
| gouache | Gouache de libro ilustrado | Gouache painting with flat, matte, layered shapes and soft edges, limited palette of navy, slate blue, desaturated teal and amber, simplified forms, clear silhouettes, handmade texture, illustrated storybook for adults. |
| mate | Matte painting de cine | Traditional hand-painted matte painting for a film: volumetric moonlight, layered atmospheric perspective, deep blues, subtle warm light from the town, restrained detail, quiet and vast. |

Tandas: los cinco estilos con la composición diagonal (dos semillas cada uno) y la frontal en óleo y en acuarela: 12 bocetos.

## Tanda 2 · solo tinta y acuarela (2026-11-26)

Nacho eligió las láminas **3, 4 y 12** (tinta y acuarela; dos diagonales y la frontal) y pidió guardar todas las de la tanda 1 como borradores (`assets/borradores/panorama-v1/`, con su `LEEME.md`) y sacar variantes **solo en tinta y acuarela**. Se generan con `py tools/panorama-laminas-v2.py`, que usa como referencia las láminas elegidas (prompts exactos dentro del script y en la ficha `.json` de cada boceto):

- **Diagonal** (referencias 3 y 4), cuatro semillas: el Muro debe perderse en el horizonte de la derecha, que en la tanda 1 acababa a mitad del cuadro.
- **Frontal** (referencia 12), cuatro semillas.
- **Formas nuevas**, con el mismo ambiente: **curva** (el Muro rodea el valle como el borde de un cuenco), **valle** (desde lo alto de una cresta, Varek's Hold abajo) y **niebla** (diagonal con niebla espesa de la que salen el Muro y la ciudad), dos semillas cada una.
