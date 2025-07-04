import { useState } from "react";
import "./DoubleClickCounter.css";

export const DoubleClickCounter = () => {
	const [count, setCount] = useState(0);

	const handleDoubleCLick = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className="double-click-counter">
			<span>{count}</span>
			<button onDoubleClick={handleDoubleCLick}>Increment</button>
		</div>
	);
};
