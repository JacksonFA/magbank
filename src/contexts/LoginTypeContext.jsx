import { createContext, useState } from 'react'
import { node } from 'prop-types'

export const LoginTypeContext = createContext()

LoginTypeProvider.propTypes = {
  children: node.isRequired,
}

export function LoginTypeProvider({ children }) {
  const [type, setType] = useState('')

  return <LoginTypeContext.Provider value={{ type, setType }}>{children}</LoginTypeContext.Provider>
}
