import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findSafestPath } from './index.js'

describe('Challenge #03 - 🛌 Escape from Freddy\'s nightmare', () => {
  it('Test #01 - Returns a number', () => {
    const result = findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
    assert.equal(typeof result, 'number')
  })

  it('Test #02 - findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])', () => {
    const result = findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
    assert.strictEqual(result, 7)
  })

  it('Test #03 - findSafestPath([[5, 9], [4, 2]])', () => {
    const result = findSafestPath([[5, 9], [4, 2]])
    assert.strictEqual(result, 11)
  })

  it('Test #04 - findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]])', () => {
    const result = findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
    assert.strictEqual(result, 5)
  })

  it('Test #05 - findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]])', () => {
    const result = findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]])
    assert.strictEqual(result, 10)
  })

  it('Test #06 - findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]])', () => {
    const result = findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]])
    assert.strictEqual(result, 20)
  })

  it('Test #07 - findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
    const result = findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    assert.strictEqual(result, 21)
  })
})
