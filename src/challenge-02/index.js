/**
 * @param {string} zombies
 * @param {string} humans
 * @returns {string}
 */
export function battleHorde (zombies, humans) {
  let zombieTotal = 0
  let humanTotal = 0

  for (let i = 0; i < zombies.length; i++) {
    zombieTotal += +zombies[i]
    humanTotal += +humans[i]
  }

  if (zombieTotal > humanTotal) return zombieTotal - humanTotal + 'z'
  if (zombieTotal < humanTotal) return humanTotal - zombieTotal + 'h'
  return 'x'
}
