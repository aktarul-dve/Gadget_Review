import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcHome, FcCustomerSupport } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { PiChatText } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("https://aktarul.onrender.com");

const Navbar = () => {
  const navigate = useNavigate();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get("https://aktarul.onrender.com/auth/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);

        // Join socket.io user room
        socket.emit("join_user_room", res.data._id);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchUser();
  }, []);

  // Listen to real-time updates
  useEffect(() => {
    const handleUpdate = ({ userId, updatedFields }) => {
      setUser(prev =>
        prev && prev._id?.toString() === userId
          ? { ...prev, ...updatedFields }
          : prev
      );
    };

    socket.on("user_update", handleUpdate);
    return () => socket.off("user_update", handleUpdate);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <div>
      <nav className="fixed w-full z-50 bg-red-500 flex items-center justify-center py-4 px-6">
        <button onClick={toggleNavDrawer} className="absolute left-4">
          <FiAlignJustify className="h-6 w-6 text-white" />
        </button>
        <p className="text-white font-bold text-[12px] absolute right-8">
          Task: {user?.actionCount || 0}
        </p>
      </nav>

      <div className={`fixed top-10 left-0 w-2/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-green-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to="/" onClick={toggleNavDrawer} className="flex items-center space-x-3 text-gray-600 hover:text-black"><FcHome /><span>Home</span></Link>
            <Link to="/blog" onClick={toggleNavDrawer} className="flex items-center space-x-3 text-gray-600 hover:text-black"><MdLeaderboard /><span>Blog</span></Link>
            <Link to="/articles" onClick={toggleNavDrawer} className="flex items-center space-x-3 text-gray-600 hover:text-black"><GiBank /><span>Articles</span></Link>
            <Link to="/contact" onClick={toggleNavDrawer} className="flex items-center space-x-3 text-gray-600 hover:text-black"><FcCustomerSupport /><span>Contact</span></Link>
            <Link to="/about" onClick={toggleNavDrawer} className="flex items-center space-x-3 text-gray-600 hover:text-black"><PiChatText /><span>About Us</span></Link>
            <button onClick={() => { handleLogout(); toggleNavDrawer(); }} className="flex items-center space-x-3 text-gray-600 hover:text-black"><BiLogOut /><span>লগ আউট</span></button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
