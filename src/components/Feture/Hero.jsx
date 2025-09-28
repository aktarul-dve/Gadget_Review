import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-rose-200 to-cyan-50 flex items-center justify-center">
      <div className="text-center px-4">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-4">
          Online Guide
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          Learn, Explore & Grow Your Skills Online
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-rose-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-rose-600 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
