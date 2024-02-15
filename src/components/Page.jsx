import { node } from 'prop-types'

Page.propTypes = {
  children: node.isRequired,
}

export function Page({ children }) {
  return <div style={{ display: 'block' }}>{children}</div>
}
