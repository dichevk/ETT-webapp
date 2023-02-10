
import React, { useEffect } from 'react';

// core version + navigation, pagination modules:
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';

import './eventslider.css';

const Eventslider = () => {

  useEffect(() => {
    const swiper = new Swiper('.swiper2', {
      
      // configure Swiper to use modules
      modules: [Mousewheel, Navigation, Pagination],
  
      // Optional parameters
      direction: 'vertical',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination2',
      },
  
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next2',
      //   prevEl: '.swiper-button-prev2',
      // },
  
      effect: 'fade',
  
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar2',
      // },
  
      observer: true,
      observerParents: true,

      slidesPerView: 3,
      slidesPerGroup: 3,

      mousewheel: true,
    });
  
  }, []);
  
  return (
    
    <div></div>

 
  )
}

export default Eventslider