import React, { useState } from "react";
import ads from "../../assets/ads.jpg";

const PopularArticle = ({ onItemClick }) => {
  const Article = [
    { Title: "অনলাইনে আয় করার ৫টি জনপ্রিয় উপায়", Description: "অনলাইনে আয় করা..." },
    { Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়", Description: "ফ্রিল্যান্সিং হলো..." },
    { Title: "ব্লগিং এর মাধ্যমে আয়", Description: "ব্লগিং হলো..." },
    { Title: "ইউটিউব চ্যানেল থেকে আয়", Description: "ভিডিও কনটেন্ট তৈরি..." },
    { Title: "অ্যাফিলিয়েট মার্কেটিং এর মাধ্যমে আয়", Description: "অ্যাফিলিয়েট মার্কেটিং হলো..." },
  ];

  const [readMoreIndex, setReadMoreIndex] = useState(null);

  const toggleReadMore = (index) => {
    setReadMoreIndex(prev => (prev === index ? null : index));
    onItemClick(); // trigger click for reward
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">📂 Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Article.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={ads} alt="ads" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.Title}</h2>
              <p className="text-sm text-gray-700">
                {readMoreIndex === index ? item.Description : item.Description.substring(0, 80) + '...'}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-600 mt-2 text-sm font-medium hover:underline"
              >
                {readMoreIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArticle;
