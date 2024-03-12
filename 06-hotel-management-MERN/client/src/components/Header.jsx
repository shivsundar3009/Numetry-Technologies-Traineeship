// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import img from '../assets/welcome.jpg'

// import { FaInstagram } from "react-icons/fa"
// import { FaFacebookF } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";

// function Header() {
//     return (
//         <>
//             <div>

//                 <div className='bg-[#d8c46c] h-14 flex items-center justify-around gap-5' >

//                     <div className='flex gap-4'>
//                         <FaFacebookF className='border p-1 h-7 w-7' />
//                         <FaInstagram className='border p-1 h-7 w-7' />
//                     </div>

//                     <div className='flex gap-5 '>
//                         <div className='flex items-center gap-2'><FaPhone />  +91 93186-23456</div>
//                         <div className='flex items-center gap-2'><MdOutlineEmail /> thegrandwelcome@gmail.com</div>
//                     </div>


//                 </div>
//                 <div className='sticky top-0'>

//                     <nav className='h-20 flex items-center justify-around'>

//                         <div>
//                             <img src={`${img}`} alt="" className='h-7' />
//                         </div>

//                         <div className='flex gap-5 font-bold'>

//                             <NavLink>HOME</NavLink>
//                             <NavLink>ABOUT US</NavLink>
//                             <NavLink>SERVICE</NavLink>
//                             <NavLink>ROOM</NavLink>
//                             <NavLink>BOOK NOW</NavLink>
//                             <NavLink>GALLERY</NavLink>
//                             <NavLink>MENU</NavLink>
//                             <NavLink>EVENTS</NavLink>
//                             <NavLink>LOGIN</NavLink>
//                             <NavLink>CONTACT US</NavLink>


//                         </div>

//                     </nav>

//                 </div>



//             </div>
//         </>
//     )
// }

// export default Header

// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import img from '../assets/welcome.jpg';

// import { FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";

// function Header() {
//     return (
//         <>
//             <div >
//                 <div className='bg-[#d8c46c] h-14 flex items-center justify-around gap-5'>
//                     <div className='flex gap-4'>
//                         <FaFacebookF className='border p-1 h-7 w-7' />
//                         <FaInstagram className='border p-1 h-7 w-7' />
//                     </div>
//                     <div className='flex gap-5 '>
//                         <div className='flex items-center gap-2'><FaPhone /> +91 93186-23456</div>
//                         <div className='flex items-center gap-2'><MdOutlineEmail /> thegrandwelcome@gmail.com</div>
//                     </div>
//                 </div>
//                 <div className='sticky top-0'>
//                     <nav className='h-20 flex items-center justify-around bg-gray-200'>
//                         <div>
//                             <img src={img} alt="" className='h-7' />
//                         </div>
//                         <div className='flex gap-5 font-bold'>
//                             <NavLink to="/">HOME</NavLink>
//                             <NavLink to="/about">ABOUT US</NavLink>
//                             <NavLink to="/service">SERVICE</NavLink>
//                             <NavLink to="/room">ROOM</NavLink>
//                             <NavLink to="/booknow">BOOK NOW</NavLink>
//                             <NavLink to="/gallery">GALLERY</NavLink>
//                             <NavLink to="/menu">MENU</NavLink>
//                             <NavLink to="/events">EVENTS</NavLink>
//                             <NavLink to="/login">LOGIN</NavLink>
//                             <NavLink to="/contact">CONTACT US</NavLink>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/welcome.jpg';
import { FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
    return (
        <div>
            <div className='bg-[#d8c46c] h-14 flex items-center justify-around gap-5'>
                <div className='flex gap-4'>
                    <FaFacebookF className='border p-1 h-7 w-7' />
                    <FaInstagram className='border p-1 h-7 w-7' />
                </div>
                <div className='flex gap-5 '>
                    <div className='flex items-center gap-2'><FaPhone /> +91 93186-23456</div>
                    <div className='flex items-center gap-2'><MdOutlineEmail /> thegrandwelcome@gmail.com</div>
                </div>
            </div>
            <nav className='sticky top-0 z-50 bg-gray-200 h-20 flex items-center justify-around'>
                <div>
                    <img src={img} alt="" className='h-7' />
                </div>
                <div className='flex gap-5 font-bold'>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT US</NavLink>
                    <NavLink to="/service">SERVICE</NavLink>
                    <NavLink to="/room">ROOM</NavLink>
                    <NavLink to="/booknow">BOOK NOW</NavLink>
                    <NavLink to="/gallery">GALLERY</NavLink>
                    <NavLink to="/menu">MENU</NavLink>
                    <NavLink to="/events">EVENTS</NavLink>
                    <NavLink to="/login">LOGIN</NavLink>
                    <NavLink to="/contact">CONTACT US</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;