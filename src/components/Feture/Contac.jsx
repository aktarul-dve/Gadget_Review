import React, { useState } from "react";
import Modal from "react-modal";
import withdrow from "../../assets/withdro.png";
import refericon from "../../assets/refer.png";
import telegram from "../../assets/telegram.png";
import { useNavigate } from "react-router-dom";


const Contac = () => {

    const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
    const [dialogText, setDialogText] = useState("");
  
    const refer = (type) => {
      navigate("refer")
        
    };
    const withdrowhandl = (type) => {
      
        navigate("withdrow")
    };
    const telegramhandl = (type) => {
      
        navigate("withdrow")
    };
  
    const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full bg-gray-100 p-4">
      <p className="text-center text-xl font-bold text-gray-700 mb-3">আমার টাকা</p>
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
        
        {/* Card 1 */}
        <div
         onClick={refer}
          className="bg-white flex flex-col rounded-2xl shadow-lg p-3  items-center hover:scale-105 transition-transform">
          <img
            src={refericon}
            alt="Rule 1"
            className="w-20 h-20 object-cover mb-3"
          />
         
            <p className=" text-sm font-medium text-gray-700">রেফার করুন</p>
          
        </div>

        {/* Card 2 */}
        <div
         onClick={withdrowhandl}
        className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center hover:scale-105 transition-transform">
          <img
            src={withdrow}
            alt="Rule 2"
            className="w-20 h-20 object-cover mb-3"
          />
      
            <p className="text-sm font-medium text-gray-700">টাকা উথড্র</p>
          
        </div>

        {/* Card 3 */}
        <div
         onClick={telegramhandl}
        className="bg-white flex flex-col rounded-2xl shadow-lg p-3 items-center  hover:scale-105 transition-transform">
          <img
            src={telegram}
            alt="Rule 3"
            className="w-20 h-20 object-cover mb-3"
          />
         
            <p className=" text-sm font-medium text-gray-700">জয়েন করুন</p>
         
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

export default Contac;
