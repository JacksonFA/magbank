import { Desktop } from './Navbar/Desktop'
import { Mobile } from './Navbar/Mobile'

export function Header() {
  return (
    <header className="w-full bg-purple-200 py-sm fixed">
      <Mobile extendProps="d-lg-none flex-space-between" />
      <Desktop extendProps="d-none d-lg-grid grid-columns" />
    </header>
  )
}
