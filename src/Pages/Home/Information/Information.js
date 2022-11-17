import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Info from './Info';

const Information = () => {
    const information = [
        {
            _id:1,
            name:'Opening Hours',
            description:'Lorem Ipsum is simply dummy text of the pri',
            icon:clock, 
            bgColor:'bg-gradient-to-r from-primary to-secondary',
        },
        {
            _id:2,
            name:'Visit our location',
            description:'Brooklyn, NY 10036, United States',
            icon:marker, 
            bgColor:'bg-accent',
        },
        {
            _id:3,
            name:'Contact us now',
            description:'+000 123 456789',
            icon:phone, 
            bgColor:'bg-gradient-to-r from-primary to-secondary',
        },
    ]
    return (
       <section className='my-10'>
         <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                information.map(info=><Info key={info._id} info={info}></Info>)
            }
        </div>
       </section>
    );
};

export default Information;