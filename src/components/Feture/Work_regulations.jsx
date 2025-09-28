import React from "react";
import YouTube from "react-youtube";

const Work_regulations = () => {
  const videoId = "iCjjf1tnSJg"; // আপনার ভিডিও আইডি বসান

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Youtube Video</h1>
      <div style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
      }}>
        <YouTube 
          videoId={videoId} 
          opts={opts} 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Work_regulations;
