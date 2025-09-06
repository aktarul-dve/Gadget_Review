import React, { useState } from "react";
import Modal from "react-modal";
import quiz from "../../assets/quiz.jpg";
import bangla from "../../assets/bangla.png";
import en from "../../assets/english.jpg";

Modal.setAppElement("#root"); // Modal warning fix

const Job2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  const handleCardClick = (type) => {
   
      setDialogText("👉 বন্ধু এখনো সব কাজ করা শেষ হয় নাই।");
   
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full bg-gray-100 p-4">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-3">কুইজ জব</h2>

      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div
           onClick={handleCardClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={bangla} alt="বাংলা কুইজ" className="w-20 h-20 object-cover mb-3" />
          <p className="text-sm font-medium text-gray-700">বাংলা কুইজ</p>
        </div>

        {/* Card 2 */}
        <div
           onClick={handleCardClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={quiz} alt="অংক কুইজ" className="w-20 h-20 object-cover mb-3" />
          <p className="text-sm font-medium text-gray-700">অংক কুইজ</p>
        </div>

        {/* Card 3 */}
        <div
          onClick={handleCardClick}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={en} alt="ইংলিশ কুইজ" className="w-20 h-20 object-cover mb-3" />
          <p className="text-sm text-center font-medium text-gray-700">ইংলিশ কুইজ</p>
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

export default Job2;
