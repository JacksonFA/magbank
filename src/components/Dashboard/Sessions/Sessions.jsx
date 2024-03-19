import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { DashboardContext } from '../../../contexts/DashboardContext'
import { Account } from './Account/Account'
import { Payment } from './Payment/Payment'
import { Statement } from './Statement/Statement'

export function Sessions() {
  const { visibleMenu } = useContext(DashboardContext)
  return (
    <Container className="h-full py-xl">
      {visibleMenu === 'account' && <Account />}
      {visibleMenu === 'payment' && <Payment />}
      {visibleMenu === 'statement' && <Statement />}
    </Container>
  )
}
