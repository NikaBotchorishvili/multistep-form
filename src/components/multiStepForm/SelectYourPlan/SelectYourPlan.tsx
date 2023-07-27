import { useContext, useEffect } from "react";
import Input from "./components/input";
import { Context } from "../../../Context/MultiStepContext";
import { ContextType } from "../../../Context/Types";
function SelectYourPlan() {
	const { planType, handleSetPlanType, setFormData } =
		useContext(Context) as Required<Partial<ContextType>>; 

	useEffect(() => {
		if (planType) {
			setFormData((prev) => {
				return {
					...prev,
					plan: {
						...prev.plan,
						type: !planType ? "monthly" : "yearly",
						price: prev.plan.price * 10,
					},	
				};
			})
			// 	Solution for the price isn't really good but it works in this case cause the price for every yearly plan
			// 	is 10 times more than the corresponding monthly plan.
		}else{
			setFormData((prev) => {
				return {
					...prev,
					plan: {
						...prev.plan,
						type: !planType ? "monthly" : "yearly",
						price: prev.plan.price * 10,
					},	
				};
			})
		}
	}, [planType]);
	const content = !planType ? (
		<>
			<Input
				icon="/images/icon-arcade.svg"
				PlanName="arcade"
				price={9}
				type="monthly"
			/>
			<Input
				icon="/images/icon-advanced.svg"
				PlanName="advanced"
				price={12}
				type="monthly"
			/>
			<Input
				icon="/images/icon-pro.svg"
				PlanName="pro"
				price={15}
				type="monthly"
			/>
		</>
	) : (
		<>
			<Input
				icon="/images/icon-arcade.svg"
				PlanName="arcade"
				price={90}
				type="yearly"
			/>
			<Input
				icon="/images/icon-advanced.svg"
				PlanName="advanced"
				price={120}
				type="yearly"
			/>
			<Input
				icon="/images/icon-pro.svg"
				PlanName="pro"
				price={150}
				type="yearly"
			/>
		</>
	);
	return (
		<>
			<form className="flex gap-4 md:flex-row flex-col md:w-fit w-full ">
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
		</>
	);
}

export default SelectYourPlan;
