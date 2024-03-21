import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { string, func } from 'prop-types'
import { LoginTypeContext } from '../../../contexts/LoginTypeContext'
import './ConfirmButton.sass'

ConfirmButton.propTypes = {
  variant: string,
  text: string.isRequired,
  divClassName: string,
  buttonStyle: string,
  handle: func,
}

export function ConfirmButton({
  variant = 'success',
  text,
  divClassName = 'flex-center p-2xl',
  buttonStyle = 'one',
  handle,
}) {
  const navigate = useNavigate()
  const { setLoginType } = useContext(LoginTypeContext)

  function handleNavigate() {
    setLoginType('createAccount')
    navigate('/login', { preventScrollReset: true })
  }

  return (
    <div className={divClassName}>
      <Button variant={variant} className={buttonStyle} onClick={handle ?? handleNavigate}>
        {text}
      </Button>
    </div>
  )
}
