import './App.css';
import React, { Component }  from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'

const ContactUs = () => {
    return ( 
        
        <div className="border  rounded-3 border border-2 justify-content-md-center" style={{borderWidth: "2", borderColor: "gray", marginLeft: "450px", marginRight: "350px", marginTop: "10px", marginBottom:"10px"}}>
            <div className="checkalign">
            <></>{' '}
        &nbsp;
        <></>{' '}
        &nbsp;
        <Form className="justify-content-md-center">
            <Form.Label style={{fontSize: "50px"}}>Contact Us</Form.Label>
        <Form.Group className="mb-3 justify-content-md-center" controlId="formBasicEmail">
            <Form.Label style={{fontSize: "20px"}}>Name</Form.Label>
            <Form.Control style={{width: "350px", height: "100%"}} type="name" placeholder="Name" />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width: "350px"}} type="email" placeholder="Enter email" />
            
        </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control style={{width: "350px"}} type="number" placeholder="Enter contact" />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control style={{width: "350px"}} as="textarea" rows={6} placeholder="Enter Message" />
            
        </Form.Group>
        
        <Button style={{width: "250px"}} variant="primary" type="submit">
            Submit
        </Button>
        <></>{' '}
        &nbsp;
        <></>{' '}
        &nbsp;
        </Form>
        </div>
        <></>{' '}
        &nbsp;<></>{' '}
        &nbsp;
        </div>
        
     );
}
 
export default ContactUs;