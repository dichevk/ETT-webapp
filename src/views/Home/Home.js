
import React, { useEffect } from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Header, Sponsors, Teams, Events } from './containers/export';

// import Scroll from '../../components/SmoothScroll'; //Smooth Scrolling, additional feature might be implemented

const Home = ({requestService}) => {

  return (
    <div className='background'>
        
        <Navbar currentPage="Home"/>
        <Header />
        <Sponsors />
        <Teams requestService={requestService}/>
        <Events />
        <Footer />


   </div>
  )
}

export default Home;