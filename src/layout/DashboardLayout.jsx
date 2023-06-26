import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../components/SideBar";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiUser } from "react-icons/ci";


const DashboardLayout = () => {

    const menus = [
        { name: "Dashboard", link: "/", icon: BiHomeAlt2 },
        { name: "Courses", link: "/", icon: AiOutlineUnorderedList },
        { name: "Account", link: "/", icon: CiUser }
    ];

    const {userInfo} = useContext(AuthContext);
    console.log(userInfo)

    return (
        <Sidebar menus={menus}></Sidebar>
    );
};

export default DashboardLayout;