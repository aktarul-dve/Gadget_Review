import React from "react";
import { CgProfile } from "react-icons/cg";

const Hero = () => {
  return (
    <section className="w-full h-auto bg-gradient-to-br from-rose-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12 ">
       <div className="flex justify-center justify-between items-center">

        <div>
            <CgProfile className="w-10 h-10"/>
            <p>MD: Aktarul Islam</p>
            <p>aktarul@gmail.com</p>
            
        </div>

        <div>
            <p>আপনার ব্যলেন্স</p>
            <div className="flex space-x-5">
              <p>500.00</p>
              <p>টাকা</p>
            </div>
            

        </div>
        
        
       </div>
        
      </div>
    </section>
  );
};

export default Hero;
