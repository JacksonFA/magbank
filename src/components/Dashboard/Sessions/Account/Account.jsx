import { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import { AccountContent } from './AccountContent'
import './Account.sass'

export function Account() {
  const [clicked, setClicked] = useState(false)

  return (
    <Col xs={12} className="account">
      <Row>
        <Col xs={12} className="font-md-special mb-5" onClick={() => setClicked(!clicked)}>
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
              <AccountContent tab="last" />
            </Tab>
            <Tab eventKey="future" title="Lançamentos futuros">
              <AccountContent tab="future" />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Col>
  )
}
