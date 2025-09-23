import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state?.article) {
    return <p>❌ Article not found</p>;
  }

  const { Title, Description } = state.article;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{Title}</h1>
      <p className="text-gray-700">{Description}</p>
    </div>
  );
};

export default ArticleDetails;
