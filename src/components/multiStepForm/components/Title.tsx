import { useContext } from "react";
import { Context } from "../../../Context/MultiStepContext";

type Props = {
	title?: string;
	description?: string;
}
function Title(props: Props) {
    const { title } = useContext(Context)
	return (
		<div className="flex items-center flex-col gap-2 md:mt-10 text-center">
			<h1 className={`text-3xl text-MarineBlue font-bold `}>
				{!props.title? title?.title: props.title}
			</h1>
			<small className={`text-CoolGray w-2/3 `}>
                {!props.description? title?.description: props.description}
			</small>
		</div>
	);
}

export default Title;
