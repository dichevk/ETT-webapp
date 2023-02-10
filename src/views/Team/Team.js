
import React from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Game } from './containers/export';
import './team.css';

const Team = ({requestService}) => {
  return (
    <div className='Team'>
      <div className='background'>
        <Navbar currentPage="Team"/>
        <Game requestService={requestService}/>
        <Footer />

        <Lavabg />
      </div>
    </div>
  )
}

export default Team;