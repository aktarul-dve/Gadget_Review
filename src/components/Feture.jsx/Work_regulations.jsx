import React from "react";
import { FcHome } from "react-icons/fc";
import anows from "../../assets/anows.png";
import vpn from "../../assets/vpn.png";
import lederbord from "../../assets/lederbord.png";

const Work_regulations = () => {
  return (
    <div className="w-full bg-gray-100 p-4">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-8">
        কাজের নিয়মাবলী
      </h2>

      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={anows}
            alt="Work Rule 1"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-gray-700 font-medium">কাজের নিয়ম</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={vpn}
            alt="Work Rule 2"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-gray-700 font-medium">VPN কানেক্ট করুন</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={lederbord}
            alt="Work Rule 2"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-gray-700 font-medium">লিডার বোর্ড</p>
        </div>
      </div>
    </div>
  );
};

export default Work_regulations;
