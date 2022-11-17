import { createRouter } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Login from "../Pages/User/Login";
import Signup from "../Pages/User/Signup";
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
    }
])