import "../static/styles/App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React from "react";
import axios from 'axios';
import backendProfileURL from "./BackendInfo";

const  SignUp =() => {
    let formdata={}  
    const [formValue, setFormValue] = React.useState(
      {"full_name":null, 'password':null, 'email':null }
    )
    let SignUpFormData = new FormData();
  
  const  handleSubmit = async (event) => {
    console.log("IN FORM", formValue)
  
  SignUpFormData.append("full_name", formValue.full_name) 
  SignUpFormData.append("email", formValue.email)
  SignUpFormData.append("password", formValue.password)
  
  console.log("FORM VAR(formdata)",formdata,"FORM VAR(SignUpFormData)",SignUpFormData)
  // try {
    const resp = await axios(
      {
        method:"post",
        url: 'http://127.0.0.1:8000/api/profile/',
        data:SignUpFormData,
        headers: { "Content-Type": "application/json" }
      }
     ).then(resp=>{
       console.log("success")
       console.table(resp)
     }).catch(err=>{
       console.log("DEBUG")
       console.log(err)
     })
     ;
    console.log(resp);

  }

  
  
  const handleChange = (event) => {

    console.log("DEBUG event",event)
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }



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
      
        <Form className="justify-content-md-center" onSubmit={handleSubmit(handleChange)}>
        {/* <Form className="justify-content-md-center" onSubmit={handleSubmit}> */}
          <Form.Label style={{ fontSize: "50px" }}>Signup</Form.Label>
          <Form.Group
            className="mb-3 justify-content-md-center"
            controlId="formBasicEmail"
          >
      
            <Form.Control
              style={{ width: "350px", height: "100%" }}
              type="name"
              placeholder="Name"
              //  onChange = {(e)=>handleChange({...formValue,full_name:e.target.value})}        
            />
      
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              placeholder="Enter email"
              type="email"     
              // onChange = {(e)=>handleChange({...formValue,email:e.target.value})}         
            />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Enter Password"
              name="password" 
             />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Confirm Password"
              name="password"                
            />
            
          </Form.Group>
          <Link to="/">
            <Button style={{ width: "250px" }} variant="primary" type="submit"
            >
              Submit
            </Button>
            
          </Link>
          <></> &nbsp;
          <></> &nbsp;
          <h4>OR</h4>
          <></> &nbsp;
          <></> &nbsp;
          <Link to="/SignupVendor">
            
            <Button style={{ width: "250px" }} variant="primary" type="submit">
              Signup as Vendor
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

export default SignUp;
