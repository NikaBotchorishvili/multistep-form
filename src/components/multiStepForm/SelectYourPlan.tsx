import { useContext } from "react";

import { Context } from "../../Context/MultiStepContext";

function SelectYourPlan() {
	const { formData } = useContext(Context);
	return (
		<form className="flex gap-4 md:flex-row flex-col md:w-fit w-full">
			<div className="h-36 md:w-32 p-4 md:box-content border border-LightGray rounded-lg cursor-pointer w-full">
				<input
					type="radio"
					name="arcade"
					className="absolute hidden "
				/>
				<label className="w-full h-full flex flex-col justify-between " htmlFor="arcade">
					<img
						className="h-min mr-auto"
						src="/images/icon-arcade.svg"
						alt=""
					/>
					<div>
						<h2 className="text-MarineBlue">Arcade</h2>
						<small className="text-CoolGray">$9/month</small>
					</div>
				</label>
			</div>
			<div className="h-36 md:w-32 p-4 md:box-content border border-LightGray rounded-lg cursor-pointer w-full ">
				<input
					type="radio"
					name="arcade"
					className="absolute hidden "
				/>
				<label className="w-full h-full flex flex-col justify-between">
					<img
						className="h-min mr-auto"
						src="/images/icon-advanced.svg"
						alt=""
					/>
					<div>
						<h2 className="text-MarineBlue">Advanced</h2>
						<small className="text-CoolGray">$12/month</small>
					</div>
				</label>
			</div>
			<div className="h-36 md:w-32 p-4 md:box-content border border-LightGray rounded-lg cursor-pointer w-full">
				<input
					type="radio"
					name="arcade"
					className="absolute hidden "
				/>

				<label className="w-full h-full flex flex-col justify-between">
					<img
						className="h-min mr-auto"
						src="/images/icon-pro.svg"
						alt=""
					/>
					<div>
						<h2 className="text-MarineBlue">Pro</h2>
						<small className="text-CoolGray">$15/month</small>
					</div>
				</label>
			</div>
		</form>
	);
}

export default SelectYourPlan;
