import React from 'react'
import { BadgeContainer, BadgeContainerProps } from './styles'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Available colors:
   * - green
   * - blue
   * - red
   * - yellow
   * - black
   * @default 'green'
   */
  color?: BadgeContainerProps['color']

  /**
   * Badge content node
   * @required
   */
  children: React.ReactNode

  /**
   * Available sizes:
   * - xs
   * - sm
   * - md
   * - lg
   * @default 'md'
   */
  size?: BadgeContainerProps['size']

  /**
   * Disable all component
   * @default false
   */
  disabled?: boolean
}

/**
 * Render a badge element
 * @param BadgeProps
 */

export const Badge = ({
  children,
  color = 'green',
  size = 'md',
  disabled = false,
  className,
  ...props
}: BadgeProps) => {
  return (
    <BadgeContainer color={color} size={size} disabled={disabled} {...props}>
      {children}
    </BadgeContainer>
  )
}
