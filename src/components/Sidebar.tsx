import { useContext } from "react";
import { Context } from "../Context/MultiStepContext";



function Sidebar() {
	const {currentStepIndex, sidebar, goto } = useContext(Context);

	const content = sidebar?.map((el, index) => {
		return (
			<div key={index} className="flex justify-evenly  items-center cursor-pointer" onClick={() => goto(index)}>
				<h2 className={
					`flex items-center justify-center    w-8 h-8  rounded-full 
					${index == currentStepIndex ? "bg-PastelBlue text-MarineBlue": "text-White"}`
					}>
					{el.number}
				</h2>
				<div className="hidden md:flex flex-col md:basis-32 ">
					<small className="text-LightGray font-thin">
						{el.step}
					</small>
					<h2 className="text-xl text-White">{el.title}</h2>
				</div>
			</div>
		)
	})
	return (
		<div className="absolute top-0 left-0 md:relative">
			<img
				srcSet="images/bg-sidebar-desktop.svg 1000w, images/bg-sidebar-mobile.svg 767w"
				alt=""
				className="md:h-full w-screen md:w-full rounded-3xl"
			/>

			<div className=" flex md:flex-col absolute justify-center gap-5 top-20 w-full md:gap-4  ">
{content}
			</div>
		</div>
	);
}

export default Sidebar;
