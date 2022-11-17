import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Information from './Information/Information';
import Services from './Services/Services';
import MakeAppointment from './MakeAppoinment/MakeAppointment'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='px-16'>
           <Information></Information>
           <Services></Services>
           <DentalCare></DentalCare>
           </div>
           <MakeAppointment></MakeAppointment>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;