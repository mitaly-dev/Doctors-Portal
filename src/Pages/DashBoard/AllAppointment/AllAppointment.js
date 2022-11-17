import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../../Context/AuthProvider';
import DatePicker from "react-datepicker";
import { format } from 'date-fns';

const AllAppointment = () => {
    
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [selected, setSelected] = useState(new Date())

    const {data:appointments = []} = useQuery({
        queryKey:["booking",user?.email],
        queryFn:async()=>{
           const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('Doctors-Portal-Token')}`
            }
           })
           const data = await res.json()
           return data
        }
    })



    return (
        <div className="px-5 md:px-10 lg:px-16 py-10">
            <div className='text-black pb-7 sm:flex justify-between items-center space-y-6'>
                <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"/>
                    <path fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"/>
                    <path fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"/>
                </svg>
                </label>
                <h3 className='text-2xl font-semibold'>Appointment</h3>
                <div className='mt-5'>
                    <span className='border border-black text-black py-3 rounded-xl bg-transparent focus:outline-none text-center px-4  m-auto'>{format(startDate,"PP")}
                    </span>
                </div>
            </div>
        <table className="table w-full bg-[#E6E6E6]">
          <thead className='bg-[#E6E6E6]'>
            <tr className='bg-[#E6E6E6] border-white'>
              <th className='bg-[#E6E6E6] text-black border-white'></th>
              <th className='bg-[#E6E6E6] text-black border-white'>Name</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Treatment</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Date</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Time</th>
            </tr>
          </thead>
          <tbody>
            {
                appointments.map((appointment,index)=>{
                    const {treatement,appointmentDate,slot,name} = appointment
                    return <tr key={index} className="text-black">
                            <th>{index+1}</th>
                            <td>{name}</td>
                            <td>{treatement}</td>
                            <td>{appointmentDate}</td>
                            <td>{slot}</td>
                           </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllAppointment;