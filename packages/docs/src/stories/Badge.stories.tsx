import { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0'
    }
  },
  args: {
    children: 'Badge padrão',
    color: 'green',
    size: 'md',
    disabled: false
  },
  argTypes: {
    color: {
      options: ['green', 'blue', 'red', 'yellow', 'black'] as PropsToArray<
        BadgeProps['color']
      >,
      control: 'select'
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'] as PropsToArray<BadgeProps['size']>,
      control: 'radio'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<BadgeProps>

export const Playground: StoryObj<BadgeProps> = {
  name: 'Playground'
}

export const Sizes = () => {
  return (
    <>
      <Badge size="xs">Extra Small Badge</Badge>
      <Badge size="sm">Small Badge</Badge>
      <Badge size="md">Medium Badge</Badge>
      <Badge size="lg">Large Badge</Badge>
    </>
  )
}

export const Colors = () => {
  return (
    <>
      <Badge color="green">Green</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="black">Black</Badge>
      <Badge disabled={true}>Disabled</Badge>
    </>
  )
}
