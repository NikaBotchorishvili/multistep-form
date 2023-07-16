import { FormEvent } from "react";

function StepOne() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div>
			<h1 className="text-3xl text-MarineBlue font-bold ">
				Personal Info
			</h1>
			<small className="text-CoolGray">
				Please provide your name, email address and phone number
			</small>

			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="flex flex-col gap-2">
					<label className="text-MarineBlue " htmlFor="name">
						Name
					</label>
					<input
						className="border border-CoolGray p-2 rounded-md"
						type="text"
						name="name"
						placeholder="e.g. Stephen King"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-MarineBlue " htmlFor="email">
						Email Address
					</label>
					<input
						className="border border-CoolGray p-2 rounded-md"
						type="email"
						name="email"
						placeholder="e.g. stephenking@lorem.com"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-MarineBlue " htmlFor="phone-number">
						Phone Number
					</label>
					<input
						className="border border-CoolGray p-2 rounded-md"
						type="text"
						name="phone number"
						placeholder="e.g. +1 234 567 890"
					/>
				</div>
			</form>
		</div>
	);
}

export default StepOne;
