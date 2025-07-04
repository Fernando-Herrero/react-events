import { useState } from "react";
import "./InputFocus.css";

export const InputFocus = () => {
	const [text, setText] = useState("");

	const handleText = (event) => {
		setText(event.target.value);
	};

	const handleFocus = (event) => {
		event.target.classList.add("border-focus");
	};

	const handleBlur = (event) => {
		event.target.classList.remove("border-focus");
	};

	return (
		<div className="focus-input">
			<label htmlFor="focus-test"></label>
			<input
				type="text"
				name="focus"
				id="focus-test"
				value={text}
				onChange={handleText}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</div>
	);
};
