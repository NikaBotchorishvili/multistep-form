import { useContext } from "react";
import { Context } from "../../Context/MultiStepContext";
import Sidebar from "../Sidebar";
import Title from "./components/Title";
import ThankYou from "../thankYou";
import { ContextType } from "../../Context/Types";
import NavigationButtons from "./components/NavigationButtons";
import useWindowSize from "../../hooks/useWindowSize";
function Form() {
	const { width, height } = useWindowSize();
	const { currentStepIndex, step, finished } = useContext(
		Context
	) as Required<Partial<ContextType>>;
	return (
		<>
			<main className="flex md:flex-row flex-col h-[600px] shadow-none md:shadow-lg w-[1000px] justify-around p-5 bg-opacity-0 md:bg-background rounded-3xl">
				<Sidebar currentStepIndex={currentStepIndex} />
				<div className="flex flex-col md:h-full  md:static absolute top-32 left-1/2 right-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit w-5/6 h-fit bg-Alabaster md:bg-opacity-0 p-5 rounded-2xl md:rounded-none md:p-0 box-content">
					<div className="flex flex-col gap-5 w-full h-full ">
						{finished ? (
							<ThankYou />
						) : (
							<>
								<Title />
								{step}
							</>
						)}
					</div>
					{width >= 768 && <NavigationButtons />}
				</div>
			</main>
			{width <= 768 && <NavigationButtons />}
		</>
	);
}

export default Form;
