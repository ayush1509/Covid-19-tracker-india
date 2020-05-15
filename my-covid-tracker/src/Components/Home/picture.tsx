import React from 'react';

import desktop from './images/corona.jpg'
import mobile from './images/mobile.jpg'
import './Card.css'




function card() {
  return (
    <div className="image">
      <img className="desktop" src={desktop} alt="indian"/>
      <img className="mobile"  src={mobile} alt="india"/>

    </div>
  );
}

export default card;
