import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [withdraws, setWithdraws] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get("https://aktarul.onrender.com/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);

        const withdrawRes = await axios.get("https://aktarul.onrender.com/withdraw/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWithdraws(withdrawRes.data);
      } catch (err) {
        console.error("Error fetching profile or withdraws:", err);
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center mb-6">
        <img
          src={user.photo}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-gray-700 font-medium">Balance:</span>
            <span className="text-green-600 font-bold">
              {(user.balance / 100).toFixed(2)} টাকা
            </span>
          </div>
          <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-lg">
            <span className="text-gray-700 font-medium">Refer Code:</span>
            <span className="text-blue-600 font-bold">{user.referCode}</span>
          </div>
        </div>
      </div>

      {/* Withdraw History */}
      <div className="w-full max-w-3xl space-y-4">
        {withdraws.length > 0 ? withdraws.map((w) => (
          <div
            key={w._id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          >
            <div>
              <span className="block text-sm text-gray-500">Method</span>
              <span className="font-medium">{w.method}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Phone</span>
              <span className="font-medium">{w.phone}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Amount</span>
              <span className="font-medium">{(w.amount / 100).toFixed(2)} টাকা</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Status</span>
              <span className={`font-medium ${w.status === "approved" ? "text-green-600" : w.status === "rejected" ? "text-red-600" : "text-yellow-500"}`}>
                {w.status}
              </span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Date</span>
              <span className="font-medium">{new Date(w.createdAt).toLocaleString()}</span>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500">No withdraw history available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
