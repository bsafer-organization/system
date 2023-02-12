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
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: React.ReactElement[] | React.ReactElement
}
