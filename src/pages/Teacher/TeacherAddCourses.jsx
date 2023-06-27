import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const TeacherAddCourses = () => {

    const { userInfo } = useContext(AuthContext);

    const handleUpload = (e) => {
        e.preventDefault()
        const form = e.target;

        const main_course_file = form.mainCourseFile.value;
        const thumbnail_file = form.thumbnailFile.value;
        const introduction_file = form.introductionFile.value;

        const tags = form.tags.value;
        const lesson_name = form.lessonName.value;
        const description = form.description.value;
        const price = form.price.value;

        const formData = new FormData();
        formData.append('main_course_file', main_course_file);
        formData.append('thumbnail_file', thumbnail_file);
        formData.append('introduction_file', introduction_file);
        formData.append('tags', tags);
        formData.append('lesson_name', lesson_name);
        formData.append('description', description);
        formData.append('price', price);

        // for (var key of formData.entries()) {
        //     console.log(key[0] + key[1]);
        // }

        fetch('http://18.136.192.25:5000/api/v1/course/create', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userInfo?.token}`
            },
            body: JSON.stringify(formData) 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.status) {
                    alert('Course Added')
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="p-4 md:px-12 md:py-8">
                <h2 className="font-semibold md:text-2xl md:mb-2">Add New Course</h2>
                <p>Dashboard &gt; <span className="text-indigo-500">Upload New Course</span></p>
            </div>
            <form onSubmit={handleUpload} className="p-12 m-12 lg:px-12  shadow-lg">
                <div className="mb-5 lg:flex lg:justify-between lg:gap-8">
                    <div className="mb-16 lg:mb-0 flex-grow">
                        <h1 className="font-semibold mb-4 text-lg md:text-4xl">File Upload</h1>

                        <h2 className="mb-2 md:text-2xl">Main Course File</h2>

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="mainCourseFile" className="flex mb-8 flex-col items-center justify-center w-full h-min-24 md:h-64 border-2 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drop files here or click to upload.</p>
                                </div>
                                <input id="mainCourseFile" type="file" className="hidden" />
                            </label>
                        </div>

                        <h2 className="mb-2 md:text-2xl">Thumbnail File</h2>

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="thumbnailFile" className="flex mb-8 flex-col items-center justify-center w-full h-min-24 border-2 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drop files here or click to upload.</p>
                                </div>
                                <input id="thumbnailFile" type="file" className="hidden" />
                            </label>
                        </div>

                        <h2 className="mb-2 md:text-2xl">Introduction File</h2>

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="introductionFile" className="flex flex-col items-center justify-center w-full h-min-24 border-2 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drop files here or click to upload.</p>
                                </div>
                                <input id="introductionFile" type="file" className="hidden" />
                            </label>
                        </div>


                    </div>

                    <div className="flex-grow">
                        <h1 className="font-semibold mb-4 text-lg md:text-4xl">Other Information</h1>

                        <h2 className="mb-2 md:text-2xl">Tags</h2>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tags" type="text" required />

                        <h2 className="mb-2 md:text-2xl">Lesson Name</h2>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lessonName" type="text" required />

                        <h2 className="mb-2 md:text-2xl">Description / Overview</h2>
                        <textarea className="appearance-none block w-full md:h-48  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" required />

                        <h2 className="mb-2 md:text-2xl">Price</h2>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" required />

                    </div>
                </div>


                <input className="bg-indigo-500 text-white p-3 rounded cursor-pointer" type="submit" name="" id="" value="Submit" style={{ alignSelf: 'flex-end' }} />

            </form>
        </div>
    );
};

export default TeacherAddCourses;