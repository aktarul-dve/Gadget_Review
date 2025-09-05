import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navget = useNavigate();

  const nevigetUserLayout = ()=>{
    navget("/userLayout");

  }



  return (
    <div className='bg-red-500 h-screen w-screen flex justify-center items-center'> 
      {/* 🔹 পুরো স্ক্রিনকে flex করে সেন্টার করা হয়েছে */}
      
      <div className='flex flex-col space-y-5 items-center'>
        
        {/* শুধু আইকন */}
        <div className='flex justify-center items-center'>
          <FcGoogle size={40}/>
        </div>

        {/* Google Login Button */}
        <div onClick={nevigetUserLayout} className='flex bg-white space-x-3 px-4 py-2 rounded-lg shadow-md cursor-pointer items-center'>
          <FcGoogle size={24}/>
          <p className='font-bold'>Continue With Google</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
