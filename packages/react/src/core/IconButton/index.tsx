import React from 'react'

import { IconButtonContainer, IconButtonContainerProps } from './styles'

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Available colors for the IconButton component:
   * - primary (yellow/black)
   * - secondary (green/black)
   * - default (black)
   *
   * @default 'primary'
   */
  color?: IconButtonContainerProps['color']

  /**
   *  Each variant changes background, font color and border styles:
   * - contained
   * - outlined
   * - text
   * @default 'contained'
   */
  variant?: IconButtonContainerProps['variant']

  /**
   * Sizes:
   * - sm
   * - md
   * - lg
   *
   * @default 'md'
   */
  size?: IconButtonContainerProps['size']

  /**
   * Icon of the button.
   */
  children: JSX.Element

  /**
   * Disable all component
   * @default false
   */
  disabled?: boolean

  onClick?: () => void
}

/**
 * Render an IconButton element
 * @param IconButtonProps
 * @returns `<IconButton>{icon}</IconButton>`
 */
export const IconButton = ({
  color = 'primary',
  variant = 'contained',
  size = 'md',
  children,
  disabled,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <IconButtonContainer
      data-testid="icon_button__testid"
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className="w-4 h-4 flex justify-between items-center">
        {children}
      </span>
    </IconButtonContainer>
  )
}
