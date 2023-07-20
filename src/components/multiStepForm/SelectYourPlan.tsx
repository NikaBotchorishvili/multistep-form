import { useContext } from "react";

import { Context } from "../../Context/MultiStepContext";

function SelectYourPlan() {
	const { formData } = useContext(Context);
	return (
		<form className="flex gap-4">
			<button className="h-36 w-32 flex flex-col justify-between p-4 box-content border border-LightGray rounded-lg cursor-pointer">
				<img
					className="h-min mr-auto"
					src="/images/icon-arcade.svg"
					alt=""
				/>
				<div>
					<h2 className="text-MarineBlue">Arcade</h2>
					<small className="text-CoolGray">$9/month</small>
				</div>
			</button>
			<button className="h-36 w-32 flex flex-col justify-between p-4 box-content border border-LightGray rounded-lg cursor-pointer">
				<img
					className="h-min mr-auto"
					src="/images/icon-advanced.svg"
					alt=""
				/>
				<div>
					<h2 className="text-MarineBlue">Advanced</h2>
					<small className="text-CoolGray">$12/month</small>
				</div>
			</button>
			<button className="h-36 w-32 flex flex-col justify-between p-4 box-content border border-LightGray rounded-lg cursor-pointer">
				<img
					className="h-min mr-auto"
					src="/images/icon-pro.svg"
					alt=""
				/>
				<div>
					<h2 className="text-MarineBlue">Pro</h2>
					<small className="text-CoolGray">$15/month</small>
				</div>
			</button>
		</form>
	);
}

export default SelectYourPlan;
