import { bool, string } from 'prop-types'
import './Loading.sass'

Loading.propTypes = {
  withBackground: bool,
  text: string,
}

export function Loading({ withBackground = true, text = 'Carregando...' }) {
  let backgroundConfigs = ''

  if (withBackground) {
    backgroundConfigs = 'w-full h-max bg-purple-100 color-light'
  }

  return (
    <div className={`flex-center gap-md spinner ${backgroundConfigs}`}>
      <span className="font-md">{text}</span>
      <div className="half-spinner"></div>
    </div>
  )
}
