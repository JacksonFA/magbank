import { Col, Image, Row } from 'react-bootstrap'
import { IconText } from '../../IconText/IconText'
import creditCard from '../../../assests/credit_card.png'
import { faCartShopping, faCreditCard, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons'

export function Resources() {
  return (
    <section className="container">
      <h3 className="color-purple-200 font-md text-center py-xl">Cartão de crédito</h3>
      <div className="flex-start-column gap-lg px-xl">
        <Row>
          <Col xs={12} className="mb-4">
            <IconText icon={faCreditCard}>Crédito Pessoal</IconText>
          </Col>
          <Col xs={12} className="mb-4">
            <IconText icon={faMobile}>APP</IconText>
          </Col>
          <Col xs={12} className="mb-4">
            <IconText icon={faCartShopping}>Pagamentos Online</IconText>
          </Col>
          <Col xs={12} className="mb-4">
            <IconText icon={faWallet}>Pagamento Digital</IconText>
          </Col>
        </Row>
      </div>
      <div className="text-center py-2xl">
        <Image src={creditCard} />
      </div>
    </section>
  )
}
