import { Form } from 'react-bootstrap'
import { ConfirmButton } from '../../../Shared/ConfirmButton/ConfirmButton'
import { string } from 'prop-types'

PaymentForm.propTypes = {
  inputLabel: string.isRequired,
  inputPlaceholder: string.isRequired,
}

export function PaymentForm({ inputLabel, inputPlaceholder }) {
  return (
    <Form>
      <Form.Group controlId="formBarCode" className="my-5">
        <Form.Label className="font-sm-special">{inputLabel}</Form.Label>
        <Form.Control className="font-xs" type="number" placeholder={inputPlaceholder} />
      </Form.Group>
      <Form.Group controlId="formPaymentType" className="mb-5">
        <Form.Label className="font-sm-special">Forma de Pagamento</Form.Label>
        <div className="d-flex flex-column gap-md font-sm checkbox-group py-sm">
          <Form.Check type="radio" id="debit" label="Débito em Conta Corrente" name="paymentType" />
          <Form.Check
            type="radio"
            id="credit"
            className="ml-4"
            label="Cartão de Crédito"
            name="paymentType"
          />
        </div>
      </Form.Group>
      <ConfirmButton divClassName="" buttonStyle="three" text="Continuar" handle={() => {}} />
    </Form>
  )
}
