import { useState } from "react";
import "./Select.css";
import viniImg from "../../assets/vini.jpg";
import mbappeImg from "../../assets/mbappe.jpeg";
import belliImg from "../../assets/belligol.jpg";
import federicoImg from "../../assets/federico.jpeg";

export const Select = () => {
	const [players, setPlayers] = useState("vinicius");

	const handleSelect = (event) => {
		setPlayers(event.target.value);
	};

	return (
		<div className="players-select">
			<label htmlFor="players">Choose your player:</label>
			<select id="players" name="players" value={players} onChange={handleSelect}>
				<option value="vinicius">Vinicius</option>
				<option value="mbappe">Mbappe</option>
				<option value="bellingham">Bellingham</option>
				<option value="federico">Federico</option>
			</select>

			{players === "vinicius" && <img src={viniImg} alt="Vinicius Jr. celebrating a gol" />}
			{players === "mbappe" && <img src={mbappeImg} alt="Kylian Mbappe playing for Real Madrid" />}
			{players === "bellingham" && <img src={belliImg} alt="Jude Bellingham making his signature celebration" />}
			{players === "federico" && <img src={federicoImg} alt="Federico Valverde jumping during a match" />}
		</div>
	);
};
