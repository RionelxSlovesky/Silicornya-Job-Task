

const StepperControl = ({handleClick, currentStep, steps}) => {
    return (
        <input type="submit" value={currentStep === steps.length ? "Confirm" : "Next"} onClick={() => handleClick()} className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded">
        </input>
    );
};

export default StepperControl;