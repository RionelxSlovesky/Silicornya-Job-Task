import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const CourseDetails = () => {

    const params = useParams()

    const { userInfo } = useContext(AuthContext);
    const [courseDetails, setCourseDetails] = useState({})

    useEffect(() => {

        if (userInfo) {
            fetch('http://18.136.192.25:5000/api/v1/course/details', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                },
                body: JSON.stringify({
                    "course_id": params.id
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
            <h1>Course Details Page</h1>
        </div>
    );
};

export default CourseDetails;