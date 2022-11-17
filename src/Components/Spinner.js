import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <p className='w-16 h-16 border-8 border-dashed rounded-full animate-spin border-primary'></p>
        </div>
    );
};

export default Spinner;