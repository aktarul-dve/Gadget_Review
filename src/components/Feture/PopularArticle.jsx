import React, { useState } from "react";
import ads from "../../assets/ads.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PopularArticle = () => {

  const [article, setArticle] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // ✅ ক্লিক করা article index
  const reward =50;
  const navigate = useNavigate();

  // ✅ MongoDB থেকে প্রশ্ন আনা
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const res = await fetch("https://aktarul.onrender.com/article/allarticle");
          const data = await res.json();
          if (data.success) {
            setArticle(data.articles);
          }
        } catch (err) {
          console.error("Error fetching questions:", err);
        }
      };
  
      fetchQuestions();
    }, []);

  const toggleReadMore = async (index) => {
    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch("https://aktarul.onrender.com/action/count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log("data", data);

      setSelectedIndex(index); // ✅ ক্লিক করা index স্টোর করা হলো

      if (data.rewardTriggered) {
        setShowModal(true);
      } else {
        navigate(`article/${index}`, { state: { article: Article[index] } });
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="bg-gray-100 px-4">
      <h2 className="text-[16px] font-bold mb-8">📂 Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {article.map((item, index) => (
          <div
            key={index}
            className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={ads} alt="ads" className="w-32 h-32 object-cover" />
            <div className="p-1">
              <h2 className="text-[15px] mb-2">{item.Title}</h2>
              <p className="text-sm text-gray-700">
                {item.Description.substring(0, 80) + "..."}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-600 mt-2 text-sm font-medium hover:underline"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reward Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            {reward > 0 ? (
              <p className="text-lg font-bold text-green-600 mb-4">
                🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600 mb-4">
                😔 দুঃখিত, আবার চেষ্টা করুন।
              </p>
            )}
            <button
              onClick={() => {
                setShowModal(false);
                if (selectedIndex !== null) {
                  navigate(`article/${selectedIndex}`, {
                    state: { article: Article[selectedIndex] },
                  });
                }
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              গ্রহণ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularArticle;
