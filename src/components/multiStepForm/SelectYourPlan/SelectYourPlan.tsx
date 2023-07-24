import { useContext, MouseEvent } from "react";
import Input from "./components/input";
import { Context } from "../../../Context/MultiStepContext";

function SelectYourPlan() {
	const { formData } = useContext(Context);

	const inputData = {
		monthly: {
			arcade: 9,
			advanced: 12,
			pro: 15,
		},
		yearly: {
			arcade: 90,
			advanced: 120,
			pro: 150,
		},
	};

	return (
		<form className="flex gap-4 md:flex-row flex-col md:w-fit w-full">
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
		</form>
	);
}

export default SelectYourPlan;
