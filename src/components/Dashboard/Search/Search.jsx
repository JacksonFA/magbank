import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { string, number } from 'prop-types'

Search.propTypes = {
  display: string.isRequired,
  iconColor: string,
  size: number,
}

export function Search({ display, iconColor = 'white', size = 2 }) {
  return (
    <form className={`${display} flex-center gap-xl w-full`}>
      <input
        type="text"
        placeholder="O que você procura?"
        className="w-full px-md py-sm font-sm bx-sh border-0 rounded-4"
      />
      <button className="border-0 bg-none p-sm">
        <FontAwesomeIcon icon={faSearch} color={iconColor} size={`${size}x`} />
      </button>
    </form>
  )
}
