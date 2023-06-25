import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="py-8 text-center lg:text-left">
                <h1 className=" md:px-60 text-2xl text-blue-500 font-semibold">Job Task</h1>
            </nav>
            <hr />
            <div className="flex-grow flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;