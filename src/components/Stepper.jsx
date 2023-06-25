import { useEffect, useRef, useState } from "react";


const Stepper = ({ steps, currentStep }) => {

    const [newStep, setNewStep] = useState([])
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0
        while(count < newSteps.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: false,
                };
                count++;
            }
            else if(count < stepNumber)  {
                newSteps[count] = {
                  ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    }

    useEffect(() => {
        const stepsState = steps.map((step, index) => Object.assign({}, {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false
        }))

        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current)
        setNewStep(current)
    }, [steps, currentStep]);

    const displaySteps = newStep.map((step, index) => {
        return (
            <div key={index} className="flex-grow flex justify-center items-center text-lg md:text-2xl">
                <div className="flex flex-col items-center text-indigo-500 font-semibold">
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-indigo-500 w-8 h-8 md:h-12 md:w-12 flex items-center justify-center md:py-3 ${step.selected && "bg-indigo-500 text-white font-bold border-indigo-500"}`}>
                        {/* Display Number */}
                        {step.completed ? <span className="text-white font-bold text-xl">&#10003;</span> : (index+1)}
                    </div>
                </div>
                <div className="hidden md:block flex-auto border-b-2 border-indigo-500 transition duration-500 ease-in-out mx-2">
                    {/* Display Line */}
                </div>
                <div className={`hidden md:block ${step.highlighted ? "text-indigo-500" : "text-black"}`}>
                    {/* Display Description */}
                    {step.description}
                </div>
            </div>
        )
    })

    return (
        <div className="flex gap-4 justify-between mt-16 mb-10 md:mt-24 md:mb-20">
            {displaySteps}
        </div>
    );
};

export default Stepper;