import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import fan from "../assets/demoProducts/fan.jpg"
import phone from "../assets/demoProducts/phone.jpg"
import shirt from "../assets/demoProducts/shirt.webp"
import AllProducts from './AllProducts'

function Home() {
  return (
    <>
    
    <Header/>

    <AllProducts/>

    <Footer/>
    </>
  )
}

export default Home