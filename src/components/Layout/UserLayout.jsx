import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Navecation from '../common/Footer'


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

         
         <Navecation/>
         
        </>
    </div>
  )
}

export default UserLayout