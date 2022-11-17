import React from 'react';
import ButtonComponent from '../../../Components/ButtonComponent';
import dental from '..//../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mx-40 flex items-center my-16">
        <figure className='w-4/12'><img src={dental} alt="dental treatement img"/></figure>
        <div className="card-body w-8/12 text-accent">
            <h2 className="font-semibold text-4xl mb-2">Exceptional Dental <br></br> Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className='w-none mt-5'>
            <ButtonComponent>GET STARTED</ButtonComponent>
            </div>
        </div>
        </div>
    );
};

export default DentalCare;