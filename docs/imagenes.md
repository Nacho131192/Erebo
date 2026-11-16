# Imágenes de la misión 1 — guía y prompts

Las imágenes se generan a mano y gratis en la web de **Google AI Studio** (aistudio.google.com), con un modelo de imagen de Gemini (Nano Banana). Sirve cualquier otra herramienta si prefieres. Guarda cada una en `assets/` con el **nombre exacto** de su ficha y Claude se encarga de optimizarlas y meterlas en la página.

Los prompts están en inglés porque los generadores suelen dar mejores resultados así. Debajo de cada uno va una nota en español.

## 1. Estilo común (va al principio de todos los prompts)

Para que todas las láminas parezcan del mismo libro y encajen con el pergamino de la página:

```
Ink and sepia wash illustration on aged parchment, in the manner of an old hand-drawn bestiary or a vintage tabletop RPG book plate. Fine pen linework with cross-hatching, muted earthy palette of dark brown ink (#2b1d12), warm sepia and faded ochre, with only small touches of desaturated violet (#5b45a8) for anything touched by the Void. Soft vignette that fades into the parchment at the edges. Atmospheric, melancholic, eerie, not gory.
```

**Evitar** (si la herramienta tiene campo de "negative prompt", ponlo ahí; si no, añádelo al final como "Avoid: …"):

```
text, letters, captions, signature, watermark, frame, border, photorealism, 3D render, glossy digital painting, saturated colors, neon, anime style, gore
```

Consejos:
- **Fondo**: pide que el fondo sea el mismo pergamino claro (#ead9b4). Así la imagen se funde con la página sin recuadros.
- **Coherencia**: si la herramienta permite una imagen de referencia o una "semilla", usa la primera lámina que te guste como referencia para las demás.
- **Tamaño**: genera a la mayor resolución posible; Claude la reduce y comprime después.

## 2. Láminas

### 2.1 Portada — `assets/portada.png`
Formato apaisado **8:3** (o 16:9 si la herramienta no deja otro; se recorta).

```
[ESTILO COMÚN] A wide panoramic view of an abandoned village at night under a dark, erased moon whose outline is only a faint violet ring. Houses still standing with their doors open and laundry still hanging, no smoke, no footprints in the mud. In the center, an old stone well breathes thin violet mist. Beside it stands a tall, gaunt hooded figure in a colorless robe, its face an empty smooth void, holding a long scythe whose blade fades into nothing. Three small dark orbs float near its hand. Quiet, unsettling, everything feels forgotten.
```

Es la escena que ahora está dibujada en código en la portada: el pueblo vacío, el pozo de la Ruptura de Neth y el Heraldo esperando.

### 2.2 Retrato del Heraldo del Umbral — `assets/heraldo.png`
Formato vertical **4:5**.

```
[ESTILO COMÚN] Portrait of the Herald of the Threshold: a tall, unnaturally thin figure in a long colorless tattered robe with a deep hood. Where the face should be there is only a smooth, featureless darkness with the faintest pale shape, as if the face slips out of memory when you look at it. A cracked pale medallion hangs on its chest. It holds a long void scythe; the blade is drawn as negative space with violet edges. Three small dark spheres orbit its open hand. Three-quarter view, waist up, calm and patient, menacing without moving.
```

El jefe de la misión: alto, túnica sin color, rostro que se olvida, hoz del vacío. Sustituye al retrato en código de la ficha del Heraldo.

### 2.3 Borrado — `assets/borrado.png`
Formato **cuadrado 1:1**, figura completa, centrada.

```
[ESTILO COMÚN] Full-body bestiary study of an "Erased One": a grey humanoid villager figure that only half remembers how to walk, stooped and clumsy, arms hanging loose. Its face is completely smooth, with no eyes, nose or mouth, only a faint dotted outline where features used to be. Simple peasant clothes faded to grey, edges of the body slightly dissolving into dust. Centered on plain parchment, small ground shadow.
```

Los enemigos más comunes de la historia: figuras grises sin rostro.

### 2.4 Cultista del Umbral — `assets/cultista.png`
Formato **cuadrado 1:1**, figura completa, centrada.

```
[ESTILO COMÚN] Full-body bestiary study of a cultist of the Threshold: a figure in a heavy black hooded robe, face hidden in shadow except for a faint calm smile. On the sleeves, a stitched sigil: a circle split by a jagged crack, in faded violet thread. He carries a plain wooden staff topped with an iron ring and holds one hand out as if leading a chant. Centered on plain parchment, small ground shadow.
```

Túnicas negras, el signo del Umbral cosido en las mangas y una sonrisa de ceremonia.

### 2.5 Animal deformado — `assets/animal.png`
Formato **cuadrado 1:1**, de perfil, centrado.

```
[ESTILO COMÚN] Full-body bestiary study of a deformed village dog: once a farm dog, now with twisted, stretched flesh, an extra misaligned lower jaw, bony ridges along its spine and blank milky-white eyes. Caught mid-run, fast and wrong, legs slightly too long. Unsettling rather than gory. Side view, centered on plain parchment, small ground shadow.
```

Los perros del pueblo con la carne torcida y los ojos blancos. Son rápidos (*Fast*).

### 2.6 La Voz del Filo — `assets/prologo.png` (opcional)
Formato apaisado **3:2**.

```
[ESTILO COMÚN] Interior of a dim office lit by a single candle. Behind a heavy wooden desk sits a person whose face is half hidden in shadow, the Voice of the Edge, fingers resting on an old map marked with a fresh ink cross. Next to the map, a small pouch of silver coins. No chair offered to the viewer. Tense, secretive mood.
```

Para el prólogo: la Voz del Filo os contrata y os da el mapa con la cruz de tinta fresca.

### 2.7 Varek's Hold — `assets/varek.png` (opcional)
Formato apaisado **8:3**.

```
[ESTILO COMÚN] A fortified town built against an immense ancient wall that nobody built, the wall rising far above the rooftops and disappearing into low clouds, covered in strange worn carvings. Narrow streets, crowded roofs, smoke from chimneys. Dusk light. Sense of scale and of something sleeping inside the wall.
```

La ciudad de los héroes, apoyada en el muro del Primordial que no cayó del todo.

## 3. Qué se queda en código

El **mapa de cuadrantes** sigue dibujado en código, porque tiene que ser exacto: cuadrantes, esquinas, numeración y escala.

## 4. Cuando tengas las imágenes

1. Guárdalas en `assets/` con el nombre de su ficha (`portada.png`, `heraldo.png`…). Da igual si son PNG, JPG o WebP; el formato se ajusta después.
2. Avisa a Claude. Las optimizará (WebP y tamaño ajustado, para que la página siga cargando rápido), las colocará en su sitio y regenerará la página.
3. Si alguna no convence, se puede dejar el dibujo en código mientras tanto.
