import * as Dialog from '@radix-ui/react-dialog'
import { CloseCircle } from 'iconsax-react'
import { ModalCloseButton } from './styles'
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
  const { children, onDismiss, width, overlay, position } = props

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 bg-black opacity-80"
        onClick={onDismiss}
      />
      <Dialog.Content className="fixed w-screen max-w-lg h-screen top-0 right-0">
        <div className="relative w-full h-full">
          <div className="absolute top-5 -left-5">
            <Dialog.Close asChild>
              <ModalCloseButton onClick={onDismiss}>
                <CloseCircle size={32} className="text-inherit" />
              </ModalCloseButton>
            </Dialog.Close>
          </div>

          <div className="w-full h-full bg-white">{children}</div>
        </div>
      </Dialog.Content>
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
