import { useContext } from "react";
import { Context, ContextType } from "../Context/MultiStepContext";

import Sidebar from "./Sidebar";
import Title from "./multiStepForm/components/title";
function Form() {
	const { currentStepIndex, back, next, step, steps } = useContext(Context);
	return (
		<main className="flex md:flex-row flex-col h-[600px] shadow-md w-[1000px] justify-around p-5 bg-White">
			<Sidebar currentStepIndex={currentStepIndex} />
			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col gap-5">
					<Title />
					{ step }
				</div>
				<div className="flex justify-between w-full">
					{currentStepIndex !== 0 && (
						<button
							onClick={() => back()}
							className="mr-auto text-CoolGray font-bold hover:text-MarineBlue duration-76"
						>
							Go Back
						</button>
					)}
					{currentStepIndex + 1 < steps.length ? (
						<button
							onClick={() => next()}
							className="ml-auto text-White bg-MarineBlue text-xl px-4 py-2 rounded-lg hover:bg-opacity-90 duration-150"
						>
							Next Step
						</button>
					) : (
						<button className="ml-auto text-White bg-MarineBlue text-xl px-4 py-2 rounded-lg hover:bg-opacity-90 duration-150">
							Finish
						</button>
					)}
				</div>
			</div>
		</main>
	);
}

export default Form;
