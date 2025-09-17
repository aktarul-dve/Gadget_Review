import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState(null);

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

  return (
    <section className="w-full h-auto bg-gradient-to-br from-rose-200 to-cyan-50 p-3">
      <div className="container bg-white rounded-lg shadow-lg mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          {/* User Info */}
          <div>
            <CgProfile className="w-10 h-10 text-gray-700" />
            <p className="font-semibold text-lg text-gray-800">
              {user ? user.name : "Loading..."}
            </p>
            <p className="text-gray-600 text-sm">{user ? user.email : ""}</p>
            <div className="mt-2">
              <p className="text-gray-700 font-medium">
                Refer Code:{" "}
                <span className="text-blue-600 font-bold">
                  {user ? user.referCode : ""}
                </span>
              </p>
            </div>
          </div>

          {/* মোট আয় Card */}
          <div className="flex flex-col items-center">
            <p className="text-gray-600 font-medium mb-2">মোট আয়</p>
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-white to-emerald-600 shadow-lg flex items-center justify-center">
              <p className="text-white text-xl font-bold">
                {user ? (user.balance / 100).toFixed(2) : "0.00"} <span className="text-sm">BDT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
