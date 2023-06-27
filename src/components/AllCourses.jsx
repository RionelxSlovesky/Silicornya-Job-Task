import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CourseCard from "./CourseCard";


const AllCourses = () => {

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

                <div className="mb-5">

                    <select name="gender" id="gender" className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="popular">Popular</option>
                        <option className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="price">Price</option>
                    </select>

                    <select name="gender" id="gender" className="mx-5 appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="courses">Courses</option>
                        <option className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="events">Events</option>
                    </select>

                    <select name="gender" id="gender" className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option className="appearance-none  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="all">All Categories</option>
                    </select>

                </div>

                <div>
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllCourses;