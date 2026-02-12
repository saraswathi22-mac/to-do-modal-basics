import { useState } from "react";
import EditTask from "../modals/EditTask";
import DeleteTask from "../modals/DeleteTask";

const TableContent = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openEditModal = () => {
    setIsEditOpen(true);
    setIsDeleteOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteOpen(true);
    setIsEditOpen(false);
  };

  const closeEditModal = () => setIsEditOpen(false);
  const closeDeleteModal = () => setIsDeleteOpen(false);

  const handleUpdate = (updatedTask) => {
    updateListArray(updatedTask, index);
    closeEditModal();
  };

  const handleDelete = () => {
    deleteTask(index);
    closeDeleteModal();
  };

  return (
    <>
      <tr>
        <td>{taskObj.Name}</td>
        <td>{taskObj.Description}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={openEditModal}
            style={{ marginRight: 8 }}
          >
            Update
          </button>

          <button className="btn btn-secondary" onClick={openDeleteModal}>
            Delete
          </button>
        </td>
      </tr>

      <EditTask
        modal={isEditOpen}
        toggle={closeEditModal}
        updateTask={handleUpdate}
        taskObj={taskObj}
      />

      <DeleteTask
        modal={isDeleteOpen}
        toggle={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default TableContent;
