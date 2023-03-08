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
        cancelButtonText="Dialog cancel button test"
        focusedButton="cancel"
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
  })

  // it('should render the component with main or required props and not being action dialog', async () => {
  //   render(
  //     <Dialog
  //       openMenu={true}
  //       title="Dialog title test"
  //       subtitle="Dialog subtitle test"
  //       icon={<TickCircle color="#05BA38" size={32} />}
  //       isActionDialog={false}
  //     />
  //   )

  //   expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()
  // })

  // it('should render the component', () => {
  //   const { result } = renderHook(() => {
  //     const [open, setOpen] = React.useState(false)

  //     return { open, setOpen }
  //   })

  //   const { rerender } = render(
  //     <Dialog
  //       openMenu={false}
  //       title="Cadeado excluído com sucesso!"
  //       icon={<TickCircle color="#05BA38" size={32} />}
  //       successButtonText="Entendi"
  //       onSuccessButtonClick={() => {
  //         console.log('onSuccessButtonClick')
  //       }}
  //     />
  //   )

  //   result.current.setOpen(true)

  //   rerender(
  //     <Dialog
  //       openMenu={true}
  //       title="Cadeado excluído com sucesso!"
  //       icon={<TickCircle color="#05BA38" size={32} />}
  //       successButtonText="Entendi"
  //       onSuccessButtonClick={() => {
  //         console.log('onSuccessButtonClick')
  //       }}
  //     />
  //   )

  //   // userEvent.click(screen.getByTestId('dialog_trigger__testid'))

  //   expect(screen.getByTestId('dialog_content__testid')).toBeInTheDocument()
  // })
})
