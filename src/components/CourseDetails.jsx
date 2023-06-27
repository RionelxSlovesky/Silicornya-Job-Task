import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const CourseDetails = () => {

    const params = useParams()

    const { userInfo } = useContext(AuthContext);
    const [courseDetails, setCourseDetails] = useState({})
    const [overview, setOverview] = useState(true)

    useEffect(() => {

        if (userInfo) {

            const id = params.id.slice(1, -1);

            fetch('http://18.136.192.25:5000/api/v1/course/details', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                },
                body: JSON.stringify({
                    "course_id": id
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        console.log(data.send_res)
                        setCourseDetails(data.send_res)
                    }
                })
                .catch(err => console.log(err))
        }


    }, [userInfo, params.id])

    return (
        <div>
            <div className="p-4 md:px-12 md:py-8">
                <h2 className="font-semibold md:text-2xl md:mb-2">Discover</h2>
                <p>Dashboard &gt; Courses &gt; <span className="text-indigo-500">{courseDetails?.lesson_name}</span></p>
            </div>
            <div className="bg-gray-200 p-4 lg:px-12 lg:flex lg:gap-4" style={{ alignItems: 'flex-start' }}>
                <div className="w-full p-4 md:px-12 md:py-8 mb-4 lg:mb-0 bg-white rounded-[1rem]">
                    <img className="rounded-lg mb-4" src={courseDetails?.main_course_file} alt="" />
                    <h1 className="text-xl md:text-3xl">{courseDetails?.lesson_name}</h1>
                    <p className="text-gray-500">By <span className="text-black font-semibold">{courseDetails?.teacher_info?.full_name}, </span>{courseDetails?.teacher_info?.institution_name}</p>

                    <div className="my-5">
                        <button onClick={() => setOverview(true)} className={`p-2 rounded-lg ${overview && "bg-orange-500 text-white"}`}>Overview</button>
                        <button onClick={() => setOverview(false)} className={`p-2 rounded-lg ${overview || "bg-orange-500 text-white"}`}>Curriculumn</button>
                    </div>

                    {overview && <p>{courseDetails?.description}</p>}

                    {overview ||
                        <>
                            <div className="bg-gray-200 p-5 rounded-lg flex gap-5 justify-between" style={{ alignItems: 'flex-start' }}>
                                <div>
                                    <p className="text-gray-600">Course 1 of 6</p>
                                    <h2>Course 1 - Introduction</h2>
                                    <div className="w-full md:w-80 bg-neutral-200 dark:bg-neutral-300 rounded">
                                        <div
                                            className={`bg-orange-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[60%] rounded`}>
                                        </div>
                                    </div>
                                    <p className="text-sm">2 completed unites of 11 available</p>
                                </div>
                                <button className="bg-indigo-500 text-white text-xs md:text-lg p-3 rounded-lg">Go to Unit 3</button>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;