import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { StateContext } from '../../../Context/StateProvider';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = () => {
    const {selected} = useContext(StateContext)
    const date =format(selected, 'PP')

    const {data:appointmentOptions = [],isLoading,refetch} = useQuery({
        queryKey:['appointmentOptions',date],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        } 
    })
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='px-28 py-16'>
            <p className='text-secondary font-semibold text-center py-16 text-[22px]'>Available Appointments on {date}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                appointmentOptions.map(option=><AppointmentOption key={option._id} option={option} refetch={refetch}></AppointmentOption>)
            }
            </div>
        </section>
    );
};

export default AvailableAppointments;