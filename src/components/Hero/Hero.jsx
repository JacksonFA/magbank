import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import heroBackground from '../../assests/hero.png'
import heroLogo from '../../assests/logo-hero.png'
import './Hero.sass'

export function Hero() {
  return (
    <div className="relative">
      <Image src={heroBackground} alt="Imagem Hero" className="backgroundImg" />
      <Container className="relative py-2xl text-center">
        <Row>
          <Col lg>
            <Image src={heroLogo} alt="Imagem Logo Hero" className="" />
          </Col>
          <Col lg>
            <p className="my-xl font-xs color-white">Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light p-md">Abra sua conta</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
