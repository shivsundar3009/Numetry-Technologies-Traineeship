import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { BsBrowserEdge } from "react-icons/bs";

function Footer() {
  return (
    <>
    <div className='bg-[#171717] h-1/2 text-white flex p-20' >

      <div className='flex justify-between '>

        <div className='text-wrap w-1/6 flex flex-col gap-3'>
          <div className='border-b-2 pb-1'>
          <h2 className='font-serif'>ABOUT US</h2>
          </div>

          <p>About Us</p>
         
          <p>
          The Grand Welcome Hotel have highly motivated and well trained staff who provide exceptionally attentive, personalized and warm service.

          </p>
        </div>

        <div className='text-wrap w-1/4 flex flex-col gap-3'>
          <div className='border-b-2 pb-1'>
          <h2 className='font-serif'>CONTACT US</h2>
          </div>

          <p>For any enquiry please email us.</p>
         
          <div className='flex flex-col gap-5'>
               <div className='flex gap-3 font-semibold'>
                 <div className='w-14 h-12 rounded-full bg-[#d8c46c] flex justify-center items-center'> 
                 <IoLocationOutline className='text-3xl'/>
                </div>
                 <h3>Old Junga Rd, Shimla, Himachal Pradesh 171009</h3>
               </div>
               <div className='flex gap-3 font-semibold items-center'>
                 <div className='w-12 h-12 rounded-full bg-[#d8c46c] flex justify-center items-center'><PiPhoneCallThin className='text-3xl'/></div>
                 <h3>+91 93186-23456,98174,23456</h3>
               </div>
               <div className='flex gap-3 font-semibold items-center'>
                 <div className='w-12 h-12 rounded-full bg-[#d8c46c] flex justify-center items-center'><MdOutlineMail className='text-3xl'/></div>
                 <h3>thegrandwelcome@gmail.com</h3>
               </div>
               <div className='flex gap-3 font-semibold items-center'>
                 <div className='w-12 h-12 rounded-full bg-[#d8c46c] flex justify-center items-center'><BsBrowserEdge className='text-3xl'/></div>
                 <h3>www.thegrandwelcome.com</h3>
               </div>

          </div>
        </div>



      </div>


    </div>
    <div className='bg-black text-white text-center h-20 p-6'>Copyright @ Shivundar</div>
    </>
  )
}

export default Footer