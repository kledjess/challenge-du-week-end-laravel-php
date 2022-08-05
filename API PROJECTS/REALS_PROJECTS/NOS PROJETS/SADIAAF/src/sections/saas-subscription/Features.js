import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="feature-section bg-default-1 pb-4 pb-lg-13 ">
        <Container>
          <Row>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pe-lg-7 pe-xl-12">
                  <div className="icon-wrap">
                    <img src={"/image/svg/l1-feature-icon1.svg"} alt="" />
                  </div>
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 heading-color mb-7">Project management</h5>
                    <p className="gr-text-9 text-color-opacity pe-xl-4">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pe-lg-7 pe-xl-12">
                  <img src={"/image/svg/l1-feature-icon2.svg"} alt="" />
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 heading-color mb-7">Time tracking</h5>
                    <p className="gr-text-9 text-color-opacity pe-xl-4">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pe-lg-7 pe-xl-12">
                  <img src={"/image/svg/l1-feature-icon3.svg"} alt="" />
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 heading-color mb-7">Beautiful mobile app</h5>
                    <p className="gr-text-9 text-color-opacity pe-xl-4">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
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
