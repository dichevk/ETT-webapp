import React from "react";
import project1 from '../../../assets/projects/project_img1.jpg';
import './Project_post.css'
import {Fade} from 'react-awesome-reveal';



function Project_post(){
    return(
    <Fade>    

        <div className="project__post">
        <img src={project1} />

        <h3>Dummy project example</h3>
        </div>
    </Fade>
    )
}

export default Project_post;