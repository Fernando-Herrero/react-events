import "./ScrollLogger.css";

export const ScrollLogger = () => {
	const handleScroll = () => {
		console.log("im doing it");
	};

	return (
		<div className="scroll-logger" onScroll={handleScroll}>
			<div className="big-div"></div>
		</div>
	);
};
