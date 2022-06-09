import "react-bootstrap";
import "../static/styles/Navbar.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import {backendBusinessProfileURL, backendProfileURL} from "./BackendInfo";

import Button from "react-bootstrap/Button";
// import { ConstructionRounded } from "@mui/icons-material";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import React from "react";
import axios from 'axios';
import logo from "../static/imgs/logo.png";
import personlogo from "../static/svgs/person-fill.svg";
import searchlogo from "../static/svgs/search.svg";

// http://127.0.0.1:8000/login/

function MyVerticallyCenteredModal(props) {

  const [formValue, setFormValue] = React.useState(
    { 'email':'', 'password':''  }
  )


  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    const loginFormData = new FormData();
  loginFormData.append("username", formValue.email)
  loginFormData.append("password", formValue.password)



  try {
    // make axios post request
    try{
    const response =  axios({
      method: "post",
      url: backendProfileURL,
      data: loginFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });}
    catch(error){
      const response =  axios({
        method: "post",
        url: backendBusinessProfileURL,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
  } catch(error) {
    console.log(error)
  }

  }

 return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="checkalign">
            <></> &nbsp;
            <></> &nbsp;
            
            <Form className="justify-content-md-center" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={{ width: "350px" }}
                  placeholder="Enter email"
                  type="email"
                  name="formemail"
                />
           
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  style={{ width: "350px" }}
                  type="password"
                  placeholder="Enter Password"
                  name="formpassword"
                />
              </Form.Group>
              <Link to="/">
                <Button
                  style={{ width: "150px", marginLeft:"6.5em" }}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Link>
              <></> &nbsp;
              <></> &nbsp;
              <p style={{marginTop:"0.5em" }}>
                Not a member? <Link to="/SignUp" onClick={handleSubmit}>Signup</Link>
              </p>
            </Form>
          </div>
          <></> &nbsp;<></> &nbsp;
        </div>
      </Modal.Body>
    </Modal>
  );
}

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar className="color-nav" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img
              alt=""
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
            />
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/">
              <img
                alt="logo"
                src={searchlogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Nav.Link>
            <Nav.Link href="/All">VENDORS</Nav.Link>
            <Nav.Link href="#home">PHOTOS</Nav.Link>
            
            <Nav.Link onClick={() => setModalShow(true)}>
              <img
                alt="logo"
                src={personlogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              LOGIN
            </Nav.Link>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
