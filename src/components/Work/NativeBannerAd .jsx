import React, { useEffect } from "react";

const NativeBannerAd = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://gizokraijaw.net/vignette.min.js";
        script.dataset.zone = "9912990"; // Vignette Banner Zone ID
        script.async = true;

        script.onload = () => {
            console.log("🎉 Monetag JS loaded");
            window.monetagReady = true; // ready flag
        };

        document.body.appendChild(script);
    }, []);


    return (
        <div id="monetag-banner" style={{ width: "100%", minHeight: "120px", margin: "20px 0" }}>
            {/* Monetag Native Banner এখানে render হবে */}
        </div>
    );
};

export default NativeBannerAd;
