import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const UserLayout = () => {
  return (
    <div>
        <>
         {/* Navbar */}
        <Navbar/>

         {/* Maincontent */}

         <main className="pt-10">
            <Outlet/>
         </main>

         {/* Footer */}

         <Footer/>
         
        </>
    </div>
  )
}

export default UserLayout