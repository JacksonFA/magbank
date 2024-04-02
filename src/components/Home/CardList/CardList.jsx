import { useCallback } from 'react'
import { Container, Row } from 'react-bootstrap'
import { array } from 'prop-types'
import { Loading } from '../../Shared/Loading/Loading'
import { Each } from '../../Shared/Each/Each'
import { CardItem } from './CardItem'
import axios from 'axios'

CardList.propTypes = {
  cards: array,
}

export function CardList({ cards }) {
  const handleCardItem = useCallback(async (id) => {
    const response = await axios.get(`http://localhost:3000/cards/${id}`)
    const data = response.data
    console.log(data)
  }, [])

  if (!cards) {
    return <Loading withBackground={false} text="Carregando cards..." />
  }

  return (
    <Container>
      <Row>
        <Each of={cards} render={(data) => <CardItem data={data} handle={handleCardItem} />} />
      </Row>
    </Container>
  )
}
