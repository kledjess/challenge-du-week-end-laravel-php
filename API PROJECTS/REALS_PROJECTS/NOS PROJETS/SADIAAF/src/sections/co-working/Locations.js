import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../../components/Link";


const Locations = () => (
  <>
    {/* <!-- Locations section --> */}
    <div className="location-section bg-default-4 pt-14 pb-7 py-lg-23">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="9">
            <div className="section-title text-center mb-11 mb-lg-19">
              <h2 className="title gr-text-3 heading-color mb-7">Popular locations</h2>
              <p className="gr-text-8 px-lg-8 mb-0 text-color-opacity">
                With lots of unique blocks, you can easily build a page easily
                without any coding.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1000">
            <div className="location-card mb-9 gr-hover-scale-img">
              <Link to="/#" className="card-img">
                <img src={"/image/coworking/jpg/location-card1.jpg"} alt="" className="w-100 rounded-10" />
              </Link>
              <div className="card-content px-5 pt-9 text-center">
                <Link to="/#">
                  <h3 className="title gr-text-6 mb-2 heading-color">Beauview</h3>
                </Link>
                <p className="gr-text-11 mb-0 d-inline-block gr-text-color-opacity">
                  37 seats
                </p>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" data-aos="fade-up" data-aos-duration="1000">
            <div className="location-card mb-9 gr-hover-scale-img">
              <Link to="/#" className="card-img">
                <img src={"/image/coworking/jpg/location-card2.jpg"} alt="" className="w-100 rounded-10" />
              </Link>
              <div className="card-content px-5 pt-9 text-center">
                <Link to="/#">
                  <h3 className="title gr-text-6 mb-2 heading-color">Haleyborough</h3>
                </Link>
                <p className="gr-text-11 mb-0 d-inline-block gr-text-color-opacity">
                  12 seats
                </p>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" data-aos="fade-left" data-aos-duration="1000">
            <div className="location-card mb-9 gr-hover-scale-img">
              <Link to="/#" className="card-img">
                <img src={"/image/coworking/jpg/location-card3.jpg"} alt="" className="w-100 rounded-10" />
              </Link>
              <div className="card-content px-5 pt-9 text-center">
                <Link to="/#">
                  <h3 className="title gr-text-6 mb-2 heading-color">Jeromyshire</h3>
                </Link>
                <p className="gr-text-11 mb-0 d-inline-block gr-text-color-opacity">
                  28 seats
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Locations;
