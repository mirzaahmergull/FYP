import './App.css';
import React, { Component }  from 'react';
import SimilarWeddings3 from './similarweddings3.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Gallery1 from './gallery.js';

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
  <img src="https://3.bp.blogspot.com/-vBr2iUs8ebE/WFbGy_O8Y5I/AAAAAAAAHXQ/qOH5aqZC9zEDIrFnQuGvzG1jROdtY8Q4ACLcB/s1600/urwa-shaadi.jpg" onDragStart={handleDragStart} role="presentation"  style={{width: "440px", height: "440px"}}/>,
  <img src="https://i.tribune.com.pk/media/images/1265137-___n-1481877637/1265137-___n-1481877637.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://4.bp.blogspot.com/-nQqMrgv9y0Q/WFV2iTEa7HI/AAAAAAAAHWY/GVNUT7_M_xws8whGK_cP3Tk4KT7Hqau6QCLcB/s1600/urwa-hocane-wedding-pics.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://www.thenews.com.pk//assets/uploads/updates/2018-05-25/321297_668650_updates.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://www.geo.tv/assets/uploads/updates/2021-02-26/337061_460241_updates.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://newfashionelle.com/wp-content/uploads/2016/12/urwa-hocane-wedding-pics.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,
  <img src="https://style.pk/wp-content/uploads/2016/12/Urwa-Farhan-Wedding-Pictures-1.jpg" onDragStart={handleDragStart} role="presentation" style={{width: "440px", height: "440px"}}/>,

  
];

const Farhan = () => {
  return (
    
      <div style={{marginTop: "50px", marginBottom: "50px"}}>
      <h1 style={{color:"rgb(162, 212, 242)"}}>Farhan Saeed & Urwa Hocane</h1>
        <h4 style={{color: "rgb(149, 150, 150)", fontFamily: "Cursive"}}>Karachi</h4>

    {' '}
        &nbsp;

        {' '}
        &nbsp;
    <Gallery1 />

    <SimilarWeddings3 />
    </div>
  );
}

export default Farhan;