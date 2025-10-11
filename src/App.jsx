import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import UserLayout from "./components/Layout/UserLayout";

// Pages
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage";

// Work Components
import Math from "./components/Work/Math";
import Watch_Ads from "./components/Work/Watch_Ads";
import Refer from "./components/Work/Refer";
import Withdrow from "./components/Work/Withdrow";
import SpinWheel from "./components/Work/SpinWheel ";
import BanglaQuiz from "./components/Work/BanglaQuiz";
import MathQuiz from "./components/Work/MathQuiz";
import EnglishQuiz from "./components/Work/EnglishQuiz";
import Profile from "./components/Work/Profile";

// Feature Components
import ArticleDetails from "./components/Feture/ArticleDetails";
import PrivacyPolicy from "./components/Feture/PrivacyPolicy";
import TermsCondition from "./components/Feture/Terms & Conditions";
import Disclaimer from "./components/Feture/Disclaimer";

function App() {
  useEffect(() => {
    // Telegram WebApp API setup
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand(); // Full screen in Telegram WebView
    }
  }, []);

  // Optional: show Telegram username (for testing)
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <Router>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
        }}
      >
        {user && (
          <p style={{ fontWeight: "bold", color: "#333" }}>
            👋 Welcome, {user.first_name}!
          </p>
        )}

        <Routes>
          {/* Login Page */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected Routes inside UserLayout */}
          <Route path="/userLayout" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="math" element={<Math />} />
            <Route path="ads" element={<Watch_Ads />} />
            <Route path="spinWheel" element={<SpinWheel />} />
            <Route path="banglaQuiz" element={<BanglaQuiz />} />
            <Route path="mathQuiz" element={<MathQuiz />} />
            <Route path="englishQuiz" element={<EnglishQuiz />} />
            <Route path="refer" element={<Refer />} />
            <Route path="withdrow" element={<Withdrow />} />
            <Route path="profile" element={<Profile />} />
            <Route path="article/:id" element={<ArticleDetails />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="termsCondition" element={<TermsCondition />} />
            <Route path="disclaimer" element={<Disclaimer />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
