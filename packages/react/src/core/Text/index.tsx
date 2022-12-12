import React from 'react'
import { TextElement, TextElementProps } from './styles'

type TextElementAsTypes = 'span' | 'strong' | 'b' | 'i' | 'p'

type HTMLTextAttributes = Omit<React.HTMLAttributes<HTMLElement>, 'color'>

export interface TextProps extends HTMLTextAttributes {
  /**
   * Defines which text element will be used
   * - [span, strong, b, i, p]
   * @default "span"
   */
  as?: TextElementAsTypes
  /**
   * Text content
   */
  children?: React.ReactNode
  /**
   * Available fontSizes:
   * - [xs, sm, md, lg, xl, 2xl, 3xl, 4xl]
   * @default "md"
   */
  size?: TextElementProps['size']
  /**
   * Defines which weight to be used
   * - [light, bold, regular]
   * @default "regular"
   */
  weight?: TextElementProps['weight']
  /**
   * Defines colors to be used for this heading
   * @default "inherit"
   */
  color?: TextElementProps['color']
}

/**
 * Render a common text element
 * - [span, strong, b, i, p]
 * @param TextProps
 * @returns
 * `<Text>Jonh Doe</Text>`
 */
export const Text = ({
  children,
  as,
  size,
  weight,
  color,
  ...props
}: TextProps) => {
  return (
    <TextElement as={as} size={size} weight={weight} color={color} {...props}>
      {children}
    </TextElement>
  )
}
