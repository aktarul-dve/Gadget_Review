import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Navecation from '../common/Footer'
import Footer from '../Feture/Footer'

const UserLayout = () => {
  return (
    <div>
        <>
         {/* Navbar */}
        <Navbar/>

         {/* Maincontent */}

         <main className="pt-10 pb-20">
            <Outlet/>
         </main>

         {/* Footer */}

         <Footer/>
         <Navecation/>
         
        </>
    </div>
  )
}

export default UserLayout