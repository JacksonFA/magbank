import { node } from 'prop-types'
import { LoginTypeProvider } from '../contexts/LoginTypeContext'

Page.propTypes = {
  children: node.isRequired,
}

export function Page({ children }) {
  return (
    <LoginTypeProvider>
      <div style={{ display: 'block' }}>{children}</div>
    </LoginTypeProvider>
  )
}
