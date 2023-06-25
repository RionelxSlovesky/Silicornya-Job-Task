import { Link } from "react-router-dom";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";

const Registration = () => {

    

    return (
        <div className=" text-gray-700 px-12 pb-24">

            <div className="max-w-[700px] mx-auto">
                {/* stepper */}
                <Stepper></Stepper>

                {/* navigation controls */}
                <StepperControl></StepperControl>
            </div>

            <p className="text-center text-xl"><span className="font-semibold">Already Have An Account?</span> <Link to="/" className="text-indigo-500 underline">Log In</Link></p>

        </div>
    );
};

export default Registration;