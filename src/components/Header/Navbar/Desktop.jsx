import { string } from 'prop-types'
import { Logo } from '../../Logo/Logo'
import { NavLinks } from './NavLinks'
import { NavButtons } from './NavButtons'

Desktop.propTypes = {
  extendProps: string.isRequired,
}

export function Desktop({ extendProps }) {
  return (
    <div className={`${extendProps} container h-50`}>
      <Logo />
      <div className="w-full flex-space-between">
        <NavLinks className="flex-center gap-xl font-xs" />
        <NavButtons />
      </div>
    </div>
  )
}
