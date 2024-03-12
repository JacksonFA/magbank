import { useContext, useEffect, useReducer, useRef, useState } from 'react'
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

  // let accountInputValue = ''
  // let passwordInputValue = ''
  // const [accountInputState, setAccountInputState] = useState('')
  const [passwordInputState, setPasswordInputState] = useState('')

  // const accountInputRef = useRef()
  // const passwordInputRef = useRef()

  function initialAccount() {
    console.log('Iniciando account')
    return '123'
  }
  const [accountReducer, dispatchAccountReducer] = useReducer(validate, '', initialAccount)
  function validate(state, value) {
    const isNumber = /^\d+$/.test(value)
    if (isNumber) {
      return value
    }
    return state
  }

  useEffect(() => {
    if (type !== 'createAccount') {
      setLoginType(type === 'loginPF' ? 'Login como pessoa física' : 'Login como pessoa jurídica')
    }
  }, [])

  function handleLogin() {
    // if (accountInputRef.current.value === '') {
    //   accountInputRef.current.style.background = 'red'
    // } else {
    //   accountInputRef.current.style.background = 'green'
    //   accountInputRef.current.style.color = 'white'
    // }
    console.log(accountReducer)
    console.log(passwordInputState)
    setIsLogged(true)
    navigate('/dashboard')
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-sm-special">Número da conta</Form.Label>
          <Form.Control
            className="font-md mt-3"
            type="text"
            placeholder="Conta: 0000-0"
            // ref={accountInputRef}
            // value={accountReducer}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-sm-special">Senha</Form.Label>
          <Form.Control
            className="font-md mt-3"
            type="password"
            placeholder="Senha: 1234"
            // ref={passwordInputRef}
            onChange={(e) => setPasswordInputState(e.target.value)}
          />
        </Form.Group>
      </Form>
      <ConfirmButton text={loginType} buttonStyle="two" divClassName="" handle={handleLogin} />
    </section>
  )
}
