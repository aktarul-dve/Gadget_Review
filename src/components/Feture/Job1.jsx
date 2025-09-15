import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios"; // ✅ axios import
import math from "../../assets/math.jpg";
import spin from "../../assets/spin.jpg";
import ads from "../../assets/ads.jpg";

Modal.setAppElement("#root");

const Job1 = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  // ✅ Backend Call Function
  const handleJob = async (jobType, action) => {
    try {
      const res = await axios.get(`http://localhost:4001/api/job/${jobType}`);

      if (res.data.success) {
        action(); // যদি success হয় তবে কাজ চালু হবে
      }
    } catch (err) {
      // Backend থেকে error এলে modal এ দেখাবে
      setDialogText(err.response?.data?.message || "কিছু সমস্যা হয়েছে");
      setIsOpen(true);
    }
  };

  const mathClick = () => {
    handleJob("math", () => {
      setDialogText(
        "👉 নিয়ম মেনে কাজ করুন তাহলে পেমেন্ট পাবেন। আর যদি নিয়ম মেনে কাজ না করেন তাহলে আপনার একাউন্ট ব্লক করা হবে"
      );
      setIsOpen(true);
    });
  };

  const Spin = () => {
    handleJob("spin", () => navigate("SpinWheel"));
  };

  const AdsClick = () => {
    handleJob("ads", () => navigate("ads"));
  };

  const closeModal = () => {
    setIsOpen(false);
    if (dialogText.includes("নিয়ম মেনে কাজ")) {
      navigate("math");
    }
  };

  return (
    <div className="w-full bg-gray-100 ">
      <div className="bg-red-500 w-full h-1 mb-1"></div>

      <div className="container bg-white rounded-lg shadow-lime-50 p-3 mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div
          onClick={Spin}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={spin} alt="Spin & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">
            স্পিন করে টাকা
          </p>
        </div>

        {/* Card 2 */}
        <div
          onClick={mathClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={math} alt="Math & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">
            অংক করে টাকা
          </p>
        </div>

        {/* Card 3 */}
        <div
          onClick={AdsClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={ads} alt="Watch Ads & Earn" className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">
            অ্যাড দেখে টাকা
          </p>
        </div>
      </div>

      {/* React Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "250px",
            height: "350px",
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
