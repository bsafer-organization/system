import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@bsafer-system/react'

export default {
  title: 'Core/Box',
  component: Box,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=515%3A113&t=zrKCrKX5jnWmeQ3E-0'
    }
  },
  args: {
    children: <span>Box</span>,
    size: 'xl',
    backgroundColor: 'bg-[red]',
    fontColor: 'text-[blue]'
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col justify-center items-center">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<BoxProps>

export const Playground: StoryObj<BoxProps> = {}

export const Sizes = () => {
  return (
    <div className="grid grid-cols-4 justify-center items-center gap-10">
      <Box size="sm">
        sm
        <br /> padding: 0.25rem = 4px
      </Box>
      <Box size="md">
        md
        <br /> padding: 0.5rem = 8px
      </Box>
      <Box size="lg">
        lg
        <br /> padding: 0.75rem = 12px
      </Box>
      <Box size="xl">
        xl
        <br /> padding: 1rem = 16px
      </Box>
      <Box size="2xl">
        2xl
        <br /> padding: 1.25rem = 20px
      </Box>
      <Box size="3xl">
        3xl
        <br /> padding: 1.5rem = 24px
      </Box>
      <Box size="4xl">
        4xl
        <br /> padding: 2rem = 32px
      </Box>
    </div>
  )
}

export const BorderRadius = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Box size="4xl" borderRadius="none">
        none
        <br /> border-radius: 0px
      </Box>
      <Box size="4xl" borderRadius="sm">
        sm
        <br /> border-radius: 0.125rem = 2px
      </Box>
      <Box size="4xl" borderRadius="md">
        md
        <br /> border-radius: 0.25rem = 4px
      </Box>
      <Box size="4xl" borderRadius="lg">
        lg
        <br /> border-radius: 0.375rem = 6px
      </Box>
      <Box size="4xl" borderRadius="xl">
        xl
        <br /> border-radius: 0.5rem = 8px
      </Box>
      <Box size="4xl" borderRadius="2xl">
        2xl
        <br /> border-radius: 0.75rem = 12px
      </Box>
      <Box size="4xl" borderRadius="3xl">
        3xl
        <br /> border-radius: 1rem = 16px
      </Box>
      <Box size="4xl" borderRadius="4xl">
        4xl
        <br /> border-radius: 1.5rem = 24px
      </Box>
      <Box size="4xl" borderRadius="full">
        full
        <br /> border-radius: 9999px
      </Box>
    </div>
  )
}
