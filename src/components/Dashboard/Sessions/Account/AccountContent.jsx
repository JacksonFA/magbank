import { useEffect, useState } from 'react'
import { string } from 'prop-types'
import { Table } from '../Table/Table'
import { transactionsData } from '../../../../data/transactions'

AccountContent.propTypes = {
  tab: string,
}

export function AccountContent({ tab }) {
  const [transactions, setTransactions] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
      setTransactions(transactionsData)
      setisLoading(false)
    })()
  }, [])

  return (
    <>
      <Table transactions={transactions} isLoading={isLoading} tab={tab} />
    </>
  )
}
