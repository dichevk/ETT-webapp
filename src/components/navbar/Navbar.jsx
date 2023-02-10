
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import logo from '../../assets/ett_logo/ett_logo.png';
import './navbar.css';

import { Fade } from "react-awesome-reveal";

const NavbarItems = (props) => {
  const orange = {color:'orange'};
  return (
    <>
      <p style={props.currentPage === "Home" ? orange : {}}><Link to='/'>Home</Link></p>
      <p style={props.currentPage === "Team" ? orange : {}}><Link to='/team'>Team</Link></p>
      <p style={props.currentPage === "Projects" ? orange : {}}><Link to="/projects">Projects</Link></p>
      <p style={props.currentPage === "Events" ? orange : {}}><Link to="/events">Events</Link></p>
      <p style={props.currentPage === "Blogs" ? orange : {}}><Link to="/blogs">Blog</Link></p>
      <p style={props.currentPage === "Partner" ? orange : {}}><Link to='/partner'>Partners</Link></p>
      <p style={props.currentPage === "Shop" ? orange : {}}><Link to="/shop">Shop</Link></p>
      <p style={props.currentPage === "Contact" ? orange : {}}><Link to="/contact">Contact</Link></p>
    </>
)}

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ett__navbar'>
      
      <div className="ett__navbar-links">
        <Fade direction='down' duration={2000} triggerOnce >
          <div className="ett__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        
          <div className="ett__navbar-links_container">
            <NavbarItems currentPage={props.currentPage}/>
          </div>
        </Fade>
      </div>

      <div className="ett__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)
          } />
        }

        {toggleMenu && (
          <div className='ett__navbar-menu_container scale-up-center'>
            <div className="ett__navbar-menu_container-links">
              <NavbarItems />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar