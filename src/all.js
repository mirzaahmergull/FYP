import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './App.css';
import React, { Component }  from 'react';
import Row from 'react-bootstrap/Row'
import ScMenu from './scrollMenu.js';
import { Link } from 'react-router-dom';

const All = () => {
    return ( 
        <div style={{marginTop: "50px", marginBottom: "50px"}}>
            <ScMenu></ScMenu>

        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Photographers</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://shadiwelcome.com/image.php?image=https://shadiwelcome.com/uploads/real_wedding/my_14744648772003609851.jpg&quality=70&width=290" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>SAMS COLORAMA PHOTOGRAPHIC SERVICES</Card.Title>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://shadiwelcome.com/uploads/real_wedding/my_15454927241374457833.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Nawab Sons</Card.Title>
      <Card.Text>
        Lahore.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://eventronemedia.s3.amazonaws.com/media/portfolioimages/22365168_1717550851611634_4139780347095521183_n.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Alivation Media</Card.Title>
      <Card.Text>
        Lahore
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://eventronemedia.s3.amazonaws.com/media/portfolioimages/Azeemi_Studio1.jpg
" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Azeemi Studio</Card.Title>
      <Card.Text>
        Lahore
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Row>
            </div>
        </div>


            <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Bridal Makeup</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/originals/9b/c9/36/9bc936b55d8659d8b3fc449a7c5fa1fb.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Diva Beauty Salon</Card.Title>
      <Card.Text>
       Lahore  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/736x/69/42/88/694288348cfc90ab98903853628d997f.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Innovations Beauty Salon</Card.Title>
      <Card.Text>
        Karachi  
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/474x/f7/26/19/f72619fda54802fcf5152f1f6cd14b45.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Madeeha’s Bridal Salon</Card.Title>
      <Card.Text>
       Islamabad  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/originals/9c/63/81/9c63810cc5d496cf698f84a30032ae12.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Feme Makeup Studio and Salon</Card.Title>
      <Card.Text>
        Lahore  
      </Card.Text>
    </Card.Body>
   
  </Card>
  </Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Bridal Wear</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/originals/6d/4b/25/6d4b251071db3c943a6ef64616563692.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Nina G Beauty Parlor</Card.Title>
      <Card.Text>
        Karachi  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/originals/9a/36/d1/9a36d19fff83e85dfd0429fc5f15ba7e.jpg
" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Maram & Aabroo Salon </Card.Title>
      <Card.Text>
       Lahore  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/originals/d1/1f/f0/d11ff06b3a6b3199156c34b6e2eaa8fb.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Rose Beauty Parlor</Card.Title>
      <Card.Text>
        Karachi  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/736x/96/b2/05/96b205e65feac8bdfda9214a5a295bf3.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Zara’s Beauty Parlor</Card.Title>
      <Card.Text>
        Islamabad  
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Cards & Invitations</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
               <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="http://orientprinters.com/wp-content/uploads/2014/02/file-1-178x178.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Orient Printers</Card.Title>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Honeymoon</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://global.ctbuh.org/img/resources/4437-TKY1.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
     <Link to="/IP1" style={{ textDecoration: 'none'}}> <Card.Title>Times Travel</Card.Title></Link>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://p1.pxfuel.com/preview/236/23/690/turkey-istanbul-istiklal-tram-royalty-free-thumbnail.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Faith Tours</Card.Title></Link>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>

  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://en.unesco.org/silkroad/sites/default/files/styles/350x350/public/photogallery/istanbul_blue_mosque.jpg?itok=DKWz7si-" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Shiza Travel & Tours</Card.Title></Link>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://p0.pxfuel.com/preview/213/935/618/boat-river-bosphorus-turkey-royalty-free-thumbnail.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Bukhari Group</Card.Title></Link>
      <Card.Text>
        Islamabad
      </Card.Text>
    </Card.Body>
    
  </Card>
  </Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Jewellery</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/640x/3d/45/4b/3d454ba7040c2227625a454c55783c5e.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Haji Yahya Ghulam Ghaus jew...</Card.Title>
      <Card.Text>
        Karachi  
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/236x/fc/08/3d/fc083d65d71f8b14154379bce8ef9e5c.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Salman Bright Electoplating</Card.Title>
      <Card.Text>
        Lahore  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://blog.bridals.pk/wp-content/uploads/2019/01/jaipur-1-min-1.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Khanz Jewellers</Card.Title>
      <Card.Text>
       Lahore  
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img  style={{width:"100%", height:"100%"}} variant="top" src="https://i.pinimg.com/564x/42/db/9c/42db9c8f3d4c5fc792b4ae3954303541.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Card.Title>Hanif Jewellers</Card.Title>
      <Card.Text>
        Karachi  
      </Card.Text>
    </Card.Body>
   
  </Card>
  </Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Venue</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://i.pinimg.com/originals/c6/38/2c/c6382c839704e7b88ff00968865210d8.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
     <Link to="/IP1" style={{ textDecoration: 'none'}}> <Card.Title>Topaz Event Complex</Card.Title></Link>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dZQ6Ee-T6VyIVM0o-Z_-4F-nDVAR9bRHrTHGdFr6IJxnTdg9egAPciCI57dFQoVvJiA&usqp=CAU" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Zafar Marquee</Card.Title></Link>
      <Card.Text>
        Lahore.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://www.popthecorkdesigns.com/wp-content/uploads/2020/04/STK_6634_websize-1024x683.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Avari Towers</Card.Title></Link>
      <Card.Text>
        Lahore
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://www.weddingrule.com/directory/wp-content/uploads/2021/04/Mt.-Washington-Mill-Dye-House-10.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Asif Center Banquet Hall</Card.Title></Link>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
   
  </Card>
  </Row>
            </div>
        </div>


        <div style={{marginTop: "50px", marginBottom: "50px"}}>

            <h4>Wedding Planners</h4>
            <p style={{color: "gray"}}>______________________________________________</p>


            <div>
                <Row xs={1} md={4} className="g-4">
   <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://i.pinimg.com/originals/c6/38/2c/c6382c839704e7b88ff00968865210d8.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>The Palm</Card.Title></Link>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dZQ6Ee-T6VyIVM0o-Z_-4F-nDVAR9bRHrTHGdFr6IJxnTdg9egAPciCI57dFQoVvJiA&usqp=CAU" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Tuplip Events</Card.Title></Link>
      <Card.Text>
        Lahore.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}} variant="top" src="https://www.popthecorkdesigns.com/wp-content/uploads/2020/04/STK_6634_websize-1024x683.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Mubarak Caterers & Decorators</Card.Title></Link>
      <Card.Text>
        Lahore
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{border:"none"}} >
    <Card.Img style={{width:"100%", height:"100%"}}  variant="top" src="https://www.weddingrule.com/directory/wp-content/uploads/2021/04/Mt.-Washington-Mill-Dye-House-10.jpg" />
    <Card.Body style={{backgroundColor: "rgb(162, 212, 242)"}}>
      <Link to="/IP1" style={{ textDecoration: 'none'}}><Card.Title>Asian Events & Catering Com...</Card.Title></Link>
      <Card.Text>
        Karachi
      </Card.Text>
    </Card.Body>
   
  </Card>
  </Row>
            </div>
        </div>


        
        </div>
     );
}
 
export default All;