import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    save(formData);
    setFormData({ Name: "", Description: "" });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>

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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
