// Import Swiper React components
import React, {useState, useEffect} from "react";
import './Blogs.css'
import {Navbar, Footer,Lavabg, Paginator} from '../../components/export';
import Blog from './containers/Blog';
import { BsFillCaretRightFill} from "react-icons/bs";

const Blogs = ({requestService}) => {

  
  var itemsCountPerPage = 4;

  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  // get blogs from backend
  useEffect(() => {
    requestService
    //send request
      .getBlogs()
      //get 'partners' from response
      .then((blogs) => { 
        console.log(blogs);
        //set partners in variable partners
        setBlogs(blogs.data);
        setTotalItemsCount(blogs.data.length);  
        console.log(totalItemsCount);
       });
  }, [requestService]);


  
  const [page, setPage] = useState(1); 
  useEffect(() => {
    setSelectedBlogs(
      blogs.slice((page-1)*itemsCountPerPage,page*itemsCountPerPage)
    );
  },[page,blogs]);



  return (
    <div className='Partner'>
      <div className = 'background'>
        <Navbar currentPage="Blogs"/>
        <div className='ett__brand section__padding'>
        <div className="ett__brand-heading section__margin">
            <div className='blog__head'>
            <h1>
              <BsFillCaretRightFill color = "#ffcc07"/>           
            BLOG</h1>
            </div>
            </div>
          </div>

          {selectedBlogs.map((blog) => {
            return(<Blog blog={blog}/>)
          })}

        {/* page 넘어가는거 */}
        <Paginator page={page} setPage={setPage} itemsCountPerPage={4} totalItemsCount={totalItemsCount} />
        <Footer/>
        <Lavabg />

      </div>
    </div>
  )
}

export default Blogs;