import { describe, it } from '@jest/globals'
import { screen, render, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tooltip } from '../../core/Tooltip'
import userEvent from '@testing-library/user-event'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('Components: Tooltip', () => {
  it('should render the component', async () => {
    render(
      <Tooltip text="Tooltip text test" position={{ sideOffset: 5 }}>
        <span>Tooltip trigger test</span>
      </Tooltip>
    )

    expect(screen.getByTestId('tooltip_trigger__testid')).toBeInTheDocument()
    expect(screen.getByText(/Tooltip trigger test/i)).toBeInTheDocument()

    await act(async () => {
      await userEvent.hover(screen.getByTestId('tooltip_trigger__testid'))
    })

    await waitFor(() => {
      expect(screen.getByTestId('tooltip_content__testid')).toBeInTheDocument()
    })
  })

  it('should render the component with custom arrow size', async () => {
    render(
      <Tooltip text="Tooltip text test" arrow={{ width: 10, height: 10 }}>
        <span>Tooltip trigger test</span>
      </Tooltip>
    )

    expect(screen.getByTestId('tooltip_trigger__testid')).toBeInTheDocument()
    expect(screen.getByText(/Tooltip trigger test/i)).toBeInTheDocument()

    await act(async () => {
      await userEvent.hover(screen.getByTestId('tooltip_trigger__testid'))
    })

    await waitFor(() => {
      expect(screen.getByTestId('tooltip_content__testid')).toBeInTheDocument()

      const tooltipArrowElement = screen.getByTestId('tooltip_arrow__testid')

      expect(tooltipArrowElement).toBeInTheDocument()
      expect(tooltipArrowElement.getAttribute('width')).toBe('10')
      expect(tooltipArrowElement.getAttribute('height')).toBe('10')
    })
  })
})
