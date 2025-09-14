import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import Modal from "react-modal";
import anows from "../../assets/anows.png";
import vpn from "../../assets/vpn.png";
import lederbord from "../../assets/lederbord.png";

const Work_regulations = () => {


  const [isOpen, setIsOpen] = useState(false);
    const [dialogText, setDialogText] = useState("");

    const handleCardClick = () => {
    
      setDialogText("👉 বন্ধু এখনো সব কাজ করা শেষ হয় নাই।");
    
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  
  return (
    <div className="w-full bg-gray-100 p-2">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-3
       bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
           bg-clip-text text-transparent 
           drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
           transition-transform duration-300 
           hover:scale-110 hover:rotate-3
           cursor-pointer
      ">
        কাজের নিয়মাবলী
      </h2>

      <div className="container bg-white rounded-2xl shadow-lime-50 p-3 mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        
        {/* Card 1 */}
        <div
         onClick={handleCardClick}
         className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform">
          <img
            src={anows}
            alt="Work Rule 1"
            className="w-10 h-10 object-contain mb-3"
          />
          <p className="text-gray-700 text-sm text-center font-medium">কাজের নিয়ম</p>
        </div>

        {/* Card 2 */}
        <div
          onClick={handleCardClick}
         className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center  items-center hover:scale-105 transition-transform">
          <img
            src={vpn}
            alt="Work Rule 2"
            className="w-10 h-10 object-contain mb-3"
          />
          <p className="text-gray-700 text-sm text-center font-medium">VPN কানেক্ট</p>
        </div>

        {/* Card 3 */}
        <div 
          onClick={handleCardClick}
        className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center  items-center hover:scale-105 transition-transform">
          <img
            src={lederbord}
            alt="Work Rule 2"
            className="w-10 h-10 object-contain mb-3"
          />
          <p className="text-gray-700 text-sm text-center font-medium">লিডার বোর্ড</p>
        </div>
      </div>

      {/* React Modal */}
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  width: "200px",
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
              <h3 className="text-lg font-bold mb-3">বিস্তারিত</h3>
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

export default Work_regulations;
