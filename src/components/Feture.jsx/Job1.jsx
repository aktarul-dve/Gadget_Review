import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import math from "../../assets/math.jpg";
import spin from "../../assets/spin.jpg";
import ads from "../../assets/ads.jpg";

Modal.setAppElement("#root"); // Modal warning fix

const Job1 = () => {
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  const mathClick = () => {
       setDialogText("👉 নিয়ম মেনে কাজ করুন তাহলে পেমেন্ট পাবেন। আর যদি নিয়ম মেনে কাজ না করেন তাহলে আপনার একাউন্ট ব্লক করা হবে");
       setIsOpen(true);
  };

    const Spin = () => {
      navigate("SpinWheel")
    
     
  };

  const AdsClick =() => {
    navigate("ads")
  }

  const closeModal = () =>{
    setIsOpen(false);
    navigate("math")
  } 

  return (
    <div className="w-full bg-gray-100 p-4">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-3">আমার কাজ</h2>

      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div
          onClick={Spin}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={spin} alt="Spin & Earn" className="w-20 h-20 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">
            স্পিন করে টাকা
          </p>
        </div>

        {/* Card 2 */}
        <div
          onClick={mathClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={math} alt="Math & Earn" className="w-20 h-20 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">
            অংক করে টাকা
          </p>
        </div>

        {/* Card 3 */}
        <div
          onClick={AdsClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={ads} alt="Watch Ads & Earn" className="w-20 h-20 object-cover mb-3" />
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
