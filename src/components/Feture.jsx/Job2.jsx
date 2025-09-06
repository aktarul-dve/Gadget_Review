import React from "react";
import quiz from "../../assets/quiz.jpg";

const Job2 = () => {
  return (
    <div className="w-full bg-gray-100 p-4">
      <h2 className="text-center font-semibold text-lg mb-3">কুইজ জব</h2>

      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={quiz}
            alt="বাংলা কুইজ"
            className="w-20 h-20 object-cover mb-2"
          />
          <p className="text-sm font-medium text-gray-700">বাংলা কুইজ</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={quiz}
            alt="অংক কুইজ"
            className="w-20 h-20 object-cover mb-2"
          />
          <p className="text-sm font-medium text-gray-700">অংক কুইজ</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={quiz}
            alt="ইংলিশ কুইজ"
            className="w-20 h-20 object-cover mb-2"
          />
          <p className="text-sm font-medium text-gray-700">ইংলিশ কুইজ</p>
        </div>
      </div>
    </div>
  );
};

export default Job2;
