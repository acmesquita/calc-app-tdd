/* eslint-disable no-eval */
export class Calculate {
  
  evaluate(expression: string): string {
    const result = parseFloat(eval(expression))
       
    return this.formatResult(result)
  }
  
  private formatResult(value: number): string {
    const MAX_LENGTH = 14
    const valueFixed = value.valueOf()
    const valueString = valueFixed.toString()
    const commaPosition = valueString.indexOf('.')
    const firstValueAfterComma = commaPosition + 1
    const secondValueAfterComma = commaPosition + 2

    if(commaPosition !== -1 && (valueString.charAt(firstValueAfterComma) === valueString.charAt(secondValueAfterComma))) {
      return valueString.substring(0, MAX_LENGTH) 
    } else if (commaPosition !== -1) {
      return parseFloat(valueString).toFixed(1)
    } else {
      return valueString
    }
  }
}
