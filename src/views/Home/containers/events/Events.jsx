
import React, { useEffect } from 'react';

import './events.css';

import { Eventslider } from '../../../../components/export';

import { Fade, Zoom } from "react-awesome-reveal";

const Events = () => {

  return (
    <div className='ett__events section__padding'>
      <div className="ett__events-heading section__margin">
        <Fade direction='left' duration={3000} damping={0.1} cascade triggerOnce>
          <div className="triangle-right"></div>
          <h1>UPCOMING EVENTS</h1>
        </Fade>
      </div>

      <Fade direction='left' duration={3000} damping={0.1} cascade triggerOnce>
        <div className="ett__events-slider">
          <Eventslider />
        </div>
      </Fade>
    </div>
  )
}

export default Events