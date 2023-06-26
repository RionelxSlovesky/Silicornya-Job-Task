

const Information = ({ currentStep, setCurrentStep }) => {


    const handleInformation = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.registerEmail.value;
        const position = form.position.value;

        console.log(name, email, position)
        
        setCurrentStep(currentStep + 1)
    }

    return (
        <form onSubmit={handleInformation} className="max-w-[700px] mx-auto">
            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="fullName">Full Name</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="text" name="fullName" id="fullName" placeholder="Full Name" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="registerEmail">Email Address</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="email" name="registerEmail" id="registerEmail" placeholder="Enter Email Address" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="position">Position</label><br />
            <input className="border border-black text-xl w-full py-4 px-3 rounded" type="text" name="position" id="position" placeholder="Position" required />

            <input type="submit" value="Next" className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded cursor-pointer" />
        </form>
    );
};

export default Information;