import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Hero = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("https://aktarul.onrender.com/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // Token পাঠানো হচ্ছে
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("User fetch error:", err);
        });
    }
  }, []);



  return (
    <section className="w-full h-auto bg-gradient-to-br from-rose-200 to-cyan-50">
      <div className="container mx-auto px-4 py-12 ">
        <div className="flex  justify-between items-center">

          <div>
            <CgProfile className="w-10 h-10" />
            <p>{user ? user.name : "Loading..."}</p>
            <p>{user ? user.email : ""}</p>
            <div>
              <p className="text-2xl">
                Refer Code: {user ? user.referCode : ""}
              </p>

            </div>


          </div>

          <div>
            <p>আপনার ব্যলেন্স</p>
            <div className="flex space-x-5">
              <p>{user ? (user.balance / 100).toFixed(2) : "0.00"} টাকা</p>

            </div>


          </div>


        </div>

      </div>
    </section>
  );
};

export default Hero;
