import React from 'react'

export type NoActionsProps = {
  /**
   * If false, action buttons and close icon are hidden
   * @default true
   */
  isActionDialog: false
}

export type WithActionsProps = {
  /**
   * If false, action buttons and close icon are hidden
   * @default true
   */
  isActionDialog?: true

  /**
   * Set focused button (contained button)
   * @default "success"
   */
  focusedButton?: 'success' | 'cancel'

  /**
   * Success button (contained button) text
   */
  successButtonText: string

  /**
   * Icon placed before success button children
   */
  successButtonStartIcon?: React.ReactNode

  /**
   * Icon placed after success button children
   */
  successButtonEndIcon?: React.ReactNode

  /**
   * Success button action.\
   * **Set prop "openMenu" to closed state to close dialog.**
   */
  onSuccessButtonClick: () => void

  /**
   * Cancel button (outlined button) text
   */
  cancelButtonText?: string

  /**
   * Icon placed before cancel button children
   */
  cancelButtonStartIcon?: React.ReactNode

  /**
   * Icon placed after cancel button children
   */
  cancelButtonEndIcon?: React.ReactNode

  /**
   * Cancel button action
   */
  onCancelButtonClick?: () => void
}

export type DialogProps = {
  /**
   * Icon placed on the top of the dialog
   */
  icon: React.ReactNode

  /**
   * Close dialog when an interaction happens outside or focus moves outside of it
   * @default false
   */
  closeOnClickOutside?: boolean

  /**
   * Set it to false to hide close icon button on the top of the dialog
   * @default true
   */
  showCloseIconButton?: boolean

  /**
   * Event handler called when click `closeIconButton` and click/interact outside the bounds of the component
   */
  onDismiss?: () => void

  /**
   * Control open state
   * @default false
   */
  openMenu?: boolean

  /**
   * Set backdrop to dialog box
   * @default true
   */
  overlayBackdrop?: boolean

  /**
   * Dialog title
   */
  title: string

  /**
   * Dialog subtitle
   */
  subtitle?: string

  /**
   * Action element used to open the dialog
   */
  children?: React.ReactNode
} & (NoActionsProps | WithActionsProps)
