import React from 'react'

export type NoActionsProps = {
  /**
   * If false, action buttons and close icon are hidden
   * @default true
   */
  isActionDialog: false
}

type CancelButtonProps =
  | {
      /**
       * Cancel button (outlined button) text
       */
      cancelButtonText: string

      /**
       * Icon placed before cancel button children
       */
      cancelButtonStartIcon?: React.ReactNode

      /**
       * Icon placed after cancel button children
       */
      cancelButtonEndIcon?: React.ReactNode

      /**
       * Cancel button click action
       */
      onCancelButtonClick?: () => void
    }
  | {
      /**
       * Cancel button (outlined button) text
       */
      cancelButtonText?: never

      /**
       * Icon placed before cancel button children
       */
      cancelButtonStartIcon?: never

      /**
       * Icon placed after cancel button children
       */
      cancelButtonEndIcon?: never

      /**
       * Cancel button click action
       */
      onCancelButtonClick?: never
    }

export type WithActionsProps = {
  /**
   * If false, action buttons and close icon are hidden
   * @default true
   */
  isActionDialog?: true

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
   * Success button click action.\
   * **Set prop "openMenu" to closed state to close dialog.**
   */
  onSuccessButtonClick: () => void
} & CancelButtonProps

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
