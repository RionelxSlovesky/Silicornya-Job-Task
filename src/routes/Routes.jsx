import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layout/DashboardLayout";
import StudentDashboard from "../pages/Student/StudentDashboard";
import AccountUpdate from "../components/AccountUpdate";
import StudentCourses from "../pages/Student/StudentCourses";
import TeacherDashboard from "../pages/Teacher/TeacherDashboard";
import TeacherCourses from "../pages/Teacher/TeacherCourses";
import TeacherAddCourses from "../pages/Teacher/TeacherAddCourses";


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
                element: <AccountUpdate></AccountUpdate>
            },
            {
                path: '/dashboard/teacher-board',
                element: <TeacherDashboard></TeacherDashboard>
            },
            {
                path: '/dashboard/teacher-courses',
                element: <TeacherCourses></TeacherCourses>
            },
            {
                path: '/dashboard/teacher-add-courses',
                element: <TeacherAddCourses></TeacherAddCourses>
            },
            {
                path: '/dashboard/teacher-account',
                element: <AccountUpdate></AccountUpdate>
            },
        ]
        
    }
])
