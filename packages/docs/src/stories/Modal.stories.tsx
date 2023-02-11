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
  component: Modal,
  args: {
    isOpen: true
  }
} as Meta<ModalProps>

export const Playground: StoryFn<ModalProps> = (props) => {
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
      <Modal isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)}>
        <Heading as="h4">Title</Heading>
      </Modal>
    </div>
  )
}

export const WithTrigger = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Modal with trigger:</p>
      <Modal trigger={<Button>Modal with this trigger</Button>}>
        <p>
          It&lsquo;s use trigger instead controller <b>isOpens</b>
        </p>
      </Modal>
    </div>
  )
}
