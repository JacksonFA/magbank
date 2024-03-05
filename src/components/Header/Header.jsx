import './Header.sass'
import { Desktop } from './Navbar/Desktop'
import { Mobile } from './Navbar/Mobile'

export function Header() {
  return (
    <header className="w-full bg-purple-200 py-sm fixed">
      <Mobile extendProps="menuMobile flex-space-between" />
      <Desktop extendProps="menuDesktop grid-columns" />
    </header>
  )
}
