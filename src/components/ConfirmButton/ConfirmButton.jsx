import { Button } from 'react-bootstrap'
import { string } from 'prop-types'

ConfirmButton.propTypes = {
  action: string.isRequired,
}

export function ConfirmButton({ action }) {
  return (
    <div className="flex-center p-2xl">
      <Button variant="success" className="bg-green-200 py-md px-xl font-sm">
        {action}
      </Button>
    </div>
  )
}
