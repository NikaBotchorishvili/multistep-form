import { useContext } from "react";
import { Context } from "../../../../Context/MultiStepContext";
import { ContextType } from "../../../../Context/Types";
function PriceSummary() {
	const { totalPrice, planType, typeAbbreviation } = useContext(Context)  as Required<Partial<ContextType>>;
	
	return (
		<article className="flex justify-between">
			<h2 className="text-CoolGray">Total (per {!planType? "month": "year"})</h2>
			<p className="text-PurplishBlue text-2xl font-extrabold">+{totalPrice()}$/{typeAbbreviation()}</p>
		</article>
	);
}

export default PriceSummary;
