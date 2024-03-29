import { Box, BoxProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { commonArgs } from '../helpers/commonArgs'

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
    backgroundColor: 'assistant-green-light',
    color: 'black',
    padding: 'p-5'
  },
  argTypes: {
    padding: {
      description: 'padding values string',
      table: {
        defaultValue: { summary: 'p-2' }
      },
      options: [
        'p-5',
        'pt-10',
        'pr-10',
        'pl-10',
        'pb-10',
        'pt-10 pb-10',
        'pl-10 pr-10',
        'p-10'
      ],
      control: 'select'
    },
    children: {
      control: 'null'
    },
    backgroundColor: {
      description: 'Define this background color',
      table: {
        defaultValue: { summary: 'white' }
      },
      options: commonArgs.allColors,
      control: 'select'
    },
    color: {
      description: 'Define this text color',
      table: {
        defaultValue: { summary: 'black' }
      },
      options: commonArgs.allColors,
      control: 'select'
    }
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
      <Box padding="p-5" borderRadius="none">
        none
        <br /> border-radius: 0px
      </Box>
      <Box padding="p-5" borderRadius="sm">
        sm
        <br /> border-radius: 0.125rem = 2px
      </Box>
      <Box padding="p-5" borderRadius="md">
        md
        <br /> border-radius: 0.25rem = 4px
      </Box>
      <Box padding="p-5" borderRadius="lg">
        lg
        <br /> border-radius: 0.375rem = 6px
      </Box>
      <Box padding="p-5" borderRadius="xl">
        xl
        <br /> border-radius: 0.5rem = 8px
      </Box>
      <Box padding="p-5" borderRadius="2xl">
        2xl
        <br /> border-radius: 0.75rem = 12px
      </Box>
      <Box padding="p-5" borderRadius="3xl">
        3xl
        <br /> border-radius: 1rem = 16px
      </Box>
      <Box padding="p-5" borderRadius="4xl">
        4xl
        <br /> border-radius: 1.5rem = 24px
      </Box>
      <Box padding="p-5" borderRadius="full">
        full
        <br /> border-radius: 9999px
      </Box>
    </div>
  )
}

export const Padding = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10 w-full">
      <Box padding="pt-5" borderRadius="md">
        PaddingTop
      </Box>
      <Box padding="pr-5" borderRadius="md">
        PaddingRight
      </Box>
      <Box padding="pb-5" borderRadius="md">
        PaddingBottom
      </Box>
      <Box padding="pl-5" borderRadius="md">
        PaddingLeft
      </Box>
      <Box padding="p-5" borderRadius="md">
        PaddingAll
      </Box>
    </div>
  )
}
