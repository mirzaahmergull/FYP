import Carousel from "react-bootstrap/Carousel";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../static/styles/App.css";
import React from "react";

const Component2 = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block photo"
          src="https://www.thelookhair.com/wp-content/uploads/2021/02/brides.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                    
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://www.risonare-wedding.com/en/photowedding/img/top/mv01.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                   
                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                    
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://i0.wp.com/www.surefiretrio.com/wp-content/uploads/2019/08/gay-couple-celebrating-wedding-in-garden-min.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                    
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://arabiantents.com/wp-content/uploads/2021/03/Arabian-Tents--scaled.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                   
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://rosettedesigns.com/wp-content/uploads/2020/11/Landing-Page-Banner-for-Early-Bird-Campaign-3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                    
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://blog.bridals.pk/wp-content/uploads/2018/10/hanginc-decor-banner.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>

                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>
                    
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block photo"
          src="https://weddingsonly.sgp1.cdn.digitaloceanspaces.com/blogger/ecc43b97097a2ded4a118823c8500fda/large/Wedding-Decor-Theme-4-1-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>
            Your <span className="wedding">Wedding</span> Your Way
          </h2>
          <p>Find the best wedding vendors with thousands of trusted reviews</p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Container>
              <Row lg="auto" className="justify-content-md-center">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select vendor type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/VendorPhoto">
                      Photographers
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorMakeup">
                      Bridal Makeup
                    </Dropdown.Item>
                    <Dropdown.Item href="VendorGrom">
                      Groom Salons
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorPlanner">
                      Wedding Planners
                    </Dropdown.Item>
                    <Dropdown.Item href="/VendorVenue">Venue</Dropdown.Item>
                    <Dropdown.Item href="/VendorCaterer">
                      Caterers
                    </Dropdown.Item>                   
                    <Dropdown.Item href="/VendorHoneymoon">
                      Honeymoon
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Container>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Component2;
