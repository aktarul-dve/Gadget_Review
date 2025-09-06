import React from "react";
import withdrow from "../../assets/withdro.png";
import refer from "../../assets/refer.png";
import telegram from "../../assets/telegram.png";


const Contac = () => {

  return (
    <div className="w-full bg-gray-100 py-5 px-2">
      <p className="text-center font-semibold">আমার টাকা</p>
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        
        {/* Card 1 */}
        <div  className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={refer}
            alt="Rule 1"
            className="w-20 h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">রেফার করুন</p>
          </div>
        </div>

        {/* Card 2 */}
        <div  className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform">
          <img
            src={withdrow}
            alt="Rule 2"
            className="w-20 h-20 object-cover"
          />
          <div className="p-4 text-center">
            <p className=" text-sm">টাকা উথড্র</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center  hover:scale-105 transition-transform">
          <img
            src={telegram}
            alt="Rule 3"
            className="w-20 h-20 object-cover"
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
