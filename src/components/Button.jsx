import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function Button() {
  const { theme, setTheme } = useContext(ThemeContext)

  function handleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={handleTheme}>Alterar Tema para: {theme === 'dark' ? 'light' : 'dark'}</button>
  )
}
