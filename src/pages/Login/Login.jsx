import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className=" text-gray-700 px-12 pb-24">
            <h1 className="text-center text-3xl md:text-5xl font-semibold mt-16 mb-10 md:mt-24 md:mb-20">Welcome To Task Job</h1>

            <form className="max-w-[700px] mx-auto">
                <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="login-email">Email Address*</label><br />
                <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="email" name="login-email" id="login-email" placeholder="Enter Email Address" required/>

                <label className="inline-block mb-2 text-2xl  font-semibold"  htmlFor="login-password">Password*</label><br />
                <input className="border border-black text-xl w-full py-4 px-3 rounded" type="password" name="login-password" id="login-password" placeholder="Enter Password" required/>

                <input type="submit" value="Log In" className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded cursor-pointer" />
            </form>

            <p className="text-center text-xl"><span className="font-semibold">Don&apos;t Have An Account?</span> <Link to="/register" className="text-indigo-500 underline">Register Now</Link></p>

        </div>
    );
};

export default Login;