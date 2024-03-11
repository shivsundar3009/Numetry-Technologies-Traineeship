import React from 'react'
import img from '../assets/bg.jpg'
import registrationImg from '../assets/registration.png'
import { Link } from 'react-router-dom'

function RegistrationPage() {
  return (
    <div className='h-screen flex justify-center items-center' style={{ backgroundImage: `url(${img})` }}>
      <div className='flex h-full w-full p-10'>
        <div className='bg-[#fefae0] w-1/2 flex flex-col p-10 items-center'>

          <div className=''>
            <h1 className='text-3xl'>Register Yourself</h1>
          </div>

          <div className='flex flex-col w-full gap-2'>

            <label htmlFor="Email">Enter your Email</label>
            <input type="text" id='Email' placeholder='Email Address' className='w-1/2 p-2' />

            <label htmlFor="phoneNumber">Enter your Number</label>
            <input type="number" id='phoneNumber' placeholder='Phone Number' className='w-1/2 p-2' />

            <label htmlFor="Password">Enter Your Password</label>
            <input type="password" id='Password' placeholder='Password' className='w-1/2 p-2' />

            <label htmlFor="DOB">DOB :</label>
            <input type="date" name="" id="DOB" className='w-1/2 p-2' />

            <div className='flex gap-3'>
              <label htmlFor="Gender">Gender</label>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>

            <div className='flex'>
              <input type="checkbox" name="" id="" />
              <p>By creating an Account you agree to our <Link className='text-blue-600 underline underline-offset-2' >Terms & Privacy</Link> </p>
            </div>

            <div className='flex flex-col gap-2'>
              <button className='bg-[#ff006e] text-white font-bold w-1/2 p-2 border-black border-2 border'>Register</button>
              <p>
              Already have an Account?
              <Link to='/login' className='text-blue-600 underline underline-offset-2'> Sign In</Link>
              </p>
            </div>

          </div>

        </div>
        <div className='bg-[#023047] w-1/2 h-full flex flex-col items-center p-28 gap-10'>

          <div className='text-white font-bold text-center'>
            <h1 className='text-5xl'>Welcome </h1>
            <h2 className='text-4xl'>To the Website</h2>
          </div>

          <div>
            <img src={`${registrationImg}`} alt="" className='h-72' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegistrationPage