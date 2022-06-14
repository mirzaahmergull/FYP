import "react-bootstrap";
import "../static/styles/Navbar.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { backendBusinessProfileURL, backendProfileURL } from "./BackendInfo";

import Button from "react-bootstrap/Button";
// import { ConstructionRounded } from "@mui/icons-material";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import React from "react";
import axios from "axios";
import logo from "../static/imgs/logo.png";
import personlogo from "../static/svgs/person-fill.svg";
import searchlogo from "../static/svgs/search.svg";

// http://127.0.0.1:8000/login/
let login=false

function MyVerticallyCenteredModal(props) {
  const [formValue, setFormValue] = React.useState({ email: "", password: "" });


  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    console.log("IN HANDLE CHANGE OF LOGIN", event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("IN HANDLE SUBMIT OF LOGIN");
    console.log(formValue);
      try {
        fetch("api/login/",{
          method: "POST",
          body:  JSON.stringify(formValue),
          headers: { "Content-Type": "multipart/form-data" },
        }).then(data=>data.json()).then((data)=>{
          if(data.status === true){
            console.log("LOGIN SUCCESS");
            login=true;
          }
          console.log(data);
        });
      }
     catch (error) {
      console.log(error);
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
            <Form
              className="justify-content-md-center"
              onSubmit={handleSubmit}
              action="#"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={{ width: "350px" }}
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setFormValue({
                      email: e.target.value,
                      password: formValue.password,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  style={{ width: "350px" }}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) =>
                    setFormValue({
                      email: formValue.email,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Link to="/">
                <Button
                  style={{ width: "150px", marginLeft: "6.5em" }}
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Link>
              <></> &nbsp;
              <></> &nbsp;
              <p style={{ marginTop: "0.5em" }}>
                Not a member?{" "}
                <Link to="/SignUp" onClick={handleSubmit}>
                  Signup
                </Link>
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
  const [LoginStatus, setLoginStatus] = React.useState(false);
  console.log(LoginStatus)
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
              {login ? "Logout":"Login"}
            </Nav.Link>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              setLoginStatus
                          />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
