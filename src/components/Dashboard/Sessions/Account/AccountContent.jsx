import { useEffect, useState } from 'react'
import { Table } from '../Table/Table'
import { transactionsData } from '../../../../data/transactions'

export function AccountContent() {
  const [transactions, setTransactions] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTransactions(transactionsData)
      setisLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <Table transactions={transactions} isLoading={isLoading} />
    </>
  )
}
