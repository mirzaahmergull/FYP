import './App.css';
import React, { Component }  from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Gallery2 from './gallery2.js';
import SimilarWeddings2 from './similarweddings2.js';
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
  <img src="https://shadiwelcome.com/uploads/real_wedding/21479111393.jpg" onDragStart={handleDragStart} role="presentation"  style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/131479111393.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/71479111393.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G08wzz8W113YfUbxLpiwsbqOuojZQ6SGXg&usqp=CAU" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/151479111393.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/171479111393.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://shadiwelcome.com/uploads/real_wedding/51479111393.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,


  
];

const Aiza = () => {
  return (
    <div style={{marginTop: "50px", marginBottom: "50px"}}>
      <h1 style={{color:"rgb(162, 212, 242)"}}>Kashif Qadri & Aiza Taimoor</h1>
        <h4 style={{color: "rgb(149, 150, 150)", fontFamily: "Cursive"}}>Karachi</h4>

    {' '}
        &nbsp;

        {' '}
        &nbsp;
    <Gallery2 />

    <SimilarWeddings2 />
    </div>
    );
}

export default Aiza;