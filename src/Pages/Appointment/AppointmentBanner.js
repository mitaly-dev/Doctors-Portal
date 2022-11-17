import React from 'react';
import bannerImg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { useContext } from 'react';
import { StateContext } from '../../Context/StateProvider';

const AppointmentBanner = () => {
   const {selected,setSelected} = useContext(StateContext)
  
    return (
        <div className="relative">
      <img
        src={bannerImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative min-h-[80vh] bg-opacity-75 flex items-center">
        <div className=" py-16 mx-auto w-full px-28 lg:py-20">
          <div className="flex flex-col items-center w-full justify-between xl:flex-row">
            <div className="mb-12 xl:mb-0 p-5 rounded-xl text-black bg-white shadow-md">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                />
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-7/12">
              <img src={chair} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;
