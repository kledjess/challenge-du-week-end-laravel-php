import React from "react";
import { Container, Row, Col } from "react-bootstrap";



const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section pt-14 pt-lg-25 pb-7 pb-lg-11 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-13 mb-lg-23">
              
              <h2 className="title gr-text-4 heading-color">
                Partenaires
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            <Row className="align-items-center justify-content-center">
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 me-9 gr-bg-blue-opacity-1">
                    <img src={"/image/svg/l5-feature-icon1.svg"} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6 heading-color">
                      Dedicated project manager
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 me-9 gr-bg-red-opacity-1">
                    <img src={"/image/svg/l5-feature-icon2.svg"} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6 heading-color">Organized tasks</h3>
                    <p className="gr-text-9 mb-0 pr-11 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 me-9 gr-bg-green-opacity-1">
                    <img src={"/image/svg/l5-feature-icon3.svg"} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6 heading-color">
                      Easy feedback sharing
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 me-9 gr-bg-blackish-blue-opacity-1">
                    <img src={"/image/svg/l5-feature-icon4.svg"} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6 heading-color">
                      Never miss deadline
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11 text-color-opacity">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Feature;
