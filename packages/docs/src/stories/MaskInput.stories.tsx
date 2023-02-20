import { MaskInput, MaskInputProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Core/MaskInput',
    component: MaskInput,
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0'
      }
    },
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        disabled: false,
        optional: false,
        startIcon: false,
        endIcon: false,
        error: '',
        format: '(%%) %%%%%-%%%%',
        mask: ' ',
        patternChar: '%',
        allowEmptyFormat: true
      },
    decorators: [
      (Story) => <div className="w-96">{Story()}</div>]
  } as Meta<MaskInputProps>
  
  export const Playground: StoryObj<MaskInputProps> = {}

  export const LimitedInput = () => {
    const MAX_LIMIT = 101;
    return (
      <MaskInput
        label='Limited Input'
        placeholder='0 -> 100'
        format='###'
        error=''
        isAllowed={(values) => {
          const { floatValue } = values
          return floatValue! < MAX_LIMIT
        }}
      />
    )
  }

  export const InputWithOnValueChange = () => {
    return (
      <MaskInput
        label='OnValueChange Input'
        placeholder='Digite aqui'
        format='######'
        error=''
        onValueChange={(values, sourceInfo) => {
          console.log(values, sourceInfo);
        }}
      />
    )
  }