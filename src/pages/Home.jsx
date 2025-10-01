import React, { useState, useEffect } from "react";
import MarqueeText from "../components/Feture/MarqueeText ";
import PopularArticle from "../components/Feture/PopularArticle";
import CategoriesSection from "../components/Feture/CategoriesSection";
import PopularPosts from "../components/Feture/PopularPosts";
import Work_regulations from "../components/Feture/Work_regulations";
import Hero from "../components/Feture/Hero";

const Home = () => {
  

  return (
    <div>
      <Hero/>
      <Work_regulations/>
      <MarqueeText />
      <PopularArticle  />
      <CategoriesSection  />
      <PopularPosts  />
    </div>
  );
};

export default Home;
