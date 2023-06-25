import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            }
        ]
    }
])
