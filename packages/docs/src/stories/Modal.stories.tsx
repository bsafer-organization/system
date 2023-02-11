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

export default {
  title: 'Core/Modal',
  args: {
    isOpen: true
  }
} as Meta<ModalProps>

export const Playground: StoryFn<ModalProps['Root']> = (props) => {
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
      <Modal.Root isOpen={isModalOpen}>
        <Modal.Content onDismiss={() => setIsModalOpen(false)}>
          <Heading as="h4">Title</Heading>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}

export const WithTrigger = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Modal with trigger:</p>
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button>Modal with this trigger</Button>
        </Modal.Trigger>
        <Modal.Content>
          <p>
            It&lsquo;s use trigger instead controller <b>isOpens</b>
          </p>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}
