import React from 'react'
import img from '../assets/bg.jpg'
import verification from '../assets/verification.jpg'
import { Link } from 'react-router-dom'

function ForgetVerfication() {
  return (
    <div className='h-screen flex justify-center items-center' style={{backgroundImage: `url(${img})`}}>
    <div className='flex h-full w-full p-10'>

     <div className='bg-[#fefae0] w-1/2 flex flex-col p-20 items-center '>

      <div className='flex flex-col gap-6 bg-[#0a9396] p-8 text-white font-bold'>
  
       <h1 className='text-3xl'>Verify your Number/Email</h1>

       <div>
        
        <h2 className='text-3xl'>Forgot</h2>
        <h3 className='text-3xl'>Your Password ?</h3>
       </div>
    

       <div className='flex flex-col w-full items-center gap-2'>
        <label htmlFor="Email/Phone" className='text-2xl'>Enter Your Email/Phone</label>
         <input type="text" id='Email/Phone' placeholder='Email/Phone' className='p-3 placeholder:text-red-500 text-black' />
        
       </div>

       <div>
        <Link to='/login' className='text-pink-700 underline underline-offset-2'>Back To Login Page</Link>
       </div>
      </div>

      
       
     </div>
     <div className='bg-[#023047] w-1/2 h-full'>
     
       <img src={`${verification}`} alt="" className='h-full w-full p-10'/>
     </div>
    </div>
  </div>
  )
}

export default ForgetVerfication