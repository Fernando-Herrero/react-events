import { useState } from "react";
import "./MirrorInput.css";

export const MirrorInput = () => {
	const [text, setText] = useState("");

	const handleText = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="container-mirror">
			<label htmlFor="modi-text">This text can be modified:</label>
			<input type="text" id="modi-text" value={text} onChange={handleText} />
			<h1>{text || "Write your feelings my friend"}</h1>
		</div>
	);
};
