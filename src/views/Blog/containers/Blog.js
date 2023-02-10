import './Blog.css'
import {Fade} from 'react-awesome-reveal';
import {BsFillCalendarCheckFill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function Blog({blog}) {
  return (
    <Fade direction='left'duration={2000} damping={0.1} triggerOnce>
    <div href="" className='blog'>
      <div className ="img__box">
      <img src={blog.attributes.image.data[0].attributes.url} />
      </div>
      <div className="blog__box">
        <h2 className ="blog__title">
          {blog.attributes.title}
        </h2>
        <div className="blog__dna">
         <BsFillCalendarCheckFill/>
        <p className = "blog__date">{blog.attributes.createdAt}</p>
        <BsFillPersonFill/>
        <p className ="blog__author"> Matthias </p>
        </div>
        <p className = "blog__text"> 
        {blog.attributes.description}
        </p>
        <a className = "discover_more">
          <Link to={`/blog/${blog.id}`}>Discover more</Link>
          
        </a>
      </div>
    </div>
    </Fade>
  )
}

export default Blog;
