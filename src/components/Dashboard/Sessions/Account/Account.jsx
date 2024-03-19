import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import { AccountContent } from './AccountContent'
import './Account.sass'

export function Account() {
  return (
    <Col xs={12} className="account">
      <Row>
        <Col xs={12} className="font-md-special mb-5">
          Saldo em conta
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="font-md color-green-100">R$ 1.000,00</p>
          <p className="font-sm-special">Cheque especial</p>
          <p className="font-sm">R$ 5.000,00</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Tabs className="mt-5 pt-lg-2" defaultActiveKey="past">
            <Tab eventKey="past" title="Ultimos lançamentos">
              <AccountContent />
            </Tab>
            <Tab eventKey="future" title="Lançamentos futuros">
              <AccountContent />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Col>
  )
}
