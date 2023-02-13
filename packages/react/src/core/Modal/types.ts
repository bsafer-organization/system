import { DialogTriggerProps } from '@radix-ui/react-dialog'
import React from 'react'

export interface ModalRootProps {
  /**
   * This is the controlled way to open and close the modal.
   */
  isOpen?: boolean
  /**
   * Event handler for lister when isOpen props has been changes.
   */
  onOpenChange?: (isOpen?: boolean) => void
  /**
   * Needs Modal.Trigger and Modal.Content to works
   */
  children: React.ReactElement[] | React.ReactElement
}

export interface ModalTriggerProps extends DialogTriggerProps {
  /**
   * Any ReactElement
   */
  children: React.ReactElement
}

export interface ModalContentProps {
  /**
   * OnDismiss is a callback function that trigger when onDismissButton has been pressed
   */
  onDismiss?: () => void
  /**
   * Determines the position of the modal
   * - `center | left | right`
   * @default 'right'
   */
  position?: 'center' | 'left' | 'right'
  /**
   * Determines the max width of the modal
   * - `sm | md | lg | xl | 2xl | 3xl | 4xl`
   * @default 'xl'
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  /**
   * Any ReactElement
   */
  children: React.ReactElement[] | React.ReactElement
}
