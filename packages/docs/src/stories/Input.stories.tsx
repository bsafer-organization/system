import { Input, InputProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { Calendar1, CloseCircle, Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'

export default {
  title: 'Core/Input',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A259&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: false,
    optional: false,
    startIcon: false,
    endIcon: false,
    error: ''
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
  component: Input
} as Meta<InputProps>

export const Playground: StoryObj<InputProps> = {}

export const Icons = () => {
  const [passwordInputVisible, setPasswordInputVisible] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <Input label="StartIcon" startIcon placeholder="Placeholder" />
      <Input label="EndIcon" endIcon placeholder="Placeholder" />
      <Input
        label="Custom StartIcon"
        startIcon={<Calendar1 />}
        placeholder="Placeholder"
      />
      <Input
        label="Custom EndIcon"
        endIcon={<CloseCircle />}
        placeholder="Placeholder"
      />
      <Input
        label="OnClick in EndIcon"
        inputProps={{
          type: passwordInputVisible ? 'text' : 'password'
        }}
        endIcon={passwordInputVisible ? <Eye /> : <EyeSlash />}
        onClickEndIcon={() => setPasswordInputVisible((prev) => !prev)}
        placeholder="Placeholder"
      />
    </div>
  )
}

export const Optional = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Not Optional" placeholder="Placeholder" />
      <Input label="Optional" optional placeholder="Placeholder" />
    </div>
  )
}

export const Errors = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Not Error" placeholder="Placeholder" />
      <Input
        label="Error"
        error="This is required input"
        placeholder="Placeholder"
      />
    </div>
  )
}
