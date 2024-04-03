import { useState } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import { string } from 'prop-types'
import { NavLinks } from './NavLinks'
import { NavButtons } from './NavButtons'
import { Logo } from '../../Logo/Logo'
import './Mobile.sass'

Mobile.propTypes = {
  extendProps: string.isRequired,
}

export function Mobile({ extendProps }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleStateChange(state) {
    setMenuOpen(state.isOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className={`${extendProps} container h-50`}>
      <Logo />
      <div className="h-30 w-30 relative px-xl">
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
          width={400}
          right
          customBurgerIcon={<img src="/icons/burgerIcon.svg" />}
        >
          <NavLinks className="flex-start-column gap-xl" closeMenu={closeMenu} />
          <NavButtons />
        </Menu>
      </div>
    </div>
  )
}
