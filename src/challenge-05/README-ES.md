# ▲ Terror en Silent Hill

You are trapped in **Silent Hill**, in a square room of size _n x n_ and the feared _Pyramid Head_ (`▲`) is somewhere in the room, moving towards you (`T`).

You cannot move, and _Pyramid Head_ moves one cell per turn, **in any of the four cardinal directions** (up, down, left, right), but always chooses the shortest path to your position. Your goal is to determine if _Pyramid Head_ can reach you.

The room is represented by an _n x n_ matrix:

- `T`: Your position (where you are trapped).
- `▲`: The initial position of Pyramid Head.
- `.`: Empty spaces where Pyramid Head can move.
- `#`: Walls that Pyramid Head cannot pass through.

Write a function to determine if _Pyramid Head_ will be able to reach you. If _Pyramid Head_ can reach you, return the number of steps it takes to achieve this, if it cannot reach you then return `-1`.

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
