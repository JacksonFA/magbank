import { createContext, useState } from 'react'
import { node } from 'prop-types'

export const DashboardContext = createContext()

DashboardProvider.propTypes = {
  children: node.isRequired,
}

export function DashboardProvider({ children }) {
  const [visibleMenu, setVisibleMenu] = useState('account')

  return (
    <DashboardContext.Provider value={{ visibleMenu, setVisibleMenu }}>
      {children}
    </DashboardContext.Provider>
  )
}
