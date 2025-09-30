import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Custom hook: route navigation block
function useBlockNavigation(when, message) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!when) return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = message; // Chrome এ alert দেখানোর জন্য
    };

    const handleRouteChange = (e) => {
      if (when) {
        if (!window.confirm(message)) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [when, message]);
}

const ArticleDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [blocked, setBlocked] = useState(true);

  // ২০ সেকেন্ড পর unblock
  useEffect(() => {
    const timer = setTimeout(() => setBlocked(false), 20000); // 20 seconds
    return () => clearTimeout(timer);
  }, []);

  // navigation block during blocked state
  useBlockNavigation(blocked, "⏳ ২০ সেকেন্ড শেষ হওয়ার আগে আপনি যেতে পারবেন না!");

  if (!state?.article) {
    return <p>❌ Article not found</p>;
  }

  const { Title, Description } = state.article;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{Title}</h1>
      <p className="text-gray-700">{Description}</p>
      {blocked && (
        <p className="mt-4 text-red-500 font-semibold">
          ⏳ ২০ সেকেন্ড অপেক্ষা করুন
        </p>
      )}
    </div>
  );
};

export default ArticleDetails;
