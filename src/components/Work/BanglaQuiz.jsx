import React, { useEffect, useState } from "react";
import axios from "axios";

const BanglaQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState(""); // নির্বাচিত option
  const [reward, setReward] = useState(0);

  const token = localStorage.getItem("authToken");

  // ✅ প্রশ্ন লোড
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch("https://aktarul.onrender.com/bangla/allBanglaQuiz");
        const data = await res.json();
        if (data.success) {
          setQuiz(data.questions);
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuiz();
  }, []);

  // ✅ কাউন্টডাউন
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // ✅ Submit
  const handleClick = () => {
    if (userAnswer === "") {
      alert("একটি অপশন সিলেক্ট করুন!");
      return;
    }

    setCountdown(30);

    setTimeout(() => {
      const correctAnswer = quiz[currentIndex]?.answer;
      if (userAnswer === correctAnswer) {
        setReward(quiz[currentIndex]?.reward || 0.2);
      } else {
        setReward(0);
      }
      setShowModal(true);
    }, 30000);
  };

  // ✅ ব্যালেন্স আপডেট
  const updateBalance = () => {
    setShowModal(false);
    if (reward > 0) {
      axios
        .put(
          "https://aktarul.onrender.com/reward/balance",
          { amount: parseFloat(reward) },
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

    if (currentIndex < quiz.length - 1) {
      setAnsweredCount(answeredCount + 1);
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");  
    } else {
      alert("🎉 সব প্রশ্ন শেষ!");
      setAnsweredCount(0); // 🔄 সব শেষ হলে আবার 0 করে দিলাম
    }
  };

  // ✅ progress bar
  const progressPercent = ((30 - countdown) / 30) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* progress */}
      <div className="flex justify-center mt-5">
        <div className="flex space-x-2 items-center bg-white rounded-2xl shadow-md w-28 justify-center p-3 hover:shadow-xl transition">
          <p className="font-bold text-lg">{answeredCount === quiz.length ? 0 : answeredCount}</p>
          <span>/</span>
          <p className="font-bold text-lg">{quiz.length}</p>
        </div>
      </div>

      {/* নির্দেশনা */}
      <div className="p-6 mt-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-700">
          প্রথমে 30 সেকেন্ড অপেক্ষা করে এডটি দেখুন।
          তারপর কালক্ট করার পর ৬০ সেকেন্ড অপেক্ষা করে এডটি দেখুন।
          শুধুমাত্র যখন লাষ্টের কাজ করবেন তখন এডে ক্লিক করে একটি অ্যাপ ডাউনলোড করে অপেক্ষা করুন এবং
          ১২ ঘন্টা মোবাইল ফোনে রেখে দিন। তারপর আপনার টাকা যোগ হবে।
          ৪ ঘন্টা পর আবার চালু হবে।
          সঠিক নিয়ম মেনে কাজ করলে পেমেন্ট পাবেন। ধন্যবাদ।
        </p>
      </div>

      {/* প্রশ্ন */}
      {quiz.length > 0 ? (
        <div className="flex flex-col items-center mt-8 bg-blue-500 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-white mb-4">
            {quiz[currentIndex]?.text}
          </h2>

          {/* Options */}
          <div className="flex flex-col space-y-3 w-full">
            {quiz[currentIndex]?.options?.map((opt, idx) => (
              <label
                key={idx}
                className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition ${userAnswer === opt ? "bg-green-100 border-green-500" : "bg-white border-gray-300"
                  }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={opt}
                  checked={userAnswer === opt}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-5 h-5 text-blue-500"
                />
                <span className="text-gray-800">{opt}</span>
              </label>
            ))}
          </div>

          {/* Submit */}
          <button
            onClick={handleClick}
            disabled={countdown > 0}
            className={`mt-6 px-6 py-3 rounded-lg font-bold transition 
                 ${countdown > 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {countdown > 0 ? "⏳ অপেক্ষা করুন..." : "🚀 Submit"}
          </button>

          {/* Progress bar */}
          {countdown > 0 && (
            <div className="w-64 mt-6">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-green-500 h-4 transition-all duration-1000"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="mt-2 text-center font-semibold text-yellow-200">
                {countdown} সেকেন্ড অপেক্ষা করুন...
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-600">লোড হচ্ছে...</p>
      )}

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

export default BanglaQuiz;
