import { useContext } from "react";
import CheckBoxInput from "./components/CheckBoxInputs";
import { Context } from "../../../Context/MultiStepContext";
function AddOns() {
	const { formData } = useContext(Context);
	return (
		<form className="flex flex-col gap-4">
			{formData?.addOns.map((addOn, index) => {
				console.log(addOn.selected);
				return (
					<CheckBoxInput
						key={index}
						name={addOn.name}
						price={addOn.price}
						description={addOn.description}
						selected={addOn.selected}
					/>
				)
			})}

		</form>
	);
}

export default AddOns;
