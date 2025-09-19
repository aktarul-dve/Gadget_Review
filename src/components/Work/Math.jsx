import React, { useEffect, useState } from 'react';
import math from "../../assets/math.jpg";
import axios from 'axios';

const Math = () => {

  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [questions, setQuestions] = useState([]); // সব প্রশ্ন
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0); // কোন প্রশ্ন চলছে
  const [userAnswer, setUserAnswer] = useState(""); // ইউজারের উত্তর
  const [reward, setReward] = useState(0);

  const token = localStorage.getItem("authToken");

  // ✅ MongoDB থেকে প্রশ্ন আনা
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("https://aktarul.onrender.com/allQuestions");
        const data = await res.json();
        if (data.success) {
          setQuestions(data.questions);
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  // কাউন্টডাউন
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // Submit করলে
  const handleClick = () => {
    if (userAnswer.trim() === "") {
      alert("দয়া করে উত্তর দিন!");
      return;
    }

    setCountdown(30);

    setTimeout(() => {
      const correctAnswer = questions[currentIndex]?.answer;
      if (userAnswer.trim() === correctAnswer) {
        setReward(questions[currentIndex]?.reward || 0.2);
      } else {
        setReward(0);
      }

      setUserAnswer("");
      setAnsweredCount(answeredCount + 1);

      // যদি শেষ প্রশ্ন হয় → Modal খুলবে
      if (currentIndex === questions.length - 1) {
        setShowModal(true);
      } else {
        setCurrentIndex(currentIndex + 1); // পরের প্রশ্ন
      }
    }, 30000);
  };

  const updateBalance = () => {
    if (reward > 0) {
      axios.put(
        "https://aktarul.onrender.com/reward/balance",
        { amount: parseFloat(reward) },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert(`✅ New Balance: ৳${res.data.balance}`);
      })
      .catch((err) => {
        console.error(err);
      });
    }

    // Modal বন্ধ এবং সব রিসেট
    setShowModal(false);
    setCurrentIndex(0);
    setAnsweredCount(0);
    setReward(0);
    setUserAnswer("");
  };

  // progress bar
  const progressPercent = ((30 - countdown) / 30) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="flex justify-center mt-5">
        <div className="flex space-x-2 items-center bg-white rounded-2xl shadow-md w-28 justify-center p-3 hover:shadow-xl transition">
          <p className="font-bold text-lg">{answeredCount}</p>
          <span>/</span>
          <p className="font-bold text-lg">{questions.length}</p>
        </div>
      </div>

      <div className="p-6 mt-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-700">
          প্রথমে  30 সেকেন্ড অপেক্ষা করে এডটি দেখুন। তার পরে টাকা কালেক্ট করুন । সঠিক নিয়ম মেনে কাজ করলে পেমেন্ট পাবেন। ধন্যবাদ।
        </p>
      </div>

      {/* প্রশ্ন দেখাও */}
      {questions.length > 0 ? (
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 bg-red-500 rounded-2xl shadow-md p-6 md:p-10 hover:shadow-xl transition">
          <img src={math} className="w-20 h-20 mb-4 md:mb-0" alt="" />
          <div className="flex text-4xl md:text-5xl font-bold space-x-2">
            <p>{questions[currentIndex]?.text}</p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-600">লোড হচ্ছে...</p>
      )}

      {/* Answer input */}
      <div className="flex flex-col items-center mt-8 bg-white rounded-2xl shadow-md p-6 md:p-10 w-full md:w-2/3 mx-auto">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
          placeholder="Answer here"
          className="border-2 border-red-500 rounded-md w-full h-14 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={handleClick}
          disabled={countdown > 0}
          className={`mt-6 px-6 py-3 rounded-lg font-bold transition 
                 ${countdown > 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"}`}
        >
          {countdown > 0 ? "⏳ অপেক্ষা করুন..." : "🚀 Submit"}
        </button>

        {/* Progress Bar */}
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
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            {reward > 0 ? (
              <p className="text-lg font-bold text-green-600 mb-4">
                🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600 mb-4">
                😔 দুঃখিত, উত্তর ভুল হয়েছে।
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

export default Math;
