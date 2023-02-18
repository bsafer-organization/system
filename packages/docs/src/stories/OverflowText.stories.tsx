import { OverflowText } from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Core/OverflowText'
} as Meta

interface PlaygroundProps {
  firstText: string
  secondText: string
}

export const Playground: StoryFn<PlaygroundProps> = ({
  firstText,
  secondText
}) => {
  return (
    <>
      <div className="flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x mb-8">
        <OverflowText>{firstText}</OverflowText>
      </div>
      <div className="flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x">
        <OverflowText>{secondText}</OverflowText>
      </div>
    </>
  )
}

Playground.args = {
  firstText: 'Compare text to see overflow',
  secondText: 'If text has no overflow, the tooltip is disable'
}
