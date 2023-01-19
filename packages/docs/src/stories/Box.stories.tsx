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
    backgroundColor: 'bg-[red]',
    fontColor: 'text-[blue]',
    padding: { all: 'p-5' }
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

export const BorderRadius = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10">
      <Box padding={{ all: 'p-5' }} borderRadius="none">
        none
        <br /> border-radius: 0px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="sm">
        sm
        <br /> border-radius: 0.125rem = 2px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="md">
        md
        <br /> border-radius: 0.25rem = 4px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="lg">
        lg
        <br /> border-radius: 0.375rem = 6px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="xl">
        xl
        <br /> border-radius: 0.5rem = 8px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="2xl">
        2xl
        <br /> border-radius: 0.75rem = 12px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="3xl">
        3xl
        <br /> border-radius: 1rem = 16px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="4xl">
        4xl
        <br /> border-radius: 1.5rem = 24px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="full">
        full
        <br /> border-radius: 9999px
      </Box>
    </div>
  )
}
