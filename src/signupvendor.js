import "./static/styles/App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const SignUpVendor = () => {
  return (
    <div
      className="border  rounded-3 border border-2 justify-content-md-center"
      style={{
        borderWidth: "2",
        borderColor: "gray",
        marginLeft: "450px",
        marginRight: "350px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="checkalign">
        <></> &nbsp;
        <></> &nbsp;
        <Form className="justify-content-md-center">
          <Form.Label style={{ fontSize: "50px" }}>Signup</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Select vendor type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Photographers</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bridal Makeup</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Groom Salons</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Wedding Planners</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Venue</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cakes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Jwellery</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Caterers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Cards & Invitations
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Entertainment</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Honeymoon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <></> &nbsp;
          <></> &nbsp;
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="text"
              placeholder="Business Name"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 justify-content-md-center"
            controlId="formBasicEmail"
          >
            <Form.Control
              style={{ width: "350px", height: "100%" }}
              type="name"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Link to="/">
            <Button style={{ width: "250px" }} variant="primary" type="submit">
              Submit
            </Button>
          </Link>
          <></> &nbsp;
          <></> &nbsp;
          <h4>OR</h4>
          <Link to="/SignUp">
            <Button style={{ width: "250px" }} variant="primary" type="submit">
              Signup as user
            </Button>
          </Link>
          <></> &nbsp;
          <></> &nbsp;
          <p>
            Already a member? <Link to="/Login">Login</Link>
          </p>
        </Form>
      </div>
      <></> &nbsp;<></> &nbsp;
    </div>
  );
};

export default SignUpVendor;
