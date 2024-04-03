import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { node } from 'prop-types'
import { users } from '../data/users'

export const LoginTypeContext = createContext()

LoginTypeProvider.propTypes = {
  children: node.isRequired,
}

const storageLoginType = localStorage.getItem('loginType')
const storageLoggedUser = JSON.parse(localStorage.getItem('user'))

export function LoginTypeProvider({ children }) {
  const navigate = useNavigate()
  const [type, setType] = useState(storageLoginType || 'createAccount')
  const [isLogged, setIsLogged] = useState(storageLoggedUser || false)

  function setLoginType(value) {
    setType(value)
    localStorage.setItem('loginType', value)
  }

  function generateAccountNumber() {
    return Math.floor(Math.random() * 90000) + 10000
  }

  async function createNewAccount(name, password) {
    const account = generateAccountNumber()
    const userData = { name, account }
    users.push({ ...userData, password, isPF: true })
    loginUser(userData)
  }

  async function validateAndLoginUser(account, password) {
    const foundUser = users.find((user) => user.account == account && user.password === password)
    if (!foundUser) {
      return alert('Conta ou senha inválida')
    }
    const userData = { name: foundUser.name, account: foundUser.account }
    loginUser(userData)
  }

  function loginUser(userData) {
    setIsLogged(true)
    localStorage.setItem('user', JSON.stringify(userData))
    navigate('/dashboard', { preventScrollReset: true })
  }

  function handleLogin({ name, account, password }) {
    if (type === 'createAccount') {
      return createNewAccount(name, password)
    }
    validateAndLoginUser(account, password)
  }

  function handleLogout() {
    setIsLogged(false)
    localStorage.removeItem('user')
    navigate('/', { preventScrollReset: true })
  }

  return (
    <LoginTypeContext.Provider value={{ type, setLoginType, isLogged, handleLogin, handleLogout }}>
      {children}
    </LoginTypeContext.Provider>
  )
}
