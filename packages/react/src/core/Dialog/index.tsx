import * as RadixDialog from '@radix-ui/react-dialog'
import {
  FocusOutsideEvent,
  PointerDownOutsideEvent
} from '@radix-ui/react-dismissable-layer'
import { CloseCircle } from 'iconsax-react'
import React from 'react'
import { DialogStyle } from './styles'
import './styles.css'
import { DialogProps } from './types'

export const Dialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(props.openMenu ?? false)

  React.useEffect(() => {
    if (props.openMenu !== undefined) {
      setOpen(props.openMenu)
    }
  }, [props.openMenu])

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <RadixDialog.Trigger asChild>{props.children}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <DialogStyle.Overlay
          data-testid="dialog_overlay__testid"
          className="DialogOverlay"
          overlayBackdrop={props.overlayBackdrop}
        />
        <DialogStyle.Content
          data-testid="dialog_content__testid"
          overlayShadow={props.overlayBackdrop}
          className="DialogContent"
          onOpenAutoFocus={(e: Event) => {
            e.preventDefault()
          }}
          onInteractOutside={(
            e: PointerDownOutsideEvent | FocusOutsideEvent
          ) => {
            if (
              props.closeOnClickOutside === undefined ||
              props.closeOnClickOutside === false
            ) {
              e.preventDefault()
            } else {
              if (props.onDismiss) props.onDismiss()
            }
          }}
        >
          {props.icon && (
            <DialogStyle.IconContainer data-testid="dialog_icon__testid">
              {props.icon}
            </DialogStyle.IconContainer>
          )}
          <DialogStyle.Title
            data-testid="dialog_title__testid"
            justify="center"
          >
            {props.title}
          </DialogStyle.Title>
          {props.subtitle && (
            <DialogStyle.Subtitle
              data-testid="dialog_subtitle__testid"
              justify="center"
            >
              {props.subtitle}
            </DialogStyle.Subtitle>
          )}
          {(props.isActionDialog === undefined ||
            props.isActionDialog === true) && (
              <React.Fragment>
                {props.focusedButton === 'success' ||
                  props.focusedButton === undefined ? (
                  <DialogStyle.ActionContainer>
                    <DialogStyle.Button
                      data-testid="dialog_success_button__testid"
                      onClick={props.onSuccessButtonClick}
                      variant="contained"
                      color="primary"
                    >
                      {props.successButtonStartIcon &&
                        props.successButtonStartIcon}
                      {props.successButtonText}
                      {props.successButtonEndIcon && props.successButtonEndIcon}
                    </DialogStyle.Button>
                    {props.cancelButtonText && (
                      <DialogStyle.Button
                        data-testid="dialog_cancel_button__testid"
                        onClick={props.onCancelButtonClick}
                        variant="outlined"
                        color="primary"
                      >
                        {props.cancelButtonStartIcon &&
                          props.cancelButtonStartIcon}
                        {props.cancelButtonText}
                        {props.cancelButtonEndIcon && props.cancelButtonEndIcon}
                      </DialogStyle.Button>
                    )}
                  </DialogStyle.ActionContainer>
                ) : (
                  <DialogStyle.ActionContainer data-testid="dialog_cancel_as_focused_button__testid">
                    {props.cancelButtonText && (
                      <DialogStyle.Button
                        data-testid="dialog_cancel_button__testid"
                        onClick={props.onCancelButtonClick}
                        variant="contained"
                        color="primary"
                      >
                        {props.cancelButtonStartIcon &&
                          props.cancelButtonStartIcon}
                        {props.cancelButtonText}
                        {props.cancelButtonEndIcon && props.cancelButtonEndIcon}
                      </DialogStyle.Button>
                    )}
                    <DialogStyle.Button
                      data-testid="dialog_success_button__testid"
                      onClick={props.onSuccessButtonClick}
                      variant="outlined"
                      color="primary"
                    >
                      {props.successButtonStartIcon &&
                        props.successButtonStartIcon}
                      {props.successButtonText}
                      {props.successButtonEndIcon && props.successButtonEndIcon}
                    </DialogStyle.Button>
                  </DialogStyle.ActionContainer>
                )}
              </React.Fragment>
            )}
          {(props.showCloseIconButton === undefined ||
            props.showCloseIconButton === true) && (
              <DialogStyle.CloseDialogIcon
                data-testid="dialog_close_icon_button__testid"
                aria-label="Close"
                onClick={() => {
                  if (props.onDismiss) props.onDismiss()
                }}
              >
                <CloseCircle size={24} />
              </DialogStyle.CloseDialogIcon>
            )}
        </DialogStyle.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
