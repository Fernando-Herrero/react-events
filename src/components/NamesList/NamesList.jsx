import { useState } from "react";
import "./NamesList.css";

export const NamesList = () => {
	const [greeting, setGreeting] = useState("");

	const handleClick = (name) => {
		if (name === "fer") setGreeting("Hey! It's Fer here — I'm the snack master and mood booster around!");
		if (name === "alvaro") setGreeting("Yo, Alvaro in the house! Warning: I'm contagious with good vibes.");
		if (name === "ana") setGreeting("Hi! Ana here, officially the queen of awkward but lovable moments.");
		if (name === "maria") setGreeting("Hey, it's Maria Trinidad — your daily dose of unpredictable awesomeness.");
		if (name === "fernando") setGreeting("What's up! Fernando H. here, the legend who makes everything funnier.");
	};

	return (
		<div className="names-list">
			<ul>
				<li>
					Fer <button onClick={() => handleClick("fer")}>Greeting</button>
				</li>
				<li>
					Alvaro <button onClick={() => handleClick("alvaro")}>Greeting</button>
				</li>
				<li>
					Ana <button onClick={() => handleClick("ana")}>Greeting</button>
				</li>
				<li>
					Maria Trinidad <button onClick={() => handleClick("maria")}>Greeting</button>
				</li>
				<li>
					Fernando H. <button onClick={() => handleClick("fernando")}>Greeting</button>
				</li>
			</ul>
			<p>{greeting}</p>
		</div>
	);
};
