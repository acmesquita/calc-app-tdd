import { Calculate } from '../models/calculate'

describe('Calculate', () => {
  test('Should return 2 when call evaluate with expression 1 + 1', () => {
    const calculate = new Calculate()
    const expression = "1 + 1"

    const result = calculate.evaluate(expression)

    expect(result).toBe("2")
  })

  test('Should return 6 when call evaluate with expression 2 * 3', () => {
    const calculate = new Calculate()
    const expression = "2 * 3"

    const result = calculate.evaluate(expression)

    expect(result).toBe("6")
  })

  test('Should return 5 when call evaluate with expression 10 - 5', () => {
    const calculate = new Calculate()
    const expression = "10 - 5"

    const result = calculate.evaluate(expression)

    expect(result).toBe("5")
  })

  test('Should return Infinity when call evaluate with expression 10 / 0', () => {
    const calculate = new Calculate()
    const expression = "10 / 0"

    const result = calculate.evaluate(expression)

    expect(result).toBe("Infinity")
  })

  test('Should return 0.333333333333 when call evaluate with expression 1 / 3', () => {
    const calculate = new Calculate()
    const expression = "1 / 3"

    const result = calculate.evaluate(expression)

    expect(result).toBe("0.333333333333")
    expect(result).toHaveLength(14)
  })

  test('Should return 3.6 when call evaluate with expression 5.6 - 2', () => {
    const calculate = new Calculate()
    const expression = '5.6 - 2'

    const result = calculate.evaluate(expression)

    expect(result).toBe('3.6')

  })
  
  test.todo('Should return 3 when call evaluate with expression 1 + 1 + 1')
  test.todo('Should return 7 when call evaluate with expression 1 + 2 * 3')
})