import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import math from "../../assets/math.jpg";
import spin from "../../assets/spin.jpg";
import ads from "../../assets/ads.jpg";

Modal.setAppElement("#root");

const Job1 = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");
  const [isUSA, setIsUSA] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Country Check
  useEffect(() => {
    const checkCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data.country_name === "United States") {
          setIsUSA(true);
        } else {
          setIsUSA(false);
        }
      } catch (err) {
        console.error("Country check error:", err);
      } finally {
        setLoading(false);
      }
    };

    checkCountry();
  }, []);

  const closeModal = () => setIsOpen(false);

  // ✅ VPN চেক
  const requireVPN = (action) => {
    if (!isUSA) {
      setDialogText("❌ আগে VPN কানেক্ট করুন (USA server).");
      setIsOpen(true);
      return;
    }
    action();
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <p className="text-gray-600">🌍 Country যাচাই করা হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100">
      <div className="bg-red-500 w-full h-1 mb-1"></div>

      <div className="container bg-white rounded-lg shadow p-3 mx-auto grid grid-cols-3 gap-2">
        {/* Spin */}
        <div
          onClick={() => requireVPN(() => navigate("SpinWheel"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center transition-transform cursor-pointer hover:scale-105"
        >
          <img src={spin} alt="Spin & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">স্পিন করে টাকা</p>
        </div>

        {/* Math */}
        <div
          onClick={() => requireVPN(() => navigate("math"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center transition-transform cursor-pointer hover:scale-105"
        >
          <img src={math} alt="Math & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">অংক করে টাকা</p>
        </div>

        {/* Ads */}
        <div
          onClick={() => requireVPN(() => navigate("ads"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center transition-transform cursor-pointer hover:scale-105"
        >
          <img src={ads} alt="Watch Ads & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">অ্যাড দেখে টাকা</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "280px",
            height: "200px",
            margin: "auto",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <p className="text-gray-700 mb-5">{dialogText}</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          বন্ধ করুন
        </button>
      </Modal>
    </div>
  );
};

export default Job1;
