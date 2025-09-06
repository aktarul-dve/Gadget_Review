import React from "react";
import { useNavigate } from "react-router-dom";
import math from "../../assets/math.jpg";
import spin from "../../assets/spin.jpg";
import ads from "../../assets/ads.jpg";


const Job1 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 p-4">
      <h2 className="text-center font-semibold text-lg mb-3">আমার কাজ</h2>

      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div
          onClick={() => navigate("spin")}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform"
        >
          <img
            src={spin}
            alt="Spin & Earn"
            className="w-20 h-20 object-cover mb-3"
          />
          <p className="text-sm font-medium text-gray-700">স্পিন করে টাকা</p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate("math")}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform"
        >
          <img
            src={math}
            alt="Math & Earn"
            className="w-20 h-20 object-cover mb-3"
          />
          <p className="text-sm font-medium text-gray-700">অংক করে টাকা</p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate("watchAds")}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform"
        >
          <img
            src={ads}
            alt="Watch Ads & Earn"
            className="w-20 h-20 object-cover mb-3"
          />
          <p className="text-sm font-medium text-gray-700">অ্যাড দেখে টাকা</p>
        </div>
      </div>
    </div>
  );
};

export default Job1;
