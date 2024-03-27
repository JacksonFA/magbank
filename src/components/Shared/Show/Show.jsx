/* eslint-disable no-undef */
import { Children } from 'react'

export const Show = ({ children }) => {
  let when = null
  let otherwise = null
  Children.forEach(children, (child) => {
    if (child.props.isTrue === undefined) {
      otherwise = child
    } else if (!when && child.props.isTrue === true) {
      when = child
    }
  })
  return when || otherwise
}

Show.When = ({ isTrue, children }) => isTrue && children
Show.Else = ({ render, children }) => render || children
