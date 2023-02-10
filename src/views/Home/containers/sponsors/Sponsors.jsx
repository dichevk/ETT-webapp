
import React, { useEffect } from 'react';
import './sponsors.css';

import {Sponsorslider} from '../../../../components/export';
// import { google, slack, atlassian, dropbox, shopify } from './import';

import { Fade, Zoom } from "react-awesome-reveal";

const Sponsors = () => {

  return (
    <div className='ett__brand section__padding' >
      <div className="ett__brand-heading section__margin">
        <Fade direction='down' duration={3000} cascade triggerOnce>
          <div className="triangle-right"></div>
          <h1>OUR SPONSORS</h1>
        </Fade>
      </div>

      <div className="ett__brand-slider">
        <Sponsorslider />
      </div>
      {/* <div className="ett__brand-logo">
        <div>
          <img src={google} alt="Google" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopify" />
        </div>
      </div> */}
    </div>
  )
}

export default Sponsors