import { Button, Heading, SidebarMenu } from '@bsafer-system/react'
import { Meta } from '@storybook/react'
import {
  Airplane,
  Building,
  Building3,
  Danger,
  Figma,
  Headphone,
  ImportCircle,
  Logout,
  PenClose,
  UserAdd
} from 'iconsax-react'
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
      <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-[600px]">
        <aside className="w-96">
          <SidebarMenu.Root isOpen={isOpen} activedRoute={page}>
            <SidebarMenu.List>
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
            </SidebarMenu.List>
          </SidebarMenu.Root>
        </aside>
        <main className="flex-1 flex justify-center items-center">
          <Heading className="center">{page}</Heading>
        </main>
      </div>
    </div>
  )
}

export const WithScrollableList = () => {
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
      <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-[400px]">
        <aside className="w-96">
          <SidebarMenu.Root isOpen={isOpen} activedRoute={page}>
            <SidebarMenu.List>
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
              <SidebarMenu.Item
                icon={UserAdd}
                label="Add user"
                route="/adduser"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Building3}
                label="Reports"
                route="/reports"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Danger}
                label="Danger"
                route="/danger"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={ImportCircle}
                label="Circle"
                route="/circle"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={PenClose}
                label="Pen Close"
                route="/penclose"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Headphone}
                label="Music"
                route="/music"
                onClick={handleChangePage}
              />
            </SidebarMenu.List>
          </SidebarMenu.Root>
        </aside>
        <main className="flex-1 flex justify-center items-center">
          <Heading className="center">{page}</Heading>
        </main>
      </div>
    </div>
  )
}

export const WithFooterList = () => {
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
      <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-[600px]">
        <aside className="w-96">
          <SidebarMenu.Root isOpen={isOpen} activedRoute={page}>
            <SidebarMenu.List>
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
            </SidebarMenu.List>
            <SidebarMenu.Footer>
              <SidebarMenu.Item
                icon={Logout}
                label="Quit"
                route="/quit"
                focusColor="black"
                onClick={() => alert('Leaving the app...')}
                isActive
              />
            </SidebarMenu.Footer>
          </SidebarMenu.Root>
        </aside>
        <main className="flex-1 flex justify-center items-center">
          <Heading className="center">{page}</Heading>
        </main>
      </div>
    </div>
  )
}

export const WithScrollableListAndFooter = () => {
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
      <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-[600px]">
        <aside className="w-96">
          <SidebarMenu.Root isOpen={isOpen} activedRoute={page}>
            <SidebarMenu.List>
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
              <SidebarMenu.Item
                icon={UserAdd}
                label="Add user"
                route="/adduser"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Building3}
                label="Reports"
                route="/reports"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Danger}
                label="Danger"
                route="/danger"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={ImportCircle}
                label="Circle"
                route="/circle"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={PenClose}
                label="Pen Close"
                route="/penclose"
                onClick={handleChangePage}
              />
              <SidebarMenu.Item
                icon={Headphone}
                label="Music"
                route="/music"
                onClick={handleChangePage}
              />
            </SidebarMenu.List>
            <SidebarMenu.Footer>
              <SidebarMenu.Item
                icon={Logout}
                label="Quit"
                route="/quit"
                focusColor="black"
                onClick={() => alert('Leaving the app...')}
                isActive
              />
            </SidebarMenu.Footer>
          </SidebarMenu.Root>
        </aside>
        <main className="flex-1 flex justify-center items-center">
          <Heading className="center">{page}</Heading>
        </main>
      </div>
    </div>
  )
}

export const FocusColors = () => {
  const [page, setPage] = useState('/primary')

  function handleChangePage(goToPage?: string) {
    if (goToPage) setPage(goToPage)
  }

  return (
    <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl h-96">
      <aside className="w-60">
        <SidebarMenu.Root>
          <SidebarMenu.List>
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
          </SidebarMenu.List>
        </SidebarMenu.Root>
      </aside>
      <main className="flex-1 flex justify-center items-center">
        <Heading className="center">{page}</Heading>
      </main>
    </div>
  )
}
