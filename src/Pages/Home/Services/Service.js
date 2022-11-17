import React from 'react';

const Service = ({service}) => {
    const {name,description,icon} = service
    return (
        <div className="card shadow-lg p-10">
          <figure><img src={icon} alt="service icon" className='w-[80px]' /></figure>
          <div className="text-center  pt-7">
            <h2 className="font-semibold text-black text-xl text-center mb-2">{name}</h2>
            <p className='text-gray-500'>{description}</p>
          </div>
      </div>
    );
};

export default Service;