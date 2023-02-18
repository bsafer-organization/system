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
  const { children, isOpen, onOpenChange } = props

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

function Trigger(props: ModalTriggerProps) {
  const { children, ...rest } = props

  return <Dialog.Trigger {...rest}>{children}</Dialog.Trigger>
}

function Content(props: ModalContentProps) {
  const {
    children,
    onDismiss,
    maxWidth = 'xl',
    position = 'right',
    dismissOptions
  } = props
  const closeButonSize = position === 'center' ? 'sm' : 'md'
  const closeButtonIconSize = position === 'center' ? 24 : 32
  const animationByPosition = {
    right: 'animate-in fade-in slide-in-from-right-1/3',
    center: 'animate-in fade-in zoom-in-75',
    left: 'animate-in fade-in slide-in-from-left-1/3'
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 bg-black opacity-80 z-50 animate-in fade-in"
        onClick={onDismiss}
      />
      <ModalContainer
        position={position}
        maxWidth={maxWidth}
        className={`z-50 ${animationByPosition[position]}`}
      >
        <div className="relative w-full h-full">
          <ModalCloseButtonContainer position={position}>
            <Dialog.Close asChild>
              <ModalCloseButton
                onClick={onDismiss}
                size={closeButonSize}
                backgroundColors={dismissOptions?.backgroundColors}
                color={dismissOptions?.color}
              >
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
  /**
   * The Root function is to wrap Trigger and Content, responsible for opening and content of Modal.
   */
  Root,
  /**
   * The Trigger component triggers the opening of the modal.
   */
  Trigger,
  /**
   * Them Content is responsible for showing what's inside the modal. This component is also responsible for the closing event when clicking on the overlay or on the dismiss button.
   */
  Content
}
