import React, { useEffect, useState } from "react";
import Task from "./Task";
import TaskProps from "./TaskProps";
import NewTaskForm from "./NewTaskForm";

let tasksList = [
	new TaskProps("FrontEnd1", "Création de la page d'accueil", false), // Création de deux exemple
	new TaskProps("BackEnd1", "initialisation de la base de données", true),
];

function TaskList() {
	const [tasks, setTasks] = useState([]); // Tâches
	const [filteredTasks, setFilteredTasks] = useState([]); // Tâches filtrées

	useEffect(() => {
		setTasks(tasksList); // Chargement des tâches
		setFilteredTasks(tasksList);
	}, []);

	useEffect(() => { // Filtrage des tâches
		setFilteredTasks(tasks);
	}, [tasks]);

    const handleTaskCompleted = (index) => { // Changement de la valeur de completed
        const newTasksList = [...tasks];
        newTasksList[index].completed = !newTasksList[index].completed; // Changement de la valeur de completed
        setTasks(newTasksList);
    };

	const handleTaskDelete = (index) => { // Suppression d'une tâche
		let newTasksList = [...tasks];
		newTasksList.splice(index, 1);
		setTasks(newTasksList);
	};

	const handleNewTaskFormSubmit = (data) => { // Ajout d'une nouvelle tâche
		let newTasksList = [...tasks];
		newTasksList.push(data);
		setTasks(newTasksList);
	};

	return (
		<>
			<div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <div className="input-group">
                        
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Title</th> 
                                <th scope="col">Description</th>
                                <th scope="col">Completed</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <Task
                                    key={index}
                                    id={index}
                                    taskProps={task}
                                    onDelete={(index) => handleTaskDelete(index)}
                                    onTaskCompleted={(index) => handleTaskCompleted(index)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Add New Task</h5>
                </div>
                <div className="card-body">
                    <NewTaskForm onSubmit={(data) => handleNewTaskFormSubmit(data)} />
                </div>
            </div>
        </div>
    </div>
</div>
		</>
	);
}

export default TaskList;
