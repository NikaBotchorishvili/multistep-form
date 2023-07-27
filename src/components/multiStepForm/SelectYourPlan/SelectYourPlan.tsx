import { useContext } from "react";
import Input from "./components/input";
import { Context } from "../../../Context/MultiStepContext";
import {ContextType} from "../../../Context/Types"
function SelectYourPlan() {
	const { handleSetPlanType, planType} =
		useContext(Context) as Required<Partial<ContextType>>

	const content =   (
		<>
			<Input
				icon="/images/icon-arcade.svg"
				PlanName="arcade"
			/>
			<Input
				icon="/images/icon-advanced.svg"
				PlanName="advanced"
			/>
			<Input
				icon="/images/icon-pro.svg"
				PlanName="pro"
			/>
		</>
	)
	return (
		<div className="mb-40 flex  flex-col justify-center md:gap-y-6 gap-y-10">
			<form className="flex gap-4 md:flex-row flex-col  md:w-fit w-full ">
				{content}
			</form>
			<section className="flex  items-center gap-2 mx-auto">
				<h2
					className={`font-extrabold text-xl ${
						!planType ? "text-MarineBlue" : "text-CoolGray"
					}`}
				>
					Monthly
				</h2>
				<div className="w-24 h-8 bg-MarineBlue relative rounded-full">
					<input
						type="checkbox"
						className=" w-full h-full absolute opacity-0 top-0 left-0"
						checked={planType}
						onChange={() => handleSetPlanType()}
					/>
					<span
						className={`w-8 h-8 rounded-full bg-LightBlue absolute transition duration-200 ${
							planType ? "right-0" : "left-0"
						}`}
					></span>
				</div>
				<h2
					className={`font-extrabold text-xl ${
						planType ? "text-MarineBlue" : "text-CoolGray"
					}`}
				>
					Yearly
				</h2>
			</section>
		</div>
	);
}

export default SelectYourPlan;
