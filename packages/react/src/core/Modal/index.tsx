import * as Dialog from '@radix-ui/react-dialog'
import { CloseCircle, InfoCircle } from 'iconsax-react'
import { useState } from 'react'

import { Dialog as ConfirmationDialog } from '../Dialog'
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
    maxWidth = 'xl',
    position = 'right',
    onDismiss,
    dismissConfirmation,
    dismissOptions
  } = props
  const closeButonSize = position === 'center' ? 'sm' : 'md'
  const closeButtonIconSize = position === 'center' ? 24 : 32
  const animationByPosition = {
    right: 'animate-in fade-in slide-in-from-right-1/3',
    center: 'animate-in fade-in zoom-in-75',
    left: 'animate-in fade-in slide-in-from-left-1/3'
  }
  const [confirmation, setConfirmation] = useState(false)

  function handleOpenConfimation() {
    setConfirmation(true)
  }

  const dismissConfirmationDefault = {
    title:
      'As informações inseridas serão perdidas. Tem certeza que deseja fechar?',
    icon: <InfoCircle size={40} />,
    cancelText: 'Não',
    successText: 'Sim',
    focusedButton: 'cancel' as const
  }

  const parsedDismissConfirmation =
    typeof dismissConfirmation === 'object'
      ? {
          title: dismissConfirmation.title || dismissConfirmationDefault.title,
          icon: dismissConfirmation.icon || dismissConfirmationDefault.icon,
          cancelText:
            dismissConfirmation.cancelText ||
            dismissConfirmationDefault.cancelText,
          successText:
            dismissConfirmation.successText ||
            dismissConfirmationDefault.successText,
          focusedButton:
            dismissConfirmation.focusedButton ||
            dismissConfirmationDefault.focusedButton
        }
      : dismissConfirmationDefault

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
            {dismissConfirmation && (
              <>
                <ModalCloseButton
                  onClick={handleOpenConfimation}
                  size={closeButonSize}
                  backgroundColors={dismissOptions?.backgroundColors}
                  color={dismissOptions?.color}
                >
                  <CloseCircle
                    size={closeButtonIconSize}
                    className="text-inherit"
                  />
                </ModalCloseButton>
                <ConfirmationDialog
                  openMenu={confirmation}
                  title={parsedDismissConfirmation.title}
                  icon={parsedDismissConfirmation.icon}
                  onSuccessButtonClick={() => {
                    setConfirmation(false)
                    if (onDismiss) onDismiss()
                  }}
                  onCancelButtonClick={() => {
                    setConfirmation(false)
                  }}
                  showCloseIconButton={false}
                  successButtonText={parsedDismissConfirmation.successText}
                  cancelButtonText={parsedDismissConfirmation.cancelText}
                  focusedButton={parsedDismissConfirmation.focusedButton}
                />
              </>
            )}

            {!dismissConfirmation && (
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
            )}
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
