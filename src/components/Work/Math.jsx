import React from 'react'
import { FcHome } from "react-icons/fc";
const Math = () => {
  return (
    <div className=''>
        <div className='flex space-x-2 justify-center mt-5 bg-white rounded-2xl shadow-md overflow-hidden w-20 hover:shadow-xl transition'>
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

        <div className='flex   items-center justify-between p-10 mt-8 bg-red-500 rounded-2xl shadow-md overflow-hidden w-78 h-40 hover:shadow-xl transition'>

            <FcHome className='w-20 h-20'/>
            <div className='flex text-5xl'>
                <p>5</p>
                <span>+</span>
                <p>2</p>
                <span>=</span>
                <span>?</span>
            </div>

        </div>

        <div className=' justify-center items-center  m-8 border  p-10'>
            <div className='justify-center'>
                 <input type='text' 
                  className='border  w-full h-14'
                 />

               <button className=' bg-red-500 text-white font-bold p-2 rounded-lg mt-5 '>Submit</button>

            </div>
           
        </div>
       

    </div>
  )
}

export default Math