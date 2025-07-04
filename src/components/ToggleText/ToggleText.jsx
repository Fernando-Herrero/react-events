import { useEffect, useState } from "react";
import "./ToggleText.css";
import crImage from "../../assets/cr-siu.jpg";

export const ToggleText = () => {
	const [text, setText] = useState(true);
	const [siuText, setSiuText] = useState("");
	const crText = "SIIUUUU";

	const handleText = () => {
		setText((prev) => !prev);
	};

	useEffect(() => {
		let timeOutId;

		const typeText = (index) => {
			if (index < crText.length) {
				setSiuText((prev) => prev + crText[index]);

				timeOutId = setTimeout(() => {
					typeText(index + 1);
				}, 150);
			}
		};

		if (text) {
			setSiuText("");
			typeText(0);
		} else {
			setSiuText("");
		}

		return () => clearTimeout(timeOutId);
	}, [text]);

	return (
		<div className="toggle-text">
			<button onClick={handleText}>{text ? "Hide the GOAT" : "Show the GOAT"}</button>
			{text && (
				<>
					<h1>Cristiano Ronaldo is the GOAT</h1>
					<div>
						<img src={crImage} alt="Cristiano Ronaldo Image" />
						<span>{siuText}</span>
					</div>
				</>
			)}
		</div>
	);
};
