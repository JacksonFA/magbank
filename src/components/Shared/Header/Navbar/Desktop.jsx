import { string } from 'prop-types'
import { Logo } from '../../Logo/Logo'
import { NavLinks } from './NavLinks'
import { NavButtons } from './NavButtons'

Desktop.propTypes = {
  extendProps: string.isRequired,
}

export function Desktop({ extendProps }) {
  return (
    <div className={`${extendProps} container h-50 gap-140`}>
      <Logo />
      <NavLinks className="flex-center gap-xl font-xs" />
      <NavButtons />
    </div>
  )
}
