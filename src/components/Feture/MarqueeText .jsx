import React from "react";

const MarqueeText = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 to-pink-500 py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-white  font-semibold">
        🚀 Welcome to our website! 🎉 Get the best deals now! ⚡ Hurry up, limited time offer! 🔥
      </div>
    </div>
  );
};

export default MarqueeText;
