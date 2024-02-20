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
  return (
    <div className={`${extendProps} container h-50`}>
      <Logo />
      <div className="h-30 w-30 relative px-xl">
        <Menu width={400} right customBurgerIcon={<img src="/icons/burgerIcon.svg" />}>
          <NavLinks className="flex-start-column gap-xl" />
          <NavButtons />
        </Menu>
      </div>
    </div>
  )
}
