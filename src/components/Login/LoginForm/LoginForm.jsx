import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Logo } from '../../Shared/Logo/Logo'
import { ConfirmButton } from '../../Shared/ConfirmButton/ConfirmButton'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'
import './LoginForm.sass'

export function LoginForm() {
  const navigate = useNavigate()
  const { type, setIsLogged } = useContext(LoginTypeContext)
  const [loginType, setLoginType] = useState('Criar conta')

  useEffect(() => {
    if (type !== 'createAccount') {
      setLoginType(type === 'loginPF' ? 'Login como pessoa física' : 'Login como pessoa jurídica')
    }
  }, [])

  function handleLogin() {
    setIsLogged(true)
    navigate('/dashboard')
  }

  return (
    <section className="login-container">
      <Logo />
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-sm-special">Número da conta</Form.Label>
          <Form.Control className="font-md mt-3" type="text" placeholder="Conta: 0000-0" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-sm-special">Senha</Form.Label>
          <Form.Control className="font-md mt-3" type="password" placeholder="Senha: 1234" />
        </Form.Group>
      </Form>
      <ConfirmButton text={loginType} buttonStyle="two" divClassName="" handle={handleLogin} />
    </section>
  )
}
