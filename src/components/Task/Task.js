import React, { useState } from "react";
import TaskButton from "./TaskButton";
import "./Task.css";

function Task({ id, taskProps, onDelete, onTaskCompleted }) {
  const { title, description, completed } = taskProps;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleTaskCompleted = () => {
    onTaskCompleted(id);
  };

  return (
    <>
      <tr className={completed ? "completed-task" : ""}>
        <td>{title} </td>
        <td>{description}</td>
        <td>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleTaskCompleted}
          />
        </td>
        <td>
          <TaskButton type="danger" onClick={handleDelete}>
            <i className="bi bi-trash"></i> Delete
          </TaskButton>
        </td>
      </tr>
    </>
  );
}

export default Task;
