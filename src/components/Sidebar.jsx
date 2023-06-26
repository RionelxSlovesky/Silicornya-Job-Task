import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({menus}) => {

    const [open, setOpen] = useState(false);

    return (
        <div
            className={` bg-gradient-to-tr from-purple-500 to-blue-500 min-h-screen ${open ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-between">
                <h1 className={`${open ? "" : "hidden"} whitespace-nowrap`}>Job Task</h1>
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2

                            className={`whitespace-pre duration-500 ${!open && "opacity-0 overflow-hidden"}`}
                        >
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
                <button className={`mt-5 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                    <div>{React.createElement(BiLogOut, { size: "20" })}</div>
                    <h2

                        className={`whitespace-pre duration-500 ${!open && "opacity-0 overflow-hidden"}`}
                    >
                        Logout
                    </h2>
                    <h2
                        className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                        Logout
                    </h2>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;