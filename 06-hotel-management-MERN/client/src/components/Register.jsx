import React from 'react'
import welcome from '../assets/welcome.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  

  const Submit = async () => {

    await axios.post('http://localhost:3000/api/v1/guests', {name,password,email})
    
    console.log(`Name is ${name},Password is ${password} and the email is ${email}`);
  }

  return (
    <div className='bg-[#8ecae6] h-screen flex justify-center'>

      <div className='bg-white h-96 p-10 text-center mt-10 rounded-xl flex flex-col gap-2'>


         <div className='flex flex-col gap-2'>
         <img src={`${welcome}`} alt="" className='h-8' />
           <h2 className='font-serif text-xl'>Guest Register</h2>
         </div>

           <div className='flex flex-col gap-3'>

            <input type="text" placeholder='Enter Your Name' className='border-2 border-[#cbc6c6] rounded-full p-2'
            onChange={(e) => setName(e.target.value)}
            />

            <input type="email" placeholder='Enter Your Email' className='border-2 border-[#cbc6c6] rounded-full p-2'
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password" placeholder='Enter Password' className='border-2 border-[#cbc6c6] rounded-full p-2'
            onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex-col flex gap-2'>
            <button className='bg-[#b1a25d] p-2 rounded-full' onClick={Submit}>Register</button>
            <div>Already Registered ? <Link to='/login' className='text-blue-400'>Sign IN</Link></div>
           </div>


           </div>

           
         

      </div>
    </div>
  )
}

export default Register