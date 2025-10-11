import React, { useState, useEffect } from "react";
import MarqueeText from "../components/Feture/MarqueeText ";
import Work_regulations from "../components/Feture/Work_regulations";
import Job1 from "../components/Feture/Job1";
import Job2 from "../components/Feture/Job2";
import Hero from "../components/Feture/Hero";

const Home = () => {
  

  return (
    <div>
      <Hero/>
      <Work_regulations/>
      <MarqueeText />
      <Job1/>
      <Job2/>
     
    </div>
  );
};

export default Home;
