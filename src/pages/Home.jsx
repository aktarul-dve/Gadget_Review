import React, { useState, useEffect } from "react";
import MarqueeText from "../components/Feture/MarqueeText ";
import PopularArticle from "../components/Feture/PopularArticle";
import CategoriesSection from "../components/Feture/CategoriesSection";
import PopularPosts from "../components/Feture/PopularPosts";

const Home = () => {
  const [clickCount, setClickCount] = useState(0); // cumulative click counter
  const [reward, setReward] = useState(0);         // reward state

  // Generic click handler
  const handleItemClick = () => {
    setClickCount(prev => prev + 1);
  };

  // Reward logic
  useEffect(() => {
    if (clickCount >= 10 && reward === 0) {
      setReward(5); // 5 coins reward
    }
  }, [clickCount, reward]);

  return (
    <div>
      <MarqueeText onItemClick={handleItemClick} />
      <PopularArticle onItemClick={handleItemClick} />
      <CategoriesSection onItemClick={handleItemClick} />
      <PopularPosts onItemClick={handleItemClick} />

      {/* Reward notification */}
      {reward > 0 && (
        <div className="fixed bottom-10 right-5 bg-green-500 text-white p-3 rounded-lg shadow-lg animate-bounce text-sm">
          🎉 আপনি {reward} কয়েন পেয়েছেন!
        </div>
      )}
    </div>
  );
};

export default Home;
