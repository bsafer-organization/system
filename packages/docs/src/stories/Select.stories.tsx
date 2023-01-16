import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from '@bsafer-system/react'

const options = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' }
]

export default {
  title: 'Core/Select',
  component: Select,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=535%3A4503&t=LBvrED4ki7epUItI-0'
    }
  },
  args: {
    closeMenuOnScroll: false,
    closeMenuOnSelect: false,
    options,
    defaultValue: { value: 'ocean', label: 'Ocean' },
    disabled: false,
    label: 'Colors',
    optional: false,
    onValueChange: (value) => {
      console.log(value)
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-96">{Story()}</div>
      )
    }
  ]
} as Meta<SelectProps>

export const Playground: StoryObj<SelectProps> = {}

export const Optional = () => {
  return (
    <>
      <Select optional={true} label="Colors" options={options} />
    </>
  )
}

export const Error = () => {
  return (
    <>
      <Select error="Error" label="Colors" options={options} />
    </>
  )
}

export const Multiple = () => {
  return (
    <>
      <Select
        multiple={true}
        optional={true}
        label="Colors"
        options={options}
        onValueChange={(value) => {
          console.log(value)
        }}
      />
    </>
  )
}
