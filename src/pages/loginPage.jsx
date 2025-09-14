import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { Player } from "@lottiefiles/react-lottie-player";
import loginAnimation from "../assets/animations/login.json";

const LoginPage = () => {
  const navigate = useNavigate();

  const login = () => {
    window.location.href = 'https://aktarul.onrender.com/auth/google';
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/userLayout");
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) navigate("/userLayout");
  }, [navigate]);

  return (
    <div className='bg-white h-screen w-screen flex justify-center items-center'> 
      <div className='flex flex-col space-y-5 items-center'>
        
        {/* 🔹 Lottie Animation */}
        <div className='flex justify-center items-center'>
          <Player
            autoplay
            loop
            src={loginAnimation}
            style={{ height: 150, width: 150 }}
          />
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

export default LoginPage;
