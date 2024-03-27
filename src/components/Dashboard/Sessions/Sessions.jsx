import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { DashboardContext } from '../../../contexts/DashboardContext'
import { Account } from './Account/Account'
import { Payment } from './Payment/Payment'
import { Statement } from './Statement/Statement'
import { Show } from '../../Shared/Show/Show'

export function Sessions() {
  const { visibleMenu } = useContext(DashboardContext)
  return (
    <Container className="h-full py-xl">
      <Show>
        <Show.When isTrue={visibleMenu === 'account'}>
          <Account />
        </Show.When>
        <Show.When isTrue={visibleMenu === 'payment'}>
          <Payment />
        </Show.When>
        <Show.Else>
          <Statement />
        </Show.Else>
      </Show>
    </Container>
  )
}
