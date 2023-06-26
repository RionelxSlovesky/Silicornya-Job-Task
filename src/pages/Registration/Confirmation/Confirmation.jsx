import { Link } from "react-router-dom";


const Confirmation = () => {
    return (
        <div className="text-center">

            <div className="flex flex-col items-center text-indigo-500 font-semibold">
                <div className={`rounded-full transition duration-500 ease-in-out border-[0.75rem] md:border-[1.5rem] bg-indigo-500 text-white text-4xl md:text-6xl border-indigo-200 w-24 h-24 md:h-48 md:w-48 mb-4 flex items-center justify-center md:py-3`}>
                    &#10003;
                </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold mb-5">Thank you!</h2>

            <p className="text-gray-400 md:text-3xl mb-8">Account Has Been Created. Enjoy Job Task.</p>



            <Link to='/'><button type="button" className=" text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white ease-linear transition-all duration-150 text-sm md:text-2xl py-5 px-5 my-12 rounded">
                Go to Home
            </button></Link>
        </div>
    );
};

export default Confirmation;