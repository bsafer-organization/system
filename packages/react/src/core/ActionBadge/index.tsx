import React from 'react'
import { CloseCircle } from 'iconsax-react'
import { ActionBadgeStyle, ActionBadgeStyleProps } from './styles'

export interface ActionBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Available colors:
   * - green
   * - blue
   * - red
   * - yellow
   * - black
   * @default 'green'
   */
  color?: ActionBadgeStyleProps['container']['color']

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
  size?: ActionBadgeStyleProps['container']['size']

  /**
   * Avatar image url that will be placed before the children.
   */
  avatarUrl?: string

  /**
   * Icon placed after the children. When an icon is not passed as a JSX element, the "CloseCircle" icon is the default
   * @default 'CloseCircle'
   */
  icon?: JSX.Element

  /**
   * Disable all component
   * @default false
   */
  disabled?: boolean

  onActionClick?: () => void
}

/**
 * Render an action badge element
 * @param ActionBadgeProps
 */

export const ActionBadge = ({
  children,
  color = 'green',
  size = 'md',
  className,
  avatarUrl,
  disabled = false,
  icon,
  onActionClick,
  ...props
}: ActionBadgeProps) => {
  let iconSize: number
  switch (size) {
    case 'xs':
      iconSize = 10
      break
    case 'sm':
      iconSize = 12
      break
    case 'md':
      iconSize = 16
      break
    case 'lg':
      iconSize = 24
      break

    default:
      iconSize = 10
      break
  }

  return (
    <ActionBadgeStyle.Container
      color={color}
      size={size}
      disabled={disabled}
      {...props}
    >
      <ActionBadgeStyle.Content gap={size}>
        {avatarUrl && (
          <ActionBadgeStyle.Avatar.Container size={size}>
            <ActionBadgeStyle.Avatar.Content src={avatarUrl} />
          </ActionBadgeStyle.Avatar.Container>
        )}
        {children}
        <ActionBadgeStyle.IconContainer
          disabled={disabled}
          onClick={onActionClick}
        >
          {icon ?? <CloseCircle size={iconSize} />}
        </ActionBadgeStyle.IconContainer>
      </ActionBadgeStyle.Content>
    </ActionBadgeStyle.Container>
  )
}
