import { useContext } from "react";
import { Context } from "../../../Context/MultiStepContext";
import { ContextType } from "../../../Context/Types";
import Input from "./components/Input";
function PersonalInfo() {
	const { handlePersonalizeChange, formData, errors } = useContext(
		Context
	) as Required<Partial<ContextType>>;

	return (
		<form className="flex flex-col gap-5">
			<Input
				label="Name"
				name="name"
				error={errors.name}
				value={formData.personalize.name}
				placeholder="e.g. Stephen King"
				handler={handlePersonalizeChange}
				type="text"
			/>
			<Input
				label="Email"
				name="email"
				error={errors.email}
				value={formData.personalize.email}
				placeholder="e.g. stephenking@lorem.com"
				handler={handlePersonalizeChange}
				type="email"
			/>
			<Input
				label="Phone Number"
				name="phone_number"
				error={errors.email}
				value={formData.personalize.email}
				placeholder="e.g. +1 234 567 890"
				handler={handlePersonalizeChange}
				type="email"
			/>
		</form>
	);
}

export default PersonalInfo;
