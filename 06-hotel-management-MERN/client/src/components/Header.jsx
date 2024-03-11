import React from 'react'
import {NavLink} from 'react-router-dom'
import img from '../assets/welcome.jpg'

import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
 
function Header() {
    return (
        <>
            <div>

                <div className='bg-[#d8c46c] h-14 flex items-center justify-around gap-5' >

                <div className='flex gap-4'>
                <FaFacebookF className='border p-1 h-7 w-7' />   
                <FaInstagram className='border p-1 h-7 w-7'/>
                </div>

                <div className='flex gap-5 '>
                    <div className='flex items-center gap-2'><FaPhone />  +91 93186-23456</div>
                    <div className='flex items-center gap-2'><MdOutlineEmail /> thegrandwelcome@gmail.com</div>
                </div>
               

                </div>
                <nav className='h-20 flex items-center justify-around'>

                 <div>
                    <img src={`${img}`} alt="" className='h-7'/>
                 </div>

                 <div className='flex gap-5 font-bold'>

                    <NavLink>HOME</NavLink>
                    <NavLink>ABOUT US</NavLink>
                    <NavLink>SERVICE</NavLink>
                    <NavLink>ROOM</NavLink>
                    <NavLink>BOOK NOW</NavLink>
                    <NavLink>GALLERY</NavLink>
                    <NavLink>MENU</NavLink>
                    <NavLink>EVENTS</NavLink>
                    <NavLink>LOGIN</NavLink>
                    <NavLink>CONTACT US</NavLink>


                 </div>

                </nav>

            </div>
        </>
    )
}

export default Header