import { Col, Tabs, Tab, Form, Row } from 'react-bootstrap'
import { PaymentForm } from './PaymentForm'
import './Payment.sass'

export function Payment() {
  return (
    <Col xs={12} lg={8} className="payment">
      <Row>
        <Col className="font-md-special">Pagamentos</Col>
      </Row>
      <Tabs className="mt-5 pt-lg-2" defaultActiveKey="boleto">
        <Tab eventKey="boleto" title="Boleto">
          <PaymentForm inputLabel="Código de barras" inputPlaceholder="Insira o código de barras" />
        </Tab>
        <Tab eventKey="transfer" title="Transferência">
          <PaymentForm inputLabel="Conta de destino" inputPlaceholder="Insira a conta de destino" />
        </Tab>
      </Tabs>
    </Col>
  )
}
