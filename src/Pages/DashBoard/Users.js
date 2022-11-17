import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const Users = () => {
    const {user} = useContext(AuthContext)

    const {data:users = [],isLoading,refetch} = useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/users',{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('Doctors-Portal-Token')}`
                }
            })
            const data= await res.json()
            return data
        }
    })

    
    const adminHandle=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}?email=${user.email}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('Add an admin',{autoClose:1000})
                refetch()
            }
            else{
                toast.error('Only Admin can set an admit!',{autoClose:1000})
            }
        })
        .catch(error=>console.log(error.message))
    }

    const deleteUser=(id)=>{
        fetch(`http://localhost:5000/users/${id}?email=${user.email}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.warning('Delete on user',{autoClose:1000})
                refetch()
            }else{
                toast.error('Only Admin can delete!',{autoClose:1000})
            }
           
        })
        .catch(error=>console.log(error.message))
    }       



    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className="px-5 md:px-10 lg:px-16 py-10">
              <div className='text-black pb-7 sm:flex justify-between items-center '>
                    <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"/>
                        <path fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"/>
                        <path fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"/>
                    </svg>
                    </label>
                <h3 className='text-2xl font-semibold'>Users</h3>
            </div>
        <table className="table w-full bg-[#E6E6E6]">
          <thead className='bg-[#E6E6E6]'>
            <tr className='bg-[#E6E6E6] border-white'>
              <th className='bg-[#E6E6E6] text-black border-white'></th>
              <th className='bg-[#E6E6E6] text-black border-white'>Name</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Admin</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Action</th>
              <th className='bg-[#E6E6E6] text-black border-white'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
               users.map((user,index)=>{
                    const {name,email,_id} = user
                    return <tr key={index} className="text-black">
                            <th>{index+1}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                            {
                                user.role!=='admin' &&
                                <button onClick={()=>adminHandle(_id)} className='px-4 py-1 rounded-lg bg-primary'>Admin</button>
                            }
                            </td>
                            <td><button onClick={()=>deleteUser(_id)} className='px-4 py-1 rounded-lg bg-red-500'>Delete</button></td>
                           </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
};

export default Users;