import React, { useEffect } from 'react';
import './header.css';

import wordmark from '../../../../assets/ett_logo/ett_wordmark.png';
import gaming from '../../../../assets/gaming.jpg';
// import grid from '../../../../assets/grid.png';

import { Fade, Zoom } from "react-awesome-reveal";

const Header = () => {

  return (
    <div className='ett__header section__padding' id='home'>
      
        <div className='ett__header-content'>
          <Fade direction='left' duration={3000} damping={0.1} cascade triggerOnce>
            <img src={wordmark} alt="wordmark" />
            <p>We aim to take esports in Twente to the next level through a combination of cutting edge performance research and participation in international tournaments.</p>
          </Fade>
        </div>

        <div className='ett__header-image'>
          <Fade direction='left' duration={4000} damping={0.1} triggerOnce>
            <img src={gaming} alt="gaming" />
            {/* <img src={grid} alt="grid" /> */}
          </Fade>
        </div>
      
    </div>
  )
}

export default Header