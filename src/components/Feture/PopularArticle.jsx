import React, { useState, useEffect } from "react";
import ads from "../../assets/ads.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PopularArticle = () => {
  const [article, setArticle] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const reward = 0.20;
  const navigate = useNavigate();

  // ✅ Article fetch
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://aktarul.onrender.com/article/allarticle");
        const data = await res.json();
        if (data.success) setArticle(data.article);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArticles();
  }, []);

  // ✅ Interstitial Ad function
  const showInterstitialAd = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.dataset.zone = "9957899"; // আপনার ad zone id
      script.src = "https://groleegni.net/vignette.min.js";

      script.onload = () => {
        console.log("✅ Interstitial Ad Loaded");
        // ২ সেকেন্ড delay দিয়ে navigate করাবো যেন এড miss না হয়
        setTimeout(() => resolve(true), 2000);
      };

      script.onerror = () => {
        console.warn("⚠️ Ad Load Failed");
        resolve(true); // এড লোড না হলেও navigate চলবে
      };

      document.body.appendChild(script);
    });
  };

  // ✅ Read More / Action count
  const toggleReadMore = async (index) => {
    const articleItem = article[index];
    if (!articleItem) return;

    // --- প্রথমে এড show হবে
    await showInterstitialAd();

    let calledArticles = JSON.parse(sessionStorage.getItem("calledArticles") || "[]");

    if (!calledArticles.includes(articleItem._id)) {
      calledArticles.push(articleItem._id);
      sessionStorage.setItem("calledArticles", JSON.stringify(calledArticles));

      let currentCount = Number(sessionStorage.getItem("actionCount") || 0);
      currentCount += 1;
      sessionStorage.setItem("actionCount", currentCount);

      window.dispatchEvent(new Event("actionCountUpdate"));

      if (currentCount >= 10) {
        setShowModal(true);
        setSelectedIndex(index);
        return;
      }
    }

    setSelectedIndex(index);
   setTimeout(() => {
  navigate(`/userLayout/article/${articleItem._id}`, { state: { article: articleItem } });
}, 100000);
  };

  // ✅ Balance Update
  const updateBalance = () => {
    const token = localStorage.getItem("authToken");
    if (reward > 0) {
      axios.put(
        "https://aktarul.onrender.com/reward/balance",
        { amount: parseFloat(reward) },
        { headers: { Authorization: `Bearer ${token}` } }
      )
        .then((res) => {
          alert(`✅ New Balance: ৳${res.data.balance}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleModalClose = () => {
    updateBalance();
    setShowModal(false);

    // Reset
    sessionStorage.setItem("actionCount", 0);
    sessionStorage.setItem("calledArticles", "[]");
    window.dispatchEvent(new Event("actionCountUpdate"));

    if (selectedIndex !== null) {
      navigate(`/userLayout/article/${article[selectedIndex]._id}`, {
        state: { article: article[selectedIndex] }
      });
    }
  };

  // ✅ See More / Show Less
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, article.length));
  };
  const handleShowLess = () => {
    setVisibleCount(10);
  };

  return (
    <div className="bg-gray-100 ">
      <h2 className="text-[16px] font-bold mb-8">📂 Latest Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {article.slice(0, visibleCount).map((item, index) => (
          <div
            key={item._id}
            className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="w-32 h-32 overflow-hidden rounded flex justify-center items-center">
              <img
                src={item?.photo?.url || ads}
                alt="ads"
                className="object-cover"
              />
            </div>

            <div className="p-1 ml-2">
              <h2 className="text-[17px] mb-2">{item.Title}</h2>
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

      {/* Load More / Show Less */}
      {article.length > 10 && (
        <div className="flex justify-center mt-6 gap-4">
          {visibleCount < article.length && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              See More
            </button>
          )}
          {visibleCount > 10 && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}

      {/* Reward Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            <p className="text-lg font-bold text-green-600 mb-4">
              🎉 অভিনন্দন! আপনি {reward.toFixed(2)} টাকা পেয়েছেন!
            </p>
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
