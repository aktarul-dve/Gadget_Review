import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcHome } from "react-icons/fc";
import { motion } from "framer-motion";

const Withdrow = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const MIN_MOBILE = 20;
  const MIN_BKASH = 300;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("https://aktarul.onrender.com/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // Token পাঠানো হচ্ছে
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("User fetch error:", err);
        });
    }
  }, []);

  const handleWithdraw = async (method) => {
    if (!user) return;

    let minAmount = method === "mobile" ? MIN_MOBILE : MIN_BKASH;
    if (user.balance < minAmount) {
      setMessage(
        `${method === "mobile" ? "Mobile recharge" : "Bkash"} এর জন্য ন্যূনতম ${
          minAmount
        } টাকা দরকার`
      );
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // এখানে API কল করতে পারেন
      await axios.post("https://aktarul.onrender.com/withdraw", {
        method,
        amount: minAmount,
      });

      setMessage("✅ আপনার অনুরোধ গ্রহণ করা হয়েছে!");
    } catch (err) {
      console.error("Withdraw error:", err);
      setMessage("❌ কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center gap-2 text-xl font-semibold mb-4">
        <FcHome />
        <span>Withdraw</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-md rounded-2xl p-5"
      >
        <h2 className="text-lg font-medium">
          আপনার ব্যালেন্স:{" "}
          <span className="text-indigo-600 font-bold">
            {user ? user.balance.toFixed(2) : "0.00"} টাকা
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          টাকা নেয়ার পদ্ধতি নির্বাচন করুন
        </p>

        <div className="mt-5 grid gap-3">
          {/* Mobile recharge */}
          <button
            onClick={() => handleWithdraw("mobile")}
            disabled={!user || user.balance < MIN_MOBILE || loading}
            className={`p-3 rounded-xl w-full text-left ${
              user && user.balance >= MIN_MOBILE
                ? "bg-green-100 hover:bg-green-200"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          >
            📱 মোবাইল রিচার্জ (ন্যূনতম {MIN_MOBILE} টাকা)
          </button>

          {/* Bkash transfer */}
          <button
            onClick={() => handleWithdraw("bkash")}
            disabled={!user || user.balance < MIN_BKASH || loading}
            className={`p-3 rounded-xl w-full text-left ${
              user && user.balance >= MIN_BKASH
                ? "bg-pink-100 hover:bg-pink-200"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          >
            💸 বিকাশ ট্রান্সফার (ন্যূনতম {MIN_BKASH} টাকা)
          </button>
        </div>

        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      </motion.div>
    </div>
  );
};

export default Withdrow;
