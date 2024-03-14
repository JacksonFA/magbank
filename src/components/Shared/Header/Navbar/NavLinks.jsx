import { useContext } from 'react'
import { string } from 'prop-types'
import { Search } from '../../../Dashboard/Search/Search'
import { LoginTypeContext } from '../../../../contexts/LoginTypeContext'
import { Menus } from '../../../Dashboard/Menus/Menus'

NavLinks.propTypes = {
  className: string.isRequired,
}

export function NavLinks({ className }) {
  const { isLogged } = useContext(LoginTypeContext)
  return (
    <div className={className}>
      {isLogged ? (
        <>
          <Search display="d-none d-lg-flex" />
          <Menus display="d-lg-none flex-start-column gap-xl" textColor="color-white" />
        </>
      ) : (
        <>
          <a href="#cartao" className="color-light font-sm hover dec-none">
            Cartão
          </a>
          <a href="#quemsomos" className="color-light font-sm hover dec-none">
            Quem somos
          </a>
          <a href="#faq" className="color-light font-sm hover dec-none">
            FAQ
          </a>
        </>
      )}
    </div>
  )
}
