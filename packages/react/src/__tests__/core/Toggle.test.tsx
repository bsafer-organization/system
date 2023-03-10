import { describe, it } from '@jest/globals'
import { screen, render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Toggle } from '../../core/Toggle'
import userEvent from '@testing-library/user-event'

describe('Components: Toggle', () => {
  it('should render the component', () => {
    render(<Toggle />)

    expect(screen.getByTestId('toggle__testid')).toBeInTheDocument()
  })

  it('should render the component with text', () => {
    render(<Toggle text="Toggle text test" />)

    expect(screen.getByTestId('toggle__testid')).toBeInTheDocument()

    expect(screen.getByTestId('toggle_text__testid')).toBeInTheDocument()
    expect(screen.getByText(/Toggle text test/i)).toBeInTheDocument()
  })

  it('should render the component and execute toggle action', async () => {
    render(<Toggle />)

    expect(screen.getByTestId('toggle__testid')).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(screen.getByTestId('toggle__testid'))
    })

    expect(
      screen.getByTestId('toggle__testid').getAttribute('data-state')
    ).toBe('checked')
  })
})
