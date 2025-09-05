import React from "react";
import { useNavigate } from "react-router-dom";

const Contac = () => {
  const naviget= useNavigate();

  const refer =()=>{
    naviget("refer")

  }

   const withdrow =()=>{
    naviget("withdrow")

  }


  return (
    <div className="w-full bg-gray-100 py-5 px-2">
      <p>আমার টাকা</p>
      <div className="container mx-auto flex justify-center items-center gap-6">
        
        {/* Card 1 */}
        <div onClick={refer} className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 1"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">রেফার করুন</p>
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={withdrow} className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 2"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">টাকা উথড্র</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Rule 3"
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">জয়েন করুন</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contac;
