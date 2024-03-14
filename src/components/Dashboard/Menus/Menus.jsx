import { useContext } from 'react'
import { string } from 'prop-types'
import { DashboardContext } from '../../../contexts/DashboardContext'

Menus.propTypes = {
  display: string.isRequired,
  textColor: string.isRequired,
}

export function Menus({ display, textColor }) {
  const { setVisibleMenu } = useContext(DashboardContext)

  return (
    <div className={display}>
      <a
        href="#cartao"
        className={`${textColor} font-sm hover dec-none`}
        onClick={() => setVisibleMenu('account')}
      >
        Minha conta
      </a>
      <a
        href="#quemsomos"
        className={`${textColor} font-sm hover dec-none`}
        onClick={() => setVisibleMenu('payment')}
      >
        Pagamento
      </a>
      <a
        href="#faq"
        className={`${textColor} font-sm hover dec-none`}
        onClick={() => setVisibleMenu('statement')}
      >
        Extrato
      </a>
    </div>
  )
}
