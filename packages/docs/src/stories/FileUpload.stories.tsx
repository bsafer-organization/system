import { Meta, StoryObj } from '@storybook/react'
import { FileUpload, FileUploadProps } from '@bsafer-system/react'
import { ArrowUp2 } from 'iconsax-react'

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
  title: 'Core/FileUpload',
  component: FileUpload,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=446%3A2391&t=fE8HNjTfArbFMfN1-0'
    }
  },
  args: {
    error: '',
    disabled: false,
    onChangeFile: (file) => {
      console.log(file)
    },
    label: 'File upload',
    optional: true
  },
  argTypes: {
    error: {
      control: 'string'
    },
    disabled: {
      control: 'boolean'
    },
    onChangeFile: { action: 'onChangeFile' },
    optional: {
      control: 'boolean'
    }
  },
  decorators: [(Story) => Story()]
} as Meta<FileUploadProps>

export const Playground: StoryObj<FileUploadProps> = {}

// export const Optional = () => {
//   return (
//     <>
//       <Select optional={true} label="Colors" options={options} />
//     </>
//   )
// }

// export const Error = () => {
//   return (
//     <>
//       <Select error="Error" label="Colors" options={options} />
//     </>
//   )
// }

// export const Multiple = () => {
//   return (
//     <>
//       <Select
//         multiple={true}
//         optional={true}
//         label="Colors"
//         options={options}
//         onValueChange={(value: any) => {
//           console.log(value)
//         }}
//       />
//     </>
//   )
// }

// export const CustomSelect = () => {
//   return (
//     <div className="w-40">
//       <Select
//         padding="4px 8px"
//         options={options}
//         backgroundColor="#E9EBED"
//         border="1px solid transparent"
//         borderRadius="full"
//         dropdownIndicator={{
//           icon: ArrowUp2,
//           variant: 'Linear',
//           hoverColor: 'grey'
//         }}
//       />
//     </div>
//   )
// }
