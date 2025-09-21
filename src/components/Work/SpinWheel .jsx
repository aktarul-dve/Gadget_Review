import axios from "axios";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";


const SpinWheel = () => {
  const token = localStorage.getItem("authToken");
  const data = [
    { option: "10 Coins", amount: 0.10 },
    { option: "50 Coins", amount: 0.15 },
    { option: "100 Coins", amount: 0.25 },
    { option: "100 Coins", amount: 0.25 },
    { option: "100 Coins", amount: 0.25 },
    { option: "Try Again", amount: 0 },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reward, setReward] = useState(0);

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

  // 🔹 Monetag ad trigger
  const showMyAd = () => {
    if (window.monetagReady && window.showVignetteAd) {
      window.showVignetteAd("9905440"); // Zone ID
      console.log("🎯 Ad Triggered");
    } else {
      console.log("⚠️ Monetag not ready yet");
    }
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    showMyAd();


    // 3০ সেকেন্ড কাউন্টডাউন শুরু
    setCountdown(30);


    setTimeout(() => {
      if (data[newPrizeNumber].option !== "Try Again") {
        setReward(data[newPrizeNumber].amount);
        setShowModal(true);
      } else {
        setReward(0);
        setShowModal(true);
      }
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

    } else {
      alert("🎉কিছু এটা সমস্যা হচ্ছে ! আবার চেষ্ট করুন.. ");
    }



  }

  // progress bar এর width হিসাব করা
  const progressPercent = ((30 - countdown) / 30) * 100;

  return (
    <div className="flex flex-col items-center mt-10">

      <div className="p-6 mt-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-700">
          প্রথমে  30 সেকেন্ড অপেক্ষা করে এডটি দেখুন। তার পরে টাকা কালেক্ট করুন ।
          সঠিক নিয়ম মেনে কাজ করলে পেমেন্ট পাবেন। ধন্যবাদ।
        </p>
      </div>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        spinDuration={0.2} // 🔹 default 0.5 sec, আপনি চাইলে 1–2 দিতে পারেন
        onStopSpinning={() => setMustSpin(false)}
      />


      <button
        onClick={handleSpinClick}
        disabled={countdown > 0} // ✅ countdown চললে বাটন কাজ করবে না
        className={`mt-6 px-6 py-3 rounded-lg font-bold transition 
                 ${countdown > 0
            ? "bg-gray-400 cursor-not-allowed"  // disable অবস্থায় style
            : "bg-red-500 text-white hover:bg-red-600"}`}
      >
        {countdown > 0 ? "⏳ অপেক্ষা করুন..." : "🚀Spin"}
      </button>


      {/* Progress Bar + Countdown */}
      {countdown > 0 && (
        <div className="w-64 mt-6">
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

      {/* 🔹 Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            {reward > 0 ? (
              <p className="text-lg font-bold text-green-600 mb-4">
                🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600 mb-4">
                😔 দুঃখিত, আবার চেষ্টা করুন।
              </p>
            )}

            <button
              onClick={updateBalance}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              গ্রহণ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
