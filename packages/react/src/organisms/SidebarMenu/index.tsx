import { ReactElement, useContext } from 'react'
import { Tooltip } from '../../core/Tooltip'
import { SidebarMenuContext } from './context/SidebarMenuProvider'
import {
  AbsoluteContainer,
  FooterContainer,
  ItemContainer,
  ItemLink,
  ListContainer,
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
        <AbsoluteContainer isRootContainerOpen={isOpen}>
          <>{children}</>
        </AbsoluteContainer>
      </RootContainer>
    </SidebarMenuContext.Provider>
  )
}

function List({ children }: SidebarMenuProps['List']) {
  return (
    <ListContainer>
      <>{children}</>
    </ListContainer>
  )
}

function Footer({ children }: SidebarMenuProps['Footer']) {
  return (
    <footer>
      <FooterContainer>
        <>{children}</>
      </FooterContainer>
    </footer>
  )
}

function Item(
  props: SidebarMenuProps['Item']
): ReactElement<SidebarMenuProps['Item']> {
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
    <Tooltip.Root delayDuration={100}>
      <Tooltip.Trigger>{children}</Tooltip.Trigger>
      <Tooltip.Content side="right">{label}</Tooltip.Content>
    </Tooltip.Root>
  )
}

export const SidebarMenu = {
  /**
   * SidebarMenu.Root is a container that envelops the links and guarantees the contracted or expanded operation. It also manages which link is active or not based on a string for comparison
   * @param children
   * @param isOpen
   * @param activedRoute
   * @example
   *  <SidebarMenu.Root>
   *
   *    # List - Expanded and scrollable container with items
   *    <SidebarMenu.List>
   *      <SidebarMenu.Item />
   *    </SidebarMenu.List>
   *
   *    # Footer - Footer container no scrollable with item
   *    <SidebarMenu.Footer>
   *      <SidebarMenu.Item />
   *    </SidebarMenu.Footer>
   *
   *  </SidebarMenu.Root>
   *
   *
   */
  Root,
  /**
   * SidebarMenu.List is a scrollable container that should contain a list of items. This container is `flex-1`, so it expands into available space
   * @param children
   */
  List,
  /**
   * SidebarMenu.Footer is a no-scrollable container that can be contain a list of items. This container stay above of the SidebarMenu.List
   * @param children
   */
  Footer,
  /**
   * SidebarMenu.Item is an action button intended for use in routes. It is possible to insert a label, an icon and route information. It is also possible to listen to the click event for other tasks.
   *
   * @param icon
   * @param label
   * @param onClick
   * @param route
   * @param isActive
   * @param focusColor
   */
  Item
}
