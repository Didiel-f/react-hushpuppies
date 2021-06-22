
import React, { useEffect, useState } from "react";
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

  const [slpv, setSlpv] = useState(0);
  const [intViewportWidth, setintViewportWidth] = useState(0);


  const body = document.querySelector('body');


  useEffect(() => {

    let isMounted = true;
    
    const resizeObserver = new ResizeObserver(entries => {
      setintViewportWidth(window.innerWidth);
  
      if (intViewportWidth > 991) {
        if (isMounted) setSlpv(4);
      }
      if (intViewportWidth > 767 && intViewportWidth < 991) {
        if (isMounted) setSlpv(3);
      }
      if (intViewportWidth < 767 && intViewportWidth > 479) {
        if (isMounted) setSlpv(2);
      }
      if (intViewportWidth <= 479) {
        if (isMounted) setSlpv(1);
      }
    });
    resizeObserver.observe(body);
    return () => { isMounted = false };
  }, [slpv, body, intViewportWidth, setintViewportWidth])

  
  
    return (
        <>
          <div className="container sliders-container">

            <Swiper slidesPerView={slpv} spaceBetween={30} className="mySwiper">
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

            <Swiper slidesPerView={slpv} spaceBetween={30} className="mySwiper">
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