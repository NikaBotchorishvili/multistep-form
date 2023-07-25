import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";

function PlanSummary() {
    const { goto } = useContext(Context);
	return (
		<article className="flex justify-between items-center border-b border-CoolGray pb-4 box-content">
			<div className="flex flex-col gap-y-2 items-start">
				<h2 className="text-MarineBlue text-xl font-medium">
					Arcade (Monthly)
				</h2>
				<button
					onClick={() => goto(1)}
					className="underline text-CoolGray hover:text-PurplishBlue"
				>
					Change
				</button>
			</div>
			<h3>$9/mo</h3>
		</article>
	);
}

export default PlanSummary;
