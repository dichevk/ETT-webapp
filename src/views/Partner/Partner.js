
import React, { memo, useEffect, useState } from 'react';
import { Navbar, Footer, Lavabg } from '../../components/export';
import { Partners } from './containers/export';

import './Partner.css';

const Partner = ({requestService}) => {
 
  return (
    <div className='background'>
      <Navbar currentPage="Partner"/>
      <Partners requestService={requestService} />
      <Footer />
      <Lavabg />
    </div>
  )
}

export default Partner;