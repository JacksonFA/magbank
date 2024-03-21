import { useContext, useEffect, useReducer, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Logo } from '../../Shared/Logo/Logo'
import { ConfirmButton } from '../../Shared/ConfirmButton/ConfirmButton'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'
import './LoginForm.sass'

const FULL_NAME_RGX = /^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]+)*$/
const NUMBER_RGX = /^\d+$/

export function LoginForm() {
  // let accountInputValue = ''
  // let passwordInputValue = ''
  // const accountInputRef = useRef()
  // const passwordInputRef = useRef()

  // Exemplo de função para inicializar um useReducer
  // function initialAccount() {
  //   return ''
  // }

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
    //   if (accountInputRef.current.value === '') {
    //     accountInputRef.current.style.background = 'red'
    //   } else {
    //     accountInputRef.current.style.background = 'green'
    //     accountInputRef.current.style.color = 'white'
    //   }
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

  function debounceTime(func, delay) {
    let timeoutId
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }
  const handleInputChange = debounceTime((e) => dispatchAccountReducer(e), 1000)

  return (
    <section className="login-container">
      <Logo />
      <Form className="login-form">
        {loginType === 'createAccount' && (
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
        )}
        {loginType !== 'createAccount' && (
          <Form.Group className="mb-3" controlId="formBasicAccount">
            <Form.Label className="font-sm-special">Número da conta</Form.Label>
            <Form.Control
              className="font-md mt-3"
              type="text"
              placeholder="Ex.: 0000-0"
              // ref={accountInputRef}
              value={accountReducer}
              onChange={(e) => dispatchAccountReducer(e.target.value)}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-sm-special">Senha</Form.Label>
          <Form.Control
            className="font-md mt-3"
            type="password"
            placeholder="Ex.: 1234"
            // ref={passwordInputRef}
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
