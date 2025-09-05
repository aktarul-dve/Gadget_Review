import React from 'react'
import { FcHome } from "react-icons/fc";
const Watch_Ads = () => {
  return (
    <div className=''>
        <div className='flex space-x-2 justify-center  mt-5 bg-white rounded-2xl shadow-md overflow-hidden w-20 hover:shadow-xl transition'>
            <p>15</p>
            <span>/</span>
            <p>15</p>
        </div>

        <div className='p-4'> 
            <p>
                প্রথমে অংক করার ২৫ সেকেন্ড অপেক্ষা করে এডটি দেখুন । 
                তারপর কালক্ট করার পর ৬০ সেকেন্ড অপেক্ষা করে এডটি দেখুন ।
                শুধুমাত্র যখন লাষ্টের কাজ করবেন তখন এডে ক্লিক করে একটি অ্যাপ ডাউনলোড করে অপেক্ষা করুন এবং ১২
                ঘন্ট মোবাইল ফোনে রেখে দিন তাহলে  আপনার টাকা যোগ হবে । ৪ ঘন্টা পর আবার চালু হবে । 
                সঠিক নিয়ম মেনে কাজ করলে পেমেন্ট পাবেন । ধন্যবাদ ।
            </p>
        </div>

        <div className='flex items-center space-x-10  mt-48 bg-red-500 rounded-2xl shadow-md overflow-hidden w-78 h-30 hover:shadow-xl transition'>

            <FcHome className='w-20 h-20'/>
            <div className='flex text-5xl'>
                <p className='text-3xl font-bold text-white'>Watch Ads</p>
                
            </div>

        </div>

       
       

    </div>
  )
}

export default Watch_Ads