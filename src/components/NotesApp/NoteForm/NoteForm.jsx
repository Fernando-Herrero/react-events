import { useState } from "react";
import "./NoteForm.css";

export const NoteForm = ({ onAddNote }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleContent = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title.trim() === "" || content.trim() === "") return;

		const newNote = {
			title: title,
			content: content,
		};

		onAddNote(newNote);
		setTitle("");
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="input-title"></label>
			<input type="text" id="input-title" value={title} onChange={handleTitle} placeholder="Title..." />

			<label htmlFor="input-content"></label>
			<input
				type="text"
				id="input-content"
				value={content}
				onChange={handleContent}
				placeholder="Write the content..."
			/>

			<button type="submit">Submit</button>
		</form>
	);
};
