
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "./teamslider.css";
import { csgo, rainbowsix, valorant, lol, rocketleague } from './import';

export default function App({setSelectedGame, teams, baseURL}) {

  // const [style, setStyle] = useState("cont");

  // const changeStyle = () => {
  //   setStyle("cont2");
  // };

  return (
    <Swiper
      slideToClickedSlide={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
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
        }
      }}

      // slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}

      initialSlide={3}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onClick={(swiper)=>{
        // console.log(swiper.clickedSlide.id);
        if (setSelectedGame) setSelectedGame(swiper.clickedSlide.id);
      }}
    >
      {
        teams.map((team) =>  {
          return (
            <SwiperSlide id={team.id}>
            {/* <SwiperSlide> */}
              <div className="teamslider__container">
                <img src={team.attributes.image.data.attributes.url } alt="" />
                <h2>{team.attributes.name}</h2>
              </div>
            </SwiperSlide>
        )})
      }
    </Swiper>
  );
};