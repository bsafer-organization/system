import {
  Button,
  Heading,
  Text,
  Tooltip,
  TooltipProps
} from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  argTypes: {
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
      table: {
        defaultValue: { summary: 'undefined' }
      }
    },
    children: {
      control: {
        type: null
      }
    },
    contentProps: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: {
        type: null
      }
    },
    textProps: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
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
} as Meta<TooltipProps>

export const Playground: StoryObj<TooltipProps> = {
  args: {
    text: 'Tooltip working!',
    delayDuration: 300,
    skipDelayDuration: 300,
    disableHoverableContent: false,

    position: {
      align: 'center',
      alignOffset: 0,
      side: 'top',
      sideOffset: 8,
      sticky: 'partial'
    },

    collision: {
      avoidCollisions: true,
      collisionBoundary: [],
      collisionPadding: 0,
      hideWhenDetached: false
    },

    arrow: {
      width: 10,
      height: 5
    },

    children: <Text size="lg">Hover me!</Text>,
    onOpenChange: (open) => console.log('Tooltip: ', open)
  }
}

export const TootipWithHugeText = () => {
  return (
    <Tooltip text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque iste ut numquam tempora natus consectetur veniam impedit consequuntur eveniet voluptate quod architecto earum provident doloribus laudantium a quia doloremque. (max-w-md)">
      <Text size="lg">Huge text in tooltip...</Text>
    </Tooltip>
  )
}

TootipWithHugeText.storyName = 'Tootip With Huge Text'

export const TooltipWithCustomText = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip text="Lorem <b>ipsum</b> dolor, <code>sit</code> amet <i>consectetur</i> adipisicing elit.">
        <Text size="lg">Tooltip with text with &lsquo;b&lsquo; tag</Text>
      </Tooltip>
      <Tooltip text="Lorem ipsum dolor, sit amet <i>consectetur adipisicing elit.</i>">
        <Text size="lg">Tooltip with text with &lsquo;i&lsquo; tag</Text>
      </Tooltip>
      <Tooltip text="Lorem <strong>ipsum dolor, sit amet consectetur</strong> adipisicing elit.">
        <Text size="lg">Tooltip with text with &lsquo;strong&lsquo; tag</Text>
      </Tooltip>
    </div>
  )
}

TooltipWithCustomText.storyName = 'Tootip With Custom Text'

export const TooltipWithCustomChildren = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip text="Lorem <b>ipsum</b> dolor, <code>sit</code> amet <i>consectetur</i> adipisicing elit.">
        <Text size="lg">Text content</Text>
      </Tooltip>
      <Tooltip text="Lorem ipsum dolor, sit amet <i>consectetur adipisicing elit.</i>">
        <Heading color="assistant-yellow-main">Heading content</Heading>
      </Tooltip>
      <Tooltip text="Lorem <strong>ipsum dolor, sit amet consectetur</strong> adipisicing elit.">
        <Button color="primary">Button content</Button>
      </Tooltip>
    </div>
  )
}

TooltipWithCustomChildren.storyName = 'Tootip With Custom Children'

export const TooltipPositions = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip
        position={{
          side: 'top'
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Top</Text>
      </Tooltip>
      <Tooltip
        position={{
          side: 'left'
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Left</Text>
      </Tooltip>
      <Tooltip
        position={{
          side: 'right'
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Right</Text>
      </Tooltip>
      <Tooltip
        position={{
          side: 'bottom'
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Bottom</Text>
      </Tooltip>
    </div>
  )
}

TooltipPositions.storyName = 'Tootip Positions'

export const TooltipOffset = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip
        position={{
          side: 'top',
          sideOffset: 32
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Offset 32</Text>
      </Tooltip>
      <Tooltip
        position={{
          side: 'right',
          sideOffset: 64
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Offset 64</Text>
      </Tooltip>
      <Tooltip
        position={{
          side: 'top',
          sideOffset: 13
        }}
        text="Tooltip working!"
      >
        <Text size="lg">Any Number Value (in px)</Text>
      </Tooltip>
    </div>
  )
}

TooltipOffset.storyName = 'Tootip Offset'
