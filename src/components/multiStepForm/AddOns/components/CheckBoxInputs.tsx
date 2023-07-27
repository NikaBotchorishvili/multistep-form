type Props = {
	name: string;
	description: string;
	price: number;
	selected: boolean
};

import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";
import { ContextType } from "../../../../Context/Types";
function CheckBoxInput({ name, description, price, selected }: Props) {
	const { handleAddOnChange } =
		useContext(Context) as Required<Partial<ContextType>>
	return (
		<div className="flex justify-between shrink w-full md:w-[400px] px-6 py-4  md:box-content items-center border border-LightGray rounded-lg cursor-pointer hover:border-PurplishBlue">
			<span className="flex gap-4">
				<input
					onChange={() => handleAddOnChange( name )}
					type="checkbox"
					name={name}
                    checked={selected}
				/>
				<div>
					<h2 className="text-lg text-MarineBlue font-bold">
						{name}
					</h2>
					<small className="text-CoolGray">{description}</small>
				</div>
			</span>

			<small className="text-PurplishBlue">{price}$/month</small>
		</div>
	);
}

export default CheckBoxInput;
