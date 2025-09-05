import React from "react";
import { FcHome } from "react-icons/fc";
import anows from "../../assets/anows.png";  
import vpn from "../../assets/vpn.png";  


const Work_regulations = () => {
  return (
    <div className="w-full bg-gray-100 py-5 px-2">
      <div className="container mx-auto flex justify-center items-center gap-6">
        
        {/* Card 1 */}
        <div  className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
           <img src={anows} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" />  
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm">কাজের নিয়ম</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img src={vpn} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" />
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm">VPN কানেক্ট করুন</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <FcHome 
            className="w-full h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm">Work Rule 3</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work_regulations;
