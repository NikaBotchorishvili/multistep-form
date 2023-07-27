import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";
import { ContextType } from "../../../../Context/Types";
function AddOnsSummary() {
	const { formData, goto, typeAbbreviation, getAddonPrice } = useContext(
		Context
	) as Required<Partial<ContextType>>;

	const selectedAddons = formData.addOns.filter((addOn) => addOn.selected);
	const content = selectedAddons.map((addOn, index) => {
		if (addOn.selected) {
			return (
				<div key={index} className="flex justify-between">
					<h2 className="text-CoolGray">{addOn.name}</h2>
					<p className="text-MarineBlue text-md font-medium">
						+{getAddonPrice(addOn.name)}$/{typeAbbreviation()}
					</p>
				</div>
			);
		}
	});
	return (
		<article className="flex flex-col gap-2">
			{content.length == 0 ? (
				<div className="flex flex-col items-start gap-y-1">
					<small className="text-lg text-MarineBlue font-medium">
						No add-ons selected
					</small>
					<button
						onClick={() => goto(2)}
						className="underline text-CoolGray hover:text-PurplishBlue"
					>
						Select
					</button>
				</div>
			) : (
				content
			)}
		</article>
	);
}

export default AddOnsSummary;
