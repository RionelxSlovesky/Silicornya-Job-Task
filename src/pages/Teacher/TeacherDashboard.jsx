import { useContext, useEffect, useState } from "react";
import DashboardCards from "../../components/DashboardCards";
import { AuthContext } from "../../providers/AuthProvider";

const TeacherDashboard = () => {

    const { userInfo } = useContext(AuthContext);
    const [dashboardData, setDashbordData] = useState([])

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
                    console.log(data.statics)
                    if (data.status) {
                        setDashbordData(data.statics)
                    }
                })
                .catch(err => console.log(err))
        }


    }, [userInfo])

    return (
        <div className="p-4 lg:px-12 ">
            <DashboardCards dashboardData={dashboardData}></DashboardCards>
        </div>
    );
};

export default TeacherDashboard;