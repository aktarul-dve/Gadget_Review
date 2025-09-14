import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import { MdVpnLock } from "react-icons/md";
import { BiLogOut, BiMoneyWithdraw } from "react-icons/bi";
import { GiBank } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiChatText } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [navDrawerOpen, setnavDrawerOpen] = useState(false);

  // 🔹 Logout ফাংশন
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Token remove
    navigate("/"); // Login page-এ redirect
  };

  const toggleNavDrawer = () => {
    setnavDrawerOpen(!navDrawerOpen);
  }





  return (
    <div>
      <nav className='fixed w-full z-50 bg-red-500 flex items-center justify-center py-1 px-6'>
        <button onClick={toggleNavDrawer} className='absolute left-4'>
          <FiAlignJustify className='h-6 w-6 text-white' />
        </button>

        <span className=" 
    bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
    bg-clip-text text-transparent 
    drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
    transition-transform duration-300 
    hover:scale-110 hover:rotate-3
    cursor-pointer
    text-lg font-bold
  ">
          AdCash
        </span>
      </nav>


      {/* Mobile Navigation */}
      <div className={`fixed top-10 left-0 w-2/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform
    transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}  `}>

        <div className='flex justify-end p-4'>
          <button onClick={toggleNavDrawer}>

            <IoMdClose className='h-6 w-6 text-green-600' />

          </button>
        </div>

        <div className='p-4'>
          <h2 className='text-xl font-semibold mb4 '>Manu</h2>

          <nav className='space-y-4'>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <FcHome />
              <span>হোম</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <MdVpnLock />
              <span>VPN কানেক্ট করুন</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <BiMoneyWithdraw />
              <span>উথড্র</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <GiBank />
              <span>ট্রানজেকশন</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <MdLeaderboard />
              <span>লিডারবোর্ড</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <FcCustomerSupport />
              <span>কাজের নিয়ম</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <PiTelegramLogoThin />
              <span>টেলিগ্রাম গ্রুপ</span>
            </Link>
            <Link to="#" onClick={toggleNavDrawer}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <PiChatText />
              <span>লাইভ চ্যাট</span>
            </Link>
            <Link to="#" onClick={() => {
              handleLogout();
              toggleNavDrawer(); // drawer বন্ধ হবে
            }}
              className='flex items-center space-x-3 text-gray-600 hover:text-black'>
              <BiLogOut />
              <span>লগ আউট</span>
            </Link>
          </nav>

        </div>



      </div>




    </div>
  )
}

export default Navbar