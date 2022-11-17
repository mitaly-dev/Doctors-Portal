import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from 'react';
import ForgetPasswordModal from './ForgetPasswordModal';
import { StateContext } from '../../Context/StateProvider';
import SocialLogin from './SocialLogin';
import useToken from '../../Hook/useToken';

const Login = () => {
    const {forgetPassModal,setForgetPassModal} = useContext(StateContext)
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {  
        userSignIn,
        signInWithGoogle} = useContext(AuthContext)

    const [email,setEmail] = useState('')
    const [token] = useToken(email)

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    
    if(token){
        navigate(from,{replace:true})
    }
    
    const userSigninHandle=data=>{
        const email = data.email 
        const password = data.password

        userSignIn(email,password)
        .then(result=>{
            setEmail(email)
        })
        .catch(error=>toast.error(error.message,{autoClose:1000}))
    }

    return (
        <div className="w-full max-w-md m-auto p-8 space-y-3 rounded-xl text-black shadow-md my-16">
            <h1 className="text-2xl text-center text-black mb-8">Login</h1>
            <form onSubmit={handleSubmit(userSigninHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block font-semibold text-gray-600 text-[16px] mb-1">Email</label>
                    <input type="email" {...register("email", {
                    required:"Email Address is required",
                    pattern:{value:/\S+@\S+\.\S+/,message:'Email is not valid'}
                    })} placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block font-semibold text-gray-600 text-[16px] mb-1">Password</label>
                    <input type="password" {...register('password',{
                        required:"password is required",
                        pattern:{value:/(?=.*[!@#$&*])/,message:'password should be minimum one special character'},
                        minLength:{value:6,message:'password should be must 6 characters'}
                    })}
                    placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                    {errors?.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <div className="flex text-xs font-semibold text-gray-600">
                        <label onClick={()=>setForgetPassModal({})} htmlFor="forgetPassword" className="pt-1 font-semibold cursor-pointer">Forgot Password?</label>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-lg text-gray-300 text-lg bg-accent">LOGIN</button>
            </form>
            <p className="text-center sm:px-6 text-[14px] font-semibold">New to Doctors Portal?
                <Link to="/signup" className="text-secondary"> Create new account</Link>
            </p>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-gray-600">Or</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <SocialLogin></SocialLogin>
                {
                    forgetPassModal && 
                    <ForgetPasswordModal></ForgetPasswordModal>
                }
            
        </div>
    );
};

export default Login;

	