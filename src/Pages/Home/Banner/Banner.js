import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import ButtonComponent from '../../../Components/ButtonComponent';

const Banner = () => {
    return (
        <div className="relative">
      <img
        src={bannerImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative min-h-[80vh] bg-opacity-75 flex items-center">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-black">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none ">
              Your New Smile Starts <br className="hidden md:block" />
                
                <span className="text-teal-accent-400">Here</span>
              </h2>
              <p className="max-w-xl mb-4 text-base  md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              </p>
            <ButtonComponent>GET STARTED</ButtonComponent>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <img src={chair} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;