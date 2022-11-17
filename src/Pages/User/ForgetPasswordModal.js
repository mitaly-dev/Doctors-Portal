import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import { StateContext } from '../../Context/StateProvider';

const ForgetPasswordModal = () => {
    const {forgetPassModal,setForgetPassModal} = useContext(StateContext)
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { 
        forgetUserPassword
    } = useContext(AuthContext)

    const forgetPasswordHandle=(data)=>{
        const email = data.email
        forgetUserPassword(email)
        .then(()=>{
            setForgetPassModal(null)
            toast.success('Password update successfully',{autoClose:1000})
            }   
        )
        .catch(error=>toast.error(error.message,{autoClose:1000}))
    }

    return (
        <>
        <input type="checkbox" id="forgetPassword" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative text-black">
            <label htmlFor="forgetPassword" className="btn btn-sm btn-circle absolute right-2 top-2 bg-black">✕</label>
            <form onSubmit={handleSubmit(forgetPasswordHandle)}>
                <h3 className="text-lg font-bold my-3">Provide your email :</h3>
                <input type="email" {...register("email", {
                    required:"Email Address is required",
                    pattern:{value:/\S+@\S+\.\S+/,message:'Email is not valid'}
                    })} placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300  focus:outline-none" />
                {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
                <div className='text-right'>
                    <button type='submit' className='mt-5 px-5 py-2 rounded-lg bg-accent text-white'>Update</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};

export default ForgetPasswordModal;