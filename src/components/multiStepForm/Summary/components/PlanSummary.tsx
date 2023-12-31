import { Context } from "../../../../Context/MultiStepContext";
import { useContext } from "react";
import Capitalize from "../../../../helpers/Capitalize";
import { ContextType } from "../../../../Context/Types";

function PlanSummary() {
	const { goto, formData, getType, typeAbbreviation, getPlanPrice } =
		useContext(Context) as Required<Partial<ContextType>>;
	const planFormatted = `${Capitalize(formData?.plan.selected)} (${Capitalize(
		getType()
	)}) `;
	return (
		<article className="flex justify-between items-center border-b border-CoolGray pb-4 box-content">
			<div className="flex flex-col gap-y-2 items-start">
				<h2 className="text-MarineBlue text-xl font-medium">
					{planFormatted}
				</h2>
				<button
					onClick={() => goto(1)}
					className="underline text-CoolGray hover:text-PurplishBlue"
				>
					Change
				</button>
			</div>
			<h3>
				${getPlanPrice(formData.plan.selected)}/{typeAbbreviation()}
			</h3>
		</article>
	);
}

export default PlanSummary;
