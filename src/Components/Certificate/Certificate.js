import React from 'react';
import './Certificate.css';
import { Element } from 'react-scroll';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Certificate = () => {
  return (
    <Element className='certificatePage' id='Certificate'>
      <div className='certificate-container'>
      <h1 className='sub-title'> Certificates </h1>    
        <div className='design-card'>
          <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide>
          <Tilt>
          <img src='https://picsum.photos/seed/img10/200/300' alt='img'/>
          </Tilt>
          <h4>Certificate of Completion...</h4>
          </SwiperSlide>
          <SwiperSlide>
          <Tilt>
          <img src='https://picsum.photos/seed/img12/200/300' alt='img'/>
          </Tilt>
          <h4>Certificate of Completion...</h4>
          </SwiperSlide>
          <SwiperSlide>
          <Tilt>   
          <img src='https://picsum.photos/seed/img14/200/300' alt='img'/>
          </Tilt>
          <h4>Certificate of Completion...</h4>
          </SwiperSlide>
         
          </Swiper>
          <div>
            
          </div>
        </div>
     
      </div>
       
    </Element>
  )
}

export default Certificate ;