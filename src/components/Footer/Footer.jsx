import { Container, Row, Col, Image } from 'react-bootstrap'
import { FooterLogo } from '../Logo/FooterLogo'
import applestore from '../../assests/applestore.png'
import googleplay from '../../assests/googleplay.png'
import facebookIcon from '../../assests/facebook.png'
import twitterIcon from '../../assests/twitter.png'
import youtubeIcon from '../../assests/youtube.png'

export function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row className="text-center py-5">
          <Col xs={12} lg={5} className="text-lg-start">
            <FooterLogo />
          </Col>
          <Col className="d-none d-lg-flex gap-md" lg={5}>
            <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noopener noreferrer">
              <Image src={applestore} />
            </a>
            <a href="https://play.google.com/store/" target="_blank" rel="noopener noreferrer">
              <Image src={googleplay} />
            </a>
          </Col>
          <Col className="flex-center d-lg-none my-5 gap-md" xs={12}>
            <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noopener noreferrer">
              <Image src={applestore} width={80} />
            </a>
            <a href="https://play.google.com/store/" target="_blank" rel="noopener noreferrer">
              <Image src={googleplay} width={80} />
            </a>
          </Col>
          <Col xs={12} lg={2} className="flex-center">
            <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image width={30} height={30} src={facebookIcon} />
            </a>
            <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Image width={30} height={30} src={twitterIcon} />
            </a>
            <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
              <Image width={30} height={30} src={youtubeIcon} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
