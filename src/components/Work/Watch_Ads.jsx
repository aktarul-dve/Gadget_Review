import React, { useState, useEffect } from 'react';
import ads from "../../assets/ads.jpg"; // আপনার placeholder image

const Watch_Ads = () => {

  const Article = [
    {
      Title: "অনলাইনে আয় করার ৫টি জনপ্রিয় উপায়",
      Description : "অনলাইনে আয় করা এখন অনেকের জন্য আয়ের প্রধান উৎস হয়ে উঠেছে। প্রযুক্তির উন্নয়নের ফলে, ঘরে বসেই মানুষ বৈধ উপায়ে অর্থ উপার্জন করতে পারছে। নিচে অনলাইনে আয় করার ৫টি জনপ্রিয় উপায় দেওয়া হলো: 1. ফ্রিল্যান্সিং 2. ব্লগিং 3. ইউটিউব চ্যানেল 4. অনলাইন টিউটরিং 5. অ্যাফিলিয়েট মার্কেটিং। প্রতিটি উপায়ের বিস্তারিত ব্যাখ্যা ও টিপস এখানে পাওয়া যাবে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ব্লগিং এর মাধ্যমে আয়",
      Description : "ব্লগিং হল একটি জনপ্রিয় উপায় অনলাইনে আয় করার। ব্লগাররা তাদের অভিজ্ঞতা, টিপস বা কনটেন্ট শেয়ার করে আয় করতে পারে। ব্লগে বিজ্ঞাপন বা প্রিমিয়াম কনটেন্টের মাধ্যমে আয় করা যায়।"
    },
    {
      Title: "ইউটিউব চ্যানেল থেকে আয়",
      Description : "ভিডিও কনটেন্ট তৈরি করে YouTube-এ আপলোড করলে বিজ্ঞাপন ও স্পন্সরশিপ থেকে আয় করা যায়। শিক্ষামূলক, গেমিং বা ভ্লগ ভিডিও খুব জনপ্রিয়।"
    },
    {
      Title: "অ্যাফিলিয়েট মার্কেটিং এর মাধ্যমে আয়",
      Description : "অ্যাফিলিয়েট মার্কেটিং হলো অন্যের প্রোডাক্ট প্রচার করে কমিশন আয়ের একটি উপায়। উদাহরণ: Amazon Affiliate, ClickBank। লিঙ্ক বা কোড ব্যবহার করে প্রোডাক্ট বিক্রি করলে আয় হয়।"
    },
    // আরও Article item যোগ করতে পারেন
  ];

  // Read More state
  const [readMoreIndex, setReadMoreIndex] = useState(null);

  // কোন আর্টিকেল পড়া হয়েছে ট্র্যাক
  const [readArticles, setReadArticles] = useState([]);

  // Reward state
  const [reward, setReward] = useState(0);

  // Toggle Read More
  const toggleReadMore = (index) => {
    if (readMoreIndex === index) {
      setReadMoreIndex(null);
    } else {
      setReadMoreIndex(index);

      // যদি আগে না পড়া হয়ে থাকে, add to readArticles
      if (!readArticles.includes(index)) {
        setReadArticles(prev => [...prev, index]);
      }
    }
  }

  // Reward check: ৫টি আর্টিকেল পড়লে ১০ কয়েন
  useEffect(() => {
    if (readArticles.length >= 5 && reward === 0) {
      setReward(10);
    }
  }, [readArticles, reward]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 space-y-6">

      {Article.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-2xl flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="md:w-1/3">
            <img src={ads} alt="ads" className="object-cover w-full h-full" />
          </div>

          {/* Text */}
          <div className="p-6 md:w-2/3 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">{item.Title}</h2>
            
            <p className="text-gray-700">
              {readMoreIndex === index 
                ? item.Description 
                : item.Description.substring(0, 120) + '...'}
            </p>

            <button 
              onClick={() => toggleReadMore(index)}
              className="text-blue-600 mt-2 font-semibold"
            >
              {readMoreIndex === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}

      {/* Reward UI */}
      {reward > 0 && (
        <div className="fixed bottom-5 mb-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-bounce">
          🎉 আপনি {reward} কয়েন পেয়েছেন!
        </div>
      )}

    </div>
  );
}

export default Watch_Ads;
