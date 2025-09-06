import React from "react";
import quiz from "../../assets/quiz.jpg";
const Job2 = () => {
  return (
    <div className="w-full bg-gray-100 py-5 px-2">
      <p>কুইজ জব</p>
      <div className="container mx-auto flex justify-center items-center gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
          <img src={quiz} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          
          <div className="p-4 text-center">
            <p className="text-sm">বাংলা কুইজ</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
           <img src={quiz} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          <div className="p-4 text-center">
            <p className=" text-sm">অংক কুইজ</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition">
           <img src={quiz} alt="Work Rule 1" className="w-20 h-20 mx-auto object-cover" /> 
          <div className="p-4 text-center">
            <p className=" text-sm">ইংলিশ কুইজ</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Job2;
