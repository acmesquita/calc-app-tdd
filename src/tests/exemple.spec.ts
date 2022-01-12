export class Calculadora {
  static somar(value1: number, value2: number): number {
    return value1 + value2
  }
}

describe('Calculadora', () => {
  xtest('Deve retornar 3 quando passar 1 e 2 para a função somar', () => {
    const um = 1
    const dois = 2

    const result = Calculadora.somar(um, dois)

    expect(result).toBe(3)
  })

  xtest('Deve retornar 8 quando passar 5 e 3 para a função somar', () => {
    const cinco = 5
    const tres = 3

    const result = Calculadora.somar(cinco, tres)

    expect(result).toBe(8)
  })

  xtest('Não deve retornar 3 quando passar 1 e 1 para a função somar', () => {
    const um = 1

    const result = Calculadora.somar(um, um)

    expect(result).not.toBe(3)
  })
})
