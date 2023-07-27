import Title from "./multiStepForm/components/Title";

function ThankYou() {
    return (
        <main className="flex h-full  flex-col justify-center items-center mt-20 md:m-0">
            <img className="w-min h-min" src="/images/icon-thank-you.svg" alt="" />
            <Title title="Thank You!" description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com." />
        </main>
    );
}

export default ThankYou;