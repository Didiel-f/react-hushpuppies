
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';


import { shoesData } from '../../shoesData/zapato'

import './slider.css';
import ProductCard from "../ProductCard/ProductCard";

// install Swiper modules
SwiperCore.use([Pagination]);



const Slider = () => {
    return (
        <>
          <div className="container sliders-container">

            <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
              {
                shoesData.map( (item, i) => (
                  <SwiperSlide key={ i }>
                    <ProductCard key={ item.foto } item={item} button={ true } />
                  </SwiperSlide>
                ) )
              }
            </Swiper>

            <h3>PRODUCTOS RECOMENDADOS</h3>
            <hr />

            <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
              {
                shoesData.map( (item, i) => (
                  <SwiperSlide key={ i }>
                    <ProductCard key={ item.foto } item={item} button={ false } />
                    
                  </SwiperSlide>
                ) )
              }
              
            </Swiper>
            
          </div>
        </>
    )
};



export default (Slider);