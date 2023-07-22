function AddOns() {
	return (
		<form className="flex flex-col gap-4">
			<div className="flex justify-between shrink w-full md:w-[400px] px-6 py-4  md:box-content items-center border border-LightGray rounded-lg cursor-pointer hover:border-PurplishBlue">
				<span className="flex gap-4">
					<input type="checkbox" name="" id="" />
					<div>
						<h2 className="text-lg text-MarineBlue font-bold">
							Online Services
						</h2>
						<small className="text-CoolGray">
							Access to multiplayer games
						</small>
					</div>
				</span>

				<small className="text-PurplishBlue">+1$/month</small>
			</div>

			<div className="flex justify-between shrink w-full md:w-[400px] px-6 py-4  md:box-content items-center border border-LightGray rounded-lg cursor-pointer hover:border-PurplishBlue">
				<span className="flex gap-4">
					<input type="checkbox" name="" id="" />
					<div>
						<h2 className="text-lg text-MarineBlue font-bold">
							Larger Storage
						</h2>
						<small className="text-CoolGray">
							extra 1TB of cloud service
						</small>
					</div>
				</span>

				<small className="text-PurplishBlue">+2$/month</small>
			</div>
			<div className="flex justify-between shrink w-full md:w-[400px] px-6 py-4  md:box-content items-center border border-LightGray rounded-lg cursor-pointer hover:border-PurplishBlue">
				<span className="flex gap-4">
					<input type="checkbox" name="" id="" />
					<div>
						<h2 className="text-lg text-MarineBlue font-bold">
							Customizable Profile
						</h2>
						<small className="text-CoolGray">
							Custom theme on your profile
						</small>
					</div>
				</span>

				<small className="text-PurplishBlue">+2$/month</small>
			</div>
		</form>
	);
}

export default AddOns;
