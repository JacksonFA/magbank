import { node, func } from 'prop-types'
import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

ButtonDown.propTypes = {
  children: node.isRequired,
  handle: func.isRequired,
}

export function ButtonDown({ children, handle }) {
  const count = useContext(CountContext)
  return <button onClick={handle}>{children + ': ' + count + ' - 1'}</button>
}
