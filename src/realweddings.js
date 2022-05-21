import "./static/styles/App.css";
import React from "react";
import logo from "./static/svgs/heart.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const RealWeddings = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      {" "}
      &nbsp; &nbsp;
      <h2 style={{ color: "rgb(162, 212, 242)" }}>Browse Real Weddings</h2>
      <h4 style={{ color: "rgb(149, 150, 150)", fontFamily: "Cursive" }}>
        From quaint budget affairs, to glam black tie events- the most inspiring
        real wedding stories from around the world
      </h4>
      <p>
        We love couples and their unique stories - How they met and how they
        went about planning their big day! These are the best way to understand
        a vendor’s work. You can also read more about these weddings on the
        shadiwelcome Blog.
      </p>{" "}
      &nbsp;
      <div
        style={{
          borderTop: "2px solid #fff ",
          marginLeft: 20,
          marginRight: 20,
          color: "rgb(149, 150, 150)",
        }}
      >
        ______________________________________{" "}
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          color="rgb(149, 150, 150)"
        />{" "}
        ______________________________________
      </div>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div
        className="checkalign"
        style={{ marginLeft: "300px", marginTop: "50px" }}
      >
        <Container>
          <Row lg="auto" xs={1} md={2}>
            <Col>
              <Carousel fade style={{ width: "450px", height: "350px" }}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/21487527627.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/11487527627.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/41487528191.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/61487528191.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/11487528093.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i.pinimg.com/originals/92/0d/7d/920d7d374fbdeb68d649acdeee61d765.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i.edition.pk/large/2021/01/5ff2e25c67ba7.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/51487528191.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://www.brandsynario.com/wp-content/uploads/sanam-jung-baraat.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Link to="/Sanam" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "rgb(162, 212, 242)" }}>
                  Sanam Baloch & Qassam Jafri
                </h3>
              </Link>
              <div
                style={{
                  borderTop: "2px solid #fff ",
                  marginLeft: 20,
                  marginRight: 20,
                  color: "rgb(149, 150, 150)",
                }}
              >
                ___________________________________________________________
              </div>{" "}
              &nbsp; &nbsp;
            </Col>
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
            <Col>
              <Carousel fade style={{ width: "450px", height: "350px" }}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i.pinimg.com/originals/77/05/77/7705772e941ea2386960f3e3d0dcde0e.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="http://www.rewaj.pk/wp-content/uploads/2012/12/Fatima-effendi-and-Kanwar-Arsalan-Wedding-Marriage-Latest-Pictures91861830_2012121323370.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i0.wp.com/www.dailyinfotainment.com/wp-content/uploads/2019/07/1563901232_598_Actors-Fatima-Effendi-Arsalan-Kanwar-Spotted-at-Recent-Wedding.jpg?w=1200&ssl=1"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://www.bazaarr.com/sites/default/files/styles/large/public/clip_images/c7/39/c739f9e36fc9459676da1f80f88d68eb.jpg?itok=-eRFJdBg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i.pinimg.com/originals/f5/d8/08/f5d8084a93ed17201d184822c51fb4f2.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i1.wp.com/style.pk/wp-content/uploads/2018/01/Fatima-Effendi-and-Kanwar-Arsalan-at-a-Wedding-2.jpg?resize=577%2C585"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/11487527108.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Link to="/Fatima" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "rgb(162, 212, 242)" }}>
                  Kanwar Arsalan & Fatima Effendi
                </h3>
              </Link>
              <div
                style={{
                  borderTop: "2px solid #fff ",
                  marginLeft: 20,
                  marginRight: 20,
                  color: "rgb(149, 150, 150)",
                }}
              >
                ___________________________________________________________
              </div>{" "}
              &nbsp; &nbsp;
            </Col>
            <Col>
              <Carousel fade style={{ width: "450px", height: "350px" }}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/21479111393.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/131479111393.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/71479111393.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G08wzz8W113YfUbxLpiwsbqOuojZQ6SGXg&usqp=CAU"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/151479111393.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/171479111393.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://shadiwelcome.com/uploads/real_wedding/51479111393.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Link to="/Aiza" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "rgb(162, 212, 242)" }}>
                  Kashif Qadri & Aiza Taimoor
                </h3>
              </Link>
              <div
                style={{
                  borderTop: "2px solid #fff ",
                  marginLeft: 20,
                  marginRight: 20,
                  color: "rgb(149, 150, 150)",
                }}
              >
                ___________________________________________________________
              </div>
            </Col>
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
            <Col>
              <Carousel fade style={{ width: "450px", height: "350px" }}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://3.bp.blogspot.com/-vBr2iUs8ebE/WFbGy_O8Y5I/AAAAAAAAHXQ/qOH5aqZC9zEDIrFnQuGvzG1jROdtY8Q4ACLcB/s1600/urwa-shaadi.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://i.tribune.com.pk/media/images/1265137-___n-1481877637/1265137-___n-1481877637.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://4.bp.blogspot.com/-nQqMrgv9y0Q/WFV2iTEa7HI/AAAAAAAAHWY/GVNUT7_M_xws8whGK_cP3Tk4KT7Hqau6QCLcB/s1600/urwa-hocane-wedding-pics.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://www.thenews.com.pk//assets/uploads/updates/2018-05-25/321297_668650_updates.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://www.geo.tv/assets/uploads/updates/2021-02-26/337061_460241_updates.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://newfashionelle.com/wp-content/uploads/2016/12/urwa-hocane-wedding-pics.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 setimgsize1"
                    src="https://style.pk/wp-content/uploads/2016/12/Urwa-Farhan-Wedding-Pictures-1.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Link to="/Farhan" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "rgb(162, 212, 242)" }}>
                  Farhan Saeed & Urwa Hocane
                </h3>
              </Link>
              <div
                style={{
                  borderTop: "2px solid #fff ",
                  marginLeft: 20,
                  marginRight: 20,
                  color: "rgb(149, 150, 150)",
                }}
              >
                ___________________________________________________________
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RealWeddings;
