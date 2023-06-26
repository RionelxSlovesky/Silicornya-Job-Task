import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layout/DashboardLayout";
import StudentDashboard from "../pages/Student/StudentDashboard";
import StudentAccount from "../pages/Student/StudentAccount";
import StudentCourses from "../pages/Student/StudentCourses";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/student-board',
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: '/dashboard/student-courses',
                element: <StudentCourses></StudentCourses>
            },
            {
                path: '/dashboard/student-account',
                element: <StudentAccount></StudentAccount>
            },
        ]
        
    }
])
