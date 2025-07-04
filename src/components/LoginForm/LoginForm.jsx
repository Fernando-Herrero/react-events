import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
	const [formData, setFormData] = useState({ username: "", password: "" });

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(formData);
		alert(`Username: ${formData.username}\nPassword: ${formData.password}`);

		setFormData({ username: "", password: "" });
	};

	const handleUsername = (event) => {
		setFormData({ ...formData, username: event.target.value });
	};

	const handlePassword = (event) => {
		setFormData({ ...formData, password: event.target.value });
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="username">Username:</label>
			<input type="text" id="username" value={formData.username} onChange={handleUsername} />

			<label htmlFor="password">Password:</label>
			<input type="text" id="password" value={formData.password} onChange={handlePassword} />

			<button type="submit">Submit</button>
		</form>
	);
};
