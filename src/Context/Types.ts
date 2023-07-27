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


export type PlanName =  "arcade" | "advanced" | "pro";
export type Plan = {
	selected: PlanName;
};

export type AddonName = "Online Services" | "Larger Storage" | "Customizable Profile";
export type AddOn = {
	name: AddonName;
	description: string;
	selected: boolean
};

export type AddOnPrice = {
	"Online Services": number,
	"Larger Storage": number,
	"Customizable Profile": number,
}

export type PlanPrice = {
	arcade: number,
	advanced: number,
	pro: number,
}

export type PriceList = {
	addons: {
		monthly: AddOnPrice,
		yearly: AddOnPrice,
	},
	plans: {
		monthly: PlanPrice,
		yearly: PlanPrice
	}
}

export type FormData = {
	personalize: Personalize;
	plan: Plan;
	addOns: AddOn[];
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
		plan: PlanName,
	) => void;
	handleAddOnChange: (name: string) => void;
	title: TitleType;
	formData: FormData;
	sidebar: SidebarType[];
	handleSetPlanType: () => void;
	handleSubmitFinish: () => void;
	finished: boolean;
	setFormData: Function;
	totalPrice: () => number;
	errors: ErrorsType;
	typeAbbreviation: () => "mo" | "yr";
	pricesList: PriceList;
	getAddonPrice: (name: AddonName) => number;
	getPlanPrice: (name: PlanName) => number
	getType: () => "monthly"| "yearly";
	planType: boolean
};

