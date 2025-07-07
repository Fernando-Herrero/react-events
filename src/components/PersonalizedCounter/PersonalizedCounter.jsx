import { useState } from "react";
import "./PersonalizedCounter.css";

export const PersonalizedCounter = ({initialValue}) => {
	const [value, setValue] = useState(initialValue);

	const handleIncrement = () => {
		setValue((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setValue((prev) => prev - 1);
	};

	return (
		<div className="person-counter">
			<span>{value}</span>
			<div className="btns">
				<button onClick={handleIncrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	);
};
