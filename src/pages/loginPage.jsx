import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const login =()=>{
    window.location.href = 'https://aktarul.onrender.com/auth/google'
  };

 
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/userLayout"); // টোকেন সেভ হয়ে গেলে মেইন পেজে পাঠিয়ে দিন
    }
  }, [navigate]);

   useEffect(() => {

    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/userLayout"); 
    }
  }, [navigate]);



  return (
    <div className='bg-red-500 h-screen w-screen flex justify-center items-center'> 
      {/* 🔹 পুরো স্ক্রিনকে flex করে সেন্টার করা হয়েছে */}
      
      <div className='flex flex-col space-y-5 items-center'>
        
        {/* শুধু আইকন */}
        <div className='flex justify-center items-center'>
          <FcGoogle size={40}/>
        </div>

        {/* Google Login Button */}
        <div onClick={login} className='flex bg-white space-x-3 px-4 py-2 rounded-lg shadow-md cursor-pointer items-center'>
          <FcGoogle size={24}/>
          <p className='font-bold'>Continue With Google</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
