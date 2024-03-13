import React from 'react'
import Header from './Header'
import img from "../assets/about.jpg"
import Footer from './Footer'


function About() {
  return (
   <>
   <Header/>

   <div className='h-screen flex flex-col items-center justify-around'>

    <div className='text-4xl'>

      ABOUT US
    </div>

    <div className='flex w-full justify-center gap-20'>
    <div>
      <img src={`${img}`} alt="" />
    </div>

    <div className='text-wrap w-1/3 flex flex-col gap-3' >
      <h2 className='text-3xl' >Welcome to <span className='text-[#ddcb7d]'>The Grand Welcome</span> </h2>

      <p className='font-semibold text-gray-400'><span className='font-bold text-gray-600'>The Grand Welcome Hotel</span>   is Located in the beautiful city of Shimla, The hotel is located at a distance of  8 Km from the railway stations,  11 Km from Shimla ISBT, 29 Km from Shimla airport. The Grand Welcome is the only hotel in the Shimla city which is drive-in with the capacity of 100 cars. The Grand Welcome is one of the prime locations Property, just 106Kms/3hrs drive away from Chandigarh. Spread over 2 Bighas of area with beautiful green Hills, the hotel offers unique blend of fine hospitality and fast and best services. Our 4 Star Amenities give us a distinctive edge over the other hotels in Shimla. The hotel offer state of the facilities and spacious rooms with great nature views.​</p>

      <p className='font-semibold text-gray-400'><span className='font-bold text-gray-600'>The Grand Welcome Hotel</span> come up with new standards of Service and Hospitality in the Hotel Industry with a special focus on their Guests. We intend to meet all the requirements of the Guests in the best possible manner and assure our best attention to the Guest needs at all times and to provide them Homely Environment.</p>

      <p className='text-red-500 font-bold text-xl'>Note -: Last 1km Road to hotel from highway is quite steep and driver should be well trained.</p>

    </div>

    </div>
   


   </div>

   <Footer/>
   
   </>
  )
}

export default About