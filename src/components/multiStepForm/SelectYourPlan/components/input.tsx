import { Context } from "../../../../Context/MultiStepContext";

import { useContext } from "react";
type Props = {
	PlanName: string;
	icon: string;
	price: number;
	type: "monthly" | "yearly";
};

function Input({ icon, PlanName, price, type }: Props) {
	const { isRadioSelected, handleSelectPlanChange } = useContext(Context);
	return (
		<div
			onClick={() => handleSelectPlanChange(price, PlanName)}
			className={`h-36 md:w-32 p-4 md:box-content border border-LightGray rounded-lg cursor-pointer w-full ${
				isRadioSelected(PlanName) && "border-PurplishBlue bg-Alabaster"
			}`}
		>
			<input
				type="radio"
				name={PlanName}
				className="absolute hidden w-full h-full"
				checked={isRadioSelected(PlanName)}
			/>
			<label
				className="w-full h-full flex flex-col justify-between "
				htmlFor={PlanName}
			>
				<img className="h-min mr-auto" src={icon} alt={PlanName} />
				<div>
					<h2 className="text-MarineBlue">
						{PlanName[0].toUpperCase() + PlanName.slice(1)}
					</h2>
					<small className="text-CoolGray">
						${price}/{type == "monthly" ? "month" : "year"}
					</small>
				</div>
			</label>
		</div>
	);
}

export default Input;