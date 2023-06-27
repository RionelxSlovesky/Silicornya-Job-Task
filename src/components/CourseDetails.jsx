import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { RiAccountCircleLine } from "react-icons/ri";
import {AiOutlineShoppingCart} from "react-icons/ai"


const CourseDetails = () => {

    const params = useParams()

    const { userInfo } = useContext(AuthContext);
    const [courseDetails, setCourseDetails] = useState({})
    const [comments, setComments] = useState([])
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
                        setCourseDetails(data.send_res)
                        setComments(data.send_res.comment_info)
                    }
                })
                .catch(err => console.log(err))
        }


    }, [userInfo, params.id])


    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const id = params.id.slice(1, -1);

        const req = {
            "course_id": id,
            comment
        }

        console.log(req)

        fetch('http://18.136.192.25:5000/api/v1/course/comment/add', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userInfo?.token}`
            },
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    alert(data.message)
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="p-4 md:px-12 md:py-8">
                <h2 className="font-semibold md:text-2xl md:mb-2">Discover</h2>
                <p>Dashboard &gt; Courses &gt; <span className="text-indigo-500">{courseDetails?.lesson_name}</span></p>
            </div>
            <div className="bg-gray-200 p-4 lg:px-12 lg:flex lg:gap-4" style={{ alignItems: 'flex-start' }}>
                <div className="w-full p-4 md:px-12 md:py-8 mb-4 lg:mb-0 bg-white rounded-[1rem]">
                    <img className="rounded-lg mb-4 w-full max-h-96 object-cover" src={courseDetails?.main_course_file} alt="" />
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

                    <hr className="my-5" />

                    <div className="comments">

                        {
                            comments?.map(comment =>
                                <div key={comment.comment_id}>
                                    <div className="flex gap-3 py-3">
                                        <div className="text-3xl">
                                            <RiAccountCircleLine></RiAccountCircleLine>
                                        </div>
                                        <div>
                                            <h1 className="text-xl">{comment.user_info.full_name}</h1>
                                            <p>{comment.created_at}</p>
                                            <p className="text-gray-500">{comment.comment}</p>

                                        </div>
                                    </div>
                                    <hr />

                                </div>)
                        }

                        <h2 className="my-5 font-semibold text-lg">Leave a Comment</h2>
                        <form onSubmit={handleComment}>
                            <textarea className="appearance-none block w-full md:h-48 bg-gray-200  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="comment" type="text" placeholder="Write your comments here..." required />
                            <input className="bg-indigo-500 text-white p-3 rounded-lg cursor-pointer" type="submit" value="Publish review" />
                        </form>
                    </div>

                </div>

                <div className="w-full lg:w-[30%] p-4 md:px-12 md:py-8 bg-white rounded-[1rem]">

                    <h1 className="text-xl md:text-3xl mb-8">Basics Overview</h1>

                    <div className="mb-8">
                        <h2 className="uppercase text-gray-400 mb-4">Course 1 - Introduction</h2>
                        
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U1</h2>
                            <p className="">Presentation</p>
                            <p className="ml-auto text-green-600 font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U2</h2>
                            <p className="">Job Opportunities...</p>
                            <p className="ml-auto text-green-600 font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U3</h2>
                            <p className="">How to get the most...</p>
                            <p className="ml-auto text-green-600 font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U4</h2>
                            <p className="">How to get the most...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U5</h2>
                            <p className="">Interface and the...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U6</h2>
                            <p className="">Volume and vectors</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U7</h2>
                            <p className="">Symmetry, connector...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U8</h2>
                            <p className="">Add and remove lines...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                    </div>

                    <div>
                        <h2 className="uppercase text-gray-400 mb-4">Course 2 - Learn Manufacturing</h2>
                        
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U1</h2>
                            <p className="">Spontaneous chara...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U2</h2>
                            <p className="">Deformers</p>
                            <p className="ml-auto  font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U3</h2>
                            <p className="">Mograph (cloner)</p>
                            <p className="ml-auto  font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U4</h2>
                            <p className="">How to get the most...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U5</h2>
                            <p className="">Interface and the...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U6</h2>
                            <p className="">Volume and vectors</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U7</h2>
                            <p className="">Symmetry, connector...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                        <div className="mb-2 flex items-center">
                            <h2 className="me-5 bg-indigo-300 h-8 w-8 flex justify-center items-center rounded-full">U8</h2>
                            <p className="">Practice: first charac...</p>
                            <p className="ml-auto font-bold">&#10003;</p> 
                        </div>
                    </div>

                    <div className="my-10 flex justify-center md:text-2xl bg-gray-200 px-2 py-5 border-2 border-gray-400 border-dashed rounded-lg">
                        USD {parseFloat(courseDetails?.price).toFixed(2)} <span className="ms-2 line-through text-gray-400">${courseDetails?.price+100}</span>
                    </div>

                    <button className="w-full bg-indigo-500 text-white md:text-2xl  flex justify-center items-center gap-3 p-3 rounded-lg"><AiOutlineShoppingCart></AiOutlineShoppingCart>Buy Now</button>


                </div>
            </div>
        </div>
    );
};

export default CourseDetails;