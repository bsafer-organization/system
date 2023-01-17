import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconButton, IconButtonProps } from '@bsafer-system/react'
import { TickCircle } from 'iconsax-react'

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
