import { createContext, useState, ChangeEvent } from "react";
import {
	ContextProps,
	ContextType,
	FormData,
	TitleType,
	PlanType,
	ErrorsType
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

	const [ errors, setErrors ] = useState<ErrorsType>({
		name: null,
		email: null,
		phone_number: null
	})

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
		const {email, phone_number, name} = formData.personalize
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneNumberRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
		const nameRegex = /^[a-z ,.'-]+$/i;
		const errs: ErrorsType = {
			name: null,
			email: null,
			phone_number: null,
		}
		if(email === ""){
			errs.email = "This field is required"
		} else if(!emailRegex.test(email)){
			errs.email = "Invalid Email"
		}

		if(phone_number === ""){
			errs.phone_number = "This field is required"
		}else if(!phoneNumberRegex.test(phone_number)){
			errs.phone_number = "Invalid number"
		}

		if(name === ""){
			errs.name = "This field is required"
		}else if(!nameRegex.test(name)){
			errs.name = "Invalid Name";
		}

		if(Object.values(errs).filter(err => err != null).length == 0){
			setFinished((prev) => !prev);
		}else{
			setErrors(errs);
			goto(0)
		}
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
		return totalPrice;
	};

	const typeAbbreviation = () => {
		return !planType? "mo": "yr"
	}

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
		errors,
		typeAbbreviation,
	};

	return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default ContextProvider;
