import { Icon } from 'iconsax-react'
import React from 'react'
import { ItemLinkProps } from './styles'

interface ItemProps {
  isActive?: boolean
  focusColor?: ItemLinkProps['focusColor']
  icon: Icon | React.ElementType
  label: string
  route?: string
  onClick?: (path?: string) => void
}

interface RootProps {
  isContracted?: boolean
  children?: React.ReactNode
}

export interface SidebarMenuProps {
  Root: RootProps
  Item: ItemProps
}
