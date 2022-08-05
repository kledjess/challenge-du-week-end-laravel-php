import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <>
      {/* <!-- Features Area --> */}
      <div className="feature-section pt-16 pt-lg-25 dark-mode-texts">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-13 mb-lg-23">
                <h2 className="title gr-text-3 text-white">
                  We made this app to solve your problems.
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon1.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">Unlimited Projects</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon2.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">Team Management</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon3.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">File Sharing</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon4.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">Video Meetings</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon5.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">Time Tracking</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green me-sm-9 mb-7 mb-lg-0">
                  <img className="" src={"/image/svg/l6-feature-icon6.svg"} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5 text-white">Payment System</h3>
                  <p className="gr-text-9 gr-text-color-opacity text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-12">
              <div className="border-sm-divider dark text-center mt-lg-13"></div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Features;
