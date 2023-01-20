import React from 'react'
import { BoxContainer, BoxStyleProps } from './styles'

export interface PaddingAll {
  all: string
}

export interface PaddingOnly {
  only: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}

export type PaddingProps = PaddingAll | PaddingOnly

export interface BoxProps {
  /**
   * Box content
   */
  children?: React.ReactNode

  /**
   * Box padding
   * @example PaddingAll { all: 'p-2' }
   * @example PaddingOnly { only: { top: 'p-2', right: 'p-2', bottom: 'p-2', left: 'p-2' } }
   * @default { all: 'p-2' } = padding: 0.5rem
   */
  padding?: PaddingProps

  /**
   * Box background color
   * @default "bg-black"
   */
  backgroundColor?: string

  /**
   * Font color
   * @default "text-white"
   */
  fontColor?: string

  /**
   * Box border radius
   * @default "md"
   */
  borderRadius?: BoxStyleProps['borderRadius']

  /**
   * Content horizontal alignment
   * @default "center"
   */
  horizontalAlignment?: BoxStyleProps['horizontalAlignment']
}

export const Box = ({
  children,
  padding = { all: 'p-2' },
  backgroundColor,
  fontColor,
  borderRadius = 'md',
  horizontalAlignment = 'center'
}: BoxProps) => {
  return (
    <BoxContainer
      horizontalAlignment={horizontalAlignment}
      padding={padding}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderRadius={borderRadius}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </span>
    </BoxContainer>
  )
}
