import Card from 'react-bootstrap/Card'

import './App.css';
import React  from 'react';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
const Cards = () => {
    return ( 

      
            <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="http://orientprinters.com/wp-content/uploads/2014/02/file-1-178x178.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Orient Printers</Card.Title></Link>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</Row>

     );
}
 
export default Cards;