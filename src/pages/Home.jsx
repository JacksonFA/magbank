import { useContext, useState } from 'react'
import { ButtonDown } from '../components/ButtonDown'
import { ButtonUp } from '../components/ButtonUp'
import { CountContext } from '../contexts/CountContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { Button } from '../components/Button'

export default function Home() {
  const [count, setCount] = useState(0)
  const { theme } = useContext(ThemeContext)
  const bgColor = theme === 'dark' ? 'dark-theme' : 'light-theme'

  function handleUp() {
    setCount(count + 1)
  }

  function handleDown() {
    setCount(count - 1)
  }

  return (
    <CountContext.Provider value={count}>
      <main className={`w-full h-max text-center grid-center gap-xl ${bgColor}`}>
        <ButtonUp handle={handleUp}>Add</ButtonUp>
        <p>{count}</p>
        <ButtonDown handle={handleDown}>Down</ButtonDown>
        <Button />
      </main>
    </CountContext.Provider>
  )
}
