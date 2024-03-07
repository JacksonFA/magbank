import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../components/Shared/Footer/Footer'
import { Header } from '../components/Shared/Header/Header'
import { Search } from '../components/Dashboard/Search/Search'

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="h-max">
        <Container>
          <Row className="py-xl">
            <Col>
              <Search display="d-flex d-lg-none" iconColor="#8c00b2" size={3} />
            </Col>
          </Row>
          <Row className="pb-5 mb-5">
            <Col xs={1} lg={1} />
            <Col xs={10} lg={5}>
              <Row>
                <Col xs={4} lg={2} className="flex-center">
                  <FontAwesomeIcon icon={faUser} size="3x" color="gray" />
                </Col>
                <Col xs={8} lg={10}>
                  <p className="font-sm-special">Felipe Campo</p>
                  <span className="color-gray-800 font-xs">agência: 1234 conta: 123</span>
                </Col>
              </Row>
            </Col>
            <Col xs={1} lg={6} />
          </Row>
          <Row>
            <Col lg={4} className="d-none d-lg-flex flex-center">
              <div className="flex-start-column gap-xl">
                <a href="#conta" className="color-purple-200 font-sm hover dec-none">
                  Minha conta
                </a>
                <a href="#pagamento" className="color-purple-200 font-sm hover dec-none">
                  Pagamento
                </a>
                <a href="#extrato" className="color-purple-200 font-sm hover dec-none">
                  Extrato
                </a>
              </div>
            </Col>
            <Col lg={8}>
              <p className="font-md">Extrato de conta</p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}
