import React from 'react'
import welcome from '../assets/welcome.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const Submit = async () => {

    try {
      
         const res = await axios.post('http://localhost:3000/api/v1/guests/login', {email,password})
          
         if(res.data === "success"){
          alert("logged in successfully")
          // navigate('/home')
         }
          console.log(`Password is ${password} and the email is ${email}`);
      
    } catch (error) {
        console.log(error)
    }

    // navigate('/home')
  }

  return (
    <div className='bg-[#8ecae6] h-screen flex justify-center'>

      <div className='bg-white h-80 p-10 text-center mt-10 rounded-xl flex flex-col gap-2'>


         <div className='flex flex-col gap-2'>
         <img src={`${welcome}`} alt="" className='h-8' />
           <h2 className='font-serif text-xl'>Guest Sign In</h2>
         </div>

           <div className='flex flex-col gap-3'>
            <input type="email" placeholder='Enter Your Email' className='border-2 border-[#cbc6c6] rounded-full p-2'
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password" placeholder='Enter Your Password' className='border-2 border-[#cbc6c6] rounded-full p-2'
             onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex-col flex gap-2'>
            <button className='bg-[#b1a25d] p-2 rounded-full'
            onClick={Submit}
            >Login</button>
            <div>Not Registered ? <Link to='/register' className='text-blue-400'>SignUP</Link></div>
           </div>


           </div>

           
         

      </div>
    </div>
  )
}

export default Login