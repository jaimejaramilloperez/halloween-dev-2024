/**
 * @param {string[][]} room
 * @returns {number}
 */
export function escapePyramidHead (room) {
  const rows = room.length
  const columns = room[0].length
  let start = null
  let target = null

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (room[i][j] === '▲') {
        start = [i, j]
      } else if (room[i][j] === 'T') {
        target = [i, j]
      }
    }
  }

  const visited = new Set()
  const queue = [{ x: start[0], y: start[1], steps: 0 }]
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while (queue.length > 0) {
    const { x, y, steps } = queue.shift()

    if (x === target[0] && y === target[1]) return steps
    visited.add(`${x},${y}`)

    for (const [dx, dy] of directions) {
      const newX = x + dx
      const newY = y + dy

      if (
        newX >= 0 && newX < rows &&
        newY >= 0 && newY < columns &&
        !visited.has(`${newX},${newY}`) &&
        room[newX][newY] !== '#'
      ) {
        queue.push({ x: newX, y: newY, steps: steps + 1 })
      }
    }
  }

  return -1
}
