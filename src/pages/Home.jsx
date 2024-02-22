import { Button, Col, Image, Row } from 'react-bootstrap'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import creditCard from '../assests/credit_card.png'
import card1Img from '../assests/card1.png'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* CARTÃO */}
        <section className="container light-theme h-max">
          <h3 className="color-purple-200 font-md text-center py-xl">Cartão de crédito</h3>
          <div className="flex-start-column gap-lg px-xl">
            <Row>
              <Col className="text-center col-2">
                <Image src="/icons/credit_card.png" alt="ícone de um cartão de crédito" />
              </Col>
              <Col className="col-6">
                <p>Cartão Pessoal</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center col-2">
                <Image src="/icons/phone.png" alt="ícone de um celular" />
              </Col>
              <Col className="col-6">
                <p>APP</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center col-2">
                <Image src="/icons/shopping_cart.png" alt="ícone de um carrinho de compras" />
              </Col>
              <Col className="col-6">
                <p>Pagamentos Online</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center col-2">
                <Image src="/icons/wallet.png" alt="ícone de uma carteira" />
              </Col>
              <Col className="col-6">
                <p>Carteira Digital</p>
              </Col>
            </Row>
          </div>
          <div className="text-center py-2xl">
            <Image src={creditCard} />
          </div>
          <div className="bg-white">
            <Image src={card1Img} />
            <h4>Lorem ipsum dolor sit</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae ipsam placeat
              inventore sed obcaecati expedita sunt qui labore maxime ab, sit voluptates, minima
              debitis vel eius! Accusamus, quibusdam veniam!
            </p>
            <Button variant="danger">Peça já o seu</Button>
          </div>
        </section>
        {/* QUEM SOMOS */}
        {/* FAQ */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
