import { Context } from "../../../../Context/MultiStepContext";
import { useContext } from "react";
import Capitalize from "../../../../helpers/Capitalize";
import { ContextType } from "../../../../Context/Types";
import { PlanName } from "../../../../Context/Types";
type Props = {
	PlanName: PlanName;
	icon: string;
};

function Input({ icon, PlanName  }: Props) {
	const { isRadioSelected, handleSelectPlanChange, getPlanPrice, typeAbbreviation} = useContext(Context)  as Required<Partial<ContextType>>;;
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
				onChange={() => handleSelectPlanChange(PlanName)}
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
						${getPlanPrice(PlanName)}{typeAbbreviation()}
					</small>
				</div>
			</label>
		</div>
	);
}

export default Input;
