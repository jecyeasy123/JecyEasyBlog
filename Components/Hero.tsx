"use client"
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {image} from '@/app/lib/link';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


const Hero = () => {

  return (
    <div className = "w-full h-auto py-[20px] relative overflow-x-hidden bg-white">

<Swiper className=''
            loop={true}
            autoplay
            grabCursor={true}
          pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
         {image?.map((image, id)=>(
      <SwiperSlide key={id} className=''>
      
          <Image quality={95} priority={true} className='w-[100%] h-[500px] object-fill object-center' src={image.image} alt={image.name} />
       
      </SwiperSlide>
      ))}


      </Swiper>

       </div>
  )
   
 
}

export default Hero