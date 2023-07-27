import { useState, useEffect } from "react";

type WindowSizeType = {
	width: number;
	height: number;
};

function useWindowSize() {
	const [windowSize, setWindowSize] = useState<WindowSizeType>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	function handleResize() {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return windowSize;
}

export default useWindowSize;
