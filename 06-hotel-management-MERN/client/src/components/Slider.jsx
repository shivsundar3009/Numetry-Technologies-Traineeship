import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {img1 , img2, img3, img4, img5, img6, img7, img8, img9} from '../assets/Banner'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';




function Slider() {

  const Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  return (
    <div className='z-10'>

    
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    >
      {
       
       Images.map((image,index) => (
        <SwiperSlide key={index}><img src={image} alt="" className='w-full h-screen'/></SwiperSlide>
       ))
      
      }
     
    </Swiper>
    </div>
  )
}

export default Slider