import { createContext, useContext, useState } from 'react'

const Ctx = createContext({ open: false, toggle: () => {}, close: () => {} })
export const useMobileNav = () => useContext(Ctx)

export function MobileNavProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = {
    open,
    toggle: () => setOpen((o) => !o),
    close: () => setOpen(false),
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
