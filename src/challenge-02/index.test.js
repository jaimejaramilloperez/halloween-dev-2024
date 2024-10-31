import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { battleHorde } from './index.js'

describe('Challenge #02 - 🧟 Zombie horde', () => {
  it('Test #01 - Returns a string', () => {
    const result = battleHorde('242', '334')
    assert.equal(typeof result, 'string')
  })

  it('Test #02 - battleHorde("242", "334")', () => {
    const result = battleHorde('242', '334')
    assert.strictEqual(result, '2h')
  })

  it('Test #03 - battleHorde("444", "282")', () => {
    const result = battleHorde('444', '282')
    assert.strictEqual(result, 'x')
  })

  it('Test #04 - battleHorde("555", "666")', () => {
    const result = battleHorde('555', '666')
    assert.strictEqual(result, '3h')
  })

  it('Test #05 - battleHorde("321", "123")', () => {
    const result = battleHorde('321', '123')
    assert.strictEqual(result, 'x')
  })

  it('Test #06 - battleHorde("4598", "7682")', () => {
    const result = battleHorde('4598', '7682')
    assert.strictEqual(result, '3z')
  })

  it('Test #07 - battleHorde("8989898999", "7779998811")', () => {
    const result = battleHorde('8989898999', '7779998811')
    assert.strictEqual(result, '20z')
  })

  it('Test #08 - battleHorde("57685849323", "98765438965")', () => {
    const result = battleHorde('57685849323', '98765438965')
    assert.strictEqual(result, '10h')
  })
})
