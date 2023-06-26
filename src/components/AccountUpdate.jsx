import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AccountUpdate = () => {

    const { userInfo, setUserInfo } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState({})

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const dateOfBirth = form.dateOfBirth.value;
        const gender = form.gender.value;
        const email = form.emailAddress.value;
        const phone = form.phoneNumber.value;
        const coverLetter = form.coverLetter.value;

        const newInfo = {
            full_name: fullName,
            birth_date: dateOfBirth,
            gender,
            email,
            phone,
            cover_letter: coverLetter
        }

        console.log('newInfo', newInfo)

        fetch('http://18.136.192.25:5000/api/v1/user/details/update', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userInfo?.token}`
            },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                const updatedUserInfo = {
                    ...userInfo
                }
                updatedUserInfo.full_name = fullName

                const updatedUserInfoString = JSON.stringify(updatedUserInfo)

                setUserInfo(updatedUserInfo)
                localStorage.setItem('userInfo', updatedUserInfoString)

                alert('Profile Updated')
            })

        console.log(fullName, dateOfBirth, gender, email, phone, coverLetter)
    }

    useEffect(() => {

        if (userInfo) {
            fetch('http://18.136.192.25:5000/api/v1/user/details', {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${userInfo?.token}`
                }
            })
                .then(res => res.json())
                .then(data => setUserDetails(data.user_data))
        }

    })

    return (
        <div>
            <div className="p-4 md:px-12 md:py-8">
                <h2 className="font-semibold md:text-2xl md:mb-2">Discover</h2>
                <p>Dashboard &gt; <span className="text-indigo-500">Account</span></p>
            </div>
            <div className="bg-gray-200 p-4 lg:px-12 lg:flex lg:gap-4" style={{alignItems: 'flex-start'}}>
                <div className="w-full p-4 md:px-12 md:py-8 mb-4 lg:mb-0 bg-white rounded-[1rem]">
                    <h1 className="text-center font-semibold mb-6 text-lg md:mb-12 md:text-4xl">{userDetails?.full_name}</h1>
                    <h2 className="font-semibold mb-2 md:text-2xl">About</h2>
                    <p className="text-gray-400 md:text-lg">{userDetails?.cover_letter}</p>

                    <div className="flex justify-between my-12">
                        <div>
                            <h2 className="font-semibold mb-2 md:text-2xl">Age</h2>
                            <p className="text-gray-400 md:text-lg">17</p>
                        </div>

                        <div>
                            <h2 className="font-semibold mb-2 md:text-2xl">Gender</h2>
                            <p className="text-gray-400 md:text-lg">{userDetails?.gender === 'male' && "Male"}</p>
                            <p className="text-gray-400 md:text-lg">{userDetails?.gender === 'female' && "Female"}</p>
                        </div>
                    </div>
                    <h2 className="font-semibold mb-2 md:text-2xl">Date Of Birth</h2>
                    <p className="text-gray-400 md:text-lg mb-12">{userDetails?.birth_date}</p>

                </div>
                <form onSubmit={handleUpdate} className="w-full p-4 md:px-12 md:py-8 bg-white rounded-[1rem]">
                    <h1 className="font-semibold mb-6 text-lg md:mb-12 md:text-4xl">Personal Information</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fullName" type="text" defaultValue={userDetails?.full_name} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                                Date Of Birth
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="dateOfBirth" type="date" defaultValue={userDetails?.birth_date} required />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                Gender
                            </label>
                            <select name="gender" id="gender" className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" defaultValue={userDetails?.gender}>
                                <option className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="male">Male</option>
                                <option className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
                                Email Address
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="emailAddress" type="text" defaultValue={userDetails?.email} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phoneNumber" type="text" defaultValue={userDetails?.phone} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                                Cover Letter
                            </label>
                            <textarea className="appearance-none block w-full md:h-48  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="coverLetter" type="text" defaultValue={userDetails?.cover_letter} required />
                        </div>
                    </div>
                    <input className="bg-indigo-500 text-white p-3 rounded cursor-pointer" type="submit" name="" id="" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default AccountUpdate;