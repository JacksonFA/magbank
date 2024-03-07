import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { faUserGroup, faMobile, faGlobe, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import backgroundImg from '../../../assests/institutional.png'
import backgroundImgDesktop from '../../../assests/institutional-desktop.png'
import { IconText } from '../../Shared/IconText/IconText'
import { ConfirmButton } from '../../Shared/ConfirmButton/ConfirmButton'
import './Institutional.sass'

export function Institutional() {
  return (
    <section id="quemsomos" className="bg-purple-100 color-white relative">
      <Image
        src={backgroundImg}
        alt="Background institucional"
        className="d-lg-none backgroundImg"
      />
      <Image
        src={backgroundImgDesktop}
        alt="Background institucional"
        className="d-none d-lg-block backgroundImg"
      />
      <Container className="relative py-2xl">
        <Row>
          <Col xs={12} lg={4} />
          <Col xs={12} lg={5} className="flex-center-column px-xl py-sm">
            <h3 className="py-5 mb-5 font-md institutional-title">Já nascemos digital</h3>
            <p className="mb-5 font-xs institutional-text">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using Content here, making
              it look like readable English. Many desktop publishing packages and web page editors{' '}
            </p>
            <div className="mt-4 w-full">
              <IconText
                icon={faUserGroup}
                color="color-white"
                colClassName="h5"
                rowClassName="mb-5"
              >
                Sem fila
              </IconText>
              <IconText icon={faMobile} color="color-white" colClassName="h5" rowClassName="mb-5">
                Simples e prático
              </IconText>
              <IconText icon={faGlobe} color="color-white" colClassName="h5" rowClassName="mb-5">
                Abertura de conta 100% online
              </IconText>
              <IconText
                icon={faFingerprint}
                color="color-white"
                colClassName="h5"
                rowClassName="mb-5"
              >
                Transações mais seguras
              </IconText>
            </div>
            <ConfirmButton
              variant="outline-light"
              divClassName=""
              buttonStyle="four"
              text="Abra sua conta"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
