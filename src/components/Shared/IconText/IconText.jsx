import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { node, string, number, object } from 'prop-types'

IconText.propTypes = {
  icon: object.isRequired,
  size: number,
  color: string,
  rowClassName: string,
  colClassName: string,
  children: node.isRequired,
}

export function IconText({
  icon,
  size = 2,
  color = 'color-red-600',
  rowClassName = 'flex-center',
  colClassName = 'h5 text-muted',
  children,
}) {
  return (
    <Row className={`${rowClassName}`}>
      <Col xs={size} className="flex-center">
        <FontAwesomeIcon icon={icon} size={`${size}x`} className={color} />
      </Col>
      <Col xs={11 - size} className={colClassName}>
        {children}
      </Col>
    </Row>
  )
}
