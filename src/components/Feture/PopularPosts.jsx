import React, { useState } from "react";
import { FaFire } from "react-icons/fa";

const PopularPosts = ({ onItemClick }) => {
  const posts = [
    "২০২৫ সালে সেরা ফ্রিল্যান্স মার্কেটপ্লেস",
    "Monetag এ কিভাবে signup ও approve পাবেন",
    "VPN সঠিকভাবে সেটআপ করার নিয়ম",
  ];

  const [visited, setVisited] = useState([]); // ✅ কোন পোস্টে ক্লিক হয়েছে সেটা ট্র্যাক করবে

  const handleClick = (index) => {
    if (!visited.includes(index)) {
      setVisited((prev) => [...prev, index]);
      onItemClick(); // ✅ শুধুমাত্র প্রথমবার ক্লিক করলে reward যোগ হবে
    }
  };

  return (
    <div className="bg-gray-100 py-2 px-2 flex flex-col items-center">
      <h2 className="text-[16px] font-bold mb-6 text-gray-800 flex  gap-2">
        <FaFire className="text-red-500" /> 🏆 Popular Posts
      </h2>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl divide-y">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition"
            onClick={() => handleClick(index)} // ✅ handleClick ব্যবহার
          >
            <span className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 font-bold rounded-full">
              {index + 1}
            </span>
            <p className="text-gray-700 font-medium">{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
