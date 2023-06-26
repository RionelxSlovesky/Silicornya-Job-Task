

const Security = ( {currentStep, setCurrentStep} ) => {

    const handleSecurity = (e) => {
        e.preventDefault()
        const form = e.target;
        const newPass = form.newPass.value;
        const confirmPass = form.reNewPass.value;

        if(newPass===confirmPass) {
            setCurrentStep(currentStep + 1)
        }
        else{
            alert('Passwords must match')
        }
    }

    return (
        <form onSubmit={handleSecurity} className="max-w-[700px] mx-auto">

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="newPass">New Password</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="password" name="newPass" id="newPass" placeholder="Enter New Password" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="reNewPass">Confirm Password</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="password" name="reNewPass" id="reNewPass" placeholder="Re-type New Password" required />

            

            <input type="submit" value="Confirm" className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded cursor-pointer" />
        </form>
    );
};

export default Security;