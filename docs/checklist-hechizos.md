# Checklist · Hechizos de los héroes (tablero virtual)

Marca cada punto cuando lo hayas comprobado en una partida. «Probado» = lo ha comprobado Claude en el navegador; «Sin probar» = está programado pero conviene que lo veas tú.

## Reglas aplicadas (Core Rules · Caster)

| # | Regla | Cómo está aplicada | Estado |
|---|---|---|---|
| 1 | Solo lanzan los héroes con **Lanzador(X)** | El botón «Lanzar hechizo» solo sale en la lista de acciones de héroes con Lanzador (clases Druida, Hechicero, Brujo, Mago, o quien lo eligió en el nivel 5) | Probado |
| 2 | **X fichas de hechizo al empezar cada ronda, máximo 6** | `tokOf`: al consultar las fichas en una ronda nueva se suman X (tope 6). Se ven en el panel izquierdo («Fichas de hechizo n/6») y en la ventana | Probado (2 fichas con Lanzador(2)) |
| 3 | **Una vez por activación, antes de atacar** | Se bloquea si ya ha lanzado esta ronda o si ya ha usado Atacar, Disparar o Cargar. El botón explica el motivo | Probado el bloqueo por «ya lanzó»; bloqueo por atacar sin probar |
| 4 | **Lanzar no gasta acción** | El botón no consume acciones (cuesta 0 en el contador) | Probado |
| 5 | **Gastar tantas fichas como el valor del hechizo** | Se descuentan al tirar el dado (se paguen o no con éxito) | Probado |
| 6 | **Uno o varios hechizos, un intento por hechizo** | Tras tirar, la ventana vuelve a la lista; el hechizo intentado queda «Ya intentado» | Probado |
| 7 | **Elegir objetivo** con alcance y línea de visión del texto del hechizo | Solo salen como objetivo las unidades dentro del alcance y, si el texto lo pide, a la vista. Aliados: héroes dentro del alcance | Probado (enemigo); aliados sin probar |
| 8 | **Un dado: con 4+ surte efecto** (6 siempre, 1 nunca) | El jugador tira el dado en la bandeja | Probado |
| 9 | **+1 a la tirada por cada ficha o poder gastado antes de tirar** | Botones «Fichas extra» y «Poder extra» (máximo lo que tenga); el botón de tirar muestra el número necesario | Probado (fichas); poder sin probar |
| 10 | **Hechizos de impactos** | Se resuelven solos con la Defensa del objetivo y PA; el objetivo hace su moral si pierde miniaturas | Probado (Ira ancestral: 2 impactos, 1 herida) |
| 11 | **Resistencia a hechizos** (enemigos) | Las heridas de un hechizo se ignoran con 2+ (en lugar de 6+) | Sin probar |
| 12 | **Escudado** no protege de hechizos | Los hechizos no pasan por la Defensa extra de Escudado | Por diseño |
| 14 | **Solo se puede elegir el hechizo que cumple todos los requisitos** | La lista pone primero los disponibles; los demás salen atenuados con el motivo (faltan fichas, ya intentado, sin enemigos o aliados a rango/vista) y sin botón | Probado |
| 13 | Los hechizos dependen de la **raza** | Lista por raza (48 listas, 276 hechizos de `docs/age-of-fantasy-quest-heroes.md`). Si no la reconoce, avisa en vez de inventar | Probado (Hombres bestia) |

## Cómo se consiguen más fichas de hechizo (según las reglas y tu documento)

Core Rules: las fichas solo vienen de Lanzador(X) (X por ronda, máximo 6). El documento de héroes añade estas vías, todas implementadas:

| # | Vía | Cómo funciona en el juego | Estado |
|---|---|---|---|
| 15 | **Recuperación natural** (Druida, habilidad, Vol) | Acción de habilidad con tirada de Voluntad: +1 ficha y pierde D3 de poder | Probado con Preparación (mismo efecto) |
| 16 | **Preparación** (Mago, habilidad, Vol) | Igual que la anterior | Probado |
| 17 | **Foco del mago** (Mago, dote, una vez por partida) | Al activarse, sin acción ni tirada: +1 ficha | Sin probar |
| 18 | **Truco diabólico** (Brujo, habilidad, Fue) | Hasta el final de la ronda, la próxima vez que destruya una unidad enemiga: +1 ficha y pierde 1 de poder | Sin probar |
| 19 | **Poción de maná / Gran poción de maná** (tienda, consumible) | Acción de habilidad: +1 / +2 fichas. Las de la ficha importada pasan al inventario al desplegar | Probado (Gran poción: 1 → 3 fichas) |
| 20 | **Lanzador +1** al subir de nivel (5, 9 y 13) | Es un cambio de la hoja del héroe, no una acción en partida | No aplica en partida |

Siempre con el tope de 6 fichas: si se pasa, lo que sobra se pierde y el registro lo dice.

## Lo que NO está automatizado (se anota «Efecto a mano» en el registro)

- Hechizos que dan **reglas «una vez»** o penalizadores a aliados/enemigos (unas 130 de los 276): se paga, se tira y, si surte efecto, el registro lo anota y se aplica a mano.
- Reglas especiales de los impactos de hechizo (Diezmar, Desintegrar, Oleada…): se aplican los impactos y la PA, no esas reglas.
- Que un héroe **gaste poder para restar −1** a un Lanzador enemigo ya existía; aquí no cambia.

## Qué probar tú (guía rápida)

1. [ ] Un héroe Lanzador: ¿sale «Lanzar hechizo» en sus acciones y «Fichas de hechizo» en su ficha?
2. [ ] Uno que no lo es: ¿no sale el botón?
3. [ ] Lanzar un hechizo de impactos a un enemigo a la vista: ¿se tiran los dados y baja la vida?
4. [ ] Gastar fichas o poder extra: ¿baja el número necesario y se descuentan?
5. [ ] Intentar el mismo hechizo otra vez en la misma activación: ¿queda bloqueado?
6. [ ] Atacar y luego intentar lanzar: ¿lo impide?
7. [ ] Pasar de ronda: ¿se recuperan las fichas (máximo 6)?
8. [ ] Un hechizo de buff: ¿el registro dice «Efecto a mano» con el texto?
