import { useState } from "react";


const Information = ({ currentStep, setCurrentStep, setRegDetails }) => {

    const [position, setPosition] = useState('teacher')


    const handleInformation = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.registerEmail.value;
        const instituteName = form.institute.value;

        if(position==='teacher') {
            const workTime = form.workTime.value;
            const info = {
                full_name: name,
                email,
                position,
                institution_name: instituteName,
                work_time: workTime
            }
            setRegDetails(info)
        }
        else {
            const educationLevel = form.educationLevel.value;
            const info = {
                full_name: name,
                email,
                position,
                institution_name: instituteName,
                education_level: educationLevel
            }
            setRegDetails(info)
        }

        setCurrentStep(currentStep + 1)
    }

    return (
        <form onSubmit={handleInformation} className="max-w-[700px] mx-auto">
            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="fullName">Full Name</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="text" name="fullName" id="fullName" placeholder="Full Name" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="registerEmail">Email Address</label><br />
            <input className="border border-black text-xl  w-full py-4 px-3 mb-5 rounded" type="email" name="registerEmail" id="registerEmail" placeholder="Enter Email Address" required />

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="position">Position</label><br />
            <select onChange={(e) => setPosition(e.target.value)} name="position" id="position" className="border border-black text-xl w-full py-4 px-3 rounded mb-5">
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="teacher">Teacher</option>
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="student">Student</option>
            </select>

            <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="institute">Institute Name</label><br />
            <select name="institute" id="institute" className="border border-black text-xl w-full py-4 px-3 rounded mb-5">
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Dhaka National Medical College">Dhaka National Medical College</option>
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Ibrahim Medical College">Ibrahim Medical College</option>
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Bangladesh Medical College">Bangladesh Medical College</option>
                <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Holy Family Red Crescent Medical College">Holy Family Red Crescent Medical College</option>
            </select>

            {position === 'teacher' ?
                <>
                    <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="workTime">Work Time</label><br />
                    <select name="workTime" id="workTime" className="border border-black text-xl w-full py-4 px-3 rounded">
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="full_time">Full Time</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="part_time">Part Time</option>
                    </select>
                </>
                :
                <>
                    <label className="inline-block mb-2 text-2xl  font-semibold" htmlFor="educationLevel">Education Level</label><br />
                    <select name="educationLevel" id="educationLevel" className="border border-black text-xl w-full py-4 px-3 rounded">
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Secondary School Certificate (SSC)">Secondary School Certificate (SSC)</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Higher School Certificate (HSC)">Higher School Certificate (HSC)</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Diploma">Diploma</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Bachelor of Science (BSC)">Bachelor of Science (BSC)</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Master of Arts (MA)">Master of Arts (MA)</option>
                        <option className="border border-black text-xl w-full py-4 px-3 rounded" value="Bachelor of Arts (BA)">Bachelor of Arts (BA)</option>
                    </select>

                </>}



            <input type="submit" value="Next" className="w-full bg-indigo-500 text-white text-2xl py-5 my-12 rounded cursor-pointer" />
        </form>
    );
};

export default Information;