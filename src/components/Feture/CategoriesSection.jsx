import React from "react";
import { FaLaptopCode, FaBlog, FaMoneyBillWave, FaStar } from "react-icons/fa";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Tech Tutorials",
      description: "প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট ও টেক টিপস শিখুন সহজে।",
      icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
    },
    {
      title: "Blogging Tips",
      description: "ব্লগিং থেকে আয় করার সঠিক উপায় ও স্ট্র্যাটেজি জানুন।",
      icon: <FaBlog className="text-green-600 text-3xl" />,
    },
    {
      title: "Online Income Guides",
      description: "ফ্রিল্যান্সিং, ইউটিউব, অ্যাফিলিয়েট সহ বিভিন্ন আয়ের পথ।",
      icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Reviews (Apps/Tools/Software)",
      description: "বিভিন্ন সফটওয়্যার, অ্যাপস ও টুলস এর রিভিউ পড়ুন।",
      icon: <FaStar className="text-purple-600 text-3xl" />,
    },
    {
      title: "Extra Category",
      description: "এটা শুধু স্ক্রল চেক করার জন্য যোগ করা হলো।",
      icon: <FaStar className="text-red-600 text-3xl" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
        📂 Categories
      </h2>

      {/* Scrollable Row */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 min-w-[200px] w-[200px] flex-shrink-0 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
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
