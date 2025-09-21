// Monetag interstitial ad show করার helper
export const showMonetagAd = () => {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const interval = setInterval(() => {
      tries++;

      if (window.Monetag && window.Monetag.showInterstitial) {
        console.log("🎬 Monetag Ad Showing...");
        window.Monetag.showInterstitial();
        clearInterval(interval);
        resolve(true);
      }

      if (tries > 10) { // প্রায় ৫ সেকেন্ড চেষ্টা করবে
        clearInterval(interval);
        reject("❌ Monetag failed to load");
      }
    }, 500);
  });
};
