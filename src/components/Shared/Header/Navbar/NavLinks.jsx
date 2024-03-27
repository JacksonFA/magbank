import { useContext } from 'react'
import { string, func } from 'prop-types'
import { Search } from '../../../Dashboard/Search/Search'
import { LoginTypeContext } from '../../../../contexts/LoginTypeContext'
import { Menus } from '../../../Dashboard/Menus/Menus'
import { Show } from '../../Show/Show'

NavLinks.propTypes = {
  className: string.isRequired,
  closeMenu: func,
}

export function NavLinks({ className, closeMenu }) {
  const { isLogged } = useContext(LoginTypeContext)

  return (
    <div className={className}>
      <Show>
        <Show.When isTrue={isLogged}>
          <Search display="d-none d-lg-flex" />
          <Menus
            display="d-lg-none flex-start-column gap-xl"
            textColor="color-white"
            closeMenu={closeMenu}
          />
        </Show.When>
        <Show.Else>
          <a href="#cartao" className="color-light font-sm hover dec-none" onClick={closeMenu}>
            Cartão
          </a>
          <a href="#quemsomos" className="color-light font-sm hover dec-none" onClick={closeMenu}>
            Quem somos
          </a>
          <a href="#faq" className="color-light font-sm hover dec-none" onClick={closeMenu}>
            FAQ
          </a>
        </Show.Else>
      </Show>
    </div>
  )
}
