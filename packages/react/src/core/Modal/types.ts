import { DialogTriggerProps } from '@radix-ui/react-dialog'
import React from 'react'
import { backgroundColors, textColors } from '../../helpers'

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
   * CloseButton options
   * - color (text)
   * - backgroundColors
   *
   * @default color: 'black'
   * @default backgroundColor: 'white'
   */
  dismissOptions?: {
    color?: keyof typeof textColors
    backgroundColors?: keyof typeof backgroundColors
  }
  /**
   * DismissConfirmation show a dialog before close modal:
   * If `true`, renders the default props, but can change any prop.
   * @default
   * {
   *  title: 'As informações inseridas serão perdidas. Tem certeza que deseja fechar?',
   *  icon: <InfoCircle size={40} />,
   *  cancelText: 'Não',
   *  successText: 'Sim',
   *  focusedButton: 'cancel'
   * }
   */
  dismissConfirmation?:
    | {
        title?: string
        icon?: React.ReactElement
        cancelText?: string
        successText?: string
        focusedButton?: 'success' | 'cancel'
      }
    | boolean
  /**
   * Determines the position of the modal
   * - `center | left | right`
   * @default 'right'
   */
  position?: 'center' | 'left' | 'right'
  /**
   * Determines the max width of the modal
   * - `sm | md | lg | xl | 2xl | 3xl | 4xl | full`
   * @default 'xl'
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'
  /**
   * Determines the max height of the modal
   *
   * @default 'max-h-[80vh]'
   */
  maxHeight?: string
  /**
   * Any ReactElement
   */
  children: React.ReactElement[] | React.ReactElement
}
