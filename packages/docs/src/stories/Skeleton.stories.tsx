import { Skeleton, Text } from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Core/Skeleton'
} as Meta

interface PlaygroundProps {
  width: string
  height: string
  rounded: string
  backgroundColor: string
  className?: string
}

export const Playground: StoryFn<PlaygroundProps> = ({
  backgroundColor,
  height,
  width,
  rounded,
  className
}) => {
  return (
    <div className="w-screen max-w-[500px] flex flex-col gap-10">
      <Skeleton
        className={
          className || `${backgroundColor} ${height} ${width} ${rounded}`
        }
      />
    </div>
  )
}

Playground.args = {
  className: '',
  width: 'w-full',
  height: 'h-10',
  rounded: 'rounded-md',
  backgroundColor: 'bg-grey-200'
}
Playground.argTypes = {
  width: {
    options: ['w-full', 'w-5', 'w-10', 'w-20', 'w-40', 'w-80'],
    control: 'inline-radio'
  },
  height: {
    options: ['h-5', 'h-10', 'h-20', 'h-40', 'h-80'],
    control: 'inline-radio'
  },
  rounded: {
    options: [
      'rounded-xs',
      'rounded-md',
      'rounded-lg',
      'rounded-xl',
      'rounded-2xl',
      'rounded-3xl',
      'rounded-4xl',
      'rounded-full'
    ],
    control: 'select'
  },
  backgroundColor: {
    options: [
      'bg-grey-100',
      'bg-grey-200',
      'bg-grey-300',
      'bg-grey-400',
      'bg-grey-500',
      'bg-grey-600',
      'bg-grey-700',
      'bg-grey-800',
      'bg-assistant-red-light',
      'bg-assistant-blue-light',
      'bg-assistant-green-light',
      'bg-assistant-yellow-light'
    ],
    control: 'select'
  }
}

export const Colors = () => {
  return (
    <div className="w-[500px] grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <Text>AllColors</Text>
      </div>
      <Skeleton className="bg-assistant-red-light cols-span-1" />
      <Skeleton className="bg-assistant-blue-light cols-span-1" />
      <Skeleton className="bg-assistant-green-light cols-span-1" />
      <Skeleton className="bg-assistant-yellow-light cols-span-1" />
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="w-[500px] flex gap-4">
      <div className="flex-1">
        <Text>Width</Text>
        <Skeleton />
      </div>
      <div className="flex-1">
        <Text>height</Text>
        <Skeleton className="h-52" />
      </div>
      <div className="flex-1">
        <Text>Both</Text>
        <Skeleton className="w-40 h-40" />
      </div>
    </div>
  )
}

export const Rounded = () => {
  return (
    <div className="w-[500px] flex gap-4">
      <div className="flex-1">
        <Text>Default</Text>
        <Skeleton />
      </div>
      <div className="flex-1">
        <Text>rounded-xl</Text>
        <Skeleton className="rounded-xl" />
      </div>
      <div className="flex-1">
        <Text>rounded-full</Text>
        <Skeleton className="mb-2 rounded-full w-20 h-20" />
        <Skeleton className="rounded-full" />
      </div>
    </div>
  )
}
