import { Row, Col } from 'react-bootstrap'
import { array, bool } from 'prop-types'
import { Each } from '../../../Shared/Each/Each'
import { Show } from '../../../Shared/Show/Show'
import { Loading } from '../../../Shared/Loading/Loading'

Table.propTypes = {
  transactions: array,
  isLoading: bool,
}

export function Table({ transactions, isLoading }) {
  return (
    <>
      <Row className="w-full mt-5 py-sm text-center font-sm-special">
        <Col>Data</Col>
        <Col>Descrição</Col>
        <Col>Valor (R$)</Col>
      </Row>
      <Each
        of={transactions}
        render={({ id, date, description, value, isIncome }) => (
          <Row key={id} className="w-full py-sm text-center">
            <Col className="font-sm">{date}</Col>
            <Col className="font-xs">{description}</Col>
            <Col className={`font-xs-special ${isIncome ? 'color-green-100' : 'color-red-200'}`}>
              {isIncome ? `+R$ ${value}` : `-R$ ${value}`}
            </Col>
          </Row>
        )}
      />
      <Show>
        <Show.When isTrue={isLoading}>
          <Loading withBackground={false} text="Carregando..." />
        </Show.When>
      </Show>
    </>
  )
}
