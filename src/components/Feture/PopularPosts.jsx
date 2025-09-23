import React from "react";
import { FaFire } from "react-icons/fa";

const PopularPosts = ({ onItemClick }) => {
  const posts = [
    "২০২৫ সালে সেরা ফ্রিল্যান্স মার্কেটপ্লেস",
    "Monetag এ কিভাবে signup ও approve পাবেন",
    "VPN সঠিকভাবে সেটআপ করার নিয়ম",
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaFire className="text-red-500" /> 🏆 Popular Posts
      </h2>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl divide-y">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition"
            onClick={onItemClick} // 
          >
            <span className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 font-bold rounded-full">{index + 1}</span>
            <p className="text-gray-700 font-medium">{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
