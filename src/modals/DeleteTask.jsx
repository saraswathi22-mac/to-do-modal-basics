import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteTask = ({ modal, toggle, handleDelete }) => {
  const confirmDelete = () => {
    handleDelete();
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Task</ModalHeader>

      <ModalBody>
        <p>Are you sure you want to delete this task?</p>
      </ModalBody>

      <ModalFooter>
        <Button color="danger" onClick={confirmDelete}>
          Delete
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteTask;
