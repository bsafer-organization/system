import { Meta, StoryObj } from '@storybook/react'
import { RadioButton, RadioButtonProps } from '@bsafer-system/react'

export default {
  title: 'Core/RadioButton',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=446%3A2387&t=1vHNyV8EtD1j8Ksz-0'
    }
  },
  args: {
    orientationView: 'vertical',
    value: 'pj',
    options: [
      {
        label: 'Pessoa física',
        value: 'pf'
      },
      {
        label: 'Pessoa jurídica',
        value: 'pj'
      },
      {
        label: 'MEI',
        value: 'mei'
      }
    ],
    disabled: false,
    onOptionChange: (value) => {
      console.log(value)
    }
  },
  argTypes: {
    onOptionChange: {
      action: 'onOptionChange'
    }
  },
  decorators: [(Story) => <div className="w-96 h-96">{Story()}</div>],
  component: RadioButton
} as Meta<RadioButtonProps>

export const Playground: StoryObj<RadioButtonProps> = {}
