import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import heroBackground from '../../../assests/hero.png'
import heroLogo from '../../../assests/logo-hero.png'
import heroLogoDesktop from '../../../assests/logo-hero-desktop.png'
import './Hero.sass'

export function Hero() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/login', { preventScrollReset: true })
  }

  return (
    <div className="relative">
      <Image src={heroBackground} alt="Imagem Hero" className="backgroundImg" />
      <Container className="relative py-2xl text-center">
        <Row className="pt-lg-6">
          <Col lg className="text-lg-end">
            <Image src={heroLogo} alt="Imagem Logo Hero" className="d-lg-none" width={200} />
            <Image
              src={heroLogoDesktop}
              alt="Imagem Logo Hero"
              className="d-none d-lg-inline-block pt-5"
            />
          </Col>
          <Col lg className="text-lg-start">
            <p className="d-lg-none my-xl font-xs color-light">Pague suas contas pelo nosso APP</p>
            <p className="d-none d-lg-flex my-xl font-md color-light">
              Pague suas contas pelo nosso APP
            </p>
            <Button variant="outline-light px-2xl py-md font-xs" onClick={handleNavigate}>
              Abra sua conta
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
