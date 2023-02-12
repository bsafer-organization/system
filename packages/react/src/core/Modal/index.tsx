import * as Dialog from '@radix-ui/react-dialog'
import { CloseCircle } from 'iconsax-react'
import {
  ModalCloseButton,
  ModalCloseButtonContainer,
  ModalContainer,
  ModalContent
} from './styles'
import { ModalContentProps, ModalRootProps, ModalTriggerProps } from './types'

function Root(props: ModalRootProps) {
  const { children, isOpen } = props

  return <Dialog.Root open={isOpen}>{children}</Dialog.Root>
}

function Trigger(props: ModalTriggerProps) {
  const { children, ...rest } = props

  return <Dialog.Trigger {...rest}>{children}</Dialog.Trigger>
}

function Content(props: ModalContentProps) {
  const { children, onDismiss, maxWidth = 'xl', position = 'right' } = props
  const closeButonSize = position === 'center' ? 'sm' : 'md'
  const closeButtonIconSize = position === 'center' ? 24 : 32

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 bg-black opacity-80 z-50"
        onClick={onDismiss}
      />
      <ModalContainer position={position} maxWidth={maxWidth} className="z-50">
        <div className="relative w-full h-full">
          <ModalCloseButtonContainer position={position}>
            <Dialog.Close asChild>
              <ModalCloseButton onClick={onDismiss} size={closeButonSize}>
                <CloseCircle
                  size={closeButtonIconSize}
                  className="text-inherit"
                />
              </ModalCloseButton>
            </Dialog.Close>
          </ModalCloseButtonContainer>

          <ModalContent hasRounded={position === 'center'}>
            {children}
          </ModalContent>
        </div>
      </ModalContainer>
    </Dialog.Portal>
  )
}

export type ModalProps = {
  Root: ModalRootProps
  Trigger: ModalTriggerProps
  Content: ModalContentProps
}

export const Modal = {
  Root,
  Trigger,
  Content
}
