# Coste en puntos de los héroes de el juego base (el creador de héroes)

Medido el 2026-11-20 en creador de héroes (web) (versión de los libros 3.6.0), creando héroes de prueba y cambiando una sola elección cada vez. No hay documentación oficial: OPR solo dice que el coste «se calcula automáticamente». Los héroes de prueba se borraron después.

## La fórmula (sacada del código de la web y comprobada con las pruebas)

```
puntos = coste de la figura en el libro de ejército (con su Calidad y su Tough)
       + 15 × Poder
       + 5 × número de habilidades
       + 5 × (21 − mín(Fue + Des + Vol, 16))
       + mejoras de la tienda (armaduras, armas, pociones…)
```

Se redondea a múltiplos de 5. Fue, Des y Vol cuentan como el número que hay que sacar (6+ = 6), así que mejorar sube el coste.

Al crear un héroe sin clase ni nada (Calidad 5+, Poder 3, Fue/Des/Vol 6+) cuesta **la figura + 70** (45 del Poder y 25 de las características):

| Figura (enanos) | En el libro | Héroe base |
|---|---|---|
| Dwarf Champion (Tough 9, A4) | 65 | 135 |
| Berserker Lord (Tough 9, A4, Furious, Melee Slayer) | 70 | 140 |
| Steam-Suit Champion (Tough 18, A8) | — | 205 |

## Qué sube los puntos y cuánto

| Elección | Puntos | Notas |
|---|---|---|
| **Subir de nivel** (solo el nivel) | **0** | Lo que cuesta es lo que eliges en cada nivel. |
| XP y oro | 0 | |
| Dote de clase | 0 | |
| **Poder +1** | **+15** | Siempre igual: +2 = 30, +3 = 45. Lo más caro. |
| **1 habilidad** (o hueco de habilidad) | **+5** | 2 habilidades = +10. Aprender una en un hueco que ya tenías no cuenta dos veces. |
| **Fue / Des / Vol +1** | **0 las dos primeras, +5 cada una después** | Por el tope de 16: de 18 (6+6+6) hasta 16 no cuesta; cada punto por debajo de 16, +5. Da igual en qué característica. |
| **Calidad +1** | Depende de la figura | Dwarf Champion: 5+→4+ 0, →3+ +10, →2+ +30, →1+ +40. Berserker 5+→3+ +20; Steam-Suit 5+→3+ +30. Sale del coste de la figura recalculado (más caro cuantos más ataques). |
| **Calidad −1** (opción del nivel) | −5 | En el Dwarf Champion. |
| **Tough +1** | Depende de la figura | Dwarf Champion +5 por punto (+60 por +9); Berserker +20 por +3; Steam-Suit +25 por +3. |
| **Lanzador(1)** | +10 | |
| Armadura ligera (Defensa +1) | +10 | Compra en la tienda. |
| Pociones | +15 o +20 las dos | Health Potion y Curing Potion juntas; varía por el redondeo (una sola sale +10 o +0). |

## Ejemplo completo

Dwarf Champion Guerrero de nivel 1 (Calidad +1, 1 habilidad, Poder +1, Fuerza +2, armadura ligera y dos pociones):
135 + 0 (Calidad 4+) + 5 (habilidad) + 15 (Poder) + 0 (Fuerza +2) + 10 (armadura) + 20 (pociones) = **185 pts**, lo mismo que da el creador de héroes.

## Para la campaña

- El tamaño de las oleadas sale de los puntos de los héroes, así que lo que más las agranda es el **Poder** (+15) y la **Calidad/Tough** en figuras fuertes. Subir de nivel sin elegir nada no las cambia.
- Las dos primeras mejoras de Fue/Des/Vol son gratis en puntos.
