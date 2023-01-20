import { Meta, StoryObj } from '@storybook/react'
import { TickCircle } from 'iconsax-react'
import { Button, ButtonProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A3&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    children: 'Botão padrão',
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false,
    onClick: () => {
      console.log('CLICK')
    }
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'] as PropsToArray<
        ButtonProps['color']
      >
    },
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'] as PropsToArray<
        ButtonProps['variant']
      >
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'] as PropsToArray<ButtonProps['size']>
    },
    disabled: {
      control: 'boolean'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col justify-center items-center gap-10">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ButtonProps>

export const Playground: StoryObj<ButtonProps> = {}

export const Sizes = () => {
  return (
    <>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
    </>
  )
}

export const Colors = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" color="default">
        Default Button
      </Button>
      <Button variant="outlined" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
      <Button variant="outlined" color="default">
        Default Button
      </Button>
      <Button variant="text" color="primary">
        Primary Button
      </Button>
      <Button variant="text" color="secondary">
        Secondary Button
      </Button>
      <Button variant="text" color="default">
        Default Button
      </Button>
    </div>
  )
}

export const Icons = () => {
  return (
    <>
      <Button
        variant="contained"
        size="lg"
        startIcon={<TickCircle size={16} />}
      >
        Start icon
      </Button>
      <Button variant="contained" size="lg" endIcon={<TickCircle size={16} />}>
        End icon
      </Button>
    </>
  )
}
