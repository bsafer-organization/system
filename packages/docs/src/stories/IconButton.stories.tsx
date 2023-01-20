import { Meta, StoryObj } from '@storybook/react'
import { IconButton, IconButtonProps } from '@bsafer-system/react'
import { TickCircle } from 'iconsax-react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/IconButton',
  component: IconButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=535%3A4503&t=LBvrED4ki7epUItI-0'
    }
  },
  args: {
    children: <TickCircle />,
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false
  },
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary'] as PropsToArray<
        IconButtonProps['color']
      >,
      control: 'radio'
    },
    variant: {
      options: ['text', 'contained', 'outlined'] as PropsToArray<
        IconButtonProps['variant']
      >,
      control: 'radio'
    },
    size: {
      options: ['sm', 'md', 'lg'] as PropsToArray<IconButtonProps['size']>,
      control: 'radio'
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'null'
    },
    onClick: { action: 'onClick' }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<IconButtonProps>

export const Playground: StoryObj<IconButtonProps> = {}

export const Sizes = () => {
  return (
    <>
      <IconButton size="sm">
        <TickCircle />
      </IconButton>
      <IconButton size="md">
        <TickCircle />
      </IconButton>
      <IconButton size="lg">
        <TickCircle />
      </IconButton>
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <IconButton variant="contained">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined">
        <TickCircle />
      </IconButton>
      <IconButton variant="text">
        <TickCircle />
      </IconButton>
    </>
  )
}

export const Colors = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <IconButton variant="contained" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="contained" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="contained" color="default">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="default">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="default">
        <TickCircle />
      </IconButton>
    </div>
  )
}
