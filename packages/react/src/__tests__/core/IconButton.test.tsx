import { describe, it } from '@jest/globals'
import {
  screen,
  render,
  renderHook,
  act,
  waitFor
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { IconButton } from '../../core/IconButton'
import { Add, Minus } from 'iconsax-react'
import React from 'react'
import userEvent from '@testing-library/user-event'

describe('Components: IconButton', () => {
  it('should render the component', () => {
    render(
      <IconButton>
        <Add />
      </IconButton>
    )

    expect(screen.getByTestId('icon_button__testid')).toBeInTheDocument()
  })

  it('should render the component and execute some click event', async () => {
    const IconComponent = renderHook(() => {
      const [icon, setIcon] = React.useState<JSX.Element>(
        <Add data-testid="add_icon" />
      )

      return { icon, setIcon }
    })

    const { rerender } = render(
      <IconButton
        onClick={() => {
          IconComponent.result.current.setIcon(
            <Minus data-testid="minus_icon" />
          )
        }}
      >
        {IconComponent.result.current.icon}
      </IconButton>
    )

    const buttonElement = screen.getByTestId('icon_button__testid')

    expect(buttonElement).toBeInTheDocument()
    expect(screen.getByTestId('add_icon')).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(buttonElement)
    })

    rerender(<IconButton>{IconComponent.result.current.icon}</IconButton>)

    await waitFor(() => {
      expect(screen.getByTestId('minus_icon')).toBeInTheDocument()
    })
  })
})
