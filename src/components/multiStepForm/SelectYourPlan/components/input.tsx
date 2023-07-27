import { Context } from "../../../../Context/MultiStepContext";
import { useContext } from "react";
import Capitalize from "../../../../helpers/Capitalize";
import { ContextType } from "../../../../Context/Types";
type Props = {
	PlanName: string;
	icon: string;
	price: number;
	type: "monthly" | "yearly";
};

function Input({ icon, PlanName, price, type }: Props) {
	const { isRadioSelected, handleSelectPlanChange } = useContext(Context)  as Required<Partial<ContextType>>;;
	return (
		<div
			className={`h-36 md:w-32 p-4 md:box-content border border-LightGray rounded-lg cursor-pointer w-full relative ${
				isRadioSelected(PlanName) && "border-PurplishBlue bg-Alabaster"
			}`}
		>
			<input
				type="radio"
				name={PlanName}
				className="absolute  w-full h-full opacity-0 top-0 left-0"
				checked={isRadioSelected(PlanName)}
				onChange={() => handleSelectPlanChange(price, PlanName, type)}
			/>
			<label
				className="w-full h-full flex flex-col justify-between "
				htmlFor={PlanName}
			>
				<img className="h-min mr-auto" src={icon} alt={PlanName} />
				<div>
					<h2 className="text-MarineBlue">
						{Capitalize(PlanName)}
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
