import { createRouter } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import AllAppointment from "../Pages/DashBoard/AllAppointment/AllAppointment";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Users from "../Pages/DashBoard/Users";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Login from "../Pages/User/Login";
import Signup from "../Pages/User/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/about',element:<About></About>},
        {path:'/appointment',element:<Appointment></Appointment>},
        {path:'/login',element:<Login></Login>},
        {path:'/signup',element:<Signup></Signup>},
        {path:'/reviews',element:<PrivateRoute><Reviews></Reviews></PrivateRoute>},
        {path:'/dashboard',element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}
    ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {path:'/dashboard',element:<AllAppointment></AllAppointment>},
            {path:'/dashboard/users',element:<AdminRoute><Users></Users></AdminRoute>}
        ]
    }
])