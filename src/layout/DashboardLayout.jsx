import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Sidebar from "../components/SideBar";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {

    const { userInfo } = useContext(AuthContext);

    let menus = []

    if(userInfo?.position === 'student') {
        menus = [
            { name: "Dashboard", link: "/dashboard/student-board", icon: BiHomeAlt2 },
            { name: "Courses", link: "/dashboard/student-courses", icon: AiOutlineUnorderedList },
            { name: "Account", link: "/dashboard/student-account", icon: CiUser }
        ];
    }else if(userInfo?.position === 'teacher') {
        menus = [
            { name: "Dashboard", link: "/", icon: BiHomeAlt2 },
            { name: "Courses", link: "/", icon: AiOutlineUnorderedList },
            { name: "Add New Courses", link: "/", icon: AiOutlineUnorderedList },
            { name: "Account", link: "/", icon: CiUser }
        ];
    }


    return (
        <section className="flex">
            <Sidebar menus={menus}></Sidebar>
            <div className="flex-grow">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default DashboardLayout;