import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {setUserInfo} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.loginEmail.value;
        const password = form.loginPassword.value;

        const info = {
            email,
            password
        }

        fetch("http://18.136.192.25:5000/api/v1/user/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.status) {
                    setUserInfo(data.data)
                    localStorage.setItem("userInfo",JSON.stringify(data.data))
                    navigate('/dashboard')
                }
                else{
                    alert('Please Insert Your Credentials Correctly')
                }
                
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div onSubmit={handleLogin} className=" text-gray-700 px-12 pb-24">
            <h1 className="text-center text-3xl md:text-5xl font-semibold mt-16 mb-10 md:mt-24 md:mb-20">Welcome To Task Job</h1>

            <form className="max-w-[700px] mx-auto">
                <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="loginEmail">Email Address*</label><br />
                <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="email" name="loginEmail" id="loginEmail" placeholder="Enter Email Address" required/>

                <label className="inline-block mb-2 text-2xl  font-semibold"  htmlFor="loginPassword">Password*</label><br />
                <input className="border border-black text-xl w-full py-4 px-3 rounded" type="password" name="loginPassword" id="loginPassword" placeholder="Enter Password" required/>

                <input type="submit" value="Log In" className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded cursor-pointer" />
            </form>

            <p className="text-center text-xl"><span className="font-semibold">Don&apos;t Have An Account?</span> <Link to="/register" className="text-indigo-500 underline">Register Now</Link></p>

        </div>
    );
};

export default Login;