import React from "react";
import { FaHome,  FaUser } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const Footer = () => {

  const navigate = useNavigate();

  const withdrow = () =>{
    navigate("withdrow")

  }
  const home = () =>{
    navigate("/userLayout")

  }
  const profile = () =>{
    navigate("refer")

  }




  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="flex justify-between items-center px-8 relative">

        {/* Left button */}
        <button onClick={withdrow} className="flex flex-col items-center text-gray-600 hover:text-blue-600 py-3">
          <RiMoneyDollarCircleLine className="text-black" size={22} />
          <span className="text-xs">Withdrow</span>
        </button>

        {/* Floating Action Button (FAB) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5">
          <button onClick={home} className=" bg-green-400  rounded-full p-4 shadow-lg hover:bg-blue-700">
            <FaHome size={28} />
          </button>
        </div>

       

        {/* Extra button */}
        <button onClick={profile} className="flex flex-col items-center text-gray-600 hover:text-blue-600 py-3">
          <FaUser size={22} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
