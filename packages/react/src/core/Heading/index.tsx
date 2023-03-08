import React from 'react'
import { HeadingElement, HeadingElementProps } from './styles'

type HeadingElementAsTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HTMLTextAttributes = Omit<React.HTMLAttributes<HTMLElement>, 'color'>

export interface HeadingProps extends HTMLTextAttributes {
  /**
   * Defines which heading element will be rendered:
   * - [h1, h2, h3, h4, h5, h6]
   * @default "h2"
   */
  as?: HeadingElementAsTypes

  /**
   * Defines which weight to be used
   * - [black, bold, regular]
   * @default "bold"
   */
  weight?: HeadingElementProps['weight']
  /**
   * Heading content
   */
  children?: React.ReactNode
  /**
   * Defines colors to be used for this heading
   * @default "inherit"
   */
  color?: HeadingElementProps['color']
}

/**
 * Render a heading element: h1, h2, h3, h4, h5 or h6
 * @param HeadingProps
 * @returns `<Heading>John Doe</Heading>`
 */
export const Heading = ({
  children,
  as,
  weight,
  color,
  ...props
}: HeadingProps) => {
  return (
    <HeadingElement
      data-testid="heading_testid"
      as={as}
      weight={weight}
      color={color}
      {...props}
    >
      {children}
    </HeadingElement>
  )
}
