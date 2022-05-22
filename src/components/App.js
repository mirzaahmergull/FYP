import '../static/styles/App.css';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer1 from './Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/Home.js';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';
import VendorPhoto from './MainVendors/PhotographerVendor.js';
import VendorMakeup from './MainVendors/MakeupVendor.js';
import VendorWear from './MainVendors/WearVendor.js';
import VendorVenue from './MainVendors/VenueVendor.js';
import VendorPlanner from './MainVendors/PlannerVendor.js';
import VendorCaterer from './MainVendors/CatererVendor.js';
import VendorGroom from './MainVendors/SalonVendor.js';
import VendorHoneymoon from './MainVendors/HoneymoonVendor.js';
import Desc from './Description.js';
import SignUp from './Signup.js';
import Login from './Login.js';
import SignUpVendor from './SignupVendor.js';
import Vendors from './MainVendors/AllVendors.js';

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
        <Route exact path="/VendorPhoto" element={<VendorPhoto />} />
        <Route exact path="/VendorMakeup" element={<VendorMakeup />} />
        <Route exact path="/VendorWear" element={<VendorWear />} />
        <Route exact path="/VendorVenue" element={<VendorVenue />} />
        <Route exact path="/VendorPlanner" element={<VendorPlanner />} />
        <Route exact path="/VendorCaterer" element={<VendorCaterer />} />
        <Route exact path="/VendorGroom" element={<VendorGroom />} />
        <Route exact path="/VendorHoneymoon" element={<VendorHoneymoon />} />
        <Route exact path="/IP1" element={<Desc/>} />
        <Route exact path="/SignUp" element={<SignUp/>} />
        <Route exact path="/SignUpVendor" element={<SignUpVendor/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/All" element={<Vendors/>} />
        </Routes>
        <Footer1/>
         
      </div>
    </Router>
  );
}

export default App;
