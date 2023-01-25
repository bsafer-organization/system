import { createContext } from 'react'

interface SidebarMenuContextProps {
  isOpen?: boolean
  activedRoute?: string
}

export const SidebarMenuContext = createContext<SidebarMenuContextProps>(
  {} as SidebarMenuContextProps
)
