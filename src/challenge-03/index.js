/**
 * @param {number[][]} dream
 * @returns {number}
 */
export function findSafestPath (dream) {
  const rows = dream.length
  const columns = dream[0].length
  const dangerLevels = Array.from({ length: rows }, () => new Array(columns).fill(0))

  dangerLevels[0][0] = dream[0][0]

  for (let i = 1; i < columns; i++) {
    dangerLevels[0][i] = dangerLevels[0][i - 1] + dream[0][i]
  }

  for (let i = 1; i < rows; i++) {
    dangerLevels[i][0] = dangerLevels[i - 1][0] + dream[i][0]

    for (let j = 1; j < columns; j++) {
      const fromTop = dangerLevels[i - 1][j]
      const fromLeft = dangerLevels[i][j - 1]
      dangerLevels[i][j] = Math.min(fromTop, fromLeft) + dream[i][j]
    }
  }

  return dangerLevels[rows - 1][columns - 1]
}
