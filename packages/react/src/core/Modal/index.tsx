import * as Dialog from '@radix-ui/react-dialog'
import { CloseCircle } from 'iconsax-react'
import React from 'react'
import { IconButton } from '../IconButton'

export interface ModalProps {
  isOpen?: boolean
  onDismiss?: () => void
  position?: 'center' | 'left' | 'right'
  width?: string
  overlay?: {
    color?: string
    opacity?: string
  }
  trigger?: React.ReactElement
  children: React.ReactElement
}

export function Modal(props: ModalProps) {
  const { children, isOpen, overlay, position, width, trigger, onDismiss } =
    props

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black opacity-80"
          onClick={onDismiss}
        />
        <Dialog.Content className="fixed w-screen max-w-lg h-screen top-0 right-0 bg-white p-5">
          {children}
          <Dialog.Close asChild>
            <IconButton color="default" onClick={onDismiss}>
              <CloseCircle />
            </IconButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
