import { useContext } from "react";
import { Context } from "../../../Context/MultiStepContext";
function Title() {
    const { title } = useContext(Context)
	return (
		<div className="flex flex-col gap-2 md:mt-10">
			<h1 className="text-3xl text-MarineBlue font-bold ">
				{title?.title}
			</h1>
			<small className="text-CoolGray">
                {title?.description}
			</small>
		</div>
	);
}

export default Title;
