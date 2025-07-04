import { useState } from "react";
import "./Select.css";
import viniImg from "../../assets/vini.jpg";
import mbappeImg from "../../assets/mbappe.jpeg";
import belliImg from "../../assets/belligol.jpg";
import federicoImg from "../../assets/federico.jpeg";
import { motion } from "framer-motion";

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

			{players === "vinicius" && (
				<motion.img
					src={viniImg}
					alt="Vinicius Jr. celebrating a goal"
					key="vinicius"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				/>
			)}
			{players === "mbappe" && (
				<motion.img
					src={mbappeImg}
					alt="Kylian Mbappé playing for Real Madrid"
					key="mbappe"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				/>
			)}
			{players === "bellingham" && (
				<motion.img
					src={belliImg}
					alt="Jude Bellingham making his signature celebration"
					key="bellingham"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				/>
			)}
			{players === "federico" && (
				<motion.img
					src={federicoImg}
					alt="Federico Valverde jumping during a match"
					key="federico"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				/>
			)}
		</div>
	);
};
