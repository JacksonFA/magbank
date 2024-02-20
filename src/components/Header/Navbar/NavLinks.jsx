import { Link } from 'react-router-dom'
import { string } from 'prop-types'

NavLinks.propTypes = {
  className: string.isRequired,
}

export function NavLinks({ className }) {
  return (
    <div className={className}>
      <Link to="#" className="color-white font-sm hover dec-none">
        Cartão
      </Link>
      <Link to="#" className="color-white font-sm hover dec-none">
        Quem somos
      </Link>
      <Link to="#" className="color-white font-sm hover dec-none">
        FAQ
      </Link>
    </div>
  )
}
