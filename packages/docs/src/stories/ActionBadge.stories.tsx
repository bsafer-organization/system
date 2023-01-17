import { Meta, StoryObj } from '@storybook/react'
import { ActionBadge, ActionBadgeProps } from '@bsafer-system/react'

export default {
  title: 'Core/ActionBadge',
  component: ActionBadge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0'
    }
  },
  args: {
    children: 'ActionBadge padrão',
    color: 'green',
    size: 'md',
    avatarUrl: '',
    disabled: false,
    icon: undefined
  },
  argTypes: {
    onActionClick: { action: 'onActionClick' }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ActionBadgeProps>

export const Playground: StoryObj<ActionBadgeProps> = {}

export const Sizes = () => {
  return (
    <>
      <ActionBadge size="xs">Extra Small Badge</ActionBadge>
      <ActionBadge size="sm">Small ActionBadge</ActionBadge>
      <ActionBadge size="md">Medium ActionBadge</ActionBadge>
      <ActionBadge size="lg">Large ActionBadge</ActionBadge>
    </>
  )
}

export const Colors = () => {
  return (
    <>
      <ActionBadge color="green">Green</ActionBadge>
      <ActionBadge color="blue">Blue</ActionBadge>
      <ActionBadge color="red">Red</ActionBadge>
      <ActionBadge color="yellow">Yellow</ActionBadge>
      <ActionBadge color="black">Black</ActionBadge>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <ActionBadge disabled={true}>Disabled</ActionBadge>
    </>
  )
}

export const Avatar = () => {
  return (
    <>
      <ActionBadge
        size="lg"
        avatarUrl="https://media.discordapp.net/attachments/998742286626193459/1024512586605146112/Mockup_Cadeado_para_teste.png?width=494&height=682"
      >
        Avatar
      </ActionBadge>
    </>
  )
}
