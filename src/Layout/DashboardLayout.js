import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const {user,loading} = useContext(AuthContext)
    const  [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle overflow-y-visible" />
            <div className="drawer-content bg-[#F1F5F9] overflow-y-visible">
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-black font-semibold">
                    <li>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">
                    Close
                    </label>
                    </li>
                <li><Link to='/dashboard'>My Appointments</Link></li>
                {
                    isAdmin && 
                    <li><Link to="/dashboard/users">All User</Link></li>
                }
                </ul>
            </div>
            </div>s
        </div>
    );
};

export default DashboardLayout;