import { useContext } from "react";
import { Context } from "../../../Context/MultiStepContext";
import { ContextType } from "../../../Context/Types";
function NavigationButtons() {
	const {
		finished,
		currentStepIndex,
		steps,
		next,
		handleSubmitFinish,
		back,
	} = useContext(Context) as Required<Partial<ContextType>>;
	return (
		<div className="flex justify-between w-full bottom-0 bg-White px-6 py-4 shadow-[3px_1px_30px_-15px_rgba(0,0,0,0.6)] md:shadow-none md:p-0 md:bg-transparent  fixed md:static ">
			{!finished && (
				<>
					{currentStepIndex !== 0 && (
						<button
							onClick={back}
							className="mr-auto text-CoolGray font-bold hover:text-MarineBlue duration-76"
						>
							Go Back
						</button>
					)}
					{currentStepIndex + 1 < steps.length ? (
						<button
							onClick={next}
							className="ml-auto text-White bg-MarineBlue text-xl px-4 py-2 rounded-lg hover:bg-opacity-90 duration-150"
						>
							Next Step
						</button>
					) : (
						<button
							onClick={handleSubmitFinish}
							className="ml-auto text-White bg-MarineBlue text-xl px-4 py-2 rounded-lg hover:bg-opacity-90 duration-150"
						>
							Finish
						</button>
					)}
				</>
			)}
		</div>
	);
}

export default NavigationButtons;
