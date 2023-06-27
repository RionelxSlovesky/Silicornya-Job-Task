import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const StudentCourses = () => {

    const { userInfo } = useContext(AuthContext);

    const [courses, setCourses] = useState([])


    useEffect(() => {

        if (userInfo) {
            fetch('http://18.136.192.25:5000/api/v1/course/list', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        console.log(data.send_res)
                        setCourses(data.send_res)
                    }
                })
                .catch(err => console.log(err))
        }


    }, [userInfo])

    return (
        <div>
            <div className="p-4 md:px-12 md:py-8">
                <h2 className="font-semibold md:text-2xl md:mb-2">Discover</h2>
                <p>Dashboard &gt; <span className="text-indigo-500">Courses</span></p>
            </div>
            <div className="bg-gray-200 p-4 lg:px-12">

            </div>
        </div>
    );
};

export default StudentCourses;