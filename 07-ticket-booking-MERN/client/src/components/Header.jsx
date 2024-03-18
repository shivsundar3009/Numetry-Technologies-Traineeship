import React from 'react'
import img from '../assets/logo.png'

function Header() {
  return (
    <div>

        <div className='flex justify-around'>

            <div>
                <img src={`${img}`} alt="" />
            </div>

            <div className='flex gap-8'>
                <div className='flex flex-col items-center'>
                    <h3>EMTMate</h3>
                    <p>Agent Travel Solution</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>EMTDesk</h3>
                    <p>Corporate Travel Program</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>EMTRoyale</h3>
                    <p>For Prime Members</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>Explore Bharat</h3>
                    <p>A Tour to India</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>Join EMTPro</h3>
                    <p>Enjoy More Benfits</p>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Header