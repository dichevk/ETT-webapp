import React from "react";
import blog2 from '../../../assets/blogs/blog_img2.jpg';
import {Fade} from 'react-awesome-reveal';
import './Blog_post.css'

function Blog_post(){
        return(
    <Fade>    

        <div className="post">
        <img src={blog2} />

        <h3>Dummy blog example</h3>
        </div>
        </Fade>

    )

}

export default Blog_post;