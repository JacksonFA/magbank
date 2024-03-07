import { Col, Image, Row } from 'react-bootstrap'
import { faCartShopping, faCreditCard, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons'
import { IconText } from '../../Shared/IconText/IconText'
import creditCard from '../../../assests/credit_card.png'
import './Resources.sass'

export function Resources() {
  return (
    <section id="cartao" className="container py-2xl">
      <Row className="p-lg-5">
        <Col lg>
          <h3 className="color-purple-200 font-md py-xl title">Cartão de crédito</h3>
          <div>
            <Row>
              <Col xs={12} lg={6} className="mb-4">
                <IconText icon={faCreditCard}>Crédito Pessoal</IconText>
              </Col>
              <Col xs={12} lg={6} className="mb-4">
                <IconText icon={faMobile}>APP</IconText>
              </Col>
              <Col xs={12} lg={6} className="mb-4">
                <IconText icon={faCartShopping}>Pagamentos Online</IconText>
              </Col>
              <Col xs={12} lg={6} className="mb-4">
                <IconText icon={faWallet}>Pagamento Digital</IconText>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg>
          <div className="text-center py-2xl">
            <Image src={creditCard} className="credit-card" />
          </div>
        </Col>
      </Row>
    </section>
  )
}
