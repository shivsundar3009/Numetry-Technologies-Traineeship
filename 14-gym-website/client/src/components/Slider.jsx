import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {img1 , img2, img3, img4} from '../assets/Banner'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';




function Slider() {

  const Images = [img1, img2, img3, img4]
  return (
    <div className='z-10'>

    
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop
    className=''
    >
      {
       
       Images.map((image,index) => (
        <SwiperSlide key={index}><img src={image} alt="" className='w-full'/></SwiperSlide>
       ))
      
      }
     
    </Swiper>
    </div>
  )
}

export default Slider