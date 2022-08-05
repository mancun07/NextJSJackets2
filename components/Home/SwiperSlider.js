import React, {Fragment} from "react";
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
                  <SwiperSlide className="swiper-slide" key={el.id}>
                    <Image src={el.src} alt={el.title} 
                    //  width="100vw" height="100vh"
                    layout="fill"
                    priority={true}
                    />
                  </SwiperSlide> )
              })}
      </Swiper>
    </Fragment>
  )
}


