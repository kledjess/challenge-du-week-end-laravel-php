import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section bg-default-4 pt-8 pt-lg-15 pb-2 pb-lg-17">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" lg="4" className="mb-12">
            <div className="feature-widget d-sm-flex">
              <div className="widget-icon gr-text-4 text-blue me-8 mb-7 mb-md-0">
                <img className="" src={"/image/svg/desk-drawer.svg"} alt="feature" />
              </div>
              <div className="content">
                <h3 className="title heading-color gr-text-7 mb-6">Dedicated Desk</h3>
                <p className="gr-text-9 text-color-opacity gr-text-color-opacity mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className="mb-12">
            <div className="feature-widget d-sm-flex">
              <div className="widget-icon gr-text-4 text-blue me-8 mb-7 mb-md-0">
                <img className="" src={"/image/svg/wifi.svg"} alt="feature" />
              </div>
              <div className="content">
                <h3 className="title heading-color gr-text-7 mb-6">High Speed Internet</h3>
                <p className="gr-text-9 text-color-opacity gr-text-color-opacity mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className="mb-12">
            <div className="feature-widget d-sm-flex">
              <div className="widget-icon gr-text-4 text-blue me-8 mb-7 mb-md-0">
                <img className="" src={"/image/svg/mug.svg"} alt="feature" />
              </div>
              <div className="content">
                <h3 className="title heading-color gr-text-7 mb-6">Unlimited Coffee</h3>
                <p className="gr-text-9 text-color-opacity gr-text-color-opacity mb-0">
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

export default Feature;
