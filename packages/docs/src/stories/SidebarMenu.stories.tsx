import { Heading, SidebarMenu } from '@bsafer-system/react'
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
  const [page, setPage] = useState('/home')

  function handleChangePage(goToPage?: string) {
    if (goToPage) setPage(goToPage)
  }

  return (
    <div className="flex ring-1 ring-grey-300 rounded-xl w-screen max-w-5xl">
      <aside className="w-60">
        <SidebarMenu.Root>
          <SidebarMenu.Item
            icon={Building}
            label="Home"
            path="/home"
            onClick={handleChangePage}
            isActive={page === '/home'}
          />
          <SidebarMenu.Item
            icon={Danger}
            label="Dashboard"
            path="/dashboard"
            onClick={handleChangePage}
            isActive={page === '/dashboard'}
          />
          <SidebarMenu.Item
            icon={Figma}
            label="Users"
            path="/figma"
            onClick={handleChangePage}
            isActive={page === '/figma'}
          />
          <SidebarMenu.Item
            icon={Airplane}
            label="Flight Simulator com um nome muito grande que não cabe numa linha só"
            path="/simulator"
            onClick={handleChangePage}
            isActive={page === '/simulator'}
          />
        </SidebarMenu.Root>
      </aside>
      <main className="flex-1 flex justify-center items-center">
        <Heading className="center">{page}</Heading>
      </main>
    </div>
  )
}
