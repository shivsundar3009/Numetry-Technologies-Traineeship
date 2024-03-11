import React from 'react'
import img from '../assets/bg.jpg'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div className='h-screen flex justify-center items-center' style={{backgroundImage: `url(${img})`}}>
    <div className='flex h-full w-full p-10'>
     <div className='bg-[#fefae0] w-1/2 flex flex-col p-10 items-center gap-5'>

       <div className=''>
       <h1 className='text-3xl'>Login To Your Account</h1>
       <p>Don't have an account  <Link to="/" className='text-blue-700'>SignUp Free!</Link>
       </p>
       </div>

       <div className='flex flex-col w-full items-center gap-2'>
         <input type="text" id='Email' placeholder='Email Address' className='w-1/2 p-2'/>
         <input type="password" id='Password' placeholder='Password' className='w-1/2 p-2'/>
       </div>

       <div className='flex gap-12'>
          <div className=''>
            <input type="checkbox" />
            <label htmlFor="checkkbox">Remember Me</label>
          </div>
          <div>
            <Link to='/verification' className='text-blue-800'>Forget Your Password</Link>
          </div>
       </div>

       <div className='w-full flex justify-center'>
        <button className='bg-[#ff006e] text-white font-bold w-1/2 p-2 border-black border-2 border'>Login</button>
       </div>
       
     </div>
     <div className='bg-[#023047] w-1/2 h-full flex flex-col items-center p-28 gap-5'>
      <div>
      <h1 className='text-white text-3xl'>Login with social media to Get Quick Access</h1>
      </div>
      <div className='w-full flex justify-center flex-col items-center gap-5'>
        <button className='bg-[#4889f4] w-1/2 p-3 font-bold'>Sign in With Google</button>
        <button className='bg-[#ffffff] w-1/2 p-3 font-bold'>Sign in With Twitter</button>
        <button className='bg-[#c04e70] w-1/2 p-3 font-bold'>Sign in With Instagram</button>
      </div>
    


     </div>
    </div>
  </div>
  )
}

export default LoginPage