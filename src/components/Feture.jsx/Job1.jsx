import React from "react";
import { useNavigate } from "react-router-dom";

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
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 1"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">অংক করে টাকা</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 2"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">স্পিন করে টাকা</p>
          </div>
        </div>

        {/* Card 3 */}
        <div onClick={watchAds} className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 3"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">অ্যাড দেখে টাকা</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Job1;
