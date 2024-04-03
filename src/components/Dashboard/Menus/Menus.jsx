import { useContext, createRef } from 'react'
import { string, func } from 'prop-types'
import { DashboardContext } from '../../../contexts/DashboardContext'
import './Menus.sass'

Menus.propTypes = {
  display: string.isRequired,
  textColor: string.isRequired,
  closeMenu: func,
}

export function Menus({ display, textColor, closeMenu }) {
  const { setVisibleMenu } = useContext(DashboardContext)
  const linksRef = {
    account: createRef(),
    payment: createRef(),
    statement: createRef(),
  }

  function setActive(menu) {
    const active = ` ${textColor}-active`
    Object.keys(linksRef).forEach((ref) => {
      linksRef[ref].current.className = linksRef[ref].current.className.replace(active, '')
    })
    linksRef[menu].current.className += active
    setVisibleMenu(menu)
    if (closeMenu) {
      closeMenu()
    }
  }

  return (
    <div className={display}>
      <a
        href="#"
        ref={linksRef.account}
        className={`${textColor} ${textColor}-active menus font-sm dec-none`}
        onClick={() => setActive('account')}
      >
        Minha conta
      </a>
      <a
        href="#"
        ref={linksRef.payment}
        className={`${textColor} menus font-sm dec-none`}
        onClick={() => setActive('payment')}
      >
        Pagamento
      </a>
      <a
        href="#"
        ref={linksRef.statement}
        className={`${textColor} menus font-sm dec-none`}
        onClick={() => setActive('statement')}
      >
        Extrato
      </a>
    </div>
  )
}
