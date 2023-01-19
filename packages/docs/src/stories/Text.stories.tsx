import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Text',
  component: Text,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=0%3A1&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    as: 'span',
    weight: 'regular',
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ratione deleniti beatae minus magnam quam illum, atque, dicta quibusdam deserunt rerum delectus veritatis animi repellat, expedita earum eligendi laboriosam nisi.',
    color: 'inherit'
  },
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['span', 'strong', 'b', 'i', 'p'] as PropsToArray<TextProps['as']>
      }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: ['bold', 'light', 'regular'] as PropsToArray<TextProps['weight']>
      }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as PropsToArray<TextProps['size']>
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['inherit', 'black', 'white', 'background', 'transparent',
        'primary-main', 'secondary-main',
        'assistant-blue-main', 'assistant-blue-light', 'assistant-blue-dark',
        'assistant-green-main', 'assistant-green-light', 'assistant-green-dark',
        'assistant-yellow-main', 'assistant-yellow-light', 'assistant-yellow-dark',
        'assistant-red-main', 'assistant-red-light', 'assistant-red-dark',
        'grey-900', 'grey-800', 'grey-700', 'grey-600', 'grey-500', 'grey-400',
        'grey-300', 'grey-200', 'grey-100'] as PropsToArray<TextProps['color']>
      }
    }
  }
} as Meta<TextProps>

export const Playground: StoryObj<TextProps> = {
  decorators: [
    (Story, { args }) => (
      <div className=" max-w-sm text-assistant-yellow-main flex flex-col gap-4">
        {args.color === 'inherit' && (
          <Text color="inherit" as="p">
            (Parent Color)
          </Text>
        )}
        {Story()}
      </div>
    )
  ]
}

export const HTMLElements = () => {
  return (
    <div className="flex flex-col gap-4 text-assistant-yellow-main">
      <Text color="inherit" as="p">
        Paragraph Element
      </Text>
      <Text color="inherit" as="b">
        Bold Element
      </Text>
      <Text color="inherit" as="i">
        Italic Element
      </Text>
      <Text color="inherit" as="strong" weight="bold">
        Strong Element
      </Text>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="flex flex-col gap-3 text-assistant-yellow-main">
      <Text size="xs">xs (0.75rem - 12px)</Text>
      <Text size="sm">sm (0.875rem - 14px)</Text>
      <Text size="md">md (1rem - 16px)</Text>
      <Text size="lg">lg (1.25rem - 20px)</Text>
      <Text size="xl">xl (1.5rem - 24px)</Text>
      <Text size="2xl">2xl (2rem - 32px)</Text>
      <Text size="3xl">3xl (2.5rem - 40px)</Text>
      <Text size="4xl">4xl (3.5rem - 56px)</Text>
    </div>
  )
}
