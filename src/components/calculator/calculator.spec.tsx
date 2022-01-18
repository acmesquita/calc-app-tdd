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

  test('Should show 78 in display when click button 7 and button 8', () => {
    render(<Calculator />)
    const btn7 = screen.getByTestId('btn-7')
    const btn8 = screen.getByTestId('btn-8')
    const display = screen.getByTestId('display')

    fireEvent.click(btn7)
    fireEvent.click(btn8)

    expect(display).toHaveTextContent('78')
  })

  test('Should show just 14 caracters in display', () => {
    render(<Calculator />)
    const btn7 = screen.getByTestId('btn-7')
    const display = screen.getByTestId('display')

    for (let index = 0; index < 15; index++) {
      fireEvent.click(btn7)
    }

    expect(display.textContent).toHaveLength(14)
  })

  test('Should show in display 1 + 1 and when click equal button', () => {
    render(<Calculator />)
    const btn1 = screen.getByTestId('btn-1')
    const btnPlus = screen.getByTestId('btn-+')
    const btnEqual = screen.getByTestId('btn-=')
    const display = screen.getByTestId('display')

    fireEvent.click(btn1)
    fireEvent.click(btnPlus)
    fireEvent.click(btn1)
    fireEvent.click(btnEqual)

    expect(display).toHaveTextContent("2")
  })

  test('Should clean display when click AC button', () => {
    render(<Calculator />)
    const btn1 = screen.getByTestId('btn-1')
    const btnAC = screen.getByTestId('btn-AC')
    const display = screen.getByTestId('display')

    fireEvent.click(btn1)
    fireEvent.click(btn1)
    fireEvent.click(btn1)
    fireEvent.click(btn1)
    fireEvent.click(btn1)
    fireEvent.click(btnAC)

    expect(display).toBeEmptyDOMElement()
  })

  test.todo('Should in display show 5,6 - 2 and user click in button equal')
  test.todo('Should in display show 5 * 6 and user click in button equal')
  test.todo('Should in display show 1 / 3 and user click in button equal')
  test.todo('Should in display show none value and user click in button ., to be show 0.')
  test.todo('Should in display show 0 and user click in button .')
})