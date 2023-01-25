import { useContext } from 'react'
import { Tooltip } from '../../core/Tooltip'
import { SidebarMenuContext } from './context/SidebarMenuProvider'
import {
  ItemContainer,
  ItemLink,
  ItemsWrapper,
  RootContainer,
  TextMenu
} from './styles'
import { MenuItemTooltipProps, SidebarMenuProps } from './types'

export type { SidebarMenuProps } from './types'

function Root({
  children,
  isOpen = true,
  activedRoute: isActiveRoutes
}: SidebarMenuProps['Root']) {
  return (
    <SidebarMenuContext.Provider
      value={{ isOpen, activedRoute: isActiveRoutes }}
    >
      <RootContainer isOpen={isOpen}>
        <ItemsWrapper>{children}</ItemsWrapper>
      </RootContainer>
    </SidebarMenuContext.Provider>
  )
}

function Item(props: SidebarMenuProps['Item']) {
  const { icon: Icon, label, onClick, route, isActive, focusColor } = props
  const { isOpen, activedRoute: isActiveRoutes } =
    useContext(SidebarMenuContext)

  function handleClick() {
    if (onClick) onClick(route)
  }

  const activeBoolean = !!(
    isActive || (route ? isActiveRoutes?.includes(route) : null)
  )

  return (
    <ItemContainer>
      <MenuItemTooptip label={label} hidden={isOpen}>
        <ItemLink
          onClick={handleClick}
          isActive={activeBoolean}
          focusColor={focusColor}
          className="sidebar-item-menu"
        >
          <Icon size={16} className="shrink-0" />
          {isOpen && (
            <TextMenu size="sm" className="sidebar-text-menu">
              {label}
            </TextMenu>
          )}
        </ItemLink>
      </MenuItemTooptip>
    </ItemContainer>
  )
}

function MenuItemTooptip({ label, hidden, children }: MenuItemTooltipProps) {
  if (hidden) {
    return <>{children}</>
  }

  return (
    <Tooltip
      text={label}
      delayDuration={100}
      position={{
        side: 'right'
      }}
    >
      {children}
    </Tooltip>
  )
}

export const SidebarMenu = {
  Root,
  Item
}
