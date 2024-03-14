import { useContext } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext'
import { Account } from './Account/Account'
import { Payment } from './Payment/Payment'
import { Statement } from './Statement/Statement'

export function Sessions() {
  const { visibleMenu } = useContext(DashboardContext)
  return (
    <>
      {visibleMenu === 'account' && <Account />}
      {visibleMenu === 'payment' && <Payment />}
      {visibleMenu === 'statement' && <Statement />}
    </>
  )
}
