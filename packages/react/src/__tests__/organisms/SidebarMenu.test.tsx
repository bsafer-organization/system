import { describe, it } from '@jest/globals'
import { screen, render, act, waitFor } from '@testing-library/react'
import { SidebarMenu } from '../../organisms/SidebarMenu'
import '@testing-library/jest-dom'
import { Add } from 'iconsax-react'
import userEvent from '@testing-library/user-event'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('Components: SidebarMenu', () => {
  it('should render the component', () => {
    render(
      <SidebarMenu.Root isOpen={true}>
        <SidebarMenu.List>
          <SidebarMenu.Item icon={Add} label="Home" route="/home" />
          <SidebarMenu.Item icon={Add} label="Dashboard" route="/dashboard" />
          <SidebarMenu.Item icon={Add} label="Users" route="/figma" />
        </SidebarMenu.List>
        <SidebarMenu.Footer>
          <SidebarMenu.Item
            icon={Add}
            label="Quit"
            route="/quit"
            focusColor="black"
            isActive
          />
        </SidebarMenu.Footer>
      </SidebarMenu.Root>
    )

    expect(screen.getByTestId('sidebar__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('sidebar_list_container__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('sidebar_footer_container__testid')
    ).toBeInTheDocument()

    const sidebarMenuItens = screen.getAllByTestId('sidebar_item_text__testid')

    // FOOTER INCLUDED
    expect(sidebarMenuItens).toHaveLength(4)

    expect(sidebarMenuItens[0]).toHaveTextContent('Home')
    expect(sidebarMenuItens[1]).toHaveTextContent('Dashboard')
    expect(sidebarMenuItens[2]).toHaveTextContent('Users')
    expect(sidebarMenuItens[3]).toHaveTextContent('Quit')
  })

  it('should render the component, click on first list item and try to change current route', async () => {
    render(
      <SidebarMenu.Root isOpen={true} activedRoute="/dashboard">
        <SidebarMenu.List>
          <SidebarMenu.Item
            icon={Add}
            label="Home"
            onClick={(route) => {
              console.log(route)
            }}
          />
          <SidebarMenu.Item icon={Add} label="Dashboard" route="/dashboard" />
          <SidebarMenu.Item icon={Add} label="Users" route="/figma" />
        </SidebarMenu.List>
        <SidebarMenu.Footer>
          <SidebarMenu.Item
            icon={Add}
            label="Quit"
            route="/quit"
            focusColor="black"
            isActive
          />
        </SidebarMenu.Footer>
      </SidebarMenu.Root>
    )

    expect(screen.getByTestId('sidebar__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('sidebar_list_container__testid')
    ).toBeInTheDocument()

    const sidebarMenuItensLinks = screen.getAllByTestId(
      'sidebar_item_link__testid'
    )

    await act(async () => {
      await userEvent.click(sidebarMenuItensLinks[0])
    })
  })

  it('should render the component and hover some sidebar item to show tooltip', async () => {
    render(
      <SidebarMenu.Root isOpen={false}>
        <SidebarMenu.List>
          <SidebarMenu.Item icon={Add} label="Home" route="/home" />
          <SidebarMenu.Item icon={Add} label="Dashboard" route="/dashboard" />
          <SidebarMenu.Item icon={Add} label="Users" route="/figma" />
        </SidebarMenu.List>
        <SidebarMenu.Footer>
          <SidebarMenu.Item
            icon={Add}
            label="Quit"
            route="/quit"
            focusColor="black"
            isActive
          />
        </SidebarMenu.Footer>
      </SidebarMenu.Root>
    )

    expect(screen.getByTestId('sidebar__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('sidebar_list_container__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('sidebar_footer_container__testid')
    ).toBeInTheDocument()

    await act(async () => {
      await userEvent.hover(screen.getAllByTestId('tooltip_trigger__testid')[0])
    })

    await waitFor(() => {
      expect(screen.getByTestId('tooltip_content__testid')).toBeInTheDocument()
    })
  })
})
