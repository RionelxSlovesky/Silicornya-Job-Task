import DashboardCards from "../../components/DashboardCards";


const StudentDashboard = () => {

    const options = [
        {number: 55, text: 'Course completed', progress: 70},
        {number: 20, text: 'Certificate earned', progress: 20},
        {number: 25, text: 'Course in progress', progress: 30},
        {number: 86, text: 'Total Course'},
    ]

    return (
        <div>
            <DashboardCards options={options}></DashboardCards>
        </div>
    );
};

export default StudentDashboard;