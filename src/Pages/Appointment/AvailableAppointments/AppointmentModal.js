import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
import { StateContext } from '../../../Context/StateProvider';

const AppointmentModal = ({appointmentOption,refetch}) => {
    const {_id,slots,name} = appointmentOption
    const {selected,modalOpen,setModalOpen} = useContext(StateContext)
    const {user} = useContext(AuthContext)
    const date = format(selected,"PP")

    const handleAppointment=(event)=>{
        event.preventDefault()
        const form = event.target
        const appointmentDetails = {
            appointmentDate:date,
            treatement:name,
            slot:form.slot.value,
            name:user.displayName,
            email:user.email,
            phone:form.phone.value
        }

        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(appointmentDetails)
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset()
                setModalOpen(null)
                toast.success('Appoinment successfull',{autoClose:1000})
                refetch()
            }
            else{
                toast.warning(data.message,{autoClose:1000})
            }
        })
    }

    return (
        <>
        <input type="checkbox" id={`appointment-${_id}`} className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor={`appointment-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2 bg-black">✕</label>
            <h3 className="text-lg font-bold text-left">{name}</h3>
            <div className='mt-5'>
                <form onSubmit={handleAppointment}>
                    <input type="text" value={date} readOnly className="input border bg-[#E6E6E6] font-semibold border-gray-300 w-full focus:outline-none mb-2" />
                    <select name='slot' className="select border font-semibold border-gray-300 w-full focus:outline-none mb-2">
                    {
                        slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                    }
                    </select>
                    <input name='name' type="text" required readOnly value={user?.displayName} className="input border border-gray-300 w-full focus:outline-none mb-2 font-semibold bg-[#E6E6E6]" />
                    <input name='email' type="email" required readOnly value={user?.email} className="input border border-gray-300 w-full focus:outline-none mb-2 font-semibold bg-[#E6E6E6]" />
                    <input name='phone' type="phone" required placeholder="Phone" className="input border border-gray-300 w-full focus:outline-none mb-2 font-semibold" />
                    <button type='submit' className='w-full py-3 rounded-lg bg-[#3A4256] font-semibold text-center text-white'>Submit</button>
                </form>
            </div>
        </div>
        </div>
        </>
    );
};

export default AppointmentModal;