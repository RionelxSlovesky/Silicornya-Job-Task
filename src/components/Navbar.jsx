import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { userInfo } = useContext(AuthContext);

    return (
        <nav className="flex p-3 md:px-16 bg-indigo-500">
            <input className="rounded px-2" type="text" name="" id="" placeholder="Search here..." />


        </nav>
    );
};

export default Navbar;