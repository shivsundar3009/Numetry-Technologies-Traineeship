import React from 'react'
import img from '../assets/bg.jpg'
import changePassword from '../assets/changePassword.jpg'
import { Link } from 'react-router-dom'

function ForgetPage() {
  return (
    <div className='h-screen flex justify-center items-center' style={{backgroundImage: `url(${img})`}}>
     <div className='flex h-full w-full p-10'>
      <div className='bg-[#fefae0] w-1/2 flex flex-col p-10 '>

        <div className='flex flex-col gap-6 justify-center items-center bg-[#6a994e] p-5'>

        <div className='flex flex-col gap-6'>
        <h1 className='text-3xl'>Reset Your Password</h1>
        <p className='text-xl'>Strong password includes numbers,<br />
letters and punctuation marks</p>
        </div>

        <div className='flex flex-col w-full gap-2'>

        <label htmlFor="Password">Enter Your Password</label>
         <input type="password" id='Password' placeholder='Password' className='w-1/2 p-2'/>

         <label htmlFor="confirmPassword">Confirm Your Password</label>
         <input type="text" id='confirmPassword' placeholder='Confirm Your Password' className='w-1/2 p-2'/>
       </div>

       <div>
        <Link to='/login' className='text-pink-700 underline underline-offset-2'>Back To Login Page</Link>
       </div>
        
      </div>
     
        </div>
         
        <div className='bg-[#023047] w-1/2 h-full'>
        <img src={`${changePassword}`} alt=""  className='h-full w-full p-10'/>
      </div>
       
     </div>
   </div>
  )
}

export default ForgetPage