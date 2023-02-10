import {useState, useEffect} from "react";
import './Projects.css'
import Project from './containers/Project';
import Project_featured from './containers/Project_featured';

import project_img from '../../assets/projects/project_img1.jpg'
import {Navbar, Footer,Lavabg} from '../../components/export';
import { BsFillCaretRightFill } from "react-icons/bs";


function Projects () {
  return (
    <div>
      <div className = 'background'>        
        <Navbar currentPage="Projects"/>
        <div className='ett__brand section__padding'>
        <div className="ett__brand-heading section__margin">
            <div className='prject__head'>
            <h1>
              <BsFillCaretRightFill color = "#ffcc07"/>           
            PROJECT</h1>
            </div>
        </div>
        </div>
          <div className = "project__featured__body">
          <Project_featured project= {project_img}/>

          </div>
          <div className = "project__body">
          <Project project = {project_img}/>
          <Project project = {project_img}/>
          </div>
          <div className='project__body'>
          <Project project = {project_img}/>
          <Project project = {project_img}/>
          </div>
        <Footer/>
        <Lavabg />

        </div>

    </div>
    
  )
}

export default Projects;