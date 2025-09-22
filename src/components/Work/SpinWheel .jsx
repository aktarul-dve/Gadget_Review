import axios from "axios";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const SpinWheel = () => {
  const token = localStorage.getItem("authToken");

  const data = [
    { option: "10 Coins", amount: 0.1 },
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

  const [workCountdown, setWorkCountdown] = useState(0); // ৪ ঘণ্টার cooldown

  // কাউন্টডাউন হ্যান্ডেল
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // ৪ ঘণ্টার cooldown countdown
    useEffect(() => {
      let timer;
      if (workCountdown > 0) {
        timer = setInterval(() => setWorkCountdown(prev => prev - 1), 1000);
      }
      return () => clearInterval(timer);
    }, [workCountdown]);

  const handleSpinClick = () => {
    // AdCash Interstitial দেখানো
    if (window.aclib) {
      window.aclib.runInterstitial({
        zoneId: "10432186",
      });
    }

    // Spin logic
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    // 30 সেকেন্ড কাউন্টডাউন
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
          { amount: parseFloat(reward) },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(res => {
          alert(`✅ New Balance: ৳${res.data.balance}`);
        })
        .catch((err) => {
        if (err.response?.data?.remaining) {
          const remaining = err.response.data.remaining;
          setWorkCountdown(remaining);
          alert(err.response.data.message);
        } else {
          console.error(err);
        }
      });
    } else {
      alert("🎉 কিছু সমস্যা হচ্ছে! আবার চেষ্টা করুন..");
    }
  };

  const progressPercent = ((30 - countdown) / 30) * 100;

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">

       {/* Work cooldown উপরে দেখানো */}
      {workCountdown > 0 && (
        <div className="flex justify-center mt-5">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-3 rounded-2xl shadow-md">
            ⏳ অপেক্ষা করুন: {Math.floor(workCountdown / 3600)}h {Math.floor((workCountdown % 3600) / 60)}m {workCountdown % 60}s
          </div>
        </div>
      )}

      <div className="p-6 bg-white rounded-2xl shadow-md max-w-md text-center">
        <p className="text-gray-700">
          প্রথমে 30 সেকেন্ড অপেক্ষা করে এডটি দেখুন। তার পরে টাকা কালেক্ট করুন।
          সঠিক নিয়ম মেনে কাজ করলে পেমেন্ট পাবেন। ধন্যবাদ।
        </p>
      </div>

      {/* Wheel Container with fixed size to prevent layout shift */}
      <div className="flex justify-center items-center w-[300px] h-[300px]">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          spinDuration={0.2}
          onStopSpinning={() => setMustSpin(false)}
        />
      </div>

      <button
        onClick={handleSpinClick}
        disabled={countdown > 0}
        className={`px-8 py-3 rounded-2xl font-bold shadow-md transform transition-all duration-300
            ${countdown > 0
            ? "bg-gray-300 text-gray-600 cursor-not-allowed shadow-none"
            : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90"}`}
      >
        {countdown > 0 ? "⏳ অপেক্ষা করুন..." : "🚀 Spin"}
      </button>

      {/* Progress bar */}
      <div className="w-64 min-h-[60px]">
        {countdown > 0 && (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-green-500 h-4 transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-center font-semibold text-blue-600">
              {countdown} সেকেন্ড অপেক্ষা করুন...
            </p>
          </div>
        )}
      </div>

      {/* Reward Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            {reward > 0 ? (
              <p className="text-lg font-bold text-green-600 mb-4">
                🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600 mb-4">
                😔 দুঃখিত,  আবার চেষ্টা করুন।
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
