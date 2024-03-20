import React from 'react'
import logo from "../assets/logo.png"

import flag from "../assets/flag.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoLocationOutline } from "react-icons/io5"
import { BsCart4 } from "react-icons/bs"
import { IoSearch } from "react-icons/io5"

function Header() {
    return (
        <>
            <div className='bg-[#131921] h-16 text-white flex items-center gap-4'>
                <div className='hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'> 
                    <img src={`${logo}`} alt="" className='h-12' />
                </div>

                <div className='flex items-center hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>

                <IoLocationOutline />

                    <div className='text-center'>

                        <h3>Deliver To</h3>
                        <h3>Indore 452001</h3>
                    </div>
                </div> 

                <div className='flex w-1/2'>
                    <select name="cars" id="cars" className='bg-slate-600 p-1.5'>
                        <option value="ALL">ALL</option>
                        <option value="Shirts">Shirts</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Pants">Pants</option>
                    </select>

                    <input type="text" placeholder='Search Amazon.in' className='w-4/5 p-1.5 text-gray-500 '/>

                    <button className=' bg-[#febd69] hover:bg-[#f3a847] p-2.5'><IoSearch /></button>
                </div>

                <div className='flex items-center gap-5 '>

                    <div className='flex items-center gap-1' >

                        <img src={`${flag}`} alt="" className='h-5 '/>

                    <select name="cars" id="cars" className='bg-gray-600 p-1.5'>
                        <option value="ENG">ENG</option>
                        <option value="HINDI">HINDI</option>
                        <option value="MARATHI">MARATHI</option>
                        <option value="TELUGU">TELUGU</option>
                    </select>

                    </div>

                    <div className='flex flex-col items-center justify-center hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                        <h3>Hello, Shivsundar</h3>
                        <h3>Account & Lists</h3>
                    </div>

                    <div className='flex flex-col items-center justify-center hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                        <h3>Returns</h3>
                        <h3>& Orders</h3>
                    </div>

                    <div className='flex items-center justify-center gap-1 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                    <BsCart4 className='h-full' />
                        <h3 className='text-xl'>Cart</h3>
                    </div>


                </div>
            </div>
            <div className='bg-[#232f3e] h-12 flex text-white items-center box-border'>

                <div className='flex items-center gap-1 p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                <GiHamburgerMenu />
                <h3> ALL</h3>
               
                </div>

                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Amazon miniTV</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Sell</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Gift Card</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Buy Again</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Amazon Pay</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Coupons</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Books</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Gift Ideas</h3>
               
                </div>
                <div className='p-1.5 hover:border-2 hover:border-white border-2 border-transparent hover:cursor-pointer'>
                
                <h3>Customer Service</h3>
               
                </div>
            
            </div>

        </>
    )
}

export default Header