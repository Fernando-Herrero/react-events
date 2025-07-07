import { useState } from "react";
import "./NamesList.css";

export const NamesList = () => {
	// const [greeting, setGreeting] = useState("");

	// const handleClick = (name) => {
	// 	if (name === "fer") setGreeting("Hey! It's Fer here — I'm the snack master and mood booster around!");
	// 	if (name === "alvaro") setGreeting("Yo, Alvaro in the house! Warning: I'm contagious with good vibes.");
	// 	if (name === "ana") setGreeting("Hi! Ana here, officially the queen of awkward but lovable moments.");
	// 	if (name === "maria") setGreeting("Hey, it's Maria Trinidad — your daily dose of unpredictable awesomeness.");
	// 	if (name === "fernando") setGreeting("What's up! Fernando H. here, the legend who makes everything funnier.");
	// };

	// return (
	// 	<div className="names-list">
	// 		<ul>
	// 			<li>
	// 				Fer <button onClick={() => handleClick("fer")}>Greeting</button>
	// 			</li>
	// 			<li>
	// 				Alvaro <button onClick={() => handleClick("alvaro")}>Greeting</button>
	// 			</li>
	// 			<li>
	// 				Ana <button onClick={() => handleClick("ana")}>Greeting</button>
	// 			</li>
	// 			<li>
	// 				Maria Trinidad <button onClick={() => handleClick("maria")}>Greeting</button>
	// 			</li>
	// 			<li>
	// 				Fernando H. <button onClick={() => handleClick("fernando")}>Greeting</button>
	// 			</li>
	// 		</ul>
	// 		<p>{greeting}</p>
	// 	</div>
	// );

	//TRYING TO DO BETTER
	const [greeting, setGreeting] = useState({});

	const handleClick = (name) => {
		const newGreeting = {
			...greeting,
			[name]: getGreeting(name),
		};
		setGreeting(newGreeting);
		// setTimeout(() => {
		// 	setGreeting({});
		// }, 3000);
		//ASI LO HICE YO PERO SE BORRAN TODOS EN 3 SEGUNDOS AUN QUE PULSES UNO DESPUES DE OTRO
		setTimeout(() => {
			setGreeting((prev) => {
				const updated = { ...prev };
				delete updated[name]; // solo borra ese nombre
				return updated;
			});
		}, 3000); //DE ESTA MANERA ES PARA CADA UNO
	};

	const getGreeting = (name) => {
		switch (name) {
			case "fer":
				return "Hey! It's Fer here — I'm the snack master and mood booster around!";
			case "alvaro":
				return "Yo, Alvaro in the house! Warning: I'm contagious with good vibes.";
			case "ana":
				return "Hi! Ana here, officially the queen of awkward but lovable moments.";
			case "maria":
				return "Hey, it's Maria Trinidad — your daily dose of unpredictable awesomeness.";
			case "fernando":
				return "What's up! Fernando H. here, the legend who makes everything funnier.";
			default:
				return "";
		}
	};

	return (
		<div className="names-list">
			<ul>
				<li>
					<div>
						Fer <button onClick={() => handleClick("fer")}>Greeting</button>
					</div>
					<p>{greeting["fer"]}</p>
				</li>
				<li>
					<div>
						Alvaro <button onClick={() => handleClick("alvaro")}>Greeting</button>
					</div>
					<p>{greeting["alvaro"]}</p>
				</li>
				<li>
					<div>
						Ana <button onClick={() => handleClick("ana")}>Greeting</button>
					</div>
					<p>{greeting["ana"]}</p>
				</li>
				<li>
					<div>
						Maria Trinidad <button onClick={() => handleClick("maria")}>Greeting</button>
					</div>
					<p>{greeting["maria"]}</p>
				</li>
				<li>
					<div>
						Fernando H. <button onClick={() => handleClick("fernando")}>Greeting</button>
					</div>
					<p>{greeting["fernando"]}</p>
				</li>
			</ul>
		</div>
	);
};
