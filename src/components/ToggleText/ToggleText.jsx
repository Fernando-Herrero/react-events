import { useState } from "react";
import "./ToggleText.css";
import crImage from "../../assets/cr-siu.jpg";

export const ToggleText = () => {
	const [text, setText] = useState(true);

	const handleText = () => {
		setText(!text);
	};

	return (
		<div className="toggle-text">
			<button onClick={handleText}>{text ? "Hide text" : "Show text"}</button>
			{text && (
				<>
					<h1>Cristiano Ronaldo is the GOAT</h1>
					<div>
						<img src={crImage} alt="Cristiano Ronaldo Image" />
					</div>
				</>
			)}
		</div>
	);
};
