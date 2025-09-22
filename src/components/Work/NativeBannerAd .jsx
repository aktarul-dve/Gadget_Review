import React, { useEffect } from "react";

const NativeBannerAd = () => {
  useEffect(() => {
    // Monetag Native Banner script inject
    const script = document.createElement("script");
    script.src = "https://groleegni.net/native.min.js";
    script.dataset.zone = "9912864"; // আপনার Native Banner Zone ID
    script.async = true;

    const container = document.getElementById("monetag-banner");
    if (container) container.appendChild(script);
  }, []);

  return (
    <div id="monetag-banner" style={{ width: "100%", minHeight: "120px", margin: "20px 0" }}>
      {/* Monetag Native Banner এখানে render হবে */}
    </div>
  );
};

export default NativeBannerAd;
