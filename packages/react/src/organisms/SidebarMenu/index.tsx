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

function Root(props: SidebarMenuProps['Root']) {
  const { children, isOpen = true, activedRoute } = props

  return (
    <SidebarMenuContext.Provider value={{ isOpen, activedRoute }}>
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

function MenuItemTooptip(props: MenuItemTooltipProps) {
  const { label, hidden, children } = props

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
  /**
   * SidebarMenu.Root is a container that envelops the links and guarantees the contracted or expanded operation. It also manages which link is active or not based on a string for comparison
   *
   * @param children
   * @param isOpen
   * @param activedRoute
   *
   * @returns div > ul
   */
  Root,

  /**
   * SidebarMenu.Item is an action button intended for use in routes. It is possible to insert a label, an icon and route information. It is also possible to listen to the click event for other tasks.
   *
   * @param icon
   * @param label
   * @param onClick
   * @param route
   * @param isActive
   * @param focusColor
   *
   * @returns li > button
   */
  Item
}
