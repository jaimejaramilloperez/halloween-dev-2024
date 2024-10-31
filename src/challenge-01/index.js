/**
 * @param {number[]} potions
 * @param {number} target
 * @returns {number[] | undefined}
 */
export function createMagicPotion (potions, target) {
  if (potions.length === 0) return undefined
  const powers = new Map()

  for (let i = 0; i < potions.length; i++) {
    const neededPower = target - potions[i]

    if (powers.has(neededPower)) {
      const index = powers.get(neededPower)
      return [index, i]
    }

    powers.set(potions[i], i)
  }

  return undefined
}
