import { describe, it } from '@jest/globals'
import { screen, render, act, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from '../../core/Modal'
import userEvent from '@testing-library/user-event'
import React from 'react'

describe('Components: Modal', () => {
  it('should render the component using trigger', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger asChild>
          <button data-testid="modal_trigger__testid">Modal trigger</button>
        </Modal.Trigger>
        <Modal.Content position="center">
          <p>Modal</p>
        </Modal.Content>
      </Modal.Root>
    )

    await act(async () => {
      await userEvent.click(screen.getByTestId('modal_trigger__testid'))
    })

    expect(screen.getByTestId('modal_container__testid')).toBeInTheDocument()
  })

  it('should render the component using controller (state)', () => {
    render(
      <Modal.Root isOpen={true}>
        <Modal.Content
          dismissOptions={{
            backgroundColors: 'assistant-blue-dark',
            color: 'assistant-blue-light'
          }}
        >
          <div className="w-full h-full p-5 overflow-auto">
            <span>Title</span>
          </div>
        </Modal.Content>
      </Modal.Root>
    )

    expect(screen.getByTestId('modal_container__testid')).toBeInTheDocument()
  })

  it('should render the component, click on modal close button, interact with confirmation dialog and close modal', async () => {
    const { result } = renderHook(() => {
      const [openModal, setOpenModal] = React.useState<boolean>(true)

      return { openModal, setOpenModal }
    })

    const { rerender } = render(
      <Modal.Root isOpen={result.current.openModal}>
        <Modal.Content
          onDismiss={() => {
            result.current.setOpenModal(false)
          }}
          dismissConfirmation={{}}
          dismissOptions={{
            backgroundColors: 'assistant-blue-dark',
            color: 'assistant-blue-light'
          }}
        >
          <div className="w-full h-full p-5 overflow-auto">
            <span>Title</span>
          </div>
        </Modal.Content>
      </Modal.Root>
    )

    expect(screen.getByTestId('modal_container__testid')).toBeInTheDocument()

    const modalCloseButton = screen.getByTestId('modal_close_button__testid')

    expect(modalCloseButton).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(modalCloseButton)
    })

    const confirmationDialogSuccessButton = screen.getByTestId(
      'dialog_success_button__testid'
    )

    expect(confirmationDialogSuccessButton).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(confirmationDialogSuccessButton)
    })

    rerender(
      <Modal.Root isOpen={result.current.openModal}>
        <Modal.Content
          onDismiss={() => {
            result.current.setOpenModal(false)
          }}
          dismissConfirmation={{}}
          dismissOptions={{
            backgroundColors: 'assistant-blue-dark',
            color: 'assistant-blue-light'
          }}
        >
          <div className="w-full h-full p-5 overflow-auto">
            <span>Title</span>
          </div>
        </Modal.Content>
      </Modal.Root>
    )

    expect(screen.queryByTestId('modal_container__testid')).toBeNull()
  })

  it('should render the component, click on modal close button, interact with confirmation dialog and keep modal open', async () => {
    const { result } = renderHook(() => {
      const [openModal, setOpenModal] = React.useState<boolean>(true)

      return { openModal, setOpenModal }
    })

    const { rerender } = render(
      <Modal.Root isOpen={result.current.openModal}>
        <Modal.Content dismissConfirmation={{}}>
          <div className="w-full h-full p-5 overflow-auto">
            <span>Title</span>
          </div>
        </Modal.Content>
      </Modal.Root>
    )

    expect(screen.getByTestId('modal_container__testid')).toBeInTheDocument()

    const modalCloseButton = screen.getByTestId('modal_close_button__testid')

    expect(modalCloseButton).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(modalCloseButton)
    })

    const confirmationDialogCancelButton = screen.getByTestId(
      'dialog_cancel_button__testid'
    )

    expect(confirmationDialogCancelButton).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(confirmationDialogCancelButton)
    })

    rerender(
      <Modal.Root isOpen={result.current.openModal}>
        <Modal.Content dismissConfirmation={{}}>
          <div className="w-full h-full p-5 overflow-auto">
            <span>Title</span>
          </div>
        </Modal.Content>
      </Modal.Root>
    )

    expect(screen.queryByTestId('modal_container__testid')).toBeInTheDocument()
  })
})
