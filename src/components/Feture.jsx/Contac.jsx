import React from "react";
import withdrow from "../../assets/withdro.png";
import refer from "../../assets/refer.png";
import telegram from "../../assets/telegram.png";


const Contac = () => {

  return (
    <div className="w-full bg-gray-100 p-4">
      <p className="text-center font-semibold text-lg mb-2">আমার টাকা</p>
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        
        {/* Card 1 */}
        <div  className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={refer}
            alt="Rule 1"
            className="w-20 h-20 object-cover"
          />
         
            <p className=" text-sm font-medium text-gray-700">রেফার করুন</p>
          
        </div>

        {/* Card 2 */}
        <div  className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform">
          <img
            src={withdrow}
            alt="Rule 2"
            className="w-20 h-20 object-cover"
          />
      
            <p className="text-sm font-medium text-gray-700">টাকা উথড্র</p>
          
        </div>

        {/* Card 3 */}
        <div className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center  hover:scale-105 transition-transform">
          <img
            src={telegram}
            alt="Rule 3"
            className="w-20 h-20 object-cover"
          />
         
            <p className=" text-sm font-medium text-gray-700">জয়েন করুন</p>
         
        </div>

      </div>
    </div>
  );
};

export default Contac;
