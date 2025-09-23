import React, { useState } from "react";
import { FaLaptopCode, FaBlog, FaMoneyBillWave, FaStar } from "react-icons/fa";

const CategoriesSection = ({ onItemClick }) => {
  const categories = [
    { title: "Tech Tutorials", description: "প্রোগ্রামিং শেখা", icon: <FaLaptopCode className="text-blue-600 text-3xl" /> },
    { title: "Blogging Tips", description: "ব্লগিং টিপস", icon: <FaBlog className="text-green-600 text-3xl" /> },
    { title: "Online Income Guides", description: "ফ্রিল্যান্সিং, ইউটিউব", icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" /> },
    { title: "Reviews", description: "Apps/Tools/Software", icon: <FaStar className="text-purple-600 text-3xl" /> },
  ];

  const [visited, setVisited] = useState([]); // ✅ Track করা হচ্ছে কোন category আগে ক্লিক হয়েছে

  const handleClick = (index) => {
    if (!visited.includes(index)) {
      setVisited((prev) => [...prev, index]);
      onItemClick(); // ✅ Reward শুধু প্রথমবারই বাড়বে
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">📂 Categories</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 min-w-[200px] flex-shrink-0 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => handleClick(index)} // ✅ এখন handleClick ব্যবহার হচ্ছে
          >
            {cat.icon}
            <h3 className="text-lg font-semibold mt-4">{cat.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
