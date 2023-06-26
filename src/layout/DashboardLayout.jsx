import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../components/SideBar";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import Navbar from "../components/Navbar";


const DashboardLayout = () => {

    const { userInfo } = useContext(AuthContext);

    let menus = []

    console.log(userInfo)
    if(userInfo?.position === 'student') {
        menus = [
            { name: "Dashboard", link: "/", icon: BiHomeAlt2 },
            { name: "Courses", link: "/", icon: AiOutlineUnorderedList },
            { name: "Account", link: "/", icon: CiUser }
        ];
    }else if(userInfo?.position === 'teacher') {
        menus = [
            { name: "Dashboard", link: "/", icon: BiHomeAlt2 },
            { name: "Courses", link: "/", icon: AiOutlineUnorderedList },
            { name: "Add New Courses", link: "/", icon: AiOutlineUnorderedList },
            { name: "Account", link: "/", icon: CiUser }
        ];
    }


    useEffect(() => {

        if (userInfo) {
            fetch('http://18.136.192.25:5000/api/v1/user/details', {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${userInfo?.token}`
                }
            })
                .then(res => res.json())
                .then(data => console.log(data.user_data))
        }

    })

    return (
        <section className="flex">
            <Sidebar menus={menus}></Sidebar>
            <div className="flex-grow">
                <Navbar></Navbar>
            </div>
        </section>
    );
};

export default DashboardLayout;