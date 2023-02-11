import { DialogTriggerProps } from '@radix-ui/react-dialog'
import React from 'react'

export interface ModalRootProps {
  isOpen?: boolean
  children: React.ReactElement[] | React.ReactElement
}

export interface ModalTriggerProps extends DialogTriggerProps {
  children: React.ReactElement
}

export interface ModalContentProps {
  onDismiss?: () => void
  position?: 'center' | 'left' | 'right'
  width?: string
  overlay?: {
    color?: string
    opacity?: string
  }
  children: React.ReactElement
}
