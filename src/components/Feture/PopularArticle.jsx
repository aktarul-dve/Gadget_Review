import React, { useState, useEffect } from 'react';
import ads from "../../assets/ads.jpg"; // placeholder image

const PopularArticle = () => {
  const Article = [
    {
      Title: "অনলাইনে আয় করার ৫টি জনপ্রিয় উপায়",
      Description: "অনলাইনে আয় করা এখন অনেকের জন্য আয়ের প্রধান উৎস হয়ে উঠেছে। প্রযুক্তির উন্নয়নের ফলে, ঘরে বসেই মানুষ বৈধ উপায়ে অর্থ উপার্জন করতে পারছে। নিচে অনলাইনে আয় করার ৫টি জনপ্রিয় উপায় দেওয়া হলো: 1. ফ্রিল্যান্সিং 2. ব্লগিং 3. ইউটিউব চ্যানেল 4. অনলাইন টিউটরিং 5. অ্যাফিলিয়েট মার্কেটিং। প্রতিটি উপায়ের বিস্তারিত ব্যাখ্যা ও টিপস এখানে পাওয়া যাবে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description: "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ব্লগিং এর মাধ্যমে আয়",
      Description: "ব্লগিং হল একটি জনপ্রিয় উপায় অনলাইনে আয় করার। ব্লগাররা তাদের অভিজ্ঞতা, টিপস বা কনটেন্ট শেয়ার করে আয় করতে পারে। ব্লগে বিজ্ঞাপন বা প্রিমিয়াম কনটেন্টের মাধ্যমে আয় করা যায়।"
    },
    {
      Title: "ইউটিউব চ্যানেল থেকে আয়",
      Description: "ভিডিও কনটেন্ট তৈরি করে YouTube-এ আপলোড করলে বিজ্ঞাপন ও স্পন্সরশিপ থেকে আয় করা যায়। শিক্ষামূলক, গেমিং বা ভ্লগ ভিডিও খুব জনপ্রিয়।"
    },
    {
      Title: "অ্যাফিলিয়েট মার্কেটিং এর মাধ্যমে আয়",
      Description: "অ্যাফিলিয়েট মার্কেটিং হলো অন্যের প্রোডাক্ট প্রচার করে কমিশন আয়ের একটি উপায়। উদাহরণ: Amazon Affiliate, ClickBank। লিঙ্ক বা কোড ব্যবহার করে প্রোডাক্ট বিক্রি করলে আয় হয়।"
    },
  ];

  const [readMoreIndex, setReadMoreIndex] = useState(null);
  const [readArticles, setReadArticles] = useState([]);
  const [reward, setReward] = useState(0);

  const toggleReadMore = (index) => {
    if (readMoreIndex === index) {
      setReadMoreIndex(null);
    } else {
      setReadMoreIndex(index);
      if (!readArticles.includes(index)) {
        setReadArticles(prev => [...prev, index]);
      }
    }
  }

  useEffect(() => {
    if (readArticles.length >= 5 && reward === 0) {
      setReward(10);
    }
  }, [readArticles, reward]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
        📂 Latest Posts
      </h2>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Article.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            
            {/* Image */}
            <img src={ads} alt="ads" className="w-full h-32 object-cover" />
            
            {/* Text */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.Title}</h2>
              <p className="text-sm text-gray-700">
                {readMoreIndex === index
                  ? item.Description
                  : item.Description.substring(0, 80) + '...'}
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

      {/* Reward UI */}
      {reward > 0 && (
        <div className="fixed bottom-10 right-5 bg-green-500 text-white p-3 rounded-lg shadow-lg animate-bounce text-sm">
          🎉 আপনি {reward} কয়েন পেয়েছেন!
        </div>
      )}
    </div>
  );
}

export default PopularArticle;
