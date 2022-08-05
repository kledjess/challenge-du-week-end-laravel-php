import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="bg-image position-relative z-index-1 bg-gradient-black pb-17 pt-24 pt-lg-32 pb-lg-28"
        css={`
        background-image: url("/image/l2/jpg/l2-hero-bg.jpg");
        `}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              md="9"
              lg="7"
              xl="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content section-title dark-mode-texts">
                <h1 className="gr-text-2 fw-bold mb-8 text-white">
                  Get help from the expert consultants.
                </h1>
                <p className="gr-text-8 pe-sm-7 pe-md-12 text-color-opacity">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within few
                  minutes.
                </p>
                <div className="hero-btns mt-10">
                  <Button className="with-icon gr-hover-y">
                    Get started now
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
