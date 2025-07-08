import { useState } from "react";
import "./KeyCounter.css";

export const KeyCounter = () => {
	const [text, setText] = useState("");
	const [pressedKeys, setPressedKeys] = useState(0);

	const handleText = (event) => {
		setText(event.target.value);
	};

	const handlePressedKeys = () => {
		setPressedKeys((prev) => prev + 1);
	};

	return (
		<div className="key-counter">
			<label htmlFor="keys">Write here whatever you want and ill show you:</label>
			<input type="text" id="keys" value={text} onChange={handleText} onKeyDown={handlePressedKeys} />

			{text && (
				<h1>
					{text} <br /> Pressed keys: {pressedKeys}
				</h1>
			)}
		</div>
	);
};
