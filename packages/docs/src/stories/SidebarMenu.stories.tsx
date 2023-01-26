import { Button, Heading, SidebarMenu } from '@bsafer-system/react'
import { Meta } from '@storybook/react'
import { Airplane, Building, Danger, Figma } from 'iconsax-react'
import { useState } from 'react'

export default {
  title: 'Organisms/SidebarMenu',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=6%3A58&t=FmaJyTGuTzAm78Q0-0'
    }
  }
} as Meta

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState('/home')

  function handleChangePage(goToPage?: string) {
    if (goToPage) setPage(goToPage)
  }

  function handleContractMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <Button onClick={handleContractMenu} className="mb-3">
        {!isOpen ? 'Contrair' : 'Expandir'}
      </Button>
      <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-96">
        <aside className="w-96">
          <SidebarMenu.Root isOpen={isOpen} activedRoute={page}>
            <SidebarMenu.Item
              icon={Building}
              label="Home"
              route="/home"
              onClick={handleChangePage}
            />
            <SidebarMenu.Item
              icon={Danger}
              label="Dashboard"
              route="/dashboard"
              onClick={handleChangePage}
            />
            <SidebarMenu.Item
              icon={Figma}
              label="Users"
              route="/figma"
              onClick={handleChangePage}
            />
            <SidebarMenu.Item
              icon={Airplane}
              label="Flight Simulator"
              route="/simulator"
              onClick={handleChangePage}
            />
          </SidebarMenu.Root>
        </aside>
        <main className="flex-1 flex justify-center items-center">
          <Heading className="center">{page}</Heading>
        </main>
      </div>
    </div>
  )
}

export const FocusColor = () => {
  const [page, setPage] = useState('/primary')

  function handleChangePage(goToPage?: string) {
    if (goToPage) setPage(goToPage)
  }

  return (
    <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-96">
      <aside className="w-60">
        <SidebarMenu.Root>
          <SidebarMenu.Item
            icon={Building}
            label="Primary"
            route="/primary"
            onClick={handleChangePage}
            isActive={page === '/primary'}
            focusColor="primary"
          />
          <SidebarMenu.Item
            icon={Danger}
            label="Secondary"
            route="/secondary"
            onClick={handleChangePage}
            isActive={page === '/secondary'}
            focusColor="secondary"
          />
          <SidebarMenu.Item
            icon={Figma}
            label="Black"
            route="/black"
            onClick={handleChangePage}
            isActive={page === '/black'}
            focusColor="black"
          />
        </SidebarMenu.Root>
      </aside>
      <main className="flex-1 flex justify-center items-center">
        <Heading className="center">{page}</Heading>
      </main>
    </div>
  )
}
