import { useContext } from 'react'
import { node, func } from 'prop-types'
import { CountContext } from '../contexts/CountContext'

ButtonUp.propTypes = {
  children: node.isRequired,
  handle: func.isRequired,
}

export function ButtonUp({ children, handle }) {
  const count = useContext(CountContext)
  return <button onClick={handle}>{children + ': ' + count + ' + 1'}</button>
}
