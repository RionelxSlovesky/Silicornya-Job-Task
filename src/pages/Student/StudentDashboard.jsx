import { useContext, useEffect, useState } from "react";
import DashboardCards from "../../components/DashboardCards";
import { AuthContext } from "../../providers/AuthProvider";


const StudentDashboard = () => {

    const { userInfo } = useContext(AuthContext);
    const [dashboardData, setDashbordData] = useState([])
    const [monthly, setMonthly] = useState([])
    const [yearly, setYearly] = useState([])
    const [weekly, setWeekly] = useState([])


    // fetching dashboard data

    useEffect(() => {

        if (userInfo) {
            fetch('http://18.136.192.25:5000/api/v1/dashboard/statics', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setDashbordData(data.statics)
                    }
                })
                .catch(err => console.log(err))
        }


    }, [userInfo])


    // fetching chart data

    useEffect(() => {

        if (userInfo) {

            //monthly

            fetch('http://18.136.192.25:5000/api/v1/dashboard/chart', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                },
                body: JSON.stringify({"time_period": "monthly"})
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setMonthly(data.progress)
                    }
                })
                .catch(err => console.log(err))

            //yearly
            
            fetch('http://18.136.192.25:5000/api/v1/dashboard/chart', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                },
                body: JSON.stringify({"time_period": "yearly"})
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setYearly(data.progress)
                    }
                })
                .catch(err => console.log(err))

            //weekly

            fetch('http://18.136.192.25:5000/api/v1/dashboard/chart', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${userInfo?.token}`
                },
                body: JSON.stringify({"time_period": "weekly"})
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setWeekly(data.progress)
                    }
                })
                .catch(err => console.log(err))

        }


    }, [userInfo])

    return (
        <div className="p-4 lg:px-12">
            <DashboardCards dashboardData={dashboardData}></DashboardCards>
            <div className="p-8 shadow-lg rounded-lg">
                <h1>Your Daily Progress</h1>
            </div>
        </div>
    );
};

export default StudentDashboard;