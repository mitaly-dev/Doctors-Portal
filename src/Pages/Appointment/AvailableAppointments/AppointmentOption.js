import React from 'react';
import { useContext } from 'react';
import ButtonComponent from '../../../Components/ButtonComponent';
import { StateContext } from '../../../Context/StateProvider';
import AppointmentModal from './AppointmentModal';

const AppointmentOption = ({option,refetch}) => {
  const {slots,name,_id} = option
  const {modalOpen,setModalOpen} = useContext(StateContext)
  
    return (
        <div className="card shadow-xl pt-4 mb-3">
        <div className="card-body text-center text-accent">
          <h2 className="font-semibold  text-xl text-secondary">{name}</h2>
          <p className=''>{slots.length?slots[0] : 'Try another day'}</p>
          <div className=" items-center justify-center">
          <p>{slots.length} {slots.length>1?'SPACES' : 'SPACE'} AVAILABLE</p>
            {
              slots.length>0 ? <label onClick={()=>setModalOpen({})} htmlFor={`appointment-${_id}`} className="btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white px-6 mt-5">
              Book Appointment
              </label> : 
              <label className="btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white px-6 mt-5">
              Not Available
              </label>
            }
          </div>
          {
            modalOpen && <AppointmentModal appointmentOption={option} refetch={refetch}></AppointmentModal> 
          }
          
        </div>
      </div>
    );
};

export default AppointmentOption;