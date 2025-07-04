import "./ErrorImage.css";
import backImg from "../../assets/backimg.jpg";

export const ErrorImage = () => {
	const handleError = (event) => {
		console.log("This image is missing, loading back image...");
		event.target.src = backImg;
	};
	return (
		<div className="error-msg">
			<img src="./error" alt="error error" onError={handleError} />
		</div>
	);
};
