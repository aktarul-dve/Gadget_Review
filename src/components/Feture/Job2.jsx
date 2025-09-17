import React, { useState } from "react";
import Modal from "react-modal";
import quiz from "../../assets/quiz.jpg";
import { useNavigate } from "react-router-dom";
import bangla from "../../assets/bangla.png";
import en from "../../assets/english.jpg";
import { useEffect } from "react";

Modal.setAppElement("#root"); // Modal warning fix

const Job2 = () => {

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
      setDialogText("❌ আগে VPN কানেক্ট করুন (USA server সিলেক্ট করুন).");
      setIsOpen(true);
      return;
    }
    action();
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
       
      </div>
    );
  }


  return (
    <div className="w-full bg-gray-100 ">


      <div className="container bg-white rounded-lg shadow-lime-50 p-3 mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div
          onClick={() => requireVPN(() => navigate("banglaQuiz"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={bangla} alt="বাংলা কুইজ"
           className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm font-medium text-gray-700">বাংলা কুইজ</p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => requireVPN(() => navigate("mathQuiz"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={quiz} alt="অংক কুইজ"
           className="w-10 h-10 object-cover mb-3" />
          <p className="text-sm font-medium text-gray-700">অংক কুইজ</p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => requireVPN(() => navigate("englishQuiz"))}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3 justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={en} alt="ইংলিশ কুইজ"
           className="w-10 h-10 object-cover mb-3" />
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
