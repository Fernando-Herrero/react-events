import { useState } from "react";
import "./HoverBox.css";

export const HoverBox = () => {
	const handleMouseEnter = (event) => {
		event.target.classList.add("hovered");
	};

	const handleMouseLeave = (event) => {
		event.target.classList.remove("hovered");
	};

	return <div className="box-color" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>;
};
