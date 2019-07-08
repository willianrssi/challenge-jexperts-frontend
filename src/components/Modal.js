import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const UiModal = ({ show, handleClose, handleConfirm, title, text }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{text}</Modal.Body>
    <Modal.Footer>
      <Button variant='outline-primary' onClick={handleClose}>
        Não
      </Button>
      <Button variant='primary' onClick={handleConfirm}>
        Sim
      </Button>
    </Modal.Footer>
  </Modal>
)

export default UiModal
