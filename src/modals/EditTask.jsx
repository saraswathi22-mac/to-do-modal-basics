import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
  });

  // Sync task data when modal opens or task changes
  useEffect(() => {
    if (taskObj) {
      setFormData({
        Name: taskObj.Name,
        Description: taskObj.Description,
      });
    }
  }, [taskObj, modal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(formData);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>

      <ModalBody>
        <div className="form-group mb-3">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
        </div>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
