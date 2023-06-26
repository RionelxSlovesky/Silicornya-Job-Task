import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { AiOutlineBell } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";


const Navbar = () => {

    const { userInfo } = useContext(AuthContext);

    return (
        <nav className="flex items-center justify-between p-3 md:px-16 bg-indigo-500">
            <input className="rounded p-2 w-24 md:w-56" type="text" name="" id="" placeholder="Search here..." />

            <div className="flex gap-2 items-center text-white">
                <AiOutlineBell></AiOutlineBell>
                <RiAccountCircleLine className="text-2xl md:text-4xl"></RiAccountCircleLine>
                <div>
                    <p>{userInfo?.full_name}</p>
                    <p>{userInfo?.position === "teacher" && "Teacher"}</p>
                    <p>{userInfo?.position === "student" && "Student"}</p>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;