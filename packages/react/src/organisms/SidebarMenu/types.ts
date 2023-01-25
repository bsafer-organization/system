import { Icon } from 'iconsax-react'
import React from 'react'
import { ItemLinkProps } from './styles'

interface ItemProps {
  /**
   * Activating an item leaves it with the active focus color
   * @default false
   */
  isActive?: boolean
  /**
   * Defines which focus color will be used when the link is active
   * `primary | secondary | black | undefined`
   * @default 'primary'
   */
  focusColor?: ItemLinkProps['focusColor']
  /**
   * Define an icon to render aside label
   * @requires
   */
  icon: Icon | React.ElementType
  /**
   * Define an label to link
   * @requires
   */
  label: string
  /**
   * Defines what the route argument will be when the link is clicked
   */
  route?: string
  /**
   * This event takes the route parameter and makes it available for an action
   */
  onClick?: (route?: string) => void
}

interface RootProps {
  /**
   * Define is menu is open or close
   */
  isOpen?: boolean
  /**
   * Receiving the active route, an internal comparison is made to find out if the route fits this value, making the link enter in focus
   */
  activedRoute?: string
  /**
   * Component content
   */
  children?: React.ReactNode
}

export interface SidebarMenuProps {
  Root: RootProps
  Item: ItemProps
}

export interface MenuItemTooltipProps {
  label: string
  hidden?: boolean
  children: React.ReactNode
}
