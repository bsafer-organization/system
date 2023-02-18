import { Popover, PopoverProps } from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Core/Popover'
} as Meta

type PlaygroundProps = PopoverProps['Root']

export const Playground: StoryFn<PlaygroundProps> = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <p>trigger</p>
      </Popover.Trigger>
      <Popover.Content align="start" side="left" className="bg-white">
        <ul>
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  )
}
