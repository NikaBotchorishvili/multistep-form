import PlanSummary from "./components/PlanSummary";
import AddOnsSummary from "./components/AddOnsSummary";
import PriceSummary from "./components/PriceSummary";

function Summary() {
	return (
		<section className="flex flex-col  box-content gap-y-6">
			<main className="flex flex-col bg-Alabaster box-content p-4 gap-y-6 rounded-2xl">
				{/* Plan */}
				<PlanSummary />
				{/* Addons */}
				<AddOnsSummary />
			</main>

			{/* Total */}
			<PriceSummary />
		</section>
	);
}

export default Summary;
