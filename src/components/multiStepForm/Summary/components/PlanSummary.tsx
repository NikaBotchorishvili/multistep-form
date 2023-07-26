import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";
import Capitalize from "../../../../helpers/Capitalize";
function PlanSummary() {
	const { goto, formData } = useContext(Context);
	const planFormatted = `${Capitalize(formData?.plan.selected)} (${Capitalize(
		formData?.plan.type
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
			<h3>${formData?.plan.price}/{formData?.plan.selected == "yearly" ? "yr" : "mo"}</h3>
		</article>
	);
}

export default PlanSummary;
