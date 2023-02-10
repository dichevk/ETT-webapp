import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lavabg } from './components/export';

//views
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import Partner from "./views/Partner/Partner";
import Blogs from './views/Blog/Blogs';
import Blog_sub from './views/Blog/containers/Blog_sub';
import Projects from './views/Project/Projects';
import Projects_sub from './views/Project/containers/Projects_sub';
import Shop from './views/Shop/Shop';
import EventsPage from './views/Events/Events';


import { Navbar } from "./components/export";
import { Footer } from "./components/export";

// import Scroll from '../../design-project-group-9-ett-website/src/components/SmoothScroll';

function App({ requestService }) {

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* add route with path and element. Element is a js file you made in pages directory */}
          <Route path='/' element={<Home requestService={requestService}/> } />
          <Route path='/team' element={<Team requestService={requestService}/>} />
          <Route
            path='/partner'
            element={<Partner requestService={requestService} />}
          />
          <Route path='/blogs' element={<Blogs requestService={requestService}/>}/>
          <Route path='/blog/:id' element={<Blog_sub requestService={requestService}/>}/>
          <Route path='/projects' element={<Projects requestService={requestService}/>}/>
          <Route path='/projects_sub' element={<Projects_sub/>}/>
          <Route path='/shop' element={<Shop requestService={requestService}/>}/>
          <Route path='/events' element={<EventsPage requestService={requestService}/>}/>
          
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;