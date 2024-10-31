import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { escapePyramidHead } from './index.js'

describe('Challenge #05 - ▲ Terror on Pyramid Head', () => {
  it('Test #01 - Returns a number', () => {
    const result = escapePyramidHead([
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#']
    ])

    assert.equal(typeof result, 'number')
  })

  it(`Test #02 - escapePyramidHead([
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#']
    ])`, () => {
    const result = escapePyramidHead([
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#']
    ])

    assert.strictEqual(result, 2)
  })

  it(`Test #03 - escapePyramidHead([
      ['.', '.', '#', '.', '▲'],
      ['#', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '#'],
      ['T', '.', '.', '.', '.']
    ])`, () => {
    const result = escapePyramidHead([
      ['.', '.', '#', '.', '▲'],
      ['#', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '#'],
      ['T', '.', '.', '.', '.']
    ])

    assert.strictEqual(result, 8)
  })

  it(`Test #04 - escapePyramidHead([
      ['#', '#', '#'],
      ['▲', '.', '#'],
      ['.', '#', 'T']
    ])`, () => {
    const result = escapePyramidHead([
      ['#', '#', '#'],
      ['▲', '.', '#'],
      ['.', '#', 'T']
    ])

    assert.strictEqual(result, -1)
  })

  it(`Test #05 - escapePyramidHead([
      ['#', '#'],
      ['▲', 'T']
    ])`, () => {
    const result = escapePyramidHead([
      ['#', '#'],
      ['▲', 'T']
    ])

    assert.strictEqual(result, 1)
  })

  it(`Test #06 - escapePyramidHead([
      ['.', '.', '.'],
      ['T', '▲', '.'],
      ['.', '.', '.']
    ])`, () => {
    const result = escapePyramidHead([
      ['.', '.', '.'],
      ['T', '▲', '.'],
      ['.', '.', '.']
    ])

    assert.strictEqual(result, 1)
  })
})
