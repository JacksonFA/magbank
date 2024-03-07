import { useContext } from 'react'
import { string } from 'prop-types'
import { Search } from '../../../Dashboard/Search/Search'
import { LoginTypeContext } from '../../../../contexts/LoginTypeContext'

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
          <div className="d-lg-none flex-start-column gap-xl">
            <a href="#cartao" className="color-light font-sm hover dec-none">
              Minha conta
            </a>
            <a href="#quemsomos" className="color-light font-sm hover dec-none">
              Pagamento
            </a>
            <a href="#faq" className="color-light font-sm hover dec-none">
              Extrato
            </a>
          </div>
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
