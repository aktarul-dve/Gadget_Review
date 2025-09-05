import React from "react";
import { useNavigate } from "react-router-dom";
import math from '../../assets/math.jpg';
import spin from '../../assets/spin.jpg';
import ads from '../../assets/ads.jpg';

const Job1 = () => {

  const naviget = useNavigate();

  const mathpage =()=>{
    naviget("math");

  }

    const  watchAds=()=>{
    naviget("watchAds");

  }



  return (
    <div className="w-full bg-gray-100 py-5 px-2">
        <p>আমার কাজ</p>
      <div className="container mx-auto flex justify-center items-center gap-6">
        
        {/* Card 1 */}
        <div onClick={mathpage} className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img src={spin} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          <div className="p-4 text-center">
            <p className=" text-sm">স্পিন করে টাকা</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img src={math} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          <div className="p-4 text-center">
            <p className=" text-sm">অংক করে টাকা</p>
          </div>
        </div>

        {/* Card 3 */}
        <div onClick={watchAds} className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img src={ads} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          <div className="p-4 text-center">
            <p className=" text-sm">অ্যাড দেখে টাকা</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Job1;
