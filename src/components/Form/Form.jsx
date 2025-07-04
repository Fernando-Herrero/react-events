import { useState } from "react";
import "./Form.css";

export const Form = () => {
	const [dataForm, setDataForm] = useState({ username: "", password: "", email: "", message: "" });

	const handleSubmit = (event) => {
		event.preventDefault();

		setDataForm({
			username: dataForm.username,
			password: dataForm.password,
			email: dataForm.email,
			message: dataForm.message,
		});

		console.log(dataForm);
		alert(
			`Username: ${dataForm.username}\nPassword: ${dataForm.password}\nEmil: ${dataForm.email}\nMessage: ${dataForm.message}`
		);
	};

	const handleText = (event) => {
		console.log(event.target);
		const { name, value } = event.target;

		setDataForm((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleReset = () => {
		setDataForm({ username: "", password: "", email: "", message: "" });
	};

	return (
		<form action="form" onSubmit={handleSubmit} className="form-two">
			<label htmlFor="username">Username:</label>
			<input type="text" id="username" name="username" value={dataForm.username} onChange={handleText} />

			<label htmlFor="password">Password:</label>
			<input type="password" id="password" name="password" value={dataForm.password} onChange={handleText} />

			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" value={dataForm.email} onChange={handleText} />

			<label htmlFor="message">Message:</label>
			<textarea id="message" name="message" value={dataForm.message} onChange={handleText}></textarea>

			<button type="submit">Submit</button>
			<button type="button" className="reset-btn" onClick={handleReset}>
				Reset
			</button>
		</form>
	);
};
