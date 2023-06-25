const displaySteps = (
    <div className="flex justify-between items-center text-2xl">
        <div className="flex flex-col items-center text-indigo-500 font-semibold">
            <div className="rounded-full transition duration-500 ease-in-out border-2 border-indigo-500 h-12 w-12 flex items-center justify-center py-3">
                {/* Display Number */}1
            </div>
        </div>
        <div className="flex-auto border-b-2 border-indigo-500 transition duration-500 ease-in-out mx-4">
            {/* Display Line */}
        </div>
        <div className="">
            {/* Display Description */}Information
        </div>
    </div>
)

const Stepper = () => {
    return (
        <div className="mt-16 mb-10 md:mt-24 md:mb-20">
            {displaySteps}
        </div>
    );
};

export default Stepper;