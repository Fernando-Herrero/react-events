import { useState } from "react";
import "./EditableText.css";

export const EditableText = () => {
	const [show, setShow] = useState(false);

	const handleDoubleCLick = () => {
		setShow(() => {
			return true;
		});
		setTimeout(() => {
			document.getElementById("editable-input").focus();
		}, 150);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setShow(false);
		}
	};

	const handleBlur = () => {
		setShow(false);
	};

	return (
		<div className="editable-text">
			{!show && <h1 onDoubleClick={handleDoubleCLick}>This text is going to change</h1>}
			{show && (
				<>
					<label htmlFor="editable-input"></label>
					<input type="text" id="editable-input" onKeyDown={handleKeyDown} onBlur={handleBlur} />
				</>
			)}
		</div>
	);
};
