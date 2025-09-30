import React, { useState, useEffect } from "react";
import ads from "../../assets/ads.jpg";
import { useNavigate } from "react-router-dom";

const PopularArticle = () => {
  const [article, setArticle] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const reward = 0.20;
  const navigate = useNavigate();

  const articlesPerPage = 3;

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://aktarul.onrender.com/article/allarticle");
        const data = await res.json();
        if (data.success) setArticle(data.article);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };
    fetchArticles();
  }, []);

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = article.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(article.length / articlesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleReadMore = (index) => {
    const articleItem = article[indexOfFirstArticle + index];
    if (!articleItem) return;

    // sessionStorage check
    const calledArticles = JSON.parse(sessionStorage.getItem("calledArticles") || "[]");
    if (!calledArticles.includes(articleItem._id)) {
      sessionStorage.setItem(
        "calledArticles",
        JSON.stringify([...calledArticles, articleItem._id])
      );

      // Action count update
      const currentCount = parseInt(sessionStorage.getItem("actionCount") || "0");
      const newCount = currentCount + 1;
      sessionStorage.setItem("actionCount", newCount);

      // 10 action হলে মডাল দেখানো
      if (newCount >= 10) setShowModal(true);
    }

    setSelectedIndex(indexOfFirstArticle + index);
    navigate(`article/${indexOfFirstArticle + index}`, { state: { article: articleItem } });
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Reset action count
    sessionStorage.setItem("actionCount", 0);
  };

  return (
    <div className="bg-gray-100 px-4">
      <h2 className="text-[16px] font-bold mb-8">📂 Latest Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {currentArticles.map((item, index) => (
          <div
            key={index}
            className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={ads} alt="ads" className="w-32 h-32 object-cover" />
            <div className="p-1">
              <h2 className="text-[15px] mb-2">{item.Title}</h2>
              <p className="text-sm text-gray-700">
                {item.Description.substring(0, 50) + "..."}
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

      {/* Pagination */}
      {article.length > articlesPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            ◀ Previous
          </button>

          <span className="px-4 py-2 font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next ▶
          </button>
        </div>
      )}

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
              onClick={handleModalClose}
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
