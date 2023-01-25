import React from 'react'
import { BoxContainer, BoxStyleProps } from './styles'

export interface BoxProps {
  /**
   * Box content
   */
  children?: React.ReactNode

  /**
   * Box padding
   * @example 'p-2'
   * @example 'pt-2 pl-3 pb-2 pr-3'
   * @default 'p-2'
   */
  padding?: string

  /**
   * Box background color
   * @default "white"
   */
  backgroundColor?: BoxStyleProps['backgroundColor']

  /**
   * Font color
   * @default "text-white"
   */
  color?: BoxStyleProps['color']

  /**
   * Box border radius
   * @default "md"
   */
  borderRadius?: BoxStyleProps['borderRadius']
}

export const Box = ({
  children,
  padding,
  backgroundColor = 'white',
  color = 'black',
  borderRadius = 'md'
}: BoxProps) => {
  return (
    <BoxContainer
      padding={padding}
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
    >
      {children}
    </BoxContainer>
  )
}
