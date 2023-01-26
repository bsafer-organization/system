import { Toggle, ToggleProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Core/Toggle',
  component: Toggle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A229&t=ZnZVNQWSuGnCMrwJ-0'
    }
  },
  args: {
    text: '',
    checked: false
  },
  decorators: [
    (Story) => <div className="w-screen max-w-screen-sm">{Story()}</div>
  ]
} as Meta<ToggleProps>

export const Playground: StoryObj<ToggleProps> = {}

export const WithoutText = () => {
  return <Toggle />
}

export const WithText = () => {
  return <Toggle text="Texto inserido" className="w-[25rem]" />
}
