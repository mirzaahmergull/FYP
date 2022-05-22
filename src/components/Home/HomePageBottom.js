import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tick from "../../static/svgs/arrow-right-circle.svg";

const C5 = () => {
  return (
    <Container>
      <Row lg="">
        <Col>
          <h3 style={{ color: "darkgray", textAlign: "left" }}>INTRODUCING</h3>
          <h1 style={{ color: "rgb(162, 212, 242)", textAlign: "left" }}>
            World's First Wedding App
          </h1>
          <></> &nbsp;
          <></> &nbsp;
          <ul className="textalign arrow" style={{ listStyle: "none" }}>
            <li>
              <img
                alt="logo"
                src={tick}
                width="20"
                height="20"
                className="d-inline-block align-top"
              />
              <span>&nbsp;</span>&nbsp;Get wishes from your loved ones
            </li>
            <></> &nbsp;
            <li>
              <img
                alt="logo"
                src={tick}
                width="20"
                height="20"
                className="d-inline-block align-top"
              />
              <span>&nbsp;</span>&nbsp;Create & manage events
            </li>
            <></> &nbsp;
            <li>
              <img
                alt="logo"
                src={tick}
                width="20"
                height="20"
                className="d-inline-block align-top"
              />
              <span>&nbsp;</span>&nbsp;Share photos & get candid
            </li>
            <></> &nbsp;
            <li>
              <img
                alt="logo"
                src={tick}
                width="20"
                height="20"
                className="d-inline-block align-top"
              />
              <span>&nbsp;</span>&nbsp;Invite guests
            </li>
            <></> &nbsp;
            <li>
              <img
                alt="logo"
                src={tick}
                width="20"
                height="20"
                className="d-inline-block align-top"
              />
              <span>&nbsp;</span>&nbsp;Tell your wedding stories
            </li>
            <></> &nbsp;
          </ul>
          <Col>
            <img
              alt=""
              src="https://aws1.discourse-cdn.com/turtlehead/original/2X/e/ee0e6fd4d6ad3283ce1b38e28481a51cb25a9dac.png"
              width="100%"
              height="100%"
              className="d-inline-block align-top"
            />
          </Col>
        </Col>
        <Col>
          <div>
            <img
              alt=""
              src="https://shadiwelcome.com/img/mobile.png"
              width="680"
              height="400"
              className="d-inline-block align-top"
            />{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default C5;
