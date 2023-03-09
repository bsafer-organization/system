import { describe, it } from '@jest/globals'
import { screen, render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Popover } from '../../core/Poppover'
import userEvent from '@testing-library/user-event'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('Components: Popover', () => {
  it('should render the component', async () => {
    render(
      <div className="flex justify-center items-center gap-10 w-full h-full">
        <Popover.Root>
          <Popover.Trigger>
            <div>Popover trigger</div>
          </Popover.Trigger>
          <Popover.Content
            arrow={{ color: 'assistant-blue-dark', height: 10, width: 10 }}
          >
            <div className="flex justify-center items-center">
              <p>Popover content</p>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )

    expect(screen.getByTestId('popover_trigger__testid')).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(screen.getByTestId('popover_trigger__testid'))
    })

    expect(screen.getByTestId('popover_content__testid')).toBeInTheDocument()
  })

  it('should render the component without arrow prop', async () => {
    render(
      <div className="flex justify-center items-center gap-10 w-full h-full">
        <Popover.Root>
          <Popover.Trigger>
            <div>Popover trigger</div>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex justify-center items-center">
              <p>Popover content</p>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )

    expect(screen.getByTestId('popover_trigger__testid')).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(screen.getByTestId('popover_trigger__testid'))
    })

    expect(screen.getByTestId('popover_content__testid')).toBeInTheDocument()
  })

  it('should render the component with anchor component', async () => {
    render(
      <div className="flex justify-center items-center gap-10 w-full h-full">
        <Popover.Root>
          <Popover.Trigger>
            <div>Popover trigger</div>
          </Popover.Trigger>
          <Popover.Anchor>
            <div className="w-5 h-5 bg-black">Popover anchor</div>
          </Popover.Anchor>
          <Popover.Content
            arrow={{ color: 'assistant-blue-dark', height: 10, width: 10 }}
          >
            <div className="flex justify-center items-center">
              <p>Popover content</p>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )

    expect(screen.getByTestId('popover_trigger__testid')).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(screen.getByTestId('popover_trigger__testid'))
    })

    expect(screen.getByTestId('popover_anchor__testid')).toBeInTheDocument()

    expect(screen.getByTestId('popover_content__testid')).toBeInTheDocument()
  })
})
