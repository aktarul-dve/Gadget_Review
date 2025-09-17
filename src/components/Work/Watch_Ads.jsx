import React, { useEffect, useState } from 'react'
import ads from "../../assets/ads.jpg";
import axios from 'axios';

const Watch_Ads = () => {

  const token = localStorage.getItem("authToken");

  const [watchAds, setWatchAds] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);  // কোন প্রশ্ন চলছে

  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reward, setReward] = useState(0);


  // ✅ MongoDB থেকে প্রশ্ন আনা
  useEffect(() => {
    const watchAds = async () => {
      try {
        const res = await fetch("https://aktarul.onrender.com/ads/allWatchAds");
        const data = await res.json();
        if (data.success) {
          setWatchAds(data.watchAds);
          console.log("data", data.watchAds);
        }
      } catch (err) {
        console.error("Error fetching watchAds:", err);
      }
    };

    watchAds();
  }, []);

  // কাউন্টডাউন হ্যান্ডেল করা
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleClick = () => {


    setCountdown(30);

    setTimeout(() => {

      setReward(watchAds[currentIndex]?.reward || 0.2);
      setShowModal(true);
    }, 30000);
  };

  const updateBalance = () => {
    setShowModal(false);
    if (reward > 0) {

      axios
        .put(
          "https://aktarul.onrender.com/reward/balance",
          { amount: parseFloat(reward) }, // যেমন 0.30
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          alert(`✅ New Balance: ৳${res.data.balance}`);
        })
        .catch((err) => {
          console.error(err);
        });

    }

    setAnsweredCount(answeredCount + 1);
    if (currentIndex < watchAds.length - 1) {
      setCurrentIndex(currentIndex + 1); // পরের প্রশ্ন
    } else {
      alert("🎉 সব প্রশ্ন শেষ!");
    }

    // Monetag link নতুন tab-এ খোলা
    window.open("https://otieu.com/4/9887860", "_blank");


  }

  // progress bar এর width হিসাব করা
  const progressPercent = ((30 - countdown) / 30) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Top Info */}
      <div className="flex justify-center mt-5">
        <div className="flex space-x-2 items-center bg-white rounded-2xl shadow-md w-28 justify-center p-3 hover:shadow-xl transition">
          <p className="font-bold text-lg">{answeredCount}</p>
          <span>/</span>
          <p className="font-bold text-lg">{watchAds.length}</p>
        </div>
      </div>

      {/* নির্দেশনা */}
      {watchAds.length > 0 ? (
        <div className="p-6 mt-6 max-w-2xl bg-white rounded-xl shadow-md">
          <p className="text-gray-700 leading-relaxed text-justify">
            {watchAds[currentIndex]?.text}
          </p>
        </div>

      ) : (
        <p className="text-center mt-10 text-gray-600">লোড হচ্ছে...</p>
      )}


      {/* Main Section */}
      <div className="flex flex-col items-center justify-center mt-16 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <img src={ads}
          className="w-10 h-10 mb-2" alt="" />


        {/* Button */}
        <button
          onClick={handleClick}
          disabled={countdown > 0}
          className={`px-8 py-3 rounded-2xl font-bold shadow-md transform transition-all duration-300
            ${countdown > 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 hover:shadow-lg"}`}
        >
          {countdown > 0 ? "⏳ অপেক্ষা করুন..." : "🚀 Watch Ads"}
        </button>

        {/* Progress Bar */}
        {countdown > 0 && (
          <div className="w-full mt-6">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-green-500 h-4 transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="mt-2 text-center font-semibold text-blue-600">
              {countdown} সেকেন্ড অপেক্ষা করুন...
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center transform scale-105">
            {reward > 0 ? (
              <p className="text-lg font-bold text-green-600 mb-4 animate-bounce">
                🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600 mb-4">
                😔 দুঃখিত, আবার চেষ্টা করুন।
              </p>
            )}

            <button


              onClick={updateBalance}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105"
            >
              গ্রহণ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Watch_Ads
