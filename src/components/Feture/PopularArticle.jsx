import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const PopularArticle = () => {

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
          <div className="fixed bottom-10 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-bounce">
            🎉 আপনি {reward} কয়েন পেয়েছেন!
          </div>
        )}
  
      </div>
    );
}

export default PopularArticle