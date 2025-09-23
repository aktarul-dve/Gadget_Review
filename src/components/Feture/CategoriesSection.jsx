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
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        📂 Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
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
