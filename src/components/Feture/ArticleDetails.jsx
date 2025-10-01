import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ads from "../../assets/ads.jpg";


const ArticleDetails = () => {
  const { state } = useLocation();
  const [article, setArticle] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  // Fetch articles
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

  // Read more / action count logic
  const toggleReadMore = (index) => {
    const articleItem = article[index];
    // navigate করার সময়
    navigate(`/userLayout/article/${articleItem._id}`, { state: { article: articleItem } });

  };

  // See More / Show Less
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, article.length));
  };
  const handleShowLess = () => {
    setVisibleCount(10);
  };

  if (!state?.article) {
    return <p>❌ Article not found</p>;
  }

  const { Title, Description, photo } = state.article;

  return (
    <div className="p-2 max-w-3xl mx-auto bg-white ">
      <img src={photo?.url} alt="photo" className="w-full h-52" />
      <h1 className="text-2xl font-bold mb-4">{Title}</h1>
      <p className="text-gray-700">{Description}</p>
      <h1 className="font-bold mt-5 mb-5">Releted Aritcle & Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {article.slice(0, visibleCount).map((item, index) => (
          <div
            key={item._id}
            className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={item?.photo?.url || ads} alt="ads" className="w-32 h-32 object-cover" />
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

      {/* Load More / Show Less button */}
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




    </div>
  );
};

export default ArticleDetails;
