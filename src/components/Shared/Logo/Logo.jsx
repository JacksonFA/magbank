import { useContext } from 'react'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'

export function Logo() {
  const { isLogged } = useContext(LoginTypeContext)
  const href = isLogged ? '#' : '/#'

  return (
    <a href={href} className="dec-none color-light hover">
      <h1 className="w-full font-lg">
        <i>
          <span className="font-lg-special">MAG</span>
          bank
        </i>
      </h1>
    </a>
  )
}
