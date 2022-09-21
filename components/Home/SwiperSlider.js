import React, {Fragment} from "react";
import Backdrop2 from '../Layout/Backdrop2'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);




export default function SwiperSlider(props) {
  
    
  
  return (
    <Fragment>
      <Swiper className="swiper-container mySwiper" 
              spaceBetween={30} 
              centeredSlides={true}  
              pagination={{
            "clickable": true
            }} navigation={true}
            autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
        }}
          >
              
              {props.images.map(el => {
                  return (
                    <Backdrop2 key={el.id}>
                  <SwiperSlide className="swiper-slide" >
                    <Image src={el.src} alt={el.title} 
                    //  width="100vw" height="100vh"
                    layout="fill"
                    priority={true}
                    />
                  </SwiperSlide> 
                  </Backdrop2>
                  )
              })}
      </Swiper>
    </Fragment>
  )
}


