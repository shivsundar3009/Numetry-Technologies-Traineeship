import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import fan from "../assets/demoProducts/fan.jpg"
import phone from "../assets/demoProducts/phone.jpg"
import shirt from "../assets/demoProducts/shirt.webp"

function Home() {
  return (
    <>
    
    <Header/>
 
    <div className='flex gap-7 justify-around flex-wrap mt-5 mb-5'>
      <Product prevImg={fan} name={`atomberg Renesa Smart 1200mm BLDC Motor 5 Star Rated Ceiling Fan with IoT and Remote | Smart and Energy Efficient Fan with LED Indicators | Saves Upto 65% Energy | 2+1 Year Warranty (Brown & Black)`} rating={`4.5`} price={`4099`} deliveryDate={`Saturday, 23 March`}/>

      <Product prevImg={shirt} name={`Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)`} rating={`4.5`} price={`1099`} deliveryDate={`Saturday, 24 March`}/>

      <Product prevImg={phone} name={`OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)`} rating={`4.5`} price={`17999`} deliveryDate={`Saturday, 24 March`}/>
    
    </div>


    <Footer/>
    </>
  )
}

export default Home