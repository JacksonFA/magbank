import { string } from 'prop-types'

NavLinks.propTypes = {
  className: string.isRequired,
}

export function NavLinks({ className }) {
  return (
    <div className={className}>
      <a href="#cartao" className="color-light font-sm hover dec-none">
        Cartão
      </a>
      <a href="#quemsomos" className="color-light font-sm hover dec-none">
        Quem somos
      </a>
      <a href="#faq" className="color-light font-sm hover dec-none">
        FAQ
      </a>
    </div>
  )
}
