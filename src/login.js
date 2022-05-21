import "./static/styles/App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Form.Label style={{ fontSize: "50px" }}>Login</Form.Label>
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
          <Link to="/">
            <Button style={{ width: "250px" }} variant="primary" type="submit">
              Login
            </Button>
          </Link>
          <></> &nbsp;
          <></> &nbsp;
          <p>
            Not a member? <Link to="/SignUp">Signup</Link>
          </p>
        </Form>
      </div>
      <></> &nbsp;<></> &nbsp;
    </div>
  );
};

export default Login;
