// import '@testing-library/dom'
import '@testing-library/jest-dom'
import React from 'react'
import { screen, render, renderHook, act } from '@testing-library/react'
import { Dialog } from '../../core/Dialog'
import { TickCircle } from 'iconsax-react'
import { describe, it } from '@jest/globals'
import userEvent from '@testing-library/user-event'

describe('Components: Dialog', () => {
  it('should render the component with main or required props', async () => {
    render(
      <Dialog
        isActionDialog
        openMenu={true}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()
    expect(screen.getByTestId('dialog_icon__testid')).toBeInTheDocument()

    expect(screen.getByTestId('dialog_title__testid')).toBeInTheDocument()
    expect(screen.getByText(/Dialog title test/i)).toBeInTheDocument()

    expect(screen.getByTestId('dialog_subtitle__testid')).toBeInTheDocument()
    expect(screen.getByText(/Dialog subtitle test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_success_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog success button test/i)).toBeInTheDocument()
  })

  it('should render the component with main or required props and cancel button', async () => {
    render(
      <Dialog
        openMenu={true}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        cancelButtonText="Dialog cancel button test"
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()
    expect(screen.getByTestId('dialog_icon__testid')).toBeInTheDocument()

    expect(screen.getByTestId('dialog_title__testid')).toBeInTheDocument()
    expect(screen.getByText(/Dialog title test/i)).toBeInTheDocument()

    expect(screen.getByTestId('dialog_subtitle__testid')).toBeInTheDocument()
    expect(screen.getByText(/Dialog subtitle test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_success_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog success button test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_cancel_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog cancel button test/i)).toBeInTheDocument()
  })

  it('should render the component with main or required props and success button icons', async () => {
    render(
      <Dialog
        openMenu={true}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        successButtonStartIcon={
          <TickCircle data-testid="dialog_success_button_start_icon__testid" />
        }
        successButtonEndIcon={
          <TickCircle data-testid="dialog_success_button_end_icon__testid" />
        }
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_success_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog success button test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_success_button_start_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('dialog_success_button_end_icon__testid')
    ).toBeInTheDocument()
  })

  it('should render the component with main or required props and cancel button icons', async () => {
    render(
      <Dialog
        openMenu={true}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        cancelButtonText="Dialog cancel button test"
        cancelButtonStartIcon={
          <TickCircle data-testid="dialog_cancel_button_start_icon__testid" />
        }
        cancelButtonEndIcon={
          <TickCircle data-testid="dialog_cancel_button_end_icon__testid" />
        }
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_cancel_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog cancel button test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_cancel_button_start_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('dialog_cancel_button_end_icon__testid')
    ).toBeInTheDocument()
  })

  it('should render the component with main or required props and change the focused button to cancel button', async () => {
    render(
      <Dialog
        openMenu={true}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        successButtonStartIcon={
          <TickCircle data-testid="dialog_success_button_start_icon__testid" />
        }
        successButtonEndIcon={
          <TickCircle data-testid="dialog_success_button_end_icon__testid" />
        }
        cancelButtonText="Dialog cancel button test"
        focusedButton="cancel"
        cancelButtonStartIcon={
          <TickCircle data-testid="dialog_cancel_button_start_icon__testid" />
        }
        cancelButtonEndIcon={
          <TickCircle data-testid="dialog_cancel_button_end_icon__testid" />
        }
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_success_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog success button test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_cancel_button__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/Dialog cancel button test/i)).toBeInTheDocument()

    expect(
      screen.getByTestId('dialog_cancel_as_focused_button__testid')
    ).toBeInTheDocument()

    // ICONS
    expect(
      screen.getByTestId('dialog_cancel_button_start_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('dialog_cancel_button_end_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('dialog_success_button_start_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('dialog_success_button_end_icon__testid')
    ).toBeInTheDocument()
  })

  it('should render the component and close it using close icon button', async () => {
    const { result } = renderHook(() => {
      const [openDialog, setOpenDialog] = React.useState<boolean>(true)

      return { openDialog, setOpenDialog }
    })

    const { rerender } = render(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        showCloseIconButton
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    const closeIconButtonComponent = screen.getByTestId(
      'dialog_close_icon_button__testid'
    )

    expect(closeIconButtonComponent).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(closeIconButtonComponent)
    })

    rerender(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        showCloseIconButton
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.queryByTestId('dialog_content__testid')).toBeNull()
  })

  it('should render the component and close it interacting outside the bounds of the component', async () => {
    const { result } = renderHook(() => {
      const [openDialog, setOpenDialog] = React.useState<boolean>(true)

      return { openDialog, setOpenDialog }
    })

    const { rerender } = render(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        closeOnClickOutside
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    const dialogOverlay = screen.getByTestId('dialog_overlay__testid')

    expect(dialogOverlay).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(dialogOverlay)
    })

    rerender(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        showCloseIconButton
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.queryByTestId('dialog_content__testid')).toBeNull()
  })

  it('should render the component and interact outside the bounds of the component, but keeping it open', async () => {
    const { result } = renderHook(() => {
      const [openDialog, setOpenDialog] = React.useState<boolean>(true)

      return { openDialog, setOpenDialog }
    })

    const { rerender } = render(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        closeOnClickOutside={false}
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()

    const dialogOverlay = screen.getByTestId('dialog_overlay__testid')

    expect(dialogOverlay).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(dialogOverlay)
    })

    rerender(
      <Dialog
        openMenu={result.current.openDialog}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Dialog success button test"
        onSuccessButtonClick={() => {
          console.log()
        }}
        showCloseIconButton
        onDismiss={() => result.current.setOpenDialog(false)}
      />
    )

    expect(screen.queryByTestId('dialog_content__testid')).toBeInTheDocument()
  })

  it('should not render the component (open state set to false)', async () => {
    render(
      <Dialog
        isActionDialog={false}
        title="Dialog title test"
        subtitle="Dialog subtitle test"
        icon={<TickCircle color="#05BA38" size={32} />}
      />
    )

    expect(screen.queryByTestId('dialog_content__testid')).toBeNull()
  })
})
