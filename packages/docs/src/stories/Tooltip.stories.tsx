import {
  Button,
  Heading,
  Input,
  Text,
  Tooltip,
  TooltipProps
} from '@bsafer-system/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

type TooltipStoryProps = TooltipProps['Root'] &
  TooltipProps['Content'] &
  TooltipProps['Trigger']

export default {
  title: 'Core/Tooltip'
} as Meta

export const Playground: StoryFn<TooltipStoryProps> = (props) => {
  return (
    <Tooltip.Root
      skipDelayDuration={props.skipDelayDuration}
      delayDuration={props.delayDuration}
      disableHoverableContent={props.disableHoverableContent}
    >
      <Tooltip.Trigger>
        <Text size="lg">Hover me!</Text>
      </Tooltip.Trigger>

      <Tooltip.Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

Playground.argTypes = {
  skipDelayDuration: {
    table: {
      defaultValue: { summary: 300 }
    }
  },
  disableHoverableContent: {
    table: {
      defaultValue: { summary: false }
    }
  },
  delayDuration: {
    table: {
      defaultValue: { summary: 300 }
    }
  },
  open: {
    control: 'boolean',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  children: {
    control: {
      type: null
    }
  },
  portal: {
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: {
      type: null
    }
  },
  onOpenChange: {
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: {
      type: null
    }
  }
}

Playground.args = {
  delayDuration: 300,
  skipDelayDuration: 300,
  disableHoverableContent: false,
  align: 'center',
  alignOffset: 0,
  side: 'top',
  sideOffset: 8,
  sticky: 'partial',
  avoidCollisions: true,
  collisionBoundary: [],
  collisionPadding: 0,
  hideWhenDetached: false,
  arrow: {
    width: 10,
    height: 5,
    hidden: false
  },
  children: <Text size="lg">Hover me!</Text>,
  onOpenChange: (open: any) => console.log('Tooltip: ', open)
}

export const TootipWithoutArrow = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Text size="lg">Hover me! (but without arrow)</Text>
      </Tooltip.Trigger>

      <Tooltip.Content arrow={{ hidden: true }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

TootipWithoutArrow.storyName = 'Tootip Without Arrow'

export const TootipWithHugeText = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Text size="lg">Huge text in tooltip...</Text>
      </Tooltip.Trigger>

      <Tooltip.Content arrow={{ hidden: true }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque
        iste ut numquam tempora natus consectetur veniam impedit consequuntur
        eveniet voluptate quod architecto earum provident doloribus laudantium a
        quia doloremque. (max-w-md)
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

TootipWithHugeText.storyName = 'Tootip With Huge Text'

export const TooltipWithCustomContent = () => {
  return (
    <div className="h-[98vh]">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Register here!</Text>
        </Tooltip.Trigger>

        <Tooltip.Content
          avoidCollisions
          className="bg-white shadow-md p-4 rounded-lg flex flex-col gap-2"
          arrow={{
            className: 'fill-white'
          }}
        >
          <Input placeholder="Enter your name" label="Name" />
          <Input placeholder="email@email.com" label="Email" />
          <Input placeholder="8 - 15 characters" label="Password" />
          <Button>Register now!</Button>
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipWithCustomContent.storyName = 'Tootip With Custom Content'

export const TooltipPositions = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Top</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top">On top!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Left</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="left">On left!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Right</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="right">On right!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Bottom</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="bottom">On bottom!</Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipPositions.storyName = 'Tootip Positions'

export const TooltipOffset = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">32px</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={32}>
          Offset 32px!
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">64px</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={32}>
          Ofsset 64px!
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Any value</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={150}>
          Ofsset to any where (150px)
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipOffset.storyName = 'Tootip Offset'
