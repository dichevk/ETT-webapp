
import React, { useEffect } from 'react';

// core version + navigation, pagination modules:
import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';

import './memberslider.css';
import { member_placeholder } from './import';
import Teams from '../../views/Home/containers/teams/Teams';

const Memberslider = ({members, baseURL}) => {

  useEffect(() => {
    const swiper = new Swiper('.memberswiper', {
      
      // configure Swiper to use modules
      modules: [Mousewheel, Navigation, Pagination],
  
      // Optional parameters
      direction: 'horizontal',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.memberswiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.memberswiper-button-next',
        prevEl: '.memberswiper-button-prev',
      },
  
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

      spaceBetween: 50,
    });
  
  }, []);
  
  return (
    <div class="swiper memberswiper">
      <div class="swiper-wrapper">
        {
          members.map((member) => {
            return (
              <div class="swiper-slide memberswiper-slide" id={member.id}>
                <img src={baseURL + member.attributes.members.data.attributes.image.data.attributes.url } alt="Member" />
                <h2>{member.attributes.members.data.attributes.name}</h2>
              </div>
            )
          })
        }
        
        {/* <div class="swiper-slide memberswiper-slide">
          <img src={member_placeholder} alt="" />
          <h2>Member 2</h2>
        </div>
        <div class="swiper-slide memberswiper-slide">
          <img src={member_placeholder} alt="" />
          <h2>Member 3</h2>
        </div>
        <div class="swiper-slide memberswiper-slide">
          <img src={member_placeholder} alt="" />
          <h2>Member 4</h2>
        </div>
        <div class="swiper-slide memberswiper-slide">
          <img src={member_placeholder} alt="" />
          <h2>Member 5</h2>
        </div>
        <div class="swiper-slide memberswiper-slide">
          <img src={member_placeholder} alt="" />
          <h2>Member 6</h2>
        </div> */}

      </div>

      <div class="swiper-pagination memberswiper-pagination"></div>

      <div class="swiper-button-prev memberswiper-button-prev"></div>
      <div class="swiper-button-next memberswiper-button-next"></div>


      {/* <div class="swiper-scrollbar swiper-scrollbar2"></div> */}
    </div>
  )
}

export default Memberslider;