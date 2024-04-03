import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import {Link} from "react-router-dom"
import logo from "../assets/logo.jpg"

function Header() {
  return (

     <div>


    
    <div>
      <div className='bg-black text-white flex justify-around h-12 items-center'>

        <div>

            <p> +91 8976834832 | wecare@goldsgym.in</p>

        </div>
        
        <div>
            <h2>Welcome to Gold's Gym India</h2>
        </div>

        <div className='flex gap-1'>
            <div className='bg-white text-black p-1.5 rounded-full'>
            <FaFacebookF /> </div>
            <div className='bg-white text-black p-1.5 rounded-full'>
            <FaTwitter /></div>
            <div className='bg-white text-black p-1.5 rounded-full'>
            <TfiYoutube /> </div>
            <div className='bg-white text-black p-1.5 rounded-full'>
            <FaInstagram /> </div>
            <div className='bg-white text-black p-1.5 rounded-full'>
            <FaLinkedinIn /> </div>
        </div>
      </div>
    </div>

    <div>

    <nav className="bg-gray-900 py-4">
      <div className="container flex justify-between px-10 items-center">
        <Link to="/" ><img src={logo} alt="" className='h-16'/></Link>

        <div className='hover:text-yellow-300 hover:bg-white border-2 border-transparent hover:border-yellow-300 font-bold bg-yellow-300 p-2 rounded-lg'>
          <Link><button className=''><Link to="/signup">JOIN TODAY</Link></button></Link>
        </div>


        <div className=' flex gap-5'>
          <Link to="/login" className=" hover:text-yellow-300 hover:bg-white border-2 border-transparent hover:border-yellow-300 font-bold bg-yellow-300 p-2 rounded-lg">Login</Link>

          <Link to="/signup" className="hover:text-yellow-300 hover:bg-white border-2 border-transparent hover:border-yellow-300 font-bold bg-yellow-300 p-2 rounded-lg">Sign Up</Link>

          <Link to="/contact" className="hover:text-yellow-300 hover:bg-white border-2 border-transparent hover:border-yellow-300 font-bold bg-yellow-300 p-2 rounded-lg">Contact US</Link>

        </div>
      </div>
    </nav>

    </div>


    </div>
  )
}

export default Header