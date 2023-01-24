import {
  ItemContainer,
  ItemLink,
  ItemsWrapper,
  RootContainer,
  TextMenu
} from './styles'
import { SidebarMenuProps } from './types'

export * from './types'

function Root({ children, isContracted }: SidebarMenuProps['Root']) {
  return (
    <RootContainer isContracted={isContracted}>
      <ItemsWrapper>{children}</ItemsWrapper>
    </RootContainer>
  )
}

function Item(props: SidebarMenuProps['Item']) {
  const { icon: Icon, label, onClick, route, isActive, focusColor } = props

  function handleClick() {
    if (onClick) onClick(route)
  }

  return (
    <ItemContainer>
      <ItemLink
        onClick={handleClick}
        isActive={isActive}
        focusColor={focusColor}
        className="sidebar-item-menu"
      >
        <Icon size={16} className="shrink-0" />
        <TextMenu size="sm" className="sidebar-text-menu">
          {label}
        </TextMenu>
      </ItemLink>
    </ItemContainer>
  )
}

export const SidebarMenu = {
  Root,
  Item
}
