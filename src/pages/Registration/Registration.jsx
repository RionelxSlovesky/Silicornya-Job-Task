import { Link } from "react-router-dom";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import Information from "./Information/Information";
import Security from "./Security/Security";
import Confirmation from "./Confirmation/Confirmation";
import { useState } from "react";

const Registration = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const [clickable, setClickable] = useState(false)


    const steps = [
        "Information",
        "Security",
        "Confirmation"
    ]

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Information clickable={clickable}></Information>
            case 2:
                return <Security></Security>
            case 3:
                return <Confirmation></Confirmation>
            default:
                return null
        }
    }

    const handleClick = () => {

        

        if(currentStep<3){
            setCurrentStep(currentStep+1)
            console.log(currentStep)
        }
        if(currentStep===3) {
            console.log(currentStep)
        }
        
    }

    return (
        <div className=" text-gray-700 px-12 pb-24">
            {/* stepper */}
            <div className="max-w-[1000px] mx-auto">
                <Stepper steps={steps} currentStep={currentStep}></Stepper>
            </div>

            <div className="max-w-[700px] mx-auto">
                {/* display components */}
                {displayStep(currentStep)}

                {/* navigation controls */}
                <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
            </div>

            <p className={`text-center text-xl ${currentStep===steps.length && "hidden"}`}><span className="font-semibold">Already Have An Account?</span> <Link to="/" className="text-indigo-500 underline">Log In</Link></p>

        </div>
    );
};

export default Registration;