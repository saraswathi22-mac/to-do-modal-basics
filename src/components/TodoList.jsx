import { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import TableContent from "./TableContent";

const STORAGE_KEY = "taskList";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState(() => {
    // ✅ lazy initialization (IMPORTANT)
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Persist ONLY when taskList changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  const saveTask = (taskObj) => {
    setTaskList(prev => [...prev, taskObj]);
    setModal(false);
  };

  const deleteTask = (index) => {
    setTaskList(prev => prev.filter((_, i) => i !== index));
  };

  const updateListArray = (updatedTask, index) => {
    setTaskList(prev =>
      prev.map((task, i) => (i === index ? updatedTask : task))
    );
  };

  return (
    <>
      <div className="container text-right">
        <h3 className="text-center">Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>

      <div className="container mt-2">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "30%" }}>Task name</th>
              <th>Description</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>

          <tbody>
            {taskList.map((task, index) => (
              <TableContent
                key={index}
                taskObj={task}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
          </tbody>
        </table>
      </div>

      <CreateTask toggle={() => setModal(false)} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;

// Key → State → Read → Persist → Actions → Render