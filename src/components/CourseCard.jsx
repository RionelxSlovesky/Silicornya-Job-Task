import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {
    return (
        <div>

            <div className="bg-white shadow-md border rounded-lg md:w-56">
                <div>
                    <img className="rounded-t-lg h-40 w-full object-cover" src={course?.introduction_file} alt="" />
                </div>
                <div className="p-5">
                    <h1 className="mb-8">{course?.lesson_name}</h1>

                    <div className="md:flex md:justify-between items-center">

                        <div>
                            <MdOutlineFeaturedPlayList className="inline me-1 text-lg text-gray-500"></MdOutlineFeaturedPlayList>

                            <p className="text-gray-400 inline">15 Lessons (10h 5m)</p>
                        </div>

                        <Link to={`/dashboard/course/(${course?.id})`}><button className="bg-indigo-500 text-white p-2 rounded-lg cursor-pointer">${course?.price}</button></Link>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default CourseCard;