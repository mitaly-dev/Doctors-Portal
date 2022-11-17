import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"

const useToken=(email)=>{
    const [ token ,setToken] = useState('')
    useEffect(()=>{
       if(email){
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.accessToken){
                localStorage.setItem('Doctors-Portal-Token',data.accessToken)
                setToken(data.accessToken)
            }
            else{
                toast.error('User not found',{autoClose:1000})
            }
        })
        .catch(error=>console.log(error.message))
       }
    },[email])
    return [token]
}
export default useToken