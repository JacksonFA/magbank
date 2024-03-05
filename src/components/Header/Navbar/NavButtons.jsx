import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonGroup, NavDropdown } from 'react-bootstrap'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'

export function NavButtons() {
  const navigate = useNavigate()
  const { setType } = useContext(LoginTypeContext)

  function handleNavigate(loginType) {
    setType(loginType)
    navigate('/login', { preventScrollReset: true })
  }

  return (
    <div>
      <ButtonGroup>
        <Button variant="outline-light" className="p-sm font-xs">
          <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleNavigate('loginPF')}>
              Pessoa Física
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('loginPJ')}>
              Pessoa Jurídica
            </NavDropdown.Item>
          </NavDropdown>
        </Button>
        <Button
          variant="outline-light"
          className="p-sm font-xs"
          onClick={() => handleNavigate('createAccount')}
        >
          Abra sua conta
        </Button>
      </ButtonGroup>
    </div>
  )
}
