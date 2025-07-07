import { useState } from "react";
import "./PersonCard.css";

export const PersonCard = ({ name, age, initialPoints }) => {
	const [points, setPoints] = useState(initialPoints);

	const handleincrement = () => {
		setPoints((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setPoints((prev) => prev - 1);
	};

	return (
		<div className="person-card">
			<h3>{name}</h3>
			<p>{age}</p>
			<span>{points}</span>
			<div className="btns">
				<button onClick={handleincrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	);
};
