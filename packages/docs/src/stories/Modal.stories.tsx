import {
  Badge,
  Button,
  Heading,
  Modal,
  ModalProps,
  Text
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Modal'
} as Meta

export const Playground: StoryFn<ModalProps['Root'] & ModalProps['Content']> = (
  props
) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen)

  useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])

  return (
    <div className="flex flex-col gap-2 items-center">
      <Text>Modal is:</Text>
      <Badge color={isModalOpen ? 'green' : 'red'}>
        {isModalOpen ? 'Opened' : 'Closed'}
      </Badge>
      {!isModalOpen && (
        <Button
          variant="text"
          color="default"
          onClick={() => setIsModalOpen(true)}
        >
          Open it
        </Button>
      )}
      <Modal.Root isOpen={isModalOpen}>
        <Modal.Content
          onDismiss={() => setIsModalOpen(false)}
          position={props.position}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
        >
          <div className="w-full h-full p-5 overflow-auto">
            <Heading as="h4">Title</Heading>
          </div>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}

Playground.args = {
  isOpen: true,
  position: 'right',
  maxWidth: 'xl'
}
Playground.argTypes = {
  maxHeight: {
    control: 'text'
  },
  maxWidth: {
    options: [
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      'full'
    ] as PropsToArray<ModalProps['Content']['maxWidth']>,
    control: 'select'
  },
  position: {
    options: ['center', 'left', 'right'] as PropsToArray<
      ModalProps['Content']['position']
    >,
    control: 'inline-radio'
  }
}

export const UncontrolledModal: StoryFn = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Modals with triggers:</p>

      <div className="flex gap-4">
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: left</Button>
          </Modal.Trigger>
          <Modal.Content position="left">
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: center</Button>
          </Modal.Trigger>
          <Modal.Content position="center">
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: right</Button>
          </Modal.Trigger>
          <Modal.Content>
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
      </div>
    </div>
  )
}

UncontrolledModal.storyName = 'Uncontrolled modal (with trigger)'

interface WithConfirmationProps {
  isOpen: boolean
  dismissConfirmation: boolean
  title: string
  cancelText: string
  successText: string
  focusedButton: 'cancel' | 'success'
}
export const WithConfirmation: StoryFn<WithConfirmationProps> = (props) => {
  const [modal, setModal] = useState<boolean | undefined>(false)
  const { isOpen, dismissConfirmation, ...dismissConfimationProps } = props

  useEffect(() => {
    setModal(isOpen)
  }, [isOpen])

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Text>Modals with confirmation before close:</Text>
      <span className="block p-2 rounded bg-assistant-red-light/30">
        <Text color="assistant-red-main">
          This feature need <b>controlled</b> modal to work
        </Text>
      </span>

      <div className="flex gap-4 mt-5">
        <Modal.Root isOpen={!!modal}>
          <Modal.Trigger asChild>
            <Button onClick={() => setModal(true)}>Open Modal</Button>
          </Modal.Trigger>
          <Modal.Content
            position="left"
            onDismiss={() => setModal(false)}
            dismissConfirmation={
              dismissConfirmation === true ? dismissConfimationProps : undefined
            }
          >
            <div className="w-full h-full flex justify-center items-center">
              <p>To close, needs confirmation step</p>
            </div>
          </Modal.Content>
        </Modal.Root>
      </div>
    </div>
  )
}

WithConfirmation.args = {
  isOpen: true,
  dismissConfirmation: true,
  title: 'Do you really want to close the modal?',
  cancelText: 'No',
  successText: 'Yes, sure.',
  focusedButton: 'cancel'
}
