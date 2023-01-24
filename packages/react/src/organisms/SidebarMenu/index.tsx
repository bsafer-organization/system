import { Text } from '../../core/Text'
import { ItemContainer, ItemLink, ItemsWrapper, RootContainer } from './styles'
import { SidebarMenuProps } from './types'

export * from './types'

function Root({ children }: SidebarMenuProps['Root']) {
  return (
    <RootContainer>
      <ItemsWrapper>{children}</ItemsWrapper>
    </RootContainer>
  )
}

function Item(props: SidebarMenuProps['Item']) {
  const { icon: Icon, label, onGoToRoute, route, isActive, focusColor } = props

  function handleClick() {
    if (onGoToRoute) onGoToRoute(route)
  }

  return (
    <ItemContainer>
      <ItemLink
        onClick={handleClick}
        isActive={isActive}
        focusColor={focusColor}
      >
        <Icon size={16} className="shrink-0" />
        <Text size="sm">{label}</Text>
      </ItemLink>
    </ItemContainer>
  )
}

export const SidebarMenu = {
  Root,
  Item
}
