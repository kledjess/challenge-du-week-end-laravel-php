import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Fearures = () => {
  return (
    <>
      {/* <!-- Fearures Area --> */}
      <div className="feature-section border-top bg-default-2 pt-15 pt-lg-22 pb-9 pb-md-0 pb-lg-17">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="500"
              >
                <div className="widget-icon me-8">
                  <img src={"/image/svg/l4-feature-icon1.svg"} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                    Organize your campaigns
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1000"
              >
                <div className="widget-icon me-8">
                  <img src={"/image/svg/l4-feature-icon2.svg"} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                    Manage customers
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1500"
              >
                <div className="widget-icon me-8">
                  <img src={"/image/svg/l4-feature-icon3.svg"} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 fw-bold mb-6 heading-color">
                    Track progress fast
                  </h3>
                  <p className="gr-text-9 mb-0 text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fearures;
