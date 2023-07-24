import Form from "./components/form";
import "./index.css"
import ContextProvider from "./Context/MultiStepContext";
import PersonalInfo from "./components/multiStepForm/PersonalInfo";
import SelectYourPlan from "./components/multiStepForm/SelectYourPlan/SelectYourPlan";
import AddOns from "./components/multiStepForm/AddOns";
import Summary from "./components/multiStepForm/Summary";
function App() {
	const steps = [
		<PersonalInfo />,
		<SelectYourPlan />,
		<AddOns />,
		<Summary />,
	];
    return (
        <ContextProvider steps={steps}>
            <Form />
        </ContextProvider>
    )
}

export default App;
