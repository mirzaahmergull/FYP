import React, { Component } from 'react';
import './App.css';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from 'react-bootstrap/Card'
import all from './all.png'
import b from './b.png';
import bw from './bw.png';
import c from './c.png';
import ci from './ci.png';
import e from './e.png';
import gs from './gs.png';
import h from './h.png';
import j from './j.png';
import p from './p.png';
import v from './v.png';
import wp from './wp.png';
import { Link } from 'react-router-dom';

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const ScMenu = () => {
    return ( 
        
        <ScrollMenu  arrowLeft='false' arrowRight='false' wheel='true'>
          <Link to="/All" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={all}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorMakeup" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={b}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorWear" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={bw}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorCaterer" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={c}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorCards" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={ci}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorEntertainment" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={e}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorGroom" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={gs}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorHoneymoon" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={h}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorJwellery" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={j}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
               <Link to="/VendorPhoto" style={{ textDecoration: 'none'}}> <img
                    alt="logo"
                    src={p}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorVenue" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={v}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
                <Link to="/VendorPlanner" style={{ textDecoration: 'none'}}><img
                    alt="logo"
                    src={wp}
                    width="90"
                    height="110"
                    className="d-inline-block align-top"
                
                /></Link>
 
        </ScrollMenu>
 
     );
}
 
export default ScMenu;