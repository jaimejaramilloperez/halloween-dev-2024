/**
 * @param {number[][]} dream
 * @returns {number}
 */
export function findSafestPath (dream) {
  const n = dream.length
  const m = dream[0].length
  const costs = Array.from({ length: n }, () => new Array(m).fill(0))

  costs[0][0] = dream[0][0]

  for (let i = 1; i < m; i++) {
    costs[0][i] = costs[0][i - 1] + dream[0][i]
  }

  for (let j = 1; j < n; j++) {
    costs[j][0] = costs[j - 1][0] + dream[j][0]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const fromTop = costs[i - 1][j]
      const fromLeft = costs[i][j - 1]
      costs[i][j] = Math.min(fromTop, fromLeft) + dream[i][j]
    }
  }

  return costs[n - 1][m - 1]
}
