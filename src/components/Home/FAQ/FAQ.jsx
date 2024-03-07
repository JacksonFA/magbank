import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCreditCardAlt,
  faMoneyBillTransfer,
  faUser,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons'
import { QAs } from './QAs'
import { IconText } from '../../Shared/IconText/IconText'

export function FAQ() {
  return (
    <section id="faq" className="bg-gray-400 color-white py-2xl">
      <Container>
        <Row>
          <Col>
            <h3 className="font-md text-center py-xl">Dúvidas Frequentes</h3>
            <Row className="d-lg-none text-center">
              <Col>
                <FontAwesomeIcon icon={faUserCheck} color="white" size="3x" />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faCreditCardAlt} color="white" size="3x" />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faMoneyBillTransfer} color="white" size="3x" />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faUser} color="white" size="3x" />
              </Col>
              <QAs />
            </Row>
            <Row className="d-none d-lg-flex pb-5">
              <Col className="mt-5">
                <IconText
                  icon={faUserCheck}
                  color="color-white"
                  size={3}
                  rowClassName="pt-5"
                  colClassName="font-sm"
                >
                  Atendimento
                </IconText>
                <IconText
                  icon={faCreditCardAlt}
                  color="color-white"
                  size={3}
                  rowClassName="pt-5"
                  colClassName="font-sm"
                >
                  Cartão de credito
                </IconText>
                <IconText
                  icon={faMoneyBillTransfer}
                  color="color-white"
                  size={3}
                  rowClassName="pt-5"
                  colClassName="font-sm"
                >
                  Financiamento
                </IconText>
                <IconText
                  icon={faUser}
                  color="color-white"
                  size={3}
                  rowClassName="pt-5"
                  colClassName="font-sm"
                >
                  Sua conta
                </IconText>
              </Col>
              <Col>
                <QAs lg />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
