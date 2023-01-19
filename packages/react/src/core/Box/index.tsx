import React from 'react'
import { BoxContainer, BoxStyleProps } from './styles'

export interface BoxProps {
  /**
   * Box content
   */
  children?: React.ReactNode

  /**
   * Box size
   * - sm
   * - md
   * - lg
   * - xl
   * - 2xl
   * - 3xl
   * - 4xl
   * @default "md"
   */
  size?: BoxStyleProps['size']

  /**
   * Box background color
   * @default 'bg-black'
   */
  backgroundColor?: string

  /**
   * Font color
   * @default 'text-white'
   */
  fontColor?: string

  /**
   * Box border radius
   * @default "md"
   */
  borderRadius?: BoxStyleProps['borderRadius']
}

export const Box = ({
  children,
  size = 'md',
  backgroundColor,
  fontColor,
  borderRadius = 'md'
}: BoxProps) => {
  return (
    <BoxContainer
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      size={size}
      borderRadius={borderRadius}
    >
      {children}
    </BoxContainer>
  )
}
