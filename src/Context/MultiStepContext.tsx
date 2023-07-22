import {
	createContext,
	useState,
	ReactElement,
	ReactNode,
	ChangeEvent,
} from "react";

type ContextProps = {
	children: ReactNode;
	steps: ReactElement[];
};

type formData = {
	name: string;
	email: string;
	phone_number: string;
};

type titleType ={
	title: string,
	description: string,
}

type Sidebar = {
	number: number,
	step: string,
	title: string,
}

export type ContextType = {
	currentStepIndex: number;
	step: ReactElement;
	steps: ReactElement[];
	back: Function;
	next: Function;
	goto: Function;
	handlePersonalizeChange: Function;
	title: titleType;
	formData: formData;
	sidebar: Sidebar[];
};



export const Context = createContext<Partial<ContextType>>({});

function ContextProvider({ children, steps }: ContextProps) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const titles: titleType[] = [
		{
			title: "Personal Info",
			description:
				"Please provide your name, email address and phone number",
		},
		{
			title: "Select Your Plan",
			description: "You have the option of monthly or yearly billing.",
		},
		{
			title: "Pick Add-ons",
			description: "Add-ons help enhance your gaming experience",
		},
		{
			title: "Finishing Up",
			description: "Double-check everything looks OK before confirming.",
		},
	];

	const sidebar: Sidebar[] = [
		{
			number: 1,
			step: "Step 1",
			title: "YOUR INFO"
		},
		{
			number: 2,
			step: "Step 2",
			title: "SELECT PLAN"
		},
		{
			number: 3,
			step: "Step 3",
			title: "ADD-ONS"
		},
		{
			number: 4,
			step: "Step 4",
			title: "SUMMARY"
		}
	]

	const title: titleType =
		titles[currentStepIndex];
	const [formData, setFormData] = useState<formData>({
		name: "",
		email: "",
		phone_number: "",
		
	});

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

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const ContextData: Required<ContextType> = {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		back,
		next,
		goto,
		handlePersonalizeChange: handleChange,
		formData,
		title,
		sidebar: sidebar,
	};

	return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default ContextProvider;
