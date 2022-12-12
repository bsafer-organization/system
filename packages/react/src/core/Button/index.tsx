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
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer size={size} variant={variant} color={color} {...props}>
      {children}
    </ButtonContainer>
  )
}
