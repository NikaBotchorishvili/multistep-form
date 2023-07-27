import { useContext } from "react";
import CheckBoxInput from "./components/CheckBoxInputs";
import { Context } from "../../../Context/MultiStepContext";
import { ContextType } from "../../../Context/Types";
function AddOns() {
	const { formData, getAddonPrice } = useContext(Context) as Required<Partial<ContextType>>;
	return (
		<form className="flex flex-col gap-4">
			{formData?.addOns.map((addOn, index) => {
				return (
					<CheckBoxInput
						key={index}
						name={addOn.name}
						price={getAddonPrice(addOn.name)}
						description={addOn.description}
						selected={addOn.selected}
					/>
				)
			})}

		</form>
	);
}

export default AddOns;
