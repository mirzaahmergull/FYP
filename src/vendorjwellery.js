import ScMenu from "./scrollMenu.js";
import React, { Component }  from 'react';
import Photographers from "./photographers.js";
import BridalMakeup from "./bridalmakeup.js";
import BridalWear from "./bridalwear.js";
import Jwellery from "./jwellery.js";



const VendorJwellery = () => {
    return ( 
        <div style={{marginTop: "50px", marginBottom: "50px"}}>

        <ScMenu />
        
        <div style={{marginTop: "50px", marginBottom: "50px"}}>
            <h2 style={{color:"rgb(162, 212, 242)"}}>Jewellery</h2>
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20,color: "rgb(149, 150, 150)" }}>___________________________________________________________</div>{' '}
        {' '}
        &nbsp;
        {' '}
        &nbsp;
            <Jwellery />
        </div>
        </div>

     );
}
 
export default VendorJwellery;