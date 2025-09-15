import axios from "axios";
import React, { useEffect, useState } from "react";
import wuthdro from "../../assets/withdro.png"
import { motion } from "framer-motion";

const Withdrow = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");

  const MIN_MOBILE = 20;
  const MIN_BKASH = 300;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("https://aktarul.onrender.com/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
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

  const handleWithdraw = async () => {
    if (!user) return;
    if (!method) {
      setMessage("⚠️ প্রথমে পদ্ধতি নির্বাচন করুন");
      return;
    }
    if (!phone) {
      setMessage("⚠️ নাম্বার দিন");
      return;
    }
    if (!amount || isNaN(amount)) {
      setMessage("⚠️ সঠিক পরিমাণ লিখুন");
      return;
    }

    let minAmount = method === "mobile" ? MIN_MOBILE : MIN_BKASH;
    if (amount < minAmount) {
      setMessage(
        `${method === "mobile" ? "Mobile recharge" : "Bkash"} এর জন্য ন্যূনতম ${minAmount} টাকা দরকার`
      );
      return;
    }

    if (amount > user.balance) {
      setMessage("⚠️ আপনার ব্যালেন্সের চেয়ে বেশি টাকা তোলা যাবে না");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await axios.post(
        "https://aktarul.onrender.com/withdraw",
        { method, phone, amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("✅ আপনার অনুরোধ গ্রহণ করা হয়েছে!");
    } catch (err) {
      console.error("Withdraw error:", err);
      setMessage("❌ কিছু সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center gap-2 text-xl font-semibold mb-4">
        <img src={wuthdro} className="w-16 h-16" alt="" />
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
            {user ? (user.balance / 100).toFixed(2) : "0.00"} টাকা
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          টাকা নেয়ার পদ্ধতি নির্বাচন করুন
        </p>

        <div className="mt-5 grid gap-3">
          <button
            onClick={() => setMethod("mobile")}
            className={`p-3 rounded-xl w-full text-left ${method === "mobile" ? "bg-green-200" : "bg-green-100 hover:bg-green-200"
              }`}
          >
            📱 মোবাইল রিচার্জ (ন্যূনতম {MIN_MOBILE} টাকা)
          </button>

          <button
            onClick={() => setMethod("bkash")}
            className={`p-3 rounded-xl w-full text-left ${method === "bkash" ? "bg-pink-200" : "bg-pink-100 hover:bg-pink-200"
              }`}
          >
            💸 বিকাশ ট্রান্সফার (ন্যূনতম {MIN_BKASH} টাকা)
          </button>
        </div>

        {/* নাম্বার ইনপুট */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {method === "bkash" ? "বিকাশ নাম্বার দিন" : "মোবাইল নাম্বার দিন"}
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="01XXXXXXXXX"
          />
        </div>

        {/* টাকা ইনপুট */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            কত টাকা তুলতে চান
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="উদাহরণ: ৫০"
          />
        </div>

        {/* সাবমিট বাটন */}
        <button
          onClick={handleWithdraw}
          disabled={loading}
          className="mt-5 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl font-medium"
        >
          {loading ? "প্রসেসিং..." : "Withdraw করুন"}
        </button>

        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      </motion.div>
    </div>
  );
};

export default Withdrow;
