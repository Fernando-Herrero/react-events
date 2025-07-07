import { useState } from "react";
import "./ToDoList.css";

export const ToDoList = ({ list }) => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleTextTask = (event) => {
		setNewTask(event.target.value);
	};

	const handleAddNewTask = () => {
		if (newTask.trim() === "") return;

		const task = {
			id: Date.now(),
			text: newTask,
			completed: false,
		};

		setTasks([...tasks, task]);
		setNewTask("");
	};

	const handleCheck = (id) => {
		const updatedCheckTasks = tasks.map((task) =>
			task.id === id ? { ...task, completed: !task.completed } : task
		);
		setTasks(updatedCheckTasks);
	};

	const handleDeleteTask = (id) => {
		const deleteTask = tasks.filter((task) => task.id !== id);
		setTasks(deleteTask);
	};

	return (
		<div className="container-list">
			<h2>{list}</h2>
			<div className="input-btn-list">
				<label htmlFor="add-task">Add task</label>
				<input type="text" id="add-task" value={newTask} placeholder="Write a task" onChange={handleTextTask} />
				<button onClick={handleAddNewTask}>Add Task</button>
			</div>

			<ul className="task-list">
				{tasks.map((task) => (
					<li key={task.id}>
						<span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
						<label htmlFor={`check-${task.id}`}>Done</label>
						<input
							type="checkbox"
							id={`check-${task.id}`}
							checked={task.completed}
							onChange={() => handleCheck(task.id)}
						/>
						<button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
					</li>
				))}
			</ul>
		</div>
	);
};
