import {useState, useEffect} from "react";
import './Projects_sub.css'
import {Link} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { IoCaretBackCircle } from "react-icons/io5";
import {Navbar, Footer,Lavabg} from '../../../components/export';
import Project_post from "./Project_post";
import project_content from '../../../assets/projects/project_img1.jpg';
import {Fade} from 'react-awesome-reveal';


function Projects_sub() {
    return (
        <div className='Partner'>
      <div className = 'background'>
        <Navbar/>
        <div className="project_content">
        <div className="ett__brand-heading section__margin">
        
        <div className='project__head'>
        <h1> <BsFillCaretRightFill color = "#ffcc07" size="5vh"/>           
               PROJECT</h1>
               </div>
               </div>
      <Fade direction='down' duration={2000} cascade triggerOnce>
        <div className="project__sub__body">
            <img src={project_content} />  
            <div className="project__sub_text">
           
            <h2>PROJECT DESCRIPTION</h2>
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            </div>

        </div>
    </Fade>

        <div className="ett__brand-heading section__margin">
            <Link to={'/projects'}><IoCaretBackCircle color="white" size="10vh"></IoCaretBackCircle></Link>
            
        </div>
      
        <div className = "other__posts">
        <div className="ett__brand-heading section__margin">
            <h1>
              <BsFillCaretRightFill color = "#ffcc07" size="5vh"/>           
                OTHER POSTS</h1>
        </div>
        </div>
    <Fade direction='left'duration={1500} damping={0.1} triggerOnce>

          <div className="project__other__post">
            <Project_post/>
            <Project_post/>
            <Project_post/>
            </div>
          </Fade>
        </div>
        <Footer/>
        <Lavabg />

      </div>
    </div>
    )
}
  
export default Projects_sub;
