/* eslint-disable react/prop-types */
import { Button, Card, Col } from 'react-bootstrap'
import { object } from 'prop-types'
import { memo } from 'react'

// CardItem.propTypes = {
//   data: object,
// }

export const CardItem = memo(function CardItem({ data, handle }) {
  const { id, image, title, content, action } = data

  console.log('CRIANDO O COMPONENTE CARDITEM')

  return (
    <Col key={id} xs={12} lg={4}>
      <Card className="mb-5">
        <Card.Img variant="top" src={image} width={360} height={165} />
        <Card.Body>
          <Card.Title className="py-md font-sm-special">{title}</Card.Title>
          <Card.Text className="font-xs">{content}</Card.Text>
          <Button variant="danger" onClick={() => handle(id)}>
            {action}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
})
