import React from 'react'
import { describe, it } from '@jest/globals'
import {
  screen,
  render,
  renderHook,
  waitFor,
  act
} from '@testing-library/react'
import { Button } from '../../core/Button'
import '@testing-library/jest-dom'
import { Add } from 'iconsax-react'
import userEvent from '@testing-library/user-event'

describe('Components: Button', () => {
  it('should render the component', () => {
    render(<Button>button</Button>)

    expect(screen.getByTestId('button__testid')).toBeInTheDocument()
    expect(screen.getByText(/button/i)).toBeInTheDocument()
  })

  it('should render the component with start icon', () => {
    render(
      <Button startIcon={<Add data-testid="button_start_icon__testid" />}>
        button with start icon
      </Button>
    )

    expect(screen.getByTestId('button__testid')).toBeInTheDocument()
    expect(screen.getByTestId('button_start_icon__testid')).toBeInTheDocument()
    expect(screen.getByText(/button with start icon/i)).toBeInTheDocument()
  })

  it('should render the component with end icon', () => {
    render(
      <Button endIcon={<Add data-testid="button_end_icon__testid" />}>
        button with end icon
      </Button>
    )

    expect(screen.getByTestId('button__testid')).toBeInTheDocument()
    expect(screen.getByTestId('button_end_icon__testid')).toBeInTheDocument()
    expect(screen.getByText(/button with end icon/i)).toBeInTheDocument()
  })

  it('should render the component and execute some click event', async () => {
    const { result } = renderHook(() => {
      const [buttonText, setButtonText] = React.useState('click event')

      return { buttonText, setButtonText }
    })

    const { rerender } = render(
      <Button
        onClick={() => {
          result.current.setButtonText('clicked')
        }}
      >
        {result.current.buttonText}
      </Button>
    )

    const buttonElement = screen.getByTestId('button__testid')

    expect(buttonElement).toBeInTheDocument()
    expect(screen.getByText(/click event/i)).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(buttonElement)
    })

    rerender(<Button>{result.current.buttonText}</Button>)

    await waitFor(() => {
      expect(screen.getByText(/clicked/i)).toBeInTheDocument()
    })
  })
})
