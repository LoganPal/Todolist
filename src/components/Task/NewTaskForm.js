import React, { useState } from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = new TaskProps(title, description);
    onSubmit(newTask);
    // Réinitialiser les champs du formulaire après la soumission
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 p-4 border rounded shadow-sm">
      <div className="form-group mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} /* Initialisation de la valeur de title*/
          className="form-control"
		  placeholder="Enter Task title here" 
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} /* Initialisation de la valeur de description*/
          className="form-control"
		  row="3"
		  placeholder="Enter Task description here"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        Add
      </button>
    </form>
  );
}

export default NewTaskForm;
