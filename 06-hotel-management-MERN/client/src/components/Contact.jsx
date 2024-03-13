import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { BsBrowserEdge } from "react-icons/bs";

function Contact() {
  return (

    <>
    <Header/>

    <div className=''>

      <div className='flex flex-col gap-28' >

      <div className='h-4/5'>
      <iframe width="100%" scrolling="no" height="450" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.190837292686!2d77.17845001450029!3d31.048786481527998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057f3a1446e7f1%3A0xd737cab462faa2a1!2sThe%20Grand%20Welcome%20Hotel%20%26%20Spa!5e0!3m2!1sen!2sin!4v1609233328885!5m2!1sen!2sin%20width=600%20height=450%20frameborder=0%20style=border:0;%20allowfullscreen=%20aria-hidden=false%20tabindex=0/iframe%20width=600%20height=450%20frameborder=0%20style=border:0;%20allowfullscreen=%20aria-hidden=false%20tabindex=0/iframe" marginwidth="0" marginheight="0"></iframe>
      </div>

      <div className='flex flex-col gap-20'>
          <div className='text-center'>
             <h1 className='text-3xl'>CONTACT US</h1>
          </div>

          <div className='flex justify-center gap-20'>

            <div className='flex flex-col gap-5 p-10'>

              <div>
              <h2 className='text-3xl'>Get In Touch</h2>

              </div>

              <div className='flex flex-col gap-5'>

                <div className='grid grid-cols-2 gap-5'>
                     
                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Name">Your Name*</label>
                     <input type="text" placeholder='Enter Your Name' className='w-60 h-12 p-2 border-2'/>
                     </div>


                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Email">Your Email*</label>
                     <input type="text" placeholder='Enter Your Email' className='w-60 h-12 p-2 border-2'/>
                     </div>


                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Name">Number Of Person*</label>
                     <input type="text" placeholder='Number Of Person' className='w-60 h-12 p-2 border-2'/>
                     </div>


                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Name">Your Number*</label>
                     <input type="text" placeholder='Enter Your Number' className='w-60 h-12 p-2 border-2'/>
                     </div>


                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Name">Check In Date*</label>
                     <input type="text" placeholder='mm/dd/yyyy' className='w-60 h-12 p-2 border-2'/>
                     </div>


                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Name">Number of Rooms*</label>
                     <input type="text" placeholder='Number Of Rooms' className='w-60 h-12 p-2 border-2'/>
                     </div>

                     <div className='col-span-2'>
                     <div className='flex flex-col gap-2 '>
                     <label htmlFor="Message">Your Message*</label>
                     <textarea name="" id="" cols="20" rows="10" className='border-2 p-2 ' placeholder='Enter Your Message'></textarea>
                     </div>

                     </div>
                     


                     

                  </div>
                
                <div>
                  <button className='w-1/2 rounded-xl p-2 bg-[#d8c46c]'>Submit</button>
                </div>

              </div>

            </div>

            <div className='flex flex-col gap-3 p-10'>

              <div>

              <h2 className='text-3xl'>Contact Inforemations</h2>
              </div>
               
               <div>
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
      </div>


      </div>


      
    </div>
    <Footer/>
    </>
  )
}

export default Contact