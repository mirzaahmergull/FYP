import './App.css';
import React, { Component }  from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SimilarWeddings4 from './similarweddings4.js';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const stagePadding = {
      paddingLeft: 20,     // in pixels
      paddingRight: 20
  };

const items = [
  <img src="https://shadiwelcome.com/uploads/real_wedding/21487527627.jpg" onDragStart={handleDragStart} role="presentation"  style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/11487527627.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/41487528191.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/61487528191.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/11487528093.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://i.pinimg.com/originals/92/0d/7d/920d7d374fbdeb68d649acdeee61d765.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://i.edition.pk/large/2021/01/5ff2e25c67ba7.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/51487528191.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://www.brandsynario.com/wp-content/uploads/sanam-jung-baraat.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,

  
];

const Sanam = () => {
  return (


    <div style={{marginTop: "50px", marginBottom: "50px"}}>
      <h1 style={{color:"rgb(162, 212, 242)"}}>Sanam Baloch & Qassam Jafri</h1>
        <h4 style={{color: "rgb(149, 150, 150)", fontFamily: "Cursive"}}>Karachi</h4>

    {' '}
        &nbsp;

        {' '}
        &nbsp;
    <AliceCarousel className="alice-carousel

alice-carousel__stage
alice-carousel__stage-item

alice-carousel__prev-btn
alice-carousel__prev-btn-item

alice-carousel__next-btn
alice-carousel__next-btn-item

alice-carousel__play-btn
alice-carousel__play-btn-item

alice-carousel__dots
alice-carousel__dots-item"
    animationDuration='500' autoPlay='true' animationType='fadeout' autoPlayInterval='500' buttonsDisabled='false'
    autoPlayStrategy='all' infinite='true' keyboardNavigation='true' mouseTracking='true' responsive={responsive} stagePadding={stagePadding} items={items} />
  
  <SimilarWeddings4 />
  </div>
  );
}

export default Sanam;