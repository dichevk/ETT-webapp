import {useState, useEffect} from "react";
import './Project_featured.css'
import {Fade} from 'react-awesome-reveal';
import {BsFillCalendarCheckFill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function Project_featured({project}) {
  
  return (
    <Fade direction='down' duration={3000} cascade triggerOnce>

    <div href="" className='project__featured'>
      <div className ="img__box">
      <img src={project} />
      </div>
      <div className="project__featured__box">
        <h1 className ="project__featured__title">
          FEATURED PROJECT EXAMPLE
        </h1>
        <div className="project__featured__dna">
            <BsFillCalendarCheckFill/>
            <p className = "project__featured__date">February 13, 2021</p>
            <BsFillPersonFill/>
            <p className ="project__featured__author"> Matthias </p>
        </div>
            <p className = "project__featured__text"> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a className = "learn_more">
              <Link to={'/projects_sub'}>Learn more</Link>
              
        </a>
      </div>
    </div>
    </Fade>

  )
}

export default Project_featured;
