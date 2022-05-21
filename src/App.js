import logo from './heart.svg';
import './App.css';
import NavBar from './Navbar';
import Component2 from './component2';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFlip from './component3'
import React, { Component }  from 'react';
import Slides from './component4'
import C5 from './component5';
import Footer1 from './footer1';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Venue from './venue.js';
import Home from './home.js';
import AboutUs from './aboutus.js';
import ContactUs from './contactus.js';
import RealWeddings from './realweddings.js';
import Sanam from './rwsanam.js';
import Fatima from './fatimarw.js';
import Farhan from './rwfarhan.js';
import Aiza from './aizarw.js';
import VendorPhoto from './vendorphoto.js';
import VendorMakeup from './vendormakeup.js';
import VendorWear from './vendorwear.js';
import VendorJwellery from './vendorjwellery.js';
import VendorVenue from './vendorvenue.js';
import VendorPlanner from './vendorplanner.js';
import VendorCards from './vendorcards.js';
import VendorCaterer from './vendorcaterer.js';
import VendorEntertainment from './vendorentertainment.js';
import VendorGroom from './vendorgroom.js';
import VendorHoneymoon from './vendorhoneymoon.js';
import IP1 from './ip1.js';
import SignUp from './signup.js';
import Login from './login.js';
import SignUpVendor from './signupvendor.js';
import All from './all.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <></>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        <Route exact path="/RealWeddings" element={<RealWeddings />} />
        <Route exact path="/Sanam" element={<Sanam />} />
        <Route exact path="/Fatima" element={<Fatima />} />
        <Route exact path="/Farhan" element={<Farhan />} />
        <Route exact path="/Aiza" element={<Aiza />} />
        <Route exact path="/VendorPhoto" element={<VendorPhoto />} />
        <Route exact path="/VendorMakeup" element={<VendorMakeup />} />
        <Route exact path="/VendorWear" element={<VendorWear />} />
        <Route exact path="/VendorJwellery" element={<VendorJwellery />} />
        <Route exact path="/VendorVenue" element={<VendorVenue />} />
        <Route exact path="/VendorPlanner" element={<VendorPlanner />} />
        <Route exact path="/VendorCards" element={<VendorCards />} />
        <Route exact path="/VendorCaterer" element={<VendorCaterer />} />
        <Route exact path="/VendorEntertainment" element={<VendorEntertainment />} />
        <Route exact path="/VendorGroom" element={<VendorGroom />} />
        <Route exact path="/VendorHoneymoon" element={<VendorHoneymoon />} />
        <Route exact path="/IP1" element={<IP1/>} />
        <Route exact path="/SignUp" element={<SignUp/>} />
        <Route exact path="/SignUpVendor" element={<SignUpVendor/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/All" element={<All/>} />
        </Routes>
        <Footer1/>
         
      </div>
    </Router>
  );
}

export default App;
