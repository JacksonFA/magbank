import { Row, Col } from 'react-bootstrap'
import { array } from 'prop-types'

Table.propTypes = {
  transactions: array.isRequired,
}

export function Table({ transactions }) {
  return (
    <>
      <Row className="w-full mt-5 py-sm text-center font-sm-special">
        <Col>Data</Col>
        <Col>Descrição</Col>
        <Col>Valor (R$)</Col>
      </Row>
      {transactions &&
        transactions.map(({ id, date, description, value }) => (
          <Row key={id} className="w-full py-sm text-center">
            <Col className="font-sm">{date}</Col>
            <Col className="font-xs">{description}</Col>
            <Col className="font-xs-special">{value}</Col>
          </Row>
        ))}
    </>
  )
}
