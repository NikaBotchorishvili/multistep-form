import { FormEvent, useContext } from "react";
import { Context } from "../../Context/MultiStepContext";

function PersonalInfo() {
	const { handlePersonalizeChange, formData } = useContext(Context);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form
			className="flex flex-col gap-5"
			onSubmit={(e) => handlePersonalizeChange(e)}
		>
			<div className="flex flex-col gap-2">
				<label className="text-MarineBlue " htmlFor="name">
					Name
				</label>
				<input
					className="border border-CoolGray p-2 rounded-md"
					type="text"
					name="name"
					value={formData?.personalize.name}
					placeholder="e.g. Stephen King"
					onChange={(e) => handlePersonalizeChange(e)}
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
					value={formData?.personalize.email}
					placeholder="e.g. stephenking@lorem.com"
					onChange={(e) => handlePersonalizeChange(e)}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-MarineBlue " htmlFor="phone-number">
					Phone Number
				</label>
				<input
					className="border border-CoolGray p-2 rounded-md"
					type="text"
					name="phone_number"
					value={formData?.personalize.phone_number}
					placeholder="e.g. +1 234 567 890"
					required
					onChange={(e) => handleChange(e)}
				/>
			</div>
		</form>
	);
}

export default PersonalInfo;
