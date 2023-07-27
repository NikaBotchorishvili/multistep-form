import { useContext } from "react";
import { Context } from "../Context/MultiStepContext";

import Sidebar from "./Sidebar";
import Title from "./multiStepForm/components/Title";
import ThankYou from "./thankYou";
import { ContextType } from "../Context/Types";
function Form() {
	const {
		currentStepIndex,
		back,
		next,
		step,
		steps,
		handleSubmitFinish,
		finished,
		errors
	} = useContext(Context) as Required<Partial<ContextType>>;
	return (
		<main className="flex md:flex-row flex-col h-[600px] shadow-md w-[1000px] justify-around p-5 bg-White rounded-3xl">
			<Sidebar currentStepIndex={currentStepIndex} />
			<div className="flex flex-col md:h-full justify-between md:static absolute top-32 left-1/2 right-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit w-5/6 h-fit bg-Alabaster md:bg-opacity-0 p-5 rounded-2xl md:rounded-none md:p-0 box-content">
				<div className="flex flex-col gap-5 w-full h-full">
					{finished ? (
						<ThankYou />
					) : (
						<>
							<Title />
							{step}
						</>
					)}
				</div>

				<div className="flex justify-between w-full  md:static">
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
			</div>
		</main>
	);
}

export default Form;
