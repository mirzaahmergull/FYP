import Flippy, { FrontSide, BackSide } from "react-flippy";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useRef } from "react";
import "./static/styles/App.css";
import { Link } from "react-router-dom";

function CardFlip() {
  const ref = useRef();
  return (
    <div>
      <Container>
        <Row lg="auto">
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "350px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg"
                  src="https://onlineads.pk/wp-content/uploads/2020/10/pakistani-brial-outfits-1-440x330.jpg"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Choose the perfect wedding outfit matching your fairytale
                  fantasy within your budget. Or leave the hassle on us to
                  select the best one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "300px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg2"
                  src="https://5.imimg.com/data5/SELLER/Default/2021/3/TD/FI/BB/588385/african-jewellery-500x500.jpg"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Select from the diverse range of perfect jwellery matching
                  your aspirations and desires. Or leave the hassle on us to
                  select the perfect one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>

          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "350px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg"
                  src="http://page3magazine.com/wp-content/uploads/2020/01/5-1-300x300.jpg"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Find the best makeup artist in your town to get the most
                  desired and sizzling look for your wedding. Or leave the
                  hassle on us to select the best one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>
        </Row>
      </Container>
      <></> &nbsp;
      <h3 className="names">
        <Link
          to="/VendorWear"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Outfit
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp; &nbsp;&nbsp;{" "}
        <Link
          to="/VendorJwellery"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Jwellery
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link
          to="/VendorMakeup"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          {" "}
          Makeup & Hair
        </Link>
      </h3>
      <h5 className="names">
        _____________________________________________________________________________________________________________________________________________________________________
      </h5>
      <></> &nbsp;
      <Container>
        <Row lg="auto">
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "350px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg"
                  src="https://www.luxurymywedding.com/img/hospitality-vendor.jpg"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Find the most famous and exotic venue collections for your
                  perfect wedding day. Or leave the hassle on us to select the
                  best one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>

          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "300px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg2"
                  src="https://i0.wp.com/bhalajephotography.com/wp-content/uploads/2019/04/IMG_8774-450x350.jpg?fit=450%2C350&ssl=1"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Get lost in diverse variety of best photographers in town.
                  Select your dream wedding shoot or leave the hassle on us to
                  select the best one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>

          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref} // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "420px", height: "350px" }} /// these are optional style, it is not necessary
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <FrontSide
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
              >
                <img
                  className="cardimg"
                  src="https://anthonyvparis.com/wp-content/uploads/2019/05/LeSecretdAudreyShaokai-493-2-450x350.jpg"
                  alt="dresses"
                />
              </FrontSide>
              <BackSide
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(197deg 84% 80%) 0%, hsl(198deg 87% 77%) 11%,hsl(199deg 90% 75%) 22%,hsl(200deg 92% 72%) 33%,hsl(201deg 94% 70%) 44%,hsl(201deg 96% 67%) 56%,hsl(201deg 97% 64%) 67%,hsl(202deg 98% 61%) 78%,hsl(201deg 99% 57%) 89%,hsl(200deg 100% 50%) 100%)",
                }}
              >
                <br></br>
                <br></br>

                <div className="setfont">
                  Mount the wedding fun by choosing from best entertainment
                  providers, Dj's, celebrities, band baja and more. Or leave the
                  hassle on us to select the best one for you.
                </div>
              </BackSide>
            </Link>
          </Flippy>
        </Row>
      </Container>
      <></> &nbsp;
      <h3 className="names">
        <Link
          to="/VendorVenue"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Venue
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{" "}
        <Link
          to="/VendorPhoto"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Photography
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <Link
          to="/VendorEntertainment"
          style={{ textDecoration: "none", color: "darkgray" }}
        >
          Entertainment
        </Link>
      </h3>
      <h5 className="names">
        _____________________________________________________________________________________________________________________________________________________________________
      </h5>
      <></> &nbsp;
    </div>
  );
}

export default CardFlip;
