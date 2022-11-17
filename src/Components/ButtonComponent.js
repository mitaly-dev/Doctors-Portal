import React from 'react';

const ButtonComponent = ({children}) => {
    return (
        <button className='btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white px-6'>
             {children}
         </button>
    );
};

export default ButtonComponent;