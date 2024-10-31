# ▲ Terror on Pyramid Head

Estás atrapado en **Silent Hill**, en una habitación cuadrada de tamaño _n x n_ y el temido _Pyramid Head_ (`▲`) está en algún lugar de la habitación, moviéndose hacia ti (`T`).

Tú no puedes moverte, y _Pyramid Head_ se mueve una celda por turno, **en cualquiera de las cuatro direcciones cardinales** (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. Tu objetivo es determinar si _Pyramid Head_ puede alcanzarte.

La habitación está representada por una matriz _n x n_:

- `T`: Tu posición (donde te encuentras atrapado).
- `▲`: La posición inicial de Pyramid Head.
- `.`: Espacios vacíos donde Pyramid Head puede moverse.
- `#`: Paredes que Pyramid Head no puede atravesar.

Escribe una función que determine si _Pyramid Head_ podrá alcanzarte. Si _Pyramid Head_ puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve `-1`.

```javascript
const room = [
  [".", ".", "#", ".", "▲"],
  ["#", ".", "#", ".", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", ".", "#"],
  ["T", ".", ".", ".", "."],
];

escapePyramidHead(room); // -> 8

const room2 = [
  ["T", ".", "#", "."],
  [".", ".", ".", "."],
  ["▲", ".", ".", "#"],
  [".", "#", "#", "#"],
];

escapePyramidHead(room2); // -> 2

const room3 = [
  ["#", "#", "#"],
  ["▲", ".", "#"],
  [".", "#", "T"],
];

escapePyramidHead(room3); // -> -1
```
