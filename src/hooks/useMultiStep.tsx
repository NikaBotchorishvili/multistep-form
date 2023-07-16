import { useState, ReactElement } from "react";


function useMultiStep(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const next = () => {
		setCurrentStepIndex((prevCurrentStepIndex) => {
			if (prevCurrentStepIndex + 1 >= currentStepIndex) {
				return prevCurrentStepIndex;
			}
			return prevCurrentStepIndex + 1;
		});
	};

	const goto = (index: number) => {
		setCurrentStepIndex(index);
	};
	const back = () => {
		setCurrentStepIndex((prevCurrentStepIndex) => {
			if (prevCurrentStepIndex - 1 < 0) {
				return prevCurrentStepIndex;
			}
			return prevCurrentStepIndex - 1;
		});
	};

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
        back,
		next,
		goto,
	};
}

export default useMultiStep;
