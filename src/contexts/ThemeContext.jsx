import { createContext, useEffect, useState } from 'react'
import { node } from 'prop-types'

export const ThemeContext = createContext()

const currentTheme = localStorage.getItem('theme') || 'light'

ThemeProvider.propTypes = {
  children: node.isRequired,
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
