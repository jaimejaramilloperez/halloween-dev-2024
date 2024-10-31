import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { createMagicPotion } from './index.js'

describe('Challenge #01 - 🧙‍♀️ Create the perfect potion', () => {
  it('Test #01 - Returns an array', () => {
    const result = createMagicPotion([4, 5, 6, 2], 8)
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - createMagicPotion([4, 5, 6, 2], 8)', () => {
    const result = createMagicPotion([4, 5, 6, 2], 8)
    assert.deepStrictEqual(result, [2, 3])
  })

  it('Test #03 - createMagicPotion([1, 2, 3, 4], 9)', () => {
    const result = createMagicPotion([1, 2, 3, 4], 9)
    assert.strictEqual(result, undefined)
  })

  it('Test #04 - createMagicPotion([13, 5, 6, 2], 8)', () => {
    const result = createMagicPotion([13, 5, 6, 2], 8)
    assert.deepStrictEqual(result, [2, 3])
  })

  it('Test #05 - createMagicPotion([11, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([11, 3, 7, 5], 10)
    assert.deepStrictEqual(result, [1, 2])
  })

  it('Test #06 - createMagicPotion([4, 3, 2, 3, 4], 6)', () => {
    const result = createMagicPotion([4, 3, 2, 3, 4], 6)
    assert.deepStrictEqual(result, [0, 2])
  })

  it('Test #07 - createMagicPotion([0, 0, -2, 3], 2)', () => {
    const result = createMagicPotion([0, 0, -2, 3], 2)
    assert.strictEqual(result, undefined)
  })

  it('Test #08 - createMagicPotion([10, 5, 2, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10)
    assert.deepStrictEqual(result, [3, 4])
  })

  it('Test #09 - createMagicPotion([1, 2, 3, 4, 5], 8)', () => {
    const result = createMagicPotion([1, 2, 3, 4, 5], 8)
    assert.deepStrictEqual(result, [2, 4])
  })

  it('Test #10 - createMagicPotion([5, 1, 4, 6, 2], 9)', () => {
    const result = createMagicPotion([5, 1, 4, 6, 2], 9)
    assert.deepStrictEqual(result, [0, 2])
  })

  it('Test #11 - createMagicPotion([1, -2, 3, -4, 5], -1)', () => {
    const result = createMagicPotion([1, -2, 3, -4, 5], -1)
    assert.deepStrictEqual(result, [0, 1])
  })

  it('Test #12 - createMagicPotion([10, 20, 30, 40], 50)', () => {
    const result = createMagicPotion([10, 20, 30, 40], 50)
    assert.deepStrictEqual(result, [1, 2])
  })

  it('Test #13 - createMagicPotion([], 10)', () => {
    const result = createMagicPotion([], 10)
    assert.strictEqual(result, undefined)
  })
})
