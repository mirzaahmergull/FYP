import React from "react";
import "./static/styles/App.css";
import Button from "react-bootstrap/Button";
import fb from "./static/svgs/facebook.svg";
import Row from "react-bootstrap/Row";
import mi from "./static/imgs/im.png";
import Col from "react-bootstrap/Col";
import Galleryim from "./imgallery.js";
import r from "./static/imgs/review.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const IP1 = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Col>
        <img
          alt="logo"
          src={mi}
          width="800"
          height="400"
          className="d-inline-block align-top"
        />
        <h4>Starting price: NA</h4>
        <Link to="/Login">
          <Button variant="info">View Location</Button>
        </Link>{" "}
        <Link to="/Login">
          <Button variant="info">Send Inquiry</Button>
        </Link>{" "}
        <Link to="/Login">
          <Button variant="warning">View Contact and Email</Button>
        </Link>{" "}
        <p>Social and other links</p>
        <Link to="/Login">
          <img
            alt="logo"
            src={fb}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Link>
      </Col>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ color: "rgb(162, 212, 242)" }}>Gallery</h2>
        <Galleryim />
        <p>
          Travel & Culture Services is one of the best Honeymoon in Karachi. If
          you are looking for the best Honeymoon in Karachi and you like the
          work of Travel & Culture Services then send an inquiry now and we will
          connect you with Travel & Culture Services as soon as possibe. Travel
          & Culture Services is Tour-operator and Travel agent, licensed by the
          Ministry of Tourism Government of Pakistan to operate culture tours,
          adventure tours and trekking in Pakistan, for foreigners and
          Pakistanis. Our License Number is 2580
        </p>
      </div>
      <Link to="/Login">
        <img
          alt="logo"
          src={r}
          width="1000"
          height="500"
          className="d-inline-block align-top"
        />
      </Link>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h4 style={{ color: "rgb(162, 212, 242)" }}>Browse Similar Vendors</h4>{" "}
        &nbsp;
        <Row xs={1} md={3} className="g-3">
          <Card style={{ border: "none" }}>
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              variant="top"
              src="https://global.ctbuh.org/img/resources/4437-TKY1.jpg"
            />
            <Card.Body style={{ backgroundColor: "rgb(162, 212, 242)" }}>
              <Link to="/IP1" style={{ textDecoration: "none" }}>
                {" "}
                <Card.Title>Times Travel</Card.Title>
              </Link>
              <Card.Text>Islamabad</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ border: "none" }}>
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              variant="top"
              src="https://p1.pxfuel.com/preview/236/23/690/turkey-istanbul-istiklal-tram-royalty-free-thumbnail.jpg"
            />
            <Card.Body style={{ backgroundColor: "rgb(162, 212, 242)" }}>
              <Link to="/IP1" style={{ textDecoration: "none" }}>
                <Card.Title>Faith Tours</Card.Title>
              </Link>
              <Card.Text>Islamabad</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ border: "none" }}>
            <Card.Img
              style={{ width: "100%", height: "100%" }}
              variant="top"
              src="https://en.unesco.org/silkroad/sites/default/files/styles/350x350/public/photogallery/istanbul_blue_mosque.jpg?itok=DKWz7si-"
            />
            <Card.Body style={{ backgroundColor: "rgb(162, 212, 242)" }}>
              <Link to="/IP1" style={{ textDecoration: "none" }}>
                <Card.Title>Shiza Travel & Tours</Card.Title>
              </Link>
              <Card.Text>Islamabad</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default IP1;
