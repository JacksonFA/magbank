import { Container, Row, Col, Image } from 'react-bootstrap'
import { LogoFooter } from '../Logo/FooterLogo'
import './Footer.scss'

import applestore from '../../assests/applestore.png'
import googleplay from '../../assests/googleplay.png'
import facebookIcon from '../../assests/icons8-facebook-50.png'
import twitterIcon from '../../assests/icons8-twitter-50.png'
import youtubeIcon from '../../assests/icons8-youtube-50.png'

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center py-5">
          <Col xs={12} lg={6} className="text-lg-left">
            <LogoFooter />
          </Col>
          <Col className="d-none d-lg-block " xs={12} lg={4}>
            <Image src={applestore} />
            <Image src={googleplay} style={{ marginLeft: '15px' }} />
          </Col>
          <Col className="d-lg-none mb-5 mt-5" xs={12} lg={4}>
            <Image src={applestore} />
            <Image src={googleplay} style={{ marginLeft: '15px' }} />
          </Col>
          <Col xs={12} lg={2} className="d-flex align-items-center justify-content-center">
            <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image className="icon" src={facebookIcon} />
            </a>
            <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Image className="icon" src={twitterIcon} />
            </a>
            <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
              <Image className="icon" src={youtubeIcon} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
