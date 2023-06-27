import { useParams } from "react-router-dom";


const CourseDetails = () => {

    const params = useParams()
    console.log(params.id)

    return (
        <div>
            <h1>Course Details Page</h1>
        </div>
    );
};

export default CourseDetails;