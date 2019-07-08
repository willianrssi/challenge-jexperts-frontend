import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertUi = ({ show, title, children, handleDismiss, variant }) => (
  show && <Alert variant={variant} onClose={handleDismiss} dismissible>
    <Alert.Heading>{title}</Alert.Heading>
    <p>
      {children}
    </p>
  </Alert>
)

export default AlertUi
