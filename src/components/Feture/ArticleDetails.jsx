import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const ArticleDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    if (!state?.article) return;

    // ২০ সেকেন্ড পর unblock করবে
    const timer = setTimeout(() => setBlocked(false), 10000);

    // Browser back/refresh block
    const handleBeforeUnload = (e) => {
      if (blocked) {
        e.preventDefault();
        e.returnValue = ""; // Chrome এ alert দেখানোর জন্য
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [blocked, state]);

  useEffect(() => {
    if (!state?.article) return;

    // React Router route change block
    const unblock = navigate.block((tx) => {
      if (blocked) {
        alert("⏳ ২০ সেকেন্ড শেষ হওয়ার আগে আপনি যেতে পারবেন না!");
      } else {
        unblock(); // unblock করার পরে normal navigation
        tx.retry();
      }
    });

    return () => unblock();
  }, [blocked, navigate, state]);

  if (!state?.article) {
    return <p>❌ Article not found</p>;
  }

  const { Title, Description } = state.article;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{Title}</h1>
      <p className="text-gray-700">{Description}</p>
      {blocked && <p className="mt-4 text-red-500 font-semibold">⏳ ২০ সেকেন্ড অপেক্ষা করুন</p>}
    </div>
  );
};

export default ArticleDetails;
