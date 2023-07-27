import { createContext, useState, ChangeEvent } from "react";
import {
	ContextProps,
	ContextType,
	FormData,
	TitleType,
	PlanType,
} from "./Types";
import sidebarData from "./data/SideBarData";
import titlesData from "./data/TitleData";
export const Context = createContext<Partial<ContextType>>({});

function ContextProvider({ children, steps }: ContextProps) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	//	false it corresponds to monthly, true to yearly
	const [planType, setPlanType] = useState(false);

	const [finished, setFinished] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		personalize: {
			name: "",
			email: "",
			phone_number: "",
		},
		plan: {
			price: 9,
			selected: "arcade",
			type: "monthly",
		},
		addOns: [
			{
				name: "Online Services",
				price: 1,
				description: "Access to multiplayer games",
				selected: false,
			},
			{
				name: "Larger Storage",
				price: 2,
				description: "extra 1TB of cloud service",
				selected: false,
			},
			{
				name: "Customizable Profile",
				price: 2,
				description: "Custom theme on your profile",
				selected: false,
			},
		],
	});


	const title: TitleType = titlesData[currentStepIndex];

	const next = () => {
		setCurrentStepIndex((prevCurrentStepIndex) => {
			if (prevCurrentStepIndex + 1 >= steps.length) {
				return prevCurrentStepIndex;
			}
			return prevCurrentStepIndex + 1;
		});
	};

	const goto = (index: number) => {
		setCurrentStepIndex(index);
	};

	const back = () => {
		setCurrentStepIndex((prevCurrentStepIndex) => {
			if (prevCurrentStepIndex - 1 < 0) {
				return prevCurrentStepIndex;
			}
			return prevCurrentStepIndex - 1;
		});
	};
	const isRadioSelected = (name: string) => {
		return formData.plan.selected == name;
	};

	const handleSetPlanType = () => {
		setPlanType((prev) => !prev);
	};

	const handlePersonalizeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return {
				...prev,
				personalize: { ...prev.personalize, [name]: value },
			};
		});
	};

	const handleAddOnChange = (name: string) => {
		setFormData((prev) => {
			const updatedAddOns = prev.addOns.map((addOn) => {
				if (addOn.name == name) {
					return { ...addOn, selected: !addOn.selected };
				}
				return addOn;
			});
			return {
				...prev,
				addOns: updatedAddOns,
			};
		});
	};

	const handleSelectPlanChange = (
		price: number,
		planName: string,
		type: PlanType
	) => {
		setFormData((prev) => {
			return {
				...prev,
				plan: { type: type, price: price, selected: planName },
			};
		});
	};

	const handleSubmitFinish = () => {
		setFinished((prev) => !prev);
	};

	const totalPrice = () => {
		const { addOns } = formData;

		const addOnPrices = addOns.map((addOn) => {
			return addOn.price;
		});

		const totalPrice =
			addOnPrices.reduce((a, b) => {
				return a + b;
			}) + formData.plan.price;
		console.log(totalPrice);
		return totalPrice;
	};
	const ContextData: Required<ContextType> = {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		back,
		next,
		goto,
		handlePersonalizeChange,
		handleSelectPlanChange,
		handleAddOnChange,
		formData,
		title,
		sidebar: sidebarData,
		isRadioSelected,
		planType,
		handleSetPlanType,
		handleSubmitFinish,
		finished,
		setFormData,
		totalPrice,
	};

	return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default ContextProvider;
