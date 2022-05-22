import "../static/styles/App.css";
import React from "react";
import loc from "../static/svgs/geo-alt-fill.svg";
import tel from "../static/svgs/telephone-fill.svg";
import env from "../static/svgs/envelope.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "../static/imgs/output-onlinepngtools.png";
import arr from "../static/svgs/caret-right-fill.svg";
import aps from "../static/svgs/apple.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <></> &nbsp;
      <></> &nbsp;
      <Container>
        <Row lg="">
          <Col>
            <h3 style={{ color: "black", textAlign: "left" }}>
              {" "}
              &nbsp; &nbsp; &nbsp;Contact Us
            </h3>
            <ul
              style={{
                listStyle: "none",
                justifyContent: "left",
                textAlign: "left",
              }}
            >
              <li>
                <img
                  alt="logo"
                  src={loc}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;Main Market, Gulberg3, Lahore, &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Pakistan
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={tel}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;+923406192500
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={env}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <a
                  href="mailto:sanaf1333@gmail.com"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  info@shadiwelcome.com
                </a>
              </li>
              <></> &nbsp;
            </ul>
          </Col>
          <Col>
            <h3 style={{ color: "black", textAlign: "left" }}>
              &nbsp; &nbsp; &nbsp;Useful Links
            </h3>
            <ul style={{ listStyle: "none", textAlign: "left" }}>
              <li>
                <img
                  alt="logo"
                  src={arr}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <Link
                  to="/All"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Vendors{" "}
                </Link>
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={arr}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Articles
                </Link>
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={arr}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Photos
                </Link>
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={arr}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <Link
                  to="/AboutUs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About Us
                </Link>
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src={arr}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
                <span>&nbsp;</span>&nbsp;
                <Link
                  to="/ContactUs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact Us
                </Link>
              </li>
              <></>{" "}
            </ul>
          </Col>
          <Col>
            <h3 style={{ color: "black" }}>App Download</h3>
            <ul style={{ listStyle: "none" }}>
              <li>
                <img
                  alt="logo"
                  src={aps}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
              </li>
              <></> &nbsp;
              <li>
                <img
                  alt="logo"
                  src="https://shadiwelcome.com/images/footer/andropid.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
              </li>
              <></>{" "}
            </ul>
          </Col>
          <Col>
            <h3 style={{ color: "black" }}>Get in touch with us!</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "darkgrey" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <></> &nbsp;
        <></> &nbsp;
      </Container>
    </div>
  );
};

export default Footer1;
