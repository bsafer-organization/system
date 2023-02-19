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
          className="DialogOverlay"
          overlayBackdrop={props.overlayBackdrop}
        />
        <DialogStyle.Content
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
            <DialogStyle.IconContainer>{props.icon}</DialogStyle.IconContainer>
          )}
          <DialogStyle.Title justify="center">{props.title}</DialogStyle.Title>
          {props.subtitle && (
            <DialogStyle.Subtitle justify="center">
              {props.subtitle}
            </DialogStyle.Subtitle>
          )}
          {(props.isActionDialog === undefined ||
            props.isActionDialog === true) && (
            <>
              {props.focusedButton === 'success' ||
              props.focusedButton === undefined ? (
                <DialogStyle.ActionContainer>
                  <DialogStyle.Button
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
                <DialogStyle.ActionContainer>
                  {props.cancelButtonText && (
                    <DialogStyle.Button
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
            </>
          )}
          {(props.showCloseIconButton === undefined ||
            props.showCloseIconButton === true) && (
            <DialogStyle.CloseDialogIcon
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
