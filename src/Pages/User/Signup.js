import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';

const Signup = () => {
    const {
        createUser,
        emailValidation,
        updateUserProfile,
        logOut
    } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm();

    const createUserHandle=data=>{
       const email = data.email 
       const name = data.name 
       const photoURL = data.photoURL 
       const password = data.password

       const profile ={
        displayName : name ,
        photoURL
       }
       createUser(email,password)
       .then(result=>{
        emailValidation(email)
        .then(()=>toast.success('Please verify your email',{autoClose:1000}))
        .catch((error)=>toast.error(error.message,{autoClose:1000}))
        updateUserProfile(profile)
        .then(()=>{})
        .catch((error)=>console.log(error.message))
        logOut()
        navigate('/login')
       })
       .catch(error=>toast.error(error.message)) 
    }

    return (
        <div className="w-full max-w-md m-auto p-8 space-y-3 rounded-xl text-black shadow-md my-16">
            <h1 className="text-2xl text-center text-black mb-8">Sign Up</h1>
            <form onSubmit={handleSubmit(createUserHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block font-semibold text-gray-600 text-[16px] mb-1">Name</label>
                    <input type="text" {...register("name",{required:'Name is required!'})} placeholder="Name" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block font-semibold text-gray-600 text-[16px] mb-1">Email</label>
                    <input type="email" {...register("email", 
                        { 
                        required:"Email Address is required!",
                        pattern:{value:/\S+@\S+\.\S+/,message:'Email is not valid'}
                        })} placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block font-semibold text-gray-600 text-[16px] mb-1">photoURL</label>
                    <input type="text" {...register("photoURL", { required:"photoURL Address is required!"})} placeholder="photoURL" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.photoURL && <p className='text-red-600'>{errors.photoURL?.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block font-semibold text-gray-600 text-[16px] mb-1">Password</label>
                    <input type="password" {...register('password',{
                        required:"password is required!",
                        pattern:{value:/(?=.*[!@#$&*])/,message:'password should be minimum one special character'},
                        minLength:{value:6,message:'password should be must 6 characters'}
                    })}
                    placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <button className="block w-full p-3 text-center rounded-lg text-gray-300 text-lg bg-accent">LOGIN</button>
            </form>
            <p className="text-center sm:px-6 text-[14px] font-semibold">Already have an account?
                <Link to="/login" className="text-secondary">Please login</Link>
            </p>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-gray-600">Or</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;

	