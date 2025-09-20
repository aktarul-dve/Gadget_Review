// useMonetag.js
import { useEffect } from "react";

const useMonetag = (zoneId = "9905440") => {
  useEffect(() => {
    // Check if script is already added
    if (document.querySelector(`script[data-zone="${zoneId}"]`)) return;

    const script = document.createElement("script");
    script.dataset.zone = zoneId;
    script.src = "https://groleegni.net/vignette.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("✅ Monetag script loaded for zone:", zoneId);
    };

    script.onerror = () => {
      console.log("❌ Monetag script failed to load");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [zoneId]);
};

export default useMonetag;
