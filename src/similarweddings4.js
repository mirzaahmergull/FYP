import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './App.css';
import React, { Component }  from 'react';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';


const SimilarWeddings4 = () => {
    return ( 
        <div style={{marginTop: "50px", marginBottom: "50px"}}>
      <h4 style={{color:"rgb(162, 212, 242)"}}>Browse Similar Weddings</h4>
{' '}
        &nbsp;

             <Row xs={1} md={3} className="g-3">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://i.pinimg.com/originals/77/05/77/7705772e941ea2386960f3e3d0dcde0e.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
     <Link to="/Fatima" style={{ textDecoration: 'none'}}> <Card.Title>Kanwar Arsalan & Fatima Effendi</Card.Title></Link>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://shadiwelcome.com/uploads/real_wedding/21479111393.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/Aiza" style={{ textDecoration: 'none'}}><Card.Title>Kashif Qadri & Aiza Taimoor</Card.Title></Link>
      <Card.Text>
        Lahore.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://i.tribune.com.pk/media/images/1265137-___n-1481877637/1265137-___n-1481877637.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/Farhan" style={{ textDecoration: 'none'}}><Card.Title>Farhan Saeed & Urwa Hocane</Card.Title></Link>
      <Card.Text>
        Lahore
      </Card.Text>
    </Card.Body>
   
  </Card>
  
  </Row>

      </div>
     );
}
 
export default SimilarWeddings4;