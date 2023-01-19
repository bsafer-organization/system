import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Toggle, ToggleProps } from '@bsafer-system/react'

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
    className: 'w-[25rem]'
  },
  argTypes: {
    className: {
      control: 'none'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ToggleProps>

export const Playground: StoryObj<ToggleProps> = {}

export const WithoutText = () => {
  return(
    <Toggle />
  )
}

export const WithText = () => {
  return(
    <Toggle text='Texto inserido' className='w-[25rem]' />
  )
}