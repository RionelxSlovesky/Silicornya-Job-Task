import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layout/DashboardLayout";


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
                path: '/dashboard/board'
            }
        ]
        
    }
])
