import { createContext, useState } from 'react'
import { node } from 'prop-types'

export const LoginTypeContext = createContext()

LoginTypeProvider.propTypes = {
  children: node.isRequired,
}

export function LoginTypeProvider({ children }) {
  const [type, setType] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  return (
    <LoginTypeContext.Provider value={{ type, setType, isLogged, setIsLogged }}>
      {children}
    </LoginTypeContext.Provider>
  )
}
