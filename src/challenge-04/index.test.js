import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findTheKiller } from './index.js'

describe('Challenge #04 - 🔪 Find the killer', () => {
  it('Test #01 - Returns a string', () => {
    const result = findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])
    assert.equal(typeof result, 'string')
  })

  it('Test #02 - findTheKiller("d~~~~~a", ["Dracula", "Freddy Krueger", "Jason Voorhees", "Michael Myers"])', () => {
    const result = findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])
    assert.strictEqual(result, 'Dracula')
  })

  it('Test #03 - findTheKiller("~r~dd~", ["Freddy", "Freddier", "Fredderic"])', () => {
    const result = findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic'])
    assert.strictEqual(result, 'Freddy,Freddier,Fredderic')
  })

  it('Test #04 - findTheKiller("~r~dd$", ["Freddy", "Freddier", "Fredderic"])', () => {
    const result = findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic'])
    assert.strictEqual(result, '')
  })

  it('Test #05 - findTheKiller("mi~~def", ["Midudev", "Midu", "Madeval"])', () => {
    const result = findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval'])
    assert.strictEqual(result, '')
  })

  it('Test #06 - findTheKiller("~~~~~~", ["Pennywise", "Leatherface", "Agatha"])', () => {
    const result = findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha'])
    assert.strictEqual(result, 'Pennywise,Leatherface,Agatha')
  })

  it('Test #07 - findTheKiller("~~~~~~$", ["Pennywise", "Leatherface", "Agatha"])', () => {
    const result = findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'])
    assert.strictEqual(result, 'Agatha')
  })

  it('Test #08 - findTheKiller("s~v~r~", ["Severus Snape", "Sirius Black", "Salazar Slytherin"])', () => {
    const result = findTheKiller('s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin'])
    assert.strictEqual(result, 'Severus Snape')
  })

  it('Test #09 - findTheKiller("~~~~~y$", ["Chucky", "Tiffany", "Freddy", "Mickey"])', () => {
    const result = findTheKiller('~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey'])
    assert.strictEqual(result, 'Chucky,Freddy,Mickey')
  })
})
