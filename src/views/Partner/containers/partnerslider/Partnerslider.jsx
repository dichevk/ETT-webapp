
import React, { useEffect } from 'react'
import Swiper, { Mousewheel, Navigation, Pagination, SwipeSlide } from 'swiper';

// Import Swiper and modules styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import styles bundle
import 'swiper/css/bundle';

import './partnerslider.css';

const Partnerslider = ({setSelectedPartner, partners, baseURL}) => {

  useEffect(() => {
    const swiper = new Swiper('.partnerswiper', {
      on: {
        click: (swiper) => {
          if(setSelectedPartner) setSelectedPartner(swiper.clickedSlide.id);
        }
      },

       // configure Swiper to use modules
       modules: [Mousewheel, Navigation, Pagination],
  
       // Optional parameters
       direction: 'horizontal',
       loop: true,
   
       // If we need pagination
       pagination: {
         el: '.partnerswiper-pagination',
       },
   
       // Navigation arrows
       navigation: {
         nextEl: '.partnerswiper-button-next',
         prevEl: '.partnerswiper-button-prev',
       },
   
       effect: 'fade',
   
       // And if we need scrollbar
       // scrollbar: {
       //   el: '.swiper-scrollbar2',
       // },
   
       observer: true,
       observerParents: true,
 
       slidesPerView: 3,
       
       slideToClickedSlide: true,
       centeredSlides: true,
      //mousewheel: true,
 
       spaceBetween: 50,

       breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 50,
        }}
    });

  }, []);

  return (
    <div className="swiper partnerswiper">
      <div className="swiper-wrapper">
        {
          partners.map((partner) => {
            return (
              <div class="swiper-slide partnerswiper-slide" id={partner.id} >
                <img src = {partner.attributes.image.data[0].attributes.url} alt="Member" />
                <h2>{partner.attributes.name}</h2>
              </div>
            )
          })
        }
      </div>

      <div class="swiper-pagination partnerswiper-pagination"></div>

      <div class="swiper-button-prev partnerswiper-button-prev"></div>
      <div class="swiper-button-next partnerswiper-button-next"></div>

    </div>
  )
}

export default Partnerslider;