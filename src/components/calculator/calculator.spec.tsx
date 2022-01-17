import { fireEvent, render, screen } from "@testing-library/react"
import { Calculator } from "../../components"

describe('Calculator', () => {
  test('Should be start with display clean', () => {
    render(<Calculator />)

    const display = screen.getByTestId('display')

    expect(display).toBeEmptyDOMElement()
  })

  test('Should show 7 in display when click button 7', () => {
    render(<Calculator />)
    const btn7 = screen.getByTestId('btn-7')
    const display = screen.getByTestId('display')

    fireEvent.click(btn7)

    expect(display).toHaveTextContent('7')
  })
})