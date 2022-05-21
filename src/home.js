import logo from './heart.svg';
import './App.css';
import Component2 from './component2';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFlip from './component3'
import React  from 'react';
import Slides from './component4'
import C5 from './component5';

const Home = () => {
    return ( 
        <div>
        <Component2 />
        
        <></>{' '}
        &nbsp;
        
        <h1 style={{color:"rgb(162, 212, 242)"}}>Find the Perfect Look</h1>
        <h4 style={{color: "rgb(149, 150, 150)", fontFamily: "Cursive"}}>Get lost in thousands of photos of decor, outfits, jewellery and more to inspire you for your big day</h4>{' '}
        &nbsp;
        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20,color: "rgb(149, 150, 150)" }}>______________________________________ <img
                      alt="logo"
                      src={logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      color="rgb(149, 150, 150)"
                  
                  /> ______________________________________</div>{' '}
        &nbsp;
        
        
        <></>{' '}
        &nbsp;
         <CardFlip/>

          <></>{' '}
        &nbsp;

        <h1 style={{color:"rgb(162, 212, 242)"}}>Browse Real Weddings</h1>
        <h4 style={{color: "rgb(149, 150, 150)", fontFamily: "Cursive"}}>From quaint budget affairs, to glam black tie events- the most inspiring real wedding stories from around the world</h4>{' '}
        &nbsp;
        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20,color: "rgb(149, 150, 150)" }}>______________________________________ <img
                      alt="logo"
                      src={logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      color="rgb(149, 150, 150)"
                  
                  /> ______________________________________</div>{' '}
        &nbsp;
        
        
        <></>{' '}
        &nbsp;
        <Slides/>
        <></>{' '}
        &nbsp;
         <></>{' '}
        &nbsp;
         <></>{' '}
        &nbsp;
        <C5/>       
        <div style={{backgroundColor: "rgb(227, 227, 227)"}}>
          <></>{' '}
        &nbsp;
        <></>{' '}
        &nbsp;
        <h1 style={{color:"rgb(162, 212, 242)"}}>Read Advice & Ideas</h1>
        <h4 style={{color: "white", fontFamily: "Cursive"}}>Practical, on trend advice you cannot afford to miss out. Think of it like your wedding planning BFF.</h4>{' '}
         &nbsp;
        <div style={{ marginLeft: 20, marginRight: 20,color: "rgb(149, 150, 150)" }}>______________________________________ <img
                      alt="logo"
                      src={logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      color="rgb(149, 150, 150)"
                  
                  /> ______________________________________</div>{' '}
        &nbsp;
        </div>
        
        &nbsp;
        </div>
     );
}
 
export default Home;