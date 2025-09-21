import { useEffect } from "react";

const useMonetag = (zoneId = "9905440") => {
  useEffect(() => {
    // script আগে থেকে থাকলে আবার যোগ করা হবে না
    if (document.querySelector(`script[data-zone="${zoneId}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.dataset.zone = zoneId;
    script.src = "https://groleegni.net/vignette.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("✅ Monetag script loaded for zone:", zoneId);
      window.MonetagReady = true; // ✅ লোড হলে ফ্ল্যাগ সেট হবে
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
