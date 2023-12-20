import React, { useState } from "react";
import TaskButton from "./TaskButton";
import "./Task.css";

function Task({ id, taskProps, onDelete, onTaskCompleted }) { 
  const { title, description, completed } = taskProps; // Destructuration 

  const handleDelete = () => { // Suppression d'une tâche
    onDelete(id);
  };

  const handleTaskCompleted = () => { // Changement de la valeur de completed
    onTaskCompleted(id);
  };

  return (
    <>
      <tr className={completed ? "completed-task" : ""}> {/*Affichage style de la tâche quand tâche = true*/}
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
          <TaskButton type="danger" onClick={handleDelete}> {/*Suppression d'une tâche*/}
            <i className="bi bi-trash"></i> Delete
          </TaskButton>
        </td>
      </tr>
    </>
  );
}

export default Task;
