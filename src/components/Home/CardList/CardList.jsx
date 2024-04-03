import { Container, Row } from 'react-bootstrap'
import { array } from 'prop-types'
import { Loading } from '../../Shared/Loading/Loading'
import { Each } from '../../Shared/Each/Each'
import { CardItem } from './CardItem'

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
        <Each of={cards} render={(data) => <CardItem data={data} />} />
      </Row>
    </Container>
  )
}
