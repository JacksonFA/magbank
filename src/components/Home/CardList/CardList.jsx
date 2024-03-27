import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { array } from 'prop-types'
import { Loading } from '../../Shared/Loading/Loading'
import { Each } from '../../Shared/Each/Each'

CardList.propTypes = {
  cards: array,
}

export function CardList({ cards }) {
  if (!cards) {
    return <Loading withBackground={false} text="Carregando cards..." />
  }

  return (
    <Container>
      <Row>
        <Each
          of={cards}
          render={({ id, image, title, content, action }) => (
            <Col key={id} xs={12} lg={4}>
              <Card className="mb-5">
                <Card.Img variant="top" src={image} width={360} height={165} />
                <Card.Body>
                  <Card.Title className="py-md font-sm-special">{title}</Card.Title>
                  <Card.Text className="font-xs">{content}</Card.Text>
                  <Button variant="danger">{action}</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        />
      </Row>
    </Container>
  )
}
