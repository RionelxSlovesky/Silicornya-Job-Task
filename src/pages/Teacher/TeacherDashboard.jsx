import DashboardCards from "../../components/DashboardCards";

const TeacherDashboard = () => {

    const options = [
        {number: 1560, text: 'New Course Sale', progress: 70},
        {number: 5900, text: 'Total Students', progress: 20},
        {number: 500, text: 'Total Courses', progress: 30},
        {number: '$25,365', text: 'Total Revenue'},
    ]

    return (
        <div>
            <DashboardCards options={options}></DashboardCards>
        </div>
    );
};

export default TeacherDashboard;