import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:cavity
        },
        {
            _id:3,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon:whitening
        },
    ]
    return (
       <section className='my-16'>
        <div className='text-center py-16'>
            <span className='text-secondary font-semibold text-lg'>OUR SERVICES</span>
            <h3 className='text-4xl text-accent mt-2'>Services We Provide</h3>
        </div>
         <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
        </div>
       </section>
    );
};

export default Services;