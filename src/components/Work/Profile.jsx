import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ API থেকে ইউজার ডাটা ফেচ করা
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken"); // যদি JWT token থাকে
        const res = await axios.get("https://aktarul.onrender.com/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // অথেন্টিকেশন টোকেন পাঠানো
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">No user data found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        {/* Profile Photo */}
        <img
          src={user.photo}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />

        {/* Name */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          {user ? user.name : "Loading..."}
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-sm">{user ? user.email : ""}</p>

        <div className="mt-6 space-y-3">
          {/* Balance */}
          <div className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-gray-700 font-medium">Balance:</span>
            <span className="text-green-600 font-bold">
              {user ? (user.balance / 100).toFixed(2) : "0.00"} টাকা
            </span>
          </div>

          {/* Refer Code */}
          <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-lg">
            <span className="text-gray-700 font-medium">Refer Code:</span>
            <span className="text-blue-600 font-bold">{user ? user.referCode : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
