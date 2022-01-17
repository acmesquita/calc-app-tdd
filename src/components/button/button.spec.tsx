import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from '../../components'

describe('Button Component', () => {
  test('Should be show label with same name when initilize component', () => {
    render(<Button label="label" onClick={() => {}}/>)

    const btn = screen.getByTestId('btn-label')

    expect(btn).toHaveTextContent('label')
  })

  test('Should be call onClick with the same label is provider', () => {
    const handleClick = jest.fn()
    render(<Button label="label" onClick={handleClick} />)

    const btn = screen.getByTestId('btn-label')
    fireEvent.click(btn)

    expect(handleClick).toHaveBeenCalledWith('label')
  })
})