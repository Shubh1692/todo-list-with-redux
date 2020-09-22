import React from 'react';
import { Button, Modal } from 'semantic-ui-react';


function DeleteTodo({
  open, handleClose, handleDelete
}) {
  return (
    <Modal size={'mini'} open={open} onClose={handleClose}>
      <Modal.Header>Delete Todo</Modal.Header>
      <Modal.Content>
        <p>Do you want to delete this Todo?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button onClick={handleDelete} primary>DELETE</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteTodo;