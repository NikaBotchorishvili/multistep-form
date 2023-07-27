import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";
import { ContextType } from "../../../../Context/Types";
function PriceSummary() {
	const { totalPrice } = useContext(Context)  as Required<Partial<ContextType>>;
	totalPrice()
	return (
		<article className="flex justify-between">
			<h2 className="text-CoolGray">Total (per month)</h2>
			<p className="text-PurplishBlue text-2xl font-extrabold">+12$/mo</p>
		</article>
	);
}

export default PriceSummary;
