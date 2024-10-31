/**
 * @param {string[][]} room
 * @returns {number}
 */
export function escapePyramidHead (room) {
  const n = room.length
  const m = room[0].length
  let start = null
  let target = null

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (room[i][j] === '▲') {
        start = [i, j]
      } else if (room[i][j] === 'T') {
        target = [i, j]
      }
    }
  }

  const visited = new Set(`${start[0]},${start[1]}`)
  const queue = [{ x: start[0], y: start[1], steps: 0 }]
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while (queue.length > 0) {
    const { x, y, steps } = queue.shift()

    if (x === target[0] && y === target[1]) return steps
    visited.add(`${x},${y}`)

    for (const [dx, dy] of directions) {
      const newx = x + dx
      const newy = y + dy

      if (
        newx >= 0 && newx < n &&
        newy >= 0 && newy < m &&
        !visited.has(`${newx},${newy}`)
      ) {
        if (room[newx][newy] !== '#') {
          queue.push({ x: newx, y: newy, steps: steps + 1 })
        }
      }
    }
  }

  return -1
}
