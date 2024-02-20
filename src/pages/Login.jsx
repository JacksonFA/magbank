import { Link, useNavigate } from 'react-router-dom'
import './Login.sass'

export default function Login() {
  // const navigate = useNavigate()
  // function goBack() {
  //   window.history.back()
  //   // navigate('/')
  // }

  return (
    <main className="loginBgColor color-white w-full h-max grid-center gap-xl font-lg">
      Login
      {/* <a href='#' onClick={goBack} className="color-white">
        Voltar
      </a> */}
      <Link to="/">Voltar</Link>
    </main>
  )
}
