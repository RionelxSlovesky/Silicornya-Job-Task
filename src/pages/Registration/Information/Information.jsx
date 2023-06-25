

const Information = () => {
    return (
        <form className="max-w-[700px] mx-auto">
            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="full-name">Full Name</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="text" name="full-name" id="full-name" placeholder="Full Name" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="register-email">Email Address</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="email" name="register-email" id="register-email" placeholder="Enter Email Address" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="position">Position</label><br />
            <input className="border border-black text-xl w-full py-4 px-3 rounded" type="text" name="position" id="position" placeholder="Position" required />
        </form>
    );
};

export default Information;