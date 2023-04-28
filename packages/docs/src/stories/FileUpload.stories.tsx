import { Meta, StoryObj } from '@storybook/react'
import { FileUpload, FileUploadProps } from '@bsafer-system/react'

export default {
  title: 'Core/FileUpload',
  component: FileUpload,
  args: {
    error: '',
    disabled: false,
    onChangeFile: (file) => {
      console.log(file)
    },
    label: 'File upload',
    optional: false
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
  decorators: [(Story) => <div className="w-[400px]">{Story()}</div>]
} as Meta<FileUploadProps>

export const Playground: StoryObj<FileUploadProps> = {}

export const Error = () => {
  return <FileUpload error="Arquivo da Guia é obrigatório" />
}
