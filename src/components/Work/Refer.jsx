import React from 'react'
import { FcHome } from "react-icons/fc";

const Refer = () => {
  return (
    <div className='justify-center items-center'> 

      <FcHome className='w-full h-full'/>

      <div>
        <p  className='text-2xl'>## বন্দুকে টাকা ঘর অ্যাপ রেফার করুন  আর বোনাস নিন ##</p>
        <p className='mt-5'>নিচের  কোডটি আপনার বন্দুদের সাথে শেয়ার করুন । আর আপনার বন্দুর রেফার অফার কোডে আপনার কোডটি দিয়ে সাবমিট করুন ।
          আর সাথে সাথে ৫.১০ টাকা বোনার নিন । আপনি যত বেশি রেফার করবে তত আপনার আয় বাড়বে।
          আপনি প্রতিমাসে ১০,০০০ টাকা ইনকাম করতে পাবেন ।
        </p>
      </div>

      <div className='items-center'>
        <p>You Refer Code</p>
        <p className='p-2 bg-red-500 text-white rounded-lg w-max'>123456</p>
        <div className='flex space-x-5'>
          <input type='namber'
          className='border'>

          </input>
          <button className='p-2 bg-green-500 rounded-lg'>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Refer