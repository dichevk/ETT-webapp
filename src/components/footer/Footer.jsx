
import React, {useEffect} from 'react';
import './footer.css';

import ettLogoWordmark from '../../assets/ett_logo/ett_logo_wordmark.png';

import {FaInstagram, FaFacebook, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {

  return (
    <div className='ett__footer section__padding'>
      <div className="ett__footer-links">

        <div className="ett__footer-links_logo">
          <img src={ettLogoWordmark} alt="ettLogoWordmark" />  
          <p>De Hems 10, 7522 NL Enschede, The Netherlands, All Right Reserved.</p>
        </div>

        <div className="ett__footer-links_div">
          <h4>Business</h4>
          <p>Meet the Team</p>
          <p>Positions</p>  
          <p>News</p>
        </div>

        <div className="ett__footer-links_div">
          <h4>Contact Us</h4>
          <p>info@esportsteamtwente.nl</p>
          <p>+31 06 37 28 03 03</p>
        </div>
      </div>

      <div className="ett__footer-followus">
        <h4>Connect with us: </h4>
        <div className="ett__footer-followus_icons">
          <a href="https://www.instagram.com/esportsteamtwente/">
            <FaInstagram size={40} />
          </a>
          <a href="facebook">
            <FaFacebook size={40}/> 
          </a>  
          <a href="twitter">
            <FaTwitter size={40} />  
          </a>  
          <a href="twitch">
            <FaTwitch size={40}/>
          </a>  
        </div>
      </div>
    </div>
  )
}

export default Footer