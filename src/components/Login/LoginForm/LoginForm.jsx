import { useContext, useReducer, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Logo } from '../../Shared/Logo/Logo'
import { ConfirmButton } from '../../Shared/ConfirmButton/ConfirmButton'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'
import { Show } from '../../Shared/Show/Show'
import './LoginForm.sass'

const FULL_NAME_RGX = /^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]+)*$/
const NUMBER_RGX = /^\d+$/

export function LoginForm() {
  const { type: loginType, handleLogin } = useContext(LoginTypeContext)
  const buttonText =
    loginType === 'createAccount'
      ? 'Criar conta'
      : `Login como ${loginType === 'loginPF' ? 'pessoa física' : 'pessoa jurídica'}`

  const [nameReducer, dispatchNameReducer] = useReducer(validateName, '')
  function validateName(state, value) {
    if (!value) {
      return ''
    }
    return value
  }
  const [accountReducer, dispatchAccountReducer] = useReducer(validateAccount, '')
  function validateAccount(state, value) {
    if (!value) {
      return ''
    }
    const isNumber = NUMBER_RGX.test(value)
    if (isNumber) {
      return value
    }
    return state
  }
  const [passwordInputState, setPasswordInputState] = useState('')

  function handleSubmitLogin() {
    if (loginType === 'createAccount' && !nameReducer) {
      return alert('Você precisa informar o nome')
    }
    if (loginType === 'createAccount' && !FULL_NAME_RGX.test(nameReducer)) {
      return alert('Você precisa informar um nome válido')
    }
    if (loginType !== 'createAccount' && !accountReducer) {
      return alert('Você precisa informar o número da conta')
    }
    if (!passwordInputState) {
      return alert('Você precisa informa a senha')
    }
    handleLogin({
      name: nameReducer,
      account: accountReducer,
      password: passwordInputState,
    })
  }

  return (
    <section className="login-container">
      <Logo />
      <Form className="login-form">
        <Show>
          <Show.When isTrue={loginType === 'createAccount'}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="font-sm-special">Nome e Sobrenome</Form.Label>
              <Form.Control
                className="font-md mt-3"
                type="text"
                placeholder="Ex.: John Doe"
                value={nameReducer}
                onChange={(e) => dispatchNameReducer(e.target.value)}
              />
            </Form.Group>
          </Show.When>
          <Show.When isTrue={loginType !== 'createAccount'}>
            <Form.Group className="mb-3" controlId="formBasicAccount">
              <Form.Label className="font-sm-special">Número da conta</Form.Label>
              <Form.Control
                className="font-md mt-3"
                type="text"
                placeholder="Ex.: 0000-0"
                value={accountReducer}
                onChange={(e) => dispatchAccountReducer(e.target.value)}
              />
            </Form.Group>
          </Show.When>
        </Show>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-sm-special">Senha</Form.Label>
          <Form.Control
            className="font-md mt-3"
            type="password"
            placeholder="Ex.: 1234"
            onChange={(e) => setPasswordInputState(e.target.value)}
          />
        </Form.Group>
      </Form>
      <ConfirmButton
        text={buttonText}
        buttonStyle="two"
        divClassName=""
        handle={handleSubmitLogin}
      />
    </section>
  )
}
