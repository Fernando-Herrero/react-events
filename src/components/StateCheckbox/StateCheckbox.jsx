import { useState } from "react";
import "./StateCheckbox.css";

export const StateCheckbox = () => {
	const [state, setState] = useState(false);

	const handleCheck = (event) => {
		setState(event.target.checked);
	};

	return (
		<div className="checkbox">
			<label htmlFor="check">Daddy here's your check:</label>
			<input type="checkbox" id="check" onChange={handleCheck} />
			<span>{state ? "Im a princess" : "Im not a princess"}</span>
		</div>
	);
};
