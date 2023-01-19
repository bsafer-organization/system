import { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  BoxProps,
  PaddingProps,
  PaddingAll,
  PaddingOnly
} from '@bsafer-system/react'
import React from 'react'

export default {
  title: 'Core/Box',
  component: Box,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=515%3A113&t=zrKCrKX5jnWmeQ3E-0'
    }
  },
  args: {
    children: <span>Box</span>,
    backgroundColor: 'bg-[red]',
    fontColor: 'text-[blue]',
    padding: { all: 'p-5' }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col justify-center items-center">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<BoxProps>

export const Playground: StoryObj<BoxProps> = {}

type PaddingTypes = 'all' | 'only'

export const Padding = () => {
  const [paddingType, setPaddingType] = React.useState<PaddingTypes>('all')
  const [padding, setPadding] = React.useState<PaddingProps>({
    all: 'p-[10px]'
  })

  const [paddingAll, setPaddingAll] = React.useState<string>('p-5')

  const [paddingTop, setPaddingTop] = React.useState<string>('p-5')
  const [paddingRight, setPaddingRight] = React.useState<string>('p-5')
  const [paddingBottom, setPaddingBottom] = React.useState<string>('p-5')
  const [paddingLeft, setPaddingLeft] = React.useState<string>('p-5')

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <select
        onChange={(value) => {
          setPaddingType(value.target.value as PaddingTypes)
        }}
      >
        <option value="all">All</option>
        <option value="only">Only</option>
      </select>
      {paddingType === 'all' && (
        <span className="flex">
          Padding:
          <input
            type="text"
            onChange={(event) => setPaddingAll(event.target.value)}
          />
          <button
            onClick={() =>
              setPadding({
                all: paddingAll
              })
            }
          >
            Apply
          </button>
        </span>
      )}
      {paddingType === 'only' && (
        <span className="flex flex-col">
          PaddingTop:
          <input
            type="text"
            onChange={(event) => setPaddingTop(event.target.value)}
          />
          PaddingRight:
          <input
            type="text"
            onChange={(event) => setPaddingRight(event.target.value)}
          />
          PaddingBottom:
          <input
            type="text"
            onChange={(event) => setPaddingBottom(event.target.value)}
          />
          PaddingLeft:
          <input
            type="text"
            onChange={(event) => setPaddingLeft(event.target.value)}
          />
          <button
            onClick={() =>
              setPadding({
                only: {
                  top: paddingTop,
                  right: paddingRight,
                  bottom: paddingBottom,
                  left: paddingLeft
                }
              })
            }
          >
            Apply
          </button>
        </span>
      )}
      <Box padding={padding} borderRadius="none">
        Padding test
      </Box>
    </div>
  )
}

export const BorderRadius = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10">
      <Box padding={{ all: 'p-5' }} borderRadius="none">
        none
        <br /> border-radius: 0px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="sm">
        sm
        <br /> border-radius: 0.125rem = 2px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="md">
        md
        <br /> border-radius: 0.25rem = 4px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="lg">
        lg
        <br /> border-radius: 0.375rem = 6px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="xl">
        xl
        <br /> border-radius: 0.5rem = 8px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="2xl">
        2xl
        <br /> border-radius: 0.75rem = 12px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="3xl">
        3xl
        <br /> border-radius: 1rem = 16px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="4xl">
        4xl
        <br /> border-radius: 1.5rem = 24px
      </Box>
      <Box padding={{ all: 'p-5' }} borderRadius="full">
        full
        <br /> border-radius: 9999px
      </Box>
    </div>
  )
}

// flex flex-col justify-center items-start gap-2 p-5 bg-black text-white rounded-none
// flex flex-col justify-center items-start gap-2 p-[10px] bg-black text-white rounded-none
