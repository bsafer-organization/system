import { Heading, HeadingProps, Text } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Heading',
  component: Heading,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=0%3A1&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    children: 'Lorem ipsum dolor sit!',
    weight: 'bold',
    color: 'inherit',
    as: 'h2'
  },
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as PropsToArray<HeadingProps['as']>
      }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: ['bold', 'black', 'regular'] as PropsToArray<HeadingProps['weight']>
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['black', 'inherit', 'white', 'background', 'transparent',
        'primary-main', 'secondary-main',
        'assistant-blue-main', 'assistant-blue-light', 'assistant-blue-dark',
        'assistant-green-main', 'assistant-green-light', 'assistant-green-dark',
        'assistant-yellow-main', 'assistant-yellow-light', 'assistant-yellow-dark',
        'assistant-red-main', 'assistant-red-light', 'assistant-red-dark',
        'grey-900', 'grey-800', 'grey-700', 'grey-600', 'grey-500', 'grey-400',
        'grey-300', 'grey-200', 'grey-100'] as PropsToArray<HeadingProps['color']>
      }
    }
  }
} as Meta<HeadingProps>

export const Playground: StoryObj<HeadingProps> = {
  decorators: [
    (Story, { args }) => (
      <div className=" max-w-md text-assistant-yellow-main flex flex-col gap-4">
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
    <div className="flex flex-col gap-4 text-assistant-yellow-main ">
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  )
}

export const Weights = () => {
  return (
    <div className="flex flex-col gap-4 text-assistant-yellow-main">
      <Heading weight="regular">Heading Regular</Heading>
      <Heading weight="bold">Heading Bold</Heading>
      <Heading weight="black">Heading Black</Heading>
    </div>
  )
}
