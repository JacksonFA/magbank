import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Table } from '../Table/Table'
import { transactionsData, extraTransactionsData } from '../../../../data/transactions'

export function Statement() {
  const [transactions, setTransactions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTransactions(transactionsData)
      setIsLoading(false)
    }, 2000)
  }, [])

  function loadMoreData() {
    setIsLoading(true)
    setTimeout(() => {
      setTransactions([...transactions, ...extraTransactionsData])
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Col xs={12} lg={8}>
      <Row>
        <Col className="font-md-special">Extrato de conta corrente</Col>
      </Row>
      <Table transactions={transactions} isLoading={isLoading} />
      <Row className="w-full text-center py-xl">
        <Col>
          <a href="#" className="font-sm color-gray-900" onClick={loadMoreData}>
            Ver mais
          </a>
        </Col>
      </Row>
      <Row className="w-full text-end py-xl font-xs-special">
        <Col>
          <p>Saldo (R$): R$ 1.000,00</p>
        </Col>
      </Row>
    </Col>
  )
}
