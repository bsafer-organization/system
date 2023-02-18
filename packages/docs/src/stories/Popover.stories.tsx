import {
  Avatar,
  Button,
  Heading,
  Input,
  Popover,
  PopoverProps,
  Text
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { Message, MoreSquare } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { PropsToArray } from '../helpers/propsToArray'

type StoryPopoverProps = PopoverProps['Root'] & PopoverProps['Content']

export default {
  title: 'Core/Popover'
} as Meta<StoryPopoverProps>

export const Playground: StoryFn<StoryPopoverProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>()

  useEffect(() => {
    setIsOpen(props.open)
  }, [props.open])

  return (
    <Popover.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Popover.Trigger>
        <Text>Trigger</Text>
      </Popover.Trigger>
      <Popover.Content
        hiddenArrow={props.hiddenArrow}
        side={props.side}
        sideOffset={props.sideOffset}
        align={props.align}
        alignOffset={props.alignOffset}
      >
        <div className="p-2 rounded bg-assistant-blue-light min-w-[10rem] min-h-[3rem] grid place-items-center text-assistant-blue-main">
          <Text>Content</Text>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

Playground.args = {
  open: false,
  hiddenArrow: false,
  side: 'bottom',
  sideOffset: 10,
  align: 'center',
  alignOffset: 0
}

Playground.argTypes = {
  side: {
    options: ['top', 'right', 'bottom', 'left'] as PropsToArray<
      StoryPopoverProps['side']
    >,
    control: 'inline-radio'
  },
  sideOffset: {
    name: 'sideOffset (px)',
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  align: {
    options: ['center', 'start', 'end'] as PropsToArray<
      StoryPopoverProps['align']
    >,
    control: 'inline-radio'
  },
  alignOffset: {
    name: 'alignOffset (%)',
    control: { type: 'range', min: 0, max: 50, step: 5 }
  }
}

export const Uncontrolled = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Message />
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex justify-center items-center">
          <Text>This message was only reached by the trigger</Text>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

export const TriggerElement = () => {
  return (
    <>
      <Heading as="h6" className="mb-4 text-center">
        Any element as a trigger
      </Heading>
      <div className="flex justify-center items-center gap-10">
        <article>
          <Popover.Root>
            <Popover.Trigger>
              <div className="flex gap-2 items-center ">
                <Button>A button</Button>
              </div>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex justify-center items-center">
                <Text>Content</Text>
              </div>
            </Popover.Content>
          </Popover.Root>
        </article>
        <article>
          <Popover.Root>
            <Popover.Trigger>
              <div className="flex gap-2 items-center ">
                <Text>A Text</Text>
              </div>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex justify-center items-center">
                <Text>Content</Text>
              </div>
            </Popover.Content>
          </Popover.Root>
        </article>
        <article>
          <Popover.Root>
            <Popover.Trigger>
              <div className="flex gap-2 items-center ">
                <MoreSquare />
              </div>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex justify-center items-center">
                <Text>And any element...</Text>
              </div>
            </Popover.Content>
          </Popover.Root>
        </article>
      </div>
    </>
  )
}

export const ContainerElement = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <article>
        <Popover.Root>
          <Popover.Trigger>
            <Button color="default" variant="outlined">
              Any style
            </Button>
          </Popover.Trigger>
          <Popover.Content
            side="bottom"
            className="bg-primary-main p-5 w-[300px] rounded-full border-4 border-black"
            arrow={{
              height: 30,
              width: 30,
              color: 'primary-main'
            }}
          >
            <div className="flex justify-center items-center">
              <ul className="list-disc text-white">
                <li>
                  <Text>Colors</Text>
                </li>
                <li>
                  <Text>Shapes</Text>
                </li>
                <li>
                  <Text>Arrow</Text>
                </li>
              </ul>
            </div>
          </Popover.Content>
        </Popover.Root>
      </article>

      <article>
        <Popover.Root>
          <Popover.Trigger>
            <Button color="default" variant="outlined">
              Any content
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col gap-2">
              <Input placeholder="Email" />
              <Input placeholder="Password" inputProps={{ type: 'password' }} />
              <Button>SignIn</Button>
            </div>
          </Popover.Content>
        </Popover.Root>
      </article>
    </div>
  )
}

export const AnchorElement = () => {
  return (
    <>
      <Heading as="h6" className="mb-4 text-center">
        If you need trigger in element and show popover in other element
      </Heading>
      <Popover.Root>
        <div className="flex justify-between items-center gap-10">
          <Popover.Trigger>
            <Button>Trigger</Button>
          </Popover.Trigger>
          <Popover.Anchor>
            <Avatar
              name="Sheldon Cooper"
              imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB7R-Rqq5-Ehe_-s3Hsjp04_2AS-vDzzBHPvFjcyUOGptJE7rtzCf55xuX-tJuW9f1o4&usqp=CAU"
            />
          </Popover.Anchor>
        </div>
        <Popover.Content>
          <div className="p-2 rounded-2xl bg-assistant-red-light/30 min-w-[10rem] min-h-[3rem] grid place-items-center text-assistant-red-main">
            <Text>⚡ Bazinga!</Text>
          </div>
        </Popover.Content>
      </Popover.Root>
    </>
  )
}
