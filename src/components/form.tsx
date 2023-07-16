import useMultiStep from "../hooks/useMultiStep";
import StepOne from "./multiStepForm/StepOne";
import StepTwo from "./multiStepForm/StepTwo";
import StepThree from "./multiStepForm/StepThree";
import StepFour from "./multiStepForm/StepFour";
function Form() {
	const { steps, step } = useMultiStep([
		<StepOne />,
		<StepTwo />,
		<StepThree />,
		<StepFour />,
	]);
	return (
		<main className="flex">
			<div className="relative">
				<img src="images/bg-sidebar-desktop.svg" alt="" />
				<div className=" flex flex-col absolute top-10 w-full gap-1 ">
					<div className="flex justify-around w-full items-center">
						<h2 className="flex items-center justify-center text-White  bg-MarineBlue w-8 h-8  rounded-full">
							1
						</h2>
						<div className="flex flex-col">
							<small className="text-LightGray font-thin">
								STEP 1
							</small>
							<h2 className="text-xl text-White">Your Info</h2>
						</div>
					</div>
					<div className="flex justify-around w-full items-center">
						<h2 className="text-White">2</h2>
						<div className="flex flex-col">
							<small className="text-LightGray font-thin">
								STEP 2
							</small>
							<h2 className="text-xl text-White">SELECT PLAN</h2>
						</div>
					</div>
					<div className="flex justify-around w-full items-center">
						<h2 className="text-White">3</h2>
						<div className="flex flex-col">
							<small className="text-LightGray font-thin">
								STEP 3
							</small>
							<h2 className="text-xl text-White">ADD-ONS</h2>
						</div>
					</div>
					<div className="flex justify-around w-full items-center">
						<h2 className="text-White">4</h2>
						<div className="flex flex-col">
							<small className="text-LightGray font-thin">
								STEP 4
							</small>
							<h2 className="text-xl text-White">SUMMARY</h2>
						</div>
					</div>
				</div>
			</div>

			{step}
		</main>
	);
}

export default Form;
