import { ReactElement, ReactNode, ChangeEvent } from "react";
export type ContextProps = {
	children: ReactNode;
	steps: ReactElement[];
};

export type Personalize = {
	name: string;
	email: string;
	phone_number: string;
};

export type PlanType = "monthly" | "yearly";

export type Plan = {
	type: PlanType;
	selected: string;
	price: number;
};

export type addOn = {
	name: string;
	price: number;
	description: string;
	selected: boolean;
};
export type FormData = {
	personalize: Personalize;
	plan: Plan;
	addOns: addOn[];
};

export type TitleType = {
	title: string;
	description: string;
};

export type SidebarType = {
	number: number;
	step: string;
	title: string;
};

export type ErrorType = null | string;

export type ErrorsType = {
	name: ErrorType,
	email: ErrorType,
	phone_number: ErrorType,
}


export type ContextType = {
	currentStepIndex: number;
	step: ReactElement;
	steps: ReactElement[];
	back: () => void;
	next: () => void;
	goto: (index: number) => void;
	isRadioSelected: (name: string) => boolean;
	handlePersonalizeChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSelectPlanChange: (
		price: number,
		plan: string,
		type: PlanType
	) => void;
	handleAddOnChange: (name: string) => void;
	title: TitleType;
	formData: FormData;
	sidebar: SidebarType[];
	planType: boolean;
	handleSetPlanType: () => void;
	handleSubmitFinish: () => void;
	finished: boolean;
	setFormData: Function;
	totalPrice: () => number;
	errors: ErrorsType;
	typeAbbreviation: () => "mo" | "yr"
};

