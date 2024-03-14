import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../components/Shared/Footer/Footer'
import { Header } from '../components/Shared/Header/Header'
import { Search } from '../components/Dashboard/Search/Search'
import { Menus } from '../components/Dashboard/Menus/Menus'
import { Sessions } from '../components/Dashboard/Sessions/Sessions'
import { DashboardProvider } from '../contexts/DashboardContext'

export default function Dashboard() {
  return (
    <DashboardProvider>
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
              <Menus display="flex-start-column gap-xl" textColor="color-purple-200" />
            </Col>
            <Col lg={8}>
              <Sessions />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </DashboardProvider>
  )
}
