# el juego base — Clases, habilidades, niveles, tienda y hechizos

Fuente: el creador de héroes (creador de héroes (web)), datos oficiales de OnePageRules extraídos el 2026-11-18.

**Sobre la traducción:** todo el documento está en español, incluidos los nombres de habilidades, hechizos, armas, objetos y reglas especiales. el creador de héroes está en inglés, así que para que puedas encontrar cada cosa en la web:

- las habilidades, los hechizos y los consumibles llevan una columna con su **nombre original**;
- los héroes, las facciones y las clases llevan el nombre original entre paréntesis;
- al final hay un [glosario de reglas especiales](#glosario-de-reglas-especiales) español–inglés.

**Abreviaturas:** Cal = Calidad (Qua) · Def = Defensa · Pod = Poder (Pow) · Fue = Fuerza (Str) · Des = Destreza (Dex) · Vol = Voluntad (Wil) · Resistente(X) = heridas que aguanta (Tough) · Lanzador(X) = lanza hechizos de nivel X (Caster) · PA = penetración de armadura (AP) · A3 = 3 ataques · " = pulgadas.

## Índice

1. [Cómo se sube de nivel](#cómo-se-sube-de-nivel)
2. [Clases: bonos iniciales](#clases-bonos-iniciales)
3. [Habilidades por clase](#habilidades-por-clase)
4. [Habilidades comunes (todas las clases)](#habilidades-comunes-todas-las-clases)
5. [Tienda común: armaduras por clase y consumibles](#tienda-común-armaduras-por-clase-y-consumibles)
6. [Heridas y estados](#heridas-y-estados)
7. [Héroes por facción: tienda y hechizos](#héroes-por-facción-tienda-y-hechizos)
8. [Glosario de reglas especiales](#glosario-de-reglas-especiales)

## Cómo se sube de nivel

En cada nivel eliges **una** de las opciones. La experiencia (XP) es acumulada.

| Nivel | XP total | Opciones |
|---|---|---|
| 1 | 0 | Héroe recién creado (bonos de la clase) |
| 2 | 3 | Resistente(+1) **o** 1 habilidad |
| 3 | 6 | +1 Fue **o** +1 Des **o** +1 Vol |
| 4 | 12 | Resistente(+2) **o** Cal +1 |
| 5 | 18 | Pod +2 **o** 2 habilidades **o** Lanzador +1 (da Lanzador(1) a quien no lanza hechizos) · se desbloquean las habilidades Tier 2 |
| 6 | 27 | Resistente(+1) **o** Pod +1 |
| 7 | 36 | +1 Fue **o** +1 Des **o** +1 Vol |
| 8 | 48 | Resistente(+2) **o** Pod +2 |
| 9 | 60 | Pod +2 **o** 2 habilidades **o** Lanzador +1 · se desbloquean las habilidades Tier 3 |
| 10 | 75 | Resistente(+1) **o** 1 habilidad |
| 11 | 90 | +1 Fue **o** +1 Des **o** +1 Vol |
| 12 | 108 | Resistente(+2) **o** Cal +1 |
| 13 | 126 | Pod +2 **o** 2 habilidades **o** Lanzador +1 |
| 14 | 147 | Resistente(+1) **o** Pod +1 |
| 15 | 168 | +1 Fue **o** +1 Des **o** +1 Vol |

**Lo que comprobé en el creador:**

- Las opciones de los niveles 2 a 8 son las mismas para todas las clases. Lo verifiqué con un Mago humano y un Guerrero enano.
- Al elegir "1 habilidad" o "2 habilidades" puedes coger cualquiera de tu clase o de las comunes del tier desbloqueado: Tier 1 desde el nivel 2, Tier 2 desde el 5 y Tier 3 desde el 9.
- **Los hechizos dependen de la facción, no de la clase.** Druida, Hechicero, Brujo y Mago empiezan con Lanzador(1). Cualquier otra clase puede conseguirlo eligiendo "Lanzador(1)" en el nivel 5, y entonces ve los hechizos de su facción. Lo comprobé con el Guerrero enano.
- Las habilidades no dependen de la facción: ninguna es exclusiva de una raza.
- Los niveles 9 a 15 salen del código de la web; no los verifiqué en el creador.

## Clases: bonos iniciales

| Clase | Descripción | Bonos al crearla |
|---|---|---|
| **Bárbaro** (Barbarian) | Combatientes implacables a los que les encanta meterse de lleno en la lucha, impulsados por su rabia y su furia. | Cal +1 · 1 habilidad y Pod +1 · Fue +2 · Frenesí bárbaro · Furia (Fue) |
| **Bardo** (Bard) | Oradores e intérpretes que usan su ingenio, sus hechizos y su saber para superar situaciones difíciles. | 2 habilidades · Pod +2 · Des +1 · Vol +1 · Restauración bárdica · Inspirar (Des) · Canción de salud (Vol) |
| **Brujo** (Warlock) | Lanzadores de hechizos oscuros que sellan pactos con entidades poderosas, con las que intercambian favores a cambio de dones y hechizos. | Lanzador(1) · 1 habilidad y Pod +1 · Vol +2 · Pacto del brujo · Protección oscura (Vol) |
| **Clérigo** (Cleric) | Devotos de su deidad, capaces de reforzar a su grupo y curar sus heridas, o de abatir a sus enemigos con la ira divina. | 1 habilidad y Pod +1 · Cal +1 · Vol +2 · Bendición del clérigo · Palabra sanadora (Vol) |
| **Druida** (Druid) | Nómadas consagrados a las fuerzas de la naturaleza, capaces de adoptar forma de bestia para combatir o para otras utilidades. | Lanzador(1) · 2 habilidades · Des +1 · Vol +1 · Trampa druídica · Piel de corteza (Des) · Nube de niebla (Vol) |
| **Explorador** (Ranger) | Cazadores letales que combinan de forma única el conocimiento de la naturaleza salvaje con sus habilidades marciales. | Cal +1 · 2 habilidades · Fue +1 · Des +1 · Precisión del explorador · Bestia de caza (Fue) · Ataque pavoroso (Des) |
| **Guerrero** (Fighter) | Combatientes hábiles que confían en sus armaduras y armas pesadas para abatir a sus enemigos. | Cal +1 · 1 habilidad y Pod +1 · Fue +2 · Poderío combativo · Superioridad en combate (Fue) |
| **Hechicero** (Sorcerer) | Lanzadores de hechizos que extraen su poder de su interior y lo canalizan a través de sí mismos y de sus instrumentos. | Lanzador(1) · 2 habilidades · Fue +1 · Vol +1 · Proyectiles hechiceros · Mareas del caos (Fue) · Hechizo lejano (Vol) |
| **Mago** (Wizard) | Guardianes de secretos arcanos y conocimientos olvidados, que manipulan los hechizos con astucia. | Lanzador(1) · 2 habilidades · Des +1 · Vol +1 · Foco del mago · Encantamiento (Des) · Arcanos (Vol) |
| **Monje** (Monk) | Artistas marciales que confían en el poder de su propio cuerpo para lograr resultados impresionantes. | 2 habilidades · Cal +1 · Fue +1 · Des +1 · Meditación del monje · Ráfaga de golpes (Fue) · Reflejos relámpago (Des) |
| **Paladín** (Paladin) | Guerreros que refuerzan sus esfuerzos con una dedicación inquebrantable, obteniendo dones y fuerza especiales gracias a su devoción. | Cal +1 · 1 habilidad y Pod +1 · Vol +2 · Grito del paladín · Arma ancestral (Vol) |
| **Pícaro** (Rogue) | Agentes sigilosos con un don para detectar las debilidades del enemigo y aprovecharlas. | 1 habilidad y Pod +1 · Cal +1 · Des +2 · Paso del pícaro · Juego de manos (Des) |

## Habilidades por clase

### Bárbaro (Barbarian)

**Dote de clase (una vez por partida):** *Frenesí bárbaro* (Barbaric Frenzy): Una vez por partida, al activarse, el Héroe recupera D3 de Poder.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Furia | Rage | Fuerza (Fue) | El Héroe sufre 1 herida y obtiene +2 para impactar cuerpo a cuerpo al cargar, hasta el final de la ronda. |
| Temerario | Reckless | Destreza (Des) | Hasta el final de la ronda, siempre que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, si causa al menos una herida, causa una herida adicional; pero siempre que sufra al menos una herida, sufre una herida adicional. |
| Desafío | Challenge | Voluntad (Vol) | Elige dos unidades enemigas a 12" o menos, que deben hacer un chequeo de moral. Si lo fallan, son atraídas hasta 6" directamente hacia el Héroe. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Frenesí de sangre | Blood Frenzy | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe cargue y cause al menos una herida cuerpo a cuerpo, causa dos heridas adicionales, pero sufre una herida. |
| Instinto salvaje | Feral Instinct | Destreza (Des) | Hasta el final de la ronda, los enemigos obtienen -1 para impactar al atacar al Héroe cuerpo a cuerpo o al dispararle desde 12" o menos. |
| Golpe certero | Aimed Strike | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe cargue y cause al menos un impacto cuerpo a cuerpo, causa un impacto adicional. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Intimidante | Intimidating | Fuerza (Fue) | Elige dos unidades enemigas a 3" o menos, que deben hacer un chequeo de moral. Si lo fallan, quedan Acobardadas. |
| Despiadado | Vicious | Destreza (Des) | Hasta el final de la ronda, siempre que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, si causa al menos un impacto, causa un impacto adicional; pero siempre que reciba al menos un impacto, recibe un impacto adicional. |
| Ataque aturdido | Dazed Attack | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe cargue y cause al menos un impacto cuerpo a cuerpo, causa dos impactos adicionales, pero sufre una herida. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Brutal | Brutal | Fuerza (Fue) | Las armas del Héroe obtienen PA(+1) hasta el final de la ronda. |
| Grito furioso | Furious Shout | Destreza (Des) | Elige dos unidades enemigas a 3" o menos, que deben hacer un chequeo de moral. Si lo fallan, son empujadas 6" directamente en dirección contraria. |
| Endurecerse | Toughen Up | Voluntad (Vol) | El Héroe sufre 1 herida, y hasta el final de la ronda obtiene +2 en las tiradas de Def cuerpo a cuerpo o cuando le disparen desde 12" o menos. |

### Bardo (Bard)

**Dote de clase (una vez por partida):** *Restauración bárdica* (Bardic Restoration): Una vez por partida, al activarse, otros dos héroes a 9" o menos recuperan 1 de Poder cada uno.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Melodía distractora | Distracting Tune | Fuerza (Fue) | Elige una unidad enemiga a 9" o menos, que debe hacer un chequeo de moral. Si lo falla, obtiene -2 en las tiradas de Defensa la próxima vez que sea atacada. |
| Inspirar | Inspire | Destreza (Des) | Elige otras dos unidades aliadas a 9" o menos, que obtienen +1 en su próxima tirada de atributo cada una. |
| Canción de salud | Song of Health | Voluntad (Vol) | Elige otros dos héroes aliados a 9" o menos, que recuperan 1 herida cada uno. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Canción repulsora | Repelling Song | Fuerza (Fue) | Elige dos unidades enemigas a 9" o menos, que deben hacer un chequeo de moral. Si lo fallan, son empujadas 6" directamente en dirección contraria. |
| Melodía curativa | Curing Melody | Destreza (Des) | Elige otras dos unidades aliadas a 9" o menos, que pierden un estado cada una. |
| Persuadir | Persuade | Voluntad (Vol) | Elige una unidad enemiga a 12" o menos, que debe hacer un chequeo de moral. Si lo falla, obtiene -2 para impactar hasta el final de la ronda. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Motivar | Motivate | Fuerza (Fue) | Elige otra unidad aliada a 9" o menos, que obtiene +2 en las tiradas para impactar la próxima vez que ataque. |
| Canción del miedo | Song of Fear | Destreza (Des) | Elige dos unidades enemigas a 9" o menos, que deben hacer un chequeo de moral. Si lo fallan, quedan Acobardadas. |
| Encantar | Charm | Voluntad (Vol) | Elige una unidad enemiga a 6" o menos, que no puede elegir al Héroe como objetivo hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Canción del descanso | Song of Rest | Fuerza (Fue) | Elige otros dos héroes aliados a 9" o menos, que recuperan 1 de Poder cada uno. |
| Burla | Mockery | Destreza (Des) | Elige dos unidades enemigas a 9" o menos, que obtienen -1 en su próxima tirada de atributo cada una. |
| Canción protectora | Warding Song | Voluntad (Vol) | Elige otra unidad aliada a 9" o menos, que obtiene +2 en las tiradas de Def la próxima vez que reciba impactos. |

### Brujo (Warlock)

**Dote de clase (una vez por partida):** *Pacto del brujo* (Warlock's Pact): Una vez por partida, al activarse, el Héroe sufre 1 herida y después causa 1 herida a una unidad enemiga a 6" o menos.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Pacto de fuerza | Pact of Strength | Fuerza (Fue) | El Héroe sufre 1 herida, y el próximo hechizo que lance antes del final de la ronda obtiene PA(+2). |
| Respiro diabólico | Fiendish Respite | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe destruya una unidad enemiga, recupera D3+1 de Poder. |
| Protección oscura | Dark Warding | Voluntad (Vol) | El Héroe sufre 1 herida y obtiene +2 en las tiradas de Defensa hasta el final de la ronda. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Sacrificio oscuro | Dark Sacrifice | Fuerza (Fue) | El Héroe sufre 1 herida y después causa 1 herida a una unidad enemiga a 6" o menos. |
| Maldición feérica | Fey Curse | Destreza (Des) | Elige una unidad enemiga a 12" o menos, que debe hacer un chequeo de moral. Si lo falla, obtiene -2 para impactar hasta el final de la ronda. |
| Pacto de sabiduría | Pact of Wisdom | Voluntad (Vol) | El Héroe sufre 1 herida, y hasta el final de la ronda obtiene +1 en las tiradas de lanzamiento de hechizos; además, si gasta fichas para modificar tiradas de lanzamiento enemigas, el enemigo obtiene un -1 adicional. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Truco diabólico | Fiendish Cantrip | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe destruya una unidad enemiga, obtiene una ficha de hechizo y pierde 1 de Poder. |
| Transferencia oscura | Dark Transfer | Destreza (Des) | El Héroe sufre 1 herida, y otro Héroe a 3" o menos recupera D3+1 heridas. |
| Susurros feéricos | Fey Whispers | Voluntad (Vol) | Elige dos unidades enemigas a 9" o menos, que deben hacer un chequeo de moral. Si lo fallan, quedan Acobardadas. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Dominación feérica | Fey Domination | Fuerza (Fue) | Elige una unidad enemiga a 6" o menos, que no puede elegir al Héroe como objetivo hasta el final de la ronda. |
| Pacto de habilidad | Pact of Skill | Destreza (Des) | El Héroe sufre D3 heridas, y el próximo hechizo que lance antes del final de la ronda puede elegir un objetivo enemigo adicional. |
| Bendición diabólica | Fiendish Blessing | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe destruya una unidad enemiga, recupera D3 heridas. |

### Clérigo (Cleric)

**Dote de clase (una vez por partida):** *Bendición del clérigo* (Cleric's Blessing): Una vez por partida, al activarse, dos héroes a 6" o menos recuperan 1 herida cada uno.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Guía | Guidance | Fuerza (Fue) | Elige otras dos unidades aliadas a 6" o menos, que obtienen +1 en su próxima tirada de atributo cada una. |
| Escudo de fe | Shield of Faith | Destreza (Des) | Elige otra unidad aliada a 6" o menos, que obtiene +2 en las tiradas de Def la próxima vez que reciba impactos. |
| Palabra sanadora | Healing Word | Voluntad (Vol) | Elige dos héroes aliados a 6" o menos, que recuperan 1 herida cada uno. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Golpe divino | Divine Strike | Fuerza (Fue) | Las armas del Héroe obtienen PA(+1) hasta el final de la ronda. |
| Curar heridas | Cure Wounds | Destreza (Des) | Elige otro Héroe aliado a 3" o menos, que pierde todos sus estados. |
| Multiplicar | Multiply | Voluntad (Vol) | Coloca un marcador de multiplicación a 3" o menos. Los enemigos tratan el marcador como un Héroe hasta el final de la ronda. Retira el marcador si un enemigo lo ataca o se mueve a 1" o menos de él. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Protección sagrada | Holy Protection | Fuerza (Fue) | Elige una unidad aliada a 6" o menos, que no puede ser elegida como objetivo por los enemigos hasta el final de la ronda. |
| Bendecir | Bless | Destreza (Des) | Elige otra unidad aliada a 6" o menos, que obtiene +1 para impactar hasta el final de la ronda. |
| Espíritus guardianes | Spirit Guardians | Voluntad (Vol) | Coloca un marcador de espíritus guardianes a 6" o menos. La zona a 3" o menos del marcador cuenta como Terreno peligroso para los enemigos hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Perdición | Bane | Fuerza (Fue) | Elige una unidad enemiga a 12" o menos, que obtiene -1 para impactar hasta el final de la ronda. |
| Proyectil guía | Guiding Bolt | Destreza (Des) | Elige una unidad enemiga a 6" o menos. Todas las unidades aliadas obtienen +1 para impactarla hasta el final de la ronda. |
| Reanimación opulenta | Opulent Revival | Voluntad (Vol) | Reanima a todos los héroes inconscientes a 6" o menos, que recuperan D3 heridas cada uno. |

### Druida (Druid)

**Dote de clase (una vez por partida):** *Trampa druídica* (Druidic Trap): Una vez por partida, al activarse, la zona a 3" o menos del Héroe cuenta como Terreno peligroso para las unidades enemigas hasta el final de la ronda.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Látigo de espinas | Thorn Whip | Fuerza (Fue) | Elige una unidad enemiga a 9" o menos, que sufre un impacto y después es atraída hasta 6" directamente hacia el Héroe. |
| Piel de corteza | Barkskin | Destreza (Des) | El Héroe obtiene +1 en las tiradas de Def la próxima vez que reciba impactos, hasta el final de la ronda. |
| Nube de niebla | Fog Cloud | Voluntad (Vol) | Coloca un marcador de nube de niebla a 9" o menos. La zona a 3" o menos del marcador cuenta como Terreno de cobertura para las unidades aliadas hasta el final de la ronda. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Crecimiento de pinchos | Spike Growth | Fuerza (Fue) | Coloca un marcador de crecimiento de pinchos a 9" o menos. La zona a 3" o menos del marcador cuenta como Terreno difícil para los enemigos hasta el final de la ronda. |
| Forma de lobo | Wolf Form | Destreza (Des) | El Héroe obtiene +1" al Avanzar y +2" al Correr/Cargar hasta el final de la ronda. |
| Recuperación natural | Natural Recovery | Voluntad (Vol) | El Héroe obtiene una ficha de hechizo y pierde D3 de Poder. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Baya de poder | Power Berry | Fuerza (Fue) | Elige una unidad aliada a 3" o menos, que recupera 1 herida y pierde un estado. |
| Plaga de insectos | Insect Plague | Destreza (Des) | Elige dos unidades enemigas a 9" o menos, que sufren 1 impacto cada una. |
| Forma de pantera | Panther Form | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe cargue y cause al menos un impacto cuerpo a cuerpo, causa un impacto adicional. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Forma de oso | Bear Form | Fuerza (Fue) | Hasta el final de la ronda, siempre que el Héroe reciba impactos, esos impactos cuentan como si tuvieran PA(-1), hasta un mínimo de PA(0). |
| Muro de espinas | Wall of Thorns | Destreza (Des) | Coloca un marcador de muro de espinas a 9" o menos. La zona a 3" o menos del marcador cuenta como Terreno peligroso para los enemigos hasta el final de la ronda. |
| Círculo de esporas | Circle of Spores | Voluntad (Vol) | Coloca un marcador de esporas sobre dos unidades enemigas a 9" o menos. Cuando esas unidades se activen, tira un dado por cada marcador: con 4+ se retira el marcador; si no, la unidad sufre 1 impacto. |

### Explorador (Ranger)

**Dote de clase (una vez por partida):** *Precisión del explorador* (Ranger's Precision): Una vez por partida, al activarse, hasta el final de la ronda, la próxima vez que el Héroe cause al menos un impacto al disparar, causa un impacto adicional.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Bestia de caza | Hunting Beast | Fuerza (Fue) | Elige una unidad enemiga a 6" o menos, que sufre 2 impactos. |
| Ataque pavoroso | Dread Attack | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde más de 12", ese enemigo debe hacer un chequeo de moral al final de esa activación. Si lo falla, queda Acobardado. |
| Ungüento curativo | Healing Ointment | Voluntad (Vol) | Elige una unidad aliada a 3" o menos, que recupera 1 herida y pierde un estado. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Ráfaga del acechador | Stalker's Flurry | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe destruya una unidad enemiga disparando, puede disparar inmediatamente a otra unidad enemiga. |
| Mascota acechadora | Stalking Pet | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde más de 12", si causa al menos un impacto, causa un impacto adicional. |
| Marca del cazador | Hunter's Mark | Voluntad (Vol) | Elige una unidad enemiga a más de 12". El Héroe obtiene +D3 para impactar al atacarla hasta el final de la ronda. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Voluntad de acero | Steel Will | Fuerza (Fue) | Los Héroes pueden usar esta acción de Habilidad incluso estando Acobardados. El Héroe deja de estar Acobardado. |
| Disparo de oleada | Surge Shot | Destreza (Des) | El Héroe puede hacer inmediatamente una acción de Mantener posición y disparar a un objetivo a 12" o menos. |
| Pájaro rastreador | Tracking Bird | Voluntad (Vol) | El Héroe puede revelar una ficha de Búsqueda en línea de visión y a 18" o menos. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Matagigantes | Giant Killer | Fuerza (Fue) | Las armas del Héroe obtienen PA(+1) hasta el final de la ronda. |
| Manto umbrío | Umbral Shroud | Destreza (Des) | Hasta el final de la ronda, los enemigos no pueden elegir al Héroe como objetivo mientras este no haya elegido como objetivo a ningún enemigo. |
| Andanada | Volley | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe dispare a una unidad enemiga, tras resolver el ataque, puede disparar inmediatamente a otra unidad enemiga a 3" o menos de la primera. |

### Guerrero (Fighter)

**Dote de clase (una vez por partida):** *Poderío combativo* (Fighting Might): Una vez por partida, al activarse, hasta el final de la ronda, la próxima vez que el Héroe cause al menos un impacto cuerpo a cuerpo, causa un impacto adicional.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Superioridad en combate | Combat Superiority | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, si causa al menos un impacto, causa un impacto adicional. |
| Evasivo | Evasive | Destreza (Des) | Hasta el final de la ronda, la próxima vez que un enemigo ataque al Héroe, obtiene -1 para impactar. |
| Reagrupar | Rally | Voluntad (Vol) | Los Héroes pueden usar esta acción de Habilidad incluso estando Acobardados. El Héroe deja de estar Acobardado. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Ataque desarmante | Disarming Attack | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, ese enemigo obtiene -1 para impactar hasta el final de la ronda. |
| Ataque de barrido | Sweeping Attack | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe cargue contra una unidad enemiga, tras resolver el combate, puede hacer inmediatamente otra acción de Cargar contra otra unidad enemiga a 3" o menos. |
| Provocar | Taunt | Voluntad (Vol) | Elige dos unidades enemigas a 9" o menos, que deben hacer un chequeo de moral. Si lo fallan, son atraídas hasta 6" directamente hacia el Héroe. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Indomable | Indomitable | Fuerza (Fue) | Hasta el final de la ronda, siempre que el Héroe reciba impactos, esos impactos cuentan como si tuvieran PA(-1), hasta un mínimo de PA(0). |
| Ataque amenazador | Menacing Attack | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, ese enemigo debe hacer un chequeo de moral al final de esa activación. Si lo falla, queda Acobardado. |
| Ataque implacable | Relentless Attack | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe destruya una unidad enemiga cuerpo a cuerpo, puede hacer inmediatamente otra acción de Cargar contra otra unidad enemiga. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Carga de oleada | Surge Charge | Fuerza (Fue) | El Héroe puede hacer inmediatamente una acción de Cargar contra un objetivo a 6" o menos. |
| Segundo aliento | Second Wind | Destreza (Des) | El Héroe recupera D3+1 heridas y pierde 1 de Poder. |
| Ataque de empuje | Pushing Attack | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, tras resolver el combate, la unidad enemiga es empujada 6" directamente en dirección contraria. |

### Hechicero (Sorcerer)

**Dote de clase (una vez por partida):** *Proyectiles hechiceros* (Sorcerous Bolts): Una vez por partida, al activarse, el Héroe puede gastar X de Poder (máx. 3). Elige una unidad enemiga a 12" o menos, que sufre X+1 impactos.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Mareas del caos | Tides of Chaos | Fuerza (Fue) | Hasta el final de la ronda, el Héroe recupera D3+2 de Poder la próxima vez que lance con éxito un hechizo, o la próxima vez que gaste fichas para modificar una tirada de lanzamiento enemiga y el enemigo no consiga lanzar el hechizo. |
| Afinidad metódica | Methodical Affinity | Destreza (Des) | El Héroe puede gastar X de Poder (máx. 3) y obtiene +X+1 en su próxima tirada de atributo. |
| Hechizo lejano | Distant Spell | Voluntad (Vol) | El Héroe puede gastar X de Poder (máx. 3), y hasta el final de la ronda obtiene +X×6" de alcance, ya sea al lanzar su próximo hechizo o la próxima vez que gaste fichas para modificar tiradas de lanzamiento enemigas. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Resiliencia práctica | Practical Resilience | Fuerza (Fue) | El Héroe puede gastar X de Poder (máx. 3) para obtener +X+1 en las tiradas de Def la próxima vez que reciba impactos, hasta el final de la ronda. |
| Hechizo gemelo | Twin Spell | Destreza (Des) | El Héroe gasta D3+2 de Poder, y el próximo hechizo que lance antes del final de la ronda puede elegir un objetivo enemigo adicional. |
| Golpe relámpago | Lightning Strike | Voluntad (Vol) | El Héroe puede gastar X de Poder (máx. 3). Elige una unidad enemiga a 6" o menos, que sufre X+1 impactos con PA(3). |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Hechizo potenciado | Heightened Spell | Fuerza (Fue) | El Héroe pierde X de Poder, y el próximo hechizo que lance antes del final de la ronda obtiene PA(+X). |
| Furia de la tormenta | Storm Fury | Destreza (Des) | El Héroe puede gastar X de Poder (máx. 3). Elige una unidad enemiga a 9" o menos, que sufre X+1 impactos con PA(1). |
| Curación laboriosa | Laborious Healing | Voluntad (Vol) | Hasta el final de la ronda, el Héroe recupera D3+1 heridas la próxima vez que lance con éxito un hechizo, o la próxima vez que gaste fichas para modificar una tirada de lanzamiento enemiga y el enemigo no consiga lanzar el hechizo. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Onda atronadora | Thunderwave | Fuerza (Fue) | El Héroe puede gastar X de Poder (máx. 3). Elige una unidad enemiga a 3" o menos, que sufre X+2 impactos. |
| Suerte apañada | Tinkered Luck | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe no consiga lanzar un hechizo, o la próxima vez que gaste fichas para modificar una tirada de lanzamiento enemiga y el enemigo consiga lanzar el hechizo, puedes repetir esa tirada de lanzamiento. |
| Alas artesanas | Crafted Wings | Voluntad (Vol) | El Héroe puede gastar X de Poder (máx. 3) y después puede colocarse en cualquier punto a 5+X" o menos. |

### Mago (Wizard)

**Dote de clase (una vez por partida):** *Foco del mago* (Wizarding Focus): Una vez por partida, al activarse, el Héroe obtiene una ficha de hechizo.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Conjuración | Conjuration | Fuerza (Fue) | Hasta el final de la ronda, el Héroe obtiene +6" de alcance, ya sea al lanzar su próximo hechizo o la próxima vez que gaste fichas para modificar tiradas de lanzamiento enemigas. |
| Encantamiento | Enchantment | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe lance con éxito un hechizo que tenga como objetivo a enemigos, elige a uno de ellos para que haga un chequeo de moral. Si lo falla, queda Acobardado. |
| Arcanos | Arcana | Voluntad (Vol) | El Héroe gasta D3 de Poder, y hasta el final de la ronda obtiene +1 en las tiradas de lanzamiento de hechizos; además, si gasta fichas para modificar tiradas de lanzamiento enemigas, el enemigo obtiene un -1 adicional. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Adivinación | Divination | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe lance con éxito un hechizo, el objetivo recupera D3+1 de Poder. |
| Abjuración | Abjuration | Destreza (Des) | El Héroe recupera D3+1 heridas y pierde 1 de Poder. |
| Transmutación | Transmutation | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe lance con éxito un hechizo, uno de los objetivos recupera D3 heridas. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Recuperación | Recovery | Fuerza (Fue) | El Héroe recupera D3+1 de Poder. |
| Evocación | Evocation | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe lance un hechizo que tenga como objetivo a enemigos, ese hechizo obtiene PA(+D3). |
| Ilusión | Illusion | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe lance con éxito un hechizo que tenga como objetivo a enemigos, elige a uno de ellos para que obtenga -1 para impactar hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Nigromancia | Necromancy | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe lance con éxito un hechizo que tenga como objetivo a enemigos, elige a uno de ellos para que sufra D3 impactos. |
| Duplicación | Duplication | Destreza (Des) | El Héroe pierde D3 de Poder, y el próximo hechizo que lance antes del final de la ronda puede elegir un objetivo aliado adicional. |
| Preparación | Preparation | Voluntad (Vol) | El Héroe obtiene una ficha de hechizo y pierde D3 de Poder. |

### Monje (Monk)

**Dote de clase (una vez por partida):** *Meditación del monje* (Monk's Meditation): Una vez por partida, al activarse, el Héroe recupera D3 heridas.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Ráfaga de golpes | Flurry of Blows | Fuerza (Fue) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, si causa al menos un impacto, causa un impacto adicional. |
| Reflejos relámpago | Lightning Reflexes | Destreza (Des) | Hasta el final de la ronda, al recibir un impacto, tira un dado. Con 6+ se ignora. |
| Golpe marcial | Martial Strike | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo, tras resolver el combate, la unidad enemiga es empujada 6" directamente en dirección contraria. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Atletismo | Athletics | Fuerza (Fue) | El Héroe obtiene +1" al Avanzar y +2" al Correr/Cargar hasta el final de la ronda. |
| Manto de sombra | Cloak of Shadow | Destreza (Des) | Hasta el final de la ronda, los enemigos no pueden elegir al Héroe como objetivo mientras este no haya elegido como objetivo a ningún enemigo. |
| Descanso elemental | Elemental Rest | Voluntad (Vol) | El Héroe puede gastar X de Poder (máx. 3) para recuperar X+2 heridas. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Golpe elemental | Elemental Strike | Fuerza (Fue) | El Héroe puede gastar X de Poder (máx. 3). Elige una unidad enemiga a 12" o menos, que sufre X+1 impactos. |
| Derribar | Topple | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo cuerpo a cuerpo o le dispare desde 12" o menos, ese enemigo debe hacer un chequeo de moral al final de esa activación. Si lo falla, queda Acobardado. |
| Suprimir | Suppress | Voluntad (Vol) | Elige una unidad enemiga a 9" o menos, que obtiene -2 en las tiradas de lanzamiento de hechizos hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Visión mental | Mind Vision | Fuerza (Fue) | El Héroe puede recoger una ficha de Búsqueda en línea de visión y a 1" o menos, y puede modificar en +2/-2 la tirada para ver qué contiene. |
| Protección elemental | Elemental Protection | Destreza (Des) | El Héroe puede gastar X de Poder (máx. 3) para obtener +X+1 en las tiradas de Def la próxima vez que reciba impactos, hasta el final de la ronda. |
| Paso sombrío | Shadow Step | Voluntad (Vol) | El Héroe puede colocarse en cualquier punto a 2D3+1" o menos. |

### Paladín (Paladin)

**Dote de clase (una vez por partida):** *Grito del paladín* (Paladin Shout): Una vez por partida, al activarse, dos héroes a 3" o menos pueden moverse hasta 6" cada uno.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Golpe vengativo | Vengeful Strike | Fuerza (Fue) | Hasta el final de la ronda, siempre que el Héroe ataque cuerpo a cuerpo a un enemigo Acobardado o le dispare desde 12" o menos, obtiene +1 para impactar. |
| Protección devota | Devoted Warding | Destreza (Des) | Elige una unidad aliada a 6" o menos. Hasta el final de la ronda, siempre que reciba impactos, esos impactos cuentan como si tuvieran PA(-1), hasta un mínimo de PA(0). |
| Arma ancestral | Ancient Weapon | Voluntad (Vol) | Elige otra unidad aliada a 6" o menos, que obtiene +2 en las tiradas para impactar la próxima vez que ataque. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Control rencoroso | Spiteful Control | Fuerza (Fue) | Elige dos unidades enemigas a 3" o menos, que no pueden moverse hasta el final de la ronda. |
| Velocidad ancestral | Ancient Speed | Destreza (Des) | Elige otra unidad aliada a 6" o menos. La unidad obtiene +1" al Avanzar y +2" al Correr/Cargar hasta el final de la ronda. |
| Maldición rencorosa | Spiteful Curse | Voluntad (Vol) | Elige dos unidades enemigas a 6" o menos, que obtienen -1 en su próxima tirada de atributo cada una. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Reprimenda devota | Devoted Rebuke | Fuerza (Fue) | Elige una unidad aliada a 6" o menos. Hasta el final de la ronda, la próxima vez que un enemigo la ataque, la unidad enemiga sufre D3 impactos. |
| Voto rencoroso | Spiteful Vow | Destreza (Des) | Elige una unidad enemiga a 6" o menos. Hasta el final de la ronda, la próxima vez que una unidad aliada le cause al menos una herida, le causa una herida adicional. |
| Poderío vengativo | Vengeful Might | Voluntad (Vol) | Las armas del Héroe obtienen PA(+1) hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Aura ancestral | Ancient Aura | Fuerza (Fue) | Elige otra unidad aliada a 6" o menos. Hasta el final de la ronda, la próxima vez que esa unidad ataque y cause al menos un impacto, causa un impacto adicional. |
| Prisa vengativa | Vengeful Haste | Destreza (Des) | El Héroe obtiene +D3" al Avanzar y +2D3" al Correr/Cargar la próxima vez que se mueva, hasta el final de la ronda. |
| Aura devota | Devoted Aura | Voluntad (Vol) | Elige una unidad aliada a 6" o menos. Hasta el final de la ronda, la próxima vez que recupere heridas, recupera dos heridas adicionales. |

### Pícaro (Rogue)

**Dote de clase (una vez por partida):** *Paso del pícaro* (Rogue Step): Una vez por partida, al activarse, hasta el final de la ronda los enemigos no pueden elegir al Héroe como objetivo mientras este no haya elegido como objetivo a ningún enemigo.

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Embaucador | Trickster | Fuerza (Fue) | Coloca un marcador de embaucador a 3" o menos. Los enemigos tratan el marcador como un Héroe hasta el final de la ronda. Retira el marcador si un enemigo lo ataca o se mueve a 1" o menos de él. |
| Juego de manos | Sleight of Hand | Destreza (Des) | El Héroe puede recoger una ficha de Búsqueda en línea de visión y a 1" o menos, y puede modificar hasta en +2/-2 la tirada para ver qué contiene. |
| Golpe despiadado | Vicious Strike | Voluntad (Vol) | Las armas del Héroe obtienen PA(+1) hasta el final de la ronda. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Ataque furtivo | Sneak Attack | Fuerza (Fue) | Hasta el final de la ronda, el Héroe obtiene +1 para impactar al cargar contra enemigos que no tenían línea de visión hacia el Héroe cuando este se activó. |
| Eludir | Elude | Destreza (Des) | Hasta el final de la ronda, los enemigos obtienen -1 para impactar al atacar al Héroe cuerpo a cuerpo o al dispararle desde 12" o menos. |
| Ocultarse | Hide | Voluntad (Vol) | Hasta el final de la ronda, los enemigos no pueden elegir al Héroe como objetivo mientras este no haya elegido como objetivo a ningún enemigo. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Arrancada | Dash | Fuerza (Fue) | El Héroe obtiene +1" al Avanzar y +2" al Correr/Cargar hasta el final de la ronda. |
| Paso difuso | Blurred Step | Destreza (Des) | El Héroe puede colocarse en cualquier punto a 2D3+1" o menos. |
| Golpe y huida | Hit & Run | Voluntad (Vol) | Hasta el final de la ronda, la próxima vez que el Héroe ataque a un enemigo, tras resolver el ataque, el Héroe puede moverse hasta 6". |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Esquivar objetivo | Dodge Target | Fuerza (Fue) | Elige una unidad enemiga a 12" o menos, que obtiene -1 para impactar hasta el final de la ronda. |
| Asesinato | Assassination | Destreza (Des) | Hasta el final de la ronda, la próxima vez que el Héroe dispare a un enemigo que no tenía línea de visión hacia el Héroe cuando este se activó y cause al menos un impacto, causa un impacto adicional. |
| Infiltrarse | Infiltrate | Voluntad (Vol) | El Héroe obtiene +3" al Avanzar y +6" al Correr/Cargar hasta el final de la ronda, pero no puede moverse si en algún momento quedara dentro de la línea de visión enemiga. |

## Habilidades comunes (todas las clases)

**Iniciales (nivel 1)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Descanso de batalla | Battle Rest | Fuerza (Fue) | El Héroe recupera D3+1 de Poder. |
| Protector | Protector | Fuerza (Fue) | El Héroe obtiene +1 en las tiradas de Def hasta el final de la ronda. |
| Toque curativo | Curing Touch | Destreza (Des) | El Héroe pierde un estado. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Concentración | Concentrate | Destreza (Des) | El Héroe sufre 1 herida y obtiene +2 en su próxima tirada de atributo. |
| Toque sanador | Healing Touch | Voluntad (Vol) | El Héroe recupera D3 heridas. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Inspeccionar | Inspect | Voluntad (Vol) | El Héroe puede revelar una ficha de Búsqueda en línea de visión y a 9" o menos, y puede modificar en +1/-1 la tirada para ver qué contiene. |

**Tier 1 (desde el nivel 2)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Esprint | Sprint | Fuerza (Fue) | El Héroe obtiene +2" al Avanzar y +4" al Correr/Cargar la próxima vez que se mueva, hasta el final de la ronda. |
| Onda de choque | Shockwave | Fuerza (Fue) | Elige una unidad enemiga a 3" o menos, que es empujada 6" directamente en dirección contraria. |
| Trampero | Trapper | Destreza (Des) | La zona a 3" o menos del Héroe cuenta como Terreno difícil para los enemigos hasta el final de la ronda. |
| Distracción | Distraction | Destreza (Des) | Coloca un marcador de distracción a 12" o menos. Los enemigos tratan el marcador más cercano como el objetivo de la IA. Retira el marcador al final de 3 rondas, o cuando un enemigo se mueva a 1" o menos de él. |
| Resucitar | Resurrect | Voluntad (Vol) | Reanima a un Héroe inconsciente a 3" o menos, que recupera D3+1 heridas. |
| Pacificar | Pacify | Voluntad (Vol) | Elige una unidad enemiga a 6" o menos, que obtiene -1 para impactar hasta el final de la ronda. |

**Tier 2 (desde el nivel 5)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Imparable | Unstoppable | Fuerza (Fue) | El Héroe no se fatiga hasta el final de la ronda. |
| Paralizar | Transfix | Fuerza (Fue) | Elige una unidad enemiga a 9" o menos, que no puede moverse hasta el final de la ronda. |
| Imagen especular | Mirror Image | Destreza (Des) | Coloca un marcador de imagen especular a 3" o menos. Los enemigos tratan el marcador como un Héroe. Retira el marcador al final de 3 rondas, o cuando un enemigo se mueva a 1" o menos de él. |
| Salto | Leap | Destreza (Des) | El Héroe supera automáticamente todas las tiradas de salto hasta el final de la ronda. |
| Santuario | Sanctuary | Voluntad (Vol) | La zona a 3" o menos del Héroe cuenta como Terreno de cobertura para las unidades aliadas hasta el final de la ronda. |
| Fortaleza | Fortitude | Voluntad (Vol) | El Héroe supera automáticamente todos los chequeos de moral hasta el final de la ronda. |

**Tier 3 (desde el nivel 9)**

| Habilidad | Nombre original | Atributo | Efecto |
|---|---|---|---|
| Aterrorizar | Terrify | Fuerza (Fue) | Elige una unidad enemiga a 3" o menos, que debe hacer un chequeo de moral. Si lo falla, queda Acobardada. |
| Golpe giratorio | Swinging Strike | Fuerza (Fue) | La zona a 3" o menos del Héroe cuenta como Terreno peligroso para los enemigos hasta el final de la ronda. |
| Tiro lejano | Longshot | Destreza (Des) | El Héroe obtiene +6" de alcance hasta el final de la ronda. |
| Desplazamiento | Shift | Destreza (Des) | El Héroe puede colocarse en cualquier punto a D3+3" o menos. |
| Silencio | Silence | Voluntad (Vol) | Elige una unidad enemiga a 18" o menos, que obtiene -1 en las tiradas de lanzamiento de hechizos hasta el final de la ronda. |
| Confusión | Confusion | Voluntad (Vol) | Elige una unidad enemiga a 6" o menos, que los enemigos tratan como un Héroe hasta el final de la ronda, o hasta que los enemigos la ataquen una vez. |

## Tienda común: armaduras por clase y consumibles

Esta parte de la tienda es **igual en todas las facciones**. El precio depende de la resistencia base del héroe: la mayoría tienen Resistente(9); los héroes grandes, Resistente(18).

**Clases Bárbaro, Clérigo, Druida, Explorador**

| Sección | Opción | Resistente(9) | Resistente(18) |
|---|---|---|---|
| Mejorar con una opción | Armadura ligera (Defensa(1)) | 85g | 155g |
| Mejorar con una opción | Armadura media (Defensa(2), Pesado) | 215g | 410g |
| Mejorar con | Escudo (Defensa(1)) | 85g | 155g |

**Clases Bardo, Pícaro, Brujo**

| Sección | Opción | Resistente(9) | Resistente(18) |
|---|---|---|---|
| Mejorar con una opción | Armadura ligera (Defensa(1)) | 85g | 155g |

**Clases Guerrero, Paladín**

| Sección | Opción | Resistente(9) | Resistente(18) |
|---|---|---|---|
| Mejorar con una opción | Armadura ligera (Defensa(1)) | 85g | 155g |
| Mejorar con una opción | Armadura media (Defensa(2), Pesado) | 215g | 410g |
| Mejorar con una opción | Armadura pesada (Defensa(3), Muy pesado) | 260g | 500g |
| Mejorar con | Escudo (Defensa(1)) | 85g | 155g |

**Clases Monje, Hechicero, Mago**

| Sección | Opción | Resistente(9) | Resistente(18) |
|---|---|---|---|
| Mejorar con | Protección mística | 110g | 205g |

**Consumibles** (se compran en cualquier cantidad; el tier indica a partir de qué nivel aparecen en la tienda)

*Elixires*

| Consumible | Nombre original | Tier | Precio | Efecto |
|---|---|---|---|---|
| Elixir de agilidad | Agility Elixir | 3 | 5g | Se usa con una acción de Habilidad y luego se retira. El Héroe supera automáticamente todas las tiradas de salto hasta el final de la ronda. |
| Elixir heroico | Heroic Elixir | 0 | 5g | Se usa con una acción de Habilidad y luego se retira. El Héroe supera automáticamente todos los chequeos de moral hasta el final de la ronda. |
| Elixir de velocidad | Speed Elixir | 1 | 10g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +2" al Avanzar y +4" al Correr/Cargar hasta el final de la ronda. |
| Elixir de piel pétrea | Stoneskin Elixir | 1 | 10g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +1 en las tiradas de Def hasta el final de la ronda. |
| Elixir de tiro certero | Trueshot Elixir | 3 | 10g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +6" de alcance hasta el final de la ronda. |
| Elixir de conquista | Conquest Elixir | 3 | 10g | Se usa con una acción de Habilidad y luego se retira. La próxima vez que el Héroe destruya una unidad enemiga antes del final de la ronda, puede moverse hasta 6". |
| Elixir de energía | Energy Elixir | 2 | 15g | Se usa con una acción de Habilidad y luego se retira. El Héroe no se fatiga hasta el final de la ronda. |
| Elixir de poder | Power Elixir | 0 | 15g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +2 en su próxima tirada de atributo. |
| Gran elixir de piel pétrea | Great Stoneskin Elixir | 3 | 20g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +2 en las tiradas de Def hasta el final de la ronda. |
| Gran elixir de velocidad | Great Speed Elixir | 3 | 20g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene +4" al Avanzar y +8" al Correr/Cargar hasta el final de la ronda. |

*Bombas*

| Consumible | Nombre original | Tier | Precio | Efecto |
|---|---|---|---|---|
| Bomba de ruido | Noise Bomb | 1 | 5g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de ruido a 12" o menos. Los enemigos tratan el marcador más cercano como el objetivo de la IA. Retira el marcador al final de 3 rondas, o cuando un enemigo se mueva a 1" o menos de él. |
| Bomba atronadora | Thunder Bomb | 1 | 5g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 6" o menos, que es empujada inmediatamente 6" directamente en dirección contraria. |
| Bomba de grasa | Grease Bomb | 1 | 10g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de grasa a 12" o menos. La zona a 3" o menos de él cuenta como Terreno difícil. Retira el marcador al final de 3 rondas. |
| Bomba venenosa | Poison Bomb | 2 | 10g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de veneno sobre una unidad enemiga a 9" o menos. Cuando se active, tira un dado. Con 4+ sufre 1 herida; si no, se retira el marcador. |
| Bomba cegadora | Blinding Bomb | 1 | 10g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 9" o menos, que obtiene -1 para impactar hasta el final de la ronda. |
| Bomba de pólvora | Gunpowder Bomb | 0 | 10g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 9" o menos y tira un dado. Con 4+ sufre 1 impacto con Explosión(3) y PA(1). |
| Bomba de humo | Smoke Bomb | 2 | 10g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de humo a 12" o menos. La zona a 3" o menos de él cuenta como Terreno de cobertura. Retira el marcador al final de 3 rondas. |
| Bomba fantasma | Phantasm Bomb | 2 | 15g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de fantasma a 6" o menos. Los enemigos tratan el marcador como un Héroe. Retira el marcador al final de 3 rondas, o cuando un enemigo lo ataque o se mueva a 1" o menos de él. |
| Bomba aturdidora | Stunning Bomb | 3 | 15g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 6" o menos, que debe hacer un chequeo de moral. Si lo falla, queda Acobardada. |
| Bomba de telaraña | Web Bomb | 2 | 15g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 9" o menos, que obtiene -2" al Avanzar y -4" al Correr/Cargar hasta el final de la ronda. |
| Bomba incendiaria | Fire Bomb | 3 | 15g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de fuego a 12" o menos. La zona a 3" o menos de él cuenta como Terreno peligroso. Retira el marcador al final de 3 rondas. |
| Bomba de silencio | Silence Bomb | 3 | 20g | Se usa con una acción de Habilidad y luego se retira. Coloca un marcador de silencio sobre una unidad enemiga a 9" o menos. Esa unidad obtiene -2 en las tiradas de lanzamiento de hechizos hasta el final de la ronda. Retira el marcador al final de 3 rondas. |
| Bomba de feromonas | Pheromone Bomb | 3 | 25g | Se usa con una acción de Habilidad y luego se retira. Elige una unidad enemiga a 9" o menos, que los demás enemigos tratan como un Héroe hasta el final de la ronda. |

*Pociones*

| Consumible | Nombre original | Tier | Precio | Efecto |
|---|---|---|---|---|
| Poción curativa | Curing Potion | 0 | 5g | Se usa con una acción de Habilidad y luego se retira. El Héroe pierde todos sus estados. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Poción de perspicacia | Insight Potion | 2 | 5g | Se usa con una acción de Habilidad y luego se retira. El Héroe puede revelar una ficha de Búsqueda en línea de visión y a 12" o menos, y puede modificar en +1/-1 la tirada para ver qué contiene. |
| Poción de teletransporte | Teleport Potion | 3 | 10g | Se usa con una acción de Habilidad y luego se retira. El Héroe puede colocarse en cualquier punto a 6" o menos. |
| Poción de descanso | Resting Potion | 1 | 15g | Se usa con una acción de Habilidad y luego se retira. El Héroe recupera 3 de Poder. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Poción de maná | Mana Potion | 1 | 15g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene una ficha de hechizo. |
| Poción de salud | Health Potion | 0 | 15g | Se usa con una acción de Habilidad y luego se retira. El Héroe recupera 3 heridas. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Poción de reanimación | Reviving Potion | 2 | 20g | Se usa con una acción de Habilidad y luego se retira. Reanima a un Héroe inconsciente a 3" o menos, que recupera 6 heridas. |
| Gran poción de maná | Great Mana Potion | 3 | 30g | Se usa con una acción de Habilidad y luego se retira. El Héroe obtiene dos fichas de hechizo. |
| Gran poción de descanso | Great Resting Potion | 3 | 30g | Se usa con una acción de Habilidad y luego se retira. El Héroe recupera 6 de Poder. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |
| Gran poción de salud | Great Health Potion | 3 | 30g | Se usa con una acción de Habilidad y luego se retira. El Héroe recupera 6 heridas. En su lugar, el efecto puede aplicarse a otro Héroe a 3" o menos. |

## Heridas y estados

**Heridas graves**

| Herida | Efecto |
|---|---|
| Ojo cegado (Blinded Eye) | -1 en las tiradas de Calidad (Qua). |
| Brazo roto (Broken Arm) | -1 en las tiradas de Fuerza (Str). |
| Herida en el pecho (Chest Wound) | -1 en las tiradas de Defensa (Def). |
| Lesión de columna (Spinal Injury) | -1 en las tiradas de Destreza (Dex). |
| Espíritu quebrado (Crushed Spirit) | -1 en las tiradas de Voluntad (Wil). |
| Pierna destrozada (Smashed Leg) | -2" al Avanzar y -4" al Correr/Cargar. |

**Estados**

| Estado | Efecto |
|---|---|
| Debilitado (Impaired) | Al activarse, puede gastar D3 de Poder para quitarse el estado. Las miniaturas Debilitadas (Impaired) obtienen -1 en todas las tiradas de atributo. |
| Enfermo (Diseased) | Al activarse, debe superar un chequeo de Wil para quitarse el estado. Las miniaturas Enfermas (Diseased) sufren tantas heridas como Poder gasten o pierdan. |
| Afligido (Afflicted) | Al activarse, debe superar un chequeo de Str para quitarse el estado. Si lo falla, la miniatura sufre 1 herida. |
| Lisiado (Crippled) | Al activarse, debe superar un chequeo de Dex para quitarse el estado. Las miniaturas Lisiadas (Crippled) mueven la mitad de distancia. |

## Héroes por facción: tienda y hechizos

Para cada héroe base: su perfil, las armas y mejoras que ofrece su tienda con el precio en oro, y los hechizos de su facción. Solo pueden lanzar hechizos los héroes con Lanzador. A la tienda de cada héroe se le suma la tienda común según su clase (sección anterior).

La web oculta en la tienda las mejoras que darían Lanzador, Engendrar, Invocar o reglas de "Guardia"; aquí tampoco aparecen.

### Bestias (Beastfolk)

#### Hombres bestia (Beastmen)

##### Señor de las bestias ndoli (Ndoli Beast Lord)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Bestial

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Arma forjada en llamas maestra (A3, PA(1), Desintegrar) | 50g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Arma forjada en llamas (A3, Desintegrar) | 30g |
| Reemplazar Hacha arrojadiza | Red con púas (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Bomba de llamas | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Carro pesado (Colmillos mellados (A2, Triturar), Rápido, Impacto(4), Resistente(18), Luchador impredecible) | 770g |
| Mejorar con una opción | Gran expoliador (Carga perforante) | 15g |
| Mejorar con una opción | Capitán de la manada (Bestial mejorado) | 15g |
| Mejorar con una opción | Defensor del legado (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Rastreador (Emboscada) | 105g |

##### Maestro de caza waheni (Waheni Hunt Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Andarín, Resistente(9), Bestial

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Arma forjada en llamas maestra (A3, PA(1), Desintegrar) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Arco corto triple (18", A4), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 70g |
| Reemplazar Lanza | Arma forjada en llamas (A3, Desintegrar) | 20g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Hacha arrojadiza | Red con púas (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arco corto triple | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso) | -10g (devuelve oro) |
| Reemplazar Arco corto triple | Arco asesino pesado (18", A1, PA(2), Letal(3)) | 15g |
| Reemplazar Arco corto triple | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 40g |
| Mejorar con una opción | Capa de saqueador (Sigilo) | 60g |
| Mejorar con una opción | Carro ligero (Colmillos (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(18)) | 1290g |
| Mejorar con una opción | Vengador del Árbol Sagrado (Tirador preciso) | 15g |
| Mejorar con una opción | Gran expoliador (Carga perforante) | 15g |
| Mejorar con una opción | Capitán de la manada (Bestial mejorado) | 15g |
| Mejorar con una opción | Rastreador (Emboscada) | 105g |

##### Jefe centauro ndwari (Ndwari Centaur Boss)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Rápido, Héroe, Resistente(9), Luchador impredecible, Bestial

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Arma forjada en llamas maestra (A3, PA(1), Desintegrar) | 60g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 60g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Arma forjada en llamas (A3, Desintegrar) | 35g |
| Reemplazar Hacha arrojadiza | Red con púas (9", A1, Desgarrador, Asalto) | 20g |
| Reemplazar Bomba de llamas | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Mejorar con una opción | Vengador del Árbol Sagrado (Tirador preciso) | 15g |
| Mejorar con una opción | Capitán de la manada (Bestial mejorado) | 15g |
| Mejorar con una opción | Defensor del legado (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Rastreador (Emboscada) | 105g |

##### Jefe bruto kemba (Kemba Brute Boss)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Furioso, Héroe, Resistente(18), Bestial

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A6, PA(1), Parada(3)) | 45g |
| Reemplazar Arma de mano doble | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso), Arma de mano (A6, Parada(3)) | 65g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 140g |
| Reemplazar Arma de mano doble | Arma forjada en llamas maestra (A6, PA(1), Desintegrar) | 140g |
| Reemplazar Arma de mano | Gran arma (A6, PA(2)) | 70g |
| Reemplazar Arma de mano | Arma forjada en llamas (A6, Desintegrar) | 95g |
| Reemplazar Bomba de llamas | Hachas arrojadizas (12", A3, Asalto) | 20g |
| Reemplazar Bomba de llamas | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 60g |
| Reemplazar Bomba de llamas | Red con púas (9", A3, Desgarrador, Asalto) | 95g |
| Mejorar con | Carga bruta (Arrasar(6)) | 55g |
| Mejorar con una opción | Capitán de la manada (Bestial mejorado) | 30g |
| Mejorar con una opción | Gran expoliador (Carga perforante) | 45g |
| Mejorar con una opción | Defensor del legado (Evasión cuerpo a cuerpo) | 105g |

**Hechizos de Hombres bestia**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Rugido de caza | Hunting Roar | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que obtiene -1 en las tiradas de chequeo de moral una vez (la próxima vez que se aplique el efecto). |
| Ira ancestral | Ancestral Wrath | 1 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 2 impactos con Desintegrar. Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Oleada de poder | Surge of Power | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Bestial / Bestial mejorado una vez (la próxima vez que se aplique el efecto). |
| Ataque de la bandada | Flock Attack | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Manto espiritual | Spirit Mantle | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Regeneración una vez (la próxima vez que se aplique el efecto). |
| Llama destructiva | Destructive Flame | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Hombres rata (Ratmen)

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Escabullirse

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Mangual incensario maestro (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Carabina tóxica (18", A3, Perdición), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Mangual incensario (A3, Perdición) | 25g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 35g |
| Reemplazar Mangual incensario | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Mangual incensario | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Mangual incensario | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Mangual incensario | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Cuchillo arrojadizo | Pistola tóxica (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Carabina tóxica | Rifle de francotirador sobreajustado (30", A1, Peligroso, Preciso) | -30g (devuelve oro) |
| Reemplazar Carabina tóxica | Rifle de francotirador (30", A1, PA(1), Preciso) | -30g (devuelve oro) |
| Reemplazar Carabina tóxica | Lanzacohetes (18", A1, PA(2), Letal(3)) | 5g |
| Mejorar con | Rata gigante mascota (Repeler emboscadas) | 15g |
| Mejorar con una opción | Ingeniero (Perdición al disparar) | 25g |
| Mejorar con una opción | Enviado de la Diosa Madre (Escabullirse mejorado) | 35g |
| Mejorar con una opción | Brujo (Sigilo) | 60g |
| Mejorar con una opción | Ingeniero perforador (Emboscada) | 105g |

##### Maestro de batalla (Battle Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Héroe, Resistente(9), Escabullirse

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Mangual incensario maestro (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Rifle de francotirador sobreajustado (30", A1, Peligroso, Preciso), Golpe (A1) | 5g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Mangual incensario (A3, Perdición) | 25g |
| Reemplazar Mangual incensario | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Mangual incensario | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Mangual incensario | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Mangual incensario | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Cuchillo arrojadizo | Pistola tóxica (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Rifle de francotirador sobreajustado | Arco rápido (24", A3) | 15g |
| Reemplazar Rifle de francotirador sobreajustado | Rifle de francotirador (30", A1, PA(1), Preciso) | Gratis |
| Reemplazar Rifle de francotirador sobreajustado | Carabina tóxica (18", A3, Perdición) | 30g |
| Mejorar con una opción | Rata gigante mascota (Repeler emboscadas) | 15g |
| Mejorar con una opción | Maestro explorador (Explorador, Sigilo, Andarín) | 215g |
| Mejorar con una opción | Trono de guerra (Ataques de la dotación (A3), Penalización de defensa, Resistente(9)) | 365g |
| Mejorar con una opción | Ogro rata (Gran arma (A3, PA(2)), Furioso, Resistente(9)) | 425g |
| Mejorar con una opción | Bestia de guerra (Garras tóxicas (A3, Perdición), Rápido, Resistente(9)) | 495g |
| Mejorar con una opción | Gran bestia (Garras afiladas (A6, Desgarrador), Defensa(1), Rápido, Miedo(1), Andarín, Resistente(18)) | 1605g |
| Mejorar con una opción | Capitán (Luchador preciso) | 15g |
| Mejorar con una opción | Maestro asesino (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Brujo (Sigilo) | 60g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Ingeniero perforador (Emboscada) | 105g |

**Hechizos de Hombres rata**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Frenesí de la Diosa Madre | God-Mother's Frenzy | 1 | Elige una unidad aliada a 12" o menos, que obtiene Asesino cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Descarga relámpago | Lightning Blast | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con Peligroso. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 1». Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Campanada quebradora | Cracking Bell-Chime | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, que obtienen -1 en las tiradas de Defensa una vez (la próxima vez que se aplique el efecto). |
| Golpe celestial | Heavenly Strike | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Correteo mágico | Magic Skitter-Step | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Escabullirse / Escabullirse mejorado una vez (la próxima vez que se aplique el efecto). |
| Niebla asfixiante de incensario | Choking Censer-Fog | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Saurios (Saurians)

##### Campeón geco (Gecko Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Andarín, Primigenio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Garrote tóxico maestro (A3, PA(1), Perdición) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Garrote tóxico (A3, Perdición) | 35g |
| Reemplazar Arma de mano doble | Cerbatana tóxica rápida (18", A3, Perdición), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 80g |
| Reemplazar Garrote tóxico | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Garrote tóxico | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Jabalina | Boleadoras de fuego (9", A1, Desgarrador, Asalto) | 20g |
| Reemplazar Cerbatana tóxica rápida | Cerbatana de dispersión rápida (18", A3, Anticobertura, Oleada) | 5g |
| Mejorar con una opción | Destino sagrado (Hazaña de protección) | 70g |
| Mejorar con una opción | Deinonico (Saltarín, Impacto(1)) | 95g |
| Mejorar con una opción | Raza camaleón (Evasivo, Buen tirador, Explorador) | 225g |
| Mejorar con una opción | Palanquín del vidente estelar (Pulso mágico (A3, Imparable), Conducto de hechizos, Resistente(9)) | 355g |
| Mejorar con una opción | Fauces-dáctilo (Volador, Impacto pesado(3), Resistente(9)) | 455g |
| Mejorar con una opción | Pterodáctilo (Garras pesadas (A3, PA(1)), Emboscada, Volador, Resistente(9)) | 635g |
| Mejorar con una opción | Cazador primigenio (Primigenio mejorado) | 20g |
| Mejorar con una opción | Hostigador (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Guardián del templo (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Jefe (Desgarrador cuerpo a cuerpo) | 35g |

##### Veterano saurio (Saurian Veteran)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Héroe, Resistente(9), Primigenio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Golpe del dios serpiente (9", A1, Asalto, Perdición), Lanza de caballería (A3, Estocada) | 40g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 45g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 45g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 20g |
| Reemplazar Golpe del dios serpiente | Golpe del dios dáctilo (9", A1, Asalto, Triturar) | Gratis |
| Reemplazar Golpe del dios serpiente | Golpe del dios piraña (9", A1, Anticobertura, Asalto, Oleada) | Gratis |
| Reemplazar Golpe del dios serpiente | Golpe del dios lagarto (9", A1, Desgarrador, Asalto) | 10g |
| Mejorar con una opción | Destino sagrado (Hazaña de protección) | 70g |
| Mejorar con una opción | Raptor (Rápido, Impacto(3), Resistente(9)) | 460g |
| Mejorar con una opción | Tiranosaurio (Fauces trituradoras (A8, PA(2)), Pisotón (A4, PA(1)), Primigenio mejorado, Miedo(2), Resistente(36)) | 1830g |
| Mejorar con una opción | Engendro sagrado (Carga rápida) | 35g |
| Mejorar con una opción | Guardián del templo (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Jefe (Desgarrador cuerpo a cuerpo) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Veterano caimán (Gator Veteran)

Cal 6+ · Def 6+ · Armas: Guja de serpientes maestra (A2, Explosión(3), Perdición) · Reglas: Miedo(1), Impávido, Héroe, Resistente(18), Primigenio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Guja de serpiente maestra | Maza de cristal oscuro maestra (A4, PA(1), Preciso, Pinchar) | 90g |
| Reemplazar Guja de serpiente maestra | Maza del destino maestra (A2, PA(4), Letal(3), Antirregeneración) | 115g |
| Reemplazar Guja de serpiente maestra | Gran arma maestra (A6, PA(4)) | 145g |
| Reemplazar Guja de serpiente maestra | Armas de mano dobles (A8) | 30g |
| Reemplazar Guja de serpiente maestra | Golpe del dios serpiente (9", A3, Asalto, Perdición), Guja de serpientes (A2, Explosión(3), Perdición) | 110g |
| Reemplazar Guja de serpiente | Maza de cristal oscuro (A4, Preciso, Pinchar) | 55g |
| Reemplazar Guja de serpiente | Gran arma (A6, PA(2)) | 80g |
| Reemplazar Guja de serpiente | Maza del destino (A2, PA(4), Letal(3)) | 105g |
| Reemplazar Golpe del dios serpiente | Golpe del dios dáctilo (9", A3, Asalto, Triturar) | Gratis |
| Reemplazar Golpe del dios serpiente | Golpe del dios piraña (9", A3, Anticobertura, Asalto, Oleada) | -5g (devuelve oro) |
| Reemplazar Golpe del dios serpiente | Golpe del dios lagarto (9", A3, Desgarrador, Asalto) | 35g |
| Mejorar con | Destino sagrado (Hazaña de protección) | 150g |
| Mejorar con una opción | Rugido primigenio (Primigenio mejorado) | 35g |
| Mejorar con una opción | Guardián del templo (Contraataque cuerpo a cuerpo) | 30g |
| Mejorar con una opción | Engendro sagrado (Carga rápida) | 70g |

##### Mago-rana (Frog-Mage)

Cal 6+ · Def 6+ · Armas: Gran pulso mágico (A8, Imparable) · Reglas: Miedo(1), Héroe, Andarín, Resistente(18), Primigenio, Impávido

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Gran pulso mágico | Descarga hechicera (24", A2, Explosión(3)), Golpe (A2) | -25g (devuelve oro) |
| Reemplazar Gran pulso mágico | Descarga mágica (12", A1, Explosión(3), Asalto), Pulso mágico (A6, Imparable) | 25g |
| Reemplazar Gran pulso mágico | Bastón de mago-rana (A4, Amplificador de hechizos) | 10g |
| Reemplazar Descarga mágica | Oleada mágica (9", A3, Asalto, Imparable) | 35g |
| Reemplazar Descarga mágica | Choque mágico (9", A3, PA(1), Anticobertura, Asalto) | 45g |
| Reemplazar Descarga mágica | Chorro mágico (9", A2, Asalto, Preciso, Pinchar) | 55g |
| Reemplazar Descarga hechicera | Choque hechicero (18", A6, PA(1), Anticobertura) | 75g |
| Reemplazar Descarga hechicera | Rayo hechicero (12", A2, PA(4), Letal(3)) | 80g |
| Mejorar con una opción | Destino sagrado (Hazaña de protección) | 150g |
| Mejorar con una opción | Quetzalcóatl (Golpe místico (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3920g |
| Mejorar con una opción | Guardián del templo (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Guía primigenia (Primigenio mejorado) | 45g |
| Mejorar con una opción | Engendro sagrado (Carga rápida) | 70g |

**Hechizos de Saurios**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Guía del destino | Fateful Guidance | 1 | Elige una unidad aliada a 12" o menos, que obtiene Firme una vez (la próxima vez que se aplique el efecto). |
| Enjambre de pirañas | Piranha Swarm | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 2 impactos con Pinchar. |
| Niebla venenosa | Poison Mist | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Triturar en sus armas al atacar una vez (la próxima vez que se aplique el efecto). |
| Salto del jaguar | Jaguar Pounce | 2 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 4 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Rugido primordial | Primordial Roar | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Primigenio / Primigenio mejorado una vez (la próxima vez que se aplique el efecto). |
| Huevo de serpiente | Serpent Egg | 3 | Elige una unidad enemiga a 12" o menos, que sufre 9 impactos con Perdición. |

### Caos (Havoc)

#### Discípulos de la Guerra (War Disciples)

##### Maestro del Caos de la Guerra (War Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 25g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Bestia de sangre (Rápido, Impacto(3), Resistente(9)) | 390g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 450g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 745g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 805g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 840g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1785g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 2885g |
| Mejorar con una opción | Señor de la Guerra (Ligado a la Guerra mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Maestro del Caos elegido de la Guerra (War Chosen Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Experto versátil, Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 15g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 40g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 20g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 25g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Bestia de sangre (Rápido, Impacto(3), Resistente(9)) | 390g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 470g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 755g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 805g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 875g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1880g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3025g |
| Mejorar con una opción | Señor de la Guerra (Ligado a la Guerra mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Campeón bárbaro de la Guerra (War Barbarian Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 45g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 60g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Gran mangual (A3, PA(1), Oleada) | 20g |
| Reemplazar Jabalina | Jabalinas con púas (9", A1, Asalto, Azote) | 10g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 60g |
| Reemplazar Arco corto rápido | Red de trampero (9", A3, Desgarrador, Asalto) | 100g |
| Reemplazar Maestro de incursiones | Maestro de caballos (Rápido, Impacto(1), Vanguardia) | 50g |
| Mejorar con una opción | Heraldo (Triturar al disparar) | 15g |
| Mejorar con una opción | Señor de la Guerra (Ligado a la Guerra mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |

**Hechizos de Discípulos de la Guerra**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Furia aterradora | Terrifying Fury | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que debe hacer un chequeo de moral. Si lo falla, queda Fatigada. |
| Masacre brutal | Brutal Massacre | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con PA(1) y Purgar. |
| Protección ígnea | Fiery Protection | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Evasión cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Golpe cazacabezas | Headtaker Strike | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Don de la Guerra | War Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado a la Guerra / Ligado a la Guerra mejorado una vez (la próxima vez que se aplique el efecto). |
| Llama de destrucción | Flame of Destruction | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 3 impactos con Explosión(3). |

#### Discípulos de la Lujuria (Lust Disciples)

##### Maestro del Caos de la Lujuria (Lust Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Bestia de la Lujuria (Fauces venenosas (A1, Perdición), Rápido) | 90g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 465g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 790g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 860g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 865g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1820g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 2905g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor de la Lujuria (Ligado a la Lujuria mejorado) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Maestro del Caos elegido de la Lujuria (Lust Chosen Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Experto versátil, Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 50g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 25g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 25g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Bestia de la Lujuria (Fauces venenosas (A1, Perdición), Rápido) | 95g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 480g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 805g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 860g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 900g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1915g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3050g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor de la Lujuria (Ligado a la Lujuria mejorado) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Campeón bárbaro de la Lujuria (Lust Barbarian Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 70g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Gran mangual (A3, PA(1), Oleada) | 20g |
| Reemplazar Jabalina | Jabalinas con púas (9", A1, Asalto, Azote) | 10g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Reemplazar Arco corto rápido | Red de trampero (9", A3, Desgarrador, Asalto) | 85g |
| Reemplazar Maestro de incursiones | Maestro de caballos (Rápido, Impacto(1), Vanguardia) | 50g |
| Mejorar con una opción | Heraldo (Triturar al disparar) | 15g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor de la Lujuria (Ligado a la Lujuria mejorado) | 35g |

**Hechizos de Discípulos de la Lujuria**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Éxtasis de combate | Combat Ecstasy | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Disparo rápido una vez (la próxima vez que se aplique el efecto). |
| Convulsión total | Total Seizure | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Don de la Lujuria | Lust Boon | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Ligado a la Lujuria / Ligado a la Lujuria mejorado una vez (la próxima vez que se aplique el efecto). |
| Dolor hermoso | Beautiful Pain | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Aniquilar. |
| Danza dichosa | Blissful Dance | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Evasión cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Latigazo abrumador | Overpowering Lash | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Triturar. |

#### Discípulos de la Plaga (Plague Disciples)

##### Maestro del Caos de la Plaga (Plague Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 60g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Trono de la Plaga (Garras tóxicas (A3, Perdición), Resistente(9)) | 365g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 535g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 945g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 1010g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 1020g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 2170g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3510g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |
| Mejorar con una opción | Señor de la Plaga (Ligado a la Plaga mejorado) | 110g |

##### Maestro del Caos elegido de la Plaga (Plague Chosen Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Experto versátil, Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 50g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 45g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 25g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Trono de la Plaga (Garras tóxicas (A3, Perdición), Resistente(9)) | 385g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 550g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 955g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 1010g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 1055g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 2270g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3655g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |
| Mejorar con una opción | Señor de la Plaga (Ligado a la Plaga mejorado) | 110g |

##### Campeón bárbaro de la Plaga (Plague Barbarian Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 110g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Gran mangual (A3, PA(1), Oleada) | 20g |
| Reemplazar Jabalina | Jabalinas con púas (9", A1, Asalto, Azote) | 10g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Reemplazar Arco corto rápido | Red de trampero (9", A3, Desgarrador, Asalto) | 85g |
| Reemplazar Maestro de incursiones | Maestro de caballos (Rápido, Impacto(1), Vanguardia) | 50g |
| Mejorar con una opción | Heraldo (Triturar al disparar) | 15g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor de la Plaga (Ligado a la Plaga mejorado) | 110g |

**Hechizos de Discípulos de la Plaga**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Aura de pestilencia | Aura of Pestilence | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que cuenta como si estuviera en Terreno difícil una vez (la próxima vez que se aplique el efecto). |
| Putrefacción rápida | Rapid Putrefaction | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 2 impactos con PA(1) y Diezmar. |
| Virus bendito | Blessed Virus | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Carrera rápida una vez (la próxima vez que se aplique el efecto). |
| Ola de podredumbre | Rot Wave | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos. |
| Don de la Plaga | Plague Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado a la Plaga / Ligado a la Plaga mejorado una vez (la próxima vez que se aplique el efecto). |
| Maldición de la Plaga | Plague Malediction | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### Discípulos del Cambio (Change Disciples)

##### Maestro del Caos del Cambio (Change Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 495g |
| Mejorar con una opción | Disco del Cambio (Rápido, Andarín, Resistente(9)) | 655g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 860g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 935g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 925g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1950g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3105g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor del Cambio (Ligado al Cambio mejorado) | 25g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Campeón hombre-pájaro del Cambio (Change Birdman Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Espada maldita maestra (A3, PA(1), Triturar) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Virotes oscuros pesados (18", A3, Triturar), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Descarga oscura (9", A1, Asalto, Triturar), Espada maldita (A3, Triturar) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 40g |
| Reemplazar Espada maldita | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Espada maldita | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Espada maldita | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Virote oscuro pesado | Arco corto rápido (18", A4) | Gratis |
| Mejorar con | Disco del Cambio (Golpe (A3), Rápido, Andarín, Resistente(9)) | 690g |

##### Maestro del Caos elegido del Cambio (Change Chosen Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Experto versátil, Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 50g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 30g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 25g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 515g |
| Mejorar con una opción | Disco del Cambio (Rápido, Andarín, Resistente(9)) | 655g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 870g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 925g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 970g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 2050g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3250g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor del Cambio (Ligado al Cambio mejorado) | 25g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Campeón bárbaro del Cambio (Change Barbarian Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 80g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Gran mangual (A3, PA(1), Oleada) | 20g |
| Reemplazar Jabalina | Jabalinas con púas (9", A1, Asalto, Azote) | 10g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Reemplazar Arco corto rápido | Red de trampero (9", A3, Desgarrador, Asalto) | 85g |
| Reemplazar Maestro de incursiones | Maestro de caballos (Rápido, Impacto(1), Vanguardia) | 50g |
| Mejorar con una opción | Heraldo (Triturar al disparar) | 15g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Señor del Cambio (Ligado al Cambio mejorado) | 25g |

**Hechizos de Discípulos del Cambio**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Forma cambiante | Shifting Form | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que pierde 2 fichas de hechizo. Ten en cuenta que el objetivo no puede gastar esas fichas para evitar este efecto. |
| Llamarada celeste | Sky Blaze | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 3 impactos con Lacerar. |
| Aliento del Cambio | Breath of Change | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Perdición al disparar una vez (la próxima vez que se aplique el efecto). |
| Proyectil de poder | Power Bolt | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(2). |
| Don del Cambio | Change Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado al Cambio / Ligado al Cambio mejorado una vez (la próxima vez que se aplique el efecto). |
| Infierno mutante | Mutating Inferno | 3 | Elige hasta dos unidades enemigas a 24" o menos en línea de visión, que sufren 3 impactos cada una. |

#### Guerreros del Caos (Havoc Warriors)

##### Maestro del Caos elegido (Chosen Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Ligado al Caos, Héroe, Resistente(9), Experto versátil

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 40g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 10g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 20g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 25g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 470g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 760g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 805g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 880g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1870g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3000g |
| Mejorar con una opción | Señor del Caos (Ligado al Caos mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Maestro del Caos (Havoc Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado al Caos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 25g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Arma de fuego infernal (12", A1, Explosión(3), Asalto), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 25g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Hacha arrojadiza | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Arma de fuego infernal | Arma de fuego funesto (9", A1, PA(2), Letal(3), Asalto) | 40g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura demoníaca (Garras afiladas (A3, Desgarrador), Rápido, Miedo(1), Resistente(9)) | 450g |
| Mejorar con una opción | Carro del Caos (Pezuñas (A2, PA(1)), Rápido, Impacto(4), Resistente(18)) | 745g |
| Mejorar con una opción | Carro de gran bestia (Rápido, Miedo(1), Impacto pesado(6), Resistente(18)) | 805g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Miedo(1), Volador, Resistente(18)) | 845g |
| Mejorar con una opción | Dragón del Caos (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1775g |
| Mejorar con una opción | Gran dragón del Caos (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 2855g |
| Mejorar con una opción | Señor del Caos (Ligado al Caos mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conquistador (Explorador) | 105g |

##### Campeón bárbaro (Barbarian Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Ligado al Caos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 55g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 45g |
| Reemplazar Arma de mano doble | Bastón de hechicero (A2, Amplificador de hechizos) | 60g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Gran mangual (A3, PA(1), Oleada) | 20g |
| Reemplazar Jabalina | Jabalinas con púas (9", A1, Asalto, Azote) | 5g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Reemplazar Arco corto rápido | Red de trampero (9", A3, Desgarrador, Asalto) | 90g |
| Reemplazar Maestro de incursiones | Maestro de caballos (Rápido, Impacto(1), Vanguardia) | 50g |
| Mejorar con una opción | Heraldo (Triturar al disparar) | 15g |
| Mejorar con una opción | Señor del Caos (Ligado al Caos mejorado) | 10g |
| Mejorar con una opción | Merodeador (Luchador impredecible) | 20g |
| Mejorar con una opción | Brujo (Ocultación a distancia) | 20g |

##### Heraldo del Caos (Harbinger of Havoc)

Cal 6+ · Def 6+ · Armas: 2x Martillo demoníaco (A1, PA(1), Explosión(3)), Pisotón (A2, PA(1)) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado al Caos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar cualquier Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar cualquier Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 35g |
| Reemplazar cualquier Martillo demoníaco | Espada demoníaca (A3, Desgarrador) | 30g |
| Reemplazar cualquier Martillo demoníaco | Cadena demoníaca (12", A3, Asalto) | 45g |
| Mejorar con cualquiera | Alas (Volador) | 155g |
| Mejorar con cualquiera | Incursión demoníaca (Emboscada) | 205g |

**Hechizos de Guerreros del Caos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Zancada maldita | Cursed Stride | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que cuenta como si estuviera en Terreno peligroso una vez (la próxima vez que se aplique el efecto). |
| Pincho empalador | Impaling Spike | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Escudo oscuro | Dark Shielding | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Fortificado una vez (la próxima vez que se aplique el efecto). |
| Campo de espinas | Thorn Field | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Azote. |
| Impulso del Caos | Havoc Boost | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado al Caos / Ligado al Caos mejorado una vez (la próxima vez que se aplique el efecto). |
| Cadenas con púas | Barbed Chains | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos. |

### Demonios (Daemons)

#### Demonios de la Guerra (Daemons of War)

##### Campeón de la Guerra (Champion of War)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | Gratis |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Espada de sangre maestra (A3, PA(2), Purgar) | 35g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 30g |
| Reemplazar Arma de mano doble | Hacha de llamas maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Látigo de guerra (9", A1, Desgarrador, Asalto), Martillo demoníaco (A1, PA(1), Explosión(3)) | 35g |
| Reemplazar Arma de mano doble | Bastón de maestro del saber demoníaco (A2, Amplificador de hechizos) | 25g |
| Reemplazar Arma de mano doble | Látigo largo pesado (18", A3, Desgarrador), Golpe (A1) | 55g |
| Reemplazar Martillo demoníaco | Hacha de llamas (A3, Estocada) | 15g |
| Reemplazar Martillo demoníaco | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Martillo demoníaco | Espada de sangre (A3, PA(1), Purgar) | 35g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con una opción | Don de la Guerra (Frenesí defensivo) | 40g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 105g |
| Mejorar con una opción | Bestia de sangre (Defensa(1), Rápido, Impacto(3), Resistente(9)) | 545g |
| Mejorar con una opción | Trono de sangre (Dotación del trono (A6, Estocada), Defensa(1), Miedo(1), Resistente(18)) | 865g |
| Mejorar con una opción | Favor de la Guerra (Ligado a la Guerra mejorado) | 10g |
| Mejorar con una opción | Enviado de la Guerra (Furioso) | 15g |
| Mejorar con una opción | Icono de la Guerra (Tirador perforante) | 25g |
| Mejorar con una opción | Símbolo de la Guerra (Carga rápida) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Campeón de la furia de la Guerra (Fury Champion of War)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Volador, Héroe, Resistente(9), Explorador, Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | Gratis |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 30g |
| Reemplazar Arma de mano doble | Espada de sangre maestra (A3, PA(2), Purgar) | 35g |
| Reemplazar Arma de mano doble | Hacha de llamas maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Látigo de guerra (9", A1, Desgarrador, Asalto), Martillo demoníaco (A1, PA(1), Explosión(3)) | 35g |
| Reemplazar Arma de mano doble | Látigo largo pesado (18", A3, Desgarrador), Golpe (A1) | 55g |
| Reemplazar Martillo demoníaco | Hacha de llamas (A3, Estocada) | 15g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Espada de sangre (A3, PA(1), Purgar) | 35g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con una opción | Enviado de la Guerra (Furioso) | 15g |
| Mejorar con una opción | Icono de la Guerra (Tirador perforante) | 25g |
| Mejorar con una opción | Símbolo de la Guerra (Carga rápida) | 35g |
| Mejorar con una opción | Regalo de la Guerra (Escudado) | 80g |

##### Heraldo de la Guerra (Harbinger of War)

Cal 6+ · Def 6+ · Armas: 2x Martillo demoníaco (A1, PA(1), Explosión(3)), Pisotón (A2, PA(1)) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar 2x Martillo demoníaco | Bastón de maestro del saber demoníaco (A4, Amplificador de hechizos) | 15g |
| Reemplazar 2x Martillo demoníaco | Látigo de guerra pesado (9", A3, Desgarrador, Asalto), Martillo demoníaco (A1, PA(1), Explosión(3)) | 90g |
| Reemplazar 2x Martillo demoníaco | Látigo largo pesado (18", A6, Desgarrador) | 100g |
| Reemplazar cualquier Martillo demoníaco | Hacha de llamas (A3, Estocada) | 15g |
| Reemplazar cualquier Martillo demoníaco | Espada de sangre (A3, PA(1), Purgar) | 35g |
| Reemplazar cualquier Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar cualquier Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con | Don de la Guerra (Frenesí defensivo) | 85g |
| Mejorar con una opción | Alas (Volador) | 155g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 205g |
| Mejorar con una opción | Alas de furia (Volador, Explorador) | 360g |
| Mejorar con una opción | Favor de la Guerra (Ligado a la Guerra mejorado) | 15g |
| Mejorar con una opción | Enviado de la Guerra (Furioso) | 35g |
| Mejorar con una opción | Símbolo de la Guerra (Carga rápida) | 70g |
| Mejorar con una opción | Regalo de la Guerra (Escudado) | 175g |

##### Campeón del tri-sabueso (Tri-Hound Champion)

Cal 6+ · Def 6+ · Armas: Garras de llamas (A6, Estocada) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado a la Guerra

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Depredador malicioso | Avance a saltos (Explorador) | 60g |
| Mejorar con una opción | Collar de pinchos (Arrasar(6)) | 55g |
| Mejorar con una opción | Don de la Guerra (Frenesí defensivo) | 85g |
| Mejorar con una opción | Collar antimagos (Resistencia a hechizos) | 275g |
| Mejorar con | Bestia guardiana (Repeler emboscadas) | 15g |

**Hechizos de Demonios de la Guerra**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Furia aterradora | Terrifying Fury | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que debe hacer un chequeo de moral. Si lo falla, queda Fatigada. |
| Masacre brutal | Brutal Massacre | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con PA(1) y Purgar. |
| Protección ígnea | Fiery Protection | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Evasión cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Golpe cazacabezas | Headtaker Strike | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Don de la Guerra | War Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado a la Guerra / Ligado a la Guerra mejorado una vez (la próxima vez que se aplique el efecto). |
| Llama de destrucción | Flame of Destruction | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 3 impactos con Explosión(3). |

#### Demonios de la Lujuria (Daemons of Lust)

##### Campeón de la Lujuria (Champion of Lust)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Espada perfecta maestra (A3, PA(1), Aniquilar) | 40g |
| Reemplazar Arma de mano doble | Hoja ritual maestra (A3, PA(2), Oleada) | 50g |
| Reemplazar Arma de mano doble | Ballesta de puño (9", A1, Anticobertura, Asalto, Oleada), Martillo demoníaco (A1, PA(1), Explosión(3)) | 25g |
| Reemplazar Arma de mano doble | Ballesta de brazo pesada (18", A3, Anticobertura, Oleada), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bastón de maestro del saber demoníaco (A2, Amplificador de hechizos) | 35g |
| Reemplazar Martillo demoníaco | Espada perfecta (A3, Aniquilar) | 20g |
| Reemplazar Martillo demoníaco | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Hoja ritual (A3, PA(1), Oleada) | 35g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con | Don de la Lujuria (Represalia(1)) | 75g |
| Mejorar con una opción | Bestia de la Lujuria (Fauces tóxicas (A1, Perdición), Rápido) | 90g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 105g |
| Mejorar con una opción | Heraldo vinculado (Garras rituales (A6, PA(1), Oleada), Defensa(1), Miedo(1), Resistente(18)) | 940g |
| Mejorar con una opción | Carro de manguales cortantes (Bestias de la Lujuria (A2, Perdición), Defensa(1), Rápido, Miedo(1), Impacto(4), Resistente(18)) | 1060g |
| Mejorar con una opción | Icono de la Lujuria (Imparable al disparar) | 15g |
| Mejorar con una opción | Símbolo de la Lujuria (Luchador de golpe y huida) | 15g |
| Mejorar con una opción | Enviado de la Lujuria (Carga perforante) | 15g |
| Mejorar con una opción | Favor de la Lujuria (Ligado a la Lujuria mejorado) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Sirena infernal (Infernal Siren)

Cal 6+ · Def 6+ · Armas: Arpa infernal (18", A3, Imparable), Golpe (A1) · Reglas: Héroe, Ligado a la Lujuria, Resistente(9)

> ⚠️ La web da un error al calcular la tienda de este héroe, así que no muestra precios. Las opciones salen del libro de la facción.

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Canción de destierro (Tormenta de la Lujuria (15", A3, Limitado, Anticobertura, Asalto, Oleada)) | sin precio |
| Mejorar con | Don de la Lujuria (Represalia(1)) | sin precio |

##### Campeón de la furia de la Lujuria (Fury Champion of Lust)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Volador, Héroe, Resistente(9), Explorador, Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Espada perfecta maestra (A3, PA(1), Aniquilar) | 40g |
| Reemplazar Arma de mano doble | Hoja ritual maestra (A3, PA(2), Oleada) | 50g |
| Reemplazar Arma de mano doble | Ballesta de puño (9", A1, Anticobertura, Asalto, Oleada), Martillo demoníaco (A1, PA(1), Explosión(3)) | 25g |
| Reemplazar Arma de mano doble | Ballesta de brazo pesada (18", A3, Anticobertura, Oleada), Golpe (A1) | 40g |
| Reemplazar Martillo demoníaco | Espada perfecta (A3, Aniquilar) | 20g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Hoja ritual (A3, PA(1), Oleada) | 35g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con una opción | Icono de la Lujuria (Imparable al disparar) | 15g |
| Mejorar con una opción | Símbolo de la Lujuria (Luchador de golpe y huida) | 15g |
| Mejorar con una opción | Enviado de la Lujuria (Carga perforante) | 15g |
| Mejorar con una opción | Regalo de la Lujuria (Contraataque cuerpo a cuerpo) | 25g |

##### Heraldo de la Lujuria (Harbinger of Lust)

Cal 6+ · Def 6+ · Armas: 2x Martillo demoníaco (A1, PA(1), Explosión(3)), Pisotón (A2, PA(1)) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado a la Lujuria

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar 2x Martillo demoníaco | Bastón de maestro del saber demoníaco (A4, Amplificador de hechizos) | 25g |
| Reemplazar 2x Martillo demoníaco | Ballesta de puño pesada (9", A3, Anticobertura, Asalto, Oleada), Martillo demoníaco (A1, PA(1), Explosión(3)) | 50g |
| Reemplazar 2x Martillo demoníaco | Ballesta de brazo pesada (18", A6, Anticobertura, Oleada) | 75g |
| Reemplazar cualquier Martillo demoníaco | Espada perfecta (A3, Aniquilar) | 20g |
| Reemplazar cualquier Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar cualquier Martillo demoníaco | Hoja ritual (A3, PA(1), Oleada) | 35g |
| Reemplazar cualquier Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con | Don de la Lujuria (Represalia(1)) | 150g |
| Mejorar con una opción | Alas (Volador) | 155g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 205g |
| Mejorar con una opción | Alas de furia (Volador, Explorador) | 360g |
| Mejorar con una opción | Símbolo de la Lujuria (Luchador de golpe y huida) | 25g |
| Mejorar con una opción | Enviado de la Lujuria (Carga perforante) | 25g |
| Mejorar con una opción | Regalo de la Lujuria (Contraataque cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Favor de la Lujuria (Ligado a la Lujuria mejorado) | 70g |

**Hechizos de Demonios de la Lujuria**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Éxtasis de combate | Combat Ecstasy | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Disparo rápido una vez (la próxima vez que se aplique el efecto). |
| Convulsión total | Total Seizure | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Don de la Lujuria | Lust Boon | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Ligado a la Lujuria / Ligado a la Lujuria mejorado una vez (la próxima vez que se aplique el efecto). |
| Dolor hermoso | Beautiful Pain | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Aniquilar. |
| Danza dichosa | Blissful Dance | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Evasión cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Latigazo abrumador | Overpowering Lash | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Triturar. |

#### Demonios de la Plaga (Daemons of Plague)

##### Campeón de la Plaga (Champion of Plague)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Espada de la Plaga maestra (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Espada infectada maestra (A3, PA(2), Diezmar) | 30g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Honda de dispersión (9", A1, Asalto, Perdición), Martillo demoníaco (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Honda larga pesada (18", A3, Perdición), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Bastón de maestro del saber demoníaco (A2, Amplificador de hechizos) | 60g |
| Reemplazar Martillo demoníaco | Espada de la Plaga (A3, Perdición) | 10g |
| Reemplazar Martillo demoníaco | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Martillo demoníaco | Espada infectada (A3, PA(1), Diezmar) | 20g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con una opción | Don de la Plaga (Crecimiento fortificado) | 40g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 105g |
| Mejorar con una opción | Trono de la Plaga (Garras tóxicas (A3, Perdición), Resistente(9)) | 365g |
| Mejorar con una opción | Caracol gigante (Buche tóxico (A6, Perdición), Lento, Resistente(18)) | 595g |
| Mejorar con una opción | Icono de la Plaga (Implacable) | 20g |
| Mejorar con una opción | Enviado de la Plaga (Desgarrador cuerpo a cuerpo) | 35g |
| Mejorar con una opción | Símbolo de la Plaga (Firme) | 65g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Favor de la Plaga (Ligado a la Plaga mejorado) | 110g |

##### Campeón de la furia de la Plaga (Fury Champion of Plague)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Volador, Héroe, Resistente(9), Explorador, Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Espada de la Plaga maestra (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Espada infectada maestra (A3, PA(2), Diezmar) | 30g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Honda de dispersión (9", A1, Asalto, Perdición), Martillo demoníaco (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Honda larga pesada (18", A3, Perdición), Golpe (A1) | 35g |
| Reemplazar Martillo demoníaco | Espada infectada (A3, PA(1), Diezmar) | 20g |
| Reemplazar Martillo demoníaco | Espada de la Plaga (A3, Perdición) | 10g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con una opción | Icono de la Plaga (Implacable) | 20g |
| Mejorar con una opción | Enviado de la Plaga (Desgarrador cuerpo a cuerpo) | 35g |
| Mejorar con una opción | Símbolo de la Plaga (Firme) | 65g |
| Mejorar con una opción | Regalo de la Plaga (Regeneración) | 125g |

##### Cosechador de la Plaga (Plague Harvester)

Cal 6+ · Def 6+ · Armas: Guadaña de la Plaga (A1, PA(2), Letal(3), Perdición) · Reglas: Héroe, Resistente(9), Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con | Don de la Plaga (Crecimiento fortificado) | 40g |

##### Heraldo de la Plaga (Harbinger of Plague)

Cal 6+ · Def 6+ · Armas: 2x Martillo demoníaco (A1, PA(1), Explosión(3)), Pisotón (A2, PA(1)) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado a la Plaga

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar 2x Martillo demoníaco | Honda de dispersión pesada (9", A3, Asalto, Perdición), Martillo demoníaco (A1, PA(1), Explosión(3)) | 50g |
| Reemplazar 2x Martillo demoníaco | Honda larga pesada (18", A6, Perdición) | 60g |
| Reemplazar 2x Martillo demoníaco | Bastón de maestro del saber demoníaco (A4, Amplificador de hechizos) | 50g |
| Reemplazar cualquier Martillo demoníaco | Espada de la Plaga (A3, Perdición) | 10g |
| Reemplazar cualquier Martillo demoníaco | Espada infectada (A3, PA(1), Diezmar) | 20g |
| Reemplazar cualquier Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar cualquier Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con | Don de la Plaga (Crecimiento fortificado) | 90g |
| Mejorar con una opción | Alas (Volador) | 155g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 205g |
| Mejorar con una opción | Alas de furia (Volador, Explorador) | 360g |
| Mejorar con una opción | Enviado de la Plaga (Desgarrador cuerpo a cuerpo) | 50g |
| Mejorar con una opción | Símbolo de la Plaga (Firme) | 135g |
| Mejorar con una opción | Favor de la Plaga (Ligado a la Plaga mejorado) | 240g |
| Mejorar con una opción | Regalo de la Plaga (Regeneración) | 275g |

**Hechizos de Demonios de la Plaga**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Aura de pestilencia | Aura of Pestilence | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que cuenta como si estuviera en Terreno difícil una vez (la próxima vez que se aplique el efecto). |
| Putrefacción rápida | Rapid Putrefaction | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 3 impactos con Diezmar. |
| Virus bendito | Blessed Virus | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Carrera rápida una vez (la próxima vez que se aplique el efecto). |
| Ola de podredumbre | Rot Wave | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos. |
| Don de la Plaga | Plague Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado a la Plaga / Ligado a la Plaga mejorado una vez (la próxima vez que se aplique el efecto). |
| Maldición de la Plaga | Plague Malediction | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### Demonios del Cambio (Daemons of Change)

##### Campeón del Cambio (Champion of Change)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Bastón de poder maestro (A3, PA(1), Triturar) | 20g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Descarga mágica (9", A1, Asalto, Triturar), Martillo demoníaco (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Chakram maldito pesado (24", A3, Lacerar), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Bastón de maestro del saber demoníaco (A2, Amplificador de hechizos) | 40g |
| Reemplazar Martillo demoníaco | Bastón de poder (A3, Triturar) | 10g |
| Reemplazar Martillo demoníaco | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Chakram maldito pesado | Proyectil mágico pesado (18", A3, Triturar) | Gratis |
| Mejorar con | Don del Cambio (Acumulador de hechizos(1)) | 30g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 105g |
| Mejorar con una opción | Disco del Cambio (Golpe (A3), Rápido, Andarín, Resistente(9)) | 690g |
| Mejorar con una opción | Carro de chilladores (Chilladores (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Andarín, Resistente(18)) | 1455g |
| Mejorar con una opción | Enviado del Cambio (Imparable cuerpo a cuerpo) | 10g |
| Mejorar con una opción | Icono del Cambio (Indirecto al disparar) | 25g |
| Mejorar con una opción | Favor del Cambio (Ligado al Cambio mejorado) | 25g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Símbolo del Cambio (Impávido) | 85g |

##### Campeón horror del Cambio (Horror Champion of Change)

Cal 6+ · Def 6+ · Armas: Bolas de fuego (12", A1, Asalto), Garras de horror (A3, Triturar) · Reglas: Héroe, Resistente(9), Ligado al Cambio

> ⚠️ La web da un error al calcular la tienda de este héroe, así que no muestra precios. Las opciones salen del libro de la facción.

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con | Don del Cambio (Acumulador de hechizos(1)) | sin precio |

##### Campeón de la furia del Cambio (Fury Champion of Change)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Volador, Héroe, Resistente(9), Explorador, Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo demoníaco maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Bastón de poder maestro (A3, PA(1), Triturar) | 20g |
| Reemplazar Arma de mano doble | Lanza demoníaca maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Arma de mano doble | Guantelete demoníaco maestro (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Descarga mágica (9", A1, Asalto, Triturar), Martillo demoníaco (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Chakram maldito pesado (24", A3, Lacerar), Golpe (A1) | 25g |
| Reemplazar Martillo demoníaco | Bastón de poder (A3, Triturar) | 10g |
| Reemplazar Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Chakram maldito pesado | Proyectil mágico pesado (18", A3, Triturar) | Gratis |
| Mejorar con una opción | Enviado del Cambio (Imparable cuerpo a cuerpo) | 10g |
| Mejorar con una opción | Icono del Cambio (Indirecto al disparar) | 25g |
| Mejorar con una opción | Símbolo del Cambio (Impávido) | 85g |
| Mejorar con una opción | Regalo del Cambio (Resistencia a hechizos) | 125g |

##### Heraldo del Cambio (Harbinger of Change)

Cal 6+ · Def 6+ · Armas: 2x Martillo demoníaco (A1, PA(1), Explosión(3)), Pisotón (A2, PA(1)) · Reglas: Miedo(1), Héroe, Resistente(18), Ligado al Cambio

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar 2x Martillo demoníaco | Chakram maldito pesado (24", A6, Lacerar) | 45g |
| Reemplazar 2x Martillo demoníaco | Proyectil mágico pesado (18", A6, Triturar) | 45g |
| Reemplazar 2x Martillo demoníaco | Descarga mágica pesada (9", A3, Asalto, Triturar), Martillo demoníaco (A1, PA(1), Explosión(3)) | 50g |
| Reemplazar 2x Martillo demoníaco | Bastón de maestro del saber demoníaco (A4, Amplificador de hechizos) | 35g |
| Reemplazar cualquier Martillo demoníaco | Bastón de poder (A3, Triturar) | 10g |
| Reemplazar cualquier Martillo demoníaco | Guantelete demoníaco (A3, PA(2)) | 30g |
| Reemplazar cualquier Martillo demoníaco | Lanza demoníaca (A1, PA(4), Letal(3)) | 40g |
| Mejorar con | Don del Cambio (Acumulador de hechizos(1)) | 30g |
| Mejorar con una opción | Alas (Volador) | 155g |
| Mejorar con una opción | Incursión demoníaca (Emboscada) | 205g |
| Mejorar con una opción | Alas de furia (Volador, Explorador) | 360g |
| Mejorar con una opción | Enviado del Cambio (Imparable cuerpo a cuerpo) | 10g |
| Mejorar con una opción | Favor del Cambio (Ligado al Cambio mejorado) | 55g |
| Mejorar con una opción | Símbolo del Cambio (Impávido) | 185g |
| Mejorar con una opción | Regalo del Cambio (Resistencia a hechizos) | 275g |

**Hechizos de Demonios del Cambio**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Forma cambiante | Shifting Form | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que pierde 2 fichas de hechizo. Ten en cuenta que el objetivo no puede gastar esas fichas para evitar este efecto. |
| Llamarada celeste | Sky Blaze | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 3 impactos con Lacerar. |
| Aliento del Cambio | Breath of Change | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Perdición al disparar una vez (la próxima vez que se aplique el efecto). |
| Proyectil de poder | Power Bolt | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(2). |
| Don del Cambio | Change Boon | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado al Cambio / Ligado al Cambio mejorado una vez (la próxima vez que se aplique el efecto). |
| Infierno mutante | Mutating Inferno | 3 | Elige hasta dos unidades enemigas a 24" o menos en línea de visión, que sufren 3 impactos cada una. |

### Elfos (Elves)

#### Altos elfos (High Elves)

##### Alto noble (High Noble)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Alta cuna

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Hacha del león maestra (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Descarga de fuego (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Proyectil mágico (9", A1, Asalto, Imparable), Hacha del león (A3, Perdición) | 40g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 35g |
| Reemplazar Hacha del león | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Hacha del león | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Hacha del león | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Hacha del león | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Hacha del león | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Proyectil mágico | Proyectil maléfico (9", A1, Asalto, Perdición) | Gratis |
| Reemplazar Descarga de fuego | Arco rápido (24", A3) | -5g (devuelve oro) |
| Reemplazar Descarga de fuego | Descarga de hielo (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Reemplazar Descarga de fuego | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con una opción | Maestro de armas (Furioso) | 15g |
| Mejorar con una opción | Corcel de combate (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Guerrero fénix (Regeneración) | 125g |
| Mejorar con una opción | Montura bestial (Saltarín, Vanguardia) | 150g |
| Mejorar con una opción | Guerrero león (Impávido, Resistencia a hechizos) | 210g |
| Mejorar con una opción | Corcel dragón (Defensa(1), Rápido, Impávido, Impacto(1)) | 255g |
| Mejorar con una opción | Fénix de fuego (Garras de llamas (A6, Desgarrador), Miedo(1), Volador, Furioso, Regeneración, Resistente(18)) | 1290g |
| Mejorar con una opción | Fénix de hielo (Garras de hielo (A6, PA(1)), Defensa(1), Miedo(1), Volador, Regeneración, Resistente(18)) | 1415g |
| Mejorar con una opción | Grifo (Garras afiladas (A8), Defensa(1), Rápido, Miedo(1), Volador, Resistente(18)) | 1570g |
| Mejorar con una opción | Dragón real (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras rápidas (A8, PA(1), Oleada), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2235g |
| Mejorar con una opción | Comandante (Alta cuna mejorada) | 5g |
| Mejorar con una opción | Alto mercader (Implacable) | 20g |
| Mejorar con una opción | Príncipe de guerra (Triturar cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Celador de la costa (Escudado) | 80g |

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Alta cuna

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Proyectil mágico (9", A1, Asalto, Imparable), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Proyectil mágico | Proyectil maléfico (9", A1, Asalto, Perdición) | Gratis |
| Reemplazar Arco rápido | Arco del reino rápido (24", A3, Fractura) | 15g |
| Reemplazar Arco rápido | Descarga de fuego (6", A1, Explosión(3), Asalto, Preciso) | 5g |
| Reemplazar Arco rápido | Arco corto del reino rápido (18", A4, Fractura) | 30g |
| Reemplazar Arco rápido | Descarga de hielo (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 55g |
| Mejorar con una opción | Corcel de combate (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Montura bestial (Saltarín, Vanguardia) | 150g |
| Mejorar con una opción | Corcel de plata (Defensa(1), Rápido, Impacto(1)) | 170g |
| Mejorar con una opción | Nube mágica (Rápido, Volador) | 285g |
| Mejorar con una opción | Gran bestia (Defensa(1), Rápido, Miedo(1), Impacto(3), Resistente(9)) | 590g |
| Mejorar con una opción | Águila gigante (Garras de águila (A3, Desgarrador), Defensa(1), Rápido, Volador, Resistente(9)) | 950g |
| Mejorar con una opción | Comandante (Alta cuna mejorada) | 5g |
| Mejorar con una opción | Alto mercader (Implacable) | 20g |
| Mejorar con una opción | Acólito mago (Conducto de hechizos) | 30g |
| Mejorar con una opción | Celador de la costa (Escudado) | 80g |
| Mejorar con una opción | Embajador (Impávido) | 85g |

**Hechizos de Altos elfos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Camino a la gloria | Path to Glory | 1 | Elige una unidad aliada a 12" o menos, que obtiene Alta cuna / Alta cuna mejorada una vez (la próxima vez que se aplique el efecto). |
| Descarga arcana | Arcane Blast | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3). |
| Foco de ojo de águila | Eagle-Eyed Focus | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen +1 en las tiradas para impactar al disparar una vez (la próxima vez que se aplique el efecto). |
| Gran tempestad | High Tempest | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Oleada mágica | Magical Surge | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Perdición en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Flechas mágicas | Magic Arrows | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos con Fractura. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |

#### Elfos abisales (Deep-Sea Elves)

##### Maestro del mar (Sea Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Andarín, Paso de ola

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 65g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Jabalina | Tubo de dardos (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Jabalina | Descarga abisal (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Mejorar con | Paso abisal (Redespliegue en emboscada) | 205g |
| Mejorar con una opción | Anguila de guerra barrera (Rápido, Impacto(1), Sigilo) | 235g |
| Mejorar con una opción | Anguila de guerra explosiva (Rápido, Impacto(1), Represalia(1)) | 250g |
| Mejorar con una opción | Sierpe marina (Rápido, Impacto(3), Resistente(9)) | 625g |
| Mejorar con una opción | Draco marino (Garras tóxicas (A6, Perdición), Defensa(1), Miedo(1), Resistente(18)) | 995g |
| Mejorar con una opción | Alto monarca (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Vidente de las profundidades (Ocultación a distancia) | 20g |
| Mejorar con una opción | Navegante divino (Paso de ola mejorado) | 55g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Portador de la luz (Impávido) | 85g |

##### Erudito (Scholar)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Andarín, Paso de ola

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1), Segador de cabezas (Disparo rápido) | 45g |
| Reemplazar Arma de mano doble | Bastón de mago de las mareas (A2, Amplificador de hechizos) | 50g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Jabalina | Tubo de dardos (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Jabalina | Descarga abisal (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco corto rápido | Ballesta rápida (18", A3, Desgarrador) | 25g |
| Mejorar con | Paso abisal (Redespliegue en emboscada) | 205g |
| Mejorar con una opción | Compañero abisal (Repeler emboscadas) | 15g |
| Mejorar con una opción | Guardián del mar (Explorador) | 105g |
| Mejorar con una opción | Anguila de guerra barrera (Rápido, Impacto(1), Sigilo) | 235g |
| Mejorar con una opción | Anguila de guerra explosiva (Rápido, Impacto(1), Represalia(1)) | 250g |
| Mejorar con una opción | Gran bestia (Lengua tóxica (A3, Perdición), Defensa(1), Resistente(9)) | 505g |
| Mejorar con una opción | Gran elemental de agua (Salpicadura (A2, PA(1)), Golpe de ola (A4), Miedo(1), Furioso, Regeneración, Resistente(18)) | 1135g |
| Mejorar con una opción | Coleccionista de almas (Triturar al disparar) | 15g |
| Mejorar con una opción | Vidente de las profundidades (Ocultación a distancia) | 20g |
| Mejorar con una opción | Navegante divino (Paso de ola mejorado) | 55g |
| Mejorar con una opción | Portador de la luz (Impávido) | 85g |

**Hechizos de Elfos abisales**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Abismo más oscuro | Darkest Abyss | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que obtiene -1 en las tiradas para impactar al atacar una vez (la próxima vez que se aplique el efecto). |
| Tormenta marina | Sea Storm | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3) y Segar. |
| Ola de poder | Power Wave | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Paso de ola / Paso de ola mejorado una vez (la próxima vez que se aplique el efecto). |
| Presión aplastante | Crushing Pressure | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Marea alta | High Tide | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Sigilo una vez (la próxima vez que se aplique el efecto). |
| Erosionar alma | Erode Soul | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### Elfos oscuros (Dark Elves)

##### Capitán oscuro (Dark Captain)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Hostigador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alfanje oscuro maestro (A3, PA(2), Lacerar) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Ballesta oscura rápida (24", A3, Lacerar), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Látigos de combate dobles (A4, PA(1), Oleada) | 55g |
| Reemplazar Arma de mano doble | Arcos de mano de repetición dobles (6", A4, Desgarrador, Asalto) | 80g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Alfanje oscuro (A3, PA(1), Lacerar) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Cuchillo arrojadizo | Arco de mano oscuro (12", A1, Asalto, Lacerar) | 5g |
| Reemplazar Cuchillo arrojadizo | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Ballesta oscura rápida | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 35g |
| Reemplazar Ballesta oscura rápida | Ballesta de repetición rápida (12", A4, Desgarrador) | 25g |
| Mejorar con una opción | Frenesí de saqueo (Frenesí perforante) | 25g |
| Mejorar con una opción | Maestro de la matanza (Esquiva, Andarín) | 90g |
| Mejorar con una opción | Caballo oscuro (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Capa de sombra (Explorador, Sigilo) | 165g |
| Mejorar con una opción | Raptor (Rápido, Impacto(3), Resistente(9)) | 420g |
| Mejorar con una opción | Pegaso negro (Rápido, Volador, Impacto pesado(3), Resistente(9)) | 815g |
| Mejorar con una opción | Mantícora (Garras afiladas (A6, Desgarrador), Defensa(1), Miedo(1), Volador, Resistente(18)) | 1115g |
| Mejorar con una opción | Carro caldero (Dotación de brujas (A6, Perdición), Defensa(1), Miedo(1), Carga perforante, Regeneración, Resistente(18)) | 1305g |
| Mejorar con una opción | Dragón negro (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras dentadas (A8, Triturar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2215g |
| Mejorar con una opción | Capitán filibustero (Disparo rápido) | 10g |
| Mejorar con una opción | Tirano oscuro (Carga rápida) | 35g |
| Mejorar con una opción | Experto en abordajes (Hostigador mejorado) | 40g |
| Mejorar con una opción | Asesino sombra (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Maestro de la flota (Emboscada) | 105g |
| Mejorar con | Ataque de abordaje (Golpe en retirada(3)) | 10g |

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Hostigador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alfanje oscuro maestro (A3, PA(2), Lacerar) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Dagas tóxicas dobles (A4, Perdición) | 20g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Ballesta oscura rápida (24", A3, Lacerar), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicera (A2, Amplificador de hechizos) | 55g |
| Reemplazar Arma de mano doble | Arcos de mano de repetición dobles (6", A4, Desgarrador, Asalto) | 80g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Alfanje oscuro (A3, PA(1), Lacerar) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Cuchillo arrojadizo | Arco de mano oscuro (12", A1, Asalto, Lacerar) | 5g |
| Reemplazar Cuchillo arrojadizo | Jabalinas pesadas (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Ballesta oscura rápida | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 35g |
| Reemplazar Ballesta oscura rápida | Ballesta de repetición rápida (12", A4, Desgarrador) | 25g |
| Mejorar con una opción | Maestro brujo (Furioso) | 15g |
| Mejorar con una opción | Frenesí de saqueo (Frenesí perforante) | 25g |
| Mejorar con una opción | Maestro corsario (Sigilo) | 60g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Raptor (Rápido, Impacto(3), Resistente(9)) | 420g |
| Mejorar con una opción | Pegaso negro (Defensa(1), Rápido, Volador, Impacto pesado(3), Resistente(9)) | 970g |
| Mejorar con una opción | Dragón negro (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras dentadas (A8, Triturar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2215g |
| Mejorar con una opción | Capitán filibustero (Disparo rápido) | 10g |
| Mejorar con una opción | Intendente (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Experto en abordajes (Hostigador mejorado) | 40g |
| Mejorar con una opción | Maestro de la flota (Emboscada) | 105g |
| Mejorar con | Ataque de abordaje (Golpe en retirada(3)) | 10g |

##### Dama serpiente (Snake Lady)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Resistente(18), Andarín, Hostigador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Alfanje oscuro maestro (A6, PA(2), Lacerar) | 65g |
| Reemplazar Arma de mano doble | Guja de sangre maestra (A6, PA(1), Desgarrador) | 65g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 95g |
| Reemplazar Arma de mano doble | Bastón de hechicera (A4, Amplificador de hechizos) | 30g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A3, Asalto), Guja de sangre (A6, Desgarrador) | 100g |
| Reemplazar Arma de mano doble | Arco buscador (18", A9, Perdición), Golpe (A2) | 135g |
| Reemplazar Guja de sangre | Alfanje oscuro (A6, PA(1), Lacerar) | -5g (devuelve oro) |
| Reemplazar Guja de sangre | Gran arma (A6, PA(2)) | 10g |
| Reemplazar Cuchillo arrojadizo | Grandes jabalinas (12", A2, PA(2), Asalto) | 20g |
| Reemplazar Cuchillo arrojadizo | Máscara de medusa (Mirada mortal (9", A3, Asalto, Imparable)) | 20g |
| Reemplazar Cuchillo arrojadizo | Máscara de medusa (Mirada petrificante (9", A1, PA(2), Letal(3), Asalto, Preciso)) | 60g |
| Reemplazar Arco buscador | Arpones de caza (9", A3, PA(2), Letal(3), Asalto) | 90g |
| Mejorar con una opción | Capitán filibustero (Disparo rápido) | 15g |
| Mejorar con una opción | Intendente (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Tirano oscuro (Carga rápida) | 70g |
| Mejorar con una opción | Experto en abordajes (Hostigador mejorado) | 80g |

**Hechizos de Elfos oscuros**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Espíritu de la isla oscura | Dark Isle Spirit | 1 | Elige una unidad aliada a 12" o menos, que obtiene Hostigador / Hostigador mejorado una vez (la próxima vez que se aplique el efecto). |
| Proyectil negro | Black Bolt | 1 | Elige una unidad enemiga a 6" o menos, que sufre 1 impacto con PA(2) y Letal(3). |
| Mundo de dolor | World of Pain | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Carga rápida una vez (la próxima vez que se aplique el efecto). |
| Ola de tormenta | Storm Wave | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 2 impactos con Explosión(3). |
| Vientos sanadores | Healing Winds | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Regeneración una vez (la próxima vez que se aplique el efecto). |
| Tormenta de hojas | Blade Storm | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos con Lacerar. |

#### Elfos silvanos (Wood Elves)

##### Campeón de la arboleda (Grove Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Andarín, Resistente(9), Velo salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Dardos arrojadizos (9", A1, Anticobertura, Asalto, Oleada), Arma de mano (A3, Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Bastón de tejedor de hechizos (A2, Amplificador de hechizos) | 50g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Dardo arrojadizo | Descarga del bosque (9", A1, Asalto, Triturar) | Gratis |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 35g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Ciervo rastreador (Impacto(1), Explorador) | 115g |
| Mejorar con una opción | Maestro de la guardia (Emboscada, Sigilo) | 165g |
| Mejorar con una opción | Alas de planeo (Regeneración, Teletransporte) | 170g |
| Mejorar con una opción | Ciervo veloz (Rápido, Impacto(1)) | 175g |
| Mejorar con una opción | Gran ciervo (Rápido, Impacto(3), Resistente(9)) | 655g |
| Mejorar con una opción | Búho gigante (Garras afiladas (A3, Desgarrador), Rápido, Volador, Resistente(9)) | 1050g |
| Mejorar con una opción | Dragón del bosque (Aliento ancestral (9", A1, Explosión(3), Asalto, Triturar), Pisotón (A4, PA(1)), Garras tóxicas (A8, Perdición), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2560g |
| Mejorar con una opción | Cazador salvaje (Tirador impredecible) | 20g |
| Mejorar con una opción | Maestro de danza (Carga perforante) | 15g |
| Mejorar con una opción | Maestro acechador (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Celador del bosque (Evasión cuerpo a cuerpo) | 55g |

##### Líder del claro (Glade Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Andarín, Resistente(9), Velo salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de tejedor de hechizos (A2, Amplificador de hechizos) | 50g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Jabalina | Descarga del bosque (9", A1, Asalto, Triturar) | 5g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Reemplazar Arco rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Ciervo rastreador (Impacto(1), Explorador) | 115g |
| Mejorar con una opción | Maestro explorador (Explorador, Sigilo) | 165g |
| Mejorar con una opción | Ciervo veloz (Rápido, Impacto(1)) | 175g |
| Mejorar con una opción | Gran ciervo (Defensa(1), Rápido, Impacto(3), Resistente(9)) | 815g |
| Mejorar con una opción | Búho gigante (Garras afiladas (A3, Desgarrador), Defensa(1), Rápido, Volador, Resistente(9)) | 1210g |
| Mejorar con una opción | Escarabajo gigante (Cuerno gigante (A3, PA(2), Letal(3), Estocada), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Resistente(36)) | 2275g |
| Mejorar con una opción | Maestro de guerra (Carga perforante) | 15g |
| Mejorar con una opción | Maestro del claro (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Celador del bosque (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Defensor del duramen (Velo salvaje mejorado) | 95g |

##### Anciano eterno (Eternal Elder)

Cal 6+ · Def 6+ · Armas: Garras afiladas (A4) · Reglas: Esquiva, Héroe, Andarín, Resistente(9), Velo salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Garras afiladas | Gran martillo maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Garras afiladas | Hoja-lanza maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Garras afiladas | Gran guadaña maestra (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Garras afiladas | Hojas del rencor maestras (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Garras afiladas | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Garras afiladas | Libélula venenosa (9", A1, Asalto, Perdición), Gran martillo (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Garras afiladas | Arco corto del rencor rápido (18", A3, Desgarrador), Golpe (A1) | 50g |
| Reemplazar Garras afiladas | Bastón de tejedor de hechizos (A2, Amplificador de hechizos) | 50g |
| Reemplazar Gran martillo | Hoja-lanza (A3, Estocada) | 15g |
| Reemplazar Gran martillo | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Gran martillo | Hojas del rencor (A3, Desgarrador) | 25g |
| Reemplazar Gran martillo | Gran guadaña (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Libélula venenosa | Libélula aguijón (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Arco corto del rencor rápido | Gran arco corto de caza rápido (18", A3, PA(1), Aplastar) | -5g (devuelve oro) |
| Mejorar con una opción | Alas (Volador) | 75g |
| Mejorar con una opción | Gran insecto (Cuerno afilado (A3, Triturar), Volador, Resistente(9)) | 545g |
| Mejorar con una opción | Cazador salvaje (Tirador impredecible) | 20g |
| Mejorar con una opción | Maestro de guerra (Carga perforante) | 15g |
| Mejorar con una opción | Maestro acechador (Avance rápido) | 70g |
| Mejorar con una opción | Defensor del duramen (Velo salvaje mejorado) | 95g |

##### Anciano hombre-árbol (Treeman Elder)

Cal 6+ · Def 6+ · Armas: Rama tejedora (9", A4, Imparable), Raíz estranguladora (A1, Perdición) · Reglas: Furioso, Héroe, Andarín, Resistente(9), Velo salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Rama tejedora y Raíz estranguladora | Raíz estranguladora maestra (A3, PA(1), Perdición) | 20g |
| Reemplazar Rama tejedora y Raíz estranguladora | Pincho de rama maestro (A1, PA(4), Letal(3), Antirregeneración) | 35g |
| Reemplazar Rama tejedora y Raíz estranguladora | Garras de rama maestras (A3, PA(2), Oleada) | 45g |
| Reemplazar Rama tejedora y Raíz estranguladora | Maza de rama maestra (A3, PA(4)) | 50g |
| Reemplazar Rama tejedora y Raíz estranguladora | Raíz látigo (12", A1, Asalto), Raíz estranguladora (A3, Perdición) | 20g |
| Reemplazar Rama tejedora y Raíz estranguladora | Bastón de espectro del bosque (A2, Amplificador de hechizos) | 85g |
| Reemplazar Raíz estranguladora | Maza de rama (A3, PA(2)) | 65g |
| Reemplazar Raíz estranguladora | Garras de rama (A3, PA(1), Oleada) | 70g |
| Reemplazar Raíz estranguladora | Pincho de rama (A1, PA(4), Letal(3)) | 80g |
| Mejorar con una opción | Tejedor salvaje (Tirador impredecible) | 10g |
| Mejorar con una opción | Maestro de ramas (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Celador del bosque (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Portador del icono del duramen (Miedo(2)) | 60g |
| Mejorar con una opción | Defensor del duramen (Velo salvaje mejorado) | 95g |

**Hechizos de Elfos silvanos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Golpe del cazador | Hunter's Strike | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Disparo rápido una vez (la próxima vez que se aplique el efecto). |
| Pisotón arbóreo | Tree Stomp | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 1 impacto con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Crecimiento de corteza | Tree-Bark Growth | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Defensa en tierra una vez (la próxima vez que se aplique el efecto). |
| Enredaderas espirituales | Spirit Vines | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos con PA(1) y Aplastar. |
| Armonía natural | Natural Harmony | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Velo salvaje / Velo salvaje mejorado una vez (la próxima vez que se aplique el efecto). |
| Ataque de insectos | Insect Attack | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos. |

### Enanos (Dwarves)

#### Enanos (Dwarves)

##### Campeón enano (Dwarf Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Héroe, Lento, Resistente(9), Robusto

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Martillo rúnico maestro (A3, PA(1), Azote) | 20g |
| Reemplazar Arma de mano doble | Hacha-alabarda maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Picos arrojadizos (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón rúnico (A2, Amplificador de hechizos) | 30g |
| Reemplazar Arma de mano doble | Ballesta rápida (18", A3, Desgarrador), Golpe (A1) | 50g |
| Reemplazar Arma de mano doble | Pistolas de mecha dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Pistolas de fuego dobles (9", A4, Asalto, Perdición) | 70g |
| Reemplazar Arma de mano | Martillo rúnico (A3, Azote) | Gratis |
| Reemplazar Arma de mano | Hacha-alabarda (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Pico arrojadizo | Pistola de fuego (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Pico arrojadizo | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Pico arrojadizo | Explosivos (12", A1, PA(2), Asalto) | 20g |
| Reemplazar Ballesta rápida | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | -10g (devuelve oro) |
| Reemplazar Ballesta rápida | Rifle de mecha rápido (18", A3, PA(1)) | -15g (devuelve oro) |
| Reemplazar Ballesta rápida | Rifle de ráfaga (18", A3, Anticobertura, Oleada) | -10g (devuelve oro) |
| Reemplazar Ballesta rápida | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 15g |
| Mejorar con una opción | Runa de poder (Frenesí preciso) | 15g |
| Mejorar con una opción | Bestia de carbón (Arrasar(1), Veloz) | 80g |
| Mejorar con una opción | Explorador (Explorador) | 105g |
| Mejorar con una opción | Equipo de minería (Infiltración) | 155g |
| Mejorar con una opción | Plataforma de escudos (Dotación con arma de mano (A3, Parada(3)), Resistente(9)) | 345g |
| Mejorar con una opción | Carro de la perdición (Acumulador de hechizos(2), Resistente(9)) | 350g |
| Mejorar con una opción | Piedra mítica (Miedo(2), Resistente(9)) | 355g |
| Mejorar con una opción | Bestia-constructo (Defensa(1), Impacto(3), Veloz, Resistente(9)) | 735g |
| Mejorar con una opción | Artífice (Implacable) | 20g |
| Mejorar con una opción | Forjador de hierro (Robusto mejorado) | 20g |
| Mejorar con una opción | Celador (Desgarrador cuerpo a cuerpo) | 35g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Rastreador (Veloz) | 70g |

##### Señor berserker (Berserker Lord)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Furioso, Héroe, Asesino cuerpo a cuerpo, Lento, Resistente(9), Robusto

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Gran martillo berserker maestro (A1, PA(3), Letal(3), Preciso) | 45g |
| Reemplazar Arma de mano doble | Picos arrojadizos (12", A1, Asalto), Gran martillo berserker (A1, PA(2), Letal(3), Preciso) | 55g |
| Reemplazar Arma de mano doble | Explosivos (12", A1, PA(2), Asalto), Gran martillo berserker (A1, PA(2), Letal(3), Preciso) | 80g |
| Reemplazar Arma de mano doble | Bastón rúnico (A2, Amplificador de hechizos) | 55g |
| Mejorar con cualquiera | Runa de poder (Frenesí preciso) | 15g |
| Mejorar con cualquiera | Bestia de carbón (Arrasar(1), Veloz) | 80g |
| Mejorar con una opción | Forjador de hierro (Robusto mejorado) | 20g |
| Mejorar con una opción | Rastreador (Veloz) | 70g |
| Mejorar con una opción | Celador (Desgarrador cuerpo a cuerpo) | 70g |
| Mejorar con una opción | Buscador de minas (Resistencia a hechizos) | 125g |

##### Campeón con traje de vapor (Steam-Suit Champion)

Cal 6+ · Def 6+ · Armas: Puños de traje de vapor (A8) · Reglas: Héroe, Lento, Resistente(18), Impávido, Robusto

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Puño de traje de vapor | Arma de mano maestra (A6, PA(1), Parada(3)) | 25g |
| Reemplazar Puño de traje de vapor | Arma de vapor (12", A2, Explosión(3), Asalto), Arma de mano (A2) | 40g |
| Reemplazar Puño de traje de vapor | Martillo rúnico (A6, Azote), Escudo pesado (Fortificado) | 165g |
| Reemplazar Puño de traje de vapor | Martillo de hierro (A6, PA(2)), Escudo pesado (Fortificado) | 200g |
| Mejorar con una opción | Artífice (Implacable) | 40g |
| Mejorar con una opción | Forjador de hierro (Robusto mejorado) | 45g |
| Mejorar con una opción | Rastreador (Veloz) | 145g |
| Mejorar con una opción | Buscador de minas (Resistencia a hechizos) | 275g |

**Hechizos de Enanos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Runa del rencor | Rune of Spite | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que mueve -2" al usar acciones de Avanzar y -4" al usar acciones de Correr/Cargar una vez (la próxima vez que se aplique el efecto). |
| Runa de rotura | Rune of Breaking | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Runa de protección | Rune of Protection | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Robusto / Robusto mejorado una vez (la próxima vez que se aplique el efecto). |
| Runa de castigo | Rune of Smiting | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 2 impactos con Explosión(3). |
| Runa de batalla | Rune of Battle | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Carga rápida una vez (la próxima vez que se aplique el efecto). |
| Runa de tajo | Rune of Cleaving | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Azote. |

#### Enanos de la ciudad celeste (Sky-City Dwarves)

##### Capitán celeste (Sky-Captain)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Bucanero

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Martillo celeste maestro (A1, PA(2), Explosión(3)) | 5g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Espada de cadenas maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Pica celeste maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Tridente celeste maestro (A1, PA(3), Letal(3), Estocada) | 45g |
| Reemplazar Arma de mano doble | Pistola celeste (12", A1, Asalto), Arma de mano (A3) | 15g |
| Reemplazar Arma de mano doble | Arma química (12", A1, Explosión(3), Perdición, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Bastón maestro del éter (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Pistolas celestes dobles (12", A4, Asalto) | 55g |
| Reemplazar Arma de mano doble | Pistolas remachadoras dobles (9", A4, Desgarrador, Asalto) | 110g |
| Reemplazar Arma de mano | Martillo celeste (A1, PA(1), Explosión(3)) | 5g |
| Reemplazar Arma de mano | Pica celeste (A3, PA(2)) | 30g |
| Reemplazar Arma de mano | Espada de cadenas (A3, Desgarrador) | 30g |
| Reemplazar Arma de mano | Tridente celeste (A1, PA(2), Letal(3), Estocada) | 45g |
| Reemplazar Pistola celeste | Pistola remachadora (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma química | Rifle celeste rápido (24", A3) | 5g |
| Reemplazar Arma química | Pistola de llamas (6", A1, Explosión(3), Asalto, Preciso) | Gratis |
| Reemplazar Arma química | Trabuco celeste rápido (12", A4, PA(1)) | 30g |
| Mejorar con una opción | Almirante (Bucanero mejorado) | 5g |
| Mejorar con una opción | Navegante (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Maestro químico (Desgarrador al disparar) | 40g |
| Mejorar con una opción | Maestro de máquinas (Reparar) | 100g |
| Mejorar con una opción | Vidente celeste (Resistencia a hechizos) | 125g |
| Mejorar con | Armas afinadas (Alcance versátil) | 15g |

##### Maestro de globos (Balloon Master)

Cal 6+ · Def 6+ · Armas: Arnés de abordaje (12", A3, Asalto), Martillo celeste maestro (A1, PA(2), Explosión(3)) · Reglas: Volador, Héroe, Resistente(18), Explorador, Bucanero

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arnés de abordaje y Martillo celeste maestro | Arnés de artillero (24", A3), Arma química (12", A1, Explosión(3), Perdición, Preciso), Golpe (A2) | 15g |
| Reemplazar Martillo celeste maestro | Espada celeste maestra (A3, PA(1)) | Gratis |
| Reemplazar Martillo celeste maestro | Espada de cadenas maestra (A3, PA(1), Desgarrador) | 25g |
| Reemplazar Martillo celeste maestro | Pica celeste maestra (A3, PA(4)) | 40g |
| Reemplazar Martillo celeste maestro | Tridente celeste maestro (A1, PA(3), Letal(3), Estocada) | 45g |
| Reemplazar Martillo celeste maestro | Armas de mano dobles (A6) | 20g |
| Reemplazar Martillo celeste maestro | Pistola de llamas (6", A1, Explosión(3), Asalto, Preciso), Espada celeste (A3) | 40g |
| Reemplazar Martillo celeste maestro | Pistolas celestes dobles (12", A6, Asalto) | 105g |
| Reemplazar Martillo celeste maestro | Pistolas remachadoras dobles (9", A6, Desgarrador, Asalto) | 180g |
| Reemplazar Espada celeste | Martillo celeste (A1, PA(1), Explosión(3)) | 5g |
| Reemplazar Espada celeste | Pica celeste (A3, PA(2)) | 30g |
| Reemplazar Espada celeste | Espada de cadenas (A3, Desgarrador) | 30g |
| Reemplazar Espada celeste | Tridente celeste (A1, PA(2), Letal(3), Estocada) | 45g |
| Reemplazar Pistola de llamas | Pistola celeste rápida (12", A3, Asalto) | 20g |
| Reemplazar Pistola de llamas | Pistola remachadora rápida (9", A3, Desgarrador, Asalto) | 60g |
| Reemplazar Arma química | Rifle celeste rápido (24", A3) | 5g |
| Reemplazar Arma química | Trabuco celeste rápido (12", A4, PA(1)) | 30g |
| Reemplazar Arnés de artillero | Arnés del éter (24", A3, Anticobertura, Destructivo) | 30g |
| Reemplazar Arnés de artillero | Arnés cañón (18", A1, PA(2), Letal(3)) | 30g |
| Mejorar con una opción | Almirante (Bucanero mejorado) | 5g |
| Mejorar con una opción | Ejecutor del código (Triturar cuerpo a cuerpo) | 30g |
| Mejorar con una opción | Maestro químico (Desgarrador al disparar) | 30g |
| Mejorar con una opción | Maestro de máquinas (Reparar) | 100g |
| Mejorar con una opción | Vidente celeste (Resistencia a hechizos) | 275g |
| Mejorar con | Armas afinadas (Alcance versátil) | 25g |

**Hechizos de Enanos de la ciudad celeste**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Runa de la nube etérea | Aether-Cloud Rune | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que pierde 2 fichas de hechizo. Ten en cuenta que el objetivo no puede gastar esas fichas para evitar este efecto. |
| Choque etéreo | Aether Shock | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 3 impactos con Destructivo. |
| Runa del viento | Wind Rune | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Veloz una vez (la próxima vez que se aplique el efecto). |
| Choque relámpago | Lightning Shock | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Runa de apaño | Tinkering Rune | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Bucanero / Bucanero mejorado una vez (la próxima vez que se aplique el efecto). |
| Choque atronador | Thunder Shock | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Triturar. |

#### Enanos del Caos (Havoc Dwarves)

##### Campeón de hierro (Iron Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Ligado al Caos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 25g |
| Reemplazar Arma de mano doble | Trabuco maléfico rápido (9", A4, Purgar), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Pistolas de mecha dobles (9", A4, PA(1), Asalto) | 85g |
| Reemplazar Arma de mano doble | Pistolas maléficas dobles (9", A4, Asalto, Purgar) | 95g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Pistola maléfica (12", A1, Asalto, Purgar) | 15g |
| Reemplazar Hacha arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Trabuco maléfico rápido | Trabuco rápido (12", A4, PA(1)) | 15g |
| Reemplazar Trabuco maléfico rápido | Rifle de mecha rápido (18", A3, PA(1)) | 15g |
| Reemplazar Trabuco maléfico rápido | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | 30g |
| Reemplazar Trabuco maléfico rápido | Rifle maléfico rápido (24", A3, Purgar) | 35g |
| Reemplazar Trabuco maléfico rápido | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con | Gran bestia alada (Cuernos pesados (A6, Estocada), Defensa(1), Miedo(1), Volador, Veloz, Resistente(18)) | 1030g |
| Mejorar con una opción | Opresor (Alcance de disparo aumentado) | 15g |
| Mejorar con una opción | Señor ceniciento (Ligado al Caos mejorado) | 10g |
| Mejorar con una opción | Forjador del dolor (Asesino cuerpo a cuerpo) | 15g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Capataz (Veloz) | 70g |

##### Líder abisal (Abyssal Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Ligado al Caos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 15g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 25g |
| Reemplazar Arma de mano doble | Trabuco maléfico rápido (9", A4, Purgar), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Bastón de lanzamaleficios (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Pistolas de mecha dobles (9", A4, PA(1), Asalto) | 85g |
| Reemplazar Arma de mano doble | Pistolas maléficas dobles (9", A4, Asalto, Purgar) | 95g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Hacha arrojadiza | Pistola maléfica (12", A1, Asalto, Purgar) | 15g |
| Reemplazar Hacha arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Trabuco maléfico rápido | Trabuco rápido (12", A4, PA(1)) | 15g |
| Reemplazar Trabuco maléfico rápido | Rifle de mecha rápido (18", A3, PA(1)) | 15g |
| Reemplazar Trabuco maléfico rápido | Rifle maléfico rápido (24", A3, Purgar) | 35g |
| Reemplazar Trabuco maléfico rápido | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | 30g |
| Reemplazar Trabuco maléfico rápido | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con | Gran bestia alada (Cuernos pesados (A6, Estocada), Defensa(1), Miedo(1), Volador, Veloz, Resistente(18)) | 1030g |
| Mejorar con una opción | Opresor (Alcance de disparo aumentado) | 15g |
| Mejorar con una opción | Guardián de la llama (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Forjador del dolor (Asesino cuerpo a cuerpo) | 15g |
| Mejorar con una opción | Capataz (Veloz) | 70g |

##### Campeón centauro toro (Bull Centaur Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Miedo(1), Furioso, Ligado al Caos, Héroe, Resistente(18), Explorador

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Guardián de la llama (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Señor ceniciento (Ligado al Caos mejorado) | 25g |
| Mejorar con una opción | Forjador del dolor (Asesino cuerpo a cuerpo) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 105g |
| Reemplazar Arma de mano doble | Alabarda maestra (A6, PA(1), Desgarrador) | 105g |
| Reemplazar Arma de mano doble | Bastón de lanzamaleficios (A4, Amplificador de hechizos) | 45g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A3, Asalto), Gran arma (A6, PA(2)) | 150g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A3, Asalto), Alabarda (A6, Desgarrador) | 180g |
| Reemplazar Hacha arrojadiza | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | 5g |
| Reemplazar Hacha arrojadiza | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 25g |

**Hechizos de Enanos del Caos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Runa de agrietamiento | Rune of Cracking | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Implacable una vez (la próxima vez que se aplique el efecto). |
| Runa de locura | Rune of Insanity | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3). |
| Runa de perforación | Rune of Piercing | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Tirador de élite perforante una vez (la próxima vez que se aplique el efecto). |
| Runa de oscuridad | Rune of Darkness | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 6 impactos con Purgar. |
| Runa de cenizas | Rune of Ashes | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Ligado al Caos / Ligado al Caos mejorado una vez (la próxima vez que se aplique el efecto). |
| Runa del relámpago | Rune of Lightning | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### Enanos volcánicos (Volcanic Dwarves)

##### Campeón de magma (Magma Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Furioso, Héroe, Lento, Resistente(9), Juramentado del draco

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Lanzalava rápida (12", A4, Demoler), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Hachas de lava arrojadizas (12", A1, Asalto, Demoler) | 10g |
| Reemplazar Hacha arrojadiza | Hachas de magma arrojadizas (9", A1, PA(1), Asalto) | 10g |
| Reemplazar Lanzalava rápida | Lanzalava largo rápida (24", A3, Demoler) | 10g |
| Reemplazar Lanzalava rápida | Lanzamagma rápida (12", A4, PA(1)) | Gratis |
| Reemplazar Lanzalava rápida | Lanzamagma largo rápida (18", A3, PA(1)) | 5g |
| Mejorar con | Juramento de ira (Velocidad en tierra) | 35g |
| Mejorar con una opción | Lagarto volcánico (Estallido de llamas (12", A2, PA(1), Explosión(3), Preciso), Garras pesadas (A2, PA(1)), Defensa(1), Miedo(1), Andarín, Veloz, Resistente(18)) | 1280g |
| Mejorar con una opción | Draco de magma (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras afiladas (A8, Desgarrador), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Regeneración, Andarín, Veloz, Resistente(36)) | 3320g |
| Mejorar con una opción | Forjador del castigo (Disparo rápido) | 10g |
| Mejorar con una opción | Señor sombrío (Imparable cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Portador del rencor (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Portador del icono ancestral (Miedo(2)) | 60g |
| Mejorar con una opción | Buscador veterano (Veloz) | 70g |
| Mejorar con una opción | Señor áurico (Protección en tierra) | 70g |

##### Líder volcánico (Volcanic Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Furioso, Héroe, Lento, Resistente(9), Juramentado del draco

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Bombas volcánicas (12", A1, Explosión(3), Asalto), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Hachas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de herrero rúnico (A2, Amplificador de hechizos) | 80g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Hachas de magma arrojadizas (9", A1, PA(1), Asalto) | 10g |
| Reemplazar Hacha arrojadiza | Hachas de lava arrojadizas (12", A1, Asalto, Demoler) | 10g |
| Reemplazar Bomba volcánica | Arpones matagigantes (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Mejorar con | Juramento de ira (Velocidad en tierra) | 35g |
| Mejorar con una opción | Lagarto volcánico (Estallido de llamas (12", A2, PA(1), Explosión(3), Preciso), Garras pesadas (A2, PA(1)), Defensa(1), Miedo(1), Andarín, Veloz, Resistente(18)) | 1280g |
| Mejorar con una opción | Draco de magma (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras afiladas (A8, Desgarrador), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Regeneración, Andarín, Veloz, Resistente(36)) | 3320g |
| Mejorar con una opción | Forjador del castigo (Disparo rápido) | 10g |
| Mejorar con una opción | Monje volcánico (Sigilo) | 60g |
| Mejorar con una opción | Buscador veterano (Veloz) | 70g |
| Mejorar con una opción | Señor áurico (Protección en tierra) | 70g |

**Hechizos de Enanos volcánicos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Calor abrasador | Searing Heat | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que debe hacer un chequeo de moral. Si lo falla, queda Fatigada. |
| Proyectiles de lava | Lava Bolts | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Furia áurica | Auric Fury | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Luchador de golpe y huida una vez (la próxima vez que se aplique el efecto). |
| Cenizas asfixiantes | Suffocating Ashes | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Cambio sísmico | Seismic Shift | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Protección en tierra una vez (la próxima vez que se aplique el efecto). |
| Tormenta de fuego | Fire Storm | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos con Demoler. |

### Forasteros (Outsiders)

#### Acechadores de las sombras (Shadow Stalkers)

##### Campeón segador (Reaper Champion)

Cal 6+ · Def 6+ · Armas: Gran guja segadora maestra (A1, PA(2), Explosión(3)) · Reglas: Asesino cuerpo a cuerpo, Héroe, Resistente(9), Nacido de las sombras

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Gran guja segadora maestra | Gran espada segadora maestra (A1, PA(3), Letal(3), Triturar) | 30g |
| Reemplazar Gran guja segadora maestra | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Gran guja segadora maestra | Gran arma maestra (A3, PA(4)) | 40g |
| Reemplazar Gran guja segadora maestra | Armas de mano dobles (A4) | 5g |
| Reemplazar Gran guja segadora maestra | Lanzas arrojadizas (12", A1, Asalto), Gran guja segadora (A1, PA(1), Explosión(3)) | 15g |
| Reemplazar Gran guja segadora maestra | Incensario de combate (9", A3, Asalto, Perdición), Golpe (A1) | 60g |
| Reemplazar Gran guja segadora | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Gran guja segadora | Gran espada segadora (A1, PA(2), Letal(3), Triturar) | 30g |
| Reemplazar Gran guja segadora | Alabarda (A3, Desgarrador) | 30g |
| Reemplazar Lanza arrojadiza | Honda de acechador (12", A1, Asalto, Destructivo) | 10g |
| Reemplazar Incensario de combate | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 5g |
| Mejorar con una opción | Gran desollador (Esquiva, Rápido, Impacto(6), Resistente(18)) | 975g |
| Mejorar con una opción | Bestia voladora (Aliento tóxico (6", A1, Explosión(3), Asalto, Perdición, Preciso), Pisotón (A4, PA(1)), Garras tóxicas (A8, Perdición), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2465g |
| Mejorar con una opción | Acechador de sueños (Estocada cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Sombra nocturna (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Caminante del laberinto (Andarín) | 50g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Maestro de las sombras (Nacido de las sombras mejorado) | 95g |

##### Campeón del azote (Scourge Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Nacido de las sombras, Resistente(9)

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Lanzas arrojadizas (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Incensario de combate (9", A3, Asalto, Perdición), Golpe (A1) | 55g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Lanza arrojadiza | Honda de acechador (12", A1, Asalto, Destructivo) | 10g |
| Reemplazar Incensario de combate | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 10g |
| Mejorar con | Gran sabueso (Garras dentadas (A3, Triturar), Andarín, Resistente(9)) | 430g |
| Mejorar con una opción | Acechador de sueños (Estocada cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Sombra nocturna (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Caminante del laberinto (Andarín) | 50g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Maestro de las sombras (Nacido de las sombras mejorado) | 95g |

##### Campeón fantasma (Phantom Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Etéreo, Héroe, Resistente(9), Nacido de las sombras, Resistencia a hechizos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Lanzas arrojadizas (12", A1, Asalto), Alabarda (A3, Desgarrador) | 40g |
| Reemplazar Arma de mano doble | Incensario de combate (9", A3, Asalto, Perdición), Golpe (A1) | 55g |
| Reemplazar Alabarda | Gran arma (A3, PA(2)) | 5g |
| Reemplazar Lanza arrojadiza | Honda de acechador (12", A1, Asalto, Destructivo) | 10g |
| Reemplazar Incensario de combate | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 10g |
| Mejorar con una opción | Horror umbrío (Alcance de disparo aumentado) | 15g |
| Mejorar con una opción | Acechador de sueños (Estocada cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Sombra nocturna (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Caminante del laberinto (Andarín) | 50g |

##### Campeón espectro (Spectre Champion)

Cal 6+ · Def 6+ · Armas: Varita de acechador maestra (12", A4, Destructivo), Golpe (A1) · Reglas: Etéreo, Héroe, Resistente(9), Nacido de las sombras, Resistencia a hechizos

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Varita de acechador maestra y Golpe | Bastón maléfico de banshee (A2, Amplificador de hechizos) | 25g |
| Reemplazar Varita de acechador maestra | Varita sombría maestra (9", A4, Desgarrador) | Gratis |
| Reemplazar Varita de acechador maestra | Bastón de acechador maestro (24", A3, Destructivo) | 10g |
| Reemplazar Varita de acechador maestra | Bastón sombrío maestro (18", A3, Desgarrador) | 20g |
| Reemplazar Varita de acechador maestra | Varita umbría (12", A1, PA(1), Explosión(3), Preciso) | -10g (devuelve oro) |
| Reemplazar Varita de acechador maestra | Varita de pesadilla (12", A1, PA(4), Letal(3)) | 15g |
| Reemplazar Varita de acechador maestra | Bastón umbrío (18", A1, PA(1), Explosión(3), Preciso) | 10g |
| Mejorar con una opción | Acechador de sueños (Estocada cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Sombra nocturna (Contraataque cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Horror umbrío (Alcance de disparo aumentado) | 25g |
| Mejorar con una opción | Caminante del laberinto (Andarín) | 50g |

##### Campeón carnicero (Butcher Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Miedo(1), Héroe, Arrasar(6), Nacido de las sombras, Resistente(18)

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Gran martillo de carnicero maestro (A2, PA(2), Explosión(3), Impreciso, Estocada) | 15g |
| Reemplazar Arma de mano doble | Lanzas arrojadizas (12", A3, Asalto), Gran martillo de carnicero (A2, Explosión(3), Estocada) | 55g |
| Reemplazar Arma de mano doble | Gran hoja de carnicero maestra (A6, PA(1), Desgarrador) | 65g |
| Reemplazar Arma de mano doble | Gran hacha de carnicero maestra (A2, PA(4), Letal(3), Antirregeneración) | 70g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 95g |
| Reemplazar Gran martillo de carnicero | Gran hoja de carnicero (A6, Desgarrador) | 50g |
| Reemplazar Gran martillo de carnicero | Gran arma (A6, PA(2)) | 55g |
| Reemplazar Gran martillo de carnicero | Gran hacha de carnicero (A2, PA(4), Letal(3)) | 75g |
| Reemplazar Lanza arrojadiza | Incensario de combate (9", A3, Asalto, Perdición) | 20g |
| Reemplazar Lanza arrojadiza | Honda de acechador (12", A3, Asalto, Destructivo) | 25g |
| Reemplazar Lanza arrojadiza | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 30g |
| Mejorar con una opción | Sombra nocturna (Contraataque cuerpo a cuerpo) | 45g |
| Mejorar con una opción | Acechador de sueños (Estocada cuerpo a cuerpo) | 45g |
| Mejorar con una opción | Caminante del laberinto (Andarín) | 105g |
| Mejorar con una opción | Maestro de las sombras (Nacido de las sombras mejorado) | 190g |

**Hechizos de Acechadores de las sombras**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Acosador de sueños | Dream Haunter | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Luchador impredecible una vez (la próxima vez que se aplique el efecto). |
| Luz espectral | Spectral Light | 1 | Elige una unidad enemiga a 6" o menos, que sufre 1 impacto con PA(2) y Letal(3). |
| Posesión de combate | Combat Possession | 2 | Elige hasta dos unidades aliadas a 12" o menos, que mueven +2" al usar acciones de Avanzar y +4" al usar acciones de Correr/Cargar una vez (la próxima vez que se aplique el efecto). |
| Enredaderas laberínticas | Maze Vines | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos con Destructivo. |
| Destello laberíntico | Labyrinthian Sparkle | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Nacido de las sombras / Nacido de las sombras mejorado una vez (la próxima vez que se aplique el efecto). |
| Escalofrío de muerte | Chill of Death | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Celadores eternos (Eternal Wardens)

##### Élite guardiana (Guardian Elite)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Impávido, Héroe, Resistente(9), Celador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco meteoro (18", A1, Explosión(3), Triturar), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Jabalina | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arco meteoro | Arco rápido (24", A3) | Gratis |
| Reemplazar Arco meteoro | Arco largo rápido (30", A3, Indirecto) | 40g |
| Reemplazar Arco meteoro | Tridentes de tormenta (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con | Sabueso bestia compañero (Repeler emboscadas) | 15g |
| Mejorar con una opción | Coleccionista de almas (Perdición al disparar) | 25g |
| Mejorar con una opción | Celador de reliquias (Celador mejorado) | 50g |
| Mejorar con una opción | Cantor de plegarias (Sigilo) | 60g |
| Mejorar con una opción | Portador de la reliquia (Redespliegue) | 105g |

##### Señor eterno (Eternal Lord)

Cal 6+ · Def 6+ · Armas: Ballesta del trueno (24", A2, PA(1), Aplastar), Golpe (A2) · Reglas: Impávido, Héroe, Resistente(18), Celador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Ballesta del trueno y Golpe | Martillo meteoro maestro (A2, PA(2), Explosión(3), Triturar, Engorroso) | 25g |
| Reemplazar Ballesta del trueno y Golpe | Gran maza estelar maestra (A2, PA(3), Letal(3), Imparable) | 65g |
| Reemplazar Ballesta del trueno y Golpe | Hacha-alabarda maestra (A6, PA(1), Imparable) | 55g |
| Reemplazar Ballesta del trueno y Golpe | Lanza de caballería maestra (A6, PA(1), Estocada) | 65g |
| Reemplazar Ballesta del trueno y Golpe | Hacha de celador maestra (A6, PA(1), Desgarrador) | 75g |
| Reemplazar Ballesta del trueno y Golpe | Gran arma maestra (A6, PA(4)) | 105g |
| Reemplazar Ballesta del trueno y Golpe | Guja de celador maestra (A6, PA(2), Oleada) | 110g |
| Reemplazar Ballesta del trueno y Golpe | Armas de mano dobles (A8) | 10g |
| Reemplazar Ballesta del trueno y Golpe | Arco de mano del trueno (12", A1, PA(1), Asalto, Aplastar), Hacha-alabarda (A6, Imparable) | 60g |
| Reemplazar Ballesta del trueno y Golpe | Hachas de celador dobles (A8, Desgarrador) | 85g |
| Reemplazar Hacha-alabarda | Martillo meteoro (A2, Explosión(3), Triturar) | -20g (devuelve oro) |
| Reemplazar Hacha-alabarda | Lanza de caballería (A6, Estocada) | Gratis |
| Reemplazar Hacha-alabarda | Gran maza estelar (A2, PA(2), Letal(3), Imparable) | 20g |
| Reemplazar Hacha-alabarda | Gran arma (A6, PA(2)) | 30g |
| Reemplazar Hacha-alabarda | Hacha de celador (A6, Desgarrador) | 25g |
| Reemplazar Hacha-alabarda | Guja de celador (A6, PA(1), Oleada) | 45g |
| Reemplazar Arco de mano del trueno | Jabalinas (12", A3, Asalto) | 30g |
| Reemplazar Arco de mano del trueno | Tridentes de tormenta (9", A1, PA(2), Letal(3), Asalto) | 60g |
| Reemplazar Arco de mano del trueno | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 70g |
| Reemplazar Ballesta del trueno | Ballesta de andanada (12", A8, Desgarrador) | 110g |
| Reemplazar Ballesta del trueno | Ballesta rápida (18", A6, Desgarrador) | 110g |
| Mejorar con una opción | Sabueso bestia compañero (Repeler emboscadas) | 15g |
| Mejorar con una opción | Armadura de destructor (Defensa(1), Infiltración, Lento) | 440g |
| Mejorar con una opción | Draco (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Rápido, Impacto(3), Resistente(18)) | 1160g |
| Mejorar con una opción | Dragón (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A3, PA(1)), Miedo(1), Volador, Resistente(18)) | 1215g |
| Mejorar con una opción | Gran dragón (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras dentadas (A8, Triturar), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 2485g |
| Mejorar con una opción | Heraldo (Imparable cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Portador de la reliquia (Redespliegue) | 105g |
| Mejorar con una opción | Celador de reliquias (Celador mejorado) | 115g |
| Mejorar con una opción | Cantor de plegarias (Sigilo) | 120g |

##### Caballero celador (Warden Knight)

Cal 6+ · Def 6+ · Armas: Ballesta del trueno (24", A2, PA(1), Aplastar), Golpe (A2) · Reglas: Impávido, Furioso, Héroe, Resistente(18), Celador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Ballesta del trueno y Golpe | Maza eterna maestra (A2, PA(2), Explosión(3)) | 45g |
| Reemplazar Ballesta del trueno y Golpe | Arma de mano maestra (A6, PA(1), Parada(3)) | 75g |
| Reemplazar Ballesta del trueno y Golpe | Lanza de caballería maestra (A6, PA(1), Estocada) | 100g |
| Reemplazar Ballesta del trueno y Golpe | Espada de tormenta maestra (A2, PA(4), Letal(3), Antirregeneración) | 125g |
| Reemplazar Ballesta del trueno y Golpe | Hacha celestial maestra (A6, PA(1), Desgarrador) | 145g |
| Reemplazar Ballesta del trueno y Golpe | Gran arma maestra (A6, PA(4)) | 160g |
| Reemplazar Ballesta del trueno y Golpe | Armas de mano dobles (A8) | 35g |
| Reemplazar Ballesta del trueno y Golpe | Arco de mano del trueno (12", A1, PA(1), Asalto, Aplastar), Maza eterna (A2, PA(1), Explosión(3)) | 60g |
| Reemplazar Ballesta del trueno y Golpe | Bastón de exorcista (A4, Amplificador de hechizos) | 95g |
| Reemplazar Maza eterna | Arma de mano (A6, Parada(3)) | 15g |
| Reemplazar Maza eterna | Lanza de caballería (A6, Estocada) | 30g |
| Reemplazar Maza eterna | Gran arma (A6, PA(2)) | 75g |
| Reemplazar Maza eterna | Espada de tormenta (A2, PA(4), Letal(3)) | 100g |
| Reemplazar Maza eterna | Hacha celestial (A6, Desgarrador) | 95g |
| Reemplazar Arco de mano del trueno | Jabalinas (12", A3, Asalto) | 35g |
| Reemplazar Arco de mano del trueno | Varita de mago (9", A3, Asalto, Perdición) | 60g |
| Reemplazar Arco de mano del trueno | Tridentes de tormenta (9", A1, PA(2), Letal(3), Asalto) | 70g |
| Reemplazar Arco de mano del trueno | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 100g |
| Reemplazar Ballesta del trueno | Arco rápido (24", A6) | 45g |
| Reemplazar Ballesta del trueno | Gran bastón (12", A2, Explosión(3), Perdición, Preciso) | 40g |
| Reemplazar Ballesta del trueno | Ballesta de andanada (12", A8, Desgarrador) | 110g |
| Reemplazar Ballesta del trueno | Ballesta rápida (18", A6, Desgarrador) | 110g |
| Mejorar con | Paladín (Luchador impredecible) | 10g |
| Mejorar con una opción | Sabueso bestia compañero (Repeler emboscadas) | 15g |
| Mejorar con una opción | Alas (Volador) | 155g |
| Mejorar con una opción | León-draco (Saltarín, Andarín) | 265g |
| Mejorar con una opción | Gran grifo (Rápido, Impacto(1), Vanguardia) | 295g |
| Mejorar con una opción | Alas celestiales (Emboscada, Volador) | 360g |
| Mejorar con una opción | Pegaso astado (Rápido, Volador, Impacto pesado(3), Resistente(9)) | 1235g |
| Mejorar con una opción | Heraldo (Imparable cuerpo a cuerpo) | 10g |
| Mejorar con una opción | Coleccionista de almas (Perdición al disparar) | 20g |
| Mejorar con una opción | Portador de la reliquia (Redespliegue) | 105g |
| Mejorar con una opción | Cantor de plegarias (Sigilo) | 120g |

**Hechizos de Celadores eternos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Nube protectora | Warding Cloud | 1 | Elige una unidad aliada a 12" o menos, que obtiene Celador / Celador mejorado una vez (la próxima vez que se aplique el efecto). |
| Trueno | Thunder Clap | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1) y Aplastar. |
| Ataque de choque | Shock Attack | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Imparable en sus armas al disparar una vez (la próxima vez que se aplique el efecto). |
| Tormenta pesada | Heavy Storm | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Golpe estelar | Star Strike | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Luchador impredecible una vez (la próxima vez que se aplique el efecto). |
| Rayo | Lightning Bolt | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Triturar. |

#### Imperio del Dragón (Dragon Empire)

##### Capitán dracónido (Dragonkin Captain)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Guerrero real

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 45g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 45g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Estrellas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de hueste espiritual (A2, Amplificador de hechizos) | 85g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 20g |
| Reemplazar Estrella arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 10g |
| Reemplazar Estrella arrojadiza | Descarga de dragón (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Trabuco rápido (12", A4, PA(1)) | 20g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Pistola de cohetes de ráfaga (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Reemplazar Arco rápido | Ballesta de repetición rápida (12", A4, Desgarrador) | 45g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 50g |
| Mejorar con una opción | Lagarto mítico mascota (Repeler emboscadas) | 15g |
| Mejorar con una opción | Escudo pavés (Escudado) | 80g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Artífice (Tirador impredecible) | 20g |
| Mejorar con una opción | Guardián de sangre (Guerrero real mejorado) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Ceramista (Escudado) | 80g |
| Mejorar con una opción | Guardián del bastión (Redespliegue) | 105g |

##### Señor dracónido (Dragonkin Lord)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Guerrero real, Impávido

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Artífice (Tirador impredecible) | 20g |
| Mejorar con una opción | Maestro de guerra (Asesino cuerpo a cuerpo) | 15g |
| Mejorar con una opción | Guardián de sangre (Guerrero real mejorado) | 20g |
| Mejorar con una opción | Guardián del bastión (Redespliegue) | 105g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 30g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 45g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 45g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Descarga de dragón (6", A1, Anticobertura, Asalto, Preciso), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de hueste espiritual (A2, Amplificador de hechizos) | 85g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 20g |
| Reemplazar Descarga de dragón | Estrellas arrojadizas (12", A1, Asalto) | Gratis |
| Reemplazar Descarga de dragón | Pistola de mecha (9", A1, PA(1), Asalto) | 10g |
| Reemplazar Arco rápido | Trabuco rápido (12", A4, PA(1)) | 20g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Pistola de cohetes de ráfaga (9", A1, PA(2), Letal(3), Asalto) | 55g |
| Reemplazar Arco rápido | Ballesta de repetición rápida (12", A4, Desgarrador) | 45g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 50g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Corcel mítico (Rápido, Volador, Impacto(3), Resistente(9)) | 835g |
| Mejorar con una opción | Gran tigre (Garras pesadas (A6, PA(1)), Miedo(1), Andarín, Resistente(18)) | 905g |
| Mejorar con una opción | Dragón real (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3455g |

**Hechizos de Imperio del Dragón**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Viento espiritual | Spirit Wind | 1 | Elige una unidad aliada a 12" o menos, que obtiene Carrera rápida una vez (la próxima vez que se aplique el efecto). |
| Luz estelar abrasadora | Blazing Starlight | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con Demoler. Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Guía ancestral | Ancestral Guidance | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Indirecto en sus armas una vez (la próxima vez que se aplique el efecto). |
| Tormenta astral | Astral Storm | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Garras de jade | Jade Claws | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Guerrero real / Guerrero real mejorado una vez (la próxima vez que se aplique el efecto). |
| Fuego de dragón | Dragon Fire | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Medianos (Halflings)

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Afortunado, Lento, Resistente(9)

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Rifle de francotirador (30", A1, PA(1), Preciso), Golpe (A1) | 5g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Pociones tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Rifle de francotirador | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso) | 15g |
| Reemplazar Rifle de francotirador | Arco corto rápido (18", A4) | 30g |
| Reemplazar Rifle de francotirador | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | 45g |
| Reemplazar Rifle de francotirador | Rifle de mecha rápido (18", A3, PA(1)) | 40g |
| Reemplazar Rifle de francotirador | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 80g |
| Reemplazar Rifle de francotirador | Ballesta rápida (18", A3, Desgarrador) | 75g |
| Mejorar con una opción | Cerdo (Impacto(1), Veloz) | 85g |
| Mejorar con una opción | Mochila propulsora (Volador, Veloz) | 105g |
| Mejorar con una opción | Perro (Impacto(1), Andarín, Veloz) | 110g |
| Mejorar con una opción | Cabra (Furioso, Impacto(1), Veloz) | 100g |
| Mejorar con una opción | Gallina (Rápido, Impacto(1), Veloz) | 160g |
| Mejorar con una opción | Carro de cerdos (Garras pesadas (A2, PA(1)), Defensa(1), Impacto(4), Veloz, Resistente(18)) | 880g |
| Mejorar con una opción | Sabueso alado (Mordiscos pesados (A6, PA(1)), Defensa(1), Volador, Veloz, Resistente(18)) | 1000g |
| Mejorar con una opción | Cocatriz (Pico afilado (A1, PA(4), Letal(3)), Garras afiladas (A3, Desgarrador), Pisotón (A3, PA(1)), Defensa(1), Miedo(1), Volador, Veloz, Resistente(27)) | 1550g |
| Mejorar con una opción | Portador del trébol (Afortunado mejorado) | 10g |
| Mejorar con una opción | Jefe del pueblo (Luchador preciso) | 15g |
| Mejorar con una opción | Armero (Desgarrador al disparar) | 40g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Maestro del festín (Regeneración) | 125g |

##### Líder (Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Afortunado

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 70g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Pociones tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Arco corto rápido | Rifle de francotirador (30", A1, PA(1), Preciso) | -30g (devuelve oro) |
| Reemplazar Arco corto rápido | Bombas de llamas (6", A1, Explosión(3), Asalto, Preciso) | -15g (devuelve oro) |
| Reemplazar Arco corto rápido | Bombas de metralla (12", A1, Explosión(3), Indirecto, Asalto) | 15g |
| Reemplazar Arco corto rápido | Rifle de mecha rápido (18", A3, PA(1)) | 10g |
| Reemplazar Arco corto rápido | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Reemplazar Arco corto rápido | Ballesta rápida (18", A3, Desgarrador) | 45g |
| Mejorar con una opción | Maestro ladrón (Sigilo, Andarín) | 85g |
| Mejorar con una opción | Perro (Impacto(1), Andarín, Veloz) | 110g |
| Mejorar con una opción | Cabra (Furioso, Impacto(1), Veloz) | 100g |
| Mejorar con una opción | Valiente (Impávido, Furioso, Asesino cuerpo a cuerpo) | 115g |
| Mejorar con una opción | Cerdo (Defensa(1), Impacto(1), Veloz) | 170g |
| Mejorar con una opción | Gallina (Rápido, Impacto(1), Veloz) | 160g |
| Mejorar con una opción | Místico (Teletransporte) | 20g |
| Mejorar con una opción | Portador del trébol (Afortunado mejorado) | 10g |
| Mejorar con una opción | Armero (Desgarrador al disparar) | 40g |
| Mejorar con una opción | Carnicero (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Maestro del festín (Regeneración) | 125g |

**Hechizos de Medianos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Sombra gigante | Giant Shadow | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que obtiene -1 en las tiradas de chequeo de moral una vez (la próxima vez que se aplique el efecto). |
| Espíritu purificador | Cleansing Spirit | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3) y Diezmar. |
| Coraje menudo | Shortling Courage | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Impávido una vez (la próxima vez que se aplique el efecto). |
| Espíritu del bosque oscuro | Dark Forest Spirit | 2 | Elige una unidad enemiga a 6" o menos, que sufre 2 impactos con PA(2) y Letal(3). |
| Suerte de los ancestros | Luck of the Ancients | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Afortunado / Afortunado mejorado una vez (la próxima vez que se aplique el efecto). |
| Espíritu de pesadilla | Nightmare Spirit | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Ogros (Ogres)

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Resistente(18), Destructor

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A6, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de cazador maestra (A6, PA(1), Perdición) | 45g |
| Reemplazar Arma de mano doble | Lanza de trampero maestra (A6, PA(1), Contraataque, Afianzado(1)) | 60g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A6, PA(1), Estocada) | 55g |
| Reemplazar Arma de mano doble | Alabarda maestra (A6, PA(1), Desgarrador) | 65g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 85g |
| Reemplazar Arma de mano doble | Bastón de chamán ogro (A4, Amplificador de hechizos) | 10g |
| Reemplazar Arma de mano doble | Cañón de postas (18", A6, PA(1)), Golpe (A2) | 70g |
| Reemplazar Arma de mano doble | Jabalinas envenenadas (9", A3, Asalto, Perdición), Lanza de cazador (A6, Perdición) | 120g |
| Reemplazar Arma de mano doble | Pistolas grandes dobles (9", A9, PA(1), Asalto) | 215g |
| Reemplazar Lanza de cazador | Lanza de trampero (A6, Contraataque, Afianzado(1)) | Gratis |
| Reemplazar Lanza de cazador | Arma de mano (A6, Parada(6)) | -5g (devuelve oro) |
| Reemplazar Lanza de cazador | Lanza de caballería (A6, Estocada) | 5g |
| Reemplazar Lanza de cazador | Gran arma (A6, PA(2)) | 30g |
| Reemplazar Lanza de cazador | Alabarda (A6, Desgarrador) | 30g |
| Reemplazar Jabalina envenenada | Pistola grande (9", A3, PA(1), Asalto) | Gratis |
| Reemplazar Jabalina envenenada | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 5g |
| Reemplazar Cañón de postas | Cañón lanzametralla (18", A2, PA(1), Explosión(3), Indirecto) | 10g |
| Reemplazar Cañón de postas | Cañón escopeta (12", A8, PA(1)) | 5g |
| Reemplazar Cañón de postas | Ballesta rápida (18", A6, Desgarrador) | 35g |
| Reemplazar Cañón de postas | Cañón lanzabombas (18", A2, PA(3), Letal(3), Indirecto) | 100g |
| Mejorar con una opción | Cazador (Emboscada, Asesino cuerpo a cuerpo, Andarín) | 340g |
| Mejorar con una opción | Bestia colmilluda (Garras pesadas (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(9)) | 820g |
| Mejorar con una opción | Mamut de hielo (Colmillos pesados (A3, PA(1), Explosión(3)), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Evasión cuerpo a cuerpo, Resistente(36)) | 2330g |
| Mejorar con una opción | Bisonte gigante (Cuernos ásperos (A9, Fragmentar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Fortificado, Resistente(36)) | 2830g |
| Reemplazar Colmillo pesado | Descarga de escarcha (24", A2, PA(1), Explosión(6)) | 80g |
| Reemplazar Colmillo pesado | Colmillos afilados (A3, PA(4), Letal(3)) | 115g |
| Reemplazar Colmillo pesado | Descarga de carámbanos (18", A2, PA(3), Letal(6)) | 165g |
| Reemplazar Cuerno áspero | Grandes cuernos (A9, PA(2)) | 45g |
| Reemplazar Cuerno áspero | Cuernos quebrantadores (A9, PA(1), Oleada) | 80g |
| Mejorar con una opción | Gran devorador (Destructor mejorado) | 15g |
| Mejorar con una opción | Maestro de caza (Imparable al disparar) | 25g |
| Mejorar con una opción | Instigador (Luchador impredecible) | 40g |
| Mejorar con una opción | Jefe de guerra (Valentía) | 90g |
| Mejorar con | Tragafuegos (Escupir llamas (6", A1, Explosión(3), Limitado, Asalto, Preciso)) | 40g |

##### Maestro de la tribu (Tribe Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Destructor, Héroe, Arrasar(6), Resistente(18)

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A6, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A6, PA(1), Estocada) | 55g |
| Reemplazar Arma de mano doble | Alabarda maestra (A6, PA(1), Desgarrador) | 65g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 85g |
| Reemplazar Arma de mano doble | Cañón de postas (18", A6, PA(1)), Golpe (A2) | 70g |
| Reemplazar Arma de mano doble | Pistola grande (9", A3, PA(1), Asalto), Arma de mano (A6, Parada(6)) | 110g |
| Reemplazar Arma de mano doble | Pistolas grandes dobles (9", A9, PA(1), Asalto) | 215g |
| Reemplazar Arma de mano | Lanza de caballería (A6, Estocada) | 10g |
| Reemplazar Arma de mano | Gran arma (A6, PA(2)) | 35g |
| Reemplazar Arma de mano | Alabarda (A6, Desgarrador) | 30g |
| Reemplazar Pistola grande | Bombas de impacto (9", A1, PA(2), Letal(3), Asalto) | 5g |
| Reemplazar Cañón de postas | Cañón lanzametralla (18", A2, PA(1), Explosión(3), Indirecto) | 10g |
| Reemplazar Cañón de postas | Cañón escopeta (12", A8, PA(1)) | 5g |
| Reemplazar Cañón de postas | Ballesta rápida (18", A6, Desgarrador) | 35g |
| Reemplazar Cañón de postas | Cañón lanzabombas (18", A2, PA(3), Letal(3), Indirecto) | 100g |
| Mejorar con una opción | Aplastamuros (Rápido, Furioso) | 175g |
| Mejorar con una opción | Andarín de montaña (Sigilo, Andarín) | 225g |
| Mejorar con una opción | Buscador de sangre (Miedo(2), Explorador) | 265g |
| Mejorar con una opción | Burlador de la muerte (Impávido, Regeneración) | 460g |
| Mejorar con una opción | Bestia colmilluda (Garras pesadas (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(9)) | 820g |
| Mejorar con una opción | Mamut de hielo (Colmillos pesados (A3, PA(1), Explosión(3)), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Evasión cuerpo a cuerpo, Resistente(36)) | 2330g |
| Mejorar con una opción | Bisonte gigante (Cuernos ásperos (A9, Fragmentar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Fortificado, Resistente(36)) | 2830g |
| Reemplazar Colmillo pesado | Descarga de escarcha (24", A2, PA(1), Explosión(6)) | 80g |
| Reemplazar Colmillo pesado | Colmillos afilados (A3, PA(4), Letal(3)) | 115g |
| Reemplazar Colmillo pesado | Descarga de carámbanos (18", A2, PA(3), Letal(6)) | 165g |
| Reemplazar Cuerno áspero | Grandes cuernos (A9, PA(2)) | 45g |
| Reemplazar Cuerno áspero | Cuernos quebrantadores (A9, PA(1), Oleada) | 80g |
| Mejorar con una opción | Gran devorador (Destructor mejorado) | 15g |
| Mejorar con una opción | Instigador (Luchador impredecible) | 40g |
| Mejorar con una opción | Verdugo (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Jefe de guerra (Valentía) | 90g |
| Mejorar con una opción | Bendecido (Fortificado) | 90g |
| Mejorar con | Tragafuegos (Escupir llamas (6", A1, Explosión(3), Limitado, Asalto, Preciso)) | 40g |

**Hechizos de Ogros**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Quebrar espíritus | Crack Spirits | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que obtiene Engorroso en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Engullir | Gobble Up | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Agallas de batalla | Battle Guts | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Resistencia a hechizos una vez (la próxima vez que se aplique el efecto). |
| Gran pisoteo | Great Trampling | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Fragmentar. |
| Festín glotón | Gorging Feast | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Destructor / Destructor mejorado una vez (la próxima vez que se aplique el efecto). |
| Fauces de hielo | Ice Maw | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(2). |

### Gremios (Guilds)

#### Alianzas menudas (Shortling Alliances)

##### Líder menudo (Shortling Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Tenaz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de druida (A2, Amplificador de hechizos) | 35g |
| Reemplazar Látigo de combate y Golpe | Armas arrojadizas dobles (12", A4, Asalto) | 25g |
| Reemplazar Látigo de combate y Golpe | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 45g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas encantadas (9", A1, Asalto, Aniquilar) | 10g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -10g (devuelve oro) |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco encantado rápido (18", A3, Aniquilar) | 30g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con una opción | Furia de los menudos (Frenesí preciso) | 15g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Maestro de la forja (Tenaz mejorado) | 20g |
| Mejorar con una opción | Capitán de la Alianza (Furioso) | 15g |
| Mejorar con una opción | Artesano (Sigilo) | 60g |
| Mejorar con una opción | Portador del icono (Miedo(2)) | 60g |
| Mejorar con una opción | Pionero (Veloz) | 70g |

##### Campeón menudo (Shortling Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Tenaz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de druida (A2, Amplificador de hechizos) | 35g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas encantadas (9", A1, Asalto, Aniquilar) | 10g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco encantado rápido (18", A3, Aniquilar) | 30g |
| Mejorar con una opción | Furia de los menudos (Frenesí preciso) | 15g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Contrabandista (Implacable) | 20g |
| Mejorar con una opción | Maestro de la forja (Tenaz mejorado) | 20g |
| Mejorar con una opción | Artesano (Sigilo) | 60g |
| Mejorar con una opción | Pionero (Veloz) | 70g |

**Hechizos de Alianzas menudas**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Guía de la naturaleza | Nature's Guidance | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Indirecto en sus armas una vez (la próxima vez que se aplique el efecto). |
| Descarga de espinas | Thorn Blast | 1 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 2 impactos con Aniquilar. |
| Viento espiritual | Spirit Wind | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Carga rápida una vez (la próxima vez que se aplique el efecto). |
| Chispa de energía | Energy Spark | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Fortificación salvaje | Wild Fortification | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Tenaz / Tenaz mejorado una vez (la próxima vez que se aplique el efecto). |
| Enredaderas perforantes | Piercing Vines | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(2). |

#### Cazatesoros (Treasure Hunters)

##### Líder cazador (Hunter Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Corredor

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma con púas (A3, Triturar) | 25g |
| Reemplazar Arma de mano doble | Bastón de brujo (A2, Amplificador de hechizos) | 35g |
| Reemplazar Látigo de combate y Golpe | Armas arrojadizas dobles (12", A4, Asalto) | 25g |
| Reemplazar Látigo de combate y Golpe | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 45g |
| Reemplazar Arma con púas | Hoz de garra (A3, Fractura, Preciso) | 10g |
| Reemplazar Arma con púas | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Arma con púas | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma con púas | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Arma con púas | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -10g (devuelve oro) |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco de púas rápido (18", A3, Triturar) | 10g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Arnés de vuelo (Volador) | 75g |
| Mejorar con una opción | Arnés de vuelo de saqueador (Emboscada, Volador) | 180g |
| Mejorar con una opción | Gran arnés de vuelo (Garras afiladas (A3, Desgarrador), Volador, Resistente(9)) | 445g |
| Mejorar con una opción | Guardia del tesoro (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Trituragarras (Furioso) | 15g |
| Mejorar con una opción | Cortacielos (Corredor mejorado) | 35g |
| Mejorar con una opción | Raptor alfa (Valentía) | 40g |

##### Campeón cazador (Hunter Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Corredor

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma con púas (A3, Triturar) | 25g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de brujo (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma con púas | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Arma con púas | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma con púas | Hoz de garra (A3, Fractura, Preciso) | 10g |
| Reemplazar Arma con púas | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Arma con púas | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco de púas rápido (18", A3, Triturar) | 10g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Arnés de vuelo (Volador) | 75g |
| Mejorar con una opción | Arnés de vuelo de saqueador (Emboscada, Volador) | 180g |
| Mejorar con una opción | Cazador de trofeos (Implacable) | 20g |
| Mejorar con una opción | Guardia del tesoro (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Cortacielos (Corredor mejorado) | 35g |
| Mejorar con una opción | Raptor alfa (Valentía) | 40g |

**Hechizos de Cazatesoros**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Subidón de adrenalina | Adrenaline Rush | 1 | Elige una unidad aliada a 12" o menos, que obtiene Corredor / Corredor mejorado una vez (la próxima vez que se aplique el efecto). |
| Dardo de cuervo | Raven Dart | 1 | Elige una unidad enemiga a 6" o menos, que sufre 1 impacto con PA(2) y Letal(3). |
| Poción de caza | Hunting Potion | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen +1 en las tiradas para impactar cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Ataque en picado | Swooping Attack | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos con Fractura. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Sombra oscura | Dark Shadow | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Sigilo una vez (la próxima vez que se aplique el efecto). |
| Muerte desde arriba | Death from Above | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Clanes brutos (Brute Clans)

##### Líder bruto (Brute Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Resistente(18), Coraje bruto

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Pistolón bruto (18", A6, Azote), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bombas incendiarias pesadas (6", A1, Explosión(3), Asalto, Preciso), Arma aplastante (A2, PA(1), Explosión(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de chamán bruto (A4, Amplificador de hechizos) | 30g |
| Reemplazar Arma de mano doble | Pistolas brutas rápidas dobles (9", A8, Asalto, Azote) | 145g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A8, PA(1), Asalto) | 150g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A8, Desgarrador, Asalto) | 200g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A2, Explosión(3), Asalto, Preciso), Golpe (A2) | 40g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A8, Desgarrador) | 75g |
| Reemplazar Arma de mano doble | Gran arma pesada (A8, PA(2)) | 85g |
| Reemplazar Arma de mano doble | Lanzaarpones (9", A2, PA(2), Letal(3), Asalto), Golpe (A2) | 125g |
| Reemplazar Arma aplastante | Lanza (A6, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma aplastante | Arma de mano (A6, Parada(6)) | 20g |
| Reemplazar Arma aplastante | Alabarda (A6, Desgarrador) | 50g |
| Reemplazar Arma aplastante | Gran arma (A6, PA(2)) | 55g |
| Reemplazar Arma aplastante | Arma perforante (A2, PA(4), Letal(3)) | 75g |
| Reemplazar Bomba incendiaria pesada | Bombas de metralla pesadas (9", A3, Asalto, Triturar) | 35g |
| Reemplazar Bomba incendiaria pesada | Pistola bruta rápida (9", A3, Asalto, Azote) | 35g |
| Reemplazar Bomba incendiaria pesada | Pistola de mecha rápida (9", A3, PA(1), Asalto) | 35g |
| Reemplazar Bomba incendiaria pesada | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 55g |
| Reemplazar Pistolón bruto | Rifle de francotirador (30", A2, PA(1), Preciso) | -40g (devuelve oro) |
| Reemplazar Pistolón bruto | Trabuco rápido (12", A8, PA(1)) | 15g |
| Reemplazar Pistolón bruto | Rifle de mecha rápido (18", A6, PA(1)) | 15g |
| Reemplazar Pistolón bruto | Ballesta de repetición rápida (12", A8, Desgarrador) | 45g |
| Reemplazar Pistolón bruto | Ballesta rápida (18", A6, Desgarrador) | 45g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Señor de la guerra (Estocada cuerpo a cuerpo) | 45g |
| Mejorar con una opción | Portador del icono (Miedo(2)) | 60g |
| Mejorar con una opción | Armero (Fortificado) | 90g |
| Mejorar con una opción | Jefe (Rápido) | 145g |
| Mejorar con una opción | Anciano del clan (Impávido) | 185g |

##### Campeón bruto (Brute Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Resistente(18), Coraje bruto

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Pistolón bruto (18", A6, Azote), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bastón de chamán bruto (A4, Amplificador de hechizos) | 30g |
| Reemplazar Arma de mano doble | Bombas de metralla pesadas (9", A3, Asalto, Triturar), Arma aplastante (A2, PA(1), Explosión(3)) | 75g |
| Reemplazar Arma de mano doble | Pistolas brutas rápidas dobles (9", A8, Asalto, Azote) | 145g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A8, PA(1), Asalto) | 150g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A8, Desgarrador, Asalto) | 200g |
| Reemplazar Arma aplastante | Lanza (A6, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma aplastante | Arma de mano (A6, Parada(6)) | 20g |
| Reemplazar Arma aplastante | Alabarda (A6, Desgarrador) | 50g |
| Reemplazar Arma aplastante | Gran arma (A6, PA(2)) | 55g |
| Reemplazar Arma aplastante | Arma perforante (A2, PA(4), Letal(3)) | 75g |
| Reemplazar Bomba de metralla pesada | Bombas incendiarias pesadas (6", A1, Explosión(3), Asalto, Preciso) | -35g (devuelve oro) |
| Reemplazar Bomba de metralla pesada | Pistola bruta rápida (9", A3, Asalto, Azote) | Gratis |
| Reemplazar Bomba de metralla pesada | Pistola de mecha rápida (9", A3, PA(1), Asalto) | Gratis |
| Reemplazar Bomba de metralla pesada | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 20g |
| Reemplazar Pistolón bruto | Rifle de mecha rápido (18", A6, PA(1)) | 15g |
| Reemplazar Pistolón bruto | Ballesta rápida (18", A6, Desgarrador) | 45g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Herrero (Tirador impredecible) | 45g |
| Mejorar con una opción | Señor de la guerra (Estocada cuerpo a cuerpo) | 45g |
| Mejorar con una opción | Armero (Fortificado) | 90g |
| Mejorar con una opción | Anciano del clan (Impávido) | 185g |

**Hechizos de Clanes brutos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Niebla mental | Brain Fog | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que obtiene -1 en las tiradas para impactar al atacar una vez (la próxima vez que se aplique el efecto). |
| Embestida espiritual | Spirit Onslaught | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con Azote. |
| Reparación rápida | Rapid Mending | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Regeneración una vez (la próxima vez que se aplique el efecto). |
| Embate de poder | Power Slam | 2 | Elige una unidad enemiga a 6" o menos, que sufre 2 impactos con PA(2) y Letal(3). |
| Espíritu del clan | Clan Spirit | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Impávido una vez (la próxima vez que se aplique el efecto). |
| Maleficio de la Plaga | Plague Hex | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |

#### Fanáticos enloquecidos (Crazed Zealots)

##### Líder fanático (Zealot Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Enloquecido

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma con púas (A3, Triturar) | 30g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 80g |
| Reemplazar Látigo de combate y Golpe | Armas arrojadizas dobles (12", A4, Asalto) | 35g |
| Reemplazar Látigo de combate y Golpe | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 55g |
| Reemplazar Arma con púas | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Arma con púas | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma con púas | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma con púas | Gran arma (A3, PA(2)) | 25g |
| Reemplazar Arma con púas | Atrapahombres (A3, Pinchar) | 25g |
| Reemplazar Arma con púas | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -15g (devuelve oro) |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arco de púas rápido (18", A3, Triturar) | 10g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 55g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Bestia de combate (Rápido, Arrasar(1)) | 80g |
| Mejorar con una opción | Grandes zancos (Pisotón (A3, PA(1)), Andarín, Resistente(9)) | 370g |
| Mejorar con una opción | Agitador (Enloquecido mejorado) | 20g |
| Mejorar con una opción | Instigador (Carga rápida) | 35g |
| Mejorar con una opción | Deshecho (Escudado) | 80g |
| Mejorar con una opción | Ascendido (Sin retirada) | 125g |

##### Campeón fanático (Zealot Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Enloquecido

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma con púas (A3, Triturar) | 30g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 55g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 80g |
| Reemplazar Arma con púas | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Arma con púas | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma con púas | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma con púas | Gran arma (A3, PA(2)) | 25g |
| Reemplazar Arma con púas | Atrapahombres (A3, Pinchar) | 25g |
| Reemplazar Arma con púas | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arco de púas rápido (18", A3, Triturar) | 10g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Bestia de combate (Rápido, Arrasar(1)) | 80g |
| Mejorar con una opción | Cazador de hombres (Alcance de disparo aumentado) | 15g |
| Mejorar con una opción | Agitador (Enloquecido mejorado) | 20g |
| Mejorar con una opción | Instigador (Carga rápida) | 35g |
| Mejorar con una opción | Deshecho (Escudado) | 80g |

**Hechizos de Fanáticos enloquecidos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Espíritu fanático | Zealot Spirit | 1 | Elige una unidad aliada a 12" o menos, que obtiene Aura de luchador de golpe y huida una vez (la próxima vez que se aplique el efecto). |
| Alarido de pesadilla | Nightmare Shriek | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Ola de sed de sangre | Wave of Bloodthirst | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Enloquecido / Enloquecido mejorado una vez (la próxima vez que se aplique el efecto). |
| Golpe agónico | Agonizing Strike | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Pinchar. |
| Buscador de tormento | Torment Seeker | 3 | Elige hasta tres unidades enemigas a 24" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Luchador impredecible una vez (la próxima vez que se aplique el efecto). |
| Descarga desolladora | Flaying Blast | 3 | Elige una unidad enemiga a 12" o menos, que sufre 9 impactos con Perdición. |

#### Federaciones comerciales (Trade Federations)

##### Líder de la Federación (Federation Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Equipo exótico

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Rifle de francotirador (30", A1, PA(1), Preciso), Golpe (A1) | 5g |
| Reemplazar Arma de mano doble | Arco de mano colmillo (9", A1, Asalto, Fragmentar), Arma aplastante (A1, PA(1), Explosión(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de encantador (A2, Amplificador de hechizos) | 55g |
| Reemplazar Arma de mano doble | Arcos de mano colmillo rápidos dobles (9", A4, Asalto, Fragmentar) | 85g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 90g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 115g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Gran arma pesada (A4, PA(2)) | 45g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A4, Desgarrador) | 40g |
| Reemplazar Arma de mano doble | Lanzaarpones (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 75g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 15g |
| Reemplazar Arma aplastante | Arma tóxica (A3, Perdición) | 15g |
| Reemplazar Arma aplastante | Arma arcana (A3, Triturar) | 15g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 25g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 35g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arco de mano colmillo | Arco de mano colmillo (9", A1, Asalto, Fragmentar) | Gratis |
| Reemplazar Arco de mano colmillo | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | -5g (devuelve oro) |
| Reemplazar Arco de mano colmillo | Bombas de metralla (9", A1, Asalto, Triturar) | Gratis |
| Reemplazar Arco de mano colmillo | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Arco de mano colmillo | Pistola de mecha (9", A1, PA(1), Asalto) | Gratis |
| Reemplazar Rifle de francotirador | Ballesta colmillo rápida (18", A3, Fragmentar) | 35g |
| Reemplazar Rifle de francotirador | Trabuco rápido (12", A4, PA(1)) | 35g |
| Reemplazar Rifle de francotirador | Rifle de mecha rápido (18", A3, PA(1)) | 40g |
| Reemplazar Rifle de francotirador | Ballesta de repetición rápida (12", A4, Desgarrador) | 50g |
| Reemplazar Rifle de francotirador | Ballesta rápida (18", A3, Desgarrador) | 55g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Traficante de armas (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Comerciante de aumentos (Carga rápida) | 35g |
| Mejorar con una opción | Sargento (Contraataque cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Tratante de artefactos (Equipo exótico mejorado) | 30g |
| Mejorar con una opción | Asesino a sueldo (Golpe derribador(1)) | 40g |

##### Campeón de la Federación (Federation Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Equipo exótico

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco de mano colmillo (9", A1, Asalto, Fragmentar), Arma aplastante (A1, PA(1), Explosión(3)) | 25g |
| Reemplazar Arma de mano doble | Ballesta colmillo rápida (18", A3, Fragmentar), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bastón de encantador (A2, Amplificador de hechizos) | 55g |
| Reemplazar Arma de mano doble | Arcos de mano colmillo rápidos dobles (9", A4, Asalto, Fragmentar) | 85g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 90g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 115g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 15g |
| Reemplazar Arma aplastante | Arma arcana (A3, Triturar) | 15g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Arma tóxica (A3, Perdición) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 25g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 35g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arco de mano colmillo | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | -5g (devuelve oro) |
| Reemplazar Arco de mano colmillo | Bombas de metralla (9", A1, Asalto, Triturar) | Gratis |
| Reemplazar Arco de mano colmillo | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Arco de mano colmillo | Pistola de mecha (9", A1, PA(1), Asalto) | Gratis |
| Reemplazar Ballesta colmillo rápida | Rifle de mecha rápido (18", A3, PA(1)) | Gratis |
| Reemplazar Ballesta colmillo rápida | Ballesta rápida (18", A3, Desgarrador) | 15g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Traficante de armas (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Comerciante de aumentos (Carga rápida) | 35g |
| Mejorar con una opción | Tratante de artefactos (Equipo exótico mejorado) | 30g |
| Mejorar con una opción | Capitán de la Federación (Impávido) | 85g |

**Hechizos de Federaciones comerciales**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Víboras invocadas | Summoned Vipers | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que cuenta como si estuviera en Terreno peligroso una vez (la próxima vez que se aplique el efecto). |
| Conexión ruinosa | Ruinous Connection | 1 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 1 impacto con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Salto místico | Mystical Jump | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Volador una vez (la próxima vez que se aplique el efecto). |
| Arrugar armadura | Crumple Armor | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Fragmentar. |
| Construcción mejorada | Enhanced Construction | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Equipo exótico / Equipo exótico mejorado una vez (la próxima vez que se aplique el efecto). |
| Mil espadas | Thousand Swords | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Guardias a sueldo (Hired Guards)

##### Líder de la guardia (Guard Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Guardián

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Bombas de metralla (9", A1, Asalto, Triturar), Arma aplastante (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Rifle de francotirador (30", A1, PA(1), Preciso), Golpe (A1) | 5g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A4, Desgarrador) | 35g |
| Reemplazar Arma de mano doble | Gran arma pesada (A4, PA(2)) | 45g |
| Reemplazar Arma de mano doble | Lanzaarpones (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 65g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Bomba de metralla | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | -5g (devuelve oro) |
| Reemplazar Bomba de metralla | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Bomba de metralla | Bombas matadoras (12", A1, Asalto, Desintegrar) | 15g |
| Reemplazar Bomba de metralla | Pistola de mecha (9", A1, PA(1), Asalto) | Gratis |
| Reemplazar Rifle de francotirador | Ballesta matadora (24", A2, Desintegrar) | 30g |
| Reemplazar Rifle de francotirador | Trabuco rápido (12", A4, PA(1)) | 30g |
| Reemplazar Rifle de francotirador | Rifle de mecha rápido (18", A3, PA(1)) | 30g |
| Reemplazar Rifle de francotirador | Ballesta de repetición rápida (12", A4, Desgarrador) | 45g |
| Reemplazar Rifle de francotirador | Ballesta rápida (18", A3, Desgarrador) | 45g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Capitán (Triturar cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Guardia de seguridad (Guardián mejorado) | 50g |
| Mejorar con una opción | Agente encubierto (Sigilo) | 60g |
| Mejorar con una opción | Investigador (Rápido) | 70g |

##### Campeón de la guardia (Guard Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Guardián

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Bombas de metralla (9", A1, Asalto, Triturar), Arma aplastante (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Ballesta matadora (24", A2, Desintegrar), Golpe (A1) | 35g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Bomba de metralla | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | -5g (devuelve oro) |
| Reemplazar Bomba de metralla | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Bomba de metralla | Bombas matadoras (12", A1, Asalto, Desintegrar) | 15g |
| Reemplazar Bomba de metralla | Pistola de mecha (9", A1, PA(1), Asalto) | Gratis |
| Reemplazar Ballesta matadora | Rifle de mecha rápido (18", A3, PA(1)) | Gratis |
| Reemplazar Ballesta matadora | Ballesta rápida (18", A3, Desgarrador) | 15g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Sargento (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Guardia de seguridad (Guardián mejorado) | 50g |
| Mejorar con una opción | Agente encubierto (Sigilo) | 60g |
| Mejorar con una opción | Investigador (Rápido) | 70g |

**Hechizos de Guardias a sueldo**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Atracción mortal | Deadly Attraction | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen Disparo rápido una vez (la próxima vez que se aplique el efecto). |
| Descarga de llamas | Flame Blast | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3). |
| Armas electrificadas | Electrified Weapons | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Luchador perforante una vez (la próxima vez que se aplique el efecto). |
| Gas venenoso | Poison Gas | 2 | Elige una unidad enemiga a 6" o menos, que sufre 6 impactos con Perdición. |
| Cúpula fortificada | Fortified Dome | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Guardián / Guardián mejorado una vez (la próxima vez que se aplique el efecto). |
| Encadenamentes | Mind Shackler | 3 | Elige una miniatura enemiga a 30" o menos en línea de visión, que sufre 3 impactos con PA(2) y Desintegrar. Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### Mercenarios (Mercenaries)

##### Líder mercenario (Mercenary Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Curtido en batalla

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 15g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A4, Desgarrador) | 35g |
| Reemplazar Arma de mano doble | Gran arma pesada (A4, PA(2)) | 45g |
| Reemplazar Arma de mano doble | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 65g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arma arrojadiza | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Arma arrojadiza | Bombas de metralla (9", A1, Asalto, Triturar) | 5g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Trabuco rápido (12", A4, PA(1)) | 15g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 35g |
| Reemplazar Arco rápido | Ballesta de repetición rápida (12", A4, Desgarrador) | 30g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |

##### Campeón mercenario (Mercenary Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Curtido en batalla

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 15g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arma arrojadiza | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Arma arrojadiza | Bombas de metralla (9", A1, Asalto, Triturar) | 5g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 35g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |

##### Asalariado mercenario (Mercenary Hireling)

Cal 6+ · Def 6+ · Armas: Lanza (A3, Contraataque, Afianzado(1)) · Reglas: Héroe, Resistente(9), Curtido en batalla

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Centinela (Alcance de disparo aumentado) | 15g |
| Mejorar con una opción | Armero (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Cocinero errante (Carga perforante) | 20g |
| Mejorar con una opción | Sanador (Regeneración) | 125g |
| Reemplazar Lanza | Armas arrojadizas (12", A1, Asalto), Daga (A3) | Gratis |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Arco rápido (24", A3), Golpe (A1) | 10g |
| Reemplazar Arma arrojadiza | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 35g |

**Hechizos de Mercenarios**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Aura de heroísmo | Aura of Heroism | 1 | Elige una unidad aliada a 12" o menos, que obtiene +1 en las tiradas de chequeo de moral una vez (la próxima vez que se aplique el efecto). |
| Sanguijuela espiritual | Spirit Leech | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Puntería mágica | Magic Targeting | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen +1 en las tiradas para impactar cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Bola de fuego | Fire Ball | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Forma elemental | Elemental Form | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen PA(+1) en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Maleficio de sangre | Blood Hex | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Saqueadores de las afueras (Outskirt Raiders)

##### Líder saqueador (Raider Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Andarín, Resistente(9), Saqueador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 55g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Garras asesinas pesadas (A1, PA(1), Letal(3), Preciso, Quebrar) | 30g |
| Reemplazar Arma de mano doble | Gran arma pesada (A4, PA(2)) | 50g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A4, Desgarrador) | 45g |
| Reemplazar Arma de mano doble | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 75g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 15g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 20g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 35g |
| Reemplazar Arma aplastante | Garras asesinas (A3, PA(1), Quebrar) | 35g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 30g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 45g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -15g (devuelve oro) |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 15g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 50g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con | Montura bestial (Garras pesadas (A3, PA(1)), Rápido, Resistente(9)) | 605g |
| Mejorar con una opción | Maestro de venenos (Saqueador mejorado) | 15g |
| Mejorar con una opción | Líder indómito (Luchador preciso) | 15g |
| Mejorar con una opción | Cazador experto (Oleada al disparar) | 25g |
| Mejorar con una opción | Vigía saqueador (Sigilo) | 60g |

##### Campeón saqueador (Raider Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Andarín, Resistente(9), Saqueador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 20g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 55g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 20g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 35g |
| Reemplazar Arma aplastante | Garras asesinas (A3, PA(1), Quebrar) | 35g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 30g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 45g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 15g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Mejorar con | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con | Montura bestial (Garras pesadas (A3, PA(1)), Rápido, Resistente(9)) | 605g |
| Mejorar con una opción | Maestro de venenos (Saqueador mejorado) | 15g |
| Mejorar con una opción | Cazador experto (Oleada al disparar) | 25g |
| Mejorar con una opción | Vigía saqueador (Sigilo) | 60g |
| Mejorar con una opción | Rastreador de las afueras (Emboscada) | 105g |

**Hechizos de Saqueadores de las afueras**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Cacería salvaje | Wild Hunt | 1 | Elige una unidad aliada a 12" o menos, que obtiene Asesino cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Torbellino cortante | Cutting Whirlwind | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con PA(1) y Quebrar. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Rompearmaduras | Armor Breaker | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, que obtienen -1 en las tiradas de Defensa una vez (la próxima vez que se aplique el efecto). |
| Suelo agrietado | Cracked Ground | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Hojas envenenadas | Poison Blades | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Saqueador / Saqueador mejorado una vez (la próxima vez que se aplique el efecto). |
| Descarga de tierra | Earth Blast | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Sindicatos ocultos (Hidden Syndicates)

##### Líder del sindicato (Syndicate Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Niebla lúgubre

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma tóxica (A3, Perdición) | 25g |
| Reemplazar Arma de mano doble | Bastón de hechicero maléfico (A2, Amplificador de hechizos) | 35g |
| Reemplazar Látigo de combate y Golpe | Armas arrojadizas dobles (12", A4, Asalto) | 25g |
| Reemplazar Látigo de combate y Golpe | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 45g |
| Reemplazar Arma tóxica | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma tóxica | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Arma tóxica | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Arma tóxica | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Estrellas astilla arrojadizas (9", A1, PA(1), Asalto, Demoler) | 15g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -10g (devuelve oro) |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 15g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Cerbatana de astillas rápida (18", A3, PA(1), Demoler) | 35g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con | Artes sombrías (Redespliegue en emboscada) | 205g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Gran pájaro (Garras afiladas (A3, Desgarrador), Volador, Resistente(9)) | 475g |
| Mejorar con una opción | Alquimista (Luchador impredecible) | 20g |
| Mejorar con una opción | Señor del sindicato (Niebla lúgubre mejorada) | 25g |
| Mejorar con una opción | Infusor (Desgarrador al disparar) | 40g |
| Mejorar con una opción | Atamentes (Teletransporte) | 45g |
| Mejorar con una opción | Hoja sombría (Golpe derribador(1)) | 40g |

##### Campeón del sindicato (Syndicate Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Niebla lúgubre

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma tóxica (A3, Perdición) | 25g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de hechicero maléfico (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma tóxica | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma tóxica | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Arma tóxica | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Arma tóxica | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Estrellas astilla arrojadizas (9", A1, PA(1), Asalto, Demoler) | 15g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 15g |
| Reemplazar Arco rápido | Cerbatana de astillas rápida (18", A3, PA(1), Demoler) | 35g |
| Mejorar con | Artes sombrías (Redespliegue en emboscada) | 205g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Gran pájaro (Garras afiladas (A3, Desgarrador), Volador, Resistente(9)) | 475g |
| Mejorar con una opción | Maestro esquivo (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Alquimista (Luchador impredecible) | 20g |
| Mejorar con una opción | Infusor (Desgarrador al disparar) | 40g |
| Mejorar con una opción | Atamentes (Teletransporte) | 45g |

**Hechizos de Sindicatos ocultos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Defensa acrobática | Acrobatic Defense | 1 | Elige una unidad aliada a 12" o menos, que obtiene Contraataque cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Hoja espejo | Mirror-Blade | 1 | Elige una unidad enemiga a 6" o menos, que sufre 1 impacto con PA(2) y Letal(3). |
| Asalto fatal | Fatal Assault | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Asesino una vez (la próxima vez que se aplique el efecto). |
| Dardos quebradores | Shatter-Darts | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(1) y Demoler. |
| Niebla de sombra | Shadow Mist | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Niebla lúgubre / Niebla lúgubre mejorada una vez (la próxima vez que se aplique el efecto). |
| Globo de pesar | Sorrow-Globe | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos. |

#### Tribus furiosas (Furious Tribes)

##### Líder de la tribu (Tribe Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma tóxica (A3, Perdición) | 40g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 60g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 75g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Arpones de caza (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 85g |
| Reemplazar Arma tóxica | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Arma tóxica | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma tóxica | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Arma tóxica | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Arco rápido | Arco largo cazacabezas (30", A1, PA(1), Preciso) | -20g (devuelve oro) |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 25g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 60g |
| Reemplazar Arco rápido | Gran arco de caza (18", A1, PA(2), Letal(3), Perforar) | 70g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Arnés arácnido (Saltarín, Esquiva, Andarín) | 170g |
| Mejorar con una opción | Gran arnés arácnido (Garras tóxicas (A3, Perdición), Saltarín, Andarín, Resistente(9)) | 520g |
| Mejorar con una opción | Vigilante (Disparo rápido) | 10g |
| Mejorar con una opción | Jefe de la camada (Salvaje mejorado) | 10g |
| Mejorar con una opción | Invocador de la perdición (Luchador preciso) | 15g |
| Mejorar con una opción | Apañador de la camada (Reparar) | 100g |
| Mejorar con una opción | Tejedor (Redespliegue) | 105g |

##### Campeón de la tribu (Tribe Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Salvaje

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma tóxica (A3, Perdición) | 40g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 60g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 75g |
| Reemplazar Arma tóxica | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Arma tóxica | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma tóxica | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Arma tóxica | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arco tóxico rápido (18", A3, Perdición) | 25g |
| Reemplazar Arco rápido | Gran arco de caza (18", A1, PA(2), Letal(3), Perforar) | 70g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Arnés arácnido (Saltarín, Esquiva, Andarín) | 170g |
| Mejorar con una opción | Vigilante (Disparo rápido) | 10g |
| Mejorar con una opción | Invocador de la perdición (Luchador preciso) | 15g |
| Mejorar con una opción | Sabio de la tribu (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Tejedor (Redespliegue) | 105g |

**Hechizos de Tribus furiosas**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Escudo de telaraña | Web Shielding | 1 | Elige una unidad aliada a 12" o menos, que obtiene +1 en las tiradas de Defensa una vez (la próxima vez que se aplique el efecto). |
| ¡Desgarra! | Tear! | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3). |
| Frenesí furioso | Furious Frenzy | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Luchador perforante una vez (la próxima vez que se aplique el efecto). |
| ¡Rasga! | Rip! | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Impulso tribal | Tribal Boost | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Salvaje / Salvaje mejorado una vez (la próxima vez que se aplique el efecto). |
| ¡Apuñala! | Stab! | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(1) y Perforar. |

#### Uniones mercantes (Merchant Unions)

##### Líder mercader (Merchant Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Asalto de la unión

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 15g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 55g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano avanzados rápidos dobles (9", A4, PA(1), Asalto, Aplastar) | 90g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma de mano doble | Látigo de combate (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Arma de hoja pesada (A4, Desgarrador) | 35g |
| Reemplazar Arma de mano doble | Gran arma pesada (A4, PA(2)) | 45g |
| Reemplazar Arma de mano doble | Lanzaarpones (9", A1, PA(2), Letal(3), Asalto), Golpe (A1) | 65g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arma arrojadiza | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma arrojadiza | Arco de mano avanzado (9", A1, PA(1), Asalto, Aplastar) | 10g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arma arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Arma arrojadiza | Bombas de metralla (9", A1, Asalto, Triturar) | 5g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Rifle de francotirador (30", A1, PA(1), Preciso) | -10g (devuelve oro) |
| Reemplazar Arco rápido | Trabuco rápido (12", A4, PA(1)) | 15g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Ballesta avanzada rápida (18", A3, PA(1), Aplastar) | 25g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 35g |
| Reemplazar Arco rápido | Ballesta de repetición rápida (12", A4, Desgarrador) | 30g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Corcel mecánico (Saltarín, Impacto(3), Resistente(9)) | 455g |
| Mejorar con una opción | Mercader exótico (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Maestro comerciante (Precisión en tierra) | 15g |
| Mejorar con una opción | Jefe de la unión (Avance rápido) | 70g |
| Mejorar con una opción | Mecánico de campo (Reparar) | 100g |
| Mejorar con una opción | Instructor (Sin retirada) | 125g |

##### Campeón mercader (Merchant Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Asalto de la unión

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Armas arrojadizas (12", A1, Asalto), Arma aplastante (A1, PA(1), Explosión(3)) | 15g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Armas arrojadizas dobles (12", A4, Asalto) | 45g |
| Reemplazar Arma de mano doble | Bastón de mago (A2, Amplificador de hechizos) | 55g |
| Reemplazar Arma de mano doble | Pistolas de mecha rápidas dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano avanzados rápidos dobles (9", A4, PA(1), Asalto, Aplastar) | 90g |
| Reemplazar Arma de mano doble | Arcos de mano rápidos dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma aplastante | Arma de mano (A3, Parada(3)) | 10g |
| Reemplazar Arma aplastante | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Arma aplastante | Lanza de caballería (A3, Estocada) | 15g |
| Reemplazar Arma aplastante | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Arma aplastante | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Arma aplastante | Arma perforante (A1, PA(4), Letal(3)) | 40g |
| Reemplazar Arma arrojadiza | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arma arrojadiza | Arco de mano avanzado (9", A1, PA(1), Asalto, Aplastar) | 10g |
| Reemplazar Arma arrojadiza | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Arma arrojadiza | Bombas de metralla (9", A1, Asalto, Triturar) | 5g |
| Reemplazar Arma arrojadiza | Bombas tóxicas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arma arrojadiza | Bombas incendiarias (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 10g |
| Reemplazar Arco rápido | Rifle de mecha rápido (18", A3, PA(1)) | 20g |
| Reemplazar Arco rápido | Ballesta avanzada rápida (18", A3, PA(1), Aplastar) | 25g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 35g |
| Mejorar con una opción | Bestia compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Corcel mecánico (Saltarín, Impacto(3), Resistente(9)) | 455g |
| Mejorar con una opción | Mercader exótico (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Maestro comerciante (Precisión en tierra) | 15g |
| Mejorar con una opción | Traficante de guerra (Tirador de golpe y huida) | 25g |
| Mejorar con una opción | Instructor (Sin retirada) | 125g |

**Hechizos de Uniones mercantes**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Fortalecer piernas | Strengthen Legs | 1 | Elige una unidad aliada a 12" o menos, que mueve +2" al usar acciones de Avanzar y +4" al usar acciones de Correr/Cargar una vez (la próxima vez que se aplique el efecto). |
| Golpe aplastante | Crushing Blow | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Choque de hierro | Iron Clash | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Implacable una vez (la próxima vez que se aplique el efecto). |
| Estallido demoledor | Battering Burst | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos con PA(1) y Aplastar. |
| Postura desafiante | Defiant Stance | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Precisión en tierra una vez (la próxima vez que se aplique el efecto). |
| Torbellino mortal | Deadly Whirlwind | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

### Humanos (Humans)

#### Ducados de Vinci (Duchies of Vinci)

##### Líder Vinci (Vinci Leader)

Cal 6+ · Def 6+ · Armas: Cuchillas de brazo dobles (A4) · Reglas: Héroe, Resistente(9), Tecnología Vinci

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Cuchilla de brazo doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Cuchilla de brazo doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Cuchilla de brazo doble | Cuchillos envenenados (9", A1, Asalto, Perdición), Arma de mano (A3, Parada(3)) | 35g |
| Reemplazar Cuchilla de brazo doble | Ballesta de virotes ígneos rápida (18", A3, Perdición), Golpe (A1) | 40g |
| Reemplazar Cuchilla de brazo doble | Arcos de mano dobles (9", A4, Desgarrador, Asalto) | 115g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Cuchillo envenenado | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Ballesta de virotes ígneos rápida | Ballesta de virotes matadores rápida (18", A3, Pinchar) | 20g |
| Reemplazar Ballesta de virotes ígneos rápida | Arco de perdigones rápido (12", A4, Desgarrador) | 15g |
| Reemplazar Ballesta de virotes ígneos rápida | Ballesta rápida (18", A3, Desgarrador) | 15g |
| Reemplazar Ballesta de virotes ígneos rápida | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 45g |
| Reemplazar Ballesta de virotes ígneos rápida | Palomas-bomba autómatas (24", A1, PA(2), Letal(3), Indirecto) | 60g |
| Mejorar con una opción | Mascota autómata (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo autómata (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Asesino sigiloso (Emboscada, Sigilo) | 165g |
| Mejorar con una opción | Jabalí autómata (Defensa(1), Rápido, Impacto pesado(3), Resistente(9)) | 565g |
| Mejorar con una opción | Gran pájaro autómata (Garras afiladas (A6, Desgarrador), Defensa(1), Miedo(1), Volador, Resistente(18)) | 1080g |
| Mejorar con una opción | Dron de sierra (A2, Limitado) | 10g |
| Mejorar con una opción | Dron arquero (12", A2, Limitado, Desgarrador) | 20g |
| Mejorar con una opción | Municionero (Asesino a distancia) | 5g |
| Mejorar con una opción | Maestro de guerra (Imparable cuerpo a cuerpo) | 10g |
| Mejorar con una opción | Protector de la piedra mental (Fortificado) | 40g |
| Mejorar con una opción | Maestro asesino (Golpe derribador(1)) | 40g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Capitán (Avance rápido) | 70g |

##### Erudito Vinci (Vinci Scholar)

Cal 6+ · Def 6+ · Armas: Arma de mano maestra (A3, PA(1), Parada(3)) · Reglas: Héroe, Resistente(9), Tecnología Vinci

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano maestra | Alabarda maestra (A3, PA(1), Desgarrador) | 10g |
| Reemplazar Arma de mano maestra | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 20g |
| Reemplazar Arma de mano maestra | Disparador de manga (9", A1, PA(1), Asalto), Arma de mano (A3, Parada(3)) | 20g |
| Reemplazar Arma de mano maestra | Explosivos de engranajes (12", A1, Explosión(3), Indirecto, Asalto), Golpe (A1) | 30g |
| Reemplazar Arma de mano maestra | Bastón de alquimista (A2, Amplificador de hechizos) | 20g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Disparador de manga | Arco de mano (9", A1, Desgarrador, Asalto) | 5g |
| Reemplazar Explosivo de engranajes | Palomas-bomba autómatas (24", A1, PA(2), Letal(3), Indirecto) | 50g |
| Reemplazar Explosivo de engranajes | Arco de mano rápido (9", A3, Desgarrador, Asalto) | 35g |
| Mejorar con una opción | Caballo autómata (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Ayudante autómata (Reparar) | 100g |
| Mejorar con una opción | Dron de sierra (A2, Limitado) | 10g |
| Mejorar con una opción | Dron arquero (12", A2, Limitado, Desgarrador) | 20g |
| Mejorar con una opción | Municionero (Asesino a distancia) | 5g |
| Mejorar con una opción | Inventor (Tecnología Vinci mejorada) | 25g |
| Mejorar con una opción | Protector de la piedra mental (Fortificado) | 40g |
| Mejorar con una opción | Capitán (Avance rápido) | 70g |

**Hechizos de Ducados de Vinci**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Hojas de visión clara | Clearview Leaves | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, contra la cual las unidades aliadas obtienen +6" de alcance en sus armas al disparar una vez (la próxima vez que se aplique el efecto). |
| Mejunje explosivo | Explosive Concoction | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con Pinchar. |
| Aceites hipnóticos | Mesmer Oils | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Firme una vez (la próxima vez que se aplique el efecto). |
| Niebla asfixiante | Choking Fog | 2 | Elige hasta dos unidades enemigas a 9" o menos, que sufren 4 impactos cada una. |
| Hierbas de furia | Fury Herbs | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Tecnología Vinci / Tecnología Vinci mejorada una vez (la próxima vez que se aplique el efecto). |
| Gas neurotóxico | Neurotoxin Gas | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con Triturar. |

#### Imperio humano (Human Empire)

##### Maestro de batalla (Battle Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Mantener la línea

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Rifle de pólvora rápido (18", A3, Anticobertura, Fractura), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Pistolas de pólvora dobles (9", A4, Anticobertura, Asalto, Fractura) | 65g |
| Reemplazar Arma de mano doble | Pistolas de mecha dobles (9", A4, PA(1), Asalto) | 75g |
| Reemplazar Arma de mano doble | Arcos de mano dobles (9", A4, Desgarrador, Asalto) | 100g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Cuchillo arrojadizo | Pistola de pólvora (9", A1, Anticobertura, Asalto, Fractura) | 5g |
| Reemplazar Cuchillo arrojadizo | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Rifle de pólvora rápido | Rifle de mecha rápido (18", A3, PA(1)) | 5g |
| Reemplazar Rifle de pólvora rápido | Ballesta rápida (18", A3, Desgarrador) | 20g |
| Mejorar con una opción | Mascota compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Pegaso (Rápido, Volador, Impacto(3), Resistente(9)) | 790g |
| Mejorar con una opción | Grifo real (Garras afiladas (A6, Desgarrador), Pisotón (A3, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(27)) | 1650g |
| Mejorar con una opción | Dragón imperial (Aliento de llamas (6", A1, Explosión(3), Asalto, Preciso), Garras pesadas (A8, PA(2)), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2275g |
| Mejorar con una opción | Oficial de logística (Tirador preciso) | 15g |
| Mejorar con una opción | Portador del icono del Gran Imperio (Mantener la línea mejorado) | 10g |
| Mejorar con una opción | Clérigo (Furioso) | 15g |
| Mejorar con una opción | Cazarrecompensas (Marca de combate preciso) | 10g |
| Mejorar con una opción | Capitán (Carrera rápida) | 55g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | General (Destreza marcial) | 185g |

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Mantener la línea

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Lanzagranadas (24", A1, Explosión(3)), Golpe (A1) | 10g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Bastón de mago de batalla (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano doble | Pistolas gatling dobles (9", A4, Anticobertura, Asalto, Oleada) | 75g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Lanza de caballería (A3, Estocada) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Cuchillo arrojadizo | Pistola de pólvora (9", A1, Anticobertura, Asalto, Fractura) | 5g |
| Reemplazar Cuchillo arrojadizo | Pistola de mecha (9", A1, PA(1), Asalto) | 5g |
| Reemplazar Lanzagranadas | Arco rápido (24", A3) | 10g |
| Reemplazar Lanzagranadas | Arco corto rápido (18", A4) | 20g |
| Reemplazar Lanzagranadas | Rifle de francotirador (30", A1, PA(1), Preciso) | -5g (devuelve oro) |
| Reemplazar Lanzagranadas | Rifle de mecha rápido (18", A3, PA(1)) | 25g |
| Reemplazar Lanzagranadas | Rifle de pólvora rápido (18", A3, Anticobertura, Fractura) | 25g |
| Reemplazar Lanzagranadas | Rifle gatling (18", A3, Anticobertura, Oleada) | 30g |
| Reemplazar Lanzagranadas | Ballesta rápida (18", A3, Desgarrador) | 40g |
| Mejorar con una opción | Mascota compañera (Repeler emboscadas) | 15g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Caballo de armazón robótico (Saltarín, Impacto(1)) | 95g |
| Mejorar con una opción | Caballo de tirador (Rápido, Vanguardia) | 140g |
| Mejorar con una opción | Robo-mole (Gran arma (A3, PA(2)), Defensa(1), Resistente(9)) | 470g |
| Mejorar con una opción | Robo-mole gigante (Martillo gigante (A8, PA(2)), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Resistente(36)) | 1915g |
| Mejorar con una opción | Oficial de logística (Tirador preciso) | 15g |
| Mejorar con una opción | Clérigo (Furioso) | 15g |
| Mejorar con una opción | Capitán (Carrera rápida) | 55g |
| Mejorar con una opción | Ingeniero (Reparar) | 100g |
| Mejorar con una opción | Cirujano (Regeneración) | 125g |

**Hechizos de Imperio humano**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Aura de heroísmo | Aura of Heroism | 1 | Elige una unidad aliada a 12" o menos, que obtiene Mantener la línea / Mantener la línea mejorado una vez (la próxima vez que se aplique el efecto). |
| Sanguijuela espiritual | Spirit Leech | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Puntería mágica | Magic Targeting | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen +1 en las tiradas para impactar cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Bola de fuego | Fire Ball | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos con Fractura. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Forma elemental | Elemental Form | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen PA(+1) en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Maleficio de sangre | Blood Hex | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 9 impactos. |

#### Reino de los Ángeles (Kingdom of Angels)

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Bendición angélica

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Descarga de fuego (6", A1, Explosión(3), Asalto, Preciso), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de mago de batalla (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Cuchillo arrojadizo | Arco de mano (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Descarga de fuego | Arco rápido (24", A3) | Gratis |
| Reemplazar Descarga de fuego | Ballesta de repetición rápida (12", A4, Desgarrador) | 30g |
| Reemplazar Descarga de fuego | Ballesta rápida (18", A3, Desgarrador) | 30g |
| Reemplazar Descarga de fuego | Arco largo rápido (30", A3, Indirecto) | 40g |
| Reemplazar Descarga de fuego | Descarga de hielo (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo de guerra (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | León (Garras pesadas (A3, PA(2)), Rápido, Miedo(1), Resistente(9)) | 525g |
| Mejorar con una opción | Grifo (Garras afiladas (A6, Desgarrador), Defensa(1), Rápido, Miedo(1), Volador, Resistente(18)) | 1750g |
| Mejorar con una opción | Dragón (Descarga de fuego (6", A1, Explosión(3), Asalto, Preciso), Garras dentadas (A8, Triturar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2490g |
| Reemplazar Descarga de fuego | Descarga de hielo (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Ejecutor (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Capitán (Furioso) | 15g |
| Mejorar con una opción | Defensor (Fortificado) | 40g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Retribuidor (Sin retirada) | 125g |

##### Abadesa (Abbess)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), Bendición angélica

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Guja maestra (A3, PA(1), Triturar) | 25g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Gran mangual maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Guja (A3, Triturar) | 30g |
| Reemplazar Guja | Gran arma (A3, PA(2)) | 25g |
| Reemplazar Guja | Gran mangual (A3, PA(1), Oleada) | 25g |
| Reemplazar Guja | Alabarda (A3, Desgarrador) | 35g |
| Reemplazar Cuchillo arrojadizo | Arco de mano (9", A1, Desgarrador, Asalto) | 20g |
| Reemplazar Arco corto rápido | Gran arco bendito (18", A3, PA(1), Quebrar) | 25g |
| Mejorar con una opción | Maestro explorador (Explorador) | 105g |
| Mejorar con una opción | Pantera (Rápido, Andarín) | 215g |
| Mejorar con una opción | Carro de panteras (Garras pesadas (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Andarín, Resistente(18)) | 1520g |
| Mejorar con una opción | Capitán (Furioso) | Gratis |
| Mejorar con una opción | Ejecutor (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Enviado angélico (Bendición angélica mejorada) | 30g |
| Mejorar con una opción | Sacerdote (Conducto de hechizos) | 30g |
| Mejorar con una opción | Retribuidor (Sin retirada) | 125g |

##### Ángel supremo (High Angel)

Cal 6+ · Def 6+ · Armas: Martillo ardiente maestro (A2, Explosión(3), Perdición) · Reglas: Volador, Héroe, Resistente(18), Bendición angélica

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Martillo ardiente maestro | Espada helada maestra (A6, PA(1), Triturar) | 65g |
| Reemplazar Martillo ardiente maestro | Espada ardiente maestra (A6, PA(1), Perdición) | 75g |
| Reemplazar Martillo ardiente maestro | Lanza helada maestra (A2, PA(3), Letal(3), Triturar) | 95g |
| Reemplazar Martillo ardiente maestro | Mandoble bendito maestro (A6, PA(2), Quebrar) | 90g |
| Reemplazar Martillo ardiente maestro | Gran arma maestra (A6, PA(4)) | 120g |
| Reemplazar Martillo ardiente maestro | Armas de mano dobles (A8) | 25g |
| Reemplazar Martillo ardiente maestro | Bastón de hechicero (A4, Amplificador de hechizos) | 45g |
| Reemplazar Martillo ardiente maestro | Descarga de fuego (6", A1, Explosión(3), Asalto, Preciso), Martillo ardiente (A2, Explosión(3), Perdición) | 55g |
| Reemplazar Martillo ardiente maestro | Gran arco (24", A9), Golpe (A2) | 110g |
| Reemplazar Martillo ardiente | Espada ardiente (A6, Perdición) | 35g |
| Reemplazar Martillo ardiente | Hoja helada (A6, Triturar) | 30g |
| Reemplazar Martillo ardiente | Gran arma (A6, PA(2)) | 65g |
| Reemplazar Martillo ardiente | Mandoble bendito (A6, PA(1), Quebrar) | 65g |
| Reemplazar Martillo ardiente | Lanza helada (A2, PA(2), Letal(3), Triturar) | 75g |
| Reemplazar Descarga de fuego | Descarga de hielo (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Reemplazar Gran arco | Gran arco bendito (18", A6, PA(1), Quebrar) | 20g |
| Mejorar con una opción | Golpe de brasas (A1, PA(1), Explosión(3), Limitado, Golpe al paso) | 15g |
| Mejorar con una opción | Golpe de escarcha (Penalización de precisión) | 25g |
| Mejorar con una opción | Benefactor angélico (Guerrero versátil) | 55g |
| Mejorar con una opción | Protector angélico (Bendición angélica mejorada) | 70g |
| Mejorar con una opción | Capataz (Furioso) | 20g |
| Mejorar con una opción | Juez (Tirador de élite perforante) | 40g |
| Mejorar con una opción | Guardián (Fortificado) | 90g |
| Mejorar con una opción | Tirano (Sin retirada) | 275g |

**Hechizos de Reino de los Ángeles**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Guía celestial | Heavenly Guidance | 1 | Elige una unidad aliada a 12" o menos, que obtiene Volador una vez (la próxima vez que se aplique el efecto). |
| Golpe atronador | Thunder Strike | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 2 impactos. |
| Energía de choque | Shock Energy | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Asesino una vez (la próxima vez que se aplique el efecto). |
| Tormenta angélica | Angelic Storm | 2 | Elige hasta dos unidades enemigas a 6" o menos, que sufren 4 impactos con PA(2) cada una. |
| Bendición estelar | Star Blessing | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Bendición angélica / Bendición angélica mejorada una vez (la próxima vez que se aplique el efecto). |
| Rayo | Lightning Bolt | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(1) y Quebrar. |

#### Reinos caballerescos (Chivalrous Kingdoms)

##### Campeón supremo (High Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Juramento del Valle

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Espada sagrada maestra (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Lanza para cazar monstruos maestra (A3, PA(2), Aniquilar) | 60g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Espada sagrada (A3, Perdición) | 25g |
| Reemplazar Arma de mano doble | Granadas sagradas (9", A1, Explosión(3), Asalto, Perdición), Golpe (A1) | 25g |
| Reemplazar Espada sagrada | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Espada sagrada | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Espada sagrada | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Espada sagrada | Arma de mano (A3, Parada(3)) | Gratis |
| Reemplazar Espada sagrada | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Espada sagrada | Lanza para cazar monstruos (A3, PA(1), Aniquilar) | 35g |
| Reemplazar Cuchillo arrojadizo | Antorchas de llamas (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Granada sagrada | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 35g |
| Mejorar con una opción | Caballero a pie (Asesino cuerpo a cuerpo) | 15g |
| Mejorar con una opción | Caballero del Valle (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Caballero andante (Defensa(1), Rápido, Impacto(1), Asesino cuerpo a cuerpo) | 185g |
| Mejorar con una opción | Caballero del Grial (Defensa(1), Rápido, Impacto(1), Guerrero versátil) | 205g |
| Mejorar con una opción | Caballero del juramento (Rápido, Impacto(1), Resistencia a hechizos) | 210g |
| Mejorar con una opción | Caballero de bestia mítica (Rápido, Impacto pesado(3), Resistente(9)) | 465g |
| Mejorar con una opción | Caballero de pegaso (Rápido, Volador, Impacto(3), Resistente(9)) | 815g |
| Mejorar con una opción | Caballero de hipogrifo (Garras afiladas (A6, Desgarrador), Defensa(1), Rápido, Miedo(1), Volador, Resistente(18)) | 1690g |
| Mejorar con una opción | Capitán (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Paladín (Furioso) | 15g |
| Mejorar con una opción | Maestro de vanguardia (Carrera rápida) | 55g |
| Mejorar con una opción | Cruzado (Juramento del Valle mejorado) | 65g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Defensor del Valle (Vale Defender)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Juramento del Valle

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Cuchillos arrojadizos (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Bastón de encantador (A2, Amplificador de hechizos) | 50g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Lanza de caballería (A3, Estocada) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Cuchillo arrojadizo | Antorchas de llamas (6", A1, Anticobertura, Asalto, Preciso) | Gratis |
| Reemplazar Arco rápido | Granadas sagradas (9", A1, Explosión(3), Asalto, Perdición) | 10g |
| Reemplazar Arco rápido | Arco largo rápido (30", A3, Indirecto) | 45g |
| Reemplazar Arco rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con una opción | Caballo (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Caballo errante (Rápido, Impacto(1), Vanguardia) | 155g |
| Mejorar con una opción | Bestia mítica (Rápido, Impacto pesado(3), Resistente(9)) | 465g |
| Mejorar con una opción | Cazador de monstruos (Asesino a distancia) | 5g |
| Mejorar con una opción | Capitán (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Paladín (Furioso) | 15g |
| Mejorar con una opción | Cruzado (Juramento del Valle mejorado) | 65g |

**Hechizos de Reinos caballerescos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Protección de la cazadora | Protection of the Huntress | 1 | Elige una unidad aliada a 12" o menos, que obtiene Fortificado una vez (la próxima vez que se aplique el efecto). |
| Mirada abrasadora | Searing Gaze | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con Perdición. |
| Maldición de la cazadora | Curse of the Huntress | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Oleada en sus armas una vez (la próxima vez que se aplique el efecto). |
| Ira de la cazadora | Wrath of the Huntress | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(2). |
| Gran cacería | Great Hunt | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Juramento del Valle / Juramento del Valle mejorado una vez (la próxima vez que se aplique el efecto). |
| Luz purificadora | Cleansing Light | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(3) y Aniquilar. Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

### No muertos (Undead)

#### No muertos fantasmales (Ghostly Undead)

##### Campeón (Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Etéreo, Héroe, Resistente(9), Espíritu empíreo

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Guja maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Alarido maldito (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Bastón de guardián de almas (A2, Amplificador de hechizos) | 35g |
| Reemplazar Arma de mano doble | Ballesta de virotes-guadaña (18", A2, PA(3), Segar), Golpe (A1) | 55g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Guja (A3, Estocada) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Alarido maldito | Descarga de almas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Alarido maldito | Descarga de guadaña (9", A1, PA(1), Asalto, Segar) | 15g |
| Reemplazar Ballesta de virotes-guadaña | Ballesta de almas rápida (18", A3, PA(1), Indirecto) | Gratis |
| Reemplazar Ballesta de virotes-guadaña | Ballesta rápida (18", A3, Desgarrador) | -5g (devuelve oro) |
| Mejorar con una opción | Espíritu encadenado compañero (Repeler emboscadas) | 15g |
| Mejorar con una opción | Corcel acechador (Rápido, Impacto(1)) | 230g |
| Mejorar con una opción | Atormentador (Implacable) | 20g |
| Mejorar con una opción | Verdugo (Luchador impredecible) | 20g |
| Mejorar con una opción | Celador (Escudado) | 80g |
| Mejorar con una opción | Carcelero (Explorador) | 105g |
| Mejorar con una opción | Capataz (Sin retirada) | 125g |

##### Líder sombrío (Grim Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Etéreo, Furioso, Héroe, Resistente(9), Espíritu empíreo

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Guja maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Guadaña maestra (A3, PA(2), Segar) | 45g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Mangual de almas maestro (A3, PA(2), Oleada) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Alarido maldito (12", A1, Asalto), Guja (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Ballesta rápida (18", A3, Desgarrador), Golpe (A1) | 40g |
| Reemplazar Arma de mano doble | Bastón de guardián de almas (A2, Amplificador de hechizos) | 75g |
| Reemplazar Guja | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Guja | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Guja | Guadaña (A3, PA(1), Segar) | 15g |
| Reemplazar Guja | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Guja | Mangual de almas (A3, PA(1), Oleada) | 25g |
| Reemplazar Guja | Alabarda (A3, Desgarrador) | 35g |
| Reemplazar Alarido maldito | Descarga de almas (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Alarido maldito | Descarga de guadaña (9", A1, PA(1), Asalto, Segar) | 15g |
| Reemplazar Ballesta rápida | Ballesta de virotes-guadaña (18", A2, PA(3), Segar) | 5g |
| Reemplazar Ballesta rápida | Ballesta de almas rápida (18", A3, PA(1), Indirecto) | 5g |
| Mejorar con una opción | Espíritu encadenado compañero (Repeler emboscadas) | 15g |
| Mejorar con una opción | Corcel atormentador (Emboscada, Furioso, Impacto(1)) | 115g |
| Mejorar con una opción | Corcel acechador (Rápido, Impacto(1)) | 230g |
| Mejorar con una opción | Corcel agresor (Rápido, Furioso, Impacto(1)) | 230g |
| Mejorar con una opción | Trono del monarca (Miedo(2), Resistente(9)) | 280g |
| Mejorar con una opción | Corcel maldito (Ataque al paso(1), Rápido, Impacto(1), Travesía) | 385g |
| Mejorar con una opción | Gran corcel astado (Rápido, Impacto pesado(3), Resistente(9), Travesía) | 910g |
| Mejorar con una opción | Verdugo (Luchador impredecible) | 20g |
| Mejorar con una opción | Caballero (Espíritu empíreo mejorado) | 25g |
| Mejorar con una opción | Celador (Escudado) | 80g |
| Mejorar con una opción | Carcelero (Explorador) | 105g |
| Mejorar con una opción | Capataz (Sin retirada) | 125g |

##### Banshee ancestral (Ancient Banshee)

Cal 6+ · Def 6+ · Armas: Grito de banshee (9", A4, Perdición), Golpe (A1) · Reglas: Etéreo, Héroe, Resistente(9), Espíritu empíreo, Resistencia a hechizos

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Atormentador (Implacable) | Gratis |
| Mejorar con una opción | Caballero (Espíritu empíreo mejorado) | 25g |
| Mejorar con una opción | Celador (Escudado) | 80g |
| Mejorar con una opción | Carcelero (Explorador) | 105g |
| Mejorar con una opción | Capataz (Sin retirada) | 125g |
| Reemplazar Grito de banshee y Golpe | Hoz segadora maestra (A3, PA(1), Triturar) | 5g |
| Reemplazar Grito de banshee y Golpe | Alarido maldito (12", A1, Asalto), Hoz segadora (A3, Triturar) | 10g |
| Reemplazar Grito de banshee y Golpe | Hoja del duelo maestra (A3, PA(1), Perdición) | 10g |
| Reemplazar Grito de banshee y Golpe | Alarido maldito (12", A1, Asalto), Hoja del duelo (A3, Perdición) | 10g |
| Reemplazar Alarido maldito | Descarga de almas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Alarido maldito | Descarga de guadaña (9", A1, PA(1), Asalto, Segar) | 15g |
| Reemplazar Grito de banshee | Chillido escalofriante (9", A4, Triturar) | 5g |
| Reemplazar Grito de banshee | Aullido inquietante (12", A4, PA(1)) | 20g |

##### Espectro ancestral (Ancient Wraith)

Cal 6+ · Def 6+ · Armas: Hoces segadoras dobles (A4, Triturar) · Reglas: Emboscada, Etéreo, Héroe, Resistente(9), Espíritu empíreo, Resistencia a hechizos

| Sección | Opción | Precio |
|---|---|---|
| Mejorar con una opción | Verdugo (Luchador impredecible) | 20g |
| Mejorar con una opción | Caballero (Espíritu empíreo mejorado) | 25g |
| Mejorar con una opción | Celador (Escudado) | 80g |
| Mejorar con una opción | Capataz (Sin retirada) | 125g |
| Reemplazar Hoz segadora doble | Guadaña doble maestra (A2, PA(4), Segar) | 10g |
| Reemplazar Hoz segadora doble | Guadaña maestra (A3, PA(2), Segar) | 20g |
| Reemplazar Hoz segadora doble | Alarido maldito (12", A1, Asalto), Guadaña (A3, PA(1), Segar) | 20g |
| Reemplazar Hoz segadora doble | Mangual de almas maestro (A3, PA(2), Oleada) | 30g |
| Reemplazar Guadaña | Mangual de almas (A3, PA(1), Oleada) | 10g |
| Reemplazar Guadaña | Guadaña doble (A2, PA(3), Segar) | 5g |
| Reemplazar Alarido maldito | Descarga de almas (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Alarido maldito | Descarga de guadaña (9", A1, PA(1), Asalto, Segar) | 15g |

**Hechizos de No muertos fantasmales**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Protección etérea | Ethereal Warding | 1 | Elige una unidad aliada a 12" o menos, que obtiene Espíritu empíreo / Espíritu empíreo mejorado una vez (la próxima vez que se aplique el efecto). |
| Terror segador | Reaping Terror | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con PA(1) y Segar. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Pena irresistible | Irresistible Grief | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Perdición en sus armas al atacar una vez (la próxima vez que se aplique el efecto). |
| Alarido pavoroso | Dread Shriek | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con Oleada. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |
| Espíritus despiadados | Vicious Spirits | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen +1 en las tiradas para impactar cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Devorar alma | Eat Soul | 3 | Elige una unidad enemiga a 24" o menos en línea de visión, que sufre 6 impactos. |

#### No muertos momificados (Mummified Undead)

##### Campeón real (Royal Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Legión real

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Golpe espiritual (9", A1, Asalto, Perdición), Arma de mano (A3, Parada(3)) | 40g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 40g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Golpe espiritual | Golpe maldito (9", A1, PA(1), Asalto, Perforar) | 10g |
| Reemplazar Golpe espiritual | Golpe de almas (12", A1, PA(2), Asalto) | 15g |
| Mejorar con una opción | Bestia real (Garras pesadas (A1, PA(1)), Rápido) | 90g |
| Mejorar con una opción | Corcel esquelético (Rápido, Impacto(1), Vanguardia) | 155g |
| Mejorar con una opción | Serpiente real (Impacto(3), Resistente(9)) | 275g |
| Mejorar con una opción | Carro real (Pezuñas (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(18)) | 1005g |
| Mejorar con una opción | Esfinge de guerra (Aguijón tóxico (6", A1, Explosión(3), Asalto, Perdición, Preciso), Pisotón (A4, PA(1)), Garras tóxicas (A8, Perdición), Defensa(1), Miedo(2), Resistente(36)) | 1880g |
| Mejorar con una opción | Dragón esqueleto (Aliento de llamas pesado (6", A1, PA(1), Explosión(6), Asalto, Preciso), Garras afiladas (A12, Desgarrador), Pisotón (A6, PA(2)), Defensa(1), Miedo(3), Volador, Resistente(54)) | 3520g |
| Mejorar Serpiente real con una opción | Cazador de dunas (Rápido) | 125g |
| Mejorar Serpiente real con una opción | Armadura pesada (Defensa(1)) | 155g |
| Mejorar Serpiente real con una opción | Excavador (Emboscada) | 180g |
| Mejorar con una opción | Portador del icono de la Reina Tumba (Legión real mejorada) | 5g |
| Mejorar con una opción | Experto en venenos (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Heraldo (Explorador) | 105g |
| Mejorar con una opción | Guardián de la gema de almas (Resistencia a hechizos) | 125g |
| Mejorar con una opción | Monarca (Sin retirada) | 125g |

##### Líder esqueleto (Skeleton Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Legión real

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Golpe espiritual (9", A1, Asalto, Perdición), Lanza (A3, Contraataque, Afianzado(1)) | 45g |
| Reemplazar Arma de mano doble | Bastón de sacerdote (A2, Amplificador de hechizos) | 40g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Lanza de caballería (A3, Estocada) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Golpe espiritual | Golpe de almas (12", A1, PA(2), Asalto) | 15g |
| Reemplazar Golpe espiritual | Golpe maldito (9", A1, PA(1), Asalto, Perforar) | 10g |
| Reemplazar Arco rápido | Arco maldito rápido (18", A3, PA(1), Perforar) | 35g |
| Reemplazar Arco rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con | Corcel esquelético (Rápido, Impacto(1), Vanguardia) | 155g |
| Mejorar con una opción | Experto en venenos (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Cazador nómada (Indirecto al disparar) | 25g |
| Mejorar con una opción | Heraldo (Explorador) | 105g |
| Mejorar con una opción | Moldeador de piedra maestro (Reparar) | 100g |
| Mejorar con una opción | Guardián de la gema de almas (Resistencia a hechizos) | 125g |

**Hechizos de No muertos momificados**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Tormenta del desierto | Desert Storm | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que cuenta como si estuviera en Terreno difícil una vez (la próxima vez que se aplique el efecto). |
| Tormenta de calaveras | Storm of Skulls | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 1 impacto con Explosión(3). |
| Guía de la Reina Tumba | Tomb Queen's Guidance | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Legión real / Legión real mejorada una vez (la próxima vez que se aplique el efecto). |
| Venganza de la Reina Tumba | Tomb Queen's Vengeance | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(1) y Perforar. |
| Flechas malditas | Cursed Arrows | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Triturar en sus armas al disparar una vez (la próxima vez que se aplique el efecto). |
| Desecación rápida | Rapid Desiccation | 3 | Elige una miniatura enemiga a 24" o menos en línea de visión, que sufre 3 impactos con PA(4). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |

#### No muertos osificados (Ossified Undead)

##### Maestro de huesos (Bone Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Osificado

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Maza de hueso maestra (A3, PA(2), Quebrar) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Bastón de maestro de almas (A2, Amplificador de hechizos) | 45g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 5g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Maza de hueso (A3, PA(1), Quebrar) | 15g |
| Reemplazar Jabalina | Red con púas (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Jabalina | Pinchos arrojadizos (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Arco de hueso rápido (18", A3, PA(1), Quebrar) | 35g |
| Reemplazar Arco rápido | Vencedor de tres pinchos (6", A1, PA(4), Letal(3), Asalto) | 65g |
| Mejorar con una opción | Corcel esquelético (Impacto(1), Veloz) | 85g |
| Mejorar con una opción | Trono de hueso (Acumulador de hechizos(2), Resistente(9)) | 270g |
| Mejorar con una opción | Carro de hueso (Pezuñas (A2, PA(1)), Defensa(1), Impacto(4), Veloz, Resistente(18)) | 1070g |
| Mejorar con una opción | Segador de hechizos (Implacable) | 20g |
| Mejorar con una opción | Moldeador de huesos (Osificado mejorado) | 50g |
| Mejorar con una opción | Estandarte de trofeos del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Señor de los huesos (Veloz) | 70g |
| Mejorar con una opción | Artesano de esquirlas (Regeneración) | 125g |

##### Heraldo de la muerte (Herald of Death)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Lento, Resistente(9), Luchador impredecible, Osificado

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 25g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Maza de hueso maestra (A3, PA(2), Quebrar) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 50g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 5g |
| Reemplazar Arma de mano doble | Jabalinas (12", A1, Asalto), Arma de mano (A3, Parada(3)) | 25g |
| Reemplazar Arma de mano | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Arma de mano | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Arma de mano | Maza de hueso (A3, PA(1), Quebrar) | 20g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Jabalina | Red con púas (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Jabalina | Pinchos arrojadizos (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Arco rápido | Arco de hueso rápido (18", A3, PA(1), Quebrar) | 35g |
| Reemplazar Arco rápido | Vencedor de tres pinchos (6", A1, PA(4), Letal(3), Asalto) | 80g |
| Mejorar con una opción | Corcel esquelético (Impacto(1), Veloz) | 85g |
| Mejorar con una opción | Gran corcel (Impacto(3), Veloz, Resistente(9)) | 370g |
| Mejorar con una opción | Carro de hueso (Pezuñas (A2, PA(1)), Defensa(1), Impacto(4), Veloz, Resistente(18)) | 1080g |
| Mejorar con una opción | Segador de hechizos (Implacable) | 20g |
| Mejorar con una opción | Alto soberano (Perdición cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Moldeador de huesos (Osificado mejorado) | 50g |
| Mejorar con una opción | Señor de los huesos (Veloz) | 70g |
| Mejorar con una opción | Maestro de los ur-muertos (Sin retirada) | 125g |

##### Gran acechador (Great Stalker)

Cal 6+ · Def 6+ · Armas: Hojas de acechador (A8) · Reglas: Lento, Resistente(18), Luchador impredecible, Héroe, Osificado

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Hoja de acechador | Ur-gran falcata maestro (A6, PA(1), Triturar) | 40g |
| Reemplazar Hoja de acechador | Mandoble osificado maestro (A6, PA(1), Perdición) | 50g |
| Reemplazar Hoja de acechador | Gran maza de hueso maestra (A6, PA(2), Quebrar) | 65g |
| Reemplazar Hoja de acechador | Jabalinas (12", A3, Asalto), Mandoble osificado (A6, Perdición) | 85g |
| Reemplazar Hoja de acechador | Gran arma maestra (A6, PA(4)) | 95g |
| Reemplazar Mandoble osificado | Ur-gran falcata (A6, Triturar) | -5g (devuelve oro) |
| Reemplazar Mandoble osificado | Gran arma (A6, PA(2)) | 35g |
| Reemplazar Mandoble osificado | Gran maza de hueso (A6, PA(1), Quebrar) | 30g |
| Reemplazar Jabalina | Pinchos arrojadizos (9", A3, Asalto, Perdición) | 20g |
| Reemplazar Jabalina | Vencedor de tres pinchos (6", A1, PA(4), Letal(3), Asalto) | 50g |
| Reemplazar Jabalina | Red con púas (9", A3, Desgarrador, Asalto) | 40g |
| Mejorar con una opción | Alto soberano (Perdición cuerpo a cuerpo) | 40g |
| Mejorar con una opción | Moldeador de huesos (Osificado mejorado) | 115g |
| Mejorar con una opción | Señor de los huesos (Veloz) | 145g |
| Mejorar con una opción | Artesano de esquirlas (Regeneración) | 275g |
| Mejorar con una opción | Maestro de los ur-muertos (Sin retirada) | 275g |

**Hechizos de No muertos osificados**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Osificación rápida | Rapid Ossification | 1 | Elige una unidad aliada a 12" o menos, que obtiene Osificado / Osificado mejorado una vez (la próxima vez que se aplique el efecto). |
| Fractura profunda | Deep Fracture | 1 | Elige una miniatura enemiga a 18" o menos en línea de visión, que sufre 2 impactos con PA(1). Este efecto se resuelve como si el objetivo fuera una unidad de [1]. |
| Esclavizador de almas | Soul Enslaver | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Furioso una vez (la próxima vez que se aplique el efecto). |
| Rompehuesos | Bone Breaker | 2 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 4 impactos. |
| Drenar espíritu | Drain Spirit | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Imparable en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Descarga demoledora | Shattering Blast | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(1) y Quebrar. Tira tantos dados como impactos para ver si se activan los efectos «con resultados de 6». |

#### No muertos vampíricos (Vampiric Undead)

##### Campeón esqueleto (Skeleton Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), No muerto maldito

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Hoja maldita maestra (A3, PA(1), Fragmentar) | 25g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Dagas arrojadizas (12", A1, Asalto), Hoja maldita (A3, Fragmentar) | 25g |
| Reemplazar Arma de mano doble | Ballesta maldita rápida (18", A3, Fragmentar), Golpe (A1) | 30g |
| Reemplazar Hoja maldita | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Hoja maldita | Lanza de caballería (A3, Estocada) | 5g |
| Reemplazar Hoja maldita | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Hoja maldita | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Hoja maldita | Alabarda (A3, Desgarrador) | 15g |
| Reemplazar Daga arrojadiza | Virotes malditos (9", A1, Asalto, Fragmentar) | 5g |
| Reemplazar Daga arrojadiza | Virotes oscuros (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Ballesta maldita rápida | Virotes letales (9", A1, PA(2), Letal(3), Asalto) | 35g |
| Reemplazar Ballesta maldita rápida | Ballesta rápida (18", A3, Desgarrador) | 20g |
| Mejorar con una opción | Corcel esquelético (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Bestia abisal (Garras dentadas (A6, Triturar), Defensa(1), Miedo(1), Andarín, Resistente(18)) | 1165g |
| Mejorar con una opción | Maestro de caza (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Señor despertado (Triturar cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Portador de la noche (Sigilo) | 60g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |
| Mejorar con una opción | Conde ancestral (Explorador) | 105g |
| Mejorar con una opción | Comandante (Sin retirada) | 125g |

##### Líder drenado (Drained Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), No muerto maldito

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 20g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 15g |
| Reemplazar Arma de mano doble | Honda (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 30g |
| Reemplazar Arma de mano doble | Bastón de nigromante (A2, Amplificador de hechizos) | 55g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 10g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 5g |
| Reemplazar Honda | Virotes oscuros (9", A1, Asalto, Perdición) | 5g |
| Reemplazar Honda | Virotes malditos (9", A1, Asalto, Fragmentar) | 5g |
| Reemplazar Arco rápido | Virotes letales (9", A1, PA(2), Letal(3), Asalto) | 45g |
| Mejorar con | Necrófago mascota (Repeler emboscadas) | 15g |
| Mejorar con una opción | Maestro de caza (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Portador de la noche (Sigilo) | 60g |
| Mejorar con una opción | Jefe de la aldea (Explorador) | 105g |
| Mejorar con una opción | Maestro de cadáveres (No muerto maldito mejorado) | 110g |
| Mejorar con una opción | Gran maestro de cadáveres (Reanimación) | 125g |

##### Maestro vampiro (Vampire Master)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Furioso, Héroe, Resistente(9), No muerto maldito

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Hoja maldita maestra (A3, PA(1), Fragmentar) | 25g |
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Ballesta maldita rápida (18", A3, Fragmentar), Golpe (A1) | 20g |
| Reemplazar Arma de mano doble | Dagas arrojadizas (12", A1, Asalto), Hoja maldita (A3, Fragmentar) | 25g |
| Reemplazar Arma de mano doble | Bastón de nigromante (A2, Amplificador de hechizos) | 105g |
| Reemplazar Hoja maldita | Arma de mano (A3, Parada(3)) | 15g |
| Reemplazar Hoja maldita | Lanza de caballería (A3, Estocada) | 10g |
| Reemplazar Hoja maldita | Lanza (A3, Contraataque, Afianzado(1)) | 15g |
| Reemplazar Hoja maldita | Gran arma (A3, PA(2)) | 30g |
| Reemplazar Hoja maldita | Alabarda (A3, Desgarrador) | 40g |
| Reemplazar Daga arrojadiza | Virotes malditos (9", A1, Asalto, Fragmentar) | 5g |
| Reemplazar Daga arrojadiza | Virotes oscuros (9", A1, Asalto, Perdición) | 10g |
| Reemplazar Ballesta maldita rápida | Ballesta rápida (18", A3, Desgarrador) | 20g |
| Reemplazar Ballesta maldita rápida | Virotes letales (9", A1, PA(2), Letal(3), Asalto) | 50g |
| Mejorar con una opción | Mascota de caza (Repeler emboscadas) | 15g |
| Mejorar con una opción | Corcel (Rápido, Impacto(1)) | 85g |
| Mejorar con una opción | Terror alado (Garras pesadas (A3, PA(2)), Volador, Resistente(9)) | 540g |
| Mejorar con una opción | Corcel alado (Rápido, Volador, Impacto(3), Resistente(9)) | 860g |
| Mejorar con una opción | Dragón zombi (Aliento tóxico (6", A1, Explosión(3), Asalto, Perdición, Preciso), Garras afiladas (A8, Desgarrador), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Regeneración, Resistente(36)) | 3385g |
| Mejorar con una opción | Dragón esqueleto (Garras pesadas (A12, PA(2)), Pisotón (A6, PA(2)), Miedo(3), Volador, Resistente(54)) | 3540g |
| Mejorar con una opción | Horda de zombis cosidos (Zombis infectados (A18, Perdición), Miedo(3), Impávido, Regeneración, Resistente(54)) | 4650g |
| Mejorar con una opción | Señor (Triturar cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Portador de la noche (Sigilo) | 60g |
| Mejorar con una opción | Conde (Explorador) | 105g |
| Mejorar con una opción | Portador del regalo del rey (No muerto maldito mejorado) | 110g |
| Mejorar con una opción | Comandante (Sin retirada) | 125g |
| Mejorar con | Seducción retorcida (Control mental) | 50g |

##### Campeón necrófago (Ghoul Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Regeneración, Andarín, Resistente(9), No muerto maldito

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Garras tóxicas maestras (A3, PA(1), Perdición) | 25g |
| Reemplazar Arma de mano doble | Honda (12", A1, Asalto), Garras tóxicas (A3, Perdición) | 25g |
| Reemplazar Arma de mano doble | Hoja maldita maestra (A3, PA(1), Fragmentar) | 25g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 45g |
| Reemplazar Garras tóxicas | Hoja maldita (A3, Fragmentar) | -5g (devuelve oro) |
| Reemplazar Garras tóxicas | Lanza de caballería (A3, Estocada) | Gratis |
| Reemplazar Garras tóxicas | Gran arma (A3, PA(2)) | 15g |
| Mejorar con una opción | Alas (Volador) | 75g |
| Mejorar con una opción | Alas de saqueador (Emboscada, Volador) | 180g |
| Mejorar con una opción | Bestia alada (Volador, Impacto(3), Resistente(9)) | 645g |
| Mejorar con una opción | Bestia murciélago (Colmillos dentados (A6, Triturar), Defensa(1), Miedo(1), Volador, Furioso, Resistente(18)) | 1585g |
| Mejorar con una opción | Dragón murciélago (Pisotón (A4, PA(1)), Colmillos tóxicos (A8, Perdición), Defensa(1), Miedo(2), Volador, Furioso, Resistente(36)) | 3270g |
| Mejorar con una opción | Maestro de caza (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Superior (Triturar cuerpo a cuerpo) | 20g |
| Mejorar con una opción | Portador de la noche (Sigilo) | 60g |
| Mejorar con una opción | Sepulturero (No muerto maldito mejorado) | 110g |

##### Campeón hombre lobo (Werewolf Champion)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Explorador, Andarín, Resistente(18), No muerto maldito

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Hoja maldita maestra (A6, PA(1), Fragmentar) | 50g |
| Reemplazar Arma de mano doble | Garras afiladas maestras (A6, PA(1), Desgarrador) | 65g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 95g |
| Reemplazar Arma de mano doble | Hojas afiladas maestras (A6, PA(2), Oleada) | 100g |
| Reemplazar Arma de mano doble | Dagas arrojadizas (12", A3, Asalto), Hoja maldita (A6, Fragmentar) | 70g |
| Mejorar con una opción | Señor aspirante (Triturar cuerpo a cuerpo) | 40g |
| Mejorar con una opción | Portador de la noche (Sigilo) | 120g |
| Mejorar con una opción | Portador del regalo del rey (No muerto maldito mejorado) | 240g |
| Mejorar con una opción | Comandante (Sin retirada) | 275g |

**Hechizos de No muertos vampíricos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Invocación seductora | Seductive Invocation | 1 | Elige una unidad enemiga a 18" o menos en línea de visión, que debe hacer un chequeo de moral. Si lo falla, puedes moverla hasta 6" en línea recta en cualquier dirección. Cada unidad solo puede moverse así una vez por ronda. |
| Golpe maldito | Cursed Strike | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con Fragmentar. |
| Danza de la muerte | Dance of Death | 2 | Elige hasta dos unidades aliadas a 12" o menos, que obtienen Teletransporte una vez (la próxima vez que se aplique el efecto). |
| Mirada mortal | Deadly Gaze | 2 | Elige una unidad enemiga a 6" o menos, que sufre 2 impactos con PA(2) y Letal(3). |
| Regreso vigoroso | Vigorous Return | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen No muerto maldito / No muerto maldito mejorado una vez (la próxima vez que se aplique el efecto). |
| Viento espectral | Spectral Wind | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(2). |

### Pielesverdes (Greenskins)

#### Goblins (Goblins)

##### Líder goblin (Goblin Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Travieso

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 25g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 40g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 40g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Arco corto rápido (18", A4), Golpe (A1) | 30g |
| Reemplazar Arma de mano doble | Honda (12", A1, Asalto), Lanza (A3, Contraataque, Afianzado(1)) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 45g |
| Reemplazar Lanza | Arma de mano (A3, Parada(3)) | -5g (devuelve oro) |
| Reemplazar Lanza | Lanza de caballería (A3, Estocada) | -5g (devuelve oro) |
| Reemplazar Lanza | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Lanza | Alabarda (A3, Desgarrador) | 10g |
| Reemplazar Honda | Red con púas (9", A1, Desgarrador, Asalto) | 15g |
| Reemplazar Arco corto rápido | Ballesta rápida (18", A3, Desgarrador) | 30g |
| Reemplazar Arco corto rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 40g |
| Reemplazar Clan de la araña | Clan del murciélago (Furioso) | -35g (devuelve oro) |
| Reemplazar Clan de la araña | Clan del lobo (Impávido) | 30g |
| Mejorar con una opción | Bestia de las cavernas mascota (Repeler emboscadas) | 15g |
| Mejorar con una opción | Bestia de las cavernas (Dientes afilados (A1, Desgarrador), Saltarín) | 105g |
| Mejorar con una opción | Araña (Colmillos venenosos (A1, Triturar), Explorador) | 120g |
| Mejorar con una opción | Lobo (Mordiscos pesados (A1, PA(1)), Rápido) | 185g |
| Mejorar con una opción | Gran bestia de las cavernas (Dientes afilados (A3, Desgarrador), Saltarín, Resistente(9)) | 475g |
| Mejorar con una opción | Gran araña (Colmillos venenosos (A3, Triturar), Explorador, Resistente(9)) | 495g |
| Mejorar con una opción | Gran lobo (Mordiscos pesados (A3, PA(1)), Rápido, Resistente(9)) | 605g |
| Mejorar con una opción | Carro de lobos (Mordiscos pesados (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(18)) | 1290g |
| Mejorar con una opción | Bestia de las cavernas gigante (Dientes afilados gigantes (A8, Desgarrador), Pisotón (A4, PA(1)), Saltarín, Defensa(1), Miedo(2), Resistente(36)) | 2295g |
| Mejorar con una opción | Hostigador (Disparo rápido) | 10g |
| Mejorar con una opción | Maestro de senderos (Carga rápida) | 35g |
| Mejorar con una opción | Gran jefe (Estocada cuerpo a cuerpo) | 25g |
| Mejorar con una opción | Cervecero (Evasión cuerpo a cuerpo) | 55g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Jefe trol (Troll Boss)

Cal 6+ · Def 6+ · Armas: Lanzar rocas (12", A2, Explosión(3), Indirecto), Golpe (A2) · Reglas: Héroe, Regeneración, Resistente(18), Travieso

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Lanzar rocas y Golpe | Arma de mano maestra (A6, PA(1), Parada(3)) | 70g |
| Reemplazar Lanzar rocas y Golpe | Gran martillo maestro (A2, PA(4), Letal(3), Antirregeneración) | 125g |
| Reemplazar Lanzar rocas y Golpe | Gran arma maestra (A6, PA(4)) | 160g |
| Reemplazar Lanzar rocas y Golpe | Armas de mano dobles (A8) | 25g |
| Reemplazar Lanzar rocas y Golpe | Bastón de chamán trol (A4, Amplificador de hechizos) | 70g |
| Reemplazar Lanzar rocas y Golpe | Lanzas de trol (9", A1, PA(2), Letal(3), Asalto), Arma de mano (A6, Parada(3)) | 150g |
| Reemplazar Lanzar rocas y Golpe | Red con púas (9", A3, Desgarrador, Asalto), Arma de mano (A6, Parada(3)) | 185g |
| Reemplazar Arma de mano | Gran arma (A6, PA(2)) | 70g |
| Reemplazar Arma de mano | Martillo gigante (A2, PA(4), Letal(3)) | 100g |
| Reemplazar Tribu de las cavernas | Tribu del bosque (Andarín) | 95g |
| Reemplazar Tribu de las cavernas | Tribu de piedra (Impávido) | 175g |
| Mejorar con una opción | Instigador (Travieso mejorado) | 15g |
| Mejorar con una opción | Gran jefe (Estocada cuerpo a cuerpo) | 15g |
| Mejorar con una opción | Maestro de senderos (Carga rápida) | 70g |
| Mejorar con una opción | Cervecero (Evasión cuerpo a cuerpo) | 105g |

**Hechizos de Goblins**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Resiliencia del lobo | Wolf Resiliance | 1 | Elige una unidad aliada a 12" o menos, que obtiene +1 en las tiradas de Defensa una vez (la próxima vez que se aplique el efecto). |
| Murciélago mordedor | Biting Bat | 1 | Elige una unidad enemiga a 6" o menos, que sufre 1 impacto con Letal(3) y Peligroso. |
| Sed de murciélago | Bat Thirst | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Luchador perforante una vez (la próxima vez que se aplique el efecto). |
| Araña picadora | Stinging Spider | 2 | Elige una unidad enemiga a 6" o menos, que sufre 6 impactos con Perdición. |
| Poderío arácnido | Spider Might | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Travieso / Travieso mejorado una vez (la próxima vez que se aplique el efecto). |
| Lobo al acecho | Pouncing Wolf | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(2). |

#### Orcos (Orcs)

##### Jefe de la Guardia de Hierro (Iron Guard Boss)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Asesino cuerpo a cuerpo, Héroe, Resistente(9), Feroz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 30g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 55g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 40g |
| Reemplazar Arma de mano doble | Ballesta rápida (18", A3, Desgarrador), Golpe (A1) | 65g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 15g |
| Reemplazar Hacha arrojadiza | Bombas de honda (12", A1, Indirecto, Desgarrador, Asalto) | 50g |
| Reemplazar Ballesta rápida | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 15g |
| Mejorar con una opción | Bestia colmillar (Rápido, Impacto(1), Arrasar(1)) | 95g |
| Mejorar con una opción | Gran bestia colmillar (Rápido, Impacto(3), Arrasar(3), Resistente(9)) | 415g |
| Mejorar con una opción | Bestia colmillar gigante (Colmillos (A3, PA(1)), Rápido, Miedo(1), Impacto(6), Resistente(27)) | 1170g |
| Mejorar con una opción | Guiverno (Garras rápidas (A8, PA(1), Oleada), Pisotón (A4, PA(1)), Miedo(2), Volador, Resistente(36)) | 1805g |
| Mejorar Bestia colmillar gigante con | Dotación de la Guardia de Hierro (Dotación con gran arma (A3, PA(2)), Resistente(9)) | 455g |
| Mejorar con una opción | Trampero (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Cantor (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Cacique (Feroz mejorado) | 10g |
| Mejorar con una opción | Maestro guardián (Carga perforante) | 15g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Jefe orco (Orc Boss)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Feroz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 95g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Bombas de honda (12", A1, Indirecto, Desgarrador, Asalto) | 50g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 60g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 55g |
| Reemplazar Maestro del hierro | Maestro de huesos (Andarín) | -30g (devuelve oro) |
| Mejorar con una opción | Escudo aterrador (Esquiva) | 40g |
| Mejorar con una opción | Bestia colmillar (Rápido, Impacto(1), Arrasar(1)) | 95g |
| Mejorar con una opción | Gran bestia colmillar (Rápido, Impacto(3), Arrasar(3), Resistente(9)) | 490g |
| Mejorar con una opción | Bestia colmilluda (Garras afiladas (A3, Desgarrador), Rápido, Resistente(9)) | 510g |
| Mejorar con una opción | Carro de bestia colmillar (Colmillos (A2, PA(1)), Defensa(1), Rápido, Impacto(4), Resistente(18)) | 1385g |
| Mejorar con una opción | Carro de bestia colmilluda (Garras afiladas (A6, Desgarrador), Defensa(1), Rápido, Resistente(18)) | 1465g |
| Mejorar con una opción | Gran trol (Gran arma (A6, PA(2)), Defensa(1), Miedo(1), Regeneración, Resistente(18)) | 1670g |
| Mejorar con una opción | Gran buitre (Pico afilado (A6, Triturar), Pisotón (A3, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(27)) | 2155g |
| Mejorar con una opción | Guiverno (Garras rápidas (A8, PA(1), Oleada), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 2960g |
| Mejorar con una opción | Trampero (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Abrecaminos (Luchador de golpe y huida) | 15g |
| Mejorar con una opción | Cacique (Feroz mejorado) | 10g |
| Mejorar con una opción | Maestro guardián (Carga perforante) | 15g |
| Mejorar con una opción | Portaestandarte del ejército (Miedo(2)) | 60g |

##### Líder orco (Orc Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Feroz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Lanza maestra (A3, PA(1), Contraataque, Afianzado(1)) | 50g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Alabarda maestra (A3, PA(1), Desgarrador) | 55g |
| Reemplazar Arma de mano doble | Arco rápido (24", A3), Golpe (A1) | 25g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Lanza de caballería (A3, Estocada) | 35g |
| Reemplazar Arma de mano doble | Bastón de chamán (A2, Amplificador de hechizos) | 95g |
| Reemplazar Lanza de caballería | Arma de mano (A3, Parada(3)) | 5g |
| Reemplazar Lanza de caballería | Lanza (A3, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A3, PA(2)) | 20g |
| Reemplazar Lanza de caballería | Alabarda (A3, Desgarrador) | 25g |
| Reemplazar Hacha arrojadiza | Bombas de honda (12", A1, Indirecto, Desgarrador, Asalto) | 50g |
| Reemplazar Arco rápido | Arco corto rápido (18", A4) | 15g |
| Reemplazar Arco rápido | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 60g |
| Reemplazar Arco rápido | Ballesta rápida (18", A3, Desgarrador) | 55g |
| Reemplazar Maestro del hierro | Maestro de huesos (Andarín) | -30g (devuelve oro) |
| Mejorar con una opción | Escudo aterrador (Esquiva) | 40g |
| Mejorar con una opción | Bestia colmillar (Rápido, Impacto(1), Arrasar(1)) | 95g |
| Mejorar con una opción | Trampero (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Abrecaminos (Luchador de golpe y huida) | 15g |
| Mejorar con una opción | Cantor (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Cacique (Feroz mejorado) | 10g |

##### Líder de los hobciénagas (Hobswampling Leader)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A4) · Reglas: Héroe, Resistente(9), Feroz, Explorador

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Arma de mano maestra (A3, PA(1), Parada(3)) | 35g |
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A3, PA(1), Estocada) | 35g |
| Reemplazar Arma de mano doble | Gran arma maestra (A3, PA(4)) | 60g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A1, Asalto), Arma de mano (A3) | 15g |
| Reemplazar Arma de mano doble | Bombas de honda (12", A1, Explosión(3), Indirecto, Desgarrador, Asalto), Golpe (A1) | 125g |
| Reemplazar Arma de mano | Lanza de caballería (A3, Estocada) | 20g |
| Reemplazar Arma de mano | Gran arma (A3, PA(2)) | 45g |
| Reemplazar Hacha arrojadiza | Bombas de honda (12", A1, Indirecto, Desgarrador, Asalto) | 50g |
| Mejorar con | Buitre (Garras afiladas (A3, Desgarrador), Volador, Resistente(9)) | 525g |
| Mejorar con una opción | Trampero (Tirador de élite perforante) | 20g |
| Mejorar con una opción | Abrecaminos (Luchador de golpe y huida) | 15g |
| Mejorar con una opción | Cantor (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Maestro guardián (Carga perforante) | 15g |

##### Jefe orco bruto (Brute Orc Boss)

Cal 6+ · Def 6+ · Armas: Armas de mano dobles (A8) · Reglas: Héroe, Resistente(18), Feroz

| Sección | Opción | Precio |
|---|---|---|
| Reemplazar Arma de mano doble | Lanza de caballería maestra (A6, PA(1), Estocada) | 65g |
| Reemplazar Arma de mano doble | Lanza maestra (A6, PA(1), Contraataque, Afianzado(1)) | 90g |
| Reemplazar Arma de mano doble | Hachas arrojadizas (12", A3, Asalto), Lanza de caballería (A6, Estocada) | 105g |
| Reemplazar Arma de mano doble | Gran arma maestra (A6, PA(4)) | 125g |
| Reemplazar Lanza de caballería | Lanza (A6, Contraataque, Afianzado(1)) | 10g |
| Reemplazar Lanza de caballería | Gran arma (A6, PA(2)) | 45g |
| Reemplazar Hacha arrojadiza | Arpones de caza (9", A1, PA(2), Letal(3), Asalto) | 40g |
| Reemplazar Hacha arrojadiza | Bombas de honda (12", A1, Explosión(3), Indirecto, Desgarrador, Asalto) | 80g |
| Reemplazar Maestro del hierro | Maestro de huesos (Andarín) | -80g (devuelve oro) |
| Mejorar con | Gran guiverno (Aliento tóxico (6", A1, Explosión(3), Asalto, Perdición, Preciso), Garras dentadas (A8, Triturar), Pisotón (A4, PA(1)), Defensa(1), Miedo(2), Volador, Resistente(36)) | 3540g |
| Mejorar con una opción | Cantor (Ocultación cuerpo a cuerpo) | 5g |
| Mejorar con una opción | Cacique (Feroz mejorado) | 20g |
| Mejorar con una opción | Abrecaminos (Luchador de golpe y huida) | 25g |
| Mejorar con una opción | Maestro guardián (Carga perforante) | 35g |

**Hechizos de Orcos**

| Hechizo | Nombre original | Coste | Efecto |
|---|---|---|---|
| Mirada maligna | Evil Gaze | 1 | Elige una unidad aliada a 12" o menos, que obtiene Contraataque cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Golpe de hueso | Bone Strike | 1 | Elige una unidad enemiga a 6" o menos, que sufre 3 impactos con Perdición. |
| Puños mágicos | Magic Fists | 2 | Elige hasta dos unidades enemigas a 18" o menos en línea de visión, contra las cuales las unidades aliadas obtienen Desgarrador en sus armas cuerpo a cuerpo una vez (la próxima vez que se aplique el efecto). |
| Golpe divino | Godly Smash | 2 | Elige una unidad enemiga a 12" o menos en línea de visión, que sufre 4 impactos con PA(1) y Perforar. |
| Cántico del clan del camino | Way-Clan Chant | 3 | Elige hasta tres unidades aliadas a 18" o menos, que obtienen Feroz / Feroz mejorado una vez (la próxima vez que se aplique el efecto). |
| Estallido de hierro | Iron Burst | 3 | Elige una unidad enemiga a 18" o menos en línea de visión, que sufre 6 impactos con PA(2). |

### Otras facciones

#### Demonios de la Grieta (Rift Daemons)

*Esta facción no tiene héroes jugables en Quest.*

**Hechizos de Demonios de la Grieta**

*Esta facción no tiene hechizos.*

#### Gremios del Nexo (Guilds of the Nexus)

*Esta facción no tiene héroes jugables en Quest.*

**Hechizos de Gremios del Nexo**

*Esta facción no tiene hechizos.*

## Glosario de reglas especiales

Nombre en español y su nombre original en el creador de héroes. Las versiones "mejoradas" corresponden a "Enhanced …".

| Español | Original |
|---|---|
| Acobardado | Shaken |
| Acumulador de hechizos | Spell Accumulator |
| Afianzado | Brace |
| Afortunado | Lucky |
| Alcance de disparo aumentado | Increased Shooting Range |
| Alcance versátil | Versatile Reach |
| Alta cuna | Highborn |
| Amplificador de hechizos | Spell Amplifier |
| Andarín | Strider |
| Aniquilar | Obliterate |
| Anticobertura | Anti-Cover |
| Antirregeneración | Anti-Regen |
| Aplastar | Smash |
| Arrasar | Ravage |
| Asalto | Assault |
| Asalto de la unión | Union Assault |
| Asesino | Slayer |
| Asesino a distancia | Ranged Slayer |
| Asesino cuerpo a cuerpo | Melee Slayer |
| Ataque al paso | Crossing Attack |
| Aura de luchador de golpe y huida | Hit & Run Fighter Aura |
| Avance rápido | Rapid Advance |
| Azote | Scourge |
| Bendición angélica | Angelic Blessing |
| Bestial | Bestial |
| Bomba atronadora | Thunder Bomb |
| Bomba aturdidora | Stunning Bomb |
| Bomba cegadora | Blinding Bomb |
| Bomba de feromonas | Pheromone Bomb |
| Bomba de grasa | Grease Bomb |
| Bomba de humo | Smoke Bomb |
| Bomba de pólvora | Gunpowder Bomb |
| Bomba de ruido | Noise Bomb |
| Bomba de silencio | Silence Bomb |
| Bomba de telaraña | Web Bomb |
| Bomba fantasma | Phantasm Bomb |
| Bomba incendiaria | Fire Bomb |
| Bomba venenosa | Poison Bomb |
| Bucanero | Buccaneer |
| Buen tirador | Good Shot |
| Carga perforante | Piercing Charge |
| Carga rápida | Rapid Charge |
| Carrera rápida | Rapid Rush |
| Celador | Warden |
| Conducto de hechizos | Spell Conduit |
| Contraataque | Counter |
| Contraataque cuerpo a cuerpo | Counter in Melee |
| Control mental | Mind Control |
| Coraje bruto | Brute Courage |
| Corredor | Runner |
| Crecimiento fortificado | Fortified Growth |
| Curtido en batalla | Battle-Hardened |
| Defensa | Defense |
| Defensa en tierra | Grounded Defense |
| Demoler | Demolish |
| Desgarrador | Rending |
| Desgarrador al disparar | Rending when Shooting |
| Desgarrador cuerpo a cuerpo | Rending in Melee |
| Desintegrar | Disintegrate |
| Destreza marcial | Martial Prowess |
| Destructivo | Destructive |
| Destructor | Destroyer |
| Diezmar | Decimate |
| Disparo rápido | Quick Shot |
| Elixir de agilidad | Agility Elixir |
| Elixir de conquista | Conquest Elixir |
| Elixir de energía | Energy Elixir |
| Elixir de piel pétrea | Stoneskin Elixir |
| Elixir de poder | Power Elixir |
| Elixir de tiro certero | Trueshot Elixir |
| Elixir de velocidad | Speed Elixir |
| Elixir heroico | Heroic Elixir |
| Emboscada | Ambush |
| Engendrar | Spawn |
| Engorroso | Unwieldy |
| Enloquecido | Crazed |
| Equipo exótico | Exotic Gear |
| Escabullirse | Scurry |
| Escudado | Shielded |
| Espíritu empíreo | Empyrean Spirit |
| Esquiva | Dodge |
| Estocada | Thrust |
| Estocada cuerpo a cuerpo | Thrust in Melee |
| Etéreo | Ethereal |
| Evasión cuerpo a cuerpo | Melee Evasion |
| Evasivo | Evasive |
| Experto versátil | Versatile Expert |
| Explorador | Scout |
| Explosión | Blast |
| Fatigado | Fatigued |
| Feroz | Ferocious |
| Firme | Steadfast |
| Fortificado | Fortified |
| Fractura | Fracture |
| Fragmentar | Fragment |
| Frenesí defensivo | Defensive Frenzy |
| Frenesí perforante | Piercing Frenzy |
| Frenesí preciso | Precision Frenzy |
| Furioso | Furious |
| Golpe al paso | Crossing Strike |
| Golpe derribador | Takedown Strike |
| Golpe en retirada | Retreating Strike |
| Gran elixir de piel pétrea | Great Stoneskin Elixir |
| Gran elixir de velocidad | Great Speed Elixir |
| Gran poción de descanso | Great Resting Potion |
| Gran poción de maná | Great Mana Potion |
| Gran poción de salud | Great Health Potion |
| Guardián | Guardian |
| Guerrero real | Royal Warrior |
| Guerrero versátil | Versatile Warrior |
| Hazaña de protección | Protection Feat |
| Héroe | Hero |
| Hostigador | Harassing |
| Impacto | Impact |
| Impacto pesado | Heavy Impact |
| Imparable | Unstoppable |
| Imparable al disparar | Unstoppable when Shooting |
| Imparable cuerpo a cuerpo | Unstoppable in Melee |
| Impávido | Fearless |
| Implacable | Relentless |
| Impreciso | Imprecise |
| Indirecto | Indirect |
| Indirecto al disparar | Indirect when Shooting |
| Infiltración | Infiltrate |
| Invocar | Summon |
| Juramentado del draco | Drakesworn |
| Juramento del Valle | Vale Oath |
| Lacerar | Lacerate |
| Lanzador | Caster |
| Legión real | Royal Legion |
| Lento | Slow |
| Letal | Deadly |
| Ligado a la Guerra | Warbound |
| Ligado a la Lujuria | Lustbound |
| Ligado a la Plaga | Plaguebound |
| Ligado al Cambio | Changebound |
| Ligado al Caos | Havocbound |
| Limitado | Limited |
| Luchador de golpe y huida | Hit & Run Fighter |
| Luchador impredecible | Unpredictable Fighter |
| Luchador perforante | Piercing Fighter |
| Luchador preciso | Precision Fighter |
| Mantener la línea | Hold the Line |
| Marca de combate preciso | Precision Fighting Mark |
| Miedo | Fear |
| Muy pesado | Very Heavy |
| Nacido de las sombras | Shadowborn |
| Niebla lúgubre | Gloom-Mist |
| No muerto maldito | Cursed Undead |
| Ocultación a distancia | Ranged Shrouding |
| Ocultación cuerpo a cuerpo | Melee Shrouding |
| Oleada | Surge |
| Oleada al disparar | Surge when Shooting |
| Osificado | Ossified |
| PA | AP |
| Parada | Parry |
| Paso de ola | Wave-Step |
| Peligroso | Hazardous |
| Penalización de defensa | Defense Debuff |
| Penalización de precisión | Precision Debuff |
| Perdición | Bane |
| Perdición al disparar | Bane when Shooting |
| Perdición cuerpo a cuerpo | Bane in Melee |
| Perforar | Pierce |
| Pesado | Heavy |
| Pinchar | Puncture |
| Poción curativa | Curing Potion |
| Poción de descanso | Resting Potion |
| Poción de maná | Mana Potion |
| Poción de perspicacia | Insight Potion |
| Poción de reanimación | Reviving Potion |
| Poción de salud | Health Potion |
| Poción de teletransporte | Teleport Potion |
| Precisión en tierra | Grounded Precision |
| Preciso | Precise |
| Primigenio | Primal |
| Protección en tierra | Grounded Protection |
| Protección mística | Mystic Warding |
| Purgar | Purge |
| Quebrar | Shatter |
| Rápido | Fast |
| Reanimación | Reanimation |
| Redespliegue | Re-Deployment |
| Redespliegue en emboscada | Ambush Re-Deployment |
| Regeneración | Regeneration |
| Reparar | Mend |
| Repeler emboscadas | Repel Ambushers |
| Represalia | Retaliate |
| Resistencia a hechizos | Spell Resistance |
| Resistente | Tough |
| Robusto | Sturdy |
| Saltarín | Bounding |
| Salvaje | Savage |
| Saqueador | Raider |
| Segar | Reap |
| Sigilo | Stealth |
| Sin retirada | No Retreat |
| Tecnología Vinci | Vinci Tech |
| Teletransporte | Teleport |
| Tenaz | Tenacious |
| Tirador de élite perforante | Piercing Marksman |
| Tirador de golpe y huida | Hit & Run Shooter |
| Tirador impredecible | Unpredictable Shooter |
| Tirador perforante | Piercing Shooter |
| Tirador preciso | Precision Shooter |
| Travesía | Traversal |
| Travieso | Mischievous |
| Triturar | Shred |
| Triturar al disparar | Shred when Shooting |
| Triturar cuerpo a cuerpo | Shred in Melee |
| Valentía | Bravery |
| Vanguardia | Vanguard |
| Velo salvaje | Wild Veil |
| Velocidad en tierra | Grounded Speed |
| Veloz | Swift |
| Volador | Flying |
