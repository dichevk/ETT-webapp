import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Blog_sub.css";
import { Link, useLocation } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { IoCaretBackCircle } from "react-icons/io5";
import { Navbar, Footer, Lavabg } from "../../../components/export";
import Blog_post from "./Blog_post";
import { Fade } from "react-awesome-reveal";

const Blog_sub = ({ requestService }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  console.log(1);

  useEffect(() => {
    console.log(2);
    requestService
      .getBlogs(id)
      .then((blog) => {
        setBlog(blog.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(3);
  console.log(blog);

  return (
    <div className='Partner'>
      <div className='background'>
        <Navbar />
        <div className='ett__brand section__padding'>
          <div className='ett__brand-heading section__margin'>
            <div className='blog__head'>
              <h1>
                <BsFillCaretRightFill color='#ffcc07' />
                BLOG
              </h1>
            </div>
          </div>
        </div>
        {blog && (
          <Fade direction='down' duration={3000} cascade triggerOnce>
            <div className='blog__body'>
              {/* 제목 */}
              <h1>{blog.attributes.title}</h1>
              {/* 날짜 */}
              <text>{blog.attributes.createdAt}</text>
              {/* 이미지 */}
              <img src={blog.attributes.image.data[0].attributes.url} />
              {/* 텍스트 */}
              <text>{blog.attributes.text}</text>
            </div>
          </Fade>
        )}

        <div className='ett__brand-heading section__margin'>
          <Link to={"/blogs"}>
            <IoCaretBackCircle color='white' size='10vh'></IoCaretBackCircle>
          </Link>
        </div>

        <div className='other__posts'>
          <div className='ett__brand-heading section__margin'>
            <h1>
              <BsFillCaretRightFill color='#ffcc07' size='5vh' />
              OTHER POSTS
            </h1>
          </div>
        </div>
        <Fade direction='left' duration={1500} damping={0.1} triggerOnce>
          <div className='blog__post'>
            <Blog_post />
            <Blog_post />
            <Blog_post />
          </div>
        </Fade>
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
};

export default Blog_sub;
