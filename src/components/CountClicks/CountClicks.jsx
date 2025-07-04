import { useState } from "react";
import "./CountClicks.css";

export const CountClicks = () => {
	const [count, setCount] = useState(0);

	const onCountClikcks = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className="container-counter">
			<h3>
				Counting clicks:<span>{count}</span>
			</h3>
			<button onClick={onCountClikcks}>Click Me</button>
		</div>
	);
};
