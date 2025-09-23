import React, { useState } from 'react';
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
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },

    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    {
      Title: "ফ্রিল্যান্সিং এর মাধ্যমে আয়",
      Description : "ফ্রিল্যান্সিং হলো স্কিল বা দক্ষতার ভিত্তিতে অনলাইনে কাজ করা। ওয়েবসাইট ডিজাইন, গ্রাফিক্স ডিজাইন, কনটেন্ট রাইটিং ইত্যাদি কাজের জন্য ফ্রিল্যান্সাররা বিভিন্ন প্ল্যাটফর্মে কাজ পান। যারা নতুন, তারা Upwork, Fiverr বা Freelancer-এ সহজে কাজ শুরু করতে পারে।"
    },
    
  ];

  // Read More state
  const [readMoreIndex, setReadMoreIndex] = useState(null);

  const toggleReadMore = (index) => {
    if (readMoreIndex === index) {
      setReadMoreIndex(null); // collapse if already open
    } else {
      setReadMoreIndex(index);
    }
  }

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
    </div>
  );
}

export default Watch_Ads;
