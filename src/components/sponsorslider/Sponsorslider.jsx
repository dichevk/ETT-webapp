import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './sponsorslider.css';
import { google, slack, atlassian, dropbox, shopify } from './import';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 4,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      // fade: true,

      // accessibility: false
      swipeToSlide: true,
      className: "slider__container"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={atlassian} alt="" />
          </div>
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={slack} alt="" />

          </div>
          <div>
            <img src={dropbox} alt="" />
          </div>
          <div>
            <img src={shopify} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
