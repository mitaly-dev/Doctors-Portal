import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const StateContext = createContext()

const StateProvider = ({children}) => {
    const [selected, setSelected] = useState(new Date()) 
    const [modalOpen,setModalOpen] = useState(null)
    const [forgetPassModal,setForgetPassModal] = useState(null)

    const value = {selected,setSelected,modalOpen,setModalOpen,forgetPassModal,setForgetPassModal}
    return (
        <div>
            <StateContext.Provider value={value}>
                {children}
            </StateContext.Provider>
        </div>
    );
};

export default StateProvider;