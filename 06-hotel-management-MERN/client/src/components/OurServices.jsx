import React from 'react'
import design from "../assets/design.png"
import bar from "../assets/bar.jpg"
import travel from "../assets/travel.jpg"

function OurServices() {
    return (
        <>
            <div className='h-screen flex flex-col justify-around'>

                <div className='flex flex-col justify-center items-center gap-7'>

                    <h2 className='text-5xl'>Our <span className='text-[#d8c46c]'>Services</span></h2>

                    <div className='flex flex-col items-center'>

                        <img src={`${design}`} alt="" className='h-10 w-52' />

                        <p className='text-[#898989]'>what we provide to our customers

                        </p>
                    </div>


                </div>
 
                <div className='flex justify-center gap-7 '>

                    <div>
                    <div class="relative">
                                <div class="border-2 border-gray-400 p-4 transform z-0 relative w-80 text-center">
                                    <img src={`${bar}`} alt="" />
                                    <h3 className='text-2xl font-semibold p-5'>Restaurant & Bar</h3>
                                    <p className='text-wrap w-full'>
                                    There’s nothing like starting the day with a healthy, filling Restaurant & Bar smoothie.
                                    </p>
                                <div class="absolute left-1/2 transform rotate-45 -translate-x-1/2 -top-2 h-3 w-3 bg-red-500" z-10></div>
                                    </div>
                            </div>


                        
                    </div>

                    <div>
                    <div class="flex items-center justify-center">
                            <div class="relative">
                                <div class="border-2 border-gray-400 p-4 transform z-0 relative w-80 text-center">
                                    <img src={`${travel}`} alt="" />

                                    <h3 className='text-2xl font-semibold p-5'>Travel Desk</h3>
                                    <p className='text-wrap w-full'>Our hotel offers extremely efficient and reliable travel desk services. We Provide Cabs for Sight seeing and around and Pick up & Drop for Railway station  and Airport of Shimla,...</p>
                                    
                                <div class="absolute left-1/2 transform rotate-45 -translate-x-1/2 -top-2 h-3 w-3 bg-red-500" z-10></div>
                                    </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default OurServices