import { createContext, useContext, useState, useCallback } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  const [desktopOpen, setDesktopOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const open = isMobile ? mobileOpen : desktopOpen

  const toggle = useCallback(() => {
    if (isMobile) {
      setMobileOpen(v => !v)
    } else {
      setDesktopOpen(v => !v)
    }
  }, [isMobile])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <SidebarContext.Provider value={{ open, toggle, isMobile, closeMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  return useContext(SidebarContext)
}

export default SidebarContext
