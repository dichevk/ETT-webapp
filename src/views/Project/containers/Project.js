import {useState, useEffect} from "react";
import './Project.css'
import {Fade} from 'react-awesome-reveal';
import {BsFillCalendarCheckFill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function Project({project}) {
  
  return (
    <Fade direction='left'duration={2000} damping={0.1} triggerOnce>


    <div href="" className='project'>
      <div className ="project__img__box">
      <img src={project} />
      </div>
      <div className="project__box">
        <h2 className ="project__title">
          DUMMY PROJECT EXAMPLE
        </h2>
        <div className="project__dna">
            <BsFillCalendarCheckFill/>
            <p className = "project__date">February 13, 2021</p>
            <BsFillPersonFill/>
            <p className ="project__author"> Matthias </p>
        </div>
            <p className = "project__text"> 
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

export default Project;
