

const StepperControl = ({handleClick, currentStep, steps}) => {
    return (
        <button onClick={() => handleClick()} className={`w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded
        ${currentStep===steps.length && "hidden"}
        `}>
            Next
        </button>
    );
};

export default StepperControl;