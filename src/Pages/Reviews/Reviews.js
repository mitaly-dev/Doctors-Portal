import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id:1,
            reviewerImg:people1,
            name:'Winson Herry',
            address:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            rating:5
        },
        {
            _id:2,
            reviewerImg:people2,
            name:'Leroy Jenkins',
            address:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            rating:4
        },
        {
            _id:3,
            reviewerImg:people3,
            name:'Winson Herry',
            address:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            rating:5
        },
    ]
    return (
        <section className='py-16 px-16'>
            <div className='flex justify-between items-center py-16'>
                <div>
                    <span className='text-secondary font-semibold text-lg'>Testimonial</span>
                    <h3 className='text-4xl text-accent mt-2'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} alt="quote" className='w-2/4 ml-auto' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 '>
            {
                reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
            </div>
        </section>
    );
};

export default Reviews;