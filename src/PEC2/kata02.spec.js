import par_o_impar from './kata02'

describe('Kata #1: par_o_impar', () => {
  test('de 0 es par', () => {
    expect(par_o_impar(0)).toBe('Par')
  })
  test('de 1 es impar', () => {
    expect(par_o_impar(1)).toBe('Impar')
  })
  test('de 2 es par', () => {
    expect(par_o_impar(2)).toBe('Par')
  })
})
