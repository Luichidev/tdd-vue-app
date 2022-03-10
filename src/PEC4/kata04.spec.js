import repiteString from './kata04'

describe('Kata #4: repiteString', () => {
  test('de ("JavaScript", 0) devuelve ""', () => {
    expect(repiteString('JavaScript', 0)).toBe("")
  })
  test('de ("miau", 1) devuelve "miau"', () => {
    expect(repiteString('miau', 1)).toBe("miau")
  })
  test('de ("hola", 3) devuelve "holaholahola"', () => {
    expect(repiteString("hola", 3)).toBe("holaholahola")
  })
  test('de ("?", 10) devuelve "??????????"', () => {
    expect(repiteString("?", 10)).toBe("??????????")
  })
})
