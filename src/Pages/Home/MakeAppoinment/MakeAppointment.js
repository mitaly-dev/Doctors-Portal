import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import background from '../../../assets/images/appointment.png'
import ButtonComponent from '../../../Components/ButtonComponent';

const makeAppointment = () => {
    return (
       <section className='my-16 '>
       <div className="hero mb-0 mt-48 pb-8" style={{backgroundImage:`url(${background})`}}>
            <div className="hero-content flex-col lg:flex-row pb-0 ">
                <img src={doctor} alt="doctor images" className="-mt-32" />
                <div className='text-white'>
                    <span className='text-secondary font-semibold'>Appointment</span>
                <h2 className="card-title text-3xl">Make an appointment Today</h2>
                    <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonComponent>GET STARTED</ButtonComponent>
                </div>
            </div>
        </div>
       </section>
    );
};

export default makeAppointment;