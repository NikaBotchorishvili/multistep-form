import { useContext } from "react";
import { Context } from "../Context/MultiStepContext";



function Sidebar() {
	const { currentStepIndex } = useContext(Context);


	return (
		<div className="relative">
			<img
				srcSet="images/bg-sidebar-desktop.svg 1000w, images/bg-sidebar-mobile.svg 768w"
				alt=""
				className="md:h-full w-full h-fit "
			/>
			<div className=" flex flex-col absolute top-20 w-full gap-4 ">
				<div className="flex justify-evenly  items-center">
					<h2 className="flex items-center justify-center text-White  bg-MarineBlue w-8 h-8  rounded-full">
						1
					</h2>
					<div className="flex flex-col basis-32">
						<small className="text-LightGray font-thin">
							STEP 1
						</small>
						<h2 className="text-xl text-White">Your Info</h2>
					</div>
				</div>
				<div className="flex justify-evenly w-full items-center">
					<h2 className="flex items-center justify-center text-White   w-8 h-8  rounded-full">
						2
					</h2>
					<div className="flex flex-col basis-32">
						<small className="text-LightGray font-thin">
							STEP 2
						</small>
						<h2 className="text-xl text-White">SELECT PLAN</h2>
					</div>
				</div>
				<div className="flex justify-evenly w-full items-center">
					<h2 className="flex items-center justify-center text-White   w-8 h-8  rounded-full">
						3
					</h2>
					<div className="flex flex-col basis-32">
						<small className="text-LightGray font-thin">
							STEP 3
						</small>
						<h2 className="text-xl text-White">ADD-ONS</h2>
					</div>
				</div>
				<div className="flex justify-evenly w-full items-center">
					<h2 className="flex items-center justify-center text-White   w-8 h-8  rounded-full">
						4
					</h2>
					<div className="flex flex-col basis-32">
						<small className="text-LightGray font-thin">
							STEP 4
						</small>
						<h2 className="text-xl text-White ">SUMMARY</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
