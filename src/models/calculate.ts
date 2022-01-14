/* eslint-disable no-eval */
export class Calculate {
  
  evaluate(expression: string): string {
    const result = eval(expression)
       
    return this.formatResult(result)
  }
  
  private formatResult(value: number): string {
    const MAX_LENGTH = 14
    const valueString = value.toString()
    const valueLimited = valueString.substring(0, MAX_LENGTH)
    return valueLimited;
  }
}
