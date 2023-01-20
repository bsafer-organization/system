import React from 'react'

import { ButtonContainer, ButtonContainerProps } from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Available colors for the button component:
   * - primary (yellow/black)
   * - secondary (green/black)
   * - default (black)
   *
   * @default 'primary'
   */
  color?: ButtonContainerProps['color']

  /**
   *  Each variant changes background, font color and border styles:
   * - contained
   * - outlined
   * - text
   * @default 'contained'
   */
  variant?: ButtonContainerProps['variant']

  /**
   * Button content
   */
  children: React.ReactNode

  /**
   * Sizes:
   * - sm
   * - md
   * - lg
   *
   * @default 'md'
   */
  size?: ButtonContainerProps['size']

  /**
   * Icon placed after the children of the input.
   */
  startIcon?: JSX.Element
  /**
   * Icon placed before the children of the input.
   */
  endIcon?: JSX.Element

  onClick?: () => void
}

/**
 * Render a button element
 * @param ButtonProps
 * @returns `<Button>SignIn</Button>`
 */
export const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'md',
  startIcon,
  endIcon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      size={size}
      variant={variant}
      color={color}
      {...props}
    >
      {startIcon && (
        <span className="flex justify-center items-center">{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className="w-4 h-4 flex justify-center items-center">
          {endIcon}
        </span>
      )}
    </ButtonContainer>
  )
}
